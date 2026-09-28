"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceRequired: services[0]?.title ?? "Split AC Repair",
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
    setTimeout(() => {
      console.log(`[${siteConfig.companyName}] Enquiry Form Submission:`, formData);
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full pointer-events-none" />

      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center mx-auto border border-teal-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-gray-900">
            Enquiry Received Successfully!
          </h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. Our technical coordinator will call your number (
            <span className="font-semibold text-gray-900">{formData.phone}</span>) shortly to confirm your {formData.serviceRequired} request.
          </p>
          <div className="pt-4">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", phone: "", email: "", city: "", serviceRequired: services[0]?.title ?? "", message: "" });
              }}
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="text-2xl font-black text-gray-900">Request Free Quote</h3>
            <p className="text-sm text-gray-500 mt-1">
              Fill in your details below and get an upfront price estimate with fast technician allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Full Name *
              </label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                placeholder="e.g. Arun Sharma"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Phone Number *
              </label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Email Address
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="e.g. arun@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white" />
            </div>
            <div>
              <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                City / Location *
              </label>
              <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange}
                placeholder="e.g. Mumbai / Delhi / Bengaluru"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white" />
            </div>
          </div>

          <div>
            <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Service Required *
            </label>
            <select id="serviceRequired" name="serviceRequired" value={formData.serviceRequired} onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white">
              {services.map((srv) => (
                <option key={srv.id} value={srv.title}>{srv.title}</option>
              ))}
              <option value="General Inspection / Not Sure">General Inspection / Not Sure</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
              Message or Specific AC Issue
            </label>
            <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
              placeholder="Describe your AC brand, tonnage, or the problem you are experiencing…"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-100 transition-all text-sm outline-none bg-slate-50/50 focus:bg-white resize-y" />
          </div>

          <div className="pt-2">
            <button type="submit" disabled={loading} id="contact-form-submit-btn"
              className="w-full inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-lg shadow-teal-700/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              {loading ? <span>Submitting Enquiry...</span> : (<><Send className="w-4 h-4" /><span>Request Free Quote</span></>)}
            </button>
          </div>

          <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5 pt-1">
            <ShieldAlert className="w-3.5 h-3.5 text-teal-600" />
            <span>Zero obligation quote • We respect your privacy & zero spam guarantee</span>
          </p>
        </form>
      )}
    </div>
  );
}
