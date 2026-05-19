import { Header } from "./Header";
import { Footer } from "./Footer";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
};

/**
 * Layout éditorial commun aux pages légales.
 * Le ton reste premium ; les placeholders à compléter sont marqués "[À compléter — …]"
 * dans lib/content.ts, mais le design public reste cohérent avec l'identité du site.
 */
export function LegalPage({
  eyebrow,
  title,
  updatedAt,
  children,
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main" className="pt-32 sm:pt-40">
        <div className="container-editorial">
          <header className="max-w-reading border-b border-line/60 pb-12">
            <p className="eyebrow flex items-center gap-3">
              <span className="rule-thin" aria-hidden="true" />
              <span>{eyebrow}</span>
            </p>
            <h1 className="mt-6 font-display text-display-2 text-balance">
              {title}
            </h1>
            <p className="mt-6 text-sm text-ink-faint">
              Dernière mise à jour&nbsp;: {updatedAt}
            </p>
          </header>

          <article className="prose-legal mx-auto max-w-reading py-16 sm:py-20">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
