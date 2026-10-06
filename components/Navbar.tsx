"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight, ShieldCheck, Languages } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { commonContentEn } from "@/content/en/common";
import { commonContentHi } from "@/content/hi/common";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget";

interface NavbarProps {
  currentLang?: "en" | "hi";
}

export default function Navbar({ currentLang = "en" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHindi = currentLang === "hi" || pathname?.startsWith("/hi");
  const lang = isHindi ? "hi" : "en";
  const common = isHindi ? commonContentHi : commonContentEn;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Compute clean alternate path for language toggle
  let alternateLangPath = "/";
  if (pathname) {
    if (pathname.startsWith("/hi")) {
      alternateLangPath = pathname.replace(/^\/hi/, "") || "/";
    } else if (pathname.startsWith("/en")) {
      alternateLangPath = "/hi" + (pathname.replace(/^\/en/, "") || "");
    } else {
      alternateLangPath = `/hi${pathname === "/" ? "" : pathname}`;
    }
  }

  const prefix = lang === "hi" ? "/hi" : "";

  const navLinks = [
    { label: common.nav.home, href: prefix || "/" },
    { label: common.nav.about, href: `${prefix}/about` },
    { label: common.nav.services, href: `${prefix}/services` },
    { label: common.nav.gallery, href: `${prefix}/gallery` },
    { label: common.nav.contact, href: `${prefix}/contact` },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/" || href === "/hi") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Notification Strip */}
      <div className="relative z-60 bg-slate-950 text-slate-300 text-xs py-2 px-3 sm:px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          {/* Brand & Location */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold tracking-tight">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>{siteConfig.shortName}</span>
            </span>
            <span className="text-slate-600 hidden xs:inline">•</span>
            <span className="hidden sm:inline text-slate-400">
              {siteConfig.address.area}, {siteConfig.city}
            </span>
          </div>

          {/* Right Action & Info Hub */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 text-xs font-medium ml-auto sm:ml-0 flex-wrap">
            {/* Unified Language Select Dropdown */}
            <div className="flex items-center">
              <GoogleTranslateWidget />
            </div>

            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:inline text-slate-400">
              {siteConfig.businessHours.daysDisplay} ({siteConfig.businessHours.hoursDisplay})
            </span>

            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={contactConfig.phone.href}
              className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1 font-bold tracking-tight text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={prefix || "/"}
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-800 rounded-lg p-1"
              id="navbar-logo"
              aria-label={`${siteConfig.name} — Home`}
            >
              <div className="relative w-56 sm:w-64 h-11 transition-transform group-hover:scale-[1.02]">
                <Image
                  src={siteConfig.branding.logo}
                  alt={`${siteConfig.name} Logo`}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase()}`}
                    className={`px-3.5 py-2 rounded-xl text-sm font-bold transition-all duration-200 ${
                      active
                        ? "text-blue-900 bg-blue-50/80 shadow-xs"
                        : "text-slate-700 hover:text-blue-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Call Now */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={contactConfig.phone.href}
                id="navbar-call-now-btn"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{common.nav.callNow}</span>
              </a>
            </div>

            {/* Mobile Menu & Call Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href={alternateLangPath}
                className="px-2 py-1 text-xs font-bold bg-slate-100 text-slate-800 rounded-lg border border-slate-300"
              >
                {isHindi ? "EN" : "हिन्दी"}
              </Link>
              <a
                href={contactConfig.phone.href}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 text-amber-400 shadow-sm"
                aria-label={`Call ${siteConfig.shortName}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? "text-blue-900 bg-blue-50/80 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={contactConfig.phone.href}
                className="flex items-center justify-center gap-2.5 w-full bg-slate-900 text-white font-semibold py-3 rounded-xl shadow-md text-center text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{common.nav.callNow}: {siteConfig.phoneDisplay}</span>
              </a>
              <Link
                href={`${prefix}/contact`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow-xs text-center text-sm"
              >
                <span>{common.nav.requestQuote}</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
