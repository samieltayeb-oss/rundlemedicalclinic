import { Phone, MapPin, Clock } from "lucide-react";
import { clinicData } from "@/data/clinic";
import Link from "next/link";

export function LocationVisit() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Visit Rundle Medical Clinic
            </h2>
            <p className="text-lg text-muted mb-12 max-w-lg">
              Located in the heart of Calgary NE, we provide accessible healthcare with ample parking and convenient hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Address</h3>
                  <p className="text-muted">{clinicData.address.street}</p>
                  <p className="text-muted">{clinicData.address.city}, {clinicData.address.province} {clinicData.address.postalCodeVerified ? clinicData.address.postalCode : ""}</p>
                  <Link href={clinicData.address.googleMapsUrl} target="_blank" className="text-primary font-medium text-sm mt-2 inline-block hover:underline">
                    Get Directions &rarr;
                  </Link>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Contact</h3>
                  <p className="text-muted">Phone: {clinicData.contact.phoneDisplay}</p>
                  <p className="text-muted">Fax: {clinicData.contact.faxDisplay}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-elevated border border-border flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="w-full max-w-xs">
                  <h3 className="font-bold text-foreground mb-2">Hours</h3>
                  <ul className="space-y-1 text-muted text-sm">
                    <li className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span>{clinicData.hours.weekdays}</span>
                    </li>
                    {clinicData.hours.saturdayVerified ? (
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>{clinicData.hours.saturday}</span>
                      </li>
                    ) : (
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>10:00am - 02:00pm</span>
                      </li>
                    )}
                    {clinicData.hours.sundayVerified ? (
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>{clinicData.hours.sunday}</span>
                      </li>
                    ) : (
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span className="text-xs self-center ml-2">{clinicData.hours.sunday}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-elevated rounded-3xl overflow-hidden aspect-square lg:aspect-[4/5] relative border border-border">
            {/* Temporary Map Placeholder */}
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-muted p-8 text-center">
              <MapPin className="w-12 h-12 mb-4 text-slate-400" />
              <p className="font-medium">Interactive Map Integration</p>
              <p className="text-sm mt-2">Will be connected to Google Maps API.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
