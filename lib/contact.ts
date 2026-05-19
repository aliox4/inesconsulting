/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ADAPTER FORMULAIRE DE CONTACT
 * ─────────────────────────────────────────────────────────────────────────────
 *  Le formulaire utilise actuellement la stratégie `mailto` (MVP, zéro backend).
 *
 *  Pour brancher un vrai envoi côté serveur, change la valeur de `STRATEGY`
 *  en "api" et implémente la route `app/api/contact/route.ts`. Tout le code UI
 *  du formulaire reste inchangé.
 *
 *  Exemples de migration :
 *   • Formspree  →  fetch("https://formspree.io/f/XXXX", { method: "POST", … })
 *   • Resend     →  via une API route Next qui appelle resend.emails.send(…)
 *   • EmailJS    →  côté client, à appeler dans la stratégie "api"
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { siteConfig } from "@/lib/content";

export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
};

export type ContactSubmitResult =
  | { ok: true; mode: "mailto" | "api" }
  | { ok: false; error: string };

type Strategy = "mailto" | "api";

// Stratégie active. Pour swap : passer à "api" et implémenter /api/contact.
const STRATEGY: Strategy = "mailto";

// Endpoint backend (utilisé uniquement quand STRATEGY === "api").
const API_ENDPOINT = "/api/contact";

// ──────────────────────────────────────────────────────────────────────────────

export function buildMailtoUrl(data: ContactFormData): string {
  const subject = `Nouveau projet — ${data.projectType || "Contact"}`;
  const lines = [
    `Nom : ${data.name}`,
    `Email : ${data.email}`,
    data.phone ? `Téléphone : ${data.phone}` : null,
    data.projectType ? `Type de projet : ${data.projectType}` : null,
    "",
    "Message :",
    data.message,
  ].filter(Boolean) as string[];

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}

export async function submitContact(
  data: ContactFormData
): Promise<ContactSubmitResult> {
  if (STRATEGY === "mailto") {
    if (typeof window !== "undefined") {
      window.location.href = buildMailtoUrl(data);
    }
    return { ok: true, mode: "mailto" };
  }

  // Stratégie "api" — à activer plus tard
  try {
    const res = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || "Erreur réseau" };
    }
    return { ok: true, mode: "api" };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Erreur inconnue",
    };
  }
}

// Validation très simple — étendable selon besoin
export function validateContact(data: ContactFormData): string | null {
  if (!data.name.trim()) return "Merci d'indiquer votre nom.";
  if (!data.email.trim()) return "Merci d'indiquer votre email.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return "Format d'email invalide.";
  if (!data.message.trim() || data.message.trim().length < 10)
    return "Merci de décrire votre projet (au moins 10 caractères).";
  return null;
}
