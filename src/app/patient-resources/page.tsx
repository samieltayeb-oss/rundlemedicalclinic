import Image from "next/image";
import { FileText, Stethoscope, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Patient Resources & Uninsured Services | Rundle Medical Clinic",
  description: "Information regarding clinic policies, uninsured services, and patient forms.",
};

export default function PatientResourcesPage() {
  const uninsuredServices = [
    { name: "Driver's Medical Examination", price: "Please contact clinic" },
    { name: "Employment / School Medical", price: "Please contact clinic" },
    { name: "Sick Note / Return to Work Note", price: "Please contact clinic" },
    { name: "Insurance Forms (Standard)", price: "Please contact clinic" },
    { name: "Travel Advice & Immunizations", price: "Consultation required" },
    { name: "Transfer of Medical Records", price: "Please contact clinic" }
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-24 pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/production/web/hero-resources.webp"
            alt="Patient Resources"
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Patient Resources</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Important information regarding clinic policies, uninsured service fees, and necessary forms to streamline your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            <div className="lg:col-span-8 flex flex-col gap-16">
              {/* Uninsured Services */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="font-serif text-3xl text-foreground">Uninsured Services</h2>
                </div>
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  While most medically necessary services are covered by Alberta Health Care (AHCIP), some services are not covered by the provincial plan. Patients are responsible for the fees associated with these uninsured services prior to completion.
                </p>
                <div className="bg-surface border border-border rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-2 bg-surface-elevated p-4 border-b border-border">
                    <span className="font-medium text-foreground">Service</span>
                    <span className="font-medium text-foreground text-right">Estimated Fee</span>
                  </div>
                  <div className="flex flex-col">
                    {uninsuredServices.map((service, idx) => (
                      <div key={idx} className="grid grid-cols-2 p-4 border-b border-border/50 last:border-0">
                        <span className="text-muted">{service.name}</span>
                        <span className="text-foreground text-right">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted mt-4 italic">
                  * Note: Prices are estimates and subject to change based on the complexity of the forms or examinations required. Please consult with our front desk for exact pricing.
                </p>
              </div>

              {/* Clinic Policies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <h2 className="font-serif text-3xl text-foreground">Clinic Policies</h2>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Cancellation & Missed Appointments</h3>
                    <p className="text-muted leading-relaxed">
                      We require a minimum of 24 hours notice for any appointment cancellations. Missed appointments without sufficient notice may be subject to a "no-show" fee. This policy ensures we can offer that time slot to another patient in need of care.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Prescription Renewals</h3>
                    <p className="text-muted leading-relaxed">
                      Please monitor your medication supply and book an appointment for refills before you run out. We generally do not authorize prescription refills over the phone or via fax from pharmacies without a patient assessment, unless in exceptional circumstances.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-3">Test Results</h3>
                    <p className="text-muted leading-relaxed">
                      Our physicians will contact you if your test results are abnormal and require follow-up. For normal results, you will generally not be contacted. If you have concerns or wish to review your results regardless, please book a follow-up appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 sticky top-32">
                <Stethoscope className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-serif text-2xl text-foreground mb-4">Alberta Health Care</h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Please remember to bring your valid Alberta Health Care card and a piece of photo ID to every appointment.
                </p>
                <a 
                  href="https://www.alberta.ca/ahcip.aspx" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline underline-offset-4"
                >
                  Learn about AHCIP &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
