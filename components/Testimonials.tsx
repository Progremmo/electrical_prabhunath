import React from "react";
import SectionTitle from "./SectionTitle";
import { Star, Quote, CheckCircle } from "lucide-react";
import { testimonialsConfig, type TestimonialItem } from "@/config/testimonials";

export default function Testimonials() {
  if (!testimonialsConfig.enabled || testimonialsConfig.items.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real reviews from verified residential and commercial clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsConfig.items.map((t: TestimonialItem) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {t.service}
                  </span>
                  <Quote className="w-8 h-8 text-slate-200 group-hover:text-blue-200 transition-colors" />
                </div>

                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 font-bold text-xs flex items-center justify-center shadow-xs">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
