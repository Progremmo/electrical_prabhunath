import React from "react";
import Link from "next/link";
import { Zap, ShieldAlert, Lightbulb, ShieldCheck, Building2, Wrench, ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/config/services";

interface ServiceCardProps {
  service: ServiceItem;
  currentLang?: "en" | "hi";
}

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-amber-500" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-blue-600" />,
  Lightbulb: <Lightbulb className="w-6 h-6 text-amber-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  Building2: <Building2 className="w-6 h-6 text-blue-700" />,
  Wrench: <Wrench className="w-6 h-6 text-slate-700" />,
};

export default function ServiceCard({ service, currentLang = "en" }: ServiceCardProps) {
  const isHindi = currentLang === "hi";
  const icon = iconMap[service.icon] || <Zap className="w-6 h-6 text-amber-500" />;
  const title = isHindi ? service.titleHi : service.title;
  const description = isHindi ? service.shortDescriptionHi : service.shortDescription;
  const prefix = isHindi ? "/hi" : "";

  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-700 to-amber-500 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5 group-hover:bg-slate-900 transition-colors duration-300">
          <div className="transition-all duration-300">
            {icon}
          </div>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-200">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100">
        <Link
          href={`${prefix}/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-900 hover:text-amber-600 group/btn transition-colors"
        >
          <span>{isHindi ? "विस्तृत विवरण देखें" : "View Details & Scope"}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
