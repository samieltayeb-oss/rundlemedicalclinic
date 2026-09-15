"use client";

import { Phone, MapPin, Clock, Info } from "lucide-react";
import { clinicData } from "@/data/clinic";
import Link from "next/link";

export function ActionStrip() {
  return (
    <section className="bg-surface-elevated border-y border-border relative z-30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          
          <a href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} className="flex flex-col items-center text-center p-6 sm:p-8 hover:bg-black/5 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-muted mb-1">Call</span>
            <span className="font-medium text-foreground">{clinicData.contact.phoneDisplay}</span>
          </a>

          <Link href={clinicData.address.googleMapsUrl} target="_blank" className="flex flex-col items-center text-center p-6 sm:p-8 hover:bg-black/5 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-muted mb-1">Directions</span>
            <span className="font-medium text-foreground">Calgary NE</span>
          </Link>

          <Link href="/contact" className="flex flex-col items-center text-center p-6 sm:p-8 hover:bg-black/5 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-muted mb-1">Hours</span>
            <span className="font-medium text-foreground">Open Today</span>
          </Link>

          <Link href="/new-patients" className="flex flex-col items-center text-center p-6 sm:p-8 hover:bg-black/5 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
              <Info className="w-5 h-5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-muted mb-1">Walk-in</span>
            <span className="font-medium text-foreground">Information</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
