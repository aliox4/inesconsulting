import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteConfig } from "@/lib/content";
import "./globals.css";

// Typographies — Cormorant Garamond (display, classique premium)
//                + Manrope (sans, lisible)
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = siteConfig.url;
const SITE_NAME = siteConfig.brand.name;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Conseil immobilier & négociation sur mesure | Inès Consulting",
    template: "%s | Inès Consulting",
  },
  description:
    "Accompagnement discret, humain et stratégique pour projets immobiliers résidentiels et patrimoniaux : conseil, expertise et négociation.",
  keywords: [
    "conseil immobilier",
    "négociation immobilière",
    "expertise immobilière",
    "accompagnement projet immobilier",
    "immobilier patrimonial",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Conseil immobilier & négociation sur mesure",
    description:
      "Accompagnement discret, humain et stratégique pour projets immobiliers résidentiels et patrimoniaux.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conseil immobilier & négociation sur mesure",
    description:
      "Accompagnement discret, humain et stratégique pour projets immobiliers résidentiels et patrimoniaux.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// JSON-LD structuré pour SEO local / professionnel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: siteConfig.seo.description,
  url: SITE_URL,
  email: siteConfig.contact.email,
  ...(siteConfig.contact.phoneE164
    ? { telephone: siteConfig.contact.phoneE164 }
    : {}),
  areaServed: siteConfig.contact.areaServed,
  serviceType: [
    "Conseil immobilier",
    "Négociation immobilière",
    "Expertise immobilière",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Lien d'évitement pour navigation clavier */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper-soft"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
