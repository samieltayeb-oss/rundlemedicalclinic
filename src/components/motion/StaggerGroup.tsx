"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { EASE, DURATION } from "@/lib/motion";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerGroup({ children, className, staggerDelay = 0.1 }: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: DURATION.standard, ease: EASE.out }
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-5%" }}
    >
      {/* We need to recursively apply itemVariants to children, or assume children use StaggerItem wrapper. 
          To keep it simple and clean for layout, we can provide a StaggerItem export. */}
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  const prefersReducedMotion = useReducedMotion();
  
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: DURATION.standard, ease: EASE.out }
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
