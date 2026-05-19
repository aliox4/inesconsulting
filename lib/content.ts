/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SOURCE UNIQUE DE VÉRITÉ DU SITE
 * ─────────────────────────────────────────────────────────────────────────────
 *  Modifie ce fichier pour mettre à jour TOUS les contenus du site
 *  (marque, contact, textes, mentions légales).
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ============================================================================
//  1. CONFIGURATION GLOBALE
// ============================================================================

export const siteConfig = {
  // URL canonique du site (à remplacer par le domaine final)
  url: "https://www.inesdesquines.com",

  brand: {
    name: "Inès Consulting",
    short: "Inès",
    tagline: "Conseil immobilier & négociation",
  },

  contact: {
    email: "ines.desquines.consulting@gmail.com",
    phoneDisplay: "06 48 22 54 00",
    phoneE164: "+33648225400",
    areaServed: "Île-de-France",
  },

  seo: {
    title:
      "Conseil immobilier & négociation sur mesure | Inès Consulting",
    description:
      "Accompagnement discret, humain et stratégique pour projets immobiliers résidentiels et patrimoniaux : conseil, expertise et négociation.",
  },

  nav: [
    { label: "Approche", href: "#approche" },
    { label: "Services", href: "#services" },
    { label: "Méthode", href: "#methode" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

// ============================================================================
//  2. HERO
// ============================================================================

export const hero = {
  eyebrow: "Cabinet de conseil immobilier indépendant",
  title: "Conseil immobilier & négociation sur mesure.",
  subtitle:
    "Un accompagnement discret, humain et stratégique pour vos projets résidentiels et patrimoniaux.",
  typologies: [
    "Résidentiel",
    "Immeubles",
    "Projets patrimoniaux",
  ],
  ctaPrimary: { label: "Parler de mon projet", href: "#contact" },
  ctaSecondary: { label: "Découvrir l'approche", href: "#approche" },
} as const;

// ============================================================================
//  3. APPROCHE
// ============================================================================

export const approche = {
  eyebrow: "L'approche",
  title: "Une approche au service du projet.",
  body: [
    "Chaque projet immobilier engage bien plus qu'une transaction : un lieu, une décision patrimoniale, une trajectoire personnelle ou professionnelle.",
    "L'accompagnement repose sur l'écoute, la lecture fine du contexte, la négociation et la mobilisation des bons experts lorsque le projet l'exige : financiers, notaires, avocats ou partenaires spécialisés.",
  ],
  principles: [
    {
      label: "Écoute",
      text: "Comprendre le projet avant de proposer. Le bon conseil naît d'une lecture juste.",
    },
    {
      label: "Justesse",
      text: "Une recommandation claire, argumentée, qui sert la décision du client — pas l'inverse.",
    },
    {
      label: "Discrétion",
      text: "Une confidentialité absolue, du premier échange jusqu'à la signature.",
    },
  ],
} as const;

// ============================================================================
//  4. SERVICES
// ============================================================================

export const services = {
  eyebrow: "Les services",
  title: "Conseil, expertise et négociation.",
  intro:
    "Trois piliers complémentaires pour clarifier, sécuriser et conclure votre projet immobilier.",
  items: [
    {
      number: "01",
      title: "Conseil immobilier",
      text: "Clarifier le projet, lire les enjeux, identifier les risques et accompagner la décision avec recul et précision.",
    },
    {
      number: "02",
      title: "Négociation immobilière",
      text: "Préparer les échanges, défendre les intérêts du client et construire une stratégie de négociation adaptée au contexte.",
    },
    {
      number: "03",
      title: "Expertise & accompagnement projet",
      text: "Résidentiel, immeuble ou actif patrimonial : un accompagnement ajusté à la nature du bien.",
    },
  ],
} as const;

// ============================================================================
//  5. TYPOLOGIES DE PROJETS
// ============================================================================

export const typologies = {
  eyebrow: "Pour quels projets",
  title:
    "Des projets immobiliers qui demandent plus qu'une simple transaction.",
  items: [
    {
      label: "Résidentiel",
      text: "Appartement, maison, résidence principale ou secondaire : accompagner une décision importante avec méthode et sensibilité.",
    },
    {
      label: "Patrimonial",
      text: "Immeuble, arbitrage, investissement ou transmission : structurer les enjeux avant d'agir.",
    },
  ],
} as const;

// ============================================================================
//  6. MÉTHODE
// ============================================================================

export const methode = {
  eyebrow: "La méthode",
  title: "Une méthode claire, sobre et structurée.",
  steps: [
    {
      number: "01",
      title: "Comprendre le projet",
      text: "Écoute, contexte, contraintes, objectifs.",
    },
    {
      number: "02",
      title: "Lire le marché et les enjeux",
      text: "Analyse du bien, du timing, des risques et des leviers.",
    },
    {
      number: "03",
      title: "Construire la stratégie",
      text: "Positionnement, négociation, réseau d'experts et plan d'action.",
    },
    {
      number: "04",
      title: "Accompagner jusqu'à la décision",
      text: "Présence sobre, conseils clairs, coordination et sécurisation.",
    },
  ],
} as const;

// ============================================================================
//  7. RÉSEAU D'EXPERTS
// ============================================================================

export const reseau = {
  eyebrow: "Le réseau",
  title: "Entourer le projet des bons interlocuteurs.",
  body: "Selon les besoins, l'accompagnement peut s'appuyer sur un réseau d'experts : notaires, avocats, spécialistes du financement, conseils patrimoniaux et professionnels de l'immobilier.",
  categories: [
    { label: "Notaires", hint: "Sécurisation juridique" },
    { label: "Avocats", hint: "Droit immobilier & des affaires" },
    { label: "Financement", hint: "Courtiers & banques privées" },
    { label: "Patrimoine", hint: "Conseil & arbitrage" },
    { label: "Architecture & travaux", hint: "Études, faisabilité" },
    { label: "Experts spécialisés", hint: "Diagnostics, valorisation" },
  ],
} as const;

// ============================================================================
//  8. CONTACT
// ============================================================================

export const contact = {
  eyebrow: "Prendre contact",
  title:
    "Vous avez un projet immobilier à clarifier, négocier ou structurer ?",
  intro: "Échangeons simplement sur votre situation.",
  projectTypes: [
    "Résidentiel",
    "Patrimonial / Investissement",
    "Autre",
  ],
} as const;

// ============================================================================
//  9. MENTIONS LÉGALES
//  TODO : compléter avec les vraies informations légales avant publication.
// ============================================================================

export const legal = {
  publisher: {
    name: "[À compléter — Nom de l'éditeur]",
    status: "[À compléter — Statut juridique : ex. Entreprise Individuelle]",
    siret: "[À compléter — SIRET]",
    address: "[À compléter — Adresse postale]",
    email: "ines.desquines.consulting@gmail.com",
    phone: "06 48 22 54 00",
    director: "[À compléter — Directeur de la publication]",
  },
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
    contact: "https://vercel.com",
  },
  professional: {
    // À compléter UNIQUEMENT si l'activité est soumise à la loi Hoguet
    // (transaction immobilière). Pour du conseil pur, ce bloc peut être omis.
    cardNumber: "[À compléter — N° de carte professionnelle (si applicable)]",
    cardAuthority:
      "[À compléter — Autorité ayant délivré la carte (CCI compétente)]",
    insurance:
      "[À compléter — Assurance Responsabilité Civile Professionnelle (compagnie, n° de police)]",
    feeSchedule:
      "[À compléter — Barème d'honoraires (si transaction immobilière)]",
    mediator:
      "[À compléter — Médiateur de la consommation (nom + coordonnées)]",
  },
} as const;
