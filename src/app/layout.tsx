import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SmartNotice } from "@/components/layout/SmartNotice";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rundle Medical Clinic",
  description: "Comprehensive care. Close to home. Family medicine and walk-in care in Calgary NE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${manrope.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen pt-20 lg:pt-24 overflow-x-hidden w-full max-w-full`}
      >
        <div className="fixed top-0 left-0 right-0 z-50 bg-background">
          <SmartNotice />
          <Header />
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
