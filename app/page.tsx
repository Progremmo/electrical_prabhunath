import React from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyChoose from "@/components/WhyChoose";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/config/services";
import { homeContent } from "@/content/home";

export default function HomePage() {
  const { services: svc } = homeContent;

  return (
    <>
      <Hero />
      <Brands />

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle badge={svc.badge} title={svc.title} subtitle={svc.subtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-teal-800 font-bold px-7 py-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>{svc.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-teal-600" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChoose />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
