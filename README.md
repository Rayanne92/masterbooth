# Master Booth

Frontend Next.js App Router, TypeScript, Tailwind CSS et Lucide. Node.js 20.9+.

```sh
npm install
npm run dev
```

Vérifications : `npm run typecheck` puis `npm run build`.

Déploiement : importer le dépôt dans Vercel (preset Next.js), renseigner `NEXT_PUBLIC_SITE_URL` avec le domaine HTTPS, puis déployer. Sans domaine configuré, le sitemap reste vide pour éviter de publier des URLs fictives.

À personnaliser : `lib/site.ts` (coordonnées, Instagram, images), `public/images/` (photos d’ambiance), et les pages mentions légales/confidentialité avant publication. Sources des images : `CREDITS.md`. Aucun avis client fictif n’est affiché.

Le formulaire est une simulation explicite, sans transfert ni stockage. Brancher `submitQuote` dans `components/QuoteForm.tsx` à une API, avec validation serveur et protection anti-spam, puis adapter les textes et la confidentialité avant activation.
