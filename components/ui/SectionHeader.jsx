import Reveal from "@/components/ui/Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignment} mb-10 sm:mb-14 md:mb-16`}>
      {eyebrow ? (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
            dark
              ? "border-lime/30 bg-lime/10 text-lime"
              : "border-ink/10 bg-lime/30 text-ink"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`heading text-3xl sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
