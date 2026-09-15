import Image from "next/image";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/StaggerGroup";
import { ImageReveal } from "@/components/motion/ImageReveal";

export const metadata = {
  title: "About Us | Rundle Medical Clinic",
  description: "Learn about our mission to provide premium, accessible healthcare to the Calgary NE community.",
};

export default function AboutPage() {
  const highlights = [
    "Male and female family physicians available",
    "On-site female pediatrician for specialized infant and child care",
    "Fully integrated with the local Primary Care Network (PCN)",
    "On-site pharmacy with complimentary prescription delivery",
    "Walk-in availability for urgent non-emergency needs",
    "Modern, accessible, and welcoming clinic environment"
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-about.webp"
            alt="About Rundle Medical Clinic"
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">About Rundle Medical Clinic</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Serving the Calgary Northeast community, we are a multidisciplinary healthcare facility committed to providing premium, accessible, and compassionate medical care for your entire family.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted leading-relaxed">
                  At Rundle Medical Clinic, we believe that high-quality healthcare should be accessible, continuous, and compassionate. Our mission is to build lasting relationships with our patients, guiding them through every stage of life with expert medical care and personalized attention.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">A Collaborative Approach</h2>
                <p className="text-lg text-muted leading-relaxed mb-6">
                  Healthcare is not a one-size-fits-all service. We are proud to be affiliated with the Primary Care Network (PCN), allowing us to offer extended support through behavioral health consultants, health management nurses, and pharmacists directly within our clinic.
                </p>
                
                <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {highlights.map((item, index) => (
                    <StaggerItem key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </div>

            {/* Visuals */}
            <ImageReveal className="relative h-[600px] rounded-3xl shadow-sm border border-border">
              <Image 
                src="/assets/production/web/clinic-exterior-modern.webp" 
                alt="Rundle Medical Clinic Building" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ImageReveal>
            
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary/5 py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Join Our Clinic Family</h2>
          <p className="text-lg text-muted mb-8">
            For new patient inquiries, please contact our front desk team to confirm current availability and schedule a meet-and-greet appointment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto"
            >
              Call {clinicData.contact.phone}
            </a>
            <Link 
              href="/team"
              className="bg-surface hover:bg-surface-elevated text-foreground border border-border px-8 py-4 rounded-full font-medium transition-colors w-full sm:w-auto"
            >
              Meet Our Doctors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
