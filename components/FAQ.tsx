"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/config/faq";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQProps {
  currentLang?: "en" | "hi";
}

export default function FAQ({ currentLang = "en" }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const isHindi = currentLang === "hi";

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={isHindi ? "अक्सर पूछे जाने वाले प्रश्न" : "Frequently Asked Questions"}
          title={isHindi ? "इलेक्ट्रिकल कार्य से जुड़े सामान्य प्रश्न" : "Questions About Our Electrical Services"}
          subtitle={
            isHindi
              ? "गुरुग्राम में हमारी सेवाओं, कार्य समय और साइट असेसमेंट के बारे में आवश्यक जानकारी।"
              : "Helpful details regarding our service scope, office location in Sector 11, and site assessment process."
          }
        />

        <div className="space-y-4 mt-8">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-400 bg-blue-50/30 shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isOpen ? "text-blue-900" : "text-slate-400"
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? "text-slate-900" : "text-slate-800"
                      }`}
                    >
                      {isHindi ? faq.questionHi : faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-slate-900 text-amber-400 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {isHindi ? faq.answerHi : faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
