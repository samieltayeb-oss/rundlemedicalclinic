"use client";

import { usePathname } from "next/navigation";
import { SmartNotice } from "@/components/layout/SmartNotice";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function SiteLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPharmacy = pathname?.startsWith("/pharmacy");

  if (isPharmacy) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          <SmartNotice />
        </div>
        <div className="pointer-events-auto">
          <Header />
        </div>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
