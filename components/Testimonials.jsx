"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { StarIcon } from "@/components/icons";

const testimonials = [
  {
    name: "Priya S.",
    role: "Lost 12 kg in 4 months",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I never thought I could lose weight eating dal and roti. FitEatsBLR made my home food work for my goal — and the weekly check-ins kept me honest.",
  },
  {
    name: "Rahul K.",
    role: "Gained 6 kg lean muscle",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The meal plan fit my gym schedule and my office lunch. No supplements, no starving — just consistent food that finally made sense.",
  },
  {
    name: "Ananya M.",
    role: "Reversed PCOS symptoms",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "As a vegetarian with PCOS, I'd tried everything. My plan was built around paneer, soya and my lifestyle. 6 months in, my energy is completely different.",
  },
  {
    name: "Vikram R.",
    role: "Lost 18 kg in 6 months",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "I travel a lot for work. FitEatsBLR taught me how to order anywhere and still hit my targets. Down 18 kilos and my BP is normal now.",
  },
  {
    name: "Sneha T.",
    role: "Maintained for 1+ year",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Maintenance used to scare me. Their coach built a plan I could actually sustain — I've kept my results for over a year without obsessing.",
  },
  {
    name: "Karthik V.",
    role: "Body recomposition",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    text: "Lost fat and gained muscle at the same time. The weekly plan tweaks were a game changer. Worth every rupee.",
  },
];

const stars = [1, 2, 3, 4, 5];

function TestimonialCard({ t }) {
  return (
    <article className="t-card card-lift group w-[82vw] max-w-[400px] shrink-0 snap-start rounded-3xl glass-dark p-7 sm:w-[400px] hover:scale-[1.02]">
      <div className="flex gap-1 text-lime">
        {stars.map((s) => (
          <StarIcon key={s} className="h-4 w-4" />
        ))}
      </div>
      <p className="mt-5 min-h-28 text-sm leading-relaxed text-white/75">
        “{t.text}”
      </p>
      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
        <Image
          src={t.img}
          alt={t.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-lime/40"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-white">{t.name}</p>
          <p className="text-xs text-lime">{t.role}</p>
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
        <SectionHeader
          dark
          eyebrow="Testimonials"
          title="Real people, real transformations"
          description="Hundreds of members across Bangalore are eating better and feeling stronger."
        />

        <Reveal>
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
        </Reveal>
      </div>
    </section>
  );
}
