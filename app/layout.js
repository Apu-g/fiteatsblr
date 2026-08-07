import { Syne, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FitEats Transform | Eat Better. Train Smarter. Transform Faster.",
  description:
    "Premium personalized Indian meal plans and coaching from FitEats BLR. Lose fat, build muscle and transform your body — no supplements required.",
  metadataBase: new URL("https://fiteats.com"),
  openGraph: {
    title: "FitEats Transform",
    description:
      "Eat Better. Train Smarter. Transform Faster. Personalized meal plans by FitEats BLR.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-white font-body text-ink antialiased">
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
