"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-gray-900 text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              {siteConfig.coverage} Certified HVAC Network
            </span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span className="hidden md:inline text-gray-400">
              Residential & Commercial Air Conditioning Care
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-gray-300">{contactConfig.businessHours.topBarDisplay}</span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Emergency 24/7 Hotline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white border-b border-gray-100 py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-lg p-1"
              id="navbar-logo"
              aria-label={`${siteConfig.companyName} — Home`}
            >
              <div className="relative w-44 sm:w-52 h-11 transition-transform group-hover:scale-[1.02]">
                <Image
                  src={siteConfig.branding.logo}
                  alt={`${siteConfig.companyName} Logo`}
                  fill
                  priority
                  sizes="(max-width: 640px) 176px, 208px"
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
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${active
                        ? "text-teal-700 bg-teal-50 shadow-xs"
                        : "text-gray-700 hover:text-teal-700 hover:bg-gray-50"
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
                href={`tel:${siteConfig.phoneRaw}`}
                id="navbar-call-now-btn"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-white animate-bounce" />
                </div>
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-700 text-white shadow-sm"
                aria-label={`Call ${siteConfig.shortName}`}
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-teal-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
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
          <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-xl">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${active
                      ? "text-teal-800 bg-teal-50/80 font-bold"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 w-full bg-teal-700 text-white font-semibold py-3 rounded-xl shadow-md text-center text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-gray-950 font-bold py-3 rounded-xl shadow-xs text-center text-sm"
              >
                <span>Request Free Quote</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
