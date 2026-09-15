import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CareUnderOneRoof() {
  const categories = [
    { title: "Family Medicine", desc: "Comprehensive primary care for individuals and families of all ages.", href: "/services/family-medicine" },
    { title: "Pediatrics", desc: "Dedicated pediatric care for newborns, children, and adolescents.", href: "/services/pediatrics" },
    { title: "Preventive Care", desc: "Proactive health screening, annual physicals, and wellness planning.", href: "/services/preventive-care" },
    { title: "Chronic Care", desc: "Ongoing management for diabetes, hypertension, asthma, and complex conditions.", href: "/services/chronic-care" },
    { title: "Women's Health", desc: "Consultations for contraception, menopause, and prenatal care.", href: "/services/womens-health" },
    { title: "Minor Procedures", desc: "In-clinic treatments including wound care, skin lesion removal, and suturing.", href: "/services/minor-procedures" },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4 text-balance">
              Care under one roof.
            </h2>
            <p className="text-lg text-muted">
              From routine family medicine to specialized pediatric support, our multidisciplinary team provides a full spectrum of care in one accessible location.
            </p>
          </div>
          <Link href="/services" className="text-primary font-medium hover:underline underline-offset-4 flex items-center gap-1 shrink-0 pb-1">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <Link 
              key={cat.title} 
              href={cat.href}
              className={`group flex flex-col p-8 rounded-2xl border border-border bg-surface hover:bg-surface-elevated transition-colors ${
                i === 0 ? "lg:col-span-2 bg-surface-elevated" : ""
              } ${i === 3 ? "lg:row-span-2 justify-between" : ""}`}
            >
              <div className="mb-8">
                <h3 className={`font-serif font-medium mb-3 ${i === 0 || i === 3 ? 'text-3xl' : 'text-xl'}`}>
                  {cat.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <div className={`mt-auto flex items-center text-sm font-bold tracking-widest uppercase ${i === 0 ? 'text-primary' : 'text-muted group-hover:text-primary'} transition-colors`}>
                Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
