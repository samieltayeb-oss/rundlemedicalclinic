import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Medical Services | Rundle Medical Clinic",
  description: "Comprehensive primary care, pediatrics, and specialized medical services in Calgary NE.",
};

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-services-hub.webp"
            alt="Rundle Medical Clinic Services"
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Medical Services</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              From routine check-ups to specialized care, we offer a full spectrum of healthcare services designed to support you at every stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {navigation.services.map((group, index) => (
              <div key={index} className="flex flex-col">
                <h2 className="font-serif text-3xl text-foreground mb-8 pb-4 border-b border-border/50">
                  {group.category}
                </h2>
                <div className="flex flex-col gap-4">
                  {group.items.map((service, sIndex) => (
                    <Link 
                      key={sIndex} 
                      href={service.href}
                      className="group p-6 bg-surface border border-border rounded-2xl hover:border-primary/30 hover:shadow-md transition-all flex items-center justify-between"
                    >
                      <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {service.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
