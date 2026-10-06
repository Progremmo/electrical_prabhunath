import Link from "next/link";
import { siteConfig } from "@/config/site";
import { notFoundContent } from "@/content/not-found";
import { Zap, Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
          <Zap className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-black tracking-widest text-blue-900 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            {notFoundContent.badge}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
            {notFoundContent.title}
          </h1>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {notFoundContent.subtitle}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-xl shadow-sm transition-colors text-sm"
          >
            <Home className="w-4 h-4" />
            <span>{notFoundContent.homeButtonText}</span>
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>{notFoundContent.callButtonPrefix} {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
