import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CareUnderOneRoof() {
  const categories = [
    { 
      badge: "Comprehensive",
      title: "Family Medicine", 
      desc: "Longitudinal primary care for patients of all ages, prioritizing prevention, health maintenance, and acute diagnostics.", 
      href: "/services/family-medicine" 
    },
    { 
      badge: "On-site Specialist",
      title: "Pediatric Care", 
      desc: "Specialized clinical consultations and well-child visits delivered by our dedicated female pediatrician.", 
      href: "/services/pediatrics" 
    },
    { 
      badge: "Proactive Screening",
      title: "Preventive Care", 
      desc: "Comprehensive annual check-ups, cancer screenings, and cardiovascular risk assessments.", 
      href: "/services/preventive-care" 
    },
    { 
      badge: "Longitudinal Management",
      title: "Chronic Disease Care", 
      desc: "Integrated multidisciplinary management for diabetes, hypertension, asthma, and complex multi-system conditions.", 
      href: "/services/chronic-care" 
    },
    { 
      badge: "Specialized Clinic",
      title: "Women's Health", 
      desc: "Dedicated clinical care for prenatal monitoring, contraception, Pap exams, and menopause support.", 
      href: "/services/womens-health" 
    },
    { 
      badge: "In-Clinic Interventions",
      title: "Minor Procedures", 
      desc: "Sterile in-office minor surgical interventions including skin biopsies, lesion excision, and cryotherapy.", 
      href: "/services/minor-procedures" 
    },
  ];

  return (
    <section className="py-24 bg-surface border-b border-border/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5 text-secondary" /> Multidisciplinary Practice
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-4 text-balance">
              Care under one roof.
            </h2>
            <p className="text-lg text-muted font-normal leading-relaxed">
              From routine family medicine to dedicated pediatric care, our multidisciplinary team coordinates every aspect of your healthcare in one modern facility.
            </p>
          </div>
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors pb-1 border-b border-primary/30 hover:border-primary shrink-0"
          >
            <span>Explore all 12 specialties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat, i) => (
            <Link 
              key={cat.title} 
              href={cat.href}
              className={`group flex flex-col justify-between p-8 rounded-3xl border border-border/80 bg-surface hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "lg:col-span-2 bg-gradient-to-br from-surface to-surface-elevated/80" : ""
              }`}
            >
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-surface-elevated border border-border text-[11px] font-semibold text-primary uppercase tracking-wider mb-5">
                  {cat.badge}
                </span>
                <h3 className={`font-serif text-foreground font-semibold mb-3 group-hover:text-primary transition-colors ${
                  i === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'
                }`}>
                  {cat.title}
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-border/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                <span>View Clinical Scope</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
