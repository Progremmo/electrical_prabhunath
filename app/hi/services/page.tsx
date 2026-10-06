import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/config/services";
import { servicesContentHi } from "@/content/hi/services";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "इलेक्ट्रिकल सेवाएं एवं ठेकेदारी | प्रभुनाथ इलेक्ट्रिकल्स",
  description: `गुरुग्राम में सुरक्षित इलेक्ट्रिकल वायरिंग, डिस्ट्रीब्यूशन पैनल, प्रोफाइल लाइटिंग और ठेकेदारी कार्य।`,
};

export default function HindiServicesPage() {
  const { header, card } = servicesContentHi;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
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

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <SectionTitle
          badge="सेवा सूची"
          title="इलेक्ट्रिकल समाधान एवं कार्य विवरण"
          subtitle="अपार्टमेंट, स्वतंत्र मकानों, दुकानों और कार्यालयों के लिए हमारी प्रमुख सेवाएं।"
        />

        <div className="space-y-12">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                  <div className={`lg:col-span-5 relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200 group">
                      <Image
                        src={service.image}
                        alt={`${service.titleHi} — Prabhunath Electricals`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-amber-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md border border-slate-700">
                        <Zap className="w-3 h-3" />
                        <span>गुरुग्राम सेवा</span>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-blue-900 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                        सेवा #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">मानक सुरक्षा</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {service.titleHi}
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.descriptionHi}
                    </p>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2.5">
                        {card.inclusionsTitle}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.highlightsHi.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/hi/contact?service=${encodeURIComponent(service.titleHi)}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800 text-amber-400 font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <span>{card.bookCta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>सुरक्षा केंद्रित • पारदर्शी परामर्श</span>
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
