import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { homeContentEn } from "@/content/en/home";
import { homeContentHi } from "@/content/hi/home";

interface CTABannerProps {
  currentLang?: "en" | "hi";
}

export default function CTABanner({ currentLang = "en" }: CTABannerProps) {
  const isHindi = currentLang === "hi";
  const { ctaBanner } = isHindi ? homeContentHi : homeContentEn;
  const prefix = isHindi ? "/hi" : "";

  return (
    <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-950 py-16 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            {ctaBanner.badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {ctaBanner.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            {ctaBanner.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
          <a
            href={contactConfig.phone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base px-8 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone className="w-5 h-5" />
            <span>{ctaBanner.buttonCallText}: {siteConfig.phoneDisplay}</span>
          </a>
          <Link
            href={`${prefix}/contact`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
          >
            <span>{ctaBanner.buttonQuoteText}</span>
            <ArrowRight className="w-5 h-5 text-slate-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
