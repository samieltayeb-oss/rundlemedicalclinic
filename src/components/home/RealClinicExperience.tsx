import Image from "next/image";

export function RealClinicExperience() {
  return (
    <section className="py-24 bg-surface-elevated/50 border-b border-border/80">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-surface border border-border text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Architectural Design & Facility
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            A space designed around your visit.
          </h2>
          <p className="text-lg text-muted font-normal leading-relaxed">
            Pristine, calm, and fully accessible. Our physical environment reflects the modern standard of clinical care we deliver every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[540px] lg:h-[640px]">
          {/* Main Exterior Feature */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden relative group h-[360px] lg:h-full border border-border/80 shadow-sm">
            <Image 
              src="/assets/production/web/clinic-exterior-modern.webp" 
              alt="Rundle Medical Clinic exterior building" 
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">Modern Facility</span>
                <p className="font-serif text-xl md:text-2xl font-semibold">Street-Level Access & Free Parking</p>
              </div>
              <span className="hidden sm:inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium border border-white/20">
                3735 Rundlehorn Dr NE
              </span>
            </div>
          </div>

          {/* Right Two Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            {/* Reception */}
            <div className="flex-1 rounded-3xl overflow-hidden relative group h-[260px] lg:h-auto border border-border/80 shadow-sm">
              <Image 
                src="/assets/production/web/clinic-reception-modern.webp" 
                alt="Clinic reception and patient check-in" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-0.5">Welcoming Atmosphere</span>
                <p className="font-serif text-lg font-semibold">Attentive Patient Reception</p>
              </div>
            </div>

            {/* Hallway */}
            <div className="flex-1 rounded-3xl overflow-hidden relative group h-[260px] lg:h-auto border border-border/80 shadow-sm">
              <Image 
                src="/assets/production/web/clinic-hallway-modern.webp" 
                alt="Clinic examination hallway" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-0.5">Private Clinical Suites</span>
                <p className="font-serif text-lg font-semibold">Consultation & Exam Wing</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
