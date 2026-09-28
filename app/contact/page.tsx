import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Phone, MessageSquare, Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_DETAILS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Aarav Aircon Services",
  description:
    "Contact Aarav Aircon Services for quick AC repair, installation, and AMC quotes across Pan India. Doorstep technician support within 60-90 minutes.",
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(
    "Hello Aarav Aircon Services, I would like to request an AC service booking."
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-900 via-teal-800 to-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Contact Aarav Aircon Services
          </h1>
          <p className="text-teal-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Need urgent AC repair or planning an AMC setup? Speak directly with our dispatch engineers or request an instant free quote.
          </p>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Pan India Coverage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                  Direct Assistance
                </span>
                <h2 className="text-2xl font-black text-gray-900 mt-2">
                  Reach Our Dispatch Team
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  We are available round the clock to ensure you never have to endure a breakdown in peak weather.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Phone Call
                    </p>
                    <a
                      href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                      className="text-base font-bold text-gray-900 hover:text-teal-700 transition-colors"
                    >
                      {COMPANY_DETAILS.phoneDisplay}
                    </a>
                    <p className="text-xs text-emerald-600 font-medium mt-0.5">
                      Toll-Free & 24/7 Emergency Line
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-800 uppercase">
                      WhatsApp Quick Booking
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-gray-900 hover:text-emerald-700 transition-colors"
                    >
                      {COMPANY_DETAILS.whatsappDisplay}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Send photos/video of fault for fast estimation
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Email Helpdesk
                    </p>
                    <a
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-base font-bold text-gray-900 hover:text-blue-700 transition-colors break-all"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Corporate AMC & enterprise enquiries
                    </p>
                  </div>
                </div>

                {/* Service Network Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-gray-950 flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Service Network Coverage
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Pan India Service Network
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      Serving Residential, Commercial & Industrial Clients Across India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-gray-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">
                      Business Hours
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Monday – Sunday: 8:00 AM – 9:00 PM
                    </p>
                    <p className="text-xs text-teal-600 font-medium mt-0.5">
                      Emergency breakdown dispatch operates 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="pt-2 border-t border-gray-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>30 to 90 Days Workmanship Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Transparent Price Approval Before Repair Starts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
