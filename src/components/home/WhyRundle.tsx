import { CheckCircle2 } from "lucide-react";

export function WhyRundle() {
  const points = [
    { title: "Family Medicine & Pediatrics", desc: "Dedicated experts for both adults and children." },
    { title: "Walk-ins & Appointments", desc: "Flexible access to care when you need it." },
    { title: "PCN Collaboration", desc: "Integrated approach with the Primary Care Network." },
    { title: "On-site Pharmacy", desc: "Convenient access with free medication delivery." },
    { title: "Extended Weekday Hours", desc: "Open until 8:00 PM on weekdays." },
    { title: "Calgary NE Location", desc: "Accessible community care with ample parking." }
  ];

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Built around everyday care.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We've structured Rundle Medical Clinic to reduce friction in accessing high-quality primary care. From our extended hours to our on-site pharmacy, every decision is designed around patient convenience and clinical excellence.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted leading-relaxed text-sm">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
