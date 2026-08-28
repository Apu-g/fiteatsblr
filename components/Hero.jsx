"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/components/Preloader";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    document.body.style.overflow = "hidden";

    function splitCharsInline(el) {
      if (!el) return [];
      if (el.querySelector(".inline-mask")) {
        return Array.from(el.querySelectorAll(".inline-char"));
      }
      const text = el.textContent;
      el.textContent = "";
      const nodes = [];
      [...text].forEach((ch) => {
        const mask = document.createElement("span");
        mask.className = "inline-mask";
        const inner = document.createElement("span");
        inner.className = "inline-char";
        inner.textContent = ch === " " ? "\u00A0" : ch;
        mask.appendChild(inner);
        el.appendChild(mask);
        nodes.push(inner);
      });
      return nodes;
    }

    function splitLinesSimple(el) {
      if (!el) return [];
      if (el.querySelector(".line-mask")) {
        return Array.from(el.querySelectorAll(".reveal-line"));
      }
      const html = el.innerHTML.trim();
      const parts = html.split(/<br\s*\/?>/i).map((s) => s.trim()).filter(Boolean);
      el.innerHTML = "";
      const nodes = [];
      parts.forEach((part) => {
        const lineMask = document.createElement("span");
        lineMask.className = "line-mask";
        const line = document.createElement("span");
        line.className = "reveal-line";
        line.innerHTML = part;
        lineMask.appendChild(line);
        el.appendChild(lineMask);
        nodes.push(line);
      });
      return nodes;
    }

    function splitWordsToLines(el) {
      if (!el) return [];
      if (el.querySelector(".line-mask")) {
        return Array.from(el.querySelectorAll(".reveal-line"));
      }
      const text = el.textContent.trim();
      el.textContent = "";
      const mask = document.createElement("span");
      mask.className = "line-mask";
      const inner = document.createElement("span");
      inner.className = "reveal-line";
      inner.textContent = text;
      mask.appendChild(inner);
      el.appendChild(mask);
      return [inner];
    }

    const logoEl = document.getElementById("js-preloader-logo");
    const footerEl = document.getElementById("js-preloader-footer");
    const titleEl = document.getElementById("js-hero-title");
    const subtitleEls = document.querySelectorAll("#js-hero-subtitle span");
    const descEl = document.getElementById("js-hero-description");
    const heroLogo = document.querySelector(".hero-logo-image");

    const logoChars = splitCharsInline(logoEl);
    const footerLines = splitLinesSimple(footerEl);
    const heroTitleChars = splitCharsInline(titleEl);
    const subtitleLines = Array.from(subtitleEls).flatMap(splitWordsToLines);
    const descLines = splitWordsToLines(descEl);

    gsap.set(heroTitleChars, { yPercent: 100 });
    gsap.set([...subtitleLines, ...descLines], { yPercent: 100 });
    gsap.set(".preloader-progress-bar", { scaleX: 0, transformOrigin: "left center" });
    gsap.set(".preloader-progress", { scale: 0.86, opacity: 1 });
    gsap.set(".preloader-logo-img", { opacity: 0, scale: 0.8 });
    gsap.set(".hero-img-custom", { scale: 1.5 });
    gsap.set(".hero-buttons-custom", { opacity: 0, y: 16 });
    gsap.set(".hero-logo-image", { opacity: 0, scale: 0.6 });

    function animateProgress(duration = 2.4) {
      const ptl = gsap.timeline();
      const steps = 3;
      let curr = 0;
      for (let i = 0; i < steps; i++) {
        const last = i === steps - 1;
        const target = last ? 1 : Math.min(curr + Math.random() * 0.3 + 0.15, 0.85);
        curr = target;
        ptl.to(".preloader-progress-bar", {
          scaleX: target,
          duration: duration / steps,
          ease: "power2.out",
        });
      }
      return ptl;
    }

    const tl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
      },
    });

    tl.to(".preloader-progress", {
      scale: 1,
      duration: 0.8,
      ease: "power4.out",
    })
      .to(
        ".preloader-logo-img",
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power4.out",
        },
        "<"
      )
      .add(animateProgress(), "0.2")
      .to(
        logoChars,
        {
          xPercent: -100,
          stagger: 0.04,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "+=0.1"
      )
      .to(
        ".preloader-logo-img",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "<"
      )
      .to(
        footerLines,
        {
          yPercent: -100,
          stagger: 0.08,
          duration: 0.4,
          ease: "power4.inOut",
        },
        "-=0.1"
      )
      .to(
        ".preloader-progress",
        {
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        footerLines,
        {
          yPercent: -100,
          stagger: 0.08,
          duration: 0.4,
          ease: "power4.inOut",
        },
        "-=0.1"
      )
      .to(
        ".preloader-progress",
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".preloader-content",
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        ".preloader",
        {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          display: "none",
        },
        "+=0.15"
      )
      .to(
        ".hero-img-custom",
        {
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        ".hero-logo-image",
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.9"
      )
      .to(
        heroTitleChars,
        {
          yPercent: 0,
          stagger: 0.04,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.7"
      )
      .to(
        [...subtitleLines, ...descLines],
        {
          yPercent: 0,
          stagger: 0.06,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.6"
      )
      .to(
        ".hero-buttons-custom",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .set(".preloader", { display: "none" });

    // Scroll animation: hero logo shrinks and transitions to navbar
    if (heroLogo) {
      gsap.fromTo(
        heroLogo,
        {
          scale: 1,
          y: 0,
          opacity: 1,
          borderRadius: "1rem",
        },
        {
          scale: 0.2,
          y: -120,
          opacity: 0,
          borderRadius: "1rem",
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section-custom",
            start: "top top",
            end: "50% top",
            scrub: 0.5,
          },
        }
      );
    }

    // Parallax: hero backgrounds move slower than scroll
    const desktopBg = document.querySelector(".desktop-bg-custom");
    const mobileBg = document.querySelector(".mobile-fallback-custom");
    const smokeVideo = document.querySelector(".smoke-video");

    if (desktopBg) {
      gsap.fromTo(
        desktopBg,
        { yPercent: -12, scale: 1.15 },
        {
          yPercent: 12,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section-custom",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (mobileBg) {
      gsap.fromTo(
        mobileBg,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section-custom",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    if (smokeVideo) {
      gsap.fromTo(
        smokeVideo,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section-custom",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div ref={containerRef}>
      <Preloader />

      <section className="hero-section-custom">
        <div className="hero-shell-custom">
          <div className="responsive-mobile">
            <div className="hero-img-custom desktop-bg-custom" />

            <div className="mobile-fallback-custom">
              <Image
                src="/phone-home-page.jpg"
                alt="FitEatsBLR Healthy Meals"
                fill
                priority
                className="object-cover"
              />
            </div>

            <video
              src="/assets/smoke_final.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="smoke-video"
            />
          </div>

          <div className="hero-copy-wrap-custom">
            <div className="hero-copy-inner-custom">
              <div className="hero-logo-area">
                <Image
                  src="/logo.png"
                  alt="FitEatsBLR"
                  width={288}
                  height={288}
                  className="hero-logo-image rounded-2xl"
                  priority
                />
              </div>

              <h1 id="js-hero-title">FitEatsBLR®</h1>

              <div className="hero-bottom-custom">
                <h2 id="js-hero-subtitle">
                  <span>Eat Better.</span>
                  <span>Train Smarter.</span>
                  <span>Transform Faster.</span>
                </h2>

                <div>
                  <p id="js-hero-description">
                    Personalized Indian meal roadmaps built around your body, your goals, and your budget. Free assessment call with your coach included.
                  </p>
                  
                  <div className="hero-buttons-custom mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
                    <Button href="#onboarding" size="md">
                      Start Assessment
                    </Button>
                    <Button href="#process" variant="outline" size="md">
                      Our Process
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
