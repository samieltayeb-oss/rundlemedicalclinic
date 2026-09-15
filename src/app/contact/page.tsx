import Image from "next/image";
import { clinicData } from "@/data/clinic";
import { Phone, MapPin, Printer, Clock, Navigation, ShieldCheck, Car } from "lucide-react";

export const metadata = {
  title: "Contact & Location | Rundle Medical Clinic",
  description: "Get in touch with Rundle Medical Clinic. Find our location in Calgary NE, direct phone lines, and operating hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-contact.webp"
            alt="Contact Rundle Medical Clinic"
            fill
            className="object-cover opacity-60 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/45" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
              Calgary Northeast &middot; Rundle
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Contact & Location</h1>
            <p className="text-xl text-white/85 font-light leading-relaxed">
              We are conveniently situated in the heart of Northeast Calgary with dedicated patient parking and transit access.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Information & Hours (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Direct Communications */}
              <div className="bg-surface rounded-3xl p-8 border border-border/80 shadow-sm">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Direct Inquiries</h2>
                <div className="flex flex-col gap-6">
                  <a 
                    href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} 
                    className="flex items-start gap-4 p-4 rounded-2xl bg-surface-elevated/60 hover:bg-surface-elevated border border-border/60 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Clinic Phone</p>
                      <p className="text-xl text-foreground font-semibold group-hover:text-primary transition-colors">{clinicData.contact.phone}</p>
                      <p className="text-xs text-muted mt-1">Direct reception line for bookings & inquiries</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-elevated/60 border border-border/60">
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center shrink-0 text-muted">
                      <Printer className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">Confidential Medical Fax</p>
                      <p className="text-lg text-foreground font-medium">{clinicData.contact.fax}</p>
                      <p className="text-xs text-muted mt-1">For physician referrals and diagnostic records</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-surface rounded-3xl p-8 border border-border/80 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground">Clinic Hours</h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Walk-ins Welcome
                  </span>
                </div>

                <div className="divide-y divide-border/60">
                  <div className="flex items-center justify-between py-3.5">
                    <span className="text-foreground font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" /> Monday &ndash; Friday
                    </span>
                    <span className="text-foreground font-semibold">{clinicData.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center justify-between py-3.5">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-foreground font-semibold">{clinicData.hours.saturday}</span>
                  </div>
                  <div className="flex items-center justify-between py-3.5">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted text-sm italic">{clinicData.hours.sunday}</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3 text-xs text-muted">
                  <ShieldCheck className="w-4 h-4 text-secondary shrink-0" />
                  <span>On-site Pharmacy available during clinic hours with free prescription delivery.</span>
                </div>
              </div>

            </div>

            {/* Map & Facility Location (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              <div className="bg-surface rounded-3xl p-8 border border-border/80 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-serif text-3xl text-foreground mb-1">Facility Location</h2>
                    <p className="text-muted text-sm">Suite #12 &middot; 3735 Rundlehorn Dr NE, Calgary, AB T1Y 2K1</p>
                  </div>
                  <a 
                    href={clinicData.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md hover:shadow-primary/20 inline-flex items-center justify-center gap-2 text-sm shrink-0"
                  >
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                </div>

                {/* Verified Free Google Maps Embed */}
                <div className="h-[460px] w-full rounded-2xl overflow-hidden bg-surface-elevated border border-border shadow-inner relative">
                  <iframe 
                    src="https://maps.google.com/maps?q=3735+Rundlehorn+Dr+NE+%2312,+Calgary,+AB+T1Y+2K1&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    title="Rundle Medical Clinic Location Map"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-border/60">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Patient Parking</p>
                      <p className="text-xs text-muted">Ample free surface parking directly in front of the clinic entrance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">Transit Accessible</p>
                      <p className="text-xs text-muted">Directly accessible via Calgary Transit bus routes with stops nearby.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
