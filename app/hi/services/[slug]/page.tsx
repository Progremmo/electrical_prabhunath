import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";
import { CheckCircle2, Phone, MessageSquare, ArrowLeft, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.filter((s) => s.enabled).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.enabled);
  if (!service) return { title: "सेवा उपलब्ध नहीं" };

  return {
    title: `${service.titleHi} | ${siteConfig.name}`,
    description: `${service.shortDescriptionHi} गुरुग्राम में ${siteConfig.name} द्वारा विश्वसनीय इलेक्ट्रिकल सेवा। फोन: ${siteConfig.phoneDisplay}`,
  };
}

export default async function HindiServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.enabled);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug && s.enabled).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/hi/services"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>सभी सेवाओं पर वापस जाएं</span>
          </Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              इलेक्ट्रिकल सेवा
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              {service.titleHi}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.shortDescriptionHi}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Description & Highlights */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-8 bg-slate-100 border border-slate-200">
                <Image
                  src={service.image}
                  alt={service.titleHi}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-4">
                सेवा विवरण
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {service.descriptionHi}
              </p>

              <h3 className="text-lg font-bold text-slate-900 mb-4">
                मुख्य कार्यक्षेत्र एवं सुरक्षा मानक
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.highlightsHi.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-950">सुरक्षा मानकों का पूर्ण अनुपालन</h4>
                  <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                    सभी इलेक्ट्रिकल कार्य और इंस्टॉलेशन मानक टेस्टिंग उपकरणों, उचित अर्थिंग और आग व शॉक सुरक्षा के उच्च मानकों के तहत किए जाते हैं।
                  </p>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-4">अन्य प्रमुख सेवाएं</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/hi/services/${other.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-900 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 line-clamp-2">
                        {other.titleHi}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {other.shortDescriptionHi}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:text-blue-900 mt-4">
                      <span>विवरण देखें</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Booking Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 sticky top-24">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                सीधा संपर्क
              </span>
              <h3 className="text-xl font-black text-white mt-1 mb-2">
                इस सेवा के लिए संपर्क करें
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                गुरुग्राम में निरीक्षण, कोटेशन या कार्य निष्पादन हेतु {siteConfig.shortName} से सीधे जुड़ें।
              </p>

              <div className="space-y-3 mb-6">
                <a
                  href={contactConfig.phone.href}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>कॉल करें {siteConfig.phoneDisplay}</span>
                </a>
                <a
                  href={`${contactConfig.whatsapp.href}&text=${encodeURIComponent(`नमस्ते, मुझे ${service.titleHi} के बारे में जानकारी चाहिए।`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>व्हाट्सएप पर पूछें</span>
                </a>
              </div>

              <div className="pt-6 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">स्थान:</span>
                  <span className="font-semibold text-white">{siteConfig.city}, {siteConfig.state}</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">कार्य समय:</span>
                  <span className="font-semibold text-white">8:00 AM – 9:00 PM</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-slate-400">उत्तर समय:</span>
                  <span className="font-semibold text-emerald-400">त्वरित संपर्क</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
