import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// Define the content for each service page
const serviceContent: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
  "family-medicine": {
    title: "Family Medicine",
    subtitle: "Comprehensive primary care for individuals and families of all ages.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Our family medicine practice forms the cornerstone of your healthcare journey. We provide continuous, comprehensive medical care for patients of all ages, from newborns to seniors. Our physicians focus on disease prevention, health maintenance, and the diagnosis and treatment of acute and chronic illnesses.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          By building a long-term relationship with you and your family, we can better understand your medical history and provide personalized, effective care that aligns with your specific health goals.
        </p>
      </>
    )
  },
  "walk-in-care": {
    title: "Walk-In Care",
    subtitle: "Prompt medical attention for urgent, non-life-threatening conditions.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          For sudden illnesses or minor injuries that cannot wait for a scheduled appointment, our walk-in clinic provides timely and expert medical care. We treat a variety of conditions including minor cuts, sprains, infections, fevers, and common colds.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          No appointment is necessary for walk-in services. Patients are seen on a first-come, first-served basis, though priority may be given depending on medical urgency. Please note that for severe emergencies, you should call 911 or visit the nearest emergency room.
        </p>
      </>
    )
  },
  "pediatrics": {
    title: "Pediatric Care",
    subtitle: "Dedicated medical care for newborns, children, and adolescents.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          The health and well-being of your children are our top priorities. With an on-site pediatrician and experienced family physicians, we offer specialized pediatric care that encompasses well-child visits, immunizations, developmental screenings, and the treatment of childhood illnesses.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          We strive to create a comfortable, reassuring environment for our youngest patients, ensuring they receive the best possible start to a healthy life.
        </p>
      </>
    )
  },
  "womens-health": {
    title: "Women's Health",
    subtitle: "Specialized healthcare services tailored to women's unique needs.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          We offer comprehensive women's health services, including routine gynecological exams, Pap smears, family planning and contraception counseling, prenatal and postpartum care, and menopause management.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          Our physicians, including female practitioners, provide a safe, respectful, and confidential environment to discuss and address any female health concerns.
        </p>
      </>
    )
  },
  "mens-health": {
    title: "Men's Health",
    subtitle: "Focused medical care addressing men's specific health concerns.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Preventive care is crucial for men of all ages. Our men's health services focus on routine physical examinations, prostate health, cardiovascular risk assessment, testosterone management, and the treatment of conditions such as erectile dysfunction.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          We encourage open discussions regarding lifestyle, mental health, and physical well-being to ensure optimal long-term health.
        </p>
      </>
    )
  },
  "chronic-care": {
    title: "Chronic + Complex Care",
    subtitle: "Ongoing management and support for long-term health conditions.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Managing a chronic illness requires a dedicated, multidisciplinary approach. We provide comprehensive care plans for conditions such as diabetes, hypertension, asthma, COPD, and arthritis.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          Through our affiliation with the Primary Care Network (PCN), our patients have access to health management nurses, pharmacists, and dietitians who work alongside our physicians to optimize treatment and improve quality of life.
        </p>
      </>
    )
  },
  "mental-health": {
    title: "Mental + Behavioural Health",
    subtitle: "Compassionate support for your mental and emotional well-being.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Mental health is an integral part of your overall well-being. Our physicians provide assessment, diagnosis, and treatment for a variety of mental health concerns, including depression, anxiety, and stress-related disorders.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          In collaboration with our PCN Behavioral Health Consultants, we offer counseling, resources, and medication management in a strictly confidential and supportive environment.
        </p>
      </>
    )
  },
  "minor-procedures": {
    title: "Minor Procedures",
    subtitle: "In-clinic surgical procedures performed safely and efficiently.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Our clinic is equipped to perform a variety of minor surgical procedures on-site, saving you a trip to the hospital or a specialist. These include the removal of moles, cysts, and skin tags, suturing of lacerations, wart treatments, and joint injections.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          All procedures are performed under local anesthesia in a sterile environment, ensuring your comfort and safety.
        </p>
      </>
    )
  },
  "occupational-health": {
    title: "Occupational Health + WCB",
    subtitle: "Workplace injury assessments and pre-employment medicals.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          We assist patients with workplace-related injuries through thorough assessments, treatment plans, and the completion of necessary Workers' Compensation Board (WCB) documentation. Our goal is to facilitate a safe and timely return to work.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          Additionally, we provide pre-employment medical examinations, driver's medicals, and return-to-work fitness assessments.
        </p>
      </>
    )
  },
  "preventive-care": {
    title: "Preventive Care",
    subtitle: "Proactive health screening, annual physicals, and wellness planning.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          The best approach to disease is preventing it before it starts. Our preventive care services include comprehensive annual physical exams, routine blood work, cancer screenings, and lifestyle counseling.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          By identifying risk factors early, we can intervene proactively, helping you maintain a healthy and active lifestyle for years to come.
        </p>
      </>
    )
  },
  "diagnostics": {
    title: "Diagnostics & Testing",
    subtitle: "Facilitating necessary medical tests and imaging.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Accurate diagnosis is the first step toward effective treatment. Our physicians coordinate with local diagnostic centers and laboratories to arrange necessary blood tests, X-rays, ultrasounds, and advanced imaging.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          We ensure that your test results are reviewed promptly and communicated to you clearly, forming the basis of your personalized treatment plan.
        </p>
      </>
    )
  },
  "travel-health": {
    title: "Travel Health + Immunization",
    subtitle: "Pre-travel consultations and necessary vaccinations.",
    content: (
      <>
        <p className="text-lg text-muted leading-relaxed mb-6">
          Planning an international trip? Our travel health consultations provide you with up-to-date medical advice tailored to your specific destination. We assess your risk and provide necessary prescriptions for travel-related illnesses like malaria and traveler's diarrhea.
        </p>
        <p className="text-lg text-muted leading-relaxed">
          We also administer essential travel vaccinations and ensure your routine immunizations are up to date before you depart.
        </p>
      </>
    )
  }
};

