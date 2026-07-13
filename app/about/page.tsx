"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";

const VALUES = [
  {
    icon: "🎯",
    title: "Passion",
    description:
      "Everything we do is driven by a genuine love for entertainment and creating meaningful experiences for every guest.",
  },
  {
    icon: "⭐",
    title: "Quality",
    description:
      "From the studio to the kitchen to the lounge, we hold every product and service to the highest standard.",
  },
  {
    icon: "🤝",
    title: "Community",
    description:
      "We are more than a business — we are a gathering place where people connect, celebrate, and belong.",
  },
];

// Correct chronological order: Music -> Complex -> Fast Food
const MILESTONES = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "AB KAY Productions was founded with a single vision: to bring world-class entertainment to our community.",
  },
  {
    year: "2020",
    title: "Music Production",
    description:
      "Our full-service music and video production studio launched, empowering local artists, brands, and events.",
  },
  {
    year: "2022",
    title: "The Complex Opens",
    description:
      "The AB KAY Complex launched \u2014 a premium social lounge featuring drinks, roasted food, and a vibrant atmosphere.",
  },
  {
    year: "2024",
    title: "Fast Food Branch",
    description:
      "We opened our Fast Food branch, serving fresh, quality meals with quick service every day.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/*  Hero  */}
      <section className="relative pt-28 pb-20 px-6 md:px-[8%] overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.12),transparent)] pointer-events-none" />
        <div className="relative max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            About
            <br />
            <span className="text-primary">AB KAY</span>
          </h1>
          <div className="h-0.5 w-16 bg-primary mb-6" />
          <p className="text-white/65 text-lg leading-8 max-w-xl">
            A multi-industry entertainment company built on the belief that
            every person deserves an unforgettable experience.
          </p>
        </div>
      </section>

      {/*  Mission & Vision  */}
      <section className="py-16 px-6 md:px-[8%] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <div className="bg-white/3 border border-white/8 rounded-2xl p-8 space-y-3 hover:border-primary/30 transition-colors">
            <span className="text-xs tracking-[0.4em] text-primary font-semibold uppercase">
              Mission
            </span>
            <h2 className="text-2xl font-bold">What Drives Us</h2>
            <p className="text-white/55 leading-7 text-sm">
              To provide premium entertainment, food, and hospitality
              experiences that bring people together, celebrate life, and leave
              lasting memories in every guest we serve.
            </p>
          </div>
          <div className="bg-primary/8 border border-primary/20 rounded-2xl p-8 space-y-3 hover:border-primary/40 transition-colors">
            <span className="text-xs tracking-[0.4em] text-primary font-semibold uppercase">
              Vision
            </span>
            <h2 className="text-2xl font-bold">Where We're Going</h2>
            <p className="text-white/55 leading-7 text-sm">
              To become the most recognised and beloved entertainment brand in
              Cameroon a name synonymous with quality, creativity, and the
              spirit of togetherness.
            </p>
          </div>
        </div>
      </section>

      {/*  Industries Overview  */}
      <section className="py-16 px-6 md:px-[8%] border-t border-white/5">
        <div className="max-w-5xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-2">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            3 Industries, One Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                emoji: "\uD83C\uDFBA",
                label: "Music Production",
                slug: "music-production",
                desc: "Full-service studio for music, video, and artist development.",
              },
              {
                emoji: "\uD83C\uDF7B",
                label: "The Complex",
                slug: "complex",
                desc: "Premium drinks, roasted food, and a lively social atmosphere.",
              },
              {
                emoji: "\uD83C\uDF54",
                label: "Fast Food",
                slug: "fast-food",
                desc: "Fresh, delicious meals served quickly with consistent quality.",
              },
            ].map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-primary/40 hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-4xl">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-primary transition-colors mb-1">
                    {item.label}
                  </h3>
                  <p className="text-white/45 text-sm leading-6">{item.desc}</p>
                </div>
                <span className="flex items-center gap-1 text-primary text-xs font-semibold mt-auto">
                  Explore <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*  Values  */}
      <section className="py-16 px-6 md:px-[8%] border-t border-white/5 bg-white/2">
        <div className="max-w-5xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-2">
            What We Stand For
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-primary/30 transition-colors"
              >
                <span className="text-3xl">{v.icon}</span>
                <h3 className="font-semibold text-white">{v.title}</h3>
                <p className="text-white/50 text-sm leading-6">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Timeline  */}
      <section className="py-16 px-6 md:px-[8%] border-t border-white/5">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-2">
            How We Got Here
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7.25 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {MILESTONES.map((m) => (
                <div key={m.year} className="flex gap-6">
                  {/* Dot + year */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    <div className="w-4.5 h-4.5 rounded-full border-2 border-primary bg-black mt-1 z-10" />
                  </div>
                  <div className="pb-2">
                    <span className="text-xs tracking-widest font-bold text-primary">
                      {m.year}
                    </span>
                    <h3 className="font-semibold text-white mt-0.5 mb-1.5">
                      {m.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-6">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  CEO  */}
      <section className="py-16 px-6 md:px-[8%] border-t border-white/5">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-10">
            The People Behind It
          </p>
          <div className="flex flex-col md:flex-row gap-10 items-center bg-white/3 border border-white/8 rounded-3xl p-8 md:p-12">
            <div className="shrink-0 relative w-40 h-40 md:w-52 md:h-52 rounded-full ring-2 ring-primary/30 overflow-hidden">
              <Image
                src="/ceo.JPG"
                alt="Abubakar  Founder & CEO"
                fill
                sizes="(max-width:767px) 160px, 208px"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold">ABUBAKAR</h2>
                <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase mt-1">
                  Founder &amp; CEO
                </p>
              </div>
              <p className="text-white/55 leading-8 border-l-2 border-primary/40 pl-5 italic text-sm">
                I am deeply passionate about entertainment and the joy it brings
                to people. I believe the best moments are shared moments, and I
                have dedicated my work to creating spaces where people can
                laugh, celebrate, and truly have a good time. Through AB KAY
                Productions, I am committed to making a positive impact in
                people&apos;s lives by turning ordinary days into unforgettable
                experiences and memories worth remembering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
