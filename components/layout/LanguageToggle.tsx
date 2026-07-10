"use client";

import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    for (const cookie of document.cookie.split(";")) {
      const val = cookie.trim().replace("googtrans=", "");
      if (val !== cookie.trim() && val.endsWith("/fr")) {
        setLang("fr");
        return;
      }
    }
  }, []);

  function switchLang(target: "en" | "fr") {
    if (target === lang) return;
    setLang(target);

    const hostname = window.location.hostname;
    const cookieVal = target === "fr" ? "/en/fr" : "/en/en";
    document.cookie = `googtrans=${cookieVal}; path=/`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=.${hostname}`;

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = target === "fr" ? "fr" : "en";
      select.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  }

  return (
    <div className="flex items-center bg-black/80 border border-white/15 rounded-full overflow-hidden text-[11px] font-bold tracking-wide pointer-events-auto select-none">
      {(["en", "fr"] as const).map((l) => (
        <button
          key={l}
          onClick={() => switchLang(l)}
          aria-label={`Switch to ${l === "en" ? "English" : "French"}`}
          className={`px-3 py-1.5 uppercase transition-colors ${
            lang === l
              ? "bg-primary text-black"
              : "text-white/55 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
