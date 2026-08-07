import Image from "next/image";
import { site } from "@/lib/site";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  InstagramIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from "@/components/icons";

const socials = [
  { label: "Instagram", href: site.instagram, Icon: InstagramIcon },
  { label: "WhatsApp", href: site.whatsapp, Icon: WhatsAppIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="container-app border-t border-white/10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="FitEats logo"
                width={44}
                height={44}
                className="rounded-xl"
              />
              <span className="heading text-xl text-white">
                Fit<span className="text-lime">Eats</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Personalized Indian meal plans and coaching from Bengaluru. Eat
              better, train smarter, transform faster.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all duration-300 hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="heading text-sm uppercase tracking-[0.16em] text-white/40">
              Quick Links
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                { label: "Plans", href: "#plans" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Meal Gallery", href: "#meals" },
                { label: "FAQ", href: "#faq" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading text-sm uppercase tracking-[0.16em] text-white/40">
              Start Here
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {[
                { label: "Get Started", href: "#onboarding" },
                { label: "Book Consultation", href: "#onboarding" },
                { label: "Meet the Coach", href: "#coach" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/65 transition-colors hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading text-sm uppercase tracking-[0.16em] text-white/40">
              Contact
            </h4>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-lime"
                >
                  <PhoneIcon className="h-4 w-4 text-lime" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-lime"
                >
                  <MailIcon className="h-4 w-4 text-lime" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} FitEats BLR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-lime">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 transition-colors hover:text-lime">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
