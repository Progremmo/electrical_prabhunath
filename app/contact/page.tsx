import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { pageMetadata } from "@/content/metadata";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.raw}?text=${encodeURIComponent(
    contactConfig.whatsapp.defaultMessage
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-gradient-to-b from-teal-900 via-teal-800 to-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            {contactContent.header.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {contactContent.header.title}
          </h1>
          <p className="text-teal-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {contactContent.header.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                  {contactContent.directAssistance.badge}
                </span>
                <h2 className="text-2xl font-black text-gray-900 mt-2">
                  {contactContent.directAssistance.title}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {contactContent.directAssistance.subtitle}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Phone Call</p>
                    <a href={`tel:${contactConfig.phone.raw}`} className="text-base font-bold text-gray-900 hover:text-teal-700 transition-colors">
                      {contactConfig.phone.display}
                    </a>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">{contactConfig.phone.label}</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-800 uppercase">{contactConfig.whatsapp.label}</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 hover:text-emerald-700 transition-colors">
                      {contactConfig.whatsapp.display}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">{contactConfig.whatsapp.sublabel}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">{contactConfig.email.label}</p>
                    <a href={`mailto:${contactConfig.email.address}`} className="text-base font-bold text-gray-900 hover:text-blue-700 transition-colors break-all">
                      {contactConfig.email.address}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">{contactConfig.email.sublabel}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-gray-950 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Service Network Coverage</p>
                    <p className="text-sm font-bold text-gray-900">{contactConfig.address.label}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{contactConfig.address.description}</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Business Hours</p>
                    <p className="text-sm font-bold text-gray-900">{contactConfig.businessHours.display}</p>
                    <p className="text-xs text-teal-600 font-medium mt-0.5">{contactConfig.businessHours.emergency}</p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="pt-2 border-t border-gray-100 space-y-2">
                {contactConfig.guarantees.map((guarantee, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                    {i === 0 ? <ShieldCheck className="w-4 h-4 text-teal-600" /> : <CheckCircle2 className="w-4 h-4 text-teal-600" />}
                    <span>{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
