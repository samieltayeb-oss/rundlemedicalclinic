import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { navigation } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative motif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6 text-balance">
              Care that stays close to home.
            </h2>
            <p className="text-white/70 mb-8 max-w-sm">
              Comprehensive family medicine and walk-in care in Calgary NE.
            </p>
            <div className="flex flex-col gap-2">
              <a href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} className="text-xl font-medium hover:text-primary transition-colors inline-block">
                {clinicData.contact.phoneDisplay}
              </a>
              <p className="text-white/60">Fax: {clinicData.contact.faxDisplay}</p>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/50 mb-4">Location & Hours</h3>
            <div className="mb-6">
              <p className="mb-1">{clinicData.address.street}</p>
              <p>{clinicData.address.city}, {clinicData.address.province}</p>
              {clinicData.address.postalCodeVerified && <p>{clinicData.address.postalCode}</p>}
              <Link href={clinicData.address.googleMapsUrl} target="_blank" className="text-primary hover:text-white transition-colors text-sm mt-2 inline-block">
                Get Directions &rarr;
              </Link>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span>{clinicData.hours.weekdays}</span>
                </li>
                {clinicData.hours.saturdayVerified && (
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Saturday</span>
                    <span>{clinicData.hours.saturday}</span>
                  </li>
                )}
                {clinicData.hours.sundayVerified ? (
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sunday</span>
                    <span>{clinicData.hours.sunday}</span>
                  </li>
                ) : (
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sunday</span>
                    <span className="text-xs self-center ml-2">{clinicData.hours.sunday}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/50 mb-4">Clinic</h3>
            <ul className="space-y-3">
              {navigation.main.filter(n => n.label !== 'Home').map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-sm tracking-widest uppercase text-white/50 mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sister Pharmacy Banner */}
        <div className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-surface/5 to-teal-950/40 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/brand/pharmacy/logo.png"
              alt="Rundle Pharmacy & Travel Clinic"
              className="h-12 w-auto object-contain shrink-0"
            />
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider block">
                Directly Adjoining Healthcare Facility
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                Rundle Pharmacy &amp; Travel Clinic
              </h4>
              <p className="text-xs text-white/70">
                Unit 11 (next door) &middot; Prescribing pharmacists, travel vaccines, compounding &amp; free Calgary delivery.
              </p>
            </div>
          </div>

          <Link
            href="/pharmacy"
            className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 shrink-0"
          >
            <span>Visit Pharmacy &rarr;</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Rundle Medical Clinic. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link
              href="/pharmacy"
              className="text-secondary hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
            >
              <span>Sister Facility: Rundle Pharmacy &amp; Travel Clinic</span>
            </Link>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5 text-white/70">
              Built by{" "}
              <span className="font-extrabold tracking-wider bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                NEXORA
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
