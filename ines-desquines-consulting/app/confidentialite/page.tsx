import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig, legal } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Inès Desquines Consulting — traitement des données, RGPD, droits des utilisateurs.",
  robots: { index: true, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      eyebrow="Informations"
      title="Politique de confidentialité"
      updatedAt="—"
    >
      <p>
        La présente politique décrit la manière dont les informations
        recueillies sur ce site sont collectées, utilisées et protégées,
        conformément au Règlement Général sur la Protection des Données
        (RGPD&nbsp;– Règlement UE 2016/679) et à la loi française
        « Informatique et Libertés » modifiée.
      </p>
      <p>
        L'objectif est simple&nbsp;: traiter vos données avec la même
        discrétion que celle qui guide chaque accompagnement.
      </p>

      <h2>Responsable du traitement</h2>
      <p>
        Le responsable du traitement est&nbsp;: {legal.publisher.name},{" "}
        {legal.publisher.address}.
      </p>
      <p>
        Contact&nbsp;:{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>

      <h2>Données collectées via le formulaire de contact</h2>
      <p>
        Lorsque vous remplissez le formulaire de contact, les informations
        suivantes sont recueillies&nbsp;:
      </p>
      <ul>
        <li>Nom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone (facultatif)</li>
        <li>Type de projet</li>
        <li>Contenu du message</li>
      </ul>
      <p>
        Ces données sont strictement nécessaires pour répondre à votre demande
        et organiser un éventuel échange. Aucune donnée n'est exploitée à des
        fins commerciales, ni transmise à des tiers sans votre accord
        explicite.
      </p>

      <h2>Finalités &amp; base légale</h2>
      <p>
        Les données collectées sont utilisées pour&nbsp;:
      </p>
      <ul>
        <li>répondre à votre demande de prise de contact&nbsp;;</li>
        <li>vous proposer, le cas échéant, un rendez-vous d'échange&nbsp;;</li>
        <li>
          assurer le suivi administratif d'un éventuel accompagnement
          ultérieur.
        </li>
      </ul>
      <p>
        La base légale du traitement est votre consentement
        (art.&nbsp;6.1.a&nbsp;RGPD), exprimé par l'envoi volontaire du
        formulaire.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les messages reçus sans suite sont conservés pour une durée maximale
        de 12&nbsp;mois, puis supprimés. En cas de relation contractuelle ou
        commerciale, les données sont conservées pour la durée légale
        applicable, puis archivées ou supprimées.
      </p>

      <h2>Destinataires</h2>
      <p>
        Seul le responsable du traitement a accès aux données transmises.
        Aucune donnée n'est revendue, échangée ou exploitée à des fins
        publicitaires.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez à tout moment des droits
        suivants&nbsp;:
      </p>
      <ul>
        <li>droit d'accès à vos données&nbsp;;</li>
        <li>droit de rectification&nbsp;;</li>
        <li>droit à l'effacement (« droit à l'oubli »)&nbsp;;</li>
        <li>droit à la limitation du traitement&nbsp;;</li>
        <li>droit à la portabilité&nbsp;;</li>
        <li>droit d'opposition au traitement&nbsp;;</li>
        <li>droit de retirer votre consentement à tout moment.</li>
      </ul>
      <p>
        Pour exercer l'un de ces droits, il suffit d'écrire à&nbsp;:{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
      <p>
        Vous disposez également du droit d'introduire une réclamation auprès
        de la Commission Nationale de l'Informatique et des Libertés
        (CNIL&nbsp;– <a href="https://www.cnil.fr">www.cnil.fr</a>).
      </p>

      <h2>Cookies &amp; mesure d'audience</h2>
      <p>
        Ce site ne dépose pas de cookies publicitaires ni de traceurs tiers.
        Seuls les cookies strictement nécessaires au fonctionnement technique
        du site peuvent être utilisés, sans collecte d'information
        personnelle.
      </p>

      <h2>Sécurité</h2>
      <p>
        Les données transmises via le site sont protégées par les mesures
        techniques et organisationnelles appropriées. La transmission s'effectue
        via une connexion HTTPS chiffrée.
      </p>

      <h2>Modifications</h2>
      <p>
        La présente politique peut être mise à jour à tout moment pour
        refléter une évolution réglementaire ou organisationnelle. La date de
        dernière mise à jour figure en haut de la page.
      </p>
    </LegalPage>
  );
}
