import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

const creds = [
  "Certified Sports Nutritionist (ISSA)",
  "12+ years coaching 500+ clients",
  "Specialist in PCOS, diabetes & thyroid diets",
  "Strength training & body recomposition expert",
];

export default function Coach() {
  return (
    <section id="coach" className="bg-white">
      <div className="container-app section-pad grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal x={-30} y={0} className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-lime/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] bg-dark">
              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80"
                alt="FitEatsBLR head coach"
                width={560}
                height={640}
                className="h-[26rem] w-full object-cover sm:h-[32rem]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="heading text-xl text-white">&nbsp;</p>
                <p className="text-sm text-lime">Head Coach · FitEatsBLR</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-ink/10 bg-lime/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Meet Your Coach
            </span>
            <h2 className="heading mt-4 text-3xl text-ink sm:text-4xl md:text-[2.75rem]">
              Coaching that treats you like a person, not a calorie number
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/60 sm:text-lg">
              Arjun has spent over a decade helping Indians lose fat, build
              muscle and fix long-term habits — around paneer, dal-chawal and
              tight office schedules. Your plan is built with him, reviewed by
              him, and adjusted until it works for you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-col gap-4">
              {creds.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-ink/80">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9">
              <Button href="#onboarding">Book Free Consultation</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
