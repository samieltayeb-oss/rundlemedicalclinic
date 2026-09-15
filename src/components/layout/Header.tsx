"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { clinicData } from "@/data/clinic";
import { Menu, X, ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="relative w-full bg-surface/95 backdrop-blur-md border-b border-border/80 transition-all z-40">
      <div className="container mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-3.5 group relative">
          <img 
            src="/brand/logosvg.svg" 
            alt="Rundle Medical Clinic" 
            className="h-11 md:h-12 w-auto group-hover:scale-105 transition-transform" 
          />
          <div className="hidden sm:flex flex-col justify-center">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-foreground leading-none group-hover:text-primary transition-colors">
              Rundle Medical Clinic
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary/80 mt-1">
              Calgary Northeast &middot; Primary & Walk-in Care
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navigation.main.map((item) => (
            item.label === "Services" ? (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-2">
                  <span>{item.label}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-primary" : "text-muted"}`} />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full -left-20 w-[640px] bg-surface rounded-3xl shadow-2xl border border-border/80 overflow-hidden grid grid-cols-2 p-7 gap-8 z-50"
                    >
                      {navigation.services.map((group, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                            {group.category}
                          </span>
                          <div className="flex flex-col gap-2">
                            {group.items.map((subItem, sIdx) => (
                              <Link 
                                key={sIdx} 
                                href={subItem.href}
                                className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors flex items-center justify-between group/link py-1"
                              >
                                <span>{subItem.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all text-primary" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="col-span-2 pt-4 border-t border-border/60 flex items-center justify-between bg-surface-elevated/50 -mx-7 -mb-7 p-4 px-7">
                        <span className="text-xs text-muted">All services covered under Alberta Health Care</span>
                        <Link href="/services" className="text-xs font-bold text-primary hover:underline">
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
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href={clinicData.address.googleMapsUrl}
            target="_blank"
            className="text-xs font-semibold text-muted hover:text-foreground transition-colors flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-surface-elevated"
          >
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span>Directions</span>
          </Link>

          <a 
            href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`}
            className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>{clinicData.contact.phone}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-foreground hover:bg-surface-elevated transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-surface px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navigation.main.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-foreground hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-border flex flex-col gap-3">
              <a 
                href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`}
                className="w-full bg-primary text-white py-3.5 rounded-full font-semibold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" /> Call {clinicData.contact.phone}
              </a>
              <Link 
                href={clinicData.address.googleMapsUrl}
                target="_blank"
                className="w-full bg-surface-elevated text-foreground border border-border py-3.5 rounded-full font-medium text-center flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-secondary" /> Get Directions
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
