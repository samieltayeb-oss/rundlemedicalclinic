"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { pharmacyData } from "@/data/pharmacy";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  RefreshCw,
  Globe,
  ShieldAlert,
  Clock,
  Sparkles,
  ExternalLink,
  Stethoscope,
  FlaskConical,
  CalendarCheck,
  FileCheck,
  Syringe,
  Activity,
  HeartPulse,
  Truck,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Stethoscope,
  RefreshCw,
  Globe,
  ShieldAlert,
  FlaskConical,
  CalendarCheck,
  FileCheck,
  Syringe,
  Activity,
  HeartPulse,
  Sparkles,
  Truck,
};

export function PharmacyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainNav = [
    { label: "Home", href: "/pharmacy" },
    { label: "Services", href: "/pharmacy/services", hasSubmenu: true },
    { label: "Refill & Transfer", href: "/pharmacy/refill-transfer" },
    { label: "Travel Clinic", href: "/pharmacy/travel-clinic" },
    { label: "TB Testing ($60)", href: "/pharmacy/tb-testing" },
    { label: "About", href: "/pharmacy/about" },
    { label: "Contact", href: "/pharmacy/contact" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full transition-all bg-[#030d0c]/95 backdrop-blur-xl border-b border-emerald-500/15">
      {/* Top Utility Sister Clinic Bridge */}
      <div className="bg-[#041210]/95 border-b border-emerald-500/10 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium text-[11px] sm:text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Adjoining Rundle Medical Clinic
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/70 text-[11px] sm:text-xs">
              Free City-Wide Calgary Prescription Delivery
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="https://rundlemedicalclinic.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/80 hover:text-emerald-300 font-medium transition-colors group"
            >
              <span>Visit Medical Clinic</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <span className="text-white/30">&bull;</span>
            <a
              href={`tel:${pharmacyData.phone}`}
              className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wide"
            >
              {pharmacyData.phoneFormatted}
            </a>
          </div>
        </div>
      </div>

      {/* Floating Liquid Glass Navigation Pill */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 relative z-50">
        <div className="bg-[#030d0c]/90 backdrop-blur-2xl border border-emerald-500/25 rounded-2xl lg:rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between shadow-2xl shadow-emerald-950/60">
          {/* Logo & Brand */}
          <Link href="/pharmacy" className="flex items-center gap-3 group relative">
            <img
              src="/brand/pharmacy/logo.png"
              alt="Rundle Pharmacy & Travel Clinic"
              className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-none group-hover:text-emerald-300 transition-colors">
                Rundle Pharmacy
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400/90 mt-1">
                &amp; Travel Clinic &middot; Calgary NE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {mainNav.map((item) =>
              item.hasSubmenu ? (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className="flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white transition-colors py-2 cursor-pointer focus:outline-none"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180 text-emerald-400" : "text-white/60"
                      }`}
                    />
                  </button>

                  {/* Mega-Menu Services Dropdown (Guaranteed High z-Index, Centered, Scrollable if Needed) */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] max-w-[95vw] bg-[#041210]/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-emerald-500/35 p-6 z-[110] text-white mt-3 space-y-4"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                              Accredited Clinical Pharmacy Scope
                            </span>
                            <span className="text-[11px] text-white/60">
                              Click any service for detailed clinical protocols and direct booking
                            </span>
                          </div>

                          <Link
                            href="/pharmacy/services"
                            onClick={() => setServicesOpen(false)}
                            className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all flex items-center gap-1"
                          >
                            <span>All 12 Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* 12 Services Grid */}
                        <div className="grid grid-cols-2 gap-2.5 max-h-[62vh] overflow-y-auto pr-1">
                          {pharmacyData.services.map((srv) => {
                            const Icon = iconMap[srv.iconName] || Sparkles;

                            return (
                              <Link
                                key={srv.id}
                                href={`/pharmacy/services/${srv.slug}`}
                                onClick={() => setServicesOpen(false)}
                                className="p-2.5 rounded-2xl hover:bg-emerald-950/60 border border-transparent hover:border-emerald-500/30 transition-all flex items-start gap-3 group/srv"
                              >
                                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 group-hover/srv:bg-emerald-500 group-hover/srv:text-slate-950 transition-colors mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-xs font-bold text-white group-hover/srv:text-emerald-300 truncate">
                                      {srv.title}
                                    </span>
                                  </div>
                                  <span className="text-[10px] uppercase tracking-wider text-emerald-400/90 font-medium block">
                                    {srv.badge}
                                  </span>
                                  <span className="text-[11px] text-white/60 line-clamp-1 block mt-0.5">
                                    {srv.shortDescription}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>

                        {/* Bottom Banner */}
                        <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-xs text-white/70 bg-black/40 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl">
                          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Prescribing Pharmacists &middot; Free Calgary Delivery &middot; Open 7 Days</span>
                          </div>
                          <Link
                            href="/pharmacy/services"
                            onClick={() => setServicesOpen(false)}
                            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 shrink-0"
                          >
                            <span>Open Services Directory</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/85 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${pharmacyData.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-950/60 text-emerald-300 text-xs font-semibold tracking-wide transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{pharmacyData.phoneFormatted}</span>
            </a>

            <Link
              href="/pharmacy/refill-transfer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-1.5 group cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Refill / Transfer</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-emerald-950/40 border border-emerald-500/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-3 sm:mx-6 mb-3 bg-[#030d0c]/98 backdrop-blur-2xl rounded-3xl border border-emerald-500/25 p-5 shadow-2xl overflow-hidden z-50"
          >
            <div className="flex flex-col gap-2">
              {mainNav.map((item) =>
                item.hasSubmenu ? (
                  <div key={item.label} className="border-b border-emerald-500/15 pb-2">
                    <div className="flex items-center justify-between py-2 px-3">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-semibold text-white hover:text-emerald-300"
                      >
                        <span>{item.label}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="p-1.5 rounded-lg text-emerald-400 hover:bg-emerald-950/40 flex items-center gap-1 text-xs font-semibold"
                      >
                        <span>{mobileServicesOpen ? "Hide" : "Show 12"}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-2 py-2 space-y-1.5 bg-black/40 rounded-2xl mt-1 max-h-60 overflow-y-auto">
                        {pharmacyData.services.map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/pharmacy/services/${srv.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="py-1.5 px-2.5 text-xs text-white/80 hover:text-emerald-300 flex items-center justify-between rounded-lg hover:bg-emerald-950/40"
                          >
                            <span className="truncate">{srv.title}</span>
                            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 shrink-0">
                              {srv.badge}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href="/pharmacy/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2 px-2.5 text-xs font-bold text-emerald-400 flex items-center gap-1 mt-2 border-t border-white/10"
                        >
                          <span>Open Full Services Page &rarr;</span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-3 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-emerald-950/40 transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400/60" />
                  </Link>
                )
              )}

              <div className="pt-3 border-t border-emerald-500/20 flex flex-col gap-2 mt-2">
                <a
                  href={`tel:${pharmacyData.phone}`}
                  className="w-full py-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call {pharmacyData.phoneFormatted}</span>
                </a>
                <Link
                  href="/pharmacy/refill-transfer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-bold text-center shadow-lg shadow-emerald-500/20"
                >
                  Online Prescription Refill &amp; Transfer
                </Link>
                <a
                  href="https://rundlemedicalclinic.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] text-center flex items-center justify-center gap-1.5"
                >
                  <span>Visit Sister Medical Clinic</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
