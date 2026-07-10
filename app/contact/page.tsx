"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import IndustryPageLayout from "@/components/pages/IndustryPageLayout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Send, CheckCircle } from "lucide-react";

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
    // Compose a WhatsApp message with the form data
    const text = encodeURIComponent(
      `Hello AB KAY Productions!\n\nName: ${form.name}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
  }

  return (
    <IndustryPageLayout
      title="Contact Us"
      videoSrc="/hero-video.mp4"
      whatsappNumber={WHATSAPP_NUMBER}
    >
      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 space-y-4 max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
          Get In Touch
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-800 leading-tight">
          Contact Us
        </h1>
        <p className="text-slate-600 leading-8">
          We&apos;d love to hear from you. Whether you have a question about our
          services, want to book an event, or just want to say hello — we are
          always happy to chat.
        </p>
      </section>

      {/* ── Contact Cards ──────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 32 32" width="22" height="22" fill="white">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.824.738 5.476 2.031 7.787L0 32l8.424-2.007A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.255 13.255 0 01-6.808-1.876l-.487-.29-5.002 1.192 1.213-4.863-.318-.5A13.244 13.244 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.31-9.988c-.4-.2-2.366-1.167-2.732-1.3-.366-.133-.632-.2-.9.2-.266.4-1.032 1.3-1.265 1.567-.233.267-.466.3-.866.1-.4-.2-1.688-.623-3.215-1.986-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.615.175-.814.18-.18.4-.466.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.324-.78-.654-.674-.9-.687l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.334 0 1.966 1.433 3.866 1.633 4.133.2.267 2.82 4.303 6.832 6.034.955.412 1.7.659 2.28.844.958.305 1.83.262 2.52.16.768-.114 2.366-.967 2.7-1.9.333-.933.333-1.733.233-1.9-.1-.167-.366-.267-.766-.467z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-700">WhatsApp</p>
              <p className="text-sm text-slate-500">Chat with us instantly</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-yellow-800/5 border border-yellow-800/20">
            <div className="w-12 h-12 rounded-full bg-yellow-800 flex items-center justify-center shadow-md">
              <MapPin size={22} className="text-white" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-700">Location</p>
              <p className="text-sm text-slate-500">
                Douala, Cameroon
                <br />
                Available for events nationwide
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-yellow-800/5 border border-yellow-800/20">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
              <Phone size={22} className="text-black" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-700">Phone</p>
              <p className="text-sm text-slate-500">
                +237 000 000 000
                <br />
                Mon – Sun, 9am – 10pm
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ──────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-1 mb-8 text-center">
            <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
              Send a Message
            </p>
            <h2 className="text-3xl font-bold text-yellow-800">
              We&apos;re All Ears
            </h2>
            <p className="text-slate-500 text-sm">
              Fill in your details and we&apos;ll send your message directly to
              our WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle size={56} className="text-[#25D366]" />
              <h3 className="text-2xl font-bold text-yellow-800">
                Message Sent!
              </h3>
              <p className="text-slate-500 max-w-sm">
                Your message was forwarded to our WhatsApp. We&apos;ll get back
                to you as soon as possible.
              </p>
              <Button
                variant="outline"
                className="mt-2 border-yellow-800/30 text-yellow-800 hover:bg-yellow-800/5"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", phone: "", subject: "", message: "" });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
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
                    className="w-full rounded-xl border border-yellow-800/20 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
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
                    className="w-full rounded-xl border border-yellow-800/20 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                >
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-yellow-800/20 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition appearance-none"
                >
                  <option value="" disabled>
                    Select a subject…
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Event Booking">Event Booking</option>
                  <option value="Music Production">Music Production</option>
                  <option value="Fast Food Order">Fast Food Order</option>
                  <option value="The Complex — Reservation">
                    The Complex — Reservation
                  </option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold tracking-wider text-slate-600 uppercase"
                >
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind…"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-yellow-800/20 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
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
      </section>

      {/* ── Social Media ─────────────────────────────────────────── */}
      <section className="px-6 md:px-14 py-10 bg-yellow-900/5">
        <div className="space-y-1 mb-8 text-center">
          <p className="text-xs tracking-[0.35em] text-primary font-semibold uppercase">
            Follow Along
          </p>
          <h2 className="text-3xl font-bold text-yellow-800">Find Us Online</h2>
          <p className="text-slate-500 text-sm">
            Stay up to date with our latest events, music releases, and
            behind-the-scenes moments.
          </p>
        </div>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-md border border-yellow-800/10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
                <Image
                  src={social.icon}
                  alt={social.label}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <span className="text-xs font-semibold text-slate-600 tracking-wide">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </IndustryPageLayout>
  );
}
