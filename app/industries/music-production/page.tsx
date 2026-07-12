"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";

const ARTISTS = [
  {
    name: "Lexy",
    image: "/Lexy-artist.jpeg",
  },
  {
    name: "Mukolah",
    image: "/Mukolah-artist.jpeg",
  },
];

const SERVICES = [
  {
    name: "Studio Recording",
    image: "/music-recording.jpg",
  },
  {
    name: "Mixing & Mastering",
    image: "/music-mixing.jpg",
  },
  {
    name: "Music Video",
    image: "/video-production.jpg",
  },
  {
    name: "Beat Production",
    image: "/beat-production.jpg",
  },
];

export default function MusicProductionPage() {
  return (
    <IndustryPageLayout title="Music Production" videoSrc="/hero-video.mp4">
      {/* ── Intro ────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 space-y-4 max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
          AB KAY
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-800 leading-tight">
          Music Production
        </h1>
        <p className="text-slate-600 leading-8">
          We create a space where raw talent becomes polished artistry. At AB
          KAY Music Production, we help artists record, refine, and release work
          that sounds premium, feels intentional, and connects with real
          audiences.
        </p>
      </section>

      {/* ── Artists ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Our Talent
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">
            Featured Artists
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            We work with artists we believe in, and we give them the creative
            support, production quality, and direction they need to stand out.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 justify-items-center">
          {ARTISTS.map((artist) => (
            <div
              key={artist.name}
              className="group w-full max-w-57.5 text-center space-y-2"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  sizes="(max-width:639px) 88vw, (max-width:1023px) 45vw, (max-width:1279px) 30vw, 230px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-sm font-semibold text-slate-700">
                {artist.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Our Services</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            We offer a full production process, from the first recording idea to
            the final visual and sonic polish, so our artists can focus on
            performance while we handle execution.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 justify-items-center">
          {SERVICES.map((svc) => (
            <div
              key={svc.name}
              className="group w-full max-w-55 rounded-2xl overflow-hidden border border-primary/20 shadow-sm"
            >
              <div className="relative h-44 md:h-44">
                <Image
                  src={svc.image}
                  alt={svc.name}
                  fill
                  sizes="(max-width:767px) 46vw, 220px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 h-12 flex items-start justify-center text-center">
                <p className="text-sm font-semibold text-slate-700 text-center">
                  {svc.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Talent Acquisition ─────────────────────────────────────── */}
      <section className="mx-6 md:mx-14 my-10 rounded-3xl bg-primary/10 border border-primary/20 px-6 md:px-10 py-12">
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Join Us
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">
            Talent Acquisition
          </h2>
          <p className="text-slate-600 leading-8">
            Are you in search of a team that will actually invest in your
            growth? We are always looking for exceptional voices, producers, and
            creatives. We offer artist development, mentorship, and a real path
            to visibility for talent that is ready to grow.
          </p>
          <a
            href="https://wa.me/237000000000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-2 gap-2">
              <MessageCircle size={16} />
              Contact Us to Apply
            </Button>
          </a>
        </div>
      </section>
    </IndustryPageLayout>
  );
}
