"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { FAQ_DATA } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Got Questions? We Have Answers"
          subtitle="Everything you need to know about our Pan India AC repair, gas refilling, and maintenance contracts."
        />

        <div className="space-y-4 mt-8">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-teal-300 bg-teal-50/30 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
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
                        isOpen ? "text-teal-700" : "text-gray-400"
                      }`}
                    />
                    <span
                      className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? "text-teal-900" : "text-gray-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-teal-700 text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content with smooth height transition */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed border-t border-teal-100/60 pt-4">
                    {faq.answer}
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
