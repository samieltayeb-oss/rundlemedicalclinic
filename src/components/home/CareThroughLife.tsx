"use client";

import { SectionReveal } from "@/components/motion/SectionReveal";
import { AnimatedCareLine } from "@/components/motion/AnimatedCareLine";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export function CareThroughLife() {
  const stages = [
    { label: "Childhood", desc: "Pediatric care, vaccinations, and developmental monitoring." },
    { label: "Young Adulthood", desc: "Preventive care, reproductive health, and wellness planning." },
    { label: "Family", desc: "Prenatal care, family medicine, and minor procedures." },
    { label: "Adulthood", desc: "Occupational health, chronic disease prevention, and regular screenings." },
    { label: "Healthy Aging", desc: "Complex care, medication management, and geriatric support." }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            A continuum of care.
          </h2>
          <p className="text-lg text-muted">
            We are equipped to support your family's health journey through every major stage of life.
          </p>
        </SectionReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Line */}
          <AnimatedCareLine />
          
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10" staggerDelay={0.15}>
            {stages.map((stage, i) => (
              <StaggerItem 
                key={stage.label}
                className="flex flex-col items-center text-center group"
              >
                {/* Node */}
                <div className="w-12 h-12 md:w-8 md:h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center mb-6 md:mb-8 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-white transition-colors" />
                </div>
                
                {/* Content */}
                <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-foreground">
                  {stage.label}
                </h4>
                <p className="text-sm text-muted max-w-[200px] md:max-w-none">
                  {stage.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

      </div>
    </section>
  );
}

