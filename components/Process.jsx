"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import ScrollBlurUp from "@/components/ui/ScrollBlurUp";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Fat Loss or Healthy Build",
    text: "We understand your body, lifestyle and goals before planning anything.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
    benefits: ["Goal identification", "Lifestyle assessment", "Medical history review"],
  },
  {
    num: "02",
    title: "Custom Meal & Routine Plan",
    text: "A personalized plan built around your routine, not the other way around.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    highlight: true,
    benefits: ["Customized meal plan", "Activity-based workouts", "Routine alignment"],
  },
  {
    num: "03",
    title: "Cardio, Sleep & Stress Habits",
    text: "Build sustainable habits for cardio, sleep quality and stress management.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    benefits: ["Cardio activity plan", "Sleep & recovery guide", "Stress management habits"],
  },
  {
    num: "04",
    title: "Progress Tracking & Coach Support",
    text: "Stay on track with weekly check-ins, progress reviews and dedicated coach support.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    benefits: ["Weekly check-in tracking", "WhatsApp coach support", "Progress reviews & analysis"],
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx;

    function init() {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".process-step-card");

        cards.forEach((card, i) => {
          // Card entrance animation
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 40%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Parallax on card background image
          const bgImg = card.querySelector(".process-step-bg img");
          if (bgImg) {
            gsap.fromTo(
              bgImg,
              { yPercent: -8, scale: 1.12 },
              {
                yPercent: 8,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          }
        });
      }, sectionRef);
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
    <div ref={sectionRef} id="process" className="bg-ink text-white">
      {/* Header — always visible, scroll-animated */}
      <section className="process-header-section">
        <ScrollBlurUp>
          <span className="process-eyebrow">The Process</span>
          <h2 className="heading process-heading">
            From information
            <br />
            to transformation
          </h2>
          <p className="process-intro-desc">
            We don&apos;t sell generic plans. Here is exactly how we work with
            you to build a sustainable roadmap for your body, lifestyle and goals.
          </p>
        </ScrollBlurUp>
      </section>

      {/* Cards — scroll-driven blur slide-up, no flip */}
      <section className="process-cards-section">
        <div className="container-app">
          <div className="process-cards-grid">
            {steps.map((step, i) => (
              <div
                className={`process-step-card ${step.highlight ? "process-step-card--highlight" : ""}`}
                key={step.num}
              >
                {/* Blurred background image */}
                <div className="process-step-bg">
                  <img src={step.image} alt={step.title} />
                  <div className="process-step-bg-overlay" />
                </div>

                {/* Content on top */}
                <div className="process-step-content">
                  <span className="process-card-num">{step.num}</span>
                  <h3 className="heading process-step-title">{step.title}</h3>
                  <p className="process-step-text">{step.text}</p>
                  <ul className="process-step-list">
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
        </div>
      </section>

      {/* Outro */}
      <section className="process-outro">
        <ScrollBlurUp>
          <div>
            <h2 className="heading">
              Every transformation starts with one decision.
            </h2>
            <p className="mt-4 text-base text-white/50 max-w-md mx-auto">
              We don&apos;t sell generic plans. Here is exactly how we work with
              you to build a sustainable roadmap for your body, lifestyle and goals.
            </p>
            <Button href="#onboarding" size="lg" className="mt-8">
              Start Your Free Assessment
            </Button>
          </div>
        </ScrollBlurUp>
      </section>
    </div>
  );
}
