import Image from "next/image";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { ClipboardList, Phone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "New Patients | Rundle Medical Clinic",
  description: "Information for new patients joining Rundle Medical Clinic in Calgary.",
};

export default function NewPatientsPage() {
  const steps = [
    {
      title: "Contact the Clinic",
      description: "Call our reception team to confirm if we are currently accepting new patients for your specific medical needs.",
      icon: <Phone className="w-6 h-6 text-primary" />
    },
    {
      title: "Schedule Meet & Greet",
      description: "We will arrange a short introductory appointment to ensure our clinic is the right fit for your healthcare requirements.",
      icon: <ClipboardList className="w-6 h-6 text-primary" />
    },
    {
      title: "Transfer Records",
      description: "Once accepted, we will provide you with a medical record transfer request form to have your files securely moved to our clinic.",
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-32 sm:pt-36 pb-24 sm:pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-new-patients.webp"
            alt="New Patients at Rundle Medical Clinic"
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Welcome to Rundle</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              We look forward to partnering with you on your healthcare journey. Find out how to join our clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 mb-16 shadow-sm">
              <h2 className="font-serif text-3xl text-foreground mb-6">Patient Onboarding Process</h2>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                To provide the highest standard of care, we utilize a simple onboarding process for new patients. This ensures that we fully understand your medical history and can effectively meet your healthcare expectations.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-medium text-foreground">{index + 1}. {step.title}</h3>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 flex flex-col items-start">
              <h2 className="font-serif text-3xl text-foreground mb-4">Ready to join?</h2>
              <p className="text-lg text-muted mb-8 max-w-2xl">
                Our front desk staff is available to answer any questions you may have about becoming a patient at Rundle Medical Clinic.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href={`tel:${clinicData.contact.phone.replace(/-/g, '')}`}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors text-center"
                >
                  Call {clinicData.contact.phone}
                </a>
                <Link 
                  href="/contact"
                  className="bg-surface hover:bg-surface-elevated text-foreground border border-border px-8 py-4 rounded-full font-medium transition-colors text-center"
                >
                  View Clinic Location
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
