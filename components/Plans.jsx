import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

const plans = [
  {
    name: "Starter",
    price: "1,499",
    tagline: "Everything you need to get consistent",
    popular: false,
    cta: "Start with Starter",
    features: [
      "Personalized Indian meal plan",
      "Goal-based calorie & macro targets",
      "1 plan revision per month",
      "WhatsApp text support",
      "Weekly weigh-in tracking",
      "Healthy swap & snack guides",
    ],
  },
  {
    name: "Transform",
    price: "2,999",
    tagline: "Our complete coaching experience",
    popular: true,
    cta: "Start Transforming",
    features: [
      "Everything in Starter",
      "Weekly plan revisions",
      "1-on-1 weekly coach call",
      "Daily macro tracking reviews",
      "Priority WhatsApp support",
      "Habit & workout guidance",
      "Progress photo analysis",
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -bottom-40 right-0 h-[26rem] w-[26rem] bg-lime/30" />
      <div className="container-app relative section-pad">
        <SectionHeader
          dark
          eyebrow="Plans"
          title="Simple pricing, serious results"
          description="Pick the plan that fits your journey. Both include a personalised plan — no hidden fees, cancel anytime."
        />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={0.12 * i}>
              <div
                className={`card-lift relative flex h-full flex-col rounded-3xl border-2 p-8 sm:p-10 ${
                  plan.popular
                    ? "border-lime bg-dark shadow-[0_20px_60px_-20px_rgba(204,255,0,0.35)]"
                    : "glass-dark border-white/10"
                }`}
              >
                {plan.popular ? (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-lime px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                    Most Popular
                  </span>
                ) : null}

                <h3 className="heading text-xl text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/50">{plan.tagline}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-lg font-semibold text-white/60">₹</span>
                  <span className="heading text-5xl text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-white/50">/month</span>
                </div>

                <ul className="mt-8 flex flex-col gap-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? "bg-lime text-ink" : "bg-white/10 text-lime"
                        }`}
                      >
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-white/75">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-1 items-end">
                  <Button
                    href="#onboarding"
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
