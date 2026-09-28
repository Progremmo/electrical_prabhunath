import React from "react";
import SectionTitle from "./SectionTitle";
import { Star, Quote, CheckCircle } from "lucide-react";
import { testimonials } from "@/config/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real reviews from verified residential homeowners, facility heads, and commercial enterprise managers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-100">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {t.service}
                  </span>
                  <Quote className="w-8 h-8 text-teal-100 group-hover:text-teal-200 transition-colors" />
                </div>

                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-700 to-blue-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
