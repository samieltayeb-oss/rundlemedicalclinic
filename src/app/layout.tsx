import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SmartNotice } from "@/components/layout/SmartNotice";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${inter.variable} ${newsreader.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen pt-20 lg:pt-24`}
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
