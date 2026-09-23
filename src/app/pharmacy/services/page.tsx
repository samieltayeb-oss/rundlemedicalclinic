"use client";

import Link from "next/link";
import { pharmacyData } from "@/data/pharmacy";
import {
  Stethoscope,
  RefreshCw,
  Globe,
  ShieldAlert,
  FlaskConical,
  CalendarCheck,
  FileCheck,
  Syringe,
  Activity,
  HeartPulse,
  Sparkles,
  Truck,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Stethoscope,
  RefreshCw,
  Globe,
  ShieldAlert,
  FlaskConical,
  CalendarCheck,
  FileCheck,
  Syringe,
  Activity,
  HeartPulse,
  Sparkles,
  Truck,
};

export default function PharmacyServicesPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Real Photographic Hero Banner (0% AI, 100% Real Community Dispensary) */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030d0c]">
        {/* Background Real Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/brand/pharmacy/hero-pharmacy.jpg"
            alt="Licensed Pharmacist Consulting Across Dispensary Counter at Rundle Pharmacy"
            className="w-full h-full object-cover object-center brightness-90 contrast-105 scale-[1.02] transform transition-transform duration-1000"
          />
          {/* Deep Obsidian & Emerald Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030d0c]/98 via-[#030d0c]/85 to-[#030d0c]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020908] via-transparent to-[#030d0c]/70" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Accredited Clinical Pharmacy Scope</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15]">
              12 Comprehensive <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Clinical Services
              </span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              From licensed prescribing pharmacists and bespoke custom compounding to certified $60 TB skin testing, international travel health, and free city-wide prescription delivery.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${pharmacyData.phone}`}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Dispensary: {pharmacyData.phoneFormatted}</span>
              </a>

              <Link
                href="/pharmacy/refill-transfer"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>Refill or Transfer Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services List with Real Photography Cards */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-10">
          {pharmacyData.services.map((srv, index) => {
            const Icon = iconMap[srv.iconName] || Sparkles;
            const cardImage = srv.imageUrl || "/brand/pharmacy/hero-pharmacy.jpg";
            const cardAlt = srv.imageAlt || `${srv.title} at Rundle Pharmacy`;

            return (
              <div
                key={srv.id}
                id={srv.slug}
                className="scroll-mt-32 rounded-3xl p-6 sm:p-9 bg-[#041210]/90 backdrop-blur-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle Ambient Radial Highlight */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Col: Authentic Real Photograph Card */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 shadow-xl group">
                      <img
                        src={cardImage}
                        alt={cardAlt}
                        className="w-full h-52 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] uppercase font-bold tracking-wider text-emerald-300">
                        {srv.badge}
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-[11px] text-white/80">
                        {srv.highlight || "Walk-In Available"}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-white/50">Turnaround:</span>
                        <span className="font-bold text-emerald-300">{srv.highlight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/50">Coverage:</span>
                        <span className="font-medium text-white">
                          {srv.coveredByAHCIP ? "Covered by AHCIP / Plans" : "Direct Patient Fee"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Col: Expanded Narrative & Benefits */}
                  <div className="lg:col-span-8 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-emerald-400/90 font-medium">
                          Rundle Pharmacy Clinical Program
                        </p>
                      </div>
                    </div>

                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      {srv.fullDescription}
                    </p>

                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                        Key Clinical Advantages:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {srv.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-white/85">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/pharmacy/services/${srv.slug}`}
                        className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href="/pharmacy/refill-transfer"
                        className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs transition-all flex items-center gap-1.5"
                      >
                        <span>Start Refill or Transfer</span>
                      </Link>

                      <a
                        href={`tel:${pharmacyData.phone}`}
                        className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-medium text-xs transition-all flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{pharmacyData.phoneFormatted}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
