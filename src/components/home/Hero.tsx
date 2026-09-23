"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, CheckCircle2 } from "lucide-react";
import { clinicData } from "@/data/clinic";

export function Hero() {
  return (
    <section className="relative min-h-[640px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[820px] max-h-[960px] flex items-center pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 overflow-hidden bg-foreground">
      {/* Background Image — absolutely positioned, full coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/production/web/hero-main-notext.webp"
          alt="Rundle Medical Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75 object-center"
        />
        {/* Architectural gradient: high contrast overlay on mobile, elegant gradient on tablet/desktop */}
        <div className="absolute inset-0 bg-[#0a1120]/80 md:bg-transparent md:bg-gradient-to-r md:from-[#0a1120] md:via-[#0a1120]/85 md:to-[#0a1120]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-transparent to-[#0a1120]/40 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column — Headline & CTAs */}
          <div className="lg:col-span-8 max-w-3xl">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full liquid-glass text-white text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                Rundle Medical Clinic &middot; Calgary NE
              </div>
            </div>

            <div>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-5 sm:mb-6">
                Modern care. <br />
                <span className="italic font-light text-secondary">Close to home.</span>
              </h1>
            </div>

            <div>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl font-normal leading-relaxed">
                Family medicine, pediatric care, and comprehensive primary healthcare for individuals and families in Calgary Northeast.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  href={`tel:${clinicData.contact.phone.replace(/-/g, "")}`}
                  className="bg-primary hover:bg-primary/90 text-white px-7 py-4 rounded-2xl font-medium transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" /> Call the Clinic &middot; (403) 457-5850
                </a>
                <Link
                  href="/services"
                  className="liquid-glass hover:bg-white hover:text-[#0a1120] text-white border border-white/20 px-7 py-4 rounded-2xl font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base hover:-translate-y-0.5 shadow-lg group"
                >
                  <span>Explore 12 Specialties</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Walk-ins Welcome</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>On-site Pharmacy</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-white/20" />
              <Link
                href={clinicData.address.googleMapsUrl}
                target="_blank"
                className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>3735 Rundlehorn Dr NE #12</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Clinical Credentials Liquid Glass Card */}
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="liquid-glass rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl flex flex-col gap-4 text-white">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
                  Clinical Accreditation
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug mb-1 text-white">
                  CPSA Licensed Physicians
                </h3>
                <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
                  College of Physicians and Surgeons of Alberta regulated standard of clinical excellence.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2.5 text-xs text-white/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Covered under Alberta Health Care (AHCIP)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Full Electronic Medical Records (EMR)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>Pediatrics, Women&apos;s Health &amp; Chronic Care</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
