import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette warm-paper, anthracite, terre / bronze
        paper: {
          DEFAULT: "#F5F0E6", // fond principal, blanc cassé chaud
          deep: "#EFE8DA",    // section alternée
          soft: "#FBF8F1",    // surface élevée
        },
        ink: {
          DEFAULT: "#1C1B17", // texte principal, anthracite chaud
          muted: "#5E5A4F",   // texte secondaire
          faint: "#8C8678",   // texte tertiaire, légendes
        },
        line: {
          DEFAULT: "#D7CFBE", // bordures fines
          soft: "#E6DECC",
        },
        accent: {
          DEFAULT: "#6B3A2C", // terre / bordeaux discret
          hover: "#5A2F23",
          bronze: "#8B6F47",  // accent secondaire bronze doux
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Échelle éditoriale
        "display-1": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-2": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-3": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        tightest: "-0.035em",
        eyebrow: "0.18em",
      },
      maxWidth: {
        "editorial": "76rem",
        "reading": "44rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "editorial": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
