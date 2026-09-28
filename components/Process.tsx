import React from "react";
import SectionTitle from "./SectionTitle";
import { CalendarCheck, UserCheck, Wrench, Snowflake, ArrowDown } from "lucide-react";
import { homeContent } from "@/content/home";

const stepIcons = [
  <CalendarCheck key="1" className="w-6 h-6 text-white" />,
  <UserCheck key="2" className="w-6 h-6 text-white" />,
  <Wrench key="3" className="w-6 h-6 text-white" />,
  <Snowflake key="4" className="w-6 h-6 text-white" />,
];

export default function Process() {
  const { process } = homeContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge={process.badge}
          title={process.title}
          subtitle={process.subtitle}
        />

        {/* Desktop timeline */}
        <div className="relative mt-12 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 -translate-y-1/2 z-0" />
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {process.steps.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-700 to-teal-500 shadow-lg shadow-teal-700/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  {stepIcons[idx]}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-1">
                  Step {step.stepNumber}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-xs font-medium text-blue-600 mb-3">{step.desc}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-4 mt-8">
          {process.steps.map((step, idx) => (
            <React.Fragment key={step.stepNumber}>
              <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200 shadow-xs flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white shrink-0 flex items-center justify-center font-bold text-sm shadow-md">
                  {step.stepNumber}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                  <p className="text-xs font-medium text-teal-700 mb-1.5">{step.desc}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.detail}</p>
                </div>
              </div>
              {idx < process.steps.length - 1 && (
                <div className="flex justify-center text-teal-600 py-1">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
