"use client";

import { useState } from "react";
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
} from "lucide-react";

export function PharmacyHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
    <header className="w-full transition-all">
      {/* Top Utility Sister Clinic Bridge */}
      <div className="bg-[#041210]/90 backdrop-blur-md border-b border-emerald-500/15 py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Adjoining Rundle Medical Clinic
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline text-white/70">
              Free City-Wide Calgary Prescription Delivery
            </span>
          </div>

          <div className="flex items-center gap-4">
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div className="bg-[#030d0c]/80 backdrop-blur-xl border border-emerald-500/20 rounded-2xl lg:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl shadow-emerald-950/40">
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
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white transition-colors py-2 cursor-pointer">
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesOpen ? "rotate-180 text-emerald-400" : "text-white/60"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full -left-20 w-[580px] bg-[#041210]/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-emerald-500/25 p-6 grid grid-cols-2 gap-3 z-50 text-white mt-2"
                      >
                        {pharmacyData.services.slice(0, 8).map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/pharmacy/services#${srv.slug}`}
                            className="p-3 rounded-2xl hover:bg-emerald-950/40 border border-transparent hover:border-emerald-500/20 transition-all flex flex-col group/srv"
                          >
                            <span className="text-xs font-bold text-white group-hover/srv:text-emerald-300 flex items-center justify-between">
                              {srv.title}
                              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300">
                                {srv.badge}
                              </span>
                            </span>
                            <span className="text-[11px] text-white/60 line-clamp-1 mt-1">
                              {srv.shortDescription}
                            </span>
                          </Link>
                        ))}

                        <div className="col-span-2 pt-2 border-t border-emerald-500/15 flex items-center justify-between">
                          <Link
                            href="/pharmacy/services"
                            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
                          >
                            <span>View All 12 Pharmacy Services</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-[11px] text-white/50">
                            Adjoining Medical Clinic
                          </span>
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
            className="lg:hidden mx-3 sm:mx-6 mt-2 bg-[#030d0c]/98 backdrop-blur-2xl rounded-3xl border border-emerald-500/20 p-5 shadow-2xl overflow-hidden z-50"
          >
            <div className="flex flex-col gap-3">
              {mainNav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-xl text-sm font-semibold text-white/90 hover:text-white hover:bg-emerald-950/40 transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400/60" />
                </Link>
              ))}

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
