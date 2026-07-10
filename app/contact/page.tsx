"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Send, CheckCircle } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/abkayproductions",
    icon: "/facebook.png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@abkayproductions",
    icon: "/tiktok.png",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@abkayproductions",
    icon: "/youtube.png",
  },
];

const WHATSAPP_NUMBER = "237000000000";

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.738 5.476 2.031 7.787L0 32l8.424-2.007A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.255 13.255 0 01-6.808-1.876l-.487-.29-5.002 1.192 1.213-4.863-.318-.5A13.244 13.244 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.31-9.988c-.4-.2-2.366-1.167-2.732-1.3-.366-.133-.632-.2-.9.2-.266.4-1.032 1.3-1.265 1.567-.233.267-.466.3-.866.1-.4-.2-1.688-.623-3.215-1.986-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.615.175-.814.18-.18.4-.466.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.324-.78-.654-.674-.9-.687l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.334 0 1.966 1.433 3.866 1.633 4.133.2.267 2.82 4.303 6.832 6.034.955.412 1.7.659 2.28.844.958.305 1.83.262 2.52.16.768-.114 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
      </svg>
    ),
    iconBg: "#25D366",
    label: "WhatsApp",
    value: "+237 000 000 000",
    sub: "Chat with us directly",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: <MapPin size={22} className="text-white" />,
    iconBg: "var(--primary)",
    label: "Location",
    value: "Carrefour Matango, Japoma",
    sub: "Douala, Cameroon",
    href: null,
  },
  {
    icon: <Clock size={22} className="text-white" />,
    iconBg: "#555",
    label: "Hours",
    value: "Mon  Sunday",
    sub: "24 / 7",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello AB KAY Productions!\n\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/*  Hero  */}
      <section className="relative pt-28 pb-20 px-6 md:px-[8%] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.1),transparent)] pointer-events-none" />
        <div className="relative max-w-3xl">
          <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Contact
            <br />
            <span className="text-primary">Us</span>
          </h1>
          <div className="h-0.5 w-16 bg-primary mb-6" />
          <p className="text-white/60 text-lg leading-8 max-w-xl">
            Whether you have a question, want to book an event, or just want to
            say hello we&apos;re always happy to chat.
          </p>
        </div>
      </section>

      {/*  Contact Info Cards  */}
      <section className="py-12 px-6 md:px-[8%] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl">
          {CONTACT_INFO.map((info) => {
            const inner = (
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-primary/35 transition-colors h-full">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: info.iconBg }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs tracking-widest text-primary font-semibold uppercase mb-1">
                    {info.label}
                  </p>
                  <p className="font-semibold text-white">{info.value}</p>
                  <p className="text-white/45 text-sm">{info.sub}</p>
                </div>
              </div>
            );
            return info.href ? (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={info.label}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/*  Two-column: Form + Social  */}
      <section className="py-16 px-6 md:px-[8%] border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-2">
                Send a Message
              </p>
              <h2 className="text-3xl font-bold">We&apos;re All Ears</h2>
              <p className="text-white/45 text-sm mt-2">
                Your message is sent directly to our WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <CheckCircle size={48} className="text-[#25D366]" />
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-sm">
                  Your message was forwarded to our WhatsApp. We&apos;ll get
                  back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/5 mt-2"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", subject: "", message: "" });
                  }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold tracking-wider text-white/50 uppercase"
                    >
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold tracking-wider text-white/50 uppercase"
                    >
                      Phone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+237 6XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold tracking-wider text-white/50 uppercase"
                  >
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition appearance-none"
                  >
                    <option value="" disabled className="bg-black">
                      Select a subject
                    </option>
                    <option value="General Inquiry" className="bg-black">
                      General Inquiry
                    </option>
                    <option value="Event Booking" className="bg-black">
                      Event Booking
                    </option>
                    <option value="Music Production" className="bg-black">
                      Music Production
                    </option>
                    <option value="Fast Food Order" className="bg-black">
                      Fast Food Order
                    </option>
                    <option
                      value="The Complex  Reservation"
                      className="bg-black"
                    >
                      The Complex Reservation
                    </option>
                    <option value="Partnership" className="bg-black">
                      Partnership
                    </option>
                    <option value="Other" className="bg-black">
                      Other
                    </option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold tracking-wider text-white/50 uppercase"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 text-sm font-semibold"
                  size="lg"
                >
                  <Send size={16} />
                  Send via WhatsApp
                </Button>
              </form>
            )}
          </div>

          {/* Social + Follow */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-xs tracking-[0.4em] text-primary font-semibold uppercase mb-2">
                Follow Along
              </p>
              <h2 className="text-2xl font-bold mb-1">Find Us Online</h2>
              <p className="text-white/45 text-sm leading-6">
                Stay up to date with our latest events, music releases, and
                behind-the-scenes moments.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/3 border border-white/8 hover:border-primary/35 transition-colors group"
                >
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    <Image
                      src={social.icon}
                      alt={social.label}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="font-semibold text-sm text-white/75 group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer className="border-t border-white/8 py-8 px-6 text-center">
        <p className="text-sm text-white/30">
          © 2026 AB KAY Productions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
