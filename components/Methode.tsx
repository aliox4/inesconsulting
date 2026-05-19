import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { methode } from "@/lib/content";

export function Methode() {
  return (
    <section
      id="methode"
      className="bg-paper-deep py-24 sm:py-32"
      aria-labelledby="methode-title"
    >
      <div className="container-editorial">
        <SectionHeading eyebrow={methode.eyebrow} title={methode.title} />

        <ol className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-4 lg:gap-x-8">
          {methode.steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100} as="li">
              <div className="relative h-full">
                {/* Filet horizontal entre étapes (desktop) */}
                {i < methode.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-3 hidden h-px bg-line lg:block"
                  />
                )}
                <div className="relative flex items-center">
                  <span className="z-10 h-6 w-6 rounded-full border border-accent bg-paper-deep" />
                  <span className="ml-3 font-display text-sm text-accent">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
