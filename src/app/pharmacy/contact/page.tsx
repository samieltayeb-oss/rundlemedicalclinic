"use client";

import { useState } from "react";
import { pharmacyData } from "@/data/pharmacy";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Truck,
  ExternalLink,
  Building2,
} from "lucide-react";

export default function ContactPharmacyPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 800);
  }

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          <span>Location &middot; Hours &middot; Contact</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-white font-bold tracking-tight">
          Visit or Contact Rundle Pharmacy
        </h1>

        <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Open 7 days a week in Calgary Northeast. Located at 36th Street NE &amp; Rundlehorn Drive NE, directly adjoining Rundle Medical Clinic.
        </p>
      </div>

      {/* Main Grid: Contact Cards + Contact Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Contact Details & Hours */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Phone / Fax Card */}
          <div className="p-6 rounded-3xl bg-[#041210] border border-emerald-500/20 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Phone &amp; Fax</span>
            </h3>

            <div className="space-y-2 text-sm text-white/80">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-white/60">Phone:</span>
                <a
                  href={`tel:${pharmacyData.phone}`}
                  className="font-bold text-emerald-400 hover:text-emerald-300"
                >
                  {pharmacyData.phoneFormatted}
                </a>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-white/60">Fax:</span>
                <span className="font-semibold text-white">{pharmacyData.fax}</span>
              </div>

              <div className="flex justify-between items-center py-1">
                <span className="text-white/60">Email:</span>
                <a
                  href={`mailto:${pharmacyData.email}`}
                  className="font-medium text-emerald-400 hover:text-emerald-300 break-all text-xs"
                >
                  {pharmacyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="p-6 rounded-3xl bg-[#041210] border border-emerald-500/20 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>Hours of Operation</span>
            </h3>

            <div className="space-y-2 text-xs">
              {pharmacyData.hours.map((h, i) => (
                <div key={i} className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/70 font-medium">{h.days}:</span>
                  <span className="font-bold text-white">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-2xl bg-emerald-950/40 text-[11px] text-emerald-300">
              Walk-in prescriptions, immunizations, and TB testing accepted 7 days a week.
            </div>
          </div>

          {/* Address & Free Delivery Card */}
          <div className="p-6 rounded-3xl bg-[#041210] border border-emerald-500/20 space-y-3 text-xs text-white/80">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block text-sm">
                  {pharmacyData.address.suite} - {pharmacyData.address.street}
                </span>
                <span className="text-white/60 block">
                  {pharmacyData.address.city}, {pharmacyData.address.province} {pharmacyData.address.postalCode}
                </span>
                <span className="text-emerald-400 font-semibold block mt-1">
                  {pharmacyData.address.landmark}
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-teal-300 font-semibold">
              <Truck className="w-4 h-4 shrink-0" />
              <span>Free Delivery throughout all of Calgary</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#041210]/95 backdrop-blur-2xl border border-emerald-500/25 shadow-2xl space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-white">
                Send a Message to the Dispensary
              </h3>
              <p className="text-xs text-white/70">
                Have a question about a medication, compounding, or travel vaccines? Send a secure note directly to our staff.
              </p>
            </div>

            {sent ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-white/70 max-w-sm mx-auto">
                  Thank you for reaching out. A licensed pharmacist will review your inquiry and reply via email or phone within a few hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-semibold text-emerald-400 underline underline-offset-4 pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(403) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/80 mb-1">
                    How Can We Help? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Enter your medication question, refill request, or consultation inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:border-emerald-400 focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Sending..." : "Submit Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
