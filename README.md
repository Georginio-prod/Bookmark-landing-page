# Bookmark — Landing page (Frontend Mentor)

![Vue](https://img.shields.io/badge/Vue-3-4FC08D?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![PrimeVue](https://img.shields.io/badge/PrimeVue-4-41B883?logo=primevue&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-Challenge-3F54A3)

🔗 **Démo en ligne** : <https://bookmark-landing-page-silk-five.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/Bookmark-landing-page>
🎯 **Défi** : [Bookmark landing page](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158) (niveau *Intermediate*)

---

## 📌 Présentation

Landing page d'une **extension de gestion de favoris**. Le défi ajoute plusieurs
interactions à la simple intégration : **onglets** de fonctionnalités, **accordéon FAQ**,
**validation d'e-mail** dans le formulaire d'abonnement et menu mobile.

## ✨ Fonctionnalités

- Héros avec illustration et boutons « Get it on Chrome / Firefox ».
- **Section Features à onglets** (Simple Bookmarking / Speedy Searching / Easy Sharing) avec changement de contenu.
- Cartes de **téléchargement** par navigateur (Chrome, Firefox, Opera).
- **FAQ en accordéon** (ouverture / fermeture des questions).
- Formulaire « Stay up-to-date » avec **validation de l'adresse e-mail** et message d'erreur.
- Menu de navigation mobile plein écran.

## 🛠️ Stack

Vue 3 · Vite 5 · PrimeVue 4 (preset Tailwind, composant `CascadeSelect` personnalisé) · Tailwind CSS 3 + `tailwindcss-primeui`.

## 📁 Structure

```
Bookmark-landing-page/
├── src/
│   ├── App.vue · main.js · style.css
│   ├── presets/config/          # Presets PrimeVue (CascadeSelect)
│   └── components/
│       ├── navbar.vue           # Navigation + menu mobile
│       ├── contentD.vue         # Héros
│       ├── feature.vue · Ifeat.vue   # Onglets de fonctionnalités
│       ├── downl.vue · bleuCard.vue  # Cartes de téléchargement
│       ├── faq.vue              # Accordéon FAQ
│       ├── inputG.vue           # Formulaire e-mail + validation
│       └── foot.vue             # Footer
├── public/                      # Illustrations, logos, icônes
└── tailwind.config.js · vite.config.js
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/Bookmark-landing-page.git
cd Bookmark-landing-page
npm install
npm run dev
```

## 🌐 Déploiement

Déployé sur **Vercel**. Aucune configuration nécessaire.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
