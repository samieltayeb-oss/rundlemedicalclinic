"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { clinicData } from "@/data/clinic";
import { Menu, X, ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";

export function Header() {
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

  return (
    <header className="w-full transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-3">
        
        {/* Floating Liquid Glass Pill */}
        <div className="liquid-glass !overflow-visible rounded-2xl lg:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl relative">
          
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <img 
              src="/brand/logosvg.svg" 
              alt="Rundle Medical Clinic" 
              className="h-10 sm:h-11 md:h-12 w-auto group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white leading-none group-hover:text-secondary transition-colors">
                Rundle Medical Clinic
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-secondary/90 mt-1">
                Calgary Northeast &middot; Primary &amp; Walk-in Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.main.map((item) => (
              item.label === "Services" ? (
                <div 
                  key={item.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button 
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1.5 text-sm font-medium text-white/85 hover:text-white transition-colors py-2 cursor-pointer focus:outline-none"
                    aria-expanded={servicesOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-secondary" : "text-white/60"}`} />
                  </button>
                  
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="!absolute top-full left-1/2 -translate-x-1/2 w-[680px] max-w-[95vw] bg-[#0a1120]/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden grid grid-cols-2 p-7 gap-8 z-[110] text-white mt-3"
                      >
                        {navigation.services.map((group, idx) => (
                          <div key={idx} className="flex flex-col gap-3">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
                              {group.category}
                            </span>
                            <div className="flex flex-col gap-2">
                              {group.items.map((subItem, sIdx) => (
                                <Link 
                                  key={sIdx} 
                                  href={subItem.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="text-sm text-white/85 hover:text-secondary transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <div className="col-span-2 pt-4 border-t border-white/15 flex items-center justify-between bg-black/25 -mx-7 -mb-7 p-4 px-7">
                          <span className="text-xs text-white/70">All services covered under Alberta Health Care</span>
                          <Link 
                            href="/services" 
                            onClick={() => setServicesOpen(false)}
                            className="text-xs font-bold text-secondary hover:underline"
                          >
                            View All 12 Specialties &rarr;
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
                  className="text-sm font-medium text-white/85 hover:text-white transition-colors py-2"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href={clinicData.address.googleMapsUrl} 
              target="_blank" 
              className="text-xs font-semibold text-white/80 hover:text-white transition-colors flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-white/10"
            >
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>Directions</span>
            </Link>

            <a 
              href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} 
              className="bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all shadow-md hover:shadow-primary/30 flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{clinicData.contact.phone}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Drawer (Scrollable & Responsive) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-2 bg-[#0a1120]/98 backdrop-blur-3xl rounded-2xl border border-white/20 p-5 sm:p-6 flex flex-col gap-4 shadow-2xl text-white max-h-[calc(100dvh-110px)] overflow-y-auto overscroll-contain z-50"
            >
              <nav className="flex flex-col gap-1">
                {navigation.main.map((item) => (
                  item.label === "Services" ? (
                    <div key={item.label} className="border-b border-white/10 pb-2">
                      <div className="flex items-center justify-between py-2">
                        <Link 
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-base sm:text-lg font-serif text-white hover:text-secondary transition-colors"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1.5 rounded-lg text-secondary hover:bg-white/10 flex items-center gap-1 text-xs font-semibold"
                        >
                          <span>{mobileServicesOpen ? "Hide" : "Show 12"}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="pl-3 pr-2 py-2 space-y-2 bg-black/40 rounded-xl mt-1 max-h-56 overflow-y-auto">
                          {navigation.services.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary/80 block">
                                {group.category}
                              </span>
                              {group.items.map((subItem, sIdx) => (
                                <Link
                                  key={sIdx}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1 px-2 text-xs text-white/80 hover:text-white rounded hover:bg-white/10"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-2 text-xs font-bold text-secondary border-t border-white/15 mt-2"
                          >
                            View All 12 Specialties &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      key={item.label} 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base sm:text-lg font-serif text-white hover:text-secondary transition-colors py-2 border-b border-white/10 flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-white/40" />
                    </Link>
                  )
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <a 
                  href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-semibold text-center flex items-center justify-center gap-2 shadow-md transition-all text-sm"
                >
                  <Phone className="w-4 h-4" /> Call {clinicData.contact.phone}
                </a>
                <Link 
                  href={clinicData.address.googleMapsUrl} 
                  target="_blank" 
                  className="w-full bg-white/10 hover:bg-white/15 text-white border border-white/20 py-3 rounded-xl font-medium text-center flex items-center justify-center gap-2 text-sm transition-all"
                >
                  <MapPin className="w-4 h-4 text-secondary" /> Get Directions
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}
