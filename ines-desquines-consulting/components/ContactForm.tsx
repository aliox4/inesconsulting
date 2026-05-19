"use client";

import { useState } from "react";
import { contact } from "@/lib/content";
import {
  submitContact,
  validateContact,
  type ContactFormData,
} from "@/lib/contact";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; mode: "mailto" | "api" }
  | { type: "error"; message: string };

const initial: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initial);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  function update<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ) {
    setData((d) => ({ ...d, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationError = validateContact(data);
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    setStatus({ type: "submitting" });
    const result = await submitContact(data);
    if (result.ok) {
      setStatus({ type: "success", mode: result.mode });
    } else {
      setStatus({ type: "error", message: result.error });
    }
  }

  const inputCls =
    "w-full border-0 border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none focus:ring-0 transition-colors";
  const labelCls =
    "block text-xs font-medium uppercase tracking-eyebrow text-ink-muted";

  return (
    <form onSubmit={onSubmit} className="space-y-7" noValidate>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputCls}
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls}
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelCls}>
            Téléphone <span className="font-normal normal-case text-ink-faint">(facultatif)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls}
            placeholder="06 00 00 00 00"
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelCls}>
            Type de projet
          </label>
          <select
            id="projectType"
            name="projectType"
            value={data.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={`${inputCls} appearance-none bg-[length:12px_12px] bg-[right_4px_center] bg-no-repeat`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M2 4l4 4 4-4' stroke='%231C1B17' stroke-width='1' fill='none'/></svg>\")",
            }}
          >
            <option value="">À préciser</option>
            {contact.projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputCls} resize-none`}
          placeholder="Quelques mots sur votre projet, vos contraintes, vos questions…"
        />
      </div>

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-faint sm:max-w-sm">
          En envoyant ce message, vous acceptez d'être recontacté(e) au sujet
          de votre projet. Aucune donnée n'est conservée sans votre accord.
        </p>
        <button
          type="submit"
          disabled={status.type === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status.type === "submitting" ? "Envoi…" : "Envoyer le message"}
          <svg
            aria-hidden="true"
            className="h-4 w-4"
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
        </button>
      </div>

      {/* Zones de feedback */}
      <div aria-live="polite" className="min-h-[1.5rem]">
        {status.type === "error" && (
          <p className="text-sm text-accent">{status.message}</p>
        )}
        {status.type === "success" && (
          <p className="text-sm text-ink-muted">
            {status.mode === "mailto"
              ? "Votre logiciel de messagerie vient de s'ouvrir avec le message pré-rempli. Si rien ne s'est passé, écrivez directement à l'adresse indiquée plus haut."
              : "Merci, votre message a bien été envoyé. Une réponse vous parviendra rapidement."}
          </p>
        )}
      </div>
    </form>
  );
}
