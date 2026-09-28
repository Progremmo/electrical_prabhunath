import React from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { SERVICES_DATA, COMPANY_DETAILS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Brands Bar */}
      <Brands />

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Services"
            title="Complete AC Care & Climate Solutions"
            subtitle="From split and window AC repair to precision VRV/VRF multi-zone maintenance, our technicians bring industry-standard HVAC expertise straight to your premises."
          />

          {/* 12 Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-teal-800 font-bold px-7 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Explore In-Depth Service Breakdown & Pricing</span>
              <ArrowRight className="w-4 h-4 text-teal-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Process Section */}
      <Process />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Accordion */}
      <FAQ />

      {/* Call to Action Banner before footer */}
      <section className="bg-gradient-to-r from-teal-800 via-teal-700 to-blue-900 py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-teal-100 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              Pan India Service Guarantee
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Ready to Restore Crisp, Efficient Cooling Today?
            </h2>
            <p className="text-teal-100/90 text-base sm:text-lg">
              Book a certified HVAC technician right now. Enjoy same-day doorstep dispatch and fixed upfront pricing with warranty protection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-extrabold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold text-base px-7 py-3.5 rounded-xl border border-white/20 transition-all duration-200"
            >
              <PhoneCall className="w-5 h-5 text-amber-300" />
              <span>{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
