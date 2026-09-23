"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  ArrowRightLeft,
  Globe,
  ShieldAlert,
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
  Truck,
} from "lucide-react";
import { pharmacyData } from "@/data/pharmacy";

export function QuickActionDock() {
  const [activeTab, setActiveTab] = useState<"refill" | "transfer" | "travel" | "tb">("refill");

  const tabs = [
    {
      id: "refill",
      label: "Refill Prescription",
      icon: RefreshCw,
      badge: "Fast Online",
    },
    {
      id: "transfer",
      label: "Transfer to Rundle",
      icon: ArrowRightLeft,
      badge: "We Handle It",
    },
    {
      id: "travel",
      label: "Travel Clinic",
      icon: Globe,
      badge: "Vaccines",
    },
    {
      id: "tb",
      label: "TB Testing ($60)",
      icon: ShieldAlert,
      badge: "48-72h Result",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tab Switcher Bar with Spring Layout Animation */}
      <div className="bg-[#030d0c]/90 backdrop-blur-2xl p-1.5 rounded-2xl border border-emerald-500/25 shadow-2xl grid grid-cols-2 sm:flex gap-1.5 sm:gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`relative flex-1 py-2.5 sm:py-3 px-2 sm:px-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                isActive
                  ? "text-slate-950 font-bold"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 shadow-lg shadow-emerald-500/30"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? "text-slate-950" : "text-emerald-400"}`} />
                <span className="truncate">{tab.label}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display with Staggered Transition */}
      <div className="mt-3 bg-[#041210]/95 backdrop-blur-2xl border border-emerald-500/20 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <AnimatePresence mode="wait">
          {activeTab === "refill" && (
            <motion.div
              key="refill"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              <div className="md:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready for Pickup or Free Home Delivery</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
                  Refill Your Prescription in Seconds
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Have an existing prescription with refills remaining? Enter your Rx number or upload a photo, and our dispensary team will have it prepared immediately.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-white/80 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Same-day processing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-400" />
                    Free Calgary delivery
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/pharmacy/refill-transfer?action=refill"
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Start Online Refill</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${pharmacyData.phone}`}
                  className="w-full py-2.5 px-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Or Call {pharmacyData.phoneFormatted}</span>
                </a>
              </div>
            </motion.div>
          )}

          {activeTab === "transfer" && (
            <motion.div
              key="transfer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              <div className="md:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold">
                  <ArrowRightLeft className="w-3.5 h-3.5" />
                  <span>No Hassle &middot; Zero Calling Previous Pharmacy</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
                  Transfer Your Prescriptions to Rundle Pharmacy
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Moving your files to Rundle Pharmacy takes under 2 minutes. Simply give us your current pharmacy name, and we contact them to transfer all your active refills.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-white/80 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    We handle all the paperwork
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Complimentary medication review
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/pharmacy/refill-transfer?action=transfer"
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>1-Step Transfer Request</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-center text-[11px] text-white/50">
                  Takes less than 2 minutes online
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "travel" && (
            <motion.div
              key="travel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              <div className="md:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Certified International Travel Health Center</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
                  Travel Health Consultations &amp; Vaccines
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Prepare for your next trip with country-specific immunizations (Yellow Fever, Typhoid, Hepatitis, Meningitis) and prescriptions for malaria prevention &amp; traveler&apos;s diarrhea.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-white/80 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Yellow Fever certified
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Same-week appointments
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/pharmacy/travel-clinic"
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Book Travel Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-center text-[11px] text-white/50">
                  Pre-travel health questionnaire available online
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "tb" && (
            <motion.div
              key="tb"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              <div className="md:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>$60 Flat Fee &middot; 1-Step &amp; 2-Step Protocols</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold tracking-tight">
                  Tuberculosis (TB) Skin Testing ($60)
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Certified Mantoux TB skin testing for nursing students, healthcare workers, employment screening, and immigration. Injected on-site with official reading certificate in 48 to 72 hours.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-white/80 pt-1">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    U of C, SAIT, Bow Valley accepted
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    Official readout in 48–72 hours
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Link
                  href="/pharmacy/tb-testing"
                  className="w-full py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all group"
                >
                  <span>Book TB Skin Test ($60)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-center text-[11px] text-white/50">
                  Walk-ins welcome based on schedule
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
