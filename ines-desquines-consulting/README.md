# Inès Desquines Consulting — Site vitrine

Site vitrine premium pour un cabinet de conseil immobilier indépendant.
Stack : **Next.js 14 (App Router) · TypeScript · Tailwind CSS**.
Mobile-first, accessible, SEO-ready, déploiement Vercel one-click.

---

## 1. Installation

Pré-requis : **Node.js ≥ 18.17** (idéalement 20+).

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:3000

# Build de production
npm run build
npm run start
```

---

## 2. Structure du projet

```
ines-desquines-consulting/
├─ app/
│  ├─ layout.tsx                # Root layout, fonts (Fraunces + Manrope), metadata, JSON-LD
│  ├─ page.tsx                  # Page d'accueil one-page (assemble les sections)
│  ├─ globals.css               # Tokens, typographie, focus, animations
│  ├─ sitemap.ts                # Sitemap dynamique
│  ├─ robots.ts                 # robots.txt dynamique
│  ├─ mentions-legales/page.tsx # Mentions légales
│  └─ confidentialite/page.tsx  # Politique de confidentialité (RGPD)
├─ components/
│  ├─ Header.tsx                # Header sticky + menu mobile
│  ├─ Hero.tsx                  # Section d'accroche
│  ├─ Approche.tsx              # Approche + 3 principes
│  ├─ Services.tsx              # 3 services principaux
│  ├─ TypesProjets.tsx          # Résidentiel / Patrimonial / Commercial
│  ├─ Methode.tsx               # 4 étapes
│  ├─ Reseau.tsx                # Réseau d'experts
│  ├─ Projets.tsx               # Projets anonymisés (visuels abstraits)
│  ├─ Temoignages.tsx           # Témoignages
│  ├─ Contact.tsx               # Coordonnées + formulaire
│  ├─ ContactForm.tsx           # Formulaire (branché sur l'adapter)
│  ├─ Footer.tsx                # Footer + liens légaux
│  ├─ LegalPage.tsx             # Layout commun aux pages légales
│  ├─ SectionHeading.tsx        # En-tête de section réutilisable
│  ├─ Reveal.tsx                # Fade-up au scroll (IntersectionObserver)
│  └─ Logo.tsx                  # Logo texte + monogramme
├─ lib/
│  ├─ content.ts                # ⭐ Tous les textes du site (à modifier en priorité)
│  └─ contact.ts                # Adapter formulaire (mailto ↔ API swap)
├─ public/
│  └─ favicon.svg
├─ tailwind.config.ts           # Tokens design (palette, fonts, animations)
└─ ...
```

---

## 3. Modifier les contenus

### 🎯 Le fichier central : `lib/content.ts`

**Tous** les textes du site (marque, contact, copy, services, témoignages, projets, mentions légales) sont centralisés dans `lib/content.ts`. C'est le seul fichier à modifier pour 90 % des changements.

Cherche les marqueurs **`[À compléter — …]`** ou **`TODO`** pour repérer les zones qui attendent une information réelle.

### Exemples courants

| Quoi modifier | Où, dans `lib/content.ts` |
|---|---|
| Nom de marque | `siteConfig.brand.name` |
| Email | `siteConfig.contact.email` |
| Téléphone | `siteConfig.contact.phoneDisplay` (affiché) + `phoneE164` (lien `tel:`) |
| URL canonique du site | `siteConfig.url` |
| Zone géographique | `siteConfig.contact.areaServed` |
| Texte du Hero | export `hero` |
| Services / Approche / Méthode | exports correspondants |
| Témoignages | export `temoignages.items` |
| Projets anonymisés | export `projets.items` |
| Mentions légales (éditeur, hébergeur, carte pro…) | export `legal` |

### Activer le téléphone (lien cliquable `tel:`)

Dans `lib/content.ts` :

```ts
contact: {
  email: "ines.desquines.consulting@gmail.com",
  phoneDisplay: "+33 6 12 34 56 78",          // ce qui s'affiche
  phoneE164: "+33612345678",                  // permet le tel: cliquable
  areaServed: "Île-de-France & France",
},
```

### Remplacer un visuel de projet par une vraie photo

Les cartes projets utilisent par défaut des visuels SVG abstraits (architecture, façade, grille).
Pour utiliser une vraie image, dépose-la dans `public/projets/` puis renseigne le chemin dans `lib/content.ts` :

```ts
projets.items = [
  {
    title: "Projet résidentiel confidentiel",
    summary: "…",
    tag: "Conseil",
    image: "/projets/residentiel-paris.jpg", // ← chemin depuis /public
  },
  // …
];
```

> ⚠️ Toujours obtenir l'accord écrit du client avant de publier une vraie photo identifiable.

---

## 4. Formulaire de contact

Le formulaire fonctionne en mode **`mailto`** par défaut (MVP zéro backend) : il ouvre le logiciel de messagerie du visiteur avec un message pré-rempli.

### Passer à un envoi serveur plus tard

Dans `lib/contact.ts`, change la constante :

```ts
const STRATEGY: Strategy = "api"; // au lieu de "mailto"
```

Puis crée la route `app/api/contact/route.ts`. Exemples d'intégration :

- **Resend** (recommandé pour un envoi propre) → API route qui appelle `resend.emails.send(...)`
- **Formspree** → modifier le `fetch` dans `submitContact` pour pointer vers `https://formspree.io/f/XXXX`
- **EmailJS** → appel côté client dans la branche `"api"`

