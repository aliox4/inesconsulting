import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper-deep py-24 sm:py-32"
      aria-labelledby="services-title"
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          intro={services.intro}
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {services.items.map((service, i) => (
            <Reveal key={service.number} delay={i * 100}>
              <article className="group flex h-full flex-col bg-paper-soft p-8 transition-colors duration-300 hover:bg-paper sm:p-10">
                <p className="font-display text-3xl text-accent">
                  {service.number}
                </p>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-ink-muted">
                  {service.text}
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href="#contact"
                    className="btn-ghost text-ink-muted group-hover:text-accent"
                  >
                    Échanger sur ce besoin
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
