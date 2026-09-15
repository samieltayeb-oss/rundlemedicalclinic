"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinic";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-12 pb-24 overflow-hidden bg-foreground">
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
        {/* Architectural gradient: dark on left for pristine contrast, translucent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1120] via-[#0a1120]/80 to-[#0a1120]/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-transparent to-[#0a1120]/30 z-10" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-3xl">
          <div className="animate-hero-1 mb-4">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Rundle Medical Clinic &middot; Calgary NE
            </div>
          </div>

          <div className="animate-hero-2">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight mb-6">
              Modern care. <br />
              <span className="italic font-light text-secondary">Close to home.</span>
            </h1>
          </div>

          <div className="animate-hero-3">
            <p className="text-lg md:text-2xl text-white/85 mb-10 max-w-2xl font-normal leading-relaxed">
              Family medicine, pediatric care, and comprehensive primary healthcare for individuals and families in Calgary Northeast.
            </p>
          </div>

          <div className="animate-hero-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={`tel:${clinicData.contact.phone.replace(/-/g, "")}`}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 w-full sm:w-auto text-base hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" /> Call the Clinic &middot; (403) 457-5850
              </a>
              <Link
                href={clinicData.address.googleMapsUrl}
                target="_blank"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-base backdrop-blur-md hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </Link>
            </div>
          </div>

          <div className="animate-hero-5 mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Walk-ins Welcome</span>
            </div>
            <div className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>On-site Pharmacy</span>
            </div>
            <div className="h-3 w-px bg-white/20" />
            <Link
              href="/services"
              className="text-white/80 hover:text-white font-medium underline underline-offset-4 transition-colors"
            >
              Explore 12 Specialties &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
