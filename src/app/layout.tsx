import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteLayoutWrapper } from "@/components/layout/SiteLayoutWrapper";

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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${manrope.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen overflow-x-hidden w-full max-w-full`}
      >
        <SiteLayoutWrapper>{children}</SiteLayoutWrapper>
      </body>
    </html>
  );
}
