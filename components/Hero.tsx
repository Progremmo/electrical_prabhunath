import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { siteConfig } from "@/config/site";
import { homeContent } from "@/content/home";

export default function Hero() {
  const { hero } = homeContent;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello ${siteConfig.companyName}, I would like to enquire about AC repair / installation services.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 -z-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              {siteConfig.shortName} <span className="text-teal-700">Services</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 text-left max-w-lg mx-auto lg:mx-0">
              {hero.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                  {i % 2 === 0 ? (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  ) : i === 1 ? (
                    <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                  ) : (
                    <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                  )}
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contact"
                id="hero-quote-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-teal-700/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-green-600/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsappIcon className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-center sm:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-700">{siteConfig.stats.experienceYears}</p>
                <p className="text-xs text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">{siteConfig.stats.happyCustomers}</p>
                <p className="text-xs text-gray-500 font-medium">Happy Customers</p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-500">{siteConfig.stats.acInstalled}</p>
                <p className="text-xs text-gray-500 font-medium">ACs Installed</p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-800">{siteConfig.stats.coverageLabel}</p>
                <p className="text-xs text-gray-500 font-medium">Coverage Network</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-600 to-blue-600 rounded-3xl blur-sm opacity-40 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={hero.heroImage}
                    alt={hero.heroImageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{hero.floatingBadge.title}</p>
                      <p className="text-xs text-gray-500">{hero.floatingBadge.subtitle}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-full border border-amber-200 shrink-0">
                    {hero.floatingBadge.tag}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-gray-800">{hero.floatingTag}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
