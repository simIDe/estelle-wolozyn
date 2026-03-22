# Estelle Wolozyn — Sage-Femme Échographiste à Alès

Site vitrine de ma compagne, [Estelle Wolozyn](https://www.sagefemmeales.fr), sage-femme échographiste diplômée d'État exerçant à Alès (30).

## Stack

- **[Hugo](https://gohugo.io/)** — générateur de sites statiques
- **Thème custom** — conçu sur mesure, palette de couleurs issue de sa carte de visite
- **GitHub Pages** — hébergement via GitHub Actions (CI/CD automatique sur push)
- **Domaine** — [www.sagefemmeales.fr](https://www.sagefemmeales.fr)

## Fonctionnalités

- Page unique (one-page) avec navigation par ancres
- Sections : hero, à propos, expertises, échographies, infos pratiques, contact
- Collage photo du cabinet, intégration Google Maps
- Prise de rendez-vous via [Doctolib](https://www.doctolib.fr)
- Responsive mobile-first
- Optimisation des images (ffmpeg)

## Déploiement

Tout push sur `main` déclenche automatiquement le build Hugo et le déploiement sur GitHub Pages via le workflow `.github/workflows/deploy.yml`.
