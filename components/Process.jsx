import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckIcon, SparkIcon } from "@/components/icons";

const steps = [
  {
    num: "01",
    title: "Body Metric & Goal Audit",
    text: "Submit your basic details (age, height, weight, and food preferences). Our coaches analyze your metabolic rates, calculate target calories/macros, and assess your current challenges.",
    highlight: false,
    benefits: ["BMR & TDEE target calculation", "Obstacle identification", "No credit card or payment required"],
  },
  {
    num: "02",
    title: "1-on-1 Coach Consultation",
    text: "We reach out directly via your preferred contact method (WhatsApp or Call). We discuss your answers, address your specific fitness questions, and align on a sustainable plan that fits your work/life routine.",
    highlight: true,
    benefits: ["Direct WhatsApp/Phone consultation", "Discussion of injuries or medical history", "Real-world routine alignment"],
  },
  {
    num: "03",
    title: "Your Custom Meal Roadmap",
    text: "Get your personalized nutrition roadmap built entirely around normal Indian home food like dal, roti, paneer, and eggs. No extreme diets, no expensive supplements—just real food made to work for you.",
    highlight: false,
    benefits: ["Customized calorie & macro plan", "Familiar, budget-friendly Indian meals", "Ongoing weekly target adjustments"],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -bottom-40 right-0 h-[26rem] w-[26rem] bg-lime/20" />
      <div className="glow-blob -top-20 left-10 h-[22rem] w-[22rem] bg-[#3dff8f]/10" />
      
      <div className="container-app relative section-pad">
        <SectionHeader
          dark
          eyebrow="The Process"
          title="From information to transformation"
          description="We don't sell generic plans. Here is exactly how we work with you to design a sustainable roadmap for your body and lifestyle."
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={0.12 * i}>
              <div
                className={`card-lift relative flex h-full flex-col rounded-[2rem] border-2 p-8 sm:p-10 ${
                  step.highlight
                    ? "border-lime bg-dark shadow-[0_20px_60px_-20px_rgba(204,255,0,0.25)]"
                    : "glass-dark border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`heading text-4xl ${
                      step.highlight ? "text-lime" : "text-white/20"
                    }`}
                  >
                    {step.num}
                  </span>
                  {step.highlight ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
                      <SparkIcon className="h-3 w-3" /> Direct Call
                    </span>
                  ) : null}
                </div>

                <h3 className="heading mt-6 text-xl text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/50">
                  {step.text}
                </p>

                <ul className="mt-8 flex flex-col gap-3.5 border-t border-white/10 pt-6">
                  {step.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          step.highlight ? "bg-lime text-ink" : "bg-white/10 text-lime"
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-white/75">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Reveal delay={0.3}>
            <Button href="#onboarding" size="lg">
              Start Your Free Assessment
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
