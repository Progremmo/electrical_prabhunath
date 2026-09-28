import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import { SERVICES_DATA } from "@/lib/constants";
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair, Installation & AMC Services | Aarav Aircon",
  description:
    "Comprehensive HVAC air conditioning services across Pan India. Split AC, Window AC, Inverter PCB repair, Gas refilling, Chemical deep cleaning and Commercial AMC.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-900 via-teal-800 to-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            Engineered HVAC Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Professional AC Services Across Pan India
          </h1>
          <p className="text-teal-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Detailed diagnosis, genuine factory spares, and certified technicians for all residential and commercial air conditioning needs.
          </p>
        </div>
      </section>

      {/* Services List Detailed Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <SectionTitle
          badge="Detailed Catalog"
          title="All Air Conditioner Service Specializations"
          subtitle="Explore our comprehensive services below. Each service includes pre-repair diagnostics, transparent cost estimation, and guaranteed warranty protection."
        />

        <div className="space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Graphic Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                      <Image
                        src={service.image}
                        alt={`${service.title} Service`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-teal-800/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Pan India Dispatch</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Details Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-extrabold text-teal-700 bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                        Service #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        30-90 Days Warranty
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Benefits List */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2.5">
                        Key Service Inclusions & Benefits:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suitable For */}
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 text-xs sm:text-sm text-gray-700">
                      <span className="font-bold text-gray-900">Suitable For: </span>
                      <span>{service.suitableFor}</span>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <span>Book {service.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-teal-600" />
                        Fixed rate card • Upfront approval
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
