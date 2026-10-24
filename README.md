# Amkshit Goud Suragani — Portfolio

A responsive, single-page portfolio built with React, Vite, plain CSS, and Lucide React.

[🌐 View the live portfolio](https://bobby1412.github.io/Portfolio/)

## Getting started

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it locally with `npm run preview`.

## Personalize

Update the profile links and contact information in `src/data/profile.js`. The LinkedIn and resume actions are intentionally hidden while their URLs are blank. Add real URLs before enabling them. Project details and repository/demo links live in `src/data/projects.js`; certification details and verification links live in `src/data/certifications.js`; skills are maintained in `src/data/skills.js`.

The IBM virtual internship is presented as an unverified placeholder in the experience section and should be updated when its details are confirmed.

## Deployment

GitHub Pages deploys the site automatically when changes are pushed to `main`. The workflow builds the app and publishes the `dist/` output. The Vite base path is configured for the `Portfolio` repository.
