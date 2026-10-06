import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, MessageSquare, Mail, MapPin, Clock, ArrowRight, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { contactContentEn } from "@/content/en/contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} for reliable electrical services and contracting in Gurugram, Haryana. Phone: ${siteConfig.phoneDisplay}.`,
};

export default function ContactPage() {
  const { header, info } = contactContentEn;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
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

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                  {info.title}
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">
                  Direct Contact &amp; Location
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  {info.subtitle}
                </p>
              </div>

              <div className="space-y-4 pt-1">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">{info.phoneTitle}</p>
                    <a
                      href={contactConfig.phone.href}
                      className="text-base font-bold text-slate-900 hover:text-blue-900 transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">Direct Line</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-900 uppercase">{info.whatsappTitle}</p>
                    <a
                      href={contactConfig.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="text-xs text-emerald-700 mt-0.5">Fast text inquiry</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-blue-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">{info.emailTitle}</p>
                    <a
                      href={contactConfig.email.href}
                      className="text-base font-bold text-slate-900 hover:text-blue-900 transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">{info.addressTitle}</p>
                    <p className="text-sm font-bold text-slate-900 leading-snug">{siteConfig.address.formatted}</p>
                    <a
                      href={siteConfig.address.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-900 hover:underline font-bold mt-1.5"
                    >
                      <span>{info.directionsCta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">{info.hoursTitle}</p>
                    <p className="text-sm font-bold text-slate-900">
                      {siteConfig.businessHours.daysDisplay}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {siteConfig.businessHours.hoursDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm currentLang="en" />
          </div>
        </div>
      </div>
    </div>
  );
}
