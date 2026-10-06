import React from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { homeContentEn } from "@/content/en/home";

export default function HomePage() {
  const { servicesPreview } = homeContentEn;

  return (
    <>
      <Hero currentLang="en" />
      <Brands />

      {/* Services Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge={servicesPreview.badge}
            title={servicesPreview.title}
            subtitle={servicesPreview.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} currentLang="en" />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-blue-950 font-bold px-7 py-3 rounded-xl border border-slate-300 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>{servicesPreview.viewAllCta}</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChoose currentLang="en" />
      <Process currentLang="en" />

      {/* Google Maps Location Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                Local Presence in Gurugram
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {siteConfig.name}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Operating from Om Nagar, Sector 11, Gurugram. Serving residential homes, retail shops, and commercial buildings across Gurugram.
              </p>

              <div className="space-y-2.5 pt-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{siteConfig.address.formatted}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-blue-800 shrink-0" />
                  <span>{siteConfig.businessHours.daysDisplay} ({siteConfig.businessHours.hoursDisplay})</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-5 h-5 text-blue-800 shrink-0" />
                  <a href={contactConfig.phone.href} className="font-bold text-slate-900 hover:text-blue-800">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-200"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-md h-80 sm:h-96 relative bg-slate-100">
              <iframe
                title="Prabhunath Electricals & Contractor Location Map"
                src={siteConfig.address.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ currentLang="en" />
      <CTABanner currentLang="en" />
    </>
  );
}
