import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { reseau } from "@/lib/content";

export function Reseau() {
  return (
    <section
      id="reseau"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="reseau-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={reseau.eyebrow} title={reseau.title} />
            <Reveal delay={200}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted">
                {reseau.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
              {reseau.categories.map((cat, i) => (
                <Reveal key={cat.label} delay={i * 60} as="li">
                  <div className="flex h-full items-start justify-between gap-4 bg-paper-soft p-6 transition-colors duration-300 hover:bg-paper">
                    <div>
                      <p className="font-display text-lg text-ink">
                        {cat.label}
                      </p>
                      <p className="mt-1 text-sm text-ink-muted">
                        {cat.hint}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-xs text-ink-faint"
                    >
                      0{i + 1}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
