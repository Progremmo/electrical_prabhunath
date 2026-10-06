import React from "react";
import { electricalBrands } from "@/config/brands";
import { Zap } from "lucide-react";

export default function Brands() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span>Standard Compatible Switchgear &amp; Quality Cable Materials</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
          {electricalBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-3 h-18 rounded-xl bg-slate-50 border border-slate-200/80 transition-all duration-200 hover:border-blue-900 hover:shadow-xs text-center"
            >
              <span className="font-black text-sm tracking-wide text-slate-800">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
