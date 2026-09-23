import type { Metadata } from "next";
import { PharmacyHeader } from "@/components/pharmacy/PharmacyHeader";
import { PharmacyFooter } from "@/components/pharmacy/PharmacyFooter";

export const metadata: Metadata = {
  title: "Rundle Pharmacy & Travel Clinic | Calgary NE",
  description:
    "Community pharmacy adjoining Rundle Medical Clinic. Clinical prescribing, custom compounding, travel health vaccines, $60 TB testing, and free city-wide Calgary delivery.",
  icons: {
    icon: [
      { url: "/pharmacy/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/pharmacy/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/pharmacy/favicon.ico", sizes: "any" },
      { url: "/pharmacy/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/pharmacy/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/pharmacy/favicon.ico",
    apple: [
      { url: "/pharmacy/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
