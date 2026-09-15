"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { clinicData } from "@/data/clinic";
import { EASE, DURATION } from "@/lib/motion";

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.standard, ease: EASE.out },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-12 pb-24 overflow-hidden bg-foreground">
      {/* Background Image — absolutely positioned, full coverage */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/production/web/hero-main-notext.webp"
          alt="Rundle Medical Clinic"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/40 z-10" />
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Rundle Medical Clinic &middot; Calgary NE
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-6">
              Modern care. <br className="hidden md:block" />
              <span className="text-primary">Close to home.</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl font-light">
              Family medicine, pediatric care, and comprehensive primary
              healthcare for individuals and families.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={`tel:${clinicData.contact.phone.replace(/-/g, "")}`}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
              >
                <Phone className="w-5 h-5" /> Call the Clinic
              </a>
              <Link
                href={clinicData.address.googleMapsUrl}
                target="_blank"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-lg backdrop-blur-sm"
              >
                <MapPin className="w-5 h-5" /> Get Directions
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Link
              href="/services"
              className="text-sm font-medium text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
            >
              Explore Our Services{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
