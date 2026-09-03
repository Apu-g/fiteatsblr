"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    setIsMobile(mql.matches);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

export default function Reveal({
  children,
  delay = 0,
  y = 26,
  x = 0,
  once = false,
  className,
}) {
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

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
