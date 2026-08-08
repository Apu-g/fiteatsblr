"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    q: "Can vegetarians join?",
    a: "Absolutely. We build balanced plans around paneer, soya, legumes, dairy and eggs — no meat required. Veg, non-veg, eggetarian and vegan options are all fully supported.",
  },
  {
    q: "How are roadmaps customized?",
    a: "Your custom roadmap is built using your age, height, weight, food preference, medical history, and your biggest challenges. Our head coach personally reviews your data to calculate your calorie and macro targets.",
  },
  {
    q: "How will my coach contact me?",
    a: "Once you submit the form, our head coach will review your details and contact you via WhatsApp or a direct phone call within 24 hours. We will answer your specific questions and explain your customized diet path.",
  },
  {
    q: "Is the assessment call really free?",
    a: "Yes, 100%. Our initial consultation call and body metric analysis are completely free. We want to give you absolute clarity on your numbers and roadmap before you make any decisions.",
  },
  {
    q: "Do I need supplements?",
    a: "No. FitEatsBLR is built entirely around real food. No powders, pills or protein shakes required — we make your normal meals work harder for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -bottom-32 left-1/4 h-80 w-80 bg-lime/25" />
      <div className="container-app relative section-pad max-w-3xl">
        <SectionHeader
          dark
          eyebrow="FAQ"
          title="Questions? We've got answers"
          description="Everything you need to know before you start. Still curious? Reach out on WhatsApp."
        />

        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} delay={0.05 * i}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-colors duration-300 ${
                    open ? "border-lime/50 bg-dark" : "glass-dark border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                    aria-expanded={open}
                  >
                    <span
                      className={`heading text-base sm:text-lg ${
                        open ? "text-lime" : "text-white"
                      }`}
                    >
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 ${
                        open ? "text-lime" : "text-white/40"
                      }`}
                    >
                      <ChevronDownIcon />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-white/60 sm:px-8">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
