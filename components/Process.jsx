"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Body Metric & Goal Audit",
    text: "We analyze your body, metabolism and goals before planning anything.",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    benefits: ["BMR & TDEE calculation", "Obstacle identification", "No credit card required"],
  },
  {
    num: "02",
    title: "1-on-1 Consultation",
    text: "A direct call to align your plan around your routine and lifestyle.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    highlight: true,
    benefits: ["Direct WhatsApp / phone call", "Injury / history discussion", "Routine alignment"],
  },
  {
    num: "03",
    title: "Custom Meal Roadmap",
    text: "A nutrition plan built on real Indian home food you already eat.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    benefits: ["Custom macro & calorie plan", "Budget-friendly meals", "Weekly adjustments"],
  },
];

export default function Process() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx;

    function init() {
      ctx = gsap.context(() => {
        const section = wrapperRef.current.querySelector(".process-sticky");
        const cardContainer = wrapperRef.current.querySelector(
          ".process-card-container"
        );
        const cards = gsap.utils.toArray(".process-card");

        const rootFont = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        ) || 16;
        // rem-based scroll distance — generous but not endless
        const pinDistance = 72 * rootFont;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 639px)", () => {
          gsap.set([".process-card", ".process-card-container"], {
            clearProps: "all",
          });
          return {};
        });

        mm.add("(min-width: 640px)", () => {
          gsap.set(cardContainer, { width: "72%", gap: "1.25rem" });
          gsap.set(cards, { rotationY: 0 });

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: () => `+=${pinDistance}px`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            onUpdate: (self) => {
              const progress = self.progress;
              // flip cards early and smoothly — completes by mid-scroll
              const base = gsap.utils.clamp(
                0,
                1,
                gsap.utils.mapRange(0.15, 0.5, 0, 1, progress)
              );
              cards.forEach((card, i) => {
                const local = gsap.utils.clamp(0, 1, base - i * 0.08);
                gsap.set(card, { rotationY: local * 180 });
              });
            },
          });
        });
      }, wrapperRef);
    }

    init();

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(refreshTimer);
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} id="process" className="bg-ink text-white">
      {/* One screen: header always visible + symmetric glass cards */}
      <section className="process-sticky">
        <div className="process-sticky-header">
          <span className="process-eyebrow">The Process</span>
          <h2 className="heading">
            From information
            <br />
            to transformation
          </h2>
          <p className="process-intro-desc">
            We don&apos;t sell generic plans. Here is exactly how we work with
            you to design a sustainable roadmap for your body and lifestyle.
          </p>
        </div>

        <div className="process-card-container">
          {steps.map((step, i) => (
            <div className="process-card" id={`process-card-${i}`} key={step.num}>
              <div className="process-card-front">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="process-card-back">
                <span className="process-card-num">( {step.num} )</span>
                <h3 className="heading">{step.title}</h3>
                <p className="process-card-text">{step.text}</p>
                <ul className="process-card-list">
                  {step.benefits.map((b) => (
                    <li key={b}>
                      <span className="process-card-check">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outro */}
      <section className="process-outro">
        <div>
          <h2 className="heading">
            Every transformation starts with one decision.
          </h2>
          <Button href="#onboarding" size="lg" className="mt-8">
            Start Your Free Assessment
          </Button>
        </div>
      </section>
    </div>
  );
}