"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { AnimatePresence, motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

export function ServicesExperience() {
  const services = [
    {
      id: "01",
      title: "Family Medicine",
      desc: "Our family physicians provide comprehensive, ongoing care for patients of all ages, acting as your first point of contact for health concerns.",
      image: "/assets/production/web/service-family-medicine.webp",
      href: "/services/family-medicine"
    },
    {
      id: "02",
      title: "Pediatrics",
      desc: "Dedicated pediatric care managing the physical, behavioral, and mental health of your child from infancy through adolescence.",
      image: "/assets/production/web/service-pediatrics.webp",
      href: "/services/pediatrics"
    },
    {
      id: "03",
      title: "Women's Health",
      desc: "Specialized consultations for contraception, IUDs, menopause symptoms, and prenatal/postnatal care.",
      image: "/assets/production/web/service-womens-health.webp",
      href: "/services/womens-health"
    },
    {
      id: "04",
      title: "Chronic Care",
      desc: "Structured management programs and health coaching for conditions such as diabetes, hypertension, asthma, and COPD.",
      image: "/assets/production/web/service-chronic-care.webp",
      href: "/services/chronic-care"
    },
    {
      id: "05",
      title: "Preventive Care",
      desc: "Periodic medical exams, cancer screening, and health education designed to identify and manage risks early.",
      image: "/brand/r1.png",
      href: "/services/preventive-care"
    },
    {
      id: "06",
      title: "Minor Procedures",
      desc: "In-clinic procedures including wound management, suture removal, ear syringing, and skin lesion care.",
      image: "/assets/production/web/service-minor-procedures.webp",
      href: "/services/minor-procedures"
    }
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-24 bg-foreground text-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionReveal className="mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Expertise & Care</h2>
          <p className="text-xl text-white/70 max-w-2xl font-light">
            Comprehensive primary care tailored to your family's evolving needs, integrated directly with the Primary Care Network.
          </p>
        </SectionReveal>

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-12 min-h-[600px]">
          
          <div className="col-span-5 flex flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onMouseEnter={() => setActiveService(service)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-6 ${
                  activeService.id === service.id 
                    ? "bg-white/10 shadow-lg scale-[1.02]" 
                    : "hover:bg-white/5 opacity-60 hover:opacity-100"
                }`}
              >
                <span className="font-serif text-lg text-primary">{service.id}</span>
                <span className="font-serif text-2xl tracking-wide">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="col-span-7 relative bg-white/5 rounded-3xl overflow-hidden border border-white/10">
            
              <div
                key={activeService.id}
                className="absolute inset-0 flex flex-col"
              >
                <div className="h-2/3 relative overflow-hidden">
                  <Image 
                    src={activeService.image} 
                    alt={activeService.title} 
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover opacity-80 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-12 bg-foreground/90 backdrop-blur-md">
                  <h3 className="font-serif text-3xl mb-4">{activeService.title}</h3>
                  <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">
                    {activeService.desc}
                  </p>
                  <Link 
                    href={activeService.href}
                    className="inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            
          </div>

        </div>

        {/* Mobile Accordion Layout */}
        <div className="lg:hidden flex flex-col gap-3">
          {services.map((service) => {
            const isOpen = activeService.id === service.id;
            return (
              <div key={service.id} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-colors">
                <button 
                  type="button"
                  onClick={() => setActiveService(isOpen ? ({ id: "" } as any) : service)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-serif text-sm font-bold text-primary">{service.id}</span>
                    <span className="font-serif text-lg font-bold text-white">{service.title}</span>
                  </div>
                  <span className={`text-xs text-white/50 px-2 py-0.5 rounded-full bg-white/5 ${isOpen ? "text-primary bg-primary/10" : ""}`}>
                    {isOpen ? "Close" : "View"}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-white/70 mb-4 leading-relaxed text-sm">
                      {service.desc}
                    </p>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-44 object-cover rounded-xl mb-4 opacity-85"
                    />
                    <Link 
                      href={service.href}
                      className="inline-flex items-center gap-2 bg-white text-foreground px-5 py-2.5 rounded-full font-medium text-sm hover:bg-primary hover:text-white transition-colors w-full justify-center shadow-md"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

