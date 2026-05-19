import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { typologies } from "@/lib/content";

// Petits pictogrammes filaires sobres pour chaque typologie
const icons = {
  Résidentiel: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" aria-hidden="true">
      <path
        d="M8 22 24 8l16 14v18H8V22Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M20 40V28h8v12" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Patrimonial: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" aria-hidden="true">
      <path d="M6 18 24 8l18 10" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 18v22M18 18v22M30 18v22M38 18v22" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 40h36" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Commercial: (
    <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" aria-hidden="true">
      <path d="M6 18h36l-3-8H9l-3 8Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 18v22h32V18" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 40V26h8v14" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
} as const;

export function TypesProjets() {
  return (
    <section
      id="typologies"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="typologies-title"
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow={typologies.eyebrow}
          title={typologies.title}
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {typologies.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <article className="flex h-full flex-col items-start">
                <div className="text-accent">
                  {icons[item.label as keyof typeof icons] ?? null}
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {item.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
