"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { gallery, galleryCategories } from "@/config/gallery";
import { siteConfig } from "@/config/site";
import { Camera, Eye, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { pageMetadata } from "@/content/metadata";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredItems =
    selectedCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-900 via-teal-800 to-gray-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
            Workmanship & Field Execution
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Our Project & Work Gallery
          </h1>
          <p className="text-teal-100/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real snapshots from residential installations, commercial chillers, foam jet washes, and precision inverter board repairs executed across {siteConfig.coverage}.
          </p>
        </div>
      </section>

      {/* Gallery Filter & Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Card Grid with hover zoom effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-teal-400" />
                    Verified On-Site Workmanship
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-teal-800/90 backdrop-blur-sm text-white border border-teal-600/50 shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-200">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-teal-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Quality Inspected
                  </span>
                  <Link href="/contact" className="text-xs font-bold text-gray-700 hover:text-teal-700 inline-flex items-center gap-1 transition-colors">
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery bottom reassurance note */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-gray-200/80 max-w-2xl mx-auto shadow-sm">
          <Camera className="w-8 h-8 text-teal-700 mx-auto mb-2" />
          <h4 className="text-lg font-bold text-gray-900">Standardized Quality on Every Visit</h4>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
            Every technician is equipped with safety scaffolding, catch-bags to prevent indoor water splatters, and calibrated digital refrigerant manifolds.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-teal-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors">
              <span>Book An HVAC Inspection Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
