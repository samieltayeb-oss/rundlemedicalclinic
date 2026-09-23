"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PharmacyHero } from "@/components/pharmacy/PharmacyHero";
import { ServicesGlowGrid } from "@/components/pharmacy/ServicesGlowGrid";
import { ClinicBridgeSection } from "@/components/pharmacy/ClinicBridgeSection";
import { pharmacyData } from "@/data/pharmacy";
import {
  ShieldCheck,
  Truck,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Phone,
  FlaskConical,
  Globe,
  RefreshCw,
  HelpCircle,
} from "lucide-react";

export default function PharmacyHomePage() {
  const faqs = [
    {
      q: "How do I transfer my prescriptions from another pharmacy?",
      a: "Transferring to Rundle Pharmacy takes under 2 minutes. You never need to call your previous pharmacy—simply submit your name and current pharmacy on our Refill & Transfer page (or call us at 403-798-9280), and our team transfers your active prescriptions and remaining refills immediately.",
    },
    {
      q: "Is city-wide prescription delivery truly free?",
      a: "Yes! We provide 100% free prescription delivery throughout Calgary. Whether you reside in the Northeast, Northwest, Southeast, or Southwest, our courier delivers your medications and blister packs directly to your door at zero delivery charge.",
    },
    {
      q: "Can your pharmacists prescribe medications without a doctor?",
      a: "Yes. Our licensed prescribing pharmacists have Additional Prescribing Authorization (APA) in Alberta. We can assess and prescribe for uncomplicated ailments (UTIs, cold sores, seasonal allergies, mild skin conditions) and renew maintenance medications without waiting for a clinic visit.",
    },
    {
      q: "How does the $60 Tuberculosis (TB) testing work?",
      a: "We administer the standard Mantoux TB skin test on-site. The test requires two quick visits: Day 1 is the 5-minute intradermal injection, and Day 2 (48 to 72 hours later) is the official clinical reading and issuance of your stamped documentation for nursing school, healthcare jobs, or immigration.",
    },
    {
      q: "How are you connected to Rundle Medical Clinic?",
      a: "Rundle Pharmacy is situated in the exact same healthcare complex as Rundle Medical Clinic (adjoining units at 3735 Rundlehorn Dr NE). Our physicians and pharmacists communicate directly on Netcare and shared medical records, ensuring your prescriptions are verified and ready without travel or delay.",
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Bionova Biotech Inspired Hero with QuickActionDock */}
      <PharmacyHero />

      {/* 2. Trust Stats Bar */}
      <section className="bg-[#020908] py-8 border-y border-emerald-500/15 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {pharmacyData.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent block">
                {stat.value}
              </span>
              <span className="text-xs text-white/60 font-medium uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MotionSites Glow Features 12-Service Grid */}
      <ServicesGlowGrid />

      {/* 4. Visual Spotlight 1: Precision Compounding Lab */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#041210] border-t border-emerald-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 shadow-2xl group">
                <img
                  src="/brand/pharmacy/compounding-lab.jpg"
                  alt="Rundle Pharmacy Sterile Compounding Lab"
                  className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041210] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030d0c]/85 backdrop-blur-xl border border-white/10 text-xs">
                  <span className="font-bold text-emerald-300 block">
                    Custom Pharmaceutical Compounding
                  </span>
                  <span className="text-white/70">
                    Bespoke strengths, allergy-free capsules, flavored liquids, and specialized pain creams.
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Specialized Formulations</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
                When Standard Medications Don&apos;t Fit, We Compound Them.
              </h2>

              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Many patients require unique medication strengths, dye-free formulas, or liquid suspensions that commercial pharmaceutical manufacturers do not produce. Our compounding laboratory works directly with your prescribing physician to formulate custom medication solutions.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Hypoallergenic formulas free of gluten, lactose, dyes, and preservatives",
                  "Pediatric liquid flavorings (bubblegum, grape, strawberry) for easier child administration",
                  "Topical pain management creams combining multiple active analgesics",
                  "Veterinary medications customized for household pets",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/pharmacy/services#compounding"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all group"
                >
                  <span>Learn About Compounding</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visual Spotlight 2: Travel Clinic & $60 TB Skin Testing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030d0c] border-t border-emerald-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>Travel Health &amp; Diagnostic Diagnostics</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
                Global Travel Consultations &amp; Certified $60 TB Testing.
              </h2>

              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Whether you are traveling overseas on vacation or requiring TB screening for nursing school, healthcare employment, or immigration, Rundle Pharmacy provides certified clinical assessments 7 days a week.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Travel Clinic</span>
                  </h4>
                  <p className="text-xs text-white/70">
                    Yellow Fever, Typhoid, Hepatitis, and prescriptions for traveler&apos;s diarrhea and malaria prevention.
                  </p>
                  <Link
                    href="/pharmacy/travel-clinic"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 pt-1"
                  >
                    <span>Travel details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>TB Skin Testing ($60)</span>
                  </h4>
                  <p className="text-xs text-white/70">
                    1-step and 2-step Mantoux tests for SAIT, Bow Valley, U of C students and healthcare workers.
                  </p>
                  <Link
                    href="/pharmacy/tb-testing"
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 pt-1"
                  >
                    <span>TB testing details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Side-by-Side Images */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden border border-emerald-500/20 shadow-xl group">
                <img
                  src="/brand/pharmacy/travel-clinic.jpg"
                  alt="Travel Clinic Consultation"
                  className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="rounded-3xl overflow-hidden border border-emerald-500/20 shadow-xl group">
                <img
                  src="/brand/pharmacy/tb-testing.jpg"
                  alt="Certified TB Skin Testing"
                  className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Visual Spotlight 3: Dispensing & Blister Compliance Packs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#041210] border-t border-emerald-500/15 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/25 shadow-2xl group">
                <img
                  src="/brand/pharmacy/dispensing-refill.jpg"
                  alt="Pharmacist dispensing medication and organizing blister packs"
                  className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041210] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030d0c]/85 backdrop-blur-xl border border-white/10 text-xs">
                  <span className="font-bold text-teal-300 block">
                    Weekly Dose Organizers &middot; Blister Packaging
                  </span>
                  <span className="text-white/70">
                    Complimentary blister packaging for seniors and multi-medication routines. Delivered free every week.
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                <span>Zero Fee Medication Care</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
                Accurate Medication Blister Packs &amp; Free Home Delivery.
              </h2>

              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                Managing multiple daily medications shouldn&apos;t cause anxiety. Our pharmacy team organizes your morning, afternoon, evening, and bedtime doses into sealed, tamper-evident blister cards. We deliver your organized medications anywhere in Calgary at no extra cost.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Clear color-coded compartments for Morning, Noon, Evening, and Bedtime",
                  "Automatic weekly or monthly synchronization so you never run out",
                  "Direct coordination with your family physician at Rundle Medical Clinic",
                  "100% Free doorstep delivery throughout all Calgary quadrants",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/pharmacy/refill-transfer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Request Blister Packs</span>
                </Link>

                <a
                  href={`tel:${pharmacyData.phone}`}
                  className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-medium transition-all"
                >
                  Ask a Pharmacist: {pharmacyData.phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Lumina Sister Clinic Bridge Section */}
      <ClinicBridgeSection />

      {/* 8. Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#030d0c] border-t border-emerald-500/15">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Patient Guidance</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#041210] border border-emerald-500/15 space-y-2.5"
              >
                <h4 className="text-base font-bold text-white flex items-start gap-2.5">
                  <span className="text-emerald-400 font-serif text-lg leading-none">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm text-white/70 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
