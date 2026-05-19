import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig, legal } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const { email, phoneDisplay, phoneE164 } = siteConfig.contact;

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-editorial py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Marque + signature */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              Conseil immobilier, expertise et négociation pour projets
              résidentiels et patrimoniaux.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-ink transition-colors hover:text-accent"
                >
                  {email}
                </a>
              </li>
              <li>
                {phoneE164 ? (
                  <a
                    href={`tel:${phoneE164}`}
                    className="text-ink transition-colors hover:text-accent"
                  >
                    {phoneDisplay}
                  </a>
                ) : (
                  <span className="text-ink-muted">{phoneDisplay}</span>
                )}
              </li>
              <li className="text-ink-muted">
                {siteConfig.contact.areaServed}
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div className="md:col-span-3">
            <p className="eyebrow">Informations</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-ink transition-colors hover:text-accent"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-ink transition-colors hover:text-accent"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/honoraires"
                  className="text-ink transition-colors hover:text-accent"
                >
                  Honoraires
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Filet + mention légale + copyright */}
        <div className="mt-16 border-t border-line/60 pt-8">
          <p className="text-xs leading-relaxed text-ink-faint">
            {legal.publisher.name} — SASU au capital de {legal.publisher.capital}{" "}
            — RCS {legal.publisher.rcs}
          </p>
          <div className="mt-3 flex flex-col items-start justify-between gap-2 text-xs text-ink-faint sm:flex-row sm:items-center">
            <p>
              © {year} {siteConfig.brand.name}. Tous droits réservés.
            </p>
            <p>Site indépendant — confidentialité respectée.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
