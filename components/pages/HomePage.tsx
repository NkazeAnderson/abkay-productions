"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Card } from "../ui/card";
import { Images, Quote, Star } from "lucide-react";
import { Button } from "../ui/button";
import Hero from "../overlay/Hero";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Industry = {
  name: string;
  slug: "music-production" | "fast-food" | "complex";
  description: string;
  offerings: [string, string, string];
  videoSrc: string;
  animationClass:
    | "industry-card-left"
    | "industry-card-center"
    | "industry-card-right";
  className: string;
};

type Testimonial = {
  name: string;
  feedback: string;
};

const INDUSTRIES: Industry[] = [
  {
    name: "Music Production",
    slug: "music-production",
    description:
      "Professional music and video production for artists, brands, and events with a studio workflow built for modern entertainment.",
    offerings: ["Music Production", "Video Production", "Artist Signing"],
    videoSrc: "/industries/music-short.mp4",
    animationClass: "industry-card-left",
    className: "md:translate-x-full md:-rotate-12 md:z-10",
  },
  {
    name: "Fast Food",
    slug: "fast-food",
    description:
      "Fresh and fast meals served daily for guests who want quality taste, quick service, and a comfortable dining experience.",
    offerings: ["Snacks", "Meals", "Drinks"],
    videoSrc: "/industries/food-short.mp4",
    animationClass: "industry-card-center",
    className: "md:z-20",
  },
  {
    name: "Complex",
    slug: "complex",
    description:
      "A premium snack bar experience featuring food, beer, whisky, and wine for social nights, celebrations, and relaxed hangouts.",
    offerings: ["Food", "Beer & Whisky", "Wine Service"],
    videoSrc: "/industries/complex-short.mp4",
    animationClass: "industry-card-right",
    className: "md:-translate-x-full md:rotate-12 md:z-10",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sonia T.",
    feedback:
      "AB KAY gave us one of the best nights we've had in years. The atmosphere, music, and service were all top tier, and every guest left smiling.",
  },
  {
    name: "Michael N.",
    feedback:
      "From planning to execution, everything felt smooth and professional. You can tell this team truly cares about people having a great time.",
  },
  {
    name: "Brenda K.",
    feedback:
      "I love how AB KAY combines quality entertainment with warm hospitality. It was more than an event for us, it was a memory we'll keep for a long time.",
  },
];

const PARTNER_LOGOS = [
  { src: "/partners/Boissons_du_Cameroun.png", alt: "Boissons du Cameroun" },
  { src: "/partners/Guiness.png", alt: "Guinness" },
  { src: "/partners/UCB.png", alt: "UCB" },
];

type GalleryItem = {
  src: string;
  alt: string;
  large?: boolean;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/hero/husien-bisky-FiKgMC_5p8o-unsplash.jpg",
    alt: "Event highlight 1",
    large: true,
  },
  { src: "/hero/foto-dial-LEHNmIJ467k-unsplash.jpg", alt: "Event highlight 2" },
  {
    src: "/hero/Gemini_Generated_Image_geh0qbgeh0qbgeh0.png",
    alt: "Event highlight 3",
  },
  {
    src: "/hero/Gemini_Generated_Image_j29l5zj29l5zj29l.png",
    alt: "Event highlight 4",
  },
  {
    src: "/hero/Gemini_Generated_Image_7mb7qv7mb7qv7mb7.png",
    alt: "Event highlight 5",
  },
  { src: "/hero/IMG_0510.png", alt: "Event highlight 6" },
  {
    src: "/hero/keith-banks-bHfz5aRBDrg-unsplash.jpg",
    alt: "Event highlight 7",
    large: true,
  },
  {
    src: "/hero/Gemini_Generated_Image_xjap3oxjap3oxjap.png",
    alt: "Event highlight 8",
  },
  {
    src: "/hero/stu-moffat-kuc_jHYoQEA-unsplash.jpg",
    alt: "Event highlight 9",
  },
  {
    src: "/hero/Gemini_Generated_Image_jysryvjysryvjysr.png",
    alt: "Event highlight 10",
  },
];

