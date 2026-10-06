import React from "react";
import SectionTitle from "./SectionTitle";
import { Wrench, ShieldCheck, MessageSquare, MapPin, Zap, Building2 } from "lucide-react";
import { homeContentEn } from "@/content/en/home";
import { homeContentHi } from "@/content/hi/home";

interface WhyChooseProps {
  currentLang?: "en" | "hi";
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-7 h-7 text-blue-900" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
  MessageSquare: <MessageSquare className="w-7 h-7 text-amber-500" />,
  MapPin: <MapPin className="w-7 h-7 text-red-500" />,
  Zap: <Zap className="w-7 h-7 text-amber-400" />,
  Building2: <Building2 className="w-7 h-7 text-blue-800" />,
};

export default function WhyChoose({ currentLang = "en" }: WhyChooseProps) {
  const isHindi = currentLang === "hi";
  const { whyChooseUs } = isHindi ? homeContentHi : homeContentEn;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={whyChooseUs.badge}
          title={whyChooseUs.title}
          subtitle={whyChooseUs.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                {iconMap[item.icon] || <Zap className="w-7 h-7 text-amber-500" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
