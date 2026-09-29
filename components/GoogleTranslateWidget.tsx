"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { Globe } from "lucide-react";

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

const emptySubscribe = () => () => {};

export default function GoogleTranslateWidget() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,bn,te,mr,ta,gu,kn,ml,pa,ur",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-300">
      <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
      <div id="google_translate_element" className="notranslate" />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
