"use client";

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

export function AnimatedCareLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Calculate width based on scroll progress
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);

  if (prefersReducedMotion) {
    return (
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
    );
  }

  return (
    <div ref={containerRef} className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 z-0">
      <motion.div 
        className="h-full bg-primary origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
