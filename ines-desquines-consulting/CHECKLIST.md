# Checklist de mise en ligne

À parcourir avant de publier le site. Tout ce qui n'est pas coché doit être complété.

---

## ✏️ Contenus à valider avec la cliente

- [ ] Nom de marque définitif (actuellement : *Inès Desquines Consulting*)
- [ ] Tagline / titre H1 du Hero
- [ ] Texte de l'**Approche** + les 3 principes (Écoute / Justesse / Discrétion)
- [ ] Textes des **3 Services**
- [ ] Textes des **3 Typologies de projets**
- [ ] Textes des **4 étapes** de la Méthode
- [ ] Liste des **catégories d'experts** du réseau
- [ ] Textes des **3 cartes Projets accompagnés** (résumés anonymisés)
- [ ] Textes des **témoignages** (placeholders → vrais avis avec accord client)

📍 Tous ces contenus se modifient dans `lib/content.ts`.

---

## 📞 Informations de contact

- [ ] **Email** confirmé : `ines.desquines.consulting@gmail.com`
- [ ] **Téléphone** à renseigner — remplir `siteConfig.contact.phoneDisplay` + `phoneE164`
- [ ] **Zone géographique** d'intervention précise (actuellement : *Île-de-France & France*)

---

## 🖼 Images & visuels

- [ ] Logo / monogramme final (actuel : monogramme texte `i.d.` — peut être conservé)
- [ ] Favicon (actuel : SVG placeholder dans `public/favicon.svg`)
- [ ] Image Open Graph (1200×630) à ajouter dans `public/og.jpg` puis référencer dans `app/layout.tsx`
- [ ] Photo de profil pour une éventuelle section "à propos" — *non incluse au design actuel, à brancher si validée*
- [ ] Vraies photos pour les **projets accompagnés** (optionnel, accord client requis) → `public/projets/*.jpg`

---

## 📝 Avis & réalisations

- [ ] Témoignages réels obtenus **par écrit** avec autorisation de diffusion
- [ ] Auteur(e) anonymisé(e) si demandé (prénom + initiale + contexte)
- [ ] Vérifier : RGPD respecté pour la publication

---

## ⚖️ Conformité légale — Mentions légales

À compléter dans `lib/content.ts` (export `legal`) :

- [ ] **Éditeur** : nom, statut juridique, SIRET, adresse, téléphone, directeur de publication
- [ ] **Hébergeur** : nom, adresse, contact (si déployé sur Vercel : *Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA*)

### Si l'activité inclut de la transaction immobilière (loi Hoguet)

- [ ] **Carte professionnelle** : numéro, autorité de délivrance (CCI compétente)
- [ ] **Assurance RC professionnelle** : compagnie, numéro de police
- [ ] **Barème d'honoraires** : à publier en annexe ou en lien téléchargeable
- [ ] **Médiateur de la consommation** : nom et coordonnées

> 💡 Si l'activité est exclusivement du **conseil** (sans rôle de transaction au sens de la loi Hoguet), le bloc carte pro / barème / médiateur peut être supprimé. À valider avec un conseil juridique.

---

## 🔐 RGPD — Politique de confidentialité

- [ ] Vérifier que les finalités, durées et destinataires correspondent à la réalité opérationnelle
- [ ] Vérifier que la **base légale** indiquée (consentement art. 6.1.a) est correcte au cas d'usage
- [ ] Confirmer **l'absence de cookies tiers** (analytics, pixels marketing) — sinon mettre à jour la page

---

## 🌐 SEO & domaine

- [ ] Renseigner le **domaine final** dans `lib/content.ts` → `siteConfig.url`
- [ ] Title et meta description validés (actuellement OK selon brief)
- [ ] Sitemap.xml accessible à `/sitemap.xml`
- [ ] robots.txt accessible à `/robots.txt`
- [ ] Vérifier le JSON-LD `ProfessionalService` avec [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Image Open Graph en place
- [ ] Indexer le site dans Google Search Console après mise en ligne

---

## ✉️ Formulaire de contact

- [ ] Décider du mode d'envoi : `mailto` (actuel) ou backend (Resend / Formspree / EmailJS)
- [ ] Si backend : implémenter `app/api/contact/route.ts` et passer `STRATEGY` à `"api"` dans `lib/contact.ts`
- [ ] Tester l'envoi sur mobile (iOS Mail, Android Gmail) et desktop

---

## 🚀 Avant de publier

- [ ] `npm run build` → aucune erreur, aucun warning critique
- [ ] Tester sur **mobile réel** (iOS Safari, Android Chrome)
- [ ] Tester en **navigation clavier** seule (Tab, Enter)
- [ ] Tester avec **`prefers-reduced-motion`** activé
- [ ] Vérifier les contrastes (Lighthouse / axe DevTools)
- [ ] Lighthouse global ≥ 95 sur Performance / SEO / Accessibilité / Best Practices

---

## 🧯 Après la mise en ligne

- [ ] Soumettre le sitemap dans Google Search Console
- [ ] Surveiller les premiers retours formulaire (boîte mail réservée)
- [ ] Mettre à jour les **dates** des mentions légales et de la politique (champ *Dernière mise à jour*)
