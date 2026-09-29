import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/content/metadata";
import { termsContent } from "@/content/terms";
import {
  FileText,
  ShieldCheck,
  HelpCircle,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: pageMetadata.terms.title,
  description: pageMetadata.terms.description,
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            {termsContent.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            {termsContent.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {termsContent.subtitle}
          </p>
          <div className="mt-4 text-xs text-slate-400 font-medium">
            Effective Date &amp; Last Updated: {termsContent.lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Quick Notice Card */}
          <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-5 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-slate-900 font-bold text-base mb-1">{termsContent.notice.title}</h2>
              <p className="text-xs sm:text-sm text-slate-700">
                {termsContent.notice.description}
              </p>
            </div>
          </div>

          {/* Render Sections Dynamically from termsContent */}
          {termsContent.sections.map((section) => (
            <section key={section.id} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-900 text-sm font-bold flex items-center justify-center">
                  {section.number}
                </span>
                {section.title}
              </h2>
              <p>{section.description}</p>

              {/* Scope highlights */}
              {"highlights" in section && section.highlights && (
                <ul className="grid sm:grid-cols-2 gap-2.5 pt-1 text-sm">
                  {section.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Bullet points */}
              {"points" in section && section.points && (
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
                  {section.points.map((point, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Contact Section */}
          <section className="border-t border-slate-100 pt-8 space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-900" />
              {termsContent.contactSection.title}
            </h2>
            <p className="text-sm text-slate-600">
              {termsContent.contactSection.description}
            </p>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Phone: <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-slate-900 hover:text-blue-900">{siteConfig.phoneDisplay}</a></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                <span>Email: <a href={`mailto:${siteConfig.email}`} className="font-semibold text-slate-900 hover:text-blue-900">{siteConfig.email}</a></span>
              </div>
              <div className="sm:col-span-2 text-xs text-slate-500">
                Registered Office: {siteConfig.address.formatted}
              </div>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
            <span>Also review our <Link href="/privacy" className="text-blue-900 font-bold hover:underline">Privacy Policy</Link></span>
            <Link href="/contact" className="inline-flex items-center gap-1.5 font-bold text-blue-900 hover:text-amber-600">
              <span>Contact Us For Project Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
