"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { StarIcon } from "@/components/icons";

const testimonials = [
  {
    name: "Priya S.",
    role: "Lost 12 kg in 4 months",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I never thought I could lose weight eating dal and roti. FitEats made my home food work for my goal — and the weekly check-ins kept me honest.",
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
    text: "I travel a lot for work. FitEats taught me how to order anywhere and still hit my targets. Down 18 kilos and my BP is normal now.",
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

export default function Testimonials() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (paused || !trackRef.current) return;
      const el = trackRef.current;
      const card = el.querySelector(".t-card");
      if (!card) return;
      const scroll = el.scrollLeft + card.offsetWidth + 20;
      if (scroll >= el.scrollWidth - el.clientWidth) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollTo({ left: scroll, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

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
          <div
            ref={trackRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="t-card card-lift group w-[86%] shrink-0 snap-start rounded-3xl glass-dark p-7 sm:w-[48%] lg:w-[31.5%] hover:scale-[1.02]"
              >
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
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
