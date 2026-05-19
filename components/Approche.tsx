import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { approche } from "@/lib/content";

export function Approche() {
  return (
    <section
      id="approche"
      className="border-t border-line/60 py-24 sm:py-32"
      aria-labelledby="approche-title"
    >
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={approche.eyebrow} title={approche.title} />
          </div>

          <div className="lg:col-span-7">
            <div className="max-w-reading space-y-5">
              {approche.body.map((p, i) => (
                <Reveal key={i} delay={100 + i * 80}>
                  <p className="text-lg leading-relaxed text-ink-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
              {approche.principles.map((principle, i) => (
                <Reveal key={principle.label} delay={200 + i * 100}>
                  <div className="h-full bg-paper-soft p-6 sm:p-7">
                    <p className="eyebrow text-accent">0{i + 1}</p>
                    <h3 className="mt-3 font-display text-xl text-ink">
                      {principle.label}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {principle.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
