import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { honoraires, siteConfig, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Honoraires et modalités d'intervention — Inès Consulting. Conditions tarifaires transparentes, adaptées à la nature de chaque projet immobilier.",
  robots: { index: true, follow: true },
};

export default function HonorairesPage() {
  return (
    <LegalPage
      eyebrow={honoraires.eyebrow}
      title={honoraires.title}
      updatedAt={legal.updatedAt}
    >
      <p>{honoraires.intro}</p>

      <h2>Principes</h2>
      <ul>
        {honoraires.principles.map((principle) => (
          <li key={principle.label}>
            <strong>{principle.label}.</strong> {principle.text}
          </li>
        ))}
      </ul>

      <h2>Modalités d'application</h2>
      <p>
        Selon le type d'intervention, les honoraires peuvent prendre
        plusieurs formes&nbsp;:
      </p>
      <ul>
        {honoraires.modalities.map((modality) => (
          <li key={modality.label}>
            <strong>{modality.label}.</strong> {modality.text}
          </li>
        ))}
      </ul>
      <p>
        Les modalités précises (assiette, taux, plafond, conditions de
        déclenchement) sont définies dans le devis ou la lettre de mission,
        signés avant le début de l'intervention.
      </p>

      <h2>Barème détaillé</h2>
      <p>
        Le barème d'honoraires détaillé est en cours de finalisation et sera
        publié sur cette page dès validation. Dans l'intervalle, les conditions
        financières applicables à chaque projet sont communiquées sur demande,
        à l'occasion d'un premier échange.
      </p>

      <h2>Demande de devis</h2>
      <p>
        Pour toute demande de devis personnalisé adapté à votre projet, vous
        pouvez écrire à&nbsp;:{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        {" "}ou téléphoner au{" "}
        <a href={`tel:${siteConfig.contact.phoneE164}`}>
          {siteConfig.contact.phoneDisplay}
        </a>
        .
      </p>
    </LegalPage>
  );
}
