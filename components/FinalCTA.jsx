import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-lime">
      <div className="glow-blob -top-24 left-1/4 h-80 w-80 bg-ink/10" />
      <div className="container-app relative section-pad text-center">
        <ScrollBlurUp>
          <h2 className="heading mx-auto max-w-3xl text-3xl text-ink sm:text-4xl md:text-[3rem]">
            Stop guessing. Start your transformation today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Take the 2-minute quiz and get a free, customized plan from our
            coaches. No spam, no pressure — just clarity.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#onboarding" variant="white">
              Start My Transformation
            </Button>
          </div>
          <p className="mt-6 text-sm font-medium text-ink/50">
            Free consultation · Plan in 48 hours · Cancel anytime
          </p>
        </ScrollBlurUp>
      </div>
    </section>
  );
}
