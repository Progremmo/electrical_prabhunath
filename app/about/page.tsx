import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import WhyChoose from "@/components/WhyChoose";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { aboutContentEn } from "@/content/en/about";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — Reliable electrical contracting, wiring, and distribution panel solutions in Gurugram, Haryana.`,
};

export default function AboutPage() {
  const { header, introduction, approach, whyChooseUs } = aboutContentEn;

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            {header.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {header.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {header.subtitle}
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-blue-900 text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {introduction.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {introduction.title}
              </h2>
              {introduction.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 text-base leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  <span>Connect With Prabhunath Electricals</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm relative">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-amber-500" />
                <span>{whyChooseUs.title}</span>
              </h3>
              <ul className="space-y-4">
                {whyChooseUs.points.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Safety Standards */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={approach.badge}
            title={approach.title}
            subtitle={approach.description}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {approach.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose currentLang="en" />
    </div>
  );
}
