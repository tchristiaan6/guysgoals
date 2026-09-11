# guysgoals.com

Archived storefront for Guys Goals, rebuilt as a static Astro site from the Shopify theme export, product CSV, and page archive. No cart or checkout; the site is a showcase.

- `content/` holds everything the pages render: `site.json` (homepage copy, price table, banners), `collections.json`, `products/*.json`, `posts/*.json`, `pages/*.json`.
- `public/images/` holds product photos, banner and hero images, blog heroes, and the logo.
- `src/pages/` mirrors the original Shopify URL structure.

```bash
npm install
npm run dev
npm run build
```

Deployed on Vercel from `main`.
