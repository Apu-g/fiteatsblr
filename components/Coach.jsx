import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const coaches = [
  {
    name: "Dr. Roshini",
    title: "Health & Wellness Coach",
    creds: "BHMS, MD",
    image: "/assets/coach-dr-roshini.jpg",
  },
  {
    name: "Pavan Naik",
    title: "Fitness Expert",
    creds: "Fitness Expert",
    image: "/assets/coach-pavan-naik.jpg",
  },
  {
    name: "Vineeth Mallinath",
    title: "Habit Coach",
    creds: "Habit Coach",
    image: "/assets/coach-vineeth-mallinath.jpg",
  },
];

export default function Coach() {
  return (
    <section id="coach" className="bg-white">
      <div className="container-app section-pad">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full border border-ink/10 bg-lime/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Meet Your Coaches
            </span>
            <h2 className="heading mt-4 text-3xl text-ink sm:text-4xl md:text-[2.75rem]">
              Coaching that treats you like a person, not a calorie number
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/60 sm:text-lg">
              A team of experts guiding your health, fitness and habits — around
              your body, your goals and your lifestyle.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {coaches.map((coach, i) => (
            <Reveal key={coach.name} delay={i * 0.12}>
              <div className="group relative overflow-hidden rounded-[2rem] bg-dark">
                <Image
                  src={coach.image}
                  alt={`${coach.name} — ${coach.title}`}
                  width={560}
                  height={640}
                  className="h-[26rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="heading text-xl text-white">{coach.name}</p>
                  <p className="text-sm text-lime">{coach.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Button href="#onboarding">Book Free Consultation</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
