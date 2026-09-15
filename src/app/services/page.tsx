import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldPlus } from "lucide-react";

export const metadata = {
  title: "Clinical Services & Specialties | Rundle Medical Clinic",
  description: "Explore our full spectrum of primary, pediatric, and specialized medical care delivered by board-certified physicians in Calgary NE.",
};

const serviceCards = [
  {
    category: "Primary Healthcare",
    title: "Family Medicine",
    slug: "family-medicine",
    image: "/assets/production/web/hero-service-family.webp",
    description: "Longitudinal, comprehensive healthcare for patients of all ages, focusing on disease prevention, health maintenance, and chronic management.",
    highlights: ["Pediatric to Geriatric", "Annual Health Exams", "Prescription Renewals"]
  },
  {
    category: "Immediate Care",
    title: "Walk-In Clinic",
    slug: "walk-in-care",
    image: "/assets/production/web/hero-service-walk-in.webp",
    description: "Rapid, expert medical evaluation and treatment for urgent, non-life-threatening conditions without requiring a prior appointment.",
    highlights: ["No Appointment Needed", "Minor Illness & Injury", "Same-Day Assessment"]
  },
  {
    category: "Specialized Medicine",
    title: "Pediatric Care",
    slug: "pediatrics",
    image: "/assets/production/web/hero-service-pediatrics.webp",
    description: "Specialized clinical care led by our on-site female pediatrician and family physicians for infants, children, and adolescents.",
    highlights: ["On-site Female Pediatrician", "Developmental Tracking", "Routine Immunizations"]
  },
  {
    category: "Specialized Medicine",
    title: "Women's Health",
    slug: "womens-health",
    image: "/assets/production/web/hero-service-womens.webp",
    description: "Confidential, comprehensive healthcare services tailored to women across all life stages, delivered by male and female physicians.",
    highlights: ["Pap & Pelvic Exams", "Contraception Counseling", "Menopause Care"]
  },
  {
    category: "Specialized Medicine",
    title: "Men's Health",
    slug: "mens-health",
    image: "/assets/production/web/hero-service-family.webp",
    description: "Proactive screening and dedicated primary management for cardiovascular health, prostate wellness, and metabolic balance.",
    highlights: ["Cardiovascular Screenings", "Prostate Health", "Executive Physicals"]
  },
  {
    category: "Ongoing Care",
    title: "Chronic Disease Management",
    slug: "chronic-care",
    image: "/assets/production/web/hero-service-chronic.webp",
    description: "Collaborative, multidisciplinary management for hypertension, diabetes, asthma, arthritis, and complex multi-system conditions.",
    highlights: ["PCN Nurse Support", "Care Plan Coordination", "Routine Lab Tracking"]
  },
  {
    category: "Proactive Health",
    title: "Preventive Care",
    slug: "preventive-care",
    image: "/assets/production/web/hero-service-preventive.webp",
    description: "Evidence-based health screenings, risk assessments, and lifestyle guidance designed to detect health concerns before symptoms develop.",
    highlights: ["Age-Based Screenings", "Immunization Reviews", "Lifestyle Counseling"]
  },
  {
    category: "Clinical Procedures",
    title: "Minor In-Office Procedures",
    slug: "minor-procedures",
    image: "/assets/production/web/hero-service-minor-procedures.webp",
    description: "Safe, sterile minor surgical interventions performed directly in-clinic under local anesthesia by skilled physicians.",
    highlights: ["Skin Biopsies & Excision", "Cryotherapy", "Joint Injections"]
  },
  {
    category: "Mental Wellness",
    title: "Mental & Behavioural Health",
    slug: "mental-health",
    image: "/assets/production/web/hero-service-mental.webp",
    description: "Compassionate primary care assessment and medication management integrated with Primary Care Network (PCN) behavioral consultants.",
    highlights: ["Depression & Anxiety", "PCN Specialist Referral", "Confidential Consultations"]
  },
  {
    category: "Workplace Medicine",
    title: "Occupational Health & WCB",
    slug: "occupational-health",
    image: "/assets/production/web/hero-service-occupational.webp",
    description: "Comprehensive medical assessments for workplace injuries, WCB claim documentation, pre-employment physicals, and return-to-work plans.",
    highlights: ["WCB Injury Claims", "Pre-Employment Exams", "Fitness-to-Work Reports"]
  },
  {
    category: "Diagnostic Support",
    title: "Diagnostic Referrals & Testing",
    slug: "diagnostics",
    image: "/assets/production/web/hero-service-diagnostics.webp",
    description: "On-site point-of-care testing combined with expedited digital requisitions for ultrasound, X-ray, MRI, and laboratory work.",
    highlights: ["Rapid In-Clinic Tests", "Digital Imaging Orders", "Direct Result Follow-up"]
  },
  {
    category: "Global Health",
    title: "Travel Health & Immunization",
    slug: "travel-health",
    image: "/assets/production/web/hero-service-travel.webp",
    description: "Destination-specific travel consultations, prophylactic prescriptions, and routine international immunization guidance.",
    highlights: ["Itinerary Review", "Travel Vaccines", "Malaria Prophylaxis"]
  }
];

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
            className="object-cover opacity-60 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/45" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
              Comprehensive Care Directory
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">Medical Specialties & Services</h1>
            <p className="text-xl text-white/85 font-light leading-relaxed">
              From continuous family medicine to specialized pediatric care and on-site minor procedures, our multidisciplinary team delivers the highest standard of modern healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-border/60">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Multidisciplinary Excellence</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Clinical Offerings</h2>
            </div>
            <p className="text-sm text-muted max-w-md mt-4 md:mt-0">
              All services adhere to Alberta Health Services clinical guidelines and Primary Care Network integrated standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <Link 
                key={index}
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-surface rounded-3xl overflow-hidden border border-border/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Visual Header */}
                <div className="relative h-56 w-full overflow-hidden bg-surface-elevated">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 py-1 px-3 rounded-full bg-surface/90 backdrop-blur-md text-foreground text-xs font-semibold tracking-wide border border-border/60">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Key points */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-border/50">
                      {service.highlights.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-sm font-semibold text-primary">
                    <span>Clinical Overview & Booking</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-surface-elevated border border-border/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldPlus className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground text-base">Alberta Health Care Coverage</p>
                <p className="text-xs text-muted">All medically necessary physician consultations and visits are fully covered with valid provincial health care.</p>
              </div>
            </div>
            <a 
              href="tel:4034575850"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-primary/20 shrink-0"
            >
              Call to Book: (403) 457-5850
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
