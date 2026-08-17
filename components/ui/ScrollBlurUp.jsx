"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ScrollBlurUp({
  children,
  delay = 0,
  y = 40,
  blur = 12,
  duration = 0.7,
  once = false,
  className,
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: prefersReduced ? 0 : y,
        filter: prefersReduced ? "none" : `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
