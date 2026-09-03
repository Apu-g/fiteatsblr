import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
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
    title: "Smart Nutrition Tracking",
    text: "Every meal is planned around your macros so protein, carbs and fats stay on target — without the math.",
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
        <ScrollBlurUp>
          <SectionHeader
            eyebrow="Why FitEatsBLR"
            title="Nutrition that actually fits your life"
            description="We don't sell generic plans. We design fancy, customized diets around Indian food, your schedule and your budget — so consistency finally feels easy."
          />
        </ScrollBlurUp>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <ScrollBlurUp key={f.title} delay={0.08 * (i % 3)} y={45} blur={10}>
              <div className="card-soft card-lift group h-full rounded-2xl sm:rounded-3xl border-2 border-transparent bg-white p-4 sm:p-8 hover:border-lime">
                <span className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-ink text-lime transition-colors duration-300 group-hover:bg-lime group-hover:text-ink">
                  <f.icon />
                </span>
                <h3 className="heading mt-4 sm:mt-6 text-lg sm:text-xl text-ink">{f.title}</h3>
                <p className="mt-2.5 sm:mt-3.5 text-sm sm:text-base leading-relaxed text-ink/60">
                  {f.text}
                </p>
              </div>
            </ScrollBlurUp>
          ))}
        </div>
      </div>
    </section>
  );
}
