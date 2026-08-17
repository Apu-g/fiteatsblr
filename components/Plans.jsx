import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

const plans = [
  {
    name: "3 Months",
    price: "4,499",
    mrp: "5,999",
    tagline: "Kickstart your transformation",
    popular: false,
    cta: "Start with 3 Months",
    features: [
      "Personalized meal plan",
      "Goal-based macro targets",
      "Weekly plan adjustments",
      "WhatsApp coach support",
      "Weekly check-in tracking",
      "Healthy swap & snack guides",
    ],
  },
  {
    name: "6 Months",
    price: "6,499",
    mrp: "8,499",
    tagline: "Our complete coaching experience",
    popular: true,
    cta: "Start Transforming",
    features: [
      "Everything in 3 Months",
      "Weekly plan revisions",
      "1-on-1 weekly coach call",
      "Priority WhatsApp support",
      "Habit & workout guidance",
      "Progress tracking & analysis",
      "Sleep & stress management tips",
    ],
  },
  {
    name: "12 Months",
    price: "9,499",
    mrp: "12,999",
    tagline: "Complete lifestyle transformation",
    popular: false,
    cta: "Go All In",
    features: [
      "Everything in 6 Months",
      "Dedicated coach for 12 months",
      "Monthly progress reviews",
      "Customized activity plans",
      "Cardio & recovery guidance",
      "Long-term habit building",
      "Priority support all year",
    ],
  },
];

const mealPlans = [
  {
    type: "Veg Basic",
    price: "99",
    per: "per meal",
    features: ["Simple vegetarian meals", "Budget-friendly options", "Customized to your goal"],
  },
  {
    type: "Veg Premium",
    price: "149",
    per: "per meal",
    features: ["Premium vegetarian meals", "Wide variety of options", "Customized to your goal"],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -bottom-40 right-0 h-[26rem] w-[26rem] bg-lime/30" />
      <div className="container-app relative section-pad">
        <ScrollBlurUp>
          <SectionHeader
            dark
            eyebrow="Membership"
            title="Choose your journey"
            description="We don't sell generic plans. Pick the membership that fits your transformation timeline."
          />
        </ScrollBlurUp>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollBlurUp key={plan.name} delay={0.12 * i} y={50} blur={10}>
              <div
                className={`card-lift relative flex h-full flex-col rounded-3xl border-2 p-6 sm:p-8 md:p-10 ${
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

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-lg font-semibold text-white/40 line-through">₹{plan.mrp}</span>
                  <span className="text-lg font-semibold text-white/60">₹</span>
                  <span className="heading text-4xl sm:text-5xl text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1.5 text-sm text-white/50">total</span>
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
            </ScrollBlurUp>
          ))}
        </div>

        {/* Meal Plans */}
        <div className="mx-auto mt-16 max-w-3xl">
          <ScrollBlurUp>
            <h3 className="heading text-2xl text-white text-center mb-8">Or order per meal</h3>
          </ScrollBlurUp>
          <div className="grid gap-6 sm:grid-cols-2">
            {mealPlans.map((mp, i) => (
              <ScrollBlurUp key={mp.type} delay={0.1 * i} y={40} blur={8}>
                <div className="card-lift rounded-3xl glass-dark border-2 border-white/10 p-6 sm:p-8">
                  <h4 className="heading text-lg text-white">{mp.type}</h4>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="text-lg font-semibold text-white/60">₹</span>
                    <span className="heading text-4xl text-white">{mp.price}</span>
                    <span className="mb-1 text-sm text-white/50">{mp.per}</span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {mp.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-lime">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <span className="text-sm text-white/75">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href="#onboarding" variant="outline" className="w-full">
                      Order Now
                    </Button>
                  </div>
                </div>
              </ScrollBlurUp>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <ScrollBlurUp delay={0.2} y={40} blur={8}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl glass-dark border border-white/10 p-6 sm:p-8">
            <h4 className="heading text-base text-white mb-4">Terms & Conditions</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/60 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-lime mt-1 shrink-0">•</span>
                <span>Minimum 6 meals should be ordered for per-meal plans.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime mt-1 shrink-0">•</span>
                <span>Membership refunded within 7 days. Trial meals cost is non-refundable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lime mt-1 shrink-0">•</span>
                <span>Membership not eligible for medical conditions such as PCOD/PCOS, High BP, Diabetes, or Thyroid.</span>
              </li>
            </ul>
          </div>
        </ScrollBlurUp>
      </div>
    </section>
  );
}
