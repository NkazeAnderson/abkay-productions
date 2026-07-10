"use client";

import Image from "next/image";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

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

const MILESTONES = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "AB KAY Productions was founded with a single vision: to bring world-class entertainment to our community.",
  },
  {
    year: "2020",
    title: "Fast Food Launch",
    description:
      "We opened our Fast Food branch, serving fresh, quality meals to hungry guests every day.",
  },
  {
    year: "2022",
    title: "Complex Opens",
    description:
      "The AB KAY Complex launched, introducing premium drinks, roasted food, and a vibrant social atmosphere.",
  },
  {
    year: "2024",
    title: "Music Production",
    description:
      "Our music and video production studio opened its doors, empowering local artists and brands.",
  },
];

export default function AboutPage() {
  return (
    <IndustryPageLayout title="About Us" videoSrc="/hero-video.mp4">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 space-y-4 max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
          Our Story
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-800 leading-tight">
          About AB KAY
        </h1>
        <p className="text-slate-600 leading-8">
          AB KAY Productions is a multi-industry entertainment company built on
          the belief that every person deserves an unforgettable experience. We
          combine music, food, and social spaces into one unified brand with a
          single purpose — to make life more enjoyable.
        </p>
      </section>

      {/* ── Mission & Vision ────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-800 rounded-3xl p-8 text-white space-y-3">
            <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
              What Drives Us
            </p>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="leading-7 text-yellow-50/90">
              To provide premium entertainment, food, and hospitality
              experiences that bring people together, celebrate life, and leave
              lasting memories in every guest we serve.
            </p>
          </div>
          <div className="border-2 border-yellow-800/30 rounded-3xl p-8 text-slate-700 space-y-3">
            <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
              Where We&apos;re Going
            </p>
            <h2 className="text-3xl font-bold text-yellow-800">Our Vision</h2>
            <p className="leading-7">
              To become the most recognised and beloved entertainment brand in
              Cameroon — a name synonymous with quality, creativity, and the
              spirit of togetherness.
            </p>
          </div>
        </div>
      </section>

      {/* ── Industries Overview ──────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">
            3 Industries, One Vision
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            Each arm of AB KAY Productions is built with the same commitment to
            excellence and guest satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              emoji: "🎺",
              label: "Music Production",
              desc: "A full-service music and video production studio for artists, brands, and events.",
            },
            {
              emoji: "🍔",
              label: "Fast Food",
              desc: "Fresh, delicious, and quick meals served daily with consistent quality.",
            },
            {
              emoji: "🍻",
              label: "The Complex",
              desc: "Premium drinks, roasted food, and a vibrant lounge atmosphere.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-yellow-800/20 bg-yellow-50 shadow-sm"
            >
              <span className="text-5xl">{item.emoji}</span>
              <h3 className="text-lg font-bold text-yellow-800">
                {item.label}
              </h3>
              <p className="text-slate-500 text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Values ──────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 bg-yellow-900/5">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            What We Stand For
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="text-center space-y-3 p-6 rounded-2xl bg-white shadow-sm border border-yellow-800/10"
            >
              <span className="text-4xl">{value.icon}</span>
              <h3 className="text-lg font-bold text-yellow-800">
                {value.title}
              </h3>
              <p className="text-slate-500 text-sm leading-6">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-10 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            How We Got Here
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Our Journey</h2>
        </div>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-yellow-800/20 md:left-1/2 md:-translate-x-0.5" />
          <div className="space-y-10">
            {MILESTONES.map((milestone, i) => (
              <div
                key={milestone.year}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-yellow-100 md:left-1/2 md:-translate-x-1.5 z-10" />
                {/* Content */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0
                      ? "md:pr-10 md:text-right"
                      : "md:pl-10 md:ml-auto"
                  }`}
                >
                  <span className="inline-block text-xs tracking-widest font-bold text-primary mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold text-yellow-800 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-6">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO Section ─────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-yellow-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full relative ring-4 ring-primary/50 shadow-2xl overflow-hidden">
              <Image
                src="/ceo.JPG"
                alt="Abubakar — Founder & CEO"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold mb-1">ABUBAKAR</h2>
              <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
                Founder &amp; CEO
              </p>
            </div>
            <p className="leading-8 text-yellow-50/90 border-l-2 border-primary/60 pl-5 italic">
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
    </IndustryPageLayout>
  );
}
