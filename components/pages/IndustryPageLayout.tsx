"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { type ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import SiteFooter from "@/components/layout/SiteFooter";

type IndustryPageLayoutProps = {
  title: string;
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  sidebarLabel?: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
  whatsappNumber?: string;
};

export default function IndustryPageLayout({
  title,
  videoSrc = "/hero-video.mp4",
  imageSrc,
  imageAlt,
  sidebarLabel = title,
  backHref = "/#industries",
  backLabel = "Back to Industries",
  children,
  whatsappNumber = "237654894282",
}: IndustryPageLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      "#industrySideTitle",
      { x: -48 },
      {
        x: 0,
        duration: 1.5,
        ease: "power3.out",
      },
    );

    if (!contentRef.current) {
      return;
    }

    const sections = Array.from(contentRef.current.querySelectorAll("section"));
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 48 },
        {
          y: 0,
          duration: 1.35,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerNode = trigger.trigger;
        if (
          triggerNode instanceof Element &&
          contentRef.current?.contains(triggerNode)
        ) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-black">
      {/* ── Fixed vertical title bar on the left ─────────────────────── */}
      <div className="fixed left-0 top-0 h-screen w-14 md:w-16 bg-primary z-30 flex items-center justify-center pointer-events-none select-none shadow-lg">
        <span
          id="industrySideTitle"
          className="font-heading text-white font-bold uppercase tracking-[0.38em] text-base md:text-lg whitespace-nowrap"
          style={{ writingMode: "vertical-rl" }}
        >
          {sidebarLabel}
        </span>
      </div>

      {/* ── Content area offset by the left bar ──────────────────────── */}
      <div className="ml-14 md:ml-16 flex-1 min-w-0">
        {/* Fixed background media — 30vh, sits behind scrollable content */}
        <div className="fixed top-0 left-14 md:left-16 right-0 h-[30vh] z-10 overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <video
              className="w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          )}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Scrollable content — overlaps the bottom of the video and scrolls from there */}
        <div
          ref={contentRef}
          className="relative mt-[24vh] z-20 rounded-tl-[2rem] rounded-tr-[2rem] bg-amber-50 min-h-[80vh]"
        >
          {/* Back nav */}
          <div className="px-6 md:px-12 pt-4 pb-0.5">
            <Link href={backHref}>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 px-2 text-xs text-primary hover:text-primary/80 -ml-2"
              >
                <ArrowLeft size={12} />
                {backLabel}
              </Button>
            </Link>
          </div>

          {children}

          <SiteFooter className="mt-16" />
        </div>
      </div>

      {/* ── WhatsApp FAB ─────────────────────────────────────────────── */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Contact us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="26" height="26" fill="white">
          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.738 5.476 2.031 7.787L0 32l8.424-2.007A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.255 13.255 0 01-6.808-1.876l-.487-.29-5.002 1.192 1.213-4.863-.318-.5A13.244 13.244 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.31-9.988c-.4-.2-2.366-1.167-2.732-1.3-.366-.133-.632-.2-.9.2-.266.4-1.032 1.3-1.265 1.567-.233.267-.466.3-.866.1-.4-.2-1.688-.623-3.215-1.986-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.615.175-.814.18-.18.4-.466.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.324-.78-.654-.674-.9-.687l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.334 0 1.966 1.433 3.866 1.633 4.133.2.267 2.82 4.303 6.832 6.034.955.412 1.7.659 2.28.844.958.305 1.83.262 2.52.16.768-.114 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
        </svg>
      </a>
    </div>
  );
}