export function generateStaticParams() {
  return Object.keys(serviceContent).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object in Next.js 15
  const resolvedParams = await params;
  const service = serviceContent[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  // Fallback to family-medicine image if specific one doesn't exist (like mens-health)
  const imageSlug = resolvedParams.slug === 'mens-health' ? 'family' : 
                    resolvedParams.slug === 'walk-in-care' ? 'walk-in' : 
                    resolvedParams.slug === 'family-medicine' ? 'family' :
                    resolvedParams.slug === 'minor-procedures' ? 'minor-procedures' :
                    resolvedParams.slug === 'travel-health' ? 'travel' :
                    resolvedParams.slug === 'chronic-care' ? 'chronic' :
                    resolvedParams.slug === 'womens-health' ? 'womens' :
                    resolvedParams.slug === 'mental-health' ? 'mental' :
                    resolvedParams.slug === 'prenatal-care' ? 'prenatal' :
                    resolvedParams.slug === 'preventive-care' ? 'preventive' :
                    resolvedParams.slug === 'occupational-health' ? 'occupational' :
                    resolvedParams.slug;
                    
  const imagePath = `/assets/production/web/hero-service-${imageSlug}.webp`;

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Page Header */}
      <section className="relative pt-32 sm:pt-36 pb-24 sm:pb-28 border-b border-border overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0">
          <Image 
            src={imagePath}
            alt={service.title}
            fill
            className="object-cover opacity-50 object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">{service.title}</h1>
            <p className="text-xl text-primary font-medium">
              {service.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl bg-surface border border-border rounded-3xl p-8 md:p-12 shadow-sm">
            {service.content}
            
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-serif text-2xl text-foreground mb-4">Book an Appointment</h3>
              <p className="text-muted mb-6">
                If you require this service, please contact our clinic to schedule an appointment with one of our physicians.
              </p>
              <Link 
                href="/contact"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-colors"
              >
                Contact the Clinic
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
