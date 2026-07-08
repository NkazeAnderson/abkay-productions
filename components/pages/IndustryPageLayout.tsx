"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Scene from "@/components/canvas/Scene";

type Offering = {
  icon: ReactNode;
  title: string;
  description: string;
};

type IndustryPageLayoutProps = {
  name: string;
  tagline: string;
  description: string;
  offerings: Offering[];
  ctaMessage: string;
};

export default function IndustryPageLayout({
  name,
  tagline,
  description,
  offerings,
  ctaMessage,
}: IndustryPageLayoutProps) {
  return (
    <>
      <Scene />

      <main className="relative w-screen overflow-x-hidden z-10">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-8">
          <div className="space-y-5 max-w-3xl">
            <p className="text-xs tracking-[0.4em] text-primary uppercase font-semibold drop-shadow">
              AB KAY
            </p>
            <h1 className="[text-shadow:0_2px_24px_rgba(0,0,0,0.95)]">
              {name}
            </h1>
            <p className="text-xl text-white font-heading font-light tracking-widest [text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
              {tagline}
            </p>
            <p className="text-slate-200 max-w-xl mx-auto leading-8 bg-black/55 backdrop-blur-sm rounded-2xl px-6 py-4">
              {description}
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" className="gap-2 mt-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </section>

        {/* ── Offerings ────────────────────────────────────── */}
        <section className="bg-black py-20 px-6 md:px-[10%]">
          <div className="max-w-4xl mx-auto space-y-14">
            <div className="text-center space-y-2">
              <p className="text-xs tracking-[0.3em] text-primary uppercase font-semibold">
                Services
              </p>
              <h2>What We Offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offerings.map((offering) => (
                <div
                  key={offering.title}
                  className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    {offering.icon}
                  </div>
                  <h3>{offering.title}</h3>
                  <p className="text-slate-400 text-sm leading-7">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-28 px-6 flex flex-col items-center justify-center text-center">
          <div className="space-y-5 max-w-xl bg-black/55 backdrop-blur-md rounded-3xl p-10 border border-white/10">
            <p className="text-xs tracking-[0.3em] text-primary uppercase font-semibold drop-shadow">
              Stay Tuned
            </p>
            <h2 className="[text-shadow:0_2px_16px_rgba(0,0,0,0.9)]">
              Coming Soon
            </h2>
            <p className="text-slate-300 leading-8">{ctaMessage}</p>
            <Button size="lg" className="mt-2">
              Get in Touch
            </Button>
          </div>
        </section>

        {/* ── Footer strip ─────────────────────────────────── */}
        <footer className="border-t border-white/10 bg-black/70 backdrop-blur-md px-6 py-5 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2026 AB KAY Productions. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
