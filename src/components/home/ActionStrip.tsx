"use client";

import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { clinicData } from "@/data/clinic";
import Link from "next/link";

export function ActionStrip() {
  return (
    <section className="bg-surface border-y border-border/80 relative z-30 shadow-sm overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/70">
          
          {/* 1. Phone */}
          <a 
            href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} 
            className="flex items-center gap-4 p-5 sm:p-6 lg:p-7 hover:bg-surface-elevated/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-muted mb-0.5">Direct Line</span>
              <span className="block text-base font-semibold text-foreground group-hover:text-primary transition-colors">{clinicData.contact.phoneDisplay}</span>
              <span className="block text-xs text-muted">Reception & Bookings</span>
            </div>
          </a>

          {/* 2. Location */}
          <Link 
            href={clinicData.address.googleMapsUrl} 
            target="_blank" 
            className="flex items-center gap-4 p-5 sm:p-6 lg:p-7 hover:bg-surface-elevated/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-muted mb-0.5">Location</span>
              <span className="block text-base font-semibold text-foreground group-hover:text-secondary transition-colors">3735 Rundlehorn Dr</span>
              <span className="block text-xs text-muted">Suite #12 &middot; Calgary NE</span>
            </div>
          </Link>

          {/* 3. Hours */}
          <Link 
            href="/contact" 
            className="flex items-center gap-4 p-5 sm:p-6 lg:p-7 hover:bg-surface-elevated/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-muted mb-0.5">Clinic Hours</span>
              <span className="block text-base font-semibold text-foreground group-hover:text-emerald-600 transition-colors">Open Mon &ndash; Sat</span>
              <span className="block text-xs text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                9:00 AM &ndash; 8:00 PM
              </span>
            </div>
          </Link>

          {/* 4. Walk-in */}
          <Link 
            href="/new-patients" 
            className="flex items-center gap-4 p-5 sm:p-6 lg:p-7 hover:bg-surface-elevated/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[11px] font-bold uppercase tracking-widest text-muted mb-0.5">Patient Access</span>
              <span className="block text-base font-semibold text-foreground group-hover:text-indigo-600 transition-colors">Walk-ins Welcome</span>
              <span className="block text-xs text-muted">No Referral Required</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
