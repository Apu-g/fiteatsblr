"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";
import Button from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      const threshold = heroHeight * 0.3;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <nav className="container-app flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3" onClick={close}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: scrolled ? 1 : 0,
              scale: scrolled ? 1 : 0.8,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo.png"
              alt="FitEatsBLR logo"
              width={56}
              height={56}
              className="rounded-2xl navbar-logo-glow"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{
              opacity: scrolled ? 1 : 0,
              x: scrolled ? 0 : -8,
            }}
            transition={{ duration: 0.4, delay: scrolled ? 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="heading text-2xl text-white"
          >
            FitEats<span className="text-lime">BLR</span>
          </motion.span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {site.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/75 transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button href="#onboarding" size="md">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-nav fixed inset-x-0 top-20 bottom-0 flex flex-col lg:hidden"
          >
            <div className="container-app flex flex-1 flex-col gap-2 overflow-y-auto py-8">
              {site.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="heading rounded-2xl px-4 py-4 text-2xl text-white transition-colors hover:bg-white/5 hover:text-lime"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-6"
              >
                <Button
                  href="#onboarding"
                  size="lg"
                  className="w-full"
                  onClick={close}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
