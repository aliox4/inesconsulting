import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { projets } from "@/lib/content";

// Visuels abstraits déclinés par projet (architecture / sobre / motifs fins)
// Remplaçables par de vraies photos en passant `image` dans content.ts.
function PlaceholderVisual({ index }: { index: number }) {
  if (index === 0) {
    // Résidentiel — façade haussmannienne abstraite
    return (
      <svg
        viewBox="0 0 400 280"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="400" height="280" fill="#EFE8DA" />
        {[0, 1, 2, 3].map((row) => (
          <g key={row}>
            {[0, 1, 2, 3, 4, 5, 6].map((col) => (
              <rect
                key={col}
                x={28 + col * 52}
                y={30 + row * 56}
                width="36"
                height="44"
                fill="none"
                stroke="#1C1B17"
                strokeWidth="0.7"
                opacity={0.6}
              />
            ))}
          </g>
        ))}
        <line x1="0" y1="20" x2="400" y2="20" stroke="#6B3A2C" strokeWidth="1" />
        <line x1="0" y1="262" x2="400" y2="262" stroke="#6B3A2C" strokeWidth="1" />
      </svg>
    );
  }
  if (index === 1) {
    // Commercial — devanture / arches
    return (
      <svg
        viewBox="0 0 400 280"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="400" height="280" fill="#EFE8DA" />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M ${60 + i * 110} 230 V 130 A 40 40 0 0 1 ${140 + i * 110} 130 V 230`}
            fill="none"
            stroke="#1C1B17"
            strokeWidth="0.8"
            opacity="0.6"
          />
        ))}
        <line x1="20" y1="230" x2="380" y2="230" stroke="#6B3A2C" strokeWidth="1" />
        <line x1="20" y1="80" x2="380" y2="80" stroke="#1C1B17" strokeWidth="0.5" opacity="0.4" />
      </svg>
    );
  }
  // Patrimonial — composition géométrique grille + cercles
  return (
    <svg
      viewBox="0 0 400 280"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="400" height="280" fill="#EFE8DA" />
      {[0, 1, 2, 3, 4].map((row) => (
        <line
          key={`h${row}`}
          x1="40"
          y1={40 + row * 50}
          x2="360"
          y2={40 + row * 50}
          stroke="#1C1B17"
          strokeWidth="0.5"
          opacity="0.35"
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((col) => (
        <line
          key={`v${col}`}
          x1={40 + col * 53}
          y1="40"
          x2={40 + col * 53}
          y2="240"
          stroke="#1C1B17"
          strokeWidth="0.5"
          opacity="0.35"
        />
      ))}
      <circle cx="200" cy="140" r="60" fill="none" stroke="#6B3A2C" strokeWidth="1.2" />
      <circle cx="200" cy="140" r="28" fill="none" stroke="#6B3A2C" strokeWidth="1" />
    </svg>
  );
}

export function Projets() {
  return (
    <section
      id="projets"
      className="bg-paper-deep py-24 sm:py-32"
      aria-labelledby="projets-title"
    >
      <div className="container-editorial">
        <SectionHeading
          eyebrow={projets.eyebrow}
          title={projets.title}
          intro={projets.intro}
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projets.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[5/4] overflow-hidden rounded-sm border border-line bg-paper-soft">
                  {p.image ? (
                    // Si une vraie image est fournie, l'utiliser.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="transition-transform duration-700 ease-editorial group-hover:scale-[1.03]">
                      <PlaceholderVisual index={i} />
                    </div>
                  )}
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-ink/15 bg-paper-soft/90 px-3 py-1 text-[10px] font-medium uppercase tracking-eyebrow text-ink backdrop-blur-sm">
                    {p.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {p.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-12 text-sm text-ink-faint">
            * Tous les projets sont présentés sous forme anonymisée. Des
            références peuvent être communiquées sur demande, avec l'accord
            préalable des clients concernés.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
