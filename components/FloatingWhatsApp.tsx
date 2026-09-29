"use client";

import React from "react";
import { Phone } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Quick contact options"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
    >
      {/* Direct Call Floating Action */}
      <a
        href={contactConfig.phone.href}
        aria-label={`Call ${siteConfig.name} at ${siteConfig.phoneDisplay}`}
        className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-slate-700"
      >
        <div className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-black text-white hidden sm:inline">
          {siteConfig.phoneDisplay}
        </span>
      </a>

      {/* WhatsApp Floating Action */}
      <a
        href={contactConfig.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${siteConfig.name} on WhatsApp`}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white pl-3.5 pr-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/60"
      >
        <WhatsappIcon className="w-6 h-6 fill-current animate-pulse" />
        <span className="text-xs font-black tracking-wide hidden sm:inline">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
