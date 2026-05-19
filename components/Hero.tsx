import { Reveal } from "./Reveal";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="paper-grain relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36"
      aria-labelledby="hero-title"
    >
      {/* Décor architectural sobre — lignes très fines, mat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <svg
          className="absolute right-[-10%] top-[10%] h-[640px] w-[640px] opacity-[0.07]"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="298" stroke="#1C1B17" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="#1C1B17" strokeWidth="1" />
          <circle cx="300" cy="300" r="140" stroke="#1C1B17" strokeWidth="1" />
          <line x1="0" y1="300" x2="600" y2="300" stroke="#1C1B17" strokeWidth="1" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="#1C1B17" strokeWidth="1" />
        </svg>
      </div>

      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Bloc texte principal */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="rule-thin" aria-hidden="true" />
                <span>{hero.eyebrow}</span>
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h1
                id="hero-title"
                className="mt-8 font-display text-display-1 text-balance"
              >
                {hero.title}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                {hero.subtitle}
              </p>
            </Reveal>

            {/* Typologies — preuves "pour qui" immédiates */}
            <Reveal delay={300}>
              <ul className="mt-10 flex flex-wrap gap-x-2 gap-y-3">
                {hero.typologies.map((t, i) => (
                  <li
                    key={t}
                    className="inline-flex items-center text-sm text-ink-muted"
                  >
                    <span>{t}</span>
                    {i < hero.typologies.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="ml-2 text-ink-faint"
                      >
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={400}>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a href={hero.ctaPrimary.href} className="btn-primary">
                  {hero.ctaPrimary.label}
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href={hero.ctaSecondary.href} className="btn-secondary">
                  {hero.ctaSecondary.label}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Bloc visuel abstrait — composition architecturale fine */}
          <div className="lg:col-span-4">
            <Reveal delay={500}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm border border-line bg-paper-deep">
                {/* Composition : façade abstraite, fenêtres en grille */}
                <svg
                  viewBox="0 0 300 400"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="windows"
                      x="0"
                      y="0"
                      width="60"
                      height="80"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="12"
                        y="14"
                        width="36"
                        height="52"
                        fill="none"
                        stroke="#1C1B17"
                        strokeWidth="0.8"
                        opacity="0.55"
                      />
                      <line
                        x1="30"
                        y1="14"
                        x2="30"
                        y2="66"
                        stroke="#1C1B17"
                        strokeWidth="0.6"
                        opacity="0.4"
                      />
                    </pattern>
                  </defs>
                  <rect width="300" height="400" fill="#EFE8DA" />
                  <rect
                    x="20"
                    y="40"
                    width="260"
                    height="320"
                    fill="url(#windows)"
                  />
                  {/* Filet décoratif */}
                  <line
                    x1="20"
                    y1="40"
                    x2="280"
                    y2="40"
                    stroke="#6B3A2C"
                    strokeWidth="1"
                  />
                  <line
                    x1="20"
                    y1="360"
                    x2="280"
                    y2="360"
                    stroke="#6B3A2C"
                    strokeWidth="1"
                  />
                </svg>
                {/* Légende discrète */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-eyebrow text-ink/70">
                  <span>—</span>
                  <span>Cabinet de conseil</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
