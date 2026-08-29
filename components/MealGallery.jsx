import Image from "next/image";
import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
import SectionHeader from "@/components/ui/SectionHeader";

const meals = [
  {
    title: "Paneer Protein Bowl",
    tag: "Veg Protein",
    recipe: "View Recipe",
    img: "/meals/panner protein bowl.png",
  },
  {
    title: "High Protein Bowl",
    tag: "Balanced",
    recipe: "View Recipe",
    img: "/meals/high protein bowl.jpeg",
  },
  {
    title: "Smoothies",
    tag: "Refreshing",
    recipe: "View Recipe",
    img: "/meals/smoothies.jpeg",
  },
  {
    title: "Breakfast",
    tag: "Start Strong",
    recipe: "View Recipe",
    img: "/meals/breakfast.jpeg",
  },
  {
    title: "Lunch",
    tag: "Family Favourites",
    recipe: "View Recipe",
    img: "/meals/lunch.jpeg",
  },
  {
    title: "Dinner",
    tag: "Light & Satisfying",
    recipe: "View Recipe",
    img: "/meals/dinner.jpeg",
  },
];

export default function MealGallery() {
  return (
    <section id="meals" className="bg-white">
      <div className="container-app section-pad">
        <ScrollBlurUp>
          <SectionHeader
            eyebrow="Meal Gallery"
            title="Real Indian meals, designed for results"
            description="Every plan is a mix of meals you already love — customized and balanced for your goal."
          />
        </ScrollBlurUp>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal, i) => (
            <ScrollBlurUp key={meal.title} delay={0.06 * (i % 4)} y={40} blur={8}>
              <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-dark">
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
                <span className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4 rounded-full bg-lime px-2 py-0.5 sm:px-3 sm:py-1 text-[0.6rem] sm:text-[0.6875rem] font-bold uppercase tracking-wide text-ink">
                  {meal.tag}
                </span>
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <h3 className="heading text-sm sm:text-lg text-white leading-tight">{meal.title}</h3>
                  <p className="mt-0.5 sm:mt-1 text-[0.65rem] sm:text-xs font-semibold text-lime">
                    {meal.recipe}
                  </p>
                </div>
              </div>
            </ScrollBlurUp>
          ))}
        </div>
      </div>
    </section>
  );
}
