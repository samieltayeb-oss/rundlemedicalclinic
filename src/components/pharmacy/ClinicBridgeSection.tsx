"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Pill,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { pharmacyData } from "@/data/pharmacy";

export function ClinicBridgeSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#030d0c] via-[#041512] to-[#030d0c] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>One Location &middot; Complete Healthcare Continuum</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-[1.15]">
              Adjoining Rundle Medical Clinic for Seamless Patient Care
            </h2>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed">
              Rundle Pharmacy is situated directly next door to Rundle Medical Clinic at the intersection of 36th Street NE and Rundlehorn Drive NE. Together, our physicians and clinical pharmacists operate in tight collaboration to eliminate wait times and pharmacy miscommunication.
            </p>

            {/* 3 Step Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <h4 className="text-sm font-bold text-white">Physician Visit</h4>
                <p className="text-xs text-white/60">
                  See a CPSA-licensed family physician next door for your diagnosis.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                  02
                </div>
                <h4 className="text-sm font-bold text-white">Instant EMR Send</h4>
                <p className="text-xs text-white/60">
                  Your prescription is routed electronically to Rundle Pharmacy before you leave.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <h4 className="text-sm font-bold text-white">Rapid Pickup / Free Delivery</h4>
                <p className="text-xs text-white/60">
                  Pick up your medications next door or enjoy free delivery to your home in Calgary.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://rundlemedicalclinic.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-sky-500/20 flex items-center gap-2 transition-all group"
              >
                <span>Visit Rundle Medical Clinic</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`tel:${pharmacyData.sisterClinic.phone}`}
                className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium transition-all"
              >
                Clinic Phone: {pharmacyData.sisterClinic.phone}
              </a>
            </div>
          </div>

          {/* Right Sister Facility Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-7 bg-[#030d0c]/90 backdrop-blur-2xl border border-emerald-500/25 shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      Rundle Medical Clinic
                    </h3>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      Sister Healthcare Facility
                    </span>
                  </div>
                </div>

                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-3 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    3735 Rundlehorn Dr NE, Calgary AB T1Y 2K1 &middot; Adjoining Unit
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Walk-in &amp; Family Practice &middot; Accepting New Patients
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    12 Clinical Medical Specialties &middot; CPSA Licensed Physicians
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-white/80 space-y-2">
                <span className="font-bold text-emerald-300 block">
                  Integrated Patient Advantages:
                </span>
                <ul className="space-y-1 text-[11px] text-white/70">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Direct doctor-pharmacist consultation on prescriptions
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Zero travel between seeing doctor and picking up meds
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    Shared Alberta Health Care electronic records (Netcare)
                  </li>
                </ul>
              </div>

              <a
                href="https://rundlemedicalclinic.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all group"
              >
                <span>Explore Medical Clinic Website</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
