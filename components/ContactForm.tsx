"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { contactContentEn } from "@/content/en/contact";
import { contactContentHi } from "@/content/hi/contact";

interface ContactFormProps {
  currentLang?: "en" | "hi";
}

export default function ContactForm({ currentLang = "en" }: ContactFormProps) {
  const isHindi = currentLang === "hi";
  const content = isHindi ? contactContentHi : contactContentEn;
  const { form } = content;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceRequired: services[0]?.title ?? "Electrical Wiring & Conduit Installation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Format WhatsApp inquiry text
    const messageText = `*New Electrical Enquiry - ${siteConfig.name}*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      (formData.email ? `*Email:* ${formData.email}\n` : "") +
      `*Service:* ${formData.serviceRequired}\n` +
      (formData.message ? `*Details:* ${formData.message}\n` : "");

    const waLink = contactConfig.whatsapp.getHref(messageText);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.open(waLink, "_blank");
      }
    }, 400);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />

      {submitted ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            {isHindi ? "पूछताछ प्रेषित की गई!" : "Enquiry Prepared Successfully!"}
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
            {isHindi
              ? `धन्यवाद, ${formData.name}। विवरण सीधे व्हाट्सएप पर भेजा जा रहा है। आप हमें सीधे ${siteConfig.phoneDisplay} पर भी कॉल कर सकते हैं।`
              : `Thank you, ${formData.name}. Your enquiry is connecting to WhatsApp. You can also call us directly at ${siteConfig.phoneDisplay}.`}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={contactConfig.phone.href}
              className="inline-flex items-center gap-2 bg-slate-900 text-amber-400 font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
            >
              <span>{isHindi ? "सीधे कॉल करें" : "Call Directly"}: {siteConfig.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  serviceRequired: services[0]?.title ?? "",
                  message: "",
                });
              }}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              {isHindi ? "अन्य संदेश भेजें" : "Send Another Message"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900">{form.title}</h3>
            <p className="text-sm text-slate-500 mt-1">
              {form.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {form.nameLabel} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={form.namePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {form.phoneLabel} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={form.phonePlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {form.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={form.emailPlaceholder}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
              />
            </div>
            <div>
              <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {form.serviceLabel} *
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white"
              >
                {services.map((srv) => (
                  <option key={srv.id} value={isHindi ? srv.titleHi : srv.title}>
                    {isHindi ? srv.titleHi : srv.title}
                  </option>
                ))}
                <option value="General Electrical Inspection / Site Assessment">
                  {isHindi ? "सामान्य निरीक्षण / साइट असेसमेंट" : "General Electrical Inspection / Site Assessment"}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {form.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder={form.messagePlaceholder}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white resize-y"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              id="contact-form-submit-btn"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-900 to-blue-900 hover:from-slate-800 hover:to-blue-800 text-amber-400 font-black text-base py-3.5 px-6 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {loading ? (
                <span>{isHindi ? "प्रेषित हो रहा है..." : "Processing..."}</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>{form.submitButton}</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>
              {isHindi
                ? "गोपनीयता सुरक्षित • कोई अनचाहा स्पैम नहीं"
                : "Privacy respected • Prompt response during business hours"}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
