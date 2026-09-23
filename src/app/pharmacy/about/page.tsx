"use client";

import Link from "next/link";
import { pharmacyData } from "@/data/pharmacy";
import {
  Heart,
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  Phone,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function AboutPharmacyPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5" />
          <span>Local Community Roots</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Your Health. Our Expertise.
        </h1>

        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Rundle Pharmacy &amp; Travel Clinic is an independent, locally-owned community pharmacy proudly serving Calgary Northeast with compassionate, physician-collaborative healthcare.
        </p>
      </div>

      {/* Main Narrative & Story Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border border-emerald-500/25 shadow-2xl group">
            <img
              src="/brand/pharmacy/hero-pharmacy.jpg"
              alt="Rundle Pharmacy Community Dispensary"
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d0c] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030d0c]/85 backdrop-blur-xl border border-white/10 text-xs">
              <span className="font-bold text-emerald-300 block">
                Independent &middot; Patient-First Care
              </span>
              <span className="text-white/70">
                Conveniently located at 36 Street NE &amp; Rundlehorn Drive NE, Calgary.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold tracking-tight leading-snug">
            Where Personal Relationships Meet Advanced Clinical Pharmacy
          </h2>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Unlike large corporate supermarket pharmacy counters where you are treated as a prescription number, Rundle Pharmacy was founded on deep personal relationships. We know our patients by name, understand their family medical histories, and take the time to answer every question.
          </p>

          <p className="text-white/75 text-sm sm:text-base leading-relaxed">
            Directly adjoining Rundle Medical Clinic, we work side-by-side with family doctors, pediatricians, and chronic disease specialists. When your physician prescribes a medication, our team reviews it immediately, verifies dosage compatibility, and packages it for same-day pickup or free home delivery.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Licensed by the Alberta College of Pharmacy (ACP)",
              "Certified Prescribing Pharmacists with Additional Prescribing Authorization (APA)",
              "Full Electronic Netcare Integration for zero-error drug interaction safety",
              "Complimentary blister packaging & free Calgary-wide home delivery",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/pharmacy/contact"
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2"
            >
              <span>Visit Our Dispensary</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://rundlemedicalclinic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
            >
              <span>Rundle Medical Clinic</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
