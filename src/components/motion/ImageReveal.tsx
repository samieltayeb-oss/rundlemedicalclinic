"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { EASE, DURATION } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  // Premium clip-path reveal from bottom to top
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={prefersReducedMotion ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: DURATION.cinematic, 
        ease: EASE.out,
        delay 
      }}
    >
      <motion.div
        initial={prefersReducedMotion ? { scale: 1 } : { scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ 
          duration: DURATION.cinematic + 0.4, 
          ease: EASE.out,
          delay 
        }}
        className="relative w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
