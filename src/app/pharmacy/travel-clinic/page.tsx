"use client";

import Link from "next/link";
import { pharmacyData } from "@/data/pharmacy";
import {
  Globe,
  ShieldCheck,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Phone,
  Plane,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";

export default function TravelClinicPage() {
  const vaccines = [
    {
      name: "Yellow Fever",
      description: "Official WHO-certified international vaccination center. International Certificate of Vaccination or Prophylaxis (ICVP) issued on-site.",
      badge: "WHO Certified",
    },
    {
      name: "Typhoid Fever",
      description: "Oral and injectable formulations available for travel to South Asia, Central/South America, and Africa.",
      badge: "Oral & Injectable",
    },
    {
      name: "Hepatitis A & B",
      description: "Twinrix combined vaccine or individual doses for protection against contaminated food and water-borne pathogens.",
      badge: "Food & Water Safety",
    },
    {
      name: "Meningococcal Disease",
      description: "Mandatory for pilgrims traveling for Hajj or Umrah and travelers to the African meningitis belt.",
      badge: "Hajj/Umrah Approved",
    },
    {
      name: "Rabies Prophylaxis",
      description: "Pre-exposure immunization for eco-travelers, long-term expatriates, and travelers to remote international destinations.",
      badge: "Pre-Exposure",
    },
    {
      name: "Japanese Encephalitis & Cholera",
      description: "Dukoral oral vaccine for enterotoxigenic E. coli (ETEC) and Ixiaro for agricultural/rural Asia travel.",
      badge: "Traveler's Diarrhea",
    },
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>Designated Yellow Fever &amp; Travel Vaccination Center</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Comprehensive Travel Health Clinic
        </h1>

        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Expert pre-travel risk consultations, destination-specific immunizations, and preventive prescriptions to keep you safe across the globe.
        </p>
      </div>

      {/* Main Grid: Visual & Consultation Overview */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="rounded-3xl overflow-hidden border border-amber-500/25 shadow-2xl group">
            <img
              src="/brand/pharmacy/travel-clinic.jpg"
              alt="Licensed Pharmacist Conducting Pre-Travel Health Consultation"
              className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030d0c] via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#030d0c]/85 backdrop-blur-xl border border-white/10 text-xs">
              <span className="font-bold text-amber-300 block">
                Official International Travel Documentation
              </span>
              <span className="text-white/70">
                Yellow fever stamps, vaccination record cards, and destination advice.
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-bold tracking-tight">
            Personalized Travel Risk Assessment
          </h2>

          <p className="text-white/75 text-sm leading-relaxed">
            Every destination carries unique health considerations. When you book a travel consultation at Rundle Pharmacy, our certified travel pharmacists review your exact travel itinerary, medical history, and activities to provide tailored immunization and preventive care.
          </p>

          <div className="space-y-3">
            {[
              "Review of your destination countries, seasons, and urban vs. rural exposure",
              "Administer required & recommended vaccines directly in our private clinic room",
              "Prescribe medications for malaria prevention (Malarone, Doxycycline) and traveler's diarrhea",
              "Official Yellow Card certification recognized by international border customs",
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={`tel:${pharmacyData.phone}`}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 hover:from-amber-300 hover:to-emerald-300 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment: {pharmacyData.phoneFormatted}</span>
            </a>

            <Link
              href="/pharmacy/contact"
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              Location &amp; Hours
            </Link>
          </div>
        </div>
      </div>

      {/* Vaccines Grid */}
      <div className="max-w-6xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            Available Travel Vaccines &amp; Prophylaxis
          </h3>
          <p className="text-white/60 text-xs sm:text-sm">
            All vaccines administered on-site by certified injection pharmacists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vaccines.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-[#041210] border border-amber-500/15 hover:border-amber-500/35 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-lg font-bold text-white">{v.name}</h4>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300">
                  {v.badge}
                </span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Advice Box */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-4">
        <Clock className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
        <div className="space-y-1 text-xs sm:text-sm">
          <h4 className="font-bold text-amber-300">When Should You Book?</h4>
          <p className="text-white/75 leading-relaxed">
            We recommend scheduling your travel appointment <strong>4 to 6 weeks before departure</strong>. Many travel vaccines require multi-dose series or up to two weeks for peak immunity to develop before arrival. Last-minute travelers are also welcome for accelerated schedules.
          </p>
        </div>
      </div>
    </div>
  );
}
