"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_MS = 2400;

export default function LoadingScreen() {
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const dismiss = () => {
      const remaining = Math.max(0, MIN_MS - (Date.now() - start));
      setTimeout(() => {
        setFading(true);
        setTimeout(() => setGone(true), 700);
      }, remaining);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }

    return () => window.removeEventListener("load", dismiss);
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6 bg-black pointer-events-none transition-opacity duration-700 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-24 h-24 animate-pulse">
        <Image src="/logo.png" alt="AB KAY" fill className="object-contain" />
      </div>
      <div className="text-center space-y-1">
        <p className="text-2xl font-heading font-bold text-white tracking-widest uppercase">
          AB KAY Productions
        </p>
        <p className="text-[10px] tracking-[0.45em] text-primary font-semibold uppercase">
          Loading experience…
        </p>
      </div>
      <div className="w-48 h-px bg-white/10 overflow-hidden rounded-full">
        <div className="h-full bg-primary animate-[load-bar_2.4s_ease_forwards]" />
      </div>
    </div>
  );
}
