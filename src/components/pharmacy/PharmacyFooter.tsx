"use client";

import Link from "next/link";
import { pharmacyData } from "@/data/pharmacy";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Heart,
  Truck,
  Building2,
} from "lucide-react";

export function PharmacyFooter() {
  return (
    <footer className="bg-[#020807] text-white pt-16 pb-12 border-t border-emerald-500/20 relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Sister Clinic Portal Callout Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-sky-950/40 via-[#030d0c] to-emerald-950/40 border border-sky-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-sky-400 tracking-wider block">
                Healthcare Ecosystem
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Looking for Rundle Medical Clinic?
              </h4>
              <p className="text-xs text-white/60">
                Our sister primary care and walk-in clinic is located directly next door in Unit 10.
              </p>
            </div>
          </div>

          <a
            href="https://rundlemedicalclinic.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold shadow-lg shadow-sky-500/20 transition-all flex items-center gap-2 shrink-0 group"
          >
            <span>Visit Medical Clinic Website</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/brand/pharmacy/logo.png"
                alt="Rundle Pharmacy Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="font-serif text-lg font-bold text-white block">
                  Rundle Pharmacy
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">
                  &amp; Travel Clinic
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              Your local independent community pharmacy adjoining Rundle Medical Clinic. Providing clinical prescribing, travel health vaccines, compounding, and free Calgary home delivery.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-semibold">
              <Truck className="w-4 h-4" />
              <span>100% Free Calgary Prescription Delivery</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pharmacy" className="text-white/70 hover:text-white transition-colors">
                  Pharmacy Home
                </Link>
              </li>
              <li>
                <Link href="/pharmacy/services" className="text-white/70 hover:text-white transition-colors">
                  All 12 Clinical Services
                </Link>
              </li>
              <li>
                <Link href="/pharmacy/refill-transfer" className="text-white/70 hover:text-white transition-colors">
                  Refill or Transfer Prescriptions
                </Link>
              </li>
              <li>
                <Link href="/pharmacy/travel-clinic" className="text-white/70 hover:text-white transition-colors">
                  Travel Health &amp; Vaccinations
                </Link>
              </li>
              <li>
                <Link href="/pharmacy/tb-testing" className="text-white/70 hover:text-white transition-colors">
                  Tuberculosis (TB) Testing ($60)
                </Link>
              </li>
              <li>
                <Link href="/pharmacy/about" className="text-white/70 hover:text-white transition-colors">
                  About Our Pharmacists
                </Link>
              </li>
              <li>
                <Link href="/pharmacy/contact" className="text-white/70 hover:text-white transition-colors">
                  Hours &amp; Location Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours of Operation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Hours of Operation
            </h4>
            <div className="space-y-2 text-xs">
              {pharmacyData.hours.map((h, i) => (
                <div key={i} className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/70">{h.days}:</span>
                  <span className="font-semibold text-white">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-white/50 block">
                Walk-ins always welcome for injections, consultations &amp; OTC care.
              </span>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${pharmacyData.phone}`}
                    className="hover:text-emerald-300 font-bold block"
                  >
                    Tel: {pharmacyData.phoneFormatted}
                  </a>
                  <span className="text-[11px] text-white/60">Fax: {pharmacyData.fax}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${pharmacyData.email}`}
                  className="hover:text-emerald-300 break-all"
                >
                  {pharmacyData.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {pharmacyData.address.suite} - {pharmacyData.address.street}
                  <br />
                  {pharmacyData.address.city}, {pharmacyData.address.province} {pharmacyData.address.postalCode}
                  <br />
                  <span className="text-[11px] text-emerald-400 font-semibold">
                    {pharmacyData.address.landmark}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & ACP Notice */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              &copy; {new Date().getFullYear()} Rundle Pharmacy &amp; Travel Clinic. Licensed by the Alberta College of Pharmacy (ACP).
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/pharmacy/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <a
              href="https://rundlemedicalclinic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Rundle Medical Clinic
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
