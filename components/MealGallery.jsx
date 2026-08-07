import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const meals = [
  {
    title: "Chicken Meals",
    tag: "High Protein",
    kcal: "480 kcal · 42g P",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=75",
  },
  {
    title: "Paneer Meals",
    tag: "Veg Protein",
    kcal: "520 kcal · 36g P",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=75",
  },
  {
    title: "High Protein Bowls",
    tag: "Balanced",
    kcal: "610 kcal · 45g P",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=75",
  },
  {
    title: "Smoothies",
    tag: "Refreshing",
    kcal: "280 kcal · 25g P",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&q=75",
  },
  {
    title: "Breakfast",
    tag: "Start Strong",
    kcal: "350 kcal · 28g P",
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=75",
  },
  {
    title: "Lunch",
    tag: "Family Favourites",
    kcal: "540 kcal · 38g P",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=75",
  },
  {
    title: "Dinner",
    tag: "Light & Satisfying",
    kcal: "460 kcal · 40g P",
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=75",
  },
  {
    title: "Snacks",
    tag: "Guilt-Free",
    kcal: "180 kcal · 15g P",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=75",
  },
];

export default function MealGallery() {
  return (
    <section id="meals" className="bg-white">
      <div className="container-app section-pad">
        <SectionHeader
          eyebrow="Meal Gallery"
          title="Real Indian meals, engineered for results"
          description="Every plan is a mix of meals you already love — portioned and balanced for your goal."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {meals.map((meal, i) => (
            <Reveal key={meal.title} delay={0.05 * (i % 4)}>
              <div className="group relative overflow-hidden rounded-3xl bg-dark">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src={meal.img}
                    alt={meal.title}
                    width={500}
                    height={625}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                  {meal.tag}
                </span>
                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="heading text-lg text-white">{meal.title}</h3>
                  <p className="mt-1 text-xs font-semibold text-lime">
                    {meal.kcal}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
