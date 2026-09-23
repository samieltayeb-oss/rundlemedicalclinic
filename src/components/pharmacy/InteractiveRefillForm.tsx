"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  ArrowRightLeft,
  CheckCircle2,
  Truck,
  Building,
  Phone,
  Send,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";
import { pharmacyData } from "@/data/pharmacy";

export function InteractiveRefillForm({
  initialMode = "refill",
}: {
  initialMode?: "refill" | "transfer";
}) {
  const [mode, setMode] = useState<"refill" | "transfer">(initialMode);
  const [deliveryType, setDeliveryType] = useState<"pickup" | "delivery">("pickup");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    rxNumbers: "",
    previousPharmacy: "",
    previousPhone: "",
    medicationsToTransfer: "",
    deliveryAddress: "",
    specialNotes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-[#041210]/95 backdrop-blur-2xl border border-emerald-500/30 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold">
            {mode === "refill" ? "Refill Request Received!" : "Transfer Request Received!"}
          </h3>
          <p className="text-white/70 text-sm max-w-md mx-auto">
            Thank you, <span className="text-emerald-300 font-semibold">{formData.fullName}</span>. Our dispensary team has received your details and is actively preparing your order.
          </p>
        </div>

        <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-left space-y-2 text-white/80">
          <div className="flex justify-between">
            <span className="text-white/50">Service:</span>
            <span className="font-bold text-emerald-400 uppercase">
              {mode === "refill" ? "Prescription Refill" : "Pharmacy Transfer"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/50">Fulfillment:</span>
            <span className="font-semibold text-white">
              {deliveryType === "pickup" ? "In-Store Pickup" : "Free Calgary Home Delivery"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/50">Expected Turnaround:</span>
            <span className="font-semibold text-emerald-300">Same-Day Processing</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
          >
            Submit another prescription request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-6 sm:p-10 bg-[#041210]/95 backdrop-blur-2xl border border-emerald-500/25 shadow-2xl relative overflow-hidden">
      {/* Glow Ambience */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mode Switcher Tabs */}
      <div className="flex rounded-2xl bg-black/40 p-1.5 border border-white/10 mb-8 max-w-md mx-auto">
        <button
          type="button"
          onClick={() => setMode("refill")}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            mode === "refill"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25"
              : "text-white/70 hover:text-white"
          }`}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Refill Prescription</span>
        </button>

        <button
          type="button"
          onClick={() => setMode("transfer")}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
            mode === "transfer"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25"
              : "text-white/70 hover:text-white"
          }`}
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>Transfer from Pharmacy</span>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Section 1: Patient Information */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">
              1
            </span>
            Patient Contact Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5">
                Full Legal Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5">
                Primary Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(403) 000-0000"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5">
                Date of Birth (YYYY-MM-DD) *
              </label>
              <input
                type="date"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Prescription Specifics */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">
              2
            </span>
            {mode === "refill" ? "Prescription Refill Numbers" : "Previous Pharmacy Information"}
          </h4>

          {mode === "refill" ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Rx Number(s) &middot; Located on your medicine bottle label *
                </label>
                <input
                  type="text"
                  name="rxNumbers"
                  required
                  value={formData.rxNumbers}
                  onChange={handleChange}
                  placeholder="e.g. Rx #123456, #789012"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                />
                <span className="text-[11px] text-white/50 mt-1 block">
                  You can enter multiple Rx numbers separated by commas.
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Previous Pharmacy Name *
                  </label>
                  <input
                    type="text"
                    name="previousPharmacy"
                    required
                    value={formData.previousPharmacy}
                    onChange={handleChange}
                    placeholder="e.g. Shoppers Drug Mart, Rexall, etc."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1.5">
                    Previous Pharmacy Phone or Location
                  </label>
                  <input
                    type="text"
                    name="previousPhone"
                    value={formData.previousPhone}
                    onChange={handleChange}
                    placeholder="e.g. 36th Street location or (403) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  Which medications would you like transferred? *
                </label>
                <textarea
                  name="medicationsToTransfer"
                  rows={2}
                  required
                  value={formData.medicationsToTransfer}
                  onChange={handleChange}
                  placeholder="e.g. All active prescriptions, or specific names (Blood pressure meds, Asthma inhaler...)"
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                />
              </div>
            </div>
          )}
        </div>

        {/* Section 3: Fulfillment Preference */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">
              3
            </span>
            Pickup or Free Delivery
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label
              className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3.5 transition-all ${
                deliveryType === "pickup"
                  ? "bg-emerald-950/40 border-emerald-400 text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:border-white/20"
              }`}
            >
              <input
                type="radio"
                name="deliveryType"
                value="pickup"
                checked={deliveryType === "pickup"}
                onChange={() => setDeliveryType("pickup")}
                className="sr-only"
              />
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold">In-Store Pickup</div>
                <div className="text-[11px] text-white/60">
                  Ready at 3735 Rundlehorn Dr NE (Adjoining Medical Clinic)
                </div>
              </div>
            </label>

            <label
              className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3.5 transition-all ${
                deliveryType === "delivery"
                  ? "bg-emerald-950/40 border-emerald-400 text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:border-white/20"
              }`}
            >
              <input
                type="radio"
                name="deliveryType"
                value="delivery"
                checked={deliveryType === "delivery"}
                onChange={() => setDeliveryType("delivery")}
                className="sr-only"
              />
              <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-teal-300">
                  Free City-Wide Calgary Delivery
                </div>
                <div className="text-[11px] text-white/60">
                  Delivered safely to your door at $0 charge
                </div>
              </div>
            </label>
          </div>

          {deliveryType === "delivery" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="pt-2"
            >
              <label className="block text-xs font-medium text-white/80 mb-1.5">
                Calgary Street Address, Unit/Apt &amp; Postal Code *
              </label>
              <input
                type="text"
                name="deliveryAddress"
                required
                value={formData.deliveryAddress}
                onChange={handleChange}
                placeholder="e.g. 123 36 St NE, Unit 4B, Calgary AB T1Y..."
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </motion.div>
          )}

          <div>
            <label className="block text-xs font-medium text-white/80 mb-1.5">
              Special Instructions / Notes for the Pharmacist (Optional)
            </label>
            <textarea
              name="specialNotes"
              rows={2}
              value={formData.specialNotes}
              onChange={handleChange}
              placeholder="e.g. Please organize into weekly blister packs, or call me before dispensing..."
              className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Submit Row */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/60 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Encrypted &amp; confidential according to Alberta HIA standards</span>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            {submitting ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span>
              {submitting
                ? "Processing..."
                : mode === "refill"
                ? "Submit Refill Request"
                : "Submit Transfer Request"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
