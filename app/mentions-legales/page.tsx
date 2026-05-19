import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { legal, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site Inès Consulting — éditeur, hébergeur, informations professionnelles.",
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  const p = legal.publisher;
  const h = legal.host;
  const telHref = `tel:${siteConfig.contact.phoneE164}`;

  return (
    <LegalPage
      eyebrow="Informations"
      title="Mentions légales"
      updatedAt={legal.updatedAt}
    >
      <p>
        Le présent site est édité dans le respect de la loi n° 2004-575 du
        21&nbsp;juin&nbsp;2004 pour la confiance dans l'économie numérique. Les
        informations ci-dessous sont mises à la disposition des utilisateurs
        afin d'assurer la transparence sur l'identité de l'éditeur, de
        l'hébergeur et des conditions d'exercice de l'activité.
      </p>

      <h2>Éditeur du site</h2>
      <dl>
        <dt>Dénomination sociale</dt>
        <dd>{p.name}</dd>

        <dt>Forme juridique</dt>
        <dd>{p.status}</dd>

        <dt>Capital social</dt>
        <dd>{p.capital}</dd>

        <dt>SIREN</dt>
        <dd>{p.siren}</dd>

        <dt>RCS</dt>
        <dd>{p.rcs}</dd>

        <dt>Siège social</dt>
        <dd>{p.address}</dd>

        <dt>Email</dt>
        <dd>
          <a href={`mailto:${p.email}`}>{p.email}</a>
        </dd>

        <dt>Téléphone</dt>
        <dd>
          <a href={telHref}>{p.phone}</a>
        </dd>

        <dt>Directrice de la publication</dt>
        <dd>{p.director}</dd>
      </dl>

      <h2>Activité</h2>
      <p>{p.activity}</p>

      <h2>Hébergement</h2>
      <p>Le site est hébergé par&nbsp;:</p>
      <dl>
        <dt>Hébergeur</dt>
        <dd>{h.name}</dd>

        <dt>Adresse</dt>
        <dd>{h.address}</dd>

        <dt>Contact</dt>
        <dd>
          <a href={h.contact} target="_blank" rel="noreferrer">
            {h.contact}
          </a>
        </dd>
      </dl>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus présents sur ce site (textes, identité
        visuelle, mise en page, illustrations) est protégé par le droit
        d'auteur et reste la propriété exclusive de {p.name}. Toute
        reproduction, représentation ou diffusion, totale ou partielle, sans
        autorisation écrite préalable, est interdite et constitue une
        contrefaçon sanctionnée par les articles L.335-2 et suivants du Code
        de la propriété intellectuelle.
      </p>

      <h2>Responsabilité</h2>
      <p>
        Les informations diffusées sur ce site ont un caractère général et ne
        sauraient se substituer à un conseil personnalisé. {p.name} met tout
        en œuvre pour assurer l'exactitude des informations publiées mais ne
        peut garantir leur exhaustivité ni leur actualisation permanente.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question relative au site ou à l'exercice de vos droits&nbsp;:{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
