"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollBlurUp from "@/components/ui/ScrollBlurUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDownIcon } from "@/components/icons";

const faqs = [
  {
    q: "Do you offer vegetarian meal plans?",
    a: "Absolutely. We build balanced plans around paneer, soya, legumes, dairy and eggs — no meat required. Our veg plans are designed to hit your protein and macro targets using familiar Indian vegetarian food.",
  },
  {
    q: "Do you offer non-vegetarian meal plans?",
    a: "Yes. Our non-veg plans include chicken, fish, eggs and other protein-rich options integrated into your regular Indian meals. Everything is customized to your taste, budget and health goals.",
  },
  {
    q: "How are plans customized?",
    a: "Your custom roadmap is built using your age, height, weight, food preference, medical history, and your biggest challenges. Our head coach personally reviews your data to design a plan that fits your lifestyle.",
  },
  {
    q: "How will my coach contact me?",
    a: "Once you submit the form, our head coach will review your details and contact you via WhatsApp or a direct phone call within 24 hours. We will answer your specific questions and explain your customized plan.",
  },
  {
    q: "Is the assessment call really free?",
    a: "Yes, 100%. Our initial consultation call and body metric analysis are completely free. We want to give you absolute clarity on your numbers and roadmap before you make any decisions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-ink">
      <div className="glow-blob -bottom-32 left-1/4 h-80 w-80 bg-lime/25" />
      <div className="container-app relative section-pad max-w-3xl">
        <ScrollBlurUp>
          <SectionHeader
            dark
            eyebrow="FAQ"
            title="Questions? We've got answers"
            description="Everything you need to know before you start. Still curious? Reach out on WhatsApp."
          />
        </ScrollBlurUp>

        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <ScrollBlurUp key={item.q} delay={0.06 * i} y={35} blur={8}>
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
                      className={`heading text-lg sm:text-xl ${
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
                        <p className="px-6 pb-6 text-base leading-relaxed text-white/60 sm:px-8">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </ScrollBlurUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
