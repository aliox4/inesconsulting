/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SOURCE UNIQUE DE VÉRITÉ DU SITE
 * ─────────────────────────────────────────────────────────────────────────────
 *  Modifie ce fichier pour mettre à jour TOUS les contenus du site
 *  (marque, contact, textes, projets, témoignages, mentions légales).
 *
 *  Convention : tout placeholder à compléter est balisé par "[À COMPLÉTER]"
 *  ou commenté avec « TODO ». Cherche ces marqueurs avant la mise en ligne.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ============================================================================
//  1. CONFIGURATION GLOBALE
// ============================================================================

export const siteConfig = {
  // URL canonique du site (à remplacer par le domaine final)
  url: "https://www.inesdesquines.com",

  brand: {
    name: "Inès Desquines Consulting",
    short: "Inès Desquines",
    tagline: "Conseil immobilier & négociation",
  },

  contact: {
    email: "ines.desquines.consulting@gmail.com",
    // Téléphone — placeholder. Format français à afficher :
    phoneDisplay: "Téléphone à renseigner",
    // Format E.164 pour le lien tel: (laisser null tant que non renseigné)
    phoneE164: null as string | null, // ex. "+33612345678"
    areaServed: "Île-de-France & France",
  },

  seo: {
    title:
      "Conseil immobilier & négociation sur mesure | Inès Desquines Consulting",
    description:
      "Accompagnement discret, humain et stratégique pour projets immobiliers résidentiels, commerciaux et patrimoniaux : conseil, expertise et négociation.",
  },

  nav: [
    { label: "Approche", href: "#approche" },
    { label: "Services", href: "#services" },
    { label: "Projets", href: "#projets" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

// ============================================================================
//  2. HERO — message commercial clair en moins de 3 secondes
// ============================================================================

export const hero = {
  eyebrow: "Cabinet de conseil immobilier indépendant",
  title: "Conseil immobilier & négociation sur mesure.",
  subtitle:
    "Un accompagnement discret, humain et stratégique pour vos projets résidentiels, commerciaux et patrimoniaux.",
  typologies: [
    "Résidentiel",
    "Immeubles",
    "Commerces",
    "Restaurants",
    "Hôtels",
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
  title: "Une approche au service du projet, pas de l'ego.",
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
      text: "Résidentiel, immeuble, commerce, restaurant, hôtel ou actif atypique : un accompagnement ajusté à la nature du bien.",
    },
  ],
} as const;

// ============================================================================
//  5. TYPOLOGIES DE PROJETS
// ============================================================================

export const typologies = {
  eyebrow: "Pour quels projets",
  title: "Des projets immobiliers qui demandent plus qu'une simple transaction.",
  items: [
    {
      label: "Résidentiel",
      text: "Appartement, maison, résidence principale ou secondaire : accompagner une décision importante avec méthode et sensibilité.",
    },
    {
      label: "Patrimonial",
      text: "Immeuble, arbitrage, investissement ou transmission : structurer les enjeux avant d'agir.",
    },
    {
      label: "Commercial",
      text: "Restaurant, hôtel, local professionnel ou murs commerciaux : comprendre l'usage, le potentiel et la valeur réelle du lieu.",
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
//  8. PROJETS ACCOMPAGNÉS (anonymisés)
// ============================================================================

export const projets = {
  eyebrow: "Projets accompagnés",
  title: "Une sélection, dans le respect de la confidentialité.",
  intro:
    "Une sélection de projets peut être présentée avec discrétion, dans le respect de la confidentialité des clients.",
  items: [
    {
      title: "Projet résidentiel confidentiel",
      summary:
        "Acquisition d'une résidence principale dans un quartier prisé. Négociation menée sur plusieurs semaines.",
      tag: "Conseil",
      // Remplacer par une vraie image si pertinent (optionnel)
      image: null as string | null,
    },
    {
      title: "Actif commercial",
      summary:
        "Reprise des murs et du fonds d'un établissement de restauration. Coordination avec experts juridiques et financiers.",
      tag: "Négociation",
      image: null as string | null,
    },
    {
      title: "Projet patrimonial",
      summary:
        "Arbitrage et structuration d'un portefeuille immobilier familial. Accompagnement long sur la stratégie.",
      tag: "Accompagnement",
      image: null as string | null,
    },
  ],
} as const;

// ============================================================================
//  9. TÉMOIGNAGES
//  TODO : remplacer par les vrais avis clients après validation.
// ============================================================================

export const temoignages = {
  eyebrow: "Témoignages",
  title: "Ce qu'en disent les clients accompagnés.",
  items: [
    {
      quote:
        "Une présence juste, claire et rassurante dans une décision importante.",
      author: "Client résidentiel", // TODO : prénom + initiale après accord
      context: "Acquisition Paris",
    },
    {
      quote:
        "Une lecture fine du projet et une négociation menée avec précision.",
      author: "Investisseur",
      context: "Immeuble de rapport",
    },
    {
      quote:
        "Un accompagnement discret, humain et très professionnel.",
      author: "Client patrimonial",
      context: "Arbitrage familial",
    },
  ],
} as const;

// ============================================================================
//  10. CONTACT
// ============================================================================

export const contact = {
  eyebrow: "Prendre contact",
  title: "Vous avez un projet immobilier à clarifier, négocier ou structurer ?",
  intro: "Échangeons simplement sur votre situation.",
  projectTypes: [
    "Résidentiel",
    "Patrimonial / Investissement",
    "Commerce / Restaurant / Hôtel",
    "Autre",
  ],
} as const;

// ============================================================================
//  11. MENTIONS LÉGALES
//  TODO : compléter avec les vraies informations légales avant publication.
// ============================================================================

export const legal = {
  publisher: {
    name: "[À compléter — Nom de l'éditeur]",
    status: "[À compléter — Statut juridique : ex. Entreprise Individuelle]",
    siret: "[À compléter — SIRET]",
    address: "[À compléter — Adresse postale]",
    email: "ines.desquines.consulting@gmail.com",
    phone: "[À compléter — Téléphone]",
    director: "[À compléter — Directeur de la publication]",
  },
  host: {
    name: "[À compléter — ex. Vercel Inc.]",
    address: "[À compléter — Adresse de l'hébergeur]",
    contact: "[À compléter — Coordonnées]",
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
