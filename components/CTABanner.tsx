import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

interface CTABannerProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  phone?: string;
  phoneRaw?: string;
  whatsapp?: string;
}

/**
 * Reusable CTA Banner — White-Label
 *
 * Appears as a full-width gradient bar. All text defaults to config
 * values but can be overridden per-instance.
 */
export default function CTABanner({
  badge = `${siteConfig.coverage} Service Guarantee`,
  title = "Ready to Restore Crisp, Efficient Cooling Today?",
  subtitle = "Book a certified HVAC technician right now. Enjoy same-day doorstep dispatch and fixed upfront pricing with warranty protection.",
  primaryButtonText = "Get Free Quote",
  primaryButtonHref = "/contact",
  phone = siteConfig.phone,
  phoneRaw = siteConfig.phoneRaw,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-teal-800 via-teal-700 to-blue-900 py-16 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-teal-100 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            {badge}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-teal-100/90 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
          <Link
            href={primaryButtonHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={`tel:${phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-base px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
          >
            <PhoneCall className="w-5 h-5 text-amber-300" />
            <span>{phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
