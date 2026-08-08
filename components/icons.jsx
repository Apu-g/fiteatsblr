const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function StarIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "h-5 w-5" }) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

/* ---------- Why FitEatsBLR feature icons ---------- */

export function MacroIcon({ className = "h-8 w-8" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3a9 9 0 1 0 9 9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 12 19 5" />
      <path d="M17 3h2v2" />
    </svg>
  );
}

export function MealIcon({ className = "h-8 w-8" }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 2v9a2 2 0 0 0 2 2h1v9a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v16" />
    </svg>
  );
}

export function SupportIcon({ className = "h-8 w-8" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function WalletIcon({ className = "h-8 w-8" }) {
  return (
    <svg {...base} className={className}>
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
    </svg>
  );
}

export function PersonIcon({ className = "h-8 w-8" }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function NoSuppIcon({ className = "h-8 w-8" }) {
  return (
    <svg {...base} className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function SparkIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2l1.9 5.7L19.6 9.6l-5.7 1.9L12 17.2l-1.9-5.7L4.4 9.6l5.7-1.9L12 2zM19 15l.95 2.85L22.8 18.8l-2.85.95L19 22.6l-.95-2.85-2.85-.95 2.85-.95L19 15z" />
    </svg>
  );
}

/* ---------- Onboarding option icons ---------- */

export function FlameIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22c4.42 0 8-3.58 8-8 0-3.6-2.2-6.5-5-7.5C14.5 8 13 9 12 11c-.5-2-1.5-3.5-3-4.5C7 8 4 11 4 14c0 4.42 3.58 8 8 8z" />
    </svg>
  );
}

export function MuscleIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 6.5 3.5 9.5a2 2 0 0 0 0 2.8l3.5 3.5a2 2 0 0 0 2.8 0l3-3" />
      <path d="M17.5 6.5l3 3a2 2 0 0 1 0 2.8l-3.5 3.5a2 2 0 0 1-2.8 0" />
      <path d="M8 8.5 6 10.5M16 8.5l2 2" />
    </svg>
  );
}

export function RecompIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M21 3 11 13" />
      <path d="M17 3h4v4" />
      <path d="M3 8.5A6.5 6.5 0 0 1 9.5 2h.5" />
      <path d="M3 15.5A6.5 6.5 0 0 0 9.5 22h.5" />
      <path d="M8 15.5A6.5 6.5 0 0 0 14.5 22" />
    </svg>
  );
}

export function ShieldIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function SedentaryIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20h16" />
      <path d="M7 20V10a5 5 0 0 1 10 0v10" />
      <path d="M7 14h10" />
    </svg>
  );
}

export function LightIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}

export function ModerateIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m14.7-5.7 2.8-2.8M4.5 18.5 7.3 15.7m9.4 0 2.8 2.8M4.5 5.5 7.3 8.3" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function ActiveIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 7.5V15" />
      <path d="m9 12-1.5-4L3 8" />
      <path d="m15 12 1.5-4L21 8" />
      <path d="m7.5 18.5 1.5-3.5 3 2" />
      <path d="m16.5 18.5-1.5-3.5-3 2" />
    </svg>
  );
}

export function AthleteIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M15 4h4v4" />
      <path d="M13 7 19 1l4 4-6 6 4 4-3 3-5-5z" />
      <path d="M2 13l6 6-3 3-6-6z" />
    </svg>
  );
}

export function VegIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function NonVegIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3.5 3.5 6.5a2 2 0 0 0 0 2.8l5 5a2 2 0 0 0 2.8 0l5-5a2 2 0 0 0 0-2.8l-2.5-2.5" />
      <path d="M3 15h12v6H3zM15 18h6" />
    </svg>
  );
}

export function EggIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21a7 7 0 0 0 7-7c0-4.5-3-9-7-11-4 2-7 6.5-7 11a7 7 0 0 0 7 7z" />
    </svg>
  );
}

export function VeganIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <path d="M18 4c-3 0-7 2-8.5 6.5C8 14 7 17 6 20" />
      <path d="M18 4c0 5-1.5 9-5 12" />
      <path d="M20 4c-2.5 5-5 8-9 10.5" />
    </svg>
  );
}

export function MaleIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="5" r="3" />
      <path d="M12 8v7m0 0h-3m3 0h3" />
      <path d="M8 21l4-6 4 6" />
    </svg>
  );
}

export function FemaleIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="7" r="4" />
      <path d="M12 11v9m0-9 3 4m-3-4-3 4" />
    </svg>
  );
}

export function OtherIcon({ className = "h-6 w-6" }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

const optionIconMap = {
  male: MaleIcon,
  female: FemaleIcon,
  other: OtherIcon,
  flame: FlameIcon,
  muscle: MuscleIcon,
  recomp: RecompIcon,
  shield: ShieldIcon,
  sedentary: SedentaryIcon,
  light: LightIcon,
  moderate: ModerateIcon,
  active: ActiveIcon,
  athlete: AthleteIcon,
  veg: VegIcon,
  nonveg: NonVegIcon,
  egg: EggIcon,
  vegan: VeganIcon,
};

export function OptionIcon({ name, className = "h-6 w-6" }) {
  const Icon = optionIconMap[name] || SparkIcon;
  return <Icon className={className} />;
}
