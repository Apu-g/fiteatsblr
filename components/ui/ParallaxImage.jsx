"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage({
  children,
  speed = 15,
  scale = 1.05,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;

    function init() {
      ctx = gsap.context(() => {
        const el = containerRef.current;
        if (!el) return;

        gsap.fromTo(
          el,
          { yPercent: -speed, scale },
          {
            yPercent: speed,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              fastScrollEnd: true,
            },
          }
        );
      }, containerRef);
    }

    init();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [speed, scale]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
