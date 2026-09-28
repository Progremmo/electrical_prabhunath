import React from "react";
import SectionTitle from "./SectionTitle";
import { Award, Clock, CheckCircle2, Wrench, Shield, Globe } from "lucide-react";
import { homeContent } from "@/content/home";

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7 text-teal-700" />,
  Clock: <Clock className="w-7 h-7 text-blue-600" />,
  CheckCircle2: <CheckCircle2 className="w-7 h-7 text-emerald-600" />,
  Wrench: <Wrench className="w-7 h-7 text-amber-500" />,
  Shield: <Shield className="w-7 h-7 text-teal-700" />,
  Globe: <Globe className="w-7 h-7 text-blue-600" />,
};

export default function WhyChoose() {
  const { whyChoose } = homeContent;

  return (
    <section className="py-20 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={whyChoose.badge}
          title={whyChoose.title}
          subtitle={whyChoose.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                {iconMap[item.iconName]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
