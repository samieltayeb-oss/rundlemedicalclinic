"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { EASE, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: DURATION.section, 
        ease: EASE.out,
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}
