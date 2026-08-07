import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "01",
    title: "Tell Us About Yourself",
    text: "Share your age, height, weight and daily routine in a quick 2-minute form.",
  },
  {
    num: "02",
    title: "Choose Your Goal",
    text: "Lose fat, gain muscle, recomp or maintain — pick the transformation you want.",
  },
  {
    num: "03",
    title: "Receive Personalized Plan",
    text: "Get a custom Indian meal plan matched to your budget, tastes and medical needs.",
  },
  {
    num: "04",
    title: "Begin Your Transformation",
    text: "Follow your plan with weekly coach check-ins that keep you on track.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -top-40 left-1/3 h-96 w-96 bg-lime/40" />
      <div className="container-app relative section-pad">
        <SectionHeader
          dark
          eyebrow="How It Works"
          title="Your transformation in 4 simple steps"
          description="From first hello to first results — a simple, guided journey with zero guesswork."
        />

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent lg:block" />
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={0.1 * i}>
              <div className="relative flex h-full flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-lime/30 bg-dark text-lime shadow-[0_0_30px_-6px_rgba(204,255,0,0.5)]">
                  <span className="heading text-xl">{step.num}</span>
                </div>
                <h3 className="heading mt-6 text-lg text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
