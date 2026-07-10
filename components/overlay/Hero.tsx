"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

type HeroImageItemProps = {
  url: string;
  idToAnimate: string;
  id: string;
};

const FALLBACK_HERO_IMAGE = "/sample-hero.jpg";
const MIN_ROW_IMAGE_COUNT = 6;

function createPlaceholderItems(count: number): HeroImageItemProps[] {
  return Array.from({ length: count }, () => ({
    url: FALLBACK_HERO_IMAGE,
    idToAnimate: "",
    id: "",
  }));
}

function buildRowItems(urls: string[], minItems: number): HeroImageItemProps[] {
  if (!urls.length) {
    return createPlaceholderItems(minItems);
  }

  return Array.from(
    { length: Math.max(minItems, urls.length) },
    (_, index) => ({
      url: urls[index % urls.length],
      idToAnimate: "",
      id: "",
    }),
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [topImages, setTopImages] = useState<HeroImageItemProps[]>(() =>
    createPlaceholderItems(MIN_ROW_IMAGE_COUNT),
  );
  const [bottomImages, setBottomImages] = useState<HeroImageItemProps[]>(() =>
    createPlaceholderItems(MIN_ROW_IMAGE_COUNT),
  );
  const [idToAnimate, setIdToAnimate] = useState<string>("");
  const [visibleHeroImageIds, setVisibleHeroImageIds] = useState<string[]>([]);
  const visibleHeroImageIdsRef = useRef<string[]>([]);
  const visibleHeroImageIdsSet = useRef(new Set<string>());
  const animationCycleRef = useRef<gsap.core.Timeline | null>(null);
  const animationRunningRef = useRef(false);
  const cycleScheduledRef = useRef(false);
  const cycleTimeoutRef = useRef<number | null>(null);
  const hasPlayedIntroRef = useRef(false);

  const scrollSpeed = 100;

  useEffect(() => {
    const controller = new AbortController();

    const loadHeroImages = async () => {
      try {
        const response = await fetch("/api/hero-images", {
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { images?: string[] };
        const heroImages = Array.isArray(data.images)
          ? data.images.filter((imagePath) => typeof imagePath === "string")
          : [];

        if (!heroImages.length) {
          return;
        }

        const topRowUrls = heroImages.filter((_, index) => index % 2 === 0);
        const bottomRowUrls = heroImages.filter((_, index) => index % 2 === 1);

        setTopImages(buildRowItems(topRowUrls, MIN_ROW_IMAGE_COUNT));
        setBottomImages(
          buildRowItems(
            bottomRowUrls.length ? bottomRowUrls : [...topRowUrls].reverse(),
            MIN_ROW_IMAGE_COUNT,
          ),
        );
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          return;
        }
      }
    };

    loadHeroImages();

    return () => {
      controller.abort();
    };
  }, []);

  const scheduleCycle = () => {
    if (cycleScheduledRef.current || animationRunningRef.current) {
      return;
    }

    const visibleIds = visibleHeroImageIdsRef.current;
    if (!visibleIds.length) {
      return;
    }

    cycleScheduledRef.current = true;
    if (cycleTimeoutRef.current) {
      window.clearTimeout(cycleTimeoutRef.current);
    }

    cycleTimeoutRef.current = window.setTimeout(() => {
      cycleScheduledRef.current = false;
      startCycle();
    }, 10000);
  };

  const startCycle = () => {
    if (animationRunningRef.current) {
      return;
    }

    const visibleIds = visibleHeroImageIdsRef.current;
    const topVisible = visibleIds.filter((id) => id.startsWith("top-row-"));
    const bottomVisible = visibleIds.filter((id) =>
      id.startsWith("bottom-row-"),
    );
    if (!topVisible.length && !bottomVisible.length) {
      return;
    }

    const topId = topVisible.length
      ? topVisible[Math.floor(Math.random() * topVisible.length)]
      : "";
    const bottomId = bottomVisible.length
      ? bottomVisible[Math.floor(Math.random() * bottomVisible.length)]
      : "";

    const cycle = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    if (topId) {
      cycle.call(() => setIdToAnimate(topId));
      cycle.to({}, { duration: 6 });
      cycle.call(() => setIdToAnimate(""));
      cycle.to({}, { duration: 0.5 });
    }

    if (bottomId) {
      cycle.call(() => setIdToAnimate(bottomId));
      cycle.to({}, { duration: 6 });
      cycle.call(() => setIdToAnimate(""));
    }

    cycle.eventCallback("onComplete", () => {
      animationRunningRef.current = false;
      scheduleCycle();
    });

    animationRunningRef.current = true;
    animationCycleRef.current = cycle;
  };

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) {
            return;
          }

          if (entry.isIntersecting) {
            visibleHeroImageIdsSet.current.add(id);
          } else {
            visibleHeroImageIdsSet.current.delete(id);
          }
        });

        const nextVisibleIds = Array.from(visibleHeroImageIdsSet.current);
        visibleHeroImageIdsRef.current = nextVisibleIds;
        setVisibleHeroImageIds(nextVisibleIds);
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      },
    );

    const imageElements = containerRef.current.querySelectorAll<HTMLElement>(
      "[id^='top-row-'], [id^='bottom-row-']",
    );

    imageElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    scheduleCycle();
  }, [visibleHeroImageIds]);

  useEffect(() => {
    return () => {
      if (cycleTimeoutRef.current) {
        window.clearTimeout(cycleTimeoutRef.current);
      }
      animationCycleRef.current?.kill();
    };
  }, []);

  //Here i will describe how my animations should work
  useGSAP(() => {
    if (!window || !trackRef.current) {
      return;
    }

    const hasPlayedIntro =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("abk-home-intro-played") === "true";

    hasPlayedIntroRef.current = hasPlayedIntro;

    if (hasPlayedIntro) {
      gsap.set("#logoAndName", {
        left: 0,
        top: 0,
        xPercent: 0,
        yPercent: 0,
      });
      gsap.set("#CompanyName", { width: "auto" });
      gsap.set("#homePage", { opacity: 1 });
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          window.sessionStorage.setItem("abk-home-intro-played", "true");
          hasPlayedIntroRef.current = true;
        },
      });

      // First name the company name visible
      tl.fromTo("#CompanyName", { width: 0 }, { width: 280, duration: 3 })

        //Move the  logo from being centered to its original position
        .fromTo(
          "#logoAndName",
          {
            left: () => window.innerWidth / 2,
            top: () => window.innerHeight / 2,
            xPercent: -50,
            yPercent: -50,
          },
          {
            left: 0,
            top: 0,
            xPercent: 0,
            yPercent: 0,
            duration: 2,
          },
        )
        //Make the contents of the home page visible
        .fromTo("#homePage", { opacity: 0 }, { opacity: 1, duration: 2 });
    }

    // When the first element in the scroll reached about 70% of the screen size make the ripples effect
    gsap.to(".siren", {
      width: 1000,
      scale: 1,
      opacity: 0,
      repeat: -1,
      duration: 4,
      delay: 8,
    });

    // this animations will  be attached to the scroll progress, such that the take effect when the hero is half to the top and scrubs
    gsap.to("#heroSection", {
      rotationX: 90,
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top -20%",
        end: "bottom center", // Continues progressing well after the header
        scrub: 1, // Ultra-smooth progression
        // markers: { startColor: "green", endColor: "red" },
      },
    });
    // this animations will  be attached to the scroll progress, such that the take effect when the hero is half to the top and scrubs
    gsap.to(".navLinks", {
      top: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top -10%",
        end: "bottom center", // Continues progressing well after the header
        scrub: 1, // Ultra-smooth progression
      },
    });

    gsap.to(".industries-item", {
      opacity: 1,
      translateY: 0,
      duration: 2,
      ease: "power4.in",
      scrollTrigger: {
        trigger: "#industries-list",
        start: "top 80%",
      },
      stagger: 1,
    });
  }, [trackRef.current]);

  return (
    <section
      id="heroSection"
      className=" bg-black h-screen w-full overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex flex-col h-full justify-between gap-2 py-4 overflow-hidden"
      >
        <div className="flex-1 " ref={trackRef}>
          <HeroImageSrollBox
            className="hero-scroll-top relative"
            images={[...topImages, ...topImages].map((item, index) => ({
              ...item,
              id: "top-row-" + index,
              idToAnimate,
            }))}
          />
        </div>
        <HeroPulseBar />
        <div className="flex-1 ">
          <HeroImageSrollBox
            className="pl-10 hero-scroll-bottom"
            images={[...bottomImages, ...bottomImages].map((item, index) => ({
              ...item,
              id: "bottom-row-" + index,
              idToAnimate,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

function HeroScrollImageItem({ idToAnimate, url, id }: HeroImageItemProps) {
  const imageHolderRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const originalWidth = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function createAnimateTimeline() {
    if (!imageHolderRef.current || !imageRef.current) {
      return null;
    }

    const holder = imageHolderRef.current;
    const image = imageRef.current;
    const original = originalWidth.current || holder.offsetWidth;
    originalWidth.current = original;

    return gsap
      .timeline({ defaults: { duration: 0.4, ease: "power2.inOut" } })
      .to(holder, {
        border: 4,
        borderRadius: "9999px",
        width: holder.offsetHeight,
      })
      .to(
        image,
        {
          border: 4,
          borderRadius: "9999px",
        },
        "<",
      )
      .to(holder, {
        opacity: 0,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
      })
      .to(holder, {
        opacity: 1,
        duration: 0.1,
      })
      .to({}, { duration: 3 })
      .to(holder, {
        border: 0,
        borderRadius: "12px",
        width: original,
      })
      .to(
        image,
        {
          border: 0,
          borderRadius: "12px",
        },
        "<",
      );
  }

  useLayoutEffect(() => {
    if (imageHolderRef.current && !originalWidth.current) {
      originalWidth.current = imageHolderRef.current.offsetWidth;
    }
  }, [imageHolderRef]);

  useEffect(() => {
    if (idToAnimate !== id) {
      return;
    }

    const tl = createAnimateTimeline();
    return () => {
      tl?.kill();
    };
  }, [idToAnimate, id]);

  return (
    <div
      id={id}
      ref={imageHolderRef}
      className=" relative h-full aspect-video border-yellow-200 rounded-md hover:scale-105 duration-300 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="  w-full h-full  overflow-hidden">
        <Image
          ref={imageRef}
          src={url}
          alt="hero image"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover rounded-md opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            (e.currentTarget as HTMLImageElement).classList.remove("opacity-0");
          }}
        />
      </div>
      <div className=" absolute inset-0 bg-black/30 rounded-md hover:opacity-0"></div>
    </div>
  );
}

function HeroImageSrollBox(props: {
  className?: string;
  images: HeroImageItemProps[];
}) {
  const isTop = props.className?.includes("hero-scroll-top");
  const isBottom = props.className?.includes("hero-scroll-bottom");
  const duration = isTop ? 60 : isBottom ? 65 : null;
  const animation = isTop
    ? "marquee-left 60s linear infinite"
    : isBottom
      ? "marquee-right 65s linear infinite"
      : undefined;
  // Computed once on mount so re-renders never reset the animation mid-scroll
  const animationDelayRef = useRef(
    duration ? `-${Math.floor(Date.now() / 1000) % duration}s` : undefined,
  );
  const animationDelay = animationDelayRef.current;

  return (
    <>
      <div
        className={`flex flex-nowrap gap-4 items-center h-full relative ${props.className}`}
        style={
          animation
            ? { animation, animationDelay, minWidth: "max-content" }
            : { minWidth: "max-content" }
        }
      >
        {props.images.map((item, i) => (
          <HeroScrollImageItem key={i} {...item} />
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

function HeroPulseBar(props: {}) {
  return (
    <div className="relative h-28 md:h-16 overflow-hidden">
      <div className="absolute h-2 aspect-square left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full bg-primary siren"></div>
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
        {/* use the text create a mask, the background shoud be the text-zinc */}
        {/* masked text 1 */}
        <p className="text-base md:text-5xl text-white/70 font-black uppercase cursor-none select-none whitespace-nowrap leading-none tracking-wide md:tracking-normal">
          EVERYDAY LIFE
        </p>
        {/* center golden siren */}
        {/* sends out a golden pulse which goes across the length of the siren box */}
        <div className="h-1 w-32 md:h-10 md:w-1/10 bg-primary/20 rounded-full"></div>
        {/* masked text 2 */}
        <p className="text-base md:text-5xl text-white/70 font-black uppercase whitespace-nowrap leading-none tracking-wide md:tracking-normal">
          Entertainment
        </p>
      </div>
    </div>
  );
}