Le composant `ContactForm` n'a aucune dépendance à la stratégie : le swap est invisible côté UI.

---

## 5. Personnaliser le design

Tous les tokens design (palette, fonts, espacements) sont dans **`tailwind.config.ts`**.

### Palette par défaut

| Token | Valeur | Usage |
|---|---|---|
| `paper` | `#F5F0E6` | Fond principal (warm-paper) |
| `paper-deep` | `#EFE8DA` | Sections alternées |
| `paper-soft` | `#FBF8F1` | Surfaces élevées (cartes) |
| `ink` | `#1C1B17` | Texte principal |
| `ink-muted` | `#5E5A4F` | Texte secondaire |
| `ink-faint` | `#8C8678` | Texte tertiaire / légendes |
| `line` | `#D7CFBE` | Bordures fines |
| `accent` | `#6B3A2C` | Accent (terre / bordeaux discret) |
| `accent-bronze` | `#8B6F47` | Accent secondaire (bronze) |

### Typographies

- **Display (titres)** : Fraunces (variable, éditorial)
- **Sans (corps)** : Manrope (lisible, légèrement géométrique)

Chargées via `next/font/google` dans `app/layout.tsx` → zéro CLS, performance optimale.

---

## 6. SEO

- `app/layout.tsx` → metadata par défaut + Open Graph + JSON-LD `ProfessionalService`
- `app/sitemap.ts` → sitemap dynamique (auto-régénéré)
- `app/robots.ts` → robots.txt dynamique

Avant la mise en ligne, vérifie que **`siteConfig.url`** dans `lib/content.ts` pointe bien sur le domaine final.

---

## 7. Déploiement

### Vercel (recommandé)

1. Pousser le repo sur GitHub.
2. Importer le projet sur [vercel.com](https://vercel.com/new).
3. Aucune variable d'environnement nécessaire pour le MVP.
4. Configurer le domaine personnalisé dans les settings Vercel.

### Autre hébergement

```bash
npm run build
npm run start   # serveur Node sur le port 3000
```

Compatible avec tout hébergeur supportant Node.js (Netlify, Railway, Fly.io, OVH, etc.).

---

## 8. Checklist avant publication

Voir le fichier **`CHECKLIST.md`** à la racine du projet.

---

## 9. Accessibilité

- Contrastes WCAG AA respectés sur la palette par défaut
- Focus visibles (`outline` accent, offset 3px)
- Navigation clavier complète (skip link, menu mobile accessible)
- `prefers-reduced-motion` respecté (animations désactivées)
- Sémantique HTML : `<header>`, `<main>`, `<section>` avec `aria-labelledby`, `<footer>`

---

## Licence

Code de site sur-mesure — propriété de Inès Desquines Consulting.
