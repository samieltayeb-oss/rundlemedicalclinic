"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { QuickActionDock } from "./QuickActionDock";
import { pharmacyData } from "@/data/pharmacy";
import {
  Sparkles,
  CheckCircle2,
  Truck,
  Phone,
  ArrowRight,
  ShieldCheck,
  Building2,
  Calendar,
} from "lucide-react";

export function PharmacyHero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030d0c]">
      {/* Background Image Container with Bioluminescent Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <img
          src="/brand/pharmacy/hero-pharmacy.jpg"
          alt="Rundle Pharmacy Community Dispensary"
          className="w-full h-full object-cover object-center brightness-90 contrast-105 scale-[1.02] transform transition-transform duration-1000"
        />
        {/* Deep Obsidian & Emerald Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d0c]/98 via-[#030d0c]/88 to-[#030d0c]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030d0c] via-transparent to-[#030d0c]/70" />
        {/* Ambient Radial Spotlight */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-emerald-950/50"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Adjoining Rundle Medical Clinic &middot; Calgary NE</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.1]">
                Your Health. <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                  Our Expertise.
                </span>
              </h1>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
                Calgary Northeast&apos;s accredited community pharmacy &amp; international travel clinic. Providing clinical prescribing, custom compounding, and free city-wide home delivery.
              </p>
            </motion.div>

            {/* Clinical Value Props Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Prescribing</span>
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Pharmacists on site
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-teal-300 font-bold text-xs">
                  <Truck className="w-4 h-4" />
                  <span>Free Delivery</span>
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Across all Calgary
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                  <Calendar className="w-4 h-4" />
                  <span>Open 7 Days</span>
                </div>
                <div className="text-[11px] text-white/60 mt-0.5">
                  Mon-Fri 9-8 &middot; Sat &amp; Sun
                </div>
              </div>
            </motion.div>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href={`tel:${pharmacyData.phone}`}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/25 flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call {pharmacyData.phoneFormatted}</span>
              </a>

              <Link
                href="/pharmacy/services"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm backdrop-blur-md flex items-center gap-2 transition-all group"
              >
                <span>Explore 12 Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right Hero Badge / Accreditation Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-3xl p-6 sm:p-7 bg-[#041210]/85 backdrop-blur-2xl border border-emerald-500/30 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Clinical Accreditation &middot; ACP Licensed
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                  Active
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Alberta College of Pharmacy (ACP) Licensed
                    </span>
                    <span className="text-[11px] text-white/60">
                      Fully accredited community dispensary and injection facility.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Direct Adjoining Medical Clinic Connection
                    </span>
                    <span className="text-[11px] text-white/60">
                      Located in the same healthcare complex as Rundle Medical Clinic.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Certified Travel &amp; TB Skin Testing Center
                    </span>
                    <span className="text-[11px] text-white/60">
                      $60 flat fee Mantoux test with official 48-72h readout certificate.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">
                      All Major Insurance Plans Accepted
                    </span>
                    <span className="text-[11px] text-white/60">
                      Alberta Blue Cross, Sun Life, Manulife, Canada Life, Non-Insured Health Benefits (NIHB).
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                    Operating Hours
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Mon–Fri: 9am–8pm &middot; Sat: 9am–5pm
                  </span>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Action Dock - Centerpiece of the Bionova Experience */}
        <div className="mt-12 sm:mt-16">
          <QuickActionDock />
        </div>
      </div>
    </section>
  );
}
