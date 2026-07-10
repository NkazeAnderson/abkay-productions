"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";
import LanguageToggle from "./LanguageToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/#industries" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const drawerLinksRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  // Stagger-animate links on drawer open; reset on close
  useEffect(() => {
    const links =
      drawerLinksRef.current?.querySelectorAll<HTMLElement>(".mobile-nav-link");
    if (!links?.length) return;

    if (open) {
      const tween = gsap.fromTo(
        links,
        { x: -28, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.32,
          stagger: 0.065,
          ease: "power3.out",
          delay: 0.1,
        },
      );
      return () => {
        tween.kill();
      };
    } else {
      gsap.set(links, { x: -28, opacity: 0 });
    }
  }, [open]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      {/*  Fixed top bar  */}
      <nav className="fixed z-50 top-0 w-screen pointer-events-none select-none">
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <div id="logoAndName" className="relative pointer-events-auto">
            <Link href="/" className="flex gap-2 items-center">
              <div className="relative w-16 aspect-square rounded-full bg-black p-1.5">
                <Image src="/logo.png" alt="AB KAY Logo" fill />
              </div>
              <span
                id="CompanyName"
                className="hidden md:block font-bold uppercase text-black bg-primary text-xl px-3 py-2 rounded-lg text-nowrap overflow-hidden"
              >
                AB KAY Productions
              </span>
            </Link>
          </div>

          {/* Desktop: pill nav + language toggle */}
          <div className="hidden md:flex items-center gap-3 pointer-events-auto">
            {/* .navLinks targeted by GSAP in Hero.tsx (slides down from top:100vh on home) */}
            <div
              className={`navLinks flex gap-5 items-center py-2 px-5 bg-black/90 backdrop-blur rounded-full border border-white/10 ${
                isHome ? "relative top-[100vh]" : ""
              }`}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-white/75 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={`navLinks ${isHome ? "relative top-[100vh]" : ""}`}>
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile: language toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2 pointer-events-auto">
            <LanguageToggle />
            <button
              className="p-2.5 rounded-full bg-black/80 border border-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/*  Mobile full-screen drawer  */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/97 backdrop-blur-md transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div ref={drawerLinksRef} className="flex flex-col pt-28 px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link text-base font-semibold py-4 border-b border-white/8 transition-colors ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-white/75 hover:text-primary"
              }`}
              style={{ opacity: 0, transform: "translateX(-28px)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
