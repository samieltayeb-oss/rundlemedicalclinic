import Image from "next/image";
import { teamData } from "@/data/team";
import { Award, CheckCircle2, Phone, CalendarCheck, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Our Medical Team | Rundle Medical Clinic",
  description: "Meet our experienced family physicians, pediatric specialist, and dedicated healthcare staff in Calgary NE.",
};

export default function TeamPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-team.webp"
            alt="Rundle Medical Clinic Physicians and Team"
            fill
            className="object-cover opacity-60 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/45" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
              Physicians & Clinical Staff
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Our Medical Team</h1>
            <p className="text-xl text-white/85 font-light leading-relaxed">
              Experienced, board-certified healthcare professionals dedicated to delivering attentive, longitudinal care for Calgary families.
            </p>
          </div>
        </div>
      </section>

      {/* Family Physicians */}
      <section className="py-20 border-b border-border/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border/60">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Primary Care Providers</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Family Physicians</h2>
            </div>
            <p className="text-sm text-muted max-w-md mt-2 md:mt-0">
              Licensed by the College of Physicians and Surgeons of Alberta (CPSA).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.physicians.map((doctor, index) => (
              <div 
                key={index} 
                className="bg-surface rounded-3xl overflow-hidden border border-border/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[4/4.5] relative overflow-hidden bg-slate-100 border-b border-border/60">
                  <Image 
                    src="/assets/production/web/physician-placeholder.webp" 
                    alt={doctor.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-surface/90 backdrop-blur-md text-foreground text-xs font-semibold border border-border/60 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                    <span>CPSA Licensed</span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-4">{doctor.role}</p>
                    
                    <div className="space-y-2 py-4 border-t border-border/50 text-xs text-muted">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>Comprehensive Family Medicine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>Chronic Care & Preventive Screenings</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">Inquire for Availability</span>
                    <a 
                      href="tel:4034575850" 
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Clinic
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pediatric Specialist */}
      <section className="py-20 border-b border-border/80 bg-surface-elevated/40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-border/60">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">Specialized Care</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Pediatric Specialist</h2>
            </div>
            <p className="text-sm text-muted max-w-md mt-2 md:mt-0">
              Dedicated pediatric consultation for newborns, children, and teens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.pediatrics.map((doctor, index) => (
              <div 
                key={index} 
                className="bg-surface rounded-3xl overflow-hidden border border-border/80 hover:border-secondary/40 hover:shadow-xl transition-all duration-300 flex flex-col group shadow-sm"
              >
                <div className="aspect-[4/4.5] relative overflow-hidden bg-slate-100 border-b border-border/60">
                  <Image 
                    src="/assets/production/web/physician-placeholder.webp" 
                    alt={doctor.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 py-1 px-3 rounded-full bg-surface/90 backdrop-blur-md text-foreground text-xs font-semibold border border-border/60 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-secondary" />
                    <span>Specialist Consultation</span>
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-secondary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-4">{doctor.role}</p>
                    
                    <div className="space-y-2 py-4 border-t border-border/50 text-xs text-muted">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>Infant, Child & Adolescent Health</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>Developmental Assessments & Consults</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-muted">Physician Referral & Walk-in</span>
                    <a 
                      href="tel:4034575850" 
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary hover:text-secondary/80 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Clinic
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team & Administration */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Operational Excellence</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Clinic Support & Administration</h2>
            <p className="text-muted text-sm mt-2">Our certified medical office assistants and management team ensure every patient visit runs smoothly and securely.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Medical Office Assistants */}
            <div className="bg-surface rounded-3xl p-8 border border-border/80 shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b border-border/60">
                Medical Office Assistants
              </h3>
              <ul className="space-y-4">
                {teamData.support.map((staff, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                    <span className="text-base text-foreground font-medium">{staff.name}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      Clinical Support
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Management */}
            <div className="bg-surface rounded-3xl p-8 border border-border/80 shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-6 pb-3 border-b border-border/60">
                Clinic Management & Leadership
              </h3>
              <ul className="space-y-4">
                {teamData.management.map((staff, index) => (
                  <li key={index} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                    <div>
                      <p className="text-base text-foreground font-semibold">{staff.name}</p>
                      <p className="text-xs text-muted">{staff.role}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">
                      Operations
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
