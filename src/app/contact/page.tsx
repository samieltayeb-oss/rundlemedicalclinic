import Image from "next/image";
import { clinicData } from "@/data/clinic";
import { Phone, MapPin, Printer, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Rundle Medical Clinic",
  description: "Get in touch with Rundle Medical Clinic. Find our location, phone number, and operating hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-contact.webp"
            alt="Contact Rundle Medical Clinic"
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Contact & Location</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              We are conveniently located in Northeast Calgary. Reach out to schedule an appointment or visit us during walk-in hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="flex flex-col gap-12">
              
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-3xl text-white mb-6">Get in Touch</h2>
                <div className="flex flex-col gap-6">
                  <a href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted mb-1">Phone</p>
                      <p className="text-xl text-foreground font-medium group-hover:text-primary transition-colors">{clinicData.contact.phone}</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                      <Printer className="w-5 h-5 text-muted" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted mb-1">Fax</p>
                      <p className="text-lg text-foreground">{clinicData.contact.fax}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h2 className="font-serif text-3xl text-white mb-6">Clinic Hours</h2>
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-foreground font-medium flex items-center gap-2"><Clock className="w-4 h-4 text-muted" /> Monday - Friday</span>
                    <span className="text-muted">{clinicData.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-border/50">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-muted">{clinicData.hours.saturday}</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted">{clinicData.hours.sunday}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Map & Address */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl text-foreground mb-2">Visit Us</h2>
              
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-foreground font-medium">{clinicData.name}</p>
                  <p className="text-lg text-muted">{clinicData.address.street}</p>
                  <p className="text-lg text-muted">{clinicData.address.city}, {clinicData.address.province} {clinicData.address.postalCode}</p>
                </div>
              </div>

              <a 
                href={clinicData.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 w-fit mb-6"
              >
                Open in Google Maps
              </a>

              <div className="h-[400px] w-full rounded-3xl overflow-hidden bg-surface-elevated border border-border">
                {/* Fallback to static map placeholder or interactive iframe based on actual implementation.
                    Since we don't have a Google Maps API key handy, we use a styled static placeholder or generic iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x537164627d35dc6b%3A0xc6222b467ec4c49d!2sRundle%20Medical%20Clinic!5e0!3m2!1sen!2sca!4v1715891392683!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rundle Medical Clinic Location Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
