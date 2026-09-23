import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pharmacyData, PharmacyService } from "@/data/pharmacy";
import {
  ArrowLeft,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock,
  Building2,
  Calendar,
  Truck,
  ExternalLink,
} from "lucide-react";

export function generateStaticParams() {
  return pharmacyData.services.map((srv) => ({
    slug: srv.slug,
  }));
}

export default async function PharmacyServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = pharmacyData.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services (exclude current)
  const relatedServices = pharmacyData.services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const heroImage = service.imageUrl || "/brand/pharmacy/hero-pharmacy.jpg";
  const heroAlt = service.imageAlt || `${service.title} at Rundle Pharmacy`;

  return (
    <div className="min-h-screen bg-[#020908] text-white">
      {/* 1. Real Photographic Hero Banner (100% Authentic Clinical Photography) */}
      <section className="relative min-h-[55vh] lg:min-h-[62vh] flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030d0c]">
        {/* Background Real Photo with Bioluminescent Gradient Masks */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={heroAlt}
            className="w-full h-full object-cover object-center brightness-90 contrast-105 scale-[1.02] transform transition-transform duration-1000"
          />
          {/* Deep Obsidian & Emerald Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030d0c]/98 via-[#030d0c]/85 to-[#030d0c]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020908] via-transparent to-[#030d0c]/70" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Back Navigation Link */}
          <div className="mb-6">
            <Link
              href="/pharmacy/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-emerald-500/20"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All 12 Pharmacy Services</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              {/* Badge & Turnaround Pill */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 backdrop-blur-md">
                  {service.badge}
                </span>

                {service.highlight && (
                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 backdrop-blur-md">
                    {service.highlight}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              {/* Short Description */}
              <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            {/* Quick Action Box */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={`tel:${pharmacyData.phone}`}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Pharmacist: {pharmacyData.phoneFormatted}</span>
              </a>

              <Link
                href="/pharmacy/refill-transfer"
                className="w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm backdrop-blur-md flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>Refill or Transfer Prescription</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Clinical Details & Narrative Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#041210]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#020908]/90 backdrop-blur-2xl border border-emerald-500/20 shadow-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Clinical Scope &amp; Practice</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold">
                Detailed Clinical Overview
              </h2>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Key Clinical Advantages Checklist */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Key Patient Benefits &amp; Protocols:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-white/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Special Callouts for Specific High-Demand Services */}
            {slug === "tb-testing" && (
              <div className="p-8 rounded-3xl bg-emerald-950/30 border border-emerald-500/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-400">
                      Standard Mantoux TB Screening
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      $60 Flat Rate &middot; Walk-Ins 7 Days a Week
                    </h3>
                  </div>
                  <Link
                    href="/pharmacy/tb-testing"
                    className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 self-start"
                  >
                    <span>Dedicated TB Testing Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Includes initial injection and return readout 48 to 72 hours later with an official stamped certificate recognized by SAIT, University of Calgary, Bow Valley College, and healthcare employers.
                </p>
              </div>
            )}

            {slug === "travel-clinic" && (
              <div className="p-8 rounded-3xl bg-amber-950/30 border border-amber-500/30 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase text-amber-400">
                      Designated Yellow Fever Centre
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      Official WHO Yellow Card Certification
                    </h3>
                  </div>
                  <Link
                    href="/pharmacy/travel-clinic"
                    className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 self-start"
                  >
                    <span>Full Travel Clinic Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Pre-travel assessments, destination-specific vaccinations (Hepatitis, Typhoid, Yellow Fever, Rabies), and prescription prophylaxis for malaria and traveler&apos;s diarrhea.
                </p>
              </div>
            )}

            {/* Adjoining Clinic Bridge Banner */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-slate-950 border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  <span>Integrated Healthcare Complex</span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl text-white font-bold">
                  Direct Collaboration with Rundle Medical Clinic
                </h4>
                <p className="text-xs text-white/70 max-w-xl">
                  Located in the exact same commercial facility at 3735 Rundlehorn Dr NE. Physicians and pharmacists communicate directly for instant prescription clarification and refills.
                </p>
              </div>

              <a
                href={pharmacyData.sisterClinic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs shrink-0 flex items-center gap-2 transition-all"
              >
                <span>Visit Medical Clinic</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Photographic Realism Card */}
            <div className="rounded-3xl overflow-hidden border border-emerald-500/20 shadow-xl group">
              <img
                src={heroImage}
                alt={heroAlt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-5 bg-[#020908] border-t border-emerald-500/15 text-xs space-y-2">
                <span className="font-bold text-emerald-300 block">
                  Authentic Community Care
                </span>
                <p className="text-white/60 text-[11px] leading-relaxed">
                  Licensed by the Alberta College of Pharmacy (ACP). Real pharmacists serving real families in Calgary Northeast.
                </p>
              </div>
            </div>

            {/* Insurance & Turnaround Card */}
            <div className="p-6 rounded-3xl bg-[#020908] border border-emerald-500/20 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Service Parameters
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/60">Turnaround:</span>
                  <span className="font-bold text-emerald-300">
                    {service.highlight || "Immediate / Same-Day"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/60">Coverage:</span>
                  <span className="font-medium text-white">
                    {service.coveredByAHCIP ? "Covered by AHCIP / Plans" : "Direct Patient Fee"}
                  </span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/60">Walk-Ins:</span>
                  <span className="font-medium text-white">Accepted 7 Days a Week</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-white/60">Free Delivery:</span>
                  <span className="font-bold text-teal-300">All Calgary Quadrants</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${pharmacyData.phone}`}
                  className="w-full py-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-950/90 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {pharmacyData.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-3xl bg-[#020908] border border-emerald-500/20 space-y-3 text-xs">
              <h4 className="font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Hours of Operation</span>
              </h4>

              <div className="space-y-2">
                {pharmacyData.hours.map((h, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-white/70">{h.days}:</span>
                    <span className="font-bold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Related Services Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020908] border-t border-emerald-500/15">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-white">
              Other Pharmacy Services
            </h3>
            <Link
              href="/pharmacy/services"
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
            >
              <span>View all 12 services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/pharmacy/services/${rel.slug}`}
                className="group rounded-3xl p-6 bg-[#041210] border border-emerald-500/15 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-40 rounded-2xl overflow-hidden mb-3">
                    <img
                      src={rel.imageUrl || "/brand/pharmacy/hero-pharmacy.jpg"}
                      alt={rel.imageAlt || rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300">
                    {rel.badge}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold text-emerald-400">
                  <span>Explore service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
