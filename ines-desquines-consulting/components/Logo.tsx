import Link from "next/link";
import { siteConfig } from "@/lib/content";

type LogoProps = {
  variant?: "default" | "compact";
  className?: string;
};

export function Logo({ variant = "default", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.brand.name} — accueil`}
      className={`group inline-flex items-baseline gap-2.5 transition-colors hover:text-accent ${className}`}
    >
      <span
        aria-hidden="true"
        className="font-display text-xl italic leading-none text-accent"
      >
        i.d.
      </span>
      <span className="font-display text-base tracking-tight">
        {variant === "compact" ? siteConfig.brand.short : siteConfig.brand.name}
      </span>
    </Link>
  );
}
