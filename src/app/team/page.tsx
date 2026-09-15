import Image from "next/image";
import { teamData } from "@/data/team";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";

export const metadata = {
  title: "Our Team | Rundle Medical Clinic",
  description: "Meet our dedicated team of family physicians, pediatricians, and support staff.",
};

export default function TeamPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <SectionReveal className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-team.webp"
            alt="Our Medical Team"
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Our Medical Team</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Led by highly experienced practitioners, our multidisciplinary team works collaboratively to provide comprehensive care for you and your family.
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* Family Physicians */}
      <SectionReveal className="py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-12">Family Physicians</h2>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.physicians.map((doctor, index) => (
              <StaggerItem key={index} className="bg-surface rounded-2xl overflow-hidden border border-border flex flex-col group">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-elevated border-b border-border">
                  <Image 
                    src="/assets/production/web/physician-placeholder.webp" 
                    alt={doctor.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-primary font-medium">{doctor.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </SectionReveal>

      {/* Pediatric Care */}
      <section className="py-20 border-b border-border bg-surface">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-12">Pediatric Care</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.pediatrics.map((doctor, index) => (
              <div key={index} className="bg-surface rounded-2xl overflow-hidden border border-border flex flex-col group shadow-sm">
                <div className="aspect-[3/4] relative overflow-hidden bg-surface-elevated border-b border-border">
                  <Image 
                    src="/assets/production/web/physician-placeholder.webp" 
                    alt={doctor.name} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-secondary font-medium">{doctor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team & Management */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="font-serif text-3xl text-foreground mb-12">Clinic Support & Management</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Medical Office Assistants</h3>
              <ul className="space-y-3">
                {teamData.support.map((staff, index) => (
                  <li key={index} className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0">
                    <span className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />
                    <span className="text-lg text-muted">{staff.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-6">Administration</h3>
              <ul className="space-y-3">
                {teamData.management.map((staff, index) => (
                  <li key={index} className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0">
                    <span className="w-2 h-2 rounded-full bg-secondary/40 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-lg text-foreground font-medium">{staff.name}</span>
                      <span className="text-sm text-muted">{staff.role}</span>
                    </div>
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
