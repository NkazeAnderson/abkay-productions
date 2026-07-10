"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed top bar — pointer-events-none so the 3D canvas stays interactive */}
      <nav className="fixed z-50 top-0 w-screen pointer-events-none select-none">
        <div className="flex items-center justify-between px-4 py-2">
          {/* GSAP targets #logoAndName and #CompanyName for the intro animation */}
          <div id="logoAndName" className="relative pointer-events-auto">
            <div className="flex gap-2 items-center">
              <div className="relative w-16 aspect-square rounded-full bg-black p-1.5">
                <Image src="/logo.png" alt="AB KAY Logo" fill />
              </div>
              <span
                id="CompanyName"
                className="hidden md:block font-bold uppercase text-black bg-primary text-xl px-3 py-2 rounded-lg text-nowrap overflow-hidden"
              >
                AB KAY Productions
              </span>
            </div>
          </div>

          {/* Desktop nav — GSAP targets .navLinks and slides it down from top:100vh */}
          <div className="hidden md:flex gap-6 items-center relative navLinks top-[100vh] py-2 px-6 bg-black/90 backdrop-blur rounded-full border border-white/10 pointer-events-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden pointer-events-auto p-2.5 rounded-full bg-black/80 border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-3xl font-heading font-semibold text-white hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
