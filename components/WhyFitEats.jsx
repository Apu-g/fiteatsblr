import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  MacroIcon,
  MealIcon,
  SupportIcon,
  WalletIcon,
  PersonIcon,
  NoSuppIcon,
} from "@/components/icons";

const features = [
  {
    icon: MacroIcon,
    title: "Macro Tracking",
    text: "Every meal is weighed against your macros so protein, carbs and fats stay on target — without the math.",
  },
  {
    icon: MealIcon,
    title: "Healthy Indian Meals",
    text: "Dal, roti, rice, sabzi and curries — familiar home food made to fit your goal, not fad diets.",
  },
  {
    icon: SupportIcon,
    title: "Weekly Support",
    text: "A real coach reviews your progress weekly and adjusts your plan as your body changes.",
  },
  {
    icon: WalletIcon,
    title: "Budget Friendly Diet",
    text: "Meal roadmaps optimized to work with your regular grocery and food budget, without requiring expensive ingredients.",
  },
  {
    icon: PersonIcon,
    title: "Personalized Diet",
    text: "Built around your age, weight, activity, food preference, medical conditions and lifestyle.",
  },
  {
    icon: NoSuppIcon,
    title: "No Supplements Required",
    text: "Real food only. No powders, no pills, no gimmicks — just sustainable nutrition that works.",
  },
];

export default function WhyFitEats() {
  return (
    <section id="why" className="bg-surface">
      <div className="container-app section-pad">
        <SectionHeader
          eyebrow="Why FitEats"
          title="Nutrition that actually fits your life"
          description="We build your plan around Indian food, your schedule and your budget — so consistency finally feels easy."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.06 * (i % 3)}>
              <div className="card-soft card-lift group h-full rounded-3xl border-2 border-transparent bg-white p-8 hover:border-lime">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                  <f.icon />
                </span>
                <h3 className="heading mt-6 text-xl text-ink">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
