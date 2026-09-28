import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { services } from "@/config/services";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hello ${siteConfig.companyName}, I would like to get a quote for AC services.`
  )}`;

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block" aria-label={`${siteConfig.companyName} — Home`}>
              <div className="relative w-48 h-12">
                <Image
                  src={siteConfig.branding.logoDark}
                  alt={siteConfig.companyName}
                  fill
                  sizes="192px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              {siteConfig.companyName} is a trusted HVAC maintenance, repair, and installation specialist. Delivering precision climate care across residential, corporate, and industrial setups.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                aria-label={`WhatsApp ${siteConfig.shortName}`}>
                <WhatsappIcon className="w-5 h-5" />
              </a>
              <a href={`tel:${siteConfig.phoneRaw}`}
                className="w-10 h-10 rounded-xl bg-teal-950/80 border border-teal-800 text-teal-400 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-all shadow-xs"
                aria-label={`Call ${siteConfig.shortName}`}>
                <Phone className="w-5 h-5" />
              </a>
              <a href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xs"
                aria-label={`Email ${siteConfig.shortName}`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Project Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-teal-400 transition-colors flex items-center gap-1.5">
                    <span className="text-teal-600">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">Popular Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`}
                    className="hover:text-teal-400 transition-colors line-clamp-1 flex items-center gap-1.5">
                    <span className="text-teal-600">›</span> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Coverage */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {siteConfig.coverage} Support
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="leading-snug">{contactConfig.address.label} — {contactConfig.address.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white font-medium transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-xs">{contactConfig.businessHours.display} ({contactConfig.businessHours.emergency})</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — dynamic year */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
              Verified HVAC Workmanship
            </span>
            <span className="hidden md:inline">|</span>
            <span>{siteConfig.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
