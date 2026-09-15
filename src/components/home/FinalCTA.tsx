import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinic";

export function FinalCTA() {
  return (
    <section className="py-32 bg-background relative overflow-hidden flex items-center justify-center text-center">
      {/* Decorative SVG Line connecting to hero */}
      <svg 
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-10"
        viewBox="0 0 1000 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          d="M0 100 Q 250 300 500 250 T 1000 400" 
          stroke="var(--primary)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-8">
          Your care starts with a conversation.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a 
            href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
          >
            <Phone className="w-5 h-5" /> Call the Clinic
          </a>
          <Link 
            href={clinicData.address.googleMapsUrl}
            target="_blank"
            className="bg-surface hover:bg-surface-elevated text-foreground border border-border px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
          >
            <MapPin className="w-5 h-5" /> Get Directions
          </Link>
        </div>
      </div>
    </section>
  );
}
