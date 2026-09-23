"use client";

import Link from "next/link";
import { pharmacyData } from "@/data/pharmacy";
import {
  ShieldAlert,
  Clock,
  CheckCircle2,
  Calendar,
  FileCheck,
  Phone,
  ArrowRight,
  GraduationCap,
  Building,
  Sparkles,
} from "lucide-react";

export default function TBTestingPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Certified Tuberculosis Diagnostic Screening</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Tuberculosis (TB) Skin Testing
        </h1>

        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Fast, affordable <span className="text-emerald-400 font-bold">$60 Mantoux 1-step and 2-step TB skin tests</span> for nursing students, healthcare employees, and travel requirements with official clinical reading certification.
        </p>
      </div>

      {/* Hero Visual & Key Details */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border border-emerald-500/25 shadow-2xl group">
            <img
              src="/brand/pharmacy/tb-testing.jpg"
              alt="Certified TB Skin Testing Administration"
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d0c] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030d0c]/85 backdrop-blur-xl border border-white/10 text-xs">
              <span className="font-bold text-emerald-300 block">
                Official Stamped TB Documentation
              </span>
              <span className="text-white/70">
                Recognized by AHS, University of Calgary, SAIT, Bow Valley College, and employers.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                Standard Fee
              </span>
              <span className="text-2xl font-serif font-bold text-white">
                $60 Flat Rate
              </span>
            </div>
            <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
              Includes Injection &amp; Official Reading
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold tracking-tight">
            How TB Skin Testing Works (Mantoux TST)
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Day 1: Test Placement (5 mins)</h4>
                <p className="text-xs text-white/70 mt-0.5">
                  A tiny amount of PPD tuberculin liquid is gently injected just under the top layer of skin on your forearm. A small pale bump forms and disappears quickly.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Day 3: Clinical Reading (48 to 72 Hours)</h4>
                <p className="text-xs text-white/70 mt-0.5">
                  You return to the pharmacy between 48 and 72 hours later. Our certified pharmacist measures any induration (firm swelling) on your arm and stamps your official certificate.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`tel:${pharmacyData.phone}`}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book TB Test: {pharmacyData.phoneFormatted}</span>
            </a>

            <Link
              href="/pharmacy/contact"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              Hours &amp; Location
            </Link>
          </div>
        </div>
      </div>

      {/* 1-Step vs 2-Step Comparison */}
      <div className="max-w-4xl mx-auto space-y-6 pt-6">
        <div className="text-center space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            1-Step vs. 2-Step TB Testing
          </h3>
          <p className="text-white/60 text-xs sm:text-sm">
            Not sure which protocol your school or employer requires? We provide both.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-[#041210] border border-emerald-500/20 space-y-3">
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300">
              Most Common
            </span>
            <h4 className="font-serif text-xl font-bold text-white">1-Step TB Test ($60)</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Standard annual screening for existing healthcare personnel, general employment, volunteer placements, and international visas. Requires one placement and one readout 48–72h later.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#041210] border border-teal-500/20 space-y-3">
            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-300">
              Nursing / Practicum Entry
            </span>
            <h4 className="font-serif text-xl font-bold text-white">2-Step TB Test</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Required for initial entry into nursing, medical, dental, and paramedic programs (U of C, SAIT, Bow Valley College). Involves a second test 1 to 3 weeks after the first to establish an accurate immunological baseline.
            </p>
          </div>
        </div>
      </div>

      {/* In-Store Authentic Poster & Walk-In Proof Card */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#041210] border border-emerald-500/20 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-5 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-lg bg-black/60">
            <img
              src="/brand/pharmacy/tb-sign.png"
              alt="Official Rundle Pharmacy $60 TB Testing In-Store Sign"
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="sm:col-span-7 space-y-3 text-xs sm:text-sm text-white/80">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-bold text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Calgary Walk-In Facility</span>
            </div>
            <h4 className="font-serif text-xl font-bold text-white">
              Walk In Any Day &middot; Any Time &middot; 7 Days a Week!
            </h4>
            <p className="text-white/70 leading-relaxed text-xs">
              No doctor referral is required. Visit Rundle Pharmacy directly during open hours to receive your Mantoux skin test immediately. Stamped certification issued on readout.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${pharmacyData.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Ahead or Walk In: {pharmacyData.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
