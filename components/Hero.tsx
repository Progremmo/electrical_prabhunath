import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(
    "Hello Aarav Aircon Services, I would like to enquire about AC repair / installation services."
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
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200/80 text-teal-800 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Pan India Trusted Air Conditioning Network</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Aarav Aircon <span className="text-teal-700">Services</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Professional AC Repair, Installation, Gas Refilling & AMC Services Across Pan India. Reliable, fast, and transparent climate engineering for homes and businesses.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>60-90 Mins Technician Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
                <span>30-90 Days Service Warranty</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                <span>100% Genuine Factory Spares</span>
              </div>
              <div className="flex items-center gap-2.5 text-gray-700 text-sm font-medium">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <span>Fixed & Transparent Upfront Rates</span>
              </div>
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-center sm:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-teal-700">10+</p>
                <p className="text-xs text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">5000+</p>
                <p className="text-xs text-gray-500 font-medium">Happy Customers</p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-500">2500+</p>
                <p className="text-xs text-gray-500 font-medium">ACs Installed</p>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-800">Pan India</p>
                <p className="text-xs text-gray-500 font-medium">Coverage Network</p>
              </div>
            </div>
          </div>

          {/* Right Visual Graphic Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-600 to-blue-600 rounded-3xl blur-sm opacity-40 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/hero-real.jpg"
                    alt="Professional HVAC technician repairing a modern white split air conditioner in a contemporary living room"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                
                {/* Embedded floating callout badge */}
                <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-teal-700" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Certified Technicians</p>
                      <p className="text-xs text-gray-500">Equipped with factory tools</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-full border border-amber-200 shrink-0">
                    Same-Day
                  </span>
                </div>
              </div>

              {/* Floating tag bottom left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-gray-100 hidden sm:flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-gray-800">Technicians Available Pan India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
