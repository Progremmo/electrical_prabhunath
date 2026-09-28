import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import { COMPANY_DETAILS, SERVICES_DATA } from "@/lib/constants";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(
    "Hello Aarav Aircon Services, I would like to get a quote for AC services."
  )}`;

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-12 bg-white/95 rounded-xl p-2 shadow-xs">
                <Image
                  src="/logo.svg"
                  alt="Aarav Aircon Services"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {COMPANY_DETAILS.name} is India&apos;s trusted HVAC maintenance, repair, and installation specialist. Delivering precision climate care across residential residences, corporate spaces, and industrial setups.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                aria-label="WhatsApp Aarav Aircon"
              >
                <MessageSquare className="w-5 h-5" />
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-800 text-teal-400 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all shadow-xs"
                aria-label="Call Aarav Aircon"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xs"
                aria-label="Email Aarav Aircon"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-teal-600">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-teal-600">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-teal-600">›</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-teal-600">›</span> Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-teal-600">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="hover:text-teal-400 transition-colors line-clamp-1 flex items-center gap-1.5"
                  >
                    <span className="text-teal-600">›</span> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Coverage (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              Pan India Support
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  {COMPANY_DETAILS.address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {COMPANY_DETAILS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-xs">{COMPANY_DETAILS.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Aarav Aircon Services. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
              Verified HVAC Workmanship
            </span>
            <span className="hidden md:inline">|</span>
            <span>Fast, Reliable & Affordable AC Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
