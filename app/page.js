import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import WhyFitEats from "@/components/WhyFitEats";
import HowItWorks from "@/components/HowItWorks";
import MealGallery from "@/components/MealGallery";
import Process from "@/components/Process";
import Coach from "@/components/Coach";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import OnboardingForm from "@/components/OnboardingForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal />
      <WhyFitEats />
      <HowItWorks />
      <MealGallery />
      <Process />
      <Coach />
      <Plans />
      <Testimonials />
      <FAQ />
      <OnboardingForm />
      <FinalCTA />
      <Footer />
    </main>
  );
}
