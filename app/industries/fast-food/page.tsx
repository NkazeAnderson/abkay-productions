"use client";

import { useState } from "react";
import Image from "next/image";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";
import ImageLightbox from "@/components/ui/image-lightbox";

const CHEFS = [
  {
    name: "Chef Ice",
    years: 8,
    image: "/ice.webp",
    tags: ["Pizza", "Coffee", "Burgers"],
  },
];

const PRODUCTS = [
  {
    name: "Pizza Varieties",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80&fit=crop",
  },
  {
    name: "Platter Dishes",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80&fit=crop",
  },
  {
    name: "Shawarma Selection",
    image:
      "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=400&q=80&fit=crop",
  },
  {
    name: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80&fit=crop",
  },
  {
    name: "Coffee Drinks",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80&fit=crop",
  },
  {
    name: "Juices",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80&fit=crop",
  },
  {
    name: "Beers",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80&fit=crop",
  },
  {
    name: "Liquors",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80&fit=crop",
  },
  {
    name: "Wines",
    image:
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=400&q=80&fit=crop",
  },
];

const HALL_IMAGES = ["/ff1.webp", "/ff2.webp", "/ff3.webp"];

export default function FastFoodPage() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <IndustryPageLayout title="Fast Food" videoSrc="/hero-video.mp4">
      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 space-y-4 max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
          AB KAY
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-800 leading-tight">
          Fast Food
        </h1>
        <p className="text-slate-600 leading-8">
          We serve food for people who want speed without sacrificing taste. At
          AB KAY Fast Food, we prepare fresh meals, snacks, and drinks that are
          satisfying, reliable, and made for everyday enjoyment.
        </p>
      </section>

      {/* ── Chefs ──────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 py-10">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            The Team
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Meet Our Chefs</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            We have professional chefs with years of experience, and they bring
            care, speed, and consistency to every plate we serve.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 justify-items-center max-w-5xl mx-auto">
          {CHEFS.map((chef) => (
            <div
              key={chef.name}
              className="w-full max-w-75 rounded-2xl border border-primary/20 overflow-hidden shadow-sm bg-white"
            >
              <button
                type="button"
                onClick={() =>
                  setActiveImage({
                    src: chef.image,
                    alt: `${chef.name} portrait`,
                  })
                }
                aria-label={`Preview ${chef.name}`}
                className="relative h-48 md:h-52 w-full block cursor-zoom-in"
              >
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  sizes="(max-width:639px) 92vw, (max-width:1023px) 47vw, 300px"
                  className="object-cover"
                />
              </button>
              <div className="p-4 space-y-2 text-center">
                <p className="font-semibold text-slate-800">{chef.name}</p>
                <p className="text-xs text-primary font-medium">
                  {chef.years} years experience
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {chef.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Our Menu
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Popular Items</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {PRODUCTS.map((item) => (
            <div
              key={item.name}
              className="group w-full rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setActiveImage({ src: item.image, alt: item.name })
                }
                aria-label={`Preview ${item.name}`}
                className="relative h-40 w-full block cursor-zoom-in"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:767px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>
              <div className="pt-3 h-12 flex items-start justify-center text-center">
                <p className="text-sm font-bold text-slate-700">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Hall ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-12">
        <div className="space-y-1 mb-6 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Our Space
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">The Hall</h2>
          <p className="text-slate-600 leading-8 max-w-2xl mx-auto">
            We have a welcoming hall for guests who want to eat, drink, relax,
            or even host a small event. Whether you arrive alone or with a
            group, we make sure the space feels comfortable and worth staying
            in.
          </p>
        </div>
        <div className="md:columns-3 md:gap-4 space-y-4">
          {HALL_IMAGES.map((src, i) => (
            <button
              type="button"
              key={i}
              onClick={() =>
                setActiveImage({ src, alt: `Hall image ${i + 1}` })
              }
              aria-label={`Preview hall image ${i + 1}`}
              className={`relative break-inside-avoid overflow-hidden rounded-2xl ${
                i === 0 ? "h-72" : "h-52"
              } w-full block cursor-zoom-in`}
            >
              <Image
                src={src}
                alt={`Hall image ${i + 1}`}
                fill
                sizes="(max-width:767px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </IndustryPageLayout>
  );
}
