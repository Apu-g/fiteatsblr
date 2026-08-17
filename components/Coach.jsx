import Image from "next/image";
import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
import Button from "@/components/ui/Button";

const coaches = [
  {
    name: "Dr. Roshini",
    title: "Health & Wellness Coach",
    creds: "BHMS, MD",
    image: "/assets/coach-dr-roshini.png",
  },
  {
    name: "Pavan Naik",
    title: "Fitness Expert",
    creds: "Fitness Expert",
    image: "/assets/coach-pavan-naik.png",
  },
  {
    name: "Vineeth Mallinath",
    title: "Habit Coach",
    creds: "Habit Coach",
    image: "/assets/coach-vineeth-mallinath.png",
  },
];

export default function Coach() {
  return (
    <section id="coach" className="bg-ink">
      <div className="container-app section-pad">
        <ScrollBlurUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              Meet Your Coaches
            </span>
            <h2 className="heading mt-4 text-3xl text-white sm:text-4xl md:text-[2.75rem]">
              Coaching that treats you like a person, not a number
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
              A team of experts guiding your health, fitness and habits — around
              your body, your goals and your lifestyle.
            </p>
          </div>
        </ScrollBlurUp>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3">
          {coaches.map((coach, i) => (
            <ScrollBlurUp key={coach.name} delay={0.1 * i} y={50} blur={10}>
              <div className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 overflow-hidden rounded-full border-4 border-lime/30 shadow-[0_0_40px_-6px_rgba(204,255,0,0.35)] transition-all duration-500 group-hover:border-lime group-hover:shadow-[0_0_50px_-2px_rgba(204,255,0,0.55)]">
                    <Image
                      src={coach.image}
                      alt={`${coach.name} — ${coach.title}`}
                      width={176}
                      height={176}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-lime/15 blur-2xl" />
                </div>
                <p className="heading mt-6 text-xl text-white">{coach.name}</p>
                <p className="text-sm text-lime mt-1">{coach.title}</p>
                <p className="text-xs text-white/40 mt-1">{coach.creds}</p>
              </div>
            </ScrollBlurUp>
          ))}
        </div>

        <ScrollBlurUp delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="#onboarding">Book Free Consultation</Button>
          </div>
        </ScrollBlurUp>
      </div>
    </section>
  );
}
