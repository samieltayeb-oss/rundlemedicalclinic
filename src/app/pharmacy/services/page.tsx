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
  HelpCircle,
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
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Accredited Clinical Scope</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Comprehensive Clinical Services
        </h1>

        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From prescribing pharmacists and custom compounding to yellow fever travel health and free city-wide home delivery.
        </p>
      </div>

      {/* Services Full List */}
      <div className="max-w-6xl mx-auto space-y-8">
        {pharmacyData.services.map((srv, index) => {
          const Icon = iconMap[srv.iconName] || Sparkles;

          return (
            <div
              key={srv.id}
              id={srv.slug}
              className="scroll-mt-32 rounded-3xl p-6 sm:p-9 bg-[#041210]/90 backdrop-blur-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                {/* Left Col: Icon & Meta */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        {srv.badge}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/50">Turnaround:</span>
                      <span className="font-bold text-emerald-300">{srv.highlight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Insurance Coverage:</span>
                      <span className="font-medium text-white">
                        {srv.coveredByAHCIP ? "Covered by AHCIP / Plans" : "Direct Patient Fee"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Col: Expanded Narrative & Benefits */}
                <div className="lg:col-span-8 space-y-5">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Key Clinical Advantages:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {srv.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <Link
                      href="/pharmacy/refill-transfer"
                      className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`tel:${pharmacyData.phone}`}
                      className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-medium text-xs transition-all flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Inquire: {pharmacyData.phoneFormatted}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
