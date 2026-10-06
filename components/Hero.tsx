import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Phone, Zap } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { homeContentEn } from "@/content/en/home";
import { homeContentHi } from "@/content/hi/home";

interface HeroProps {
  currentLang?: "en" | "hi";
}

export default function Hero({ currentLang = "en" }: HeroProps) {
  const isHindi = currentLang === "hi";
  const content = isHindi ? homeContentHi : homeContentEn;
  const { hero } = content;
  const prefix = isHindi ? "/hi" : "";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 md:pt-18 md:pb-24">
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-300 text-xs sm:text-sm font-semibold shadow-xs">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 text-left max-w-lg mx-auto lg:mx-0">
              {hero.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href={contactConfig.phone.href}
                id="hero-call-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-base px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5" />
                <span>{hero.ctaCall}: {siteConfig.phoneDisplay}</span>
              </a>

              <Link
                href={`${prefix}/contact`}
                id="hero-quote-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base px-6 py-3.5 rounded-xl border border-slate-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{hero.ctaQuote}</span>
                <ArrowRight className="w-5 h-5 text-slate-300" />
              </Link>

              <a
                href={contactConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsappIcon className="w-5 h-5 fill-current" />
                <span>{hero.ctaWhatsapp}</span>
              </a>
            </div>

            {/* Location & Hours verified strip */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-center sm:text-left text-xs sm:text-sm text-slate-400">
              <div>
                <p className="font-bold text-white">📍 Location</p>
                <p>{siteConfig.address.area}, {siteConfig.city}</p>
              </div>
              <div className="h-8 w-px bg-slate-800 hidden sm:block" />
              <div>
                <p className="font-bold text-white">🕒 Business Hours</p>
                <p>{siteConfig.businessHours.daysDisplay} ({siteConfig.businessHours.hoursDisplay})</p>
              </div>
              <div className="h-8 w-px bg-slate-800 hidden sm:block" />
              <div>
                <p className="font-bold text-white">📞 Direct Contact</p>
                <p>{siteConfig.phoneDisplay}</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 via-amber-500 to-blue-900 rounded-3xl blur-md opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-800">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/hero/hero-electrical.jpg"
                    alt={`${siteConfig.name} — Electrical & Contracting Services in Gurugram`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{siteConfig.shortName}</p>
                      <p className="text-xs text-slate-400">{siteConfig.address.area}, Gurugram</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-950 text-blue-300 font-bold text-xs rounded-full border border-blue-800 shrink-0">
                    Electrical Safety
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
