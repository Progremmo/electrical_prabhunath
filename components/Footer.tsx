import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { WhatsappIcon } from "@/components/WhatsappIcon";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { services } from "@/config/services";
import QRCode from "@/components/QRCode";
import { commonContentEn } from "@/content/en/common";
import { commonContentHi } from "@/content/hi/common";

interface FooterProps {
  currentLang?: "en" | "hi";
}

export default function Footer({ currentLang = "en" }: FooterProps) {
  const isHindi = currentLang === "hi";
  const common = isHindi ? commonContentHi : commonContentEn;
  const prefix = isHindi ? "/hi" : "";

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link href={prefix || "/"} className="inline-block" aria-label={`${siteConfig.name} — Home`}>
              <div className="relative w-56 h-12">
                <Image
                  src={siteConfig.branding.logoDark}
                  alt={siteConfig.name}
                  fill
                  sizes="224px"
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {common.footer.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-xs"
                aria-label={`WhatsApp ${siteConfig.shortName}`}
              >
                <WhatsappIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href={contactConfig.phone.href}
                className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all shadow-xs"
                aria-label={`Call ${siteConfig.shortName}`}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={contactConfig.email.href}
                className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xs"
                aria-label={`Email ${siteConfig.shortName}`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Dynamic QR Code for quick mobile handoff */}
            <div className="pt-2 flex items-center gap-3.5 bg-slate-900/90 p-3 rounded-2xl border border-slate-800/80">
              <QRCode value={siteConfig.website} size={84} />
              <div className="text-xs space-y-1">
                <p className="font-bold text-white flex items-center gap-1">
                  <span>{common.qrCode.title}</span>
                </p>
                <p className="text-slate-400 leading-tight">
                  {common.qrCode.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {common.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: common.nav.home, href: prefix || "/" },
                { label: common.nav.about, href: `${prefix}/about` },
                { label: common.nav.services, href: `${prefix}/services` },
                { label: common.nav.gallery, href: `${prefix}/gallery` },
                { label: common.nav.contact, href: `${prefix}/contact` },
                { label: common.footer.termsText, href: "/terms" },
                { label: common.footer.privacyText, href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <span className="text-amber-500">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Electrical Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {common.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`${prefix}/services#${service.id}`}
                    className="hover:text-amber-400 transition-colors line-clamp-1 flex items-center gap-1.5"
                  >
                    <span className="text-amber-500">›</span> {isHindi ? service.titleHi : service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold uppercase tracking-wider">
              {common.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="leading-snug text-slate-300">{siteConfig.address.formatted}</p>
                  <a
                    href={siteConfig.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    <span>{common.footer.getDirections}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <a
                  href={contactConfig.phone.href}
                  className="hover:text-white font-medium transition-colors text-slate-200"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <a
                  href={contactConfig.email.href}
                  className="hover:text-white transition-colors text-slate-200"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300">
                  {siteConfig.businessHours.daysDisplay} ({siteConfig.businessHours.hoursDisplay})
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — dynamic year & legal compliance links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. {common.footer.rightsReserved}</p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/terms"
              className="text-slate-400 hover:text-amber-400 transition-colors font-medium underline-offset-4 hover:underline"
            >
              {common.footer.termsText}
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              href="/privacy"
              className="text-slate-400 hover:text-amber-400 transition-colors font-medium underline-offset-4 hover:underline"
            >
              {common.footer.privacyText}
            </Link>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              {siteConfig.city}, {siteConfig.state}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
