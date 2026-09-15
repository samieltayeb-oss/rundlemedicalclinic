"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import { clinicData } from "@/data/clinic";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { EASE, DURATION } from "@/lib/motion";


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group z-50 relative">
          <img 
            src="/brand/logo.png" 
            alt="Rundle Medical Clinic Logo" 
            className="h-16 md:h-20 w-auto" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.main.map((item) => (
            item.label === "Services" ? (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2">
                  {item.label} <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div 
                      className="absolute top-full -left-24 w-[600px] bg-surface rounded-xl shadow-xl border border-border overflow-hidden grid grid-cols-2 p-6 gap-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: DURATION.micro, ease: EASE.out }}
                    >
                      {navigation.services.map(category => (
                        <div key={category.category}>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">{category.category}</h4>
                          <ul className="space-y-2">
                            {category.items.map(service => (
                              <li key={service.label}>
                                <Link href={service.href} className="text-sm hover:text-primary transition-colors block py-1">
                                  {service.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-2 pt-4 border-t border-border mt-2">
                        <Link href="/services" className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-1">
                          View All Services &rarr;
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
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href={clinicData.address.googleMapsUrl}
            target="_blank"
            className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4" /> Directions
          </Link>
          <a 
            href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`}
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> {clinicData.contact.phone}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 -mr-2 z-50 relative bg-surface/50 backdrop-blur-sm rounded-full"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Drawer */}
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: DURATION.standard, ease: EASE.out }}
            >
              <div className="flex flex-col gap-6 flex-grow">
                {/* Mobile Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <a href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-xl text-primary font-medium gap-2">
                    <Phone className="w-5 h-5" /> Call Clinic
                  </a>
                  <Link href={clinicData.address.googleMapsUrl} className="flex flex-col items-center justify-center p-4 bg-surface-elevated rounded-xl text-foreground font-medium gap-2 border border-border">
                    <MapPin className="w-5 h-5" /> Directions
                  </Link>
                </div>

                <nav className="flex flex-col gap-4 text-xl font-serif">
                  {navigation.main.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href}
                      className="py-2 border-b border-border hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-8 text-sm text-muted">
                <p>{clinicData.address.street}</p>
                <p>Hours: {clinicData.hours.weekdays}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
