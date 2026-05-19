import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignClass} max-w-reading`}>
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="rule-thin" aria-hidden="true" />
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="heading-section mt-5 text-balance">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={160}>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted text-balance">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
