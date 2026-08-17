"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "@/lib/gsap";
import LanguageToggle from "./LanguageToggle";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

const INDUSTRY_LINKS = [
  { label: "Complex", href: "/industries/complex" },
  { label: "Fast Food", href: "/industries/fast-food" },
  { label: "Music Production", href: "/industries/music-production" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const industriesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const drawerLinksRef = useRef<HTMLDivElement>(null);
  const isHome = pathname === "/";

  // Close industries dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        industriesRef.current &&
        !industriesRef.current.contains(e.target as Node)
      ) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const isIndustryActive = INDUSTRY_LINKS.some((l) => isActive(l.href));

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
              {/* Home link */}
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary"
                    : "text-white/75 hover:text-primary"
                }`}
              >
                Home
              </Link>

              {/* Industries dropdown */}
              <div ref={industriesRef} className="relative">
                <button
                  onClick={() => setIndustriesOpen((v) => !v)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isIndustryActive
                      ? "text-primary"
                      : "text-white/75 hover:text-primary"
                  }`}
                >
                  Industries
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {industriesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-42.5 bg-black/95 border border-white/10 rounded-xl overflow-hidden shadow-xl">
                    {INDUSTRY_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIndustriesOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(link.href)
                            ? "text-primary bg-white/5"
                            : "text-white/75 hover:text-primary hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining links */}
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
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
          {/* Home link */}
          <Link
            href="/"
            className={`mobile-nav-link text-base font-semibold py-4 border-b border-white/8 transition-colors ${
              isActive("/")
                ? "text-primary"
                : "text-white/75 hover:text-primary"
            }`}
            style={{ opacity: 0, transform: "translateX(-28px)" }}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          {/* Industries expandable */}
          <div
            className="mobile-nav-link border-b border-white/8"
            style={{ opacity: 0, transform: "translateX(-28px)" }}
          >
            <button
              onClick={() => setMobileIndustriesOpen((v) => !v)}
              className={`w-full flex items-center justify-between text-base font-semibold py-4 transition-colors ${
                isIndustryActive
                  ? "text-primary"
                  : "text-white/75 hover:text-primary"
              }`}
            >
              Industries
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileIndustriesOpen && (
              <div className="pb-2 flex flex-col gap-1 pl-4">
                {INDUSTRY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium py-2 transition-colors ${
                      isActive(link.href)
                        ? "text-primary"
                        : "text-white/60 hover:text-primary"
                    }`}
                    onClick={() => {
                      setOpen(false);
                      setMobileIndustriesOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
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
