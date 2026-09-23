import type { Metadata } from "next";
import { PharmacyHeader } from "@/components/pharmacy/PharmacyHeader";
import { PharmacyFooter } from "@/components/pharmacy/PharmacyFooter";

export const metadata: Metadata = {
  title: "Rundle Pharmacy & Travel Clinic | Calgary NE",
  description:
    "Community pharmacy adjoining Rundle Medical Clinic. Clinical prescribing, custom compounding, travel health vaccines, $60 TB testing, and free city-wide Calgary delivery.",
  icons: {
    icon: "/brand/pharmacy/logo.png",
    apple: "/brand/pharmacy/logo.png",
  },
};

export default function PharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030d0c] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      <PharmacyHeader />
      <main className="flex-grow">{children}</main>
      <PharmacyFooter />
    </div>
  );
}
