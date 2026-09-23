"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pharmacyData, PharmacyService } from "@/data/pharmacy";
import {
  Stethoscope,
  RefreshCw,
  Globe,
  ShieldAlert,
  FlaskConical,
  CalendarCheck,
  FileCheck,
  Syringe,
  Activity,
  HeartPulse,
  Sparkles,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Stethoscope,
  RefreshCw,
  Globe,
  ShieldAlert,
  FlaskConical,
  CalendarCheck,
  FileCheck,
  Syringe,
  Activity,
  HeartPulse,
  Sparkles,
  Truck,
};

export function ServicesGlowGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#030d0c]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Community Health</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            12 Accredited Pharmacy Services
          </h2>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            From minor ailment prescribing and custom compounding to certified travel consultations and free city-wide home delivery.
          </p>
        </div>

        {/* The Glow Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pharmacyData.services.map((srv, index) => {
            const Icon = iconMap[srv.iconName] || Sparkles;

            return (
              <ServiceGlowCard
                key={srv.id}
                service={srv}
                icon={Icon}
                index={index}
              />
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-[#041210] to-teal-950/60 border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-white font-bold">
              Need a Service Not Listed Above?
            </h4>
            <p className="text-white/70 text-xs sm:text-sm">
              Our licensed clinical pharmacists are on site 7 days a week to assist with all your health and medication questions.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${pharmacyData.phone}`}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold transition-all"
            >
              Call {pharmacyData.phoneFormatted}
            </a>
            <Link
              href="/pharmacy/contact"
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Visit Pharmacy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceGlowCard({
  service,
  icon: Icon,
  index,
}: {
  service: PharmacyService;
  icon: any;
  index: number;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-3xl p-6 sm:p-7 bg-[#041210]/80 backdrop-blur-xl border border-emerald-500/15 overflow-hidden group hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px -15px rgba(16, 185, 129, 0.15)"
          : "none",
      }}
    >
      {/* Dynamic Radial Mouse Glow (MotionSites Glow Features Pattern) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.15), transparent 70%)`,
        }}
      />

      <div className="relative z-10 space-y-4">
        {/* Top Icon & Badge Row */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:text-emerald-300 transition-all duration-300 shadow-md">
            <Icon className="w-6 h-6" />
          </div>

          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
            {service.badge}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
            {service.title}
          </h3>
          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        {/* Bullet Points */}
        <ul className="space-y-1.5 pt-2 border-t border-white/5">
          {service.benefits.slice(0, 3).map((benefit, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-white/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <div className="relative z-10 pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-medium text-emerald-400/90">
          {service.highlight || "Available Walk-In"}
        </span>

        <Link
          href={`/pharmacy/services/${service.slug}`}
          className="text-xs font-bold text-white group-hover:text-emerald-300 flex items-center gap-1 transition-colors"
        >
          <span>Learn more</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
