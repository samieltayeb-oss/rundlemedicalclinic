export const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pharmacy", href: "/pharmacy" },
    { label: "Our Team", href: "/team" },
    { label: "New Patients", href: "/new-patients" },
    { label: "Contact", href: "/contact" }
  ],
  services: [
    {
      category: "Primary Care",
      items: [
        { label: "Family Medicine", href: "/services/family-medicine" },
        { label: "Walk-In Care", href: "/services/walk-in-care" },
        { label: "Preventive Care", href: "/services/preventive-care" }
      ]
    },
    {
      category: "Specialized Care",
      items: [
        { label: "Pediatrics", href: "/services/pediatrics" },
        { label: "Women's Health", href: "/services/womens-health" },
        { label: "Men's Health", href: "/services/mens-health" }
      ]
    },
    {
      category: "Ongoing Care",
      items: [
        { label: "Chronic + Complex Care", href: "/services/chronic-care" },
        { label: "Mental + Behavioural Health", href: "/services/mental-health" }
      ]
    },
    {
      category: "Clinic Services",
      items: [
        { label: "Minor Procedures", href: "/services/minor-procedures" },
        { label: "Occupational Health + WCB", href: "/services/occupational-health" },
        { label: "Diagnostics", href: "/services/diagnostics" },
        { label: "Travel Health + Immunization", href: "/services/travel-health" }
      ]
    }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Accessibility", href: "/accessibility" }
  ]
};
