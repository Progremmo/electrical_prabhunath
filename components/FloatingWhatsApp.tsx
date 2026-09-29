"use client";

import React from "react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.raw}?text=${encodeURIComponent(
    contactConfig.whatsapp.defaultMessage
  )}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with our AC specialist on WhatsApp"
        className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/40"
      >
        <WhatsappIcon className="w-6 h-6 fill-current animate-pulse" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
