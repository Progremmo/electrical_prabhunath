import React from "react";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-3xl" : "max-w-2xl"}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3.5 transition-colors ${
            light
              ? "bg-white/10 text-teal-200 border border-white/20"
              : "bg-teal-50 text-teal-800 border border-teal-200/60"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-teal-50/80" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
