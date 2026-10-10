import Image from "next/image";
import Link from "next/link";

const FOOTER_SOCIALS = [
  {
    label: "Facebook",
    href: "https://web.facebook.com/abkayp/",
    icon: "/facebook.webp",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ab.kay.production",
    icon: "/tiktok.webp",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCBT4yLKh7GPtwzr8WAdO0cw",
    icon: "/youtube.webp",
  },
];

type SiteFooterProps = {
  className?: string;
};

export default function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer
      className={`border-t border-white/10 bg-black/70 backdrop-blur-md px-6 md:px-10 py-6 ${className}`.trim()}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {FOOTER_SOCIALS.map((social) => (
            <a
              key={`footer-${social.label}`}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={social.icon}
                width={24}
                height={24}
                alt={social.label}
              />
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          &copy; 2026 AB KAY Productions. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <Link href="/blog" className="hover:text-white transition-colors">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact Us
          </Link>
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
