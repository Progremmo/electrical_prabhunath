import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import WhyChoose from "@/components/WhyChoose";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Award, Users, CheckCircle, Wrench, Globe, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/content/metadata";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = pageMetadata.about;

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-teal-600" />,
  Users: <Users className="w-6 h-6 text-blue-600" />,
  Wrench: <Wrench className="w-6 h-6 text-amber-500" />,
  Globe: <Globe className="w-6 h-6 text-emerald-600" />,
};

export default function AboutPage() {
  const { header, stats, introduction, trustFactors, mission, vision } = aboutContent;

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-b from-teal-900 via-teal-800 to-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            {header.badge}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">{header.title}</h1>
          <p className="text-teal-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{header.subtitle}</p>
        </div>
      </section>

      {/* Experience Stats Grid */}
      <section className="relative -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl text-center flex flex-col items-center justify-center hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3">
                {iconMap[stat.iconName]}
              </div>
              <p className="text-3xl sm:text-4xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
                {introduction.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">{introduction.title}</h2>
              {introduction.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-base leading-relaxed">{p}</p>
              ))}
              <div className="pt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                  <span>{introduction.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm relative">
              <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-teal-700" />
                <span>Why Customers Trust Us</span>
              </h3>
              <ul className="space-y-4">
                {trustFactors.map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge="Core Philosophy" title="Our Mission & Strategic Vision" subtitle="Guiding principles driving every technician dispatch, compressor repair, and corporate partnership." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">{mission}</p>
            </div>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed">{vision}</p>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose />
    </div>
  );
}
