import React from "react";
import { brands } from "@/config/brands";

export default function Brands() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">
            Multi-Brand Specialists • We Service & Install All Leading AC Manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center p-4 h-20 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md cursor-default"
            >
              <span className="font-extrabold text-base tracking-wider text-gray-400 group-hover:text-teal-700 transition-colors uppercase">
                {brand.logo}
              </span>
              <span className="text-[10px] text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity">
                Certified Spares
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
