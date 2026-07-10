"use client";

import Image from "next/image";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

const CHEFS = [
  {
    name: "Chef Ama",
    years: 8,
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
    tags: ["Shawarma", "Grills", "Burgers"],
  },
  {
    name: "Chef Daniel",
    years: 6,
    image:
      "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80",
    tags: ["Pizza", "Pasta", "African"],
  },
  {
    name: "Chef Fatima",
    years: 10,
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80",
    tags: ["Pastries", "Coffee", "Salads"],
  },
];

const PRODUCTS = [
  {
    name: "Chicken Shawarma",
    image:
      "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&q=80",
  },
  {
    name: "Beef Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    name: "Fried Chicken",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&q=80",
  },
  {
    name: "Jollof Rice",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
  },
  {
    name: "Fresh Juice",
    image:
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
  },
  {
    name: "Spring Rolls",
    image:
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&q=80",
  },
];

const HALL_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80",
  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=700&q=80",
];

export default function FastFoodPage() {
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
              <div className="relative h-48 md:h-52">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  sizes="(max-width:639px) 92vw, (max-width:1023px) 47vw, 300px"
                  className="object-cover"
                />
              </div>
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
              <div className="relative h-40">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:767px) 50vw, 33vw"
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
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {HALL_IMAGES.map((src, i) => (
            <div
              key={i}
              className={`relative break-inside-avoid overflow-hidden rounded-2xl ${
                i === 0 ? "h-72" : "h-52"
              }`}
            >
              <Image
                src={src}
                alt={`Hall image ${i + 1}`}
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
