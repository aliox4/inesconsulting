import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { temoignages } from "@/lib/content";

/*
 * NOTE : ces témoignages sont des placeholders.
 * Remplacer par les vrais avis clients dans lib/content.ts (export `temoignages`)
 * après accord écrit des clients concernés.
 */

export function Temoignages() {
  return (
    <section
      id="temoignages"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="temoignages-title"
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow={temoignages.eyebrow}
          title={temoignages.title}
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {temoignages.items.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-sm border border-line bg-paper-soft p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-accent"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 font-display text-lg leading-snug text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto pt-6 text-sm">
                  <p className="font-medium text-ink">{t.author}</p>
                  <p className="mt-0.5 text-ink-muted">{t.context}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
