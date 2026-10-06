"use client";

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { useRouter, usePathname } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";

interface LanguageOption {
  code: string;
  label: string;
  native: string;
  flag: string;
  isRoute?: boolean;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧", isRoute: true },
  { code: "hi", label: "Hindi", native: "हिन्दी", flag: "🇮🇳", isRoute: true },
  { code: "bn", label: "Bengali", native: "বাংলা", flag: "🇮🇳" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી", flag: "🇮🇳" },
  { code: "mr", label: "Marathi", native: "मराठी", flag: "🇮🇳" },
  { code: "ta", label: "Tamil", native: "தமிழ்", flag: "🇮🇳" },
  { code: "te", label: "Telugu", native: "తెలుగు", flag: "🇮🇳" },
  { code: "ur", label: "Urdu", native: "اردو", flag: "🇮🇳" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate?: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: unknown;
              autoDisplay: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: unknown;
          };
        };
      };
    };
  }
}

export default function GoogleTranslateWidget() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<string>("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync current language with route or cookie
  useEffect(() => {
    if (pathname?.startsWith("/hi")) {
      setSelectedLang("hi");
    } else {
      // Check googtrans cookie if set
      const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/i);
      if (match && match[1]) {
        setSelectedLang(match[1].toLowerCase());
      } else {
        setSelectedLang("en");
      }
    }
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initialize hidden google translate engine
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,pa,gu,mr,ta,te,ur",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_hidden"
        );
      }
    };
  }, []);

  const triggerGoogleTranslate = (langCode: string) => {
    // Set Google translate cookie
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${langCode}; path=/;`;

    // Attempt to trigger select in Google Translate combo
    const selectElem = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event("change"));
    } else {
      // Reload to let google translate apply cookie
      window.location.reload();
    }
  };

  const handleSelectLanguage = (lang: LanguageOption) => {
    setSelectedLang(lang.code);
    setIsOpen(false);

    if (lang.code === "hi") {
      // Clean Hindi URL routing
      if (!pathname.startsWith("/hi")) {
        const target = `/hi${pathname === "/" ? "" : pathname}`;
        router.push(target);
      }
      // Clear googtrans cookie so native Hindi pages render smoothly
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else if (lang.code === "en") {
      // Clean English URL routing
      if (pathname.startsWith("/hi")) {
        const target = pathname.replace(/^\/hi/, "") || "/";
        router.push(target);
      }
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      // Reset Google Translate back to English if it was translated
      const selectElem = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (selectElem && selectElem.value !== "en") {
        selectElem.value = "en";
        selectElem.dispatchEvent(new Event("change"));
      }
    } else {
      // Trigger Google Translate engine for other regional languages
      triggerGoogleTranslate(lang.code);
    }
  };

  const currentOption = LANGUAGES.find((l) => l.code === selectedLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden container for Google Translate Engine */}
      <div id="google_translate_hidden" className="hidden opacity-0 pointer-events-none absolute -z-50" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Custom Sleek Dark-Themed Dropdown Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 transition-all text-[11px] font-semibold shadow-xs"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="font-bold text-amber-300">{currentOption.native}</span>
        <span className="text-slate-400 hidden xs:inline">({currentOption.label})</span>
        <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-amber-400" : ""}`} />
      </button>

      {/* Dropdown Menu Modal */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-slate-900 border border-slate-700/90 shadow-2xl py-2.5 z-[9999] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3.5 pb-2.5 mb-1.5 border-b border-slate-800 text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-amber-400">भाषा चुनें</span>
          </div>

          <div className="max-h-64 overflow-y-auto px-1.5 py-1 space-y-1">
            {LANGUAGES.map((lang) => {
              const isSelected = selectedLang === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-colors text-left ${
                    isSelected
                      ? "bg-amber-400/15 text-amber-300 font-bold border border-amber-400/30"
                      : "text-slate-200 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div>
                      <span className="block font-semibold leading-tight">{lang.native}</span>
                      <span className="block text-[10px] text-slate-400 leading-tight mt-0.5">{lang.label}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
