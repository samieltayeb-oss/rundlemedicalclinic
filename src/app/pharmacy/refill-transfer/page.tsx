"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { InteractiveRefillForm } from "@/components/pharmacy/InteractiveRefillForm";
import { pharmacyData } from "@/data/pharmacy";
import {
  RefreshCw,
  ArrowRightLeft,
  Truck,
  ShieldCheck,
  Phone,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export default function RefillTransferPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-white">Loading Refill Portal...</div>}>
      <RefillTransferContent />
    </Suspense>
  );
}

function RefillTransferContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("action") === "transfer" ? "transfer" : "refill";

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Fast Digital Fulfillment</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Prescription Refills &amp; Seamless Transfers
        </h1>

        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Refill your active medications in under 60 seconds, or switch to Rundle Pharmacy with zero paperwork. We coordinate with your previous pharmacy and deliver anywhere in Calgary for free.
        </p>
      </div>

      {/* Main Grid: Form + Trust Sidebar */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Interactive Form */}
        <div className="lg:col-span-8">
          <InteractiveRefillForm initialMode={initialMode} />
        </div>

        {/* Right: Trust Sidebar & Visual Preview */}
        <div className="lg:col-span-4 space-y-6">
          {/* Visual Card */}
          <div className="rounded-3xl overflow-hidden border border-emerald-500/20 shadow-xl group">
            <img
              src="/brand/pharmacy/dispensing-refill.jpg"
              alt="Licensed Pharmacist Dispensing Prescriptions"
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="p-5 bg-[#041210] border-t border-emerald-500/15 text-xs space-y-2">
              <span className="font-bold text-emerald-300 block">
                Dispensary Accuracy Guarantee
              </span>
              <p className="text-white/70 text-[11px] leading-relaxed">
                Every prescription is electronically verified against your Netcare profile to prevent drug interactions.
              </p>
            </div>
          </div>

          {/* Value Props Card */}
          <div className="p-6 rounded-3xl bg-[#041210]/90 backdrop-blur-xl border border-emerald-500/20 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">
              Why Switch to Rundle?
            </h4>

            <div className="space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">100% Free Calgary Delivery</span>
                  <span className="text-[11px] text-white/60">
                    Delivered to your home or office 6 days a week.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Free Blister Compliance Packs</span>
                  <span className="text-[11px] text-white/60">
                    Sealed weekly organizers for simple medication routines.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Same-Day Processing</span>
                  <span className="text-[11px] text-white/60">
                    Ready for pickup in under 30 minutes in most cases.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <div className="text-[11px] text-white/60 mb-2">Prefer to speak with us directly?</div>
              <a
                href={`tel:${pharmacyData.phone}`}
                className="w-full py-2.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center justify-center gap-2 hover:bg-emerald-950/90 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {pharmacyData.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
