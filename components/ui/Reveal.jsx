"use client";

import { motion, useReducedMotion, useMediaQuery } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  once = false,
  className,
}) {
  const prefersReduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 640px)");

  const mobileY = isMobile ? Math.min(y, 16) : y;
  const mobileDuration = isMobile ? 0.5 : 0.65;

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : mobileY, x: prefersReduced ? 0 : x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-30px" }}
      transition={{ duration: mobileDuration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
