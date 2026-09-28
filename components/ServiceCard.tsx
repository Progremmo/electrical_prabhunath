import React from "react";
import Link from "next/link";
import {
  Wrench, Maximize2, PlusCircle, MinusCircle, Flame, Sparkles,
  Cpu, Droplets, ShieldCheck, Building2, Layers, Network, ArrowRight,
} from "lucide-react";
import type { ServiceItem } from "@/config/services";

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-teal-700" />,
  Maximize2: <Maximize2 className="w-6 h-6 text-teal-700" />,
  PlusCircle: <PlusCircle className="w-6 h-6 text-teal-700" />,
  MinusCircle: <MinusCircle className="w-6 h-6 text-teal-700" />,
  Flame: <Flame className="w-6 h-6 text-amber-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-blue-600" />,
  Cpu: <Cpu className="w-6 h-6 text-teal-700" />,
  Droplets: <Droplets className="w-6 h-6 text-blue-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  Building2: <Building2 className="w-6 h-6 text-teal-700" />,
  Layers: <Layers className="w-6 h-6 text-blue-600" />,
  Network: <Network className="w-6 h-6 text-teal-700" />,
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const icon = iconMap[service.iconName] || <Wrench className="w-6 h-6 text-teal-700" />;

  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-teal-600 to-blue-600 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100/70 flex items-center justify-center mb-5 group-hover:bg-teal-700 transition-colors duration-300">
          <div className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
            {icon}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100">
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 group/btn transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
