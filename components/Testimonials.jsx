"use client";

import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { StarIcon } from "@/components/icons";

const testimonials = [
  {
    name: "Priya S.",
    initials: "PS",
    role: "Lost 12 kg in 4 months",
    text: "I never thought I could lose weight eating dal and roti. FitEatsBLR made my home food work for my goal — and the weekly check-ins kept me honest.",
  },
  {
    name: "Rahul K.",
    initials: "RK",
    role: "Gained 6 kg lean muscle",
    text: "The meal plan fit my gym schedule and my office lunch. No supplements, no starving — just consistent food that finally made sense.",
  },
  {
    name: "Ananya M.",
    initials: "AM",
    role: "Reversed PCOS symptoms",
    text: "As a vegetarian with PCOS, I'd tried everything. My plan was built around paneer, soya and my lifestyle. 6 months in, my energy is completely different.",
  },
  {
    name: "Vikram R.",
    initials: "VR",
    role: "Lost 18 kg in 6 months",
    text: "I travel a lot for work. FitEatsBLR taught me how to order anywhere and still hit my targets. Down 18 kilos and my BP is normal now.",
  },
  {
    name: "Sneha T.",
    initials: "ST",
    role: "Maintained for 1+ year",
    text: "Maintenance used to scare me. Their coach built a plan I could actually sustain — I've kept my results for over a year without obsessing.",
  },
  {
    name: "Karthik V.",
    initials: "KV",
    role: "Body recomposition",
    text: "Lost fat and gained muscle at the same time. The weekly plan tweaks were a game changer. Worth every rupee.",
  },
];

const stars = [1, 2, 3, 4, 5];

function TestimonialCard({ t }) {
  return (
    <article className="t-card card-lift group w-[85vw] max-w-[400px] shrink-0 snap-start rounded-2xl sm:rounded-3xl glass-dark p-5 sm:p-7 sm:w-[400px] hover:scale-[1.02]">
      <div className="flex gap-1 text-lime">
        {stars.map((s) => (
          <StarIcon key={s} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        ))}
      </div>
      <p className="mt-4 sm:mt-5 min-h-20 sm:min-h-28 text-xs sm:text-sm leading-relaxed text-white/75">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-lime/20 text-lime font-bold text-xs sm:text-sm ring-2 ring-lime/40">
          {t.initials}
        </div>
        <div>
          <p className="font-semibold text-sm sm:text-base text-white">{t.name}</p>
          <p className="text-[0.65rem] sm:text-xs text-lime">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -top-32 left-0 h-80 w-80 bg-lime/30" />
      <div className="container-app relative section-pad">
        <ScrollBlurUp>
          <SectionHeader
            dark
            eyebrow="Testimonials"
            title="Real people, real transformations"
            description="Hundreds of members across Bangalore are eating better and feeling stronger."
          />
        </ScrollBlurUp>

        <ScrollBlurUp delay={0.15} y={50} blur={10}>
          <div className="t-marquee group cursor-grab active:cursor-grabbing">
            <div className="t-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="t-marquee-set flex shrink-0 gap-5 pr-5">
                  {testimonials.map((t) => (
                    <TestimonialCard key={t.name} t={t} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollBlurUp>
      </div>
    </section>
  );
}
