import Image from "next/image";

export function RealClinicExperience() {
  return (
    <section className="py-24 bg-surface-elevated">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
            A space designed around your visit.
          </h2>
          <p className="text-lg text-muted">
            Clean, professional, and accessible. Our physical environment reflects the standard of care we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[800px]">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden relative group h-full">
            <Image 
              src="/assets/production/web/clinic-exterior-modern.webp" 
              alt="Rundle Medical Clinic exterior" 
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 h-full">
            <div className="flex-1 rounded-3xl overflow-hidden relative group">
              <Image 
                src="/assets/production/web/clinic-reception-modern.webp" 
                alt="Clinic reception" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex-1 rounded-3xl overflow-hidden relative group">
              <Image 
                src="/assets/production/web/clinic-hallway-modern.webp" 
                alt="Clinic examination room" 
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
