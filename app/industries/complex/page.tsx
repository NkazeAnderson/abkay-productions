"use client";

import Image from "next/image";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

const PRODUCTS = [
  {
    name: "Whiskey",
    image: "/complex-products/whisky.jpg",
  },
  {
    name: "Wine",
    image: "/complex-products/wine.jpg",
  },
  {
    name: "Beer",
    image: "/complex-products/beer.jpg",
  },
  {
    name: "Sweet Juice",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
  },
  {
    name: "Roasted Fish",
    image: "/complex-products/fish.jpg",
  },
  {
    name: "Roasted Beef",
    image: "/complex-products/soya.jpg",
  },
  {
    name: "Roasted Chicken",
    image: "/complex-products/chicken.jpg",
  },
  {
    name: "African Food Sample",
    image: "/complex-products/af1.jpg",
  },
  {
    name: "African Food Sample",
    image: "/complex-products/af2.jpg",
  },
];

const SPACE_IMAGES = [
  "/complex1.jpg",
  "/complex2.jpg",
  "/complex3.jpg",
  "/complex4.jpg",
];

export default function ComplexPage() {
  return (
    <IndustryPageLayout title="Complex" videoSrc="/hero-video.mp4">
      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 space-y-4 max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
          AB KAY
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-800 leading-tight">
          Complex
        </h1>
        <p className="text-slate-600 leading-8">
          We have created a space for people who want good food, great drinks,
          and a lively atmosphere. Our Complex is where friends meet, nights
          stretch longer, and memorable experiences happen naturally.
        </p>
      </section>

      {/* ── Service Girls ─────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-6 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">
            Our Service Girls
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Our service girls are exciting, professional, and attentive. We make
            sure every guest feels welcomed, noticed, and well taken care of
            from the moment they arrive.
          </p>
        </div>
        <div className="relative h-screen w-full md:w-3/4 lg:w-1/2  rounded-3xl overflow-hidden shadow-lg self-center mx-auto">
          <Image
            src="/sales-girls.jpeg"
            alt="Service team"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Drinks &amp; Food
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Our Offerings</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {PRODUCTS.map((item) => (
            <div
              key={item.name}
              className="group w-full rounded-2xl overflow-hidden"
            >
              <div className="relative h-36">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:767px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 h-12 flex items-start justify-center text-center">
                <p className="text-sm font-bold text-slate-700">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Open Space ───────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-12">
        <div className="space-y-1 mb-6 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            The Venue
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Open Space</h2>
          <p className="text-slate-600 leading-8 max-w-2xl mx-auto">
            Are you in search of a relaxed open space to eat, drink, and enjoy
            an event? We have a setting that works for intimate conversations,
            group hangouts, and special celebrations, all with the AB KAY energy
            around you.
          </p>
        </div>
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {SPACE_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`relative break-inside-avoid overflow-hidden rounded-2xl ${
                i === 0 ? "h-72" : "h-52"
              }`}
            >
              <Image
                src={src}
                alt={`Space image ${i + 1}`}
                fill
                sizes="(max-width:767px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </IndustryPageLayout>
  );
}
