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
  const isMobile = useIsMobile();

  const mobileY = isMobile ? Math.min(y, 25) : y;
  const mobileBlur = isMobile ? Math.min(blur, 6) : blur;
  const mobileDuration = isMobile ? Math.min(duration, 0.5) : duration;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: prefersReduced ? 0 : mobileY,
        filter: prefersReduced ? "none" : `blur(${mobileBlur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: mobileDuration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
