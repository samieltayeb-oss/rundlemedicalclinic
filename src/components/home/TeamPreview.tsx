import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { teamData } from "@/data/team";
export function TeamPreview() {
  // Take first 3 family physicians and the pediatrician for the preview
  const previewTeam = [
    ...teamData.physicians.slice(0, 3),
    ...teamData.pediatrics
  ];

  return (
    <section className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-16">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
              Our Clinical Team
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Experienced care.
            </h2>
          </div>
          <Link href="/team" className="text-primary font-medium hover:underline underline-offset-4 flex items-center gap-1 shrink-0">
            Meet the full team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewTeam.map((doctor, i) => (
            <Link 
              key={doctor.name} 
              href={`/team/${doctor.name.toLowerCase().replace(/[\s.]+/g, '-')}`}
              className="group bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-md transition-shadow"
            >
              {/* Identity-neutral abstract placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-surface-elevated to-border flex items-center justify-center relative overflow-hidden group">
                <Image 
                  src="/assets/production/web/physician-placeholder.webp" 
                  alt={`${doctor.name} - ${doctor.role}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted mb-4">{doctor.role}</p>
                <div className="w-8 h-0.5 bg-primary/30 group-hover:bg-primary group-hover:w-12 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted">
            Our clinic features <strong className="text-foreground">6 Family Physicians</strong> and <strong className="text-foreground">1 Pediatrician</strong>, supported by dedicated MOAs and a clinical network.
          </p>
        </div>

      </div>
    </section>
  );
}
