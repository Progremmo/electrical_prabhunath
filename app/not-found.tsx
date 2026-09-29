import Link from "next/link";
import { siteConfig } from "@/config/site";
import { notFoundContent } from "@/content/not-found";
import { Wrench, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200/80 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-100 text-teal-700 flex items-center justify-center mx-auto shadow-inner">
          <Wrench className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-black tracking-widest text-teal-700 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            {notFoundContent.badge}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
            {notFoundContent.title}
          </h1>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            {notFoundContent.subtitle}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-5 rounded-xl shadow-sm transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>{notFoundContent.homeButtonText}</span>
          </Link>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-gray-800 font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-teal-700" />
            <span>{notFoundContent.callButtonPrefix} {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
