"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal — cinematic scroll-driven section inspired by src2.
 *
 * Scroll phases:
 *  Phase 1 (0 → 25%)  — foreground panel slits/clips from full-width → narrow vertical strip
 *  Phase 2 (25 → 45%) — strip rotates 65 deg
 *  Phase 3 (45 → 65%) — strip scales to 0 while bg columns slide in from sides
 *  Phase 4 (65 → 85%) — outro split images reveal top & bottom
 *  Phase 5 (85 → 100%)— outro headline lines animate in
 */
export default function ScrollReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;

    function init() {
      ctx = gsap.context(() => {
        const section = sectionRef.current;
        if (!section) return;

        const fgContent = section.querySelector(".sr-fg-content");
        const fgOverlayDark = section.querySelector(".sr-fg-overlay-dark");
        const fgOverlayAccent = section.querySelector(".sr-fg-overlay-accent");
        const bgCopyLeft = section.querySelectorAll(".sr-bg-copy")[0];
        const bgCopyRight = section.querySelectorAll(".sr-bg-copy")[1];
        const outroImgTop = section.querySelectorAll(".sr-outro-img")[0];
        const outroImgBottom = section.querySelectorAll(".sr-outro-img")[1];
        const outroLines = section.querySelectorAll(".sr-outro-line");

        // Set initial state for outro lines
        gsap.set(outroLines, { y: "100%" });

        // Parallax on foreground image
        const fgImg = section.querySelector(".sr-fg-img");
        if (fgImg) {
          gsap.fromTo(
            fgImg,
            { yPercent: -15, scale: 1.15 },
            {
              yPercent: 15,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // Parallax on outro images
        const outroImgTopEl = outroImgTop?.querySelector("img");
        const outroImgBottomEl = outroImgBottom?.querySelector("img");

        if (outroImgTopEl) {
          gsap.fromTo(
            outroImgTopEl,
            { yPercent: -10, scale: 1.1 },
            {
              yPercent: 10,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        if (outroImgBottomEl) {
          gsap.fromTo(
            outroImgBottomEl,
            { yPercent: -10, scale: 1.1 },
            {
              yPercent: 10,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${window.innerWidth < 768 ? window.innerHeight * 1.2 : window.innerHeight * 1.8}px`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;

            // Phase 1: clip-path slit — full → narrow strip
            const p1 = gsap.utils.clamp(0, 1, p / 0.25);
            const slitL = gsap.utils.interpolate(0, 48, p1);
            const slitR = gsap.utils.interpolate(100, 52, p1);
            gsap.set(fgContent, {
              clipPath: `polygon(${slitL}% 0%, ${slitR}% 0%, ${slitR}% 100%, ${slitL}% 100%)`,
            });
            gsap.set(fgOverlayDark, {
              opacity: gsap.utils.interpolate(0, 1, p1),
            });

            // Phase 2: rotate strip
            const p2 = gsap.utils.clamp(0, 1, (p - 0.25) / 0.2);
            gsap.set(fgContent, { rotate: gsap.utils.interpolate(0, 65, p2) });

            // Phase 3: scale strip to 0 + slide bg columns in
            const p3 = gsap.utils.clamp(0, 1, (p - 0.45) / 0.2);
            gsap.set(fgContent, { scale: gsap.utils.interpolate(1, 0, p3) });
            gsap.set(bgCopyLeft, { x: `${gsap.utils.interpolate(0, 100, p3)}%` });
            gsap.set(bgCopyRight, { x: `${gsap.utils.interpolate(0, -100, p3)}%` });

            // Accent overlay flash
            const p3o = gsap.utils.clamp(0, 1, (p - 0.45) / 0.05);
            gsap.set(fgOverlayAccent, {
              opacity: gsap.utils.interpolate(0, 1, p3o),
            });

            // Phase 4: outro split images reveal
            const p4 = gsap.utils.clamp(0, 1, (p - 0.65) / 0.2);
            gsap.set(outroImgTop, {
              clipPath: `polygon(0% 0%, 100% 0%, 100% ${gsap.utils.interpolate(0, 100, p4)}%, 0% ${gsap.utils.interpolate(0, 100, p4)}%)`,
            });
            gsap.set(outroImgBottom, {
              clipPath: `polygon(0% ${gsap.utils.interpolate(100, 0, p4)}%, 100% ${gsap.utils.interpolate(100, 0, p4)}%, 100% 100%, 0% 100%)`,
            });

            // Phase 5: outro headline lines (bidirectional via scrub)
            const p5 = gsap.utils.clamp(0, 1, (p - 0.85) / 0.15);
            gsap.set(outroLines, {
              y: `${gsap.utils.interpolate(100, 0, p5)}%`,
            });
          },
        });
      }, sectionRef);
    }

    init();

    return () => {
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="sr-section">
      {/* ── Foreground panel (clips → rotates → scales away) ─────────── */}
      <div className="sr-fg-content">
        {/* Background image inside the slit panel */}
        <div className="sr-fg-img" />
        {/* Overlay — darkens during slit */}
        <div className="sr-fg-overlay-dark" />
        {/* Accent overlay — lime flash during phase transition */}
        <div className="sr-fg-overlay-accent" />
        {/* Headline inside the foreground panel */}
        <div className="sr-fg-header">
          <p className="sr-fg-eyebrow">Real food. Real results.</p>
          <h2>
            From information<br />to transformation.
          </h2>
        </div>
      </div>

      {/* ── Background columns (slide in as fg exits) ─────────────────── */}
      <div className="sr-bg-content">
        {/* Left column */}
        <div className="sr-bg-col sr-bg-col--left">
          <div className="sr-bg-copy">
            <span className="sr-bg-tag">What You Eat</span>
            <h3>Indian meals<br />re-engineered</h3>
            <p>
              Dal, roti, rice and sabzi — your everyday favourites recalculated
              with exact macros so that every gram works toward your goal.
              No imported ingredients. No bland salads. Just the food your family has
              always cooked, made to fit your body.
            </p>
          </div>
        </div>
        {/* Right column */}
        <div className="sr-bg-col sr-bg-col--right">
          <div className="sr-bg-copy">
            <span className="sr-bg-tag">How We Help</span>
            <h3>A coach who<br />adjusts weekly</h3>
            <p>
              Every week your coach reviews your weight, energy and hunger
              signals and fine-tunes the plan. This is not a download-and-forget
              PDF — it is a live conversation that keeps the results coming long
              after the motivation fades.
            </p>
          </div>
        </div>
      </div>

      {/* ── Outro: split images reveal ────────────────────────────────── */}
      <div className="sr-outro-content">
        {/* Top image */}
        <div className="sr-outro-img sr-outro-img--top">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80"
            alt="Healthy Indian meal bowls"
          />
        </div>
        {/* Bottom image */}
        <div className="sr-outro-img sr-outro-img--bottom">
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80"
            alt="Fitness transformation journey"
          />
        </div>
        {/* Outro headline centred over the split */}
        <div className="sr-outro-header">
          <div className="sr-outro-line-wrap">
            <span className="sr-outro-line">You become the shape</span>
          </div>
          <div className="sr-outro-line-wrap">
            <span className="sr-outro-line">the plan finally makes room for.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