function HomePage() {
  useEffect(() => {
    // Scroll reveal — fade+slide sections in as they enter the viewport
    const sections = document.querySelectorAll<HTMLElement>(".reveal-section");
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((item) => {
          if (item.target.id === "industries" && item.isIntersecting) {
            gsap.to(".industry-card-left", {
              rotate: 0,
              translateX: 0,
              duration: 1,
              ease: "power4.out",
            });

            gsap.to(".industry-card-center", {
              rotate: 0,
              translateX: 0,
              duration: 1,
              delay: 0.25,
              ease: "power4.out",
            });

            gsap.to(".industry-card-right", {
              rotate: 0,
              translateX: 0,
              duration: 1,
              delay: 0.5,
              ease: "power4.out",
            });

            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
    const el = document.getElementById("industries");
    el && observer.observe(el);
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".industry-card");
    if (!cards.length || window.innerWidth >= 768) {
      return;
    }

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { x: -72, opacity: 0, rotate: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll()
        .filter((trigger) =>
          trigger.trigger?.classList?.contains("industry-card"),
        )
        .forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main id="homePage" className="relative w-screen overflow-x-hidden z-10">
      <Hero />

      <section
        id="homeAbout"
        className="reveal-section min-h-screen pt-[30vh] pb-20 px-[6%] flex flex-col justify-center"
      >
        <div className="max-w-xl space-y-5 p-8 rounded-2xl bg-black/70 backdrop-blur-sm border border-white/10 shadow-xl">
          <h1 className="text-4xl md:text-6xl tracking-wide text-yellow-50 leading-tight">
            Entertainment At It's Best
          </h1>
          <p className="text-slate-200">
            From good music, to good drinks and good food:
            <b className="text-white"> AB KAY Productions </b>
            brings you 3 distinct industries for your amusement:
          </p>
          <ul id="industries-list" className="list-disc space-y-2 ">
            <li className="industries-item text-primary text-2xl">
              🎺 AB KAY Music Production
            </li>
            <li className="industries-item text-primary text-2xl">
              🍔 AB KAY Fast Foods
            </li>
            <li className="industries-item text-primary text-2xl">
              🍻 AB KAY Complex
            </li>
          </ul>
        </div>
      </section>

      <section
        id="industries"
        className="reveal-section py-16 px-6 md:px-10 space-y-12 bg-black"
      >
        <div className="text-center space-y-2">
          <p className="text-xs tracking-[0.3em] font-semibold text-primary uppercase drop-shadow">
            What We Do
          </p>
          <h2 className="text-center [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
            3 Distinct Industries All For Your Entertainment
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
          {INDUSTRIES.map((industry) => (
            <Card
              key={industry.slug}
              className={`industry-card ${industry.className} ${industry.animationClass} w-full md:w-[31%] border border-white/10 hover:border-primary/40 transition-colors duration-300`}
            >
              <div className="space-y-4 px-4 pb-4">
                <video
                  className="w-full aspect-video object-cover rounded-md"
                  src={industry.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <p className="tracking-[0.3em] text-xs font-bold text-primary uppercase">
                  AB KAY
                </p>
                <h3 className="text-center tracking-wide">{industry.name}</h3>
                <p className="text-slate-300 text-sm leading-7">
                  {industry.description}
                </p>
                <ul className="space-y-1">
                  {industry.offerings.map((offering) => (
                    <li
                      key={offering}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {offering}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center pt-2">
                  <Button asChild>
                    <Link href={`/industries/${industry.slug}`}>View More</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="ceo" className="reveal-section px-6 md:px-[10%] py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-black/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative ring-4 ring-primary/30 shadow-2xl overflow-hidden">
              <Image
                src={"/ceo.JPG"}
                alt="CEO"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="space-y-4 max-w-2xl">
            <div>
              <h2 className="mb-1">ABUBAKAR</h2>
              <p className="text-xs tracking-[0.3em] font-semibold text-primary uppercase">
                Founder &amp; CEO
              </p>
            </div>
            <p className="text-slate-300 leading-8 border-l-2 border-primary/50 pl-5 italic">
              I am deeply passionate about entertainment and the joy it brings
              to people. I believe the best moments are shared moments, and I
              have dedicated my work to creating spaces where people can laugh,
              celebrate, and truly have a good time. Through AB KAY Productions,
              I am committed to making a positive impact in people&apos;s lives
              by turning ordinary days into unforgettable experiences and
              memories worth remembering.
            </p>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="reveal-section bg-black py-16 px-6 md:px-10"
      >
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-xs tracking-[0.3em] font-semibold text-primary uppercase">
              Our Work
            </p>
            <h2 className="text-white">Gallery</h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-400">
              Have a look at what we do best.
              <br />
              Events&hellip; parties&hellip; shows&hellip;
            </p>
            <p className="text-slate-300">
              <span className="line-through opacity-50">No dull time</span>{" "}
              <span className="text-lg font-medium text-white">
                Just real entertainment
              </span>
            </p>
          </div>

          <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.src}
                className={`relative mb-4 break-inside-avoid bg-[#111] shadow-2xl overflow-hidden ${
                  item.large
                    ? "h-72 sm:h-80 md:h-108 rounded-2xl shadow-black/40"
                    : "h-44 sm:h-56 md:h-64 rounded-[1.6rem] shadow-black/30"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                  className={`object-cover grayscale hover:grayscale-0 transition-all duration-500 ${
                    item.large ? "rounded-2xl" : "rounded-[1.6rem]"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className=" flex items-center justify-center">
            <Button>
              View All <Images />
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="reveal-section py-16 px-6 md:px-10">
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs tracking-[0.3em] font-semibold text-primary uppercase drop-shadow">
            Client Reviews
          </p>
          <h2 className="text-center [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
            Testimonials
          </h2>
          <p className="text-sm text-white drop-shadow">
            Hear what our clients say about us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 bg-black/40 backdrop-blur-md border border-white/15 hover:border-primary/40 transition-colors duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <Quote className="text-primary opacity-60" size={18} />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-7">
                {testimonial.feedback}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section
        id="partners"
        className="reveal-section bg-zinc-950 py-16 px-6 md:px-10"
      >
        <div className="text-center space-y-2 mb-10">
          <p className="text-xs tracking-[0.3em] font-semibold text-primary uppercase">
            Trusted By
          </p>
          <h2 className="text-center">Our Partners</h2>
          <p className="text-sm text-slate-400">
            We&apos;ve secured links to top providers in Cameroon
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.src}
              className="relative h-16 w-52 rounded-xl bg-white ring-1 ring-white/20 shadow-md hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                sizes="208px"
                className="object-contain p-3"
              />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/70 backdrop-blur-md px-6 md:px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href={"#"}
              aria-label="YouTube"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={"/youtube.png"}
                width={32}
                height={28}
                alt="Youtube"
              />
            </Link>
            <Link
              href={"#"}
              aria-label="Facebook"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={"/facebook.png"}
                width={32}
                height={28}
                alt="FaceBook"
              />
            </Link>
            <Link
              href={"#"}
              aria-label="TikTok"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image src={"/tiktok.png"} width={32} height={28} alt="TikTok" />
            </Link>
          </div>
          <p className="text-sm text-slate-500">
            &copy; 2026 AB KAY Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-slate-400">
            <Link href={"#"} className="hover:text-white transition-colors">
              Blogs
            </Link>
            <Link href={"#"} className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href={"#"} className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;
