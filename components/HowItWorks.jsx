import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
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
    text: "Fat loss, healthy build, recomp or maintenance — pick the transformation you want.",
  },
  {
    num: "03",
    title: "Receive Your Custom Plan",
    text: "Get a customized meal plan and activity-based workout routine built around your lifestyle.",
  },
  {
    num: "04",
    title: "Build Lasting Habits",
    text: "Follow your plan with weekly coach check-ins for cardio, sleep, stress and nutrition.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -top-40 left-1/3 h-96 w-96 bg-lime/40" />
      <div className="container-app relative section-pad">
        <ScrollBlurUp>
          <SectionHeader
            dark
            eyebrow="How It Works"
            title="Your transformation in 4 simple steps"
            description="We don't sell generic plans. Here is exactly how we work with you to build a sustainable roadmap."
          />
        </ScrollBlurUp>

        <div className="relative grid gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-transparent via-lime/40 to-transparent lg:block" />
          {steps.map((step, i) => (
            <ScrollBlurUp key={step.num} delay={0.1 * i} y={50} blur={10}>
              <div className="relative flex h-full flex-col items-center text-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-lime/30 bg-dark text-lime shadow-[0_0_30px_-6px_rgba(204,255,0,0.5)]">
                  <span className="heading text-xl">{step.num}</span>
                </div>
                <h3 className="heading mt-6 text-lg text-white">{step.title}</h3>
                <p className="mt-3.5 text-base leading-relaxed text-white/55">
                  {step.text}
                </p>
              </div>
            </ScrollBlurUp>
          ))}
        </div>
      </div>
    </section>
  );
}
