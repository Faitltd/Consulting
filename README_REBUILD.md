## FAIT Consulting — Rebuild Instructions (from seed)

This folder contains everything salvageable from the old build to recreate the site in a fresh SvelteKit project.

### What’s inside
- `html/` — rendered pages from the old build (index, services, service detail pages, case studies, resources, contact, about, legal, 404).
- `css/` — generated CSS bundles for style reference (hashed filenames from the old build).
- `images/` — `Fait Consulting.jpg` (hero photo) and `Gemini_Generated_Image_8yik388yik388yik.png`.
- `sitemap.xml` — from the old `static/`.

### Stack to recreate
- SvelteKit 2.22.2 + adapter-static 3.0.8
- Vite 6.3.5
- Svelte 5.34.8
- lucide-svelte 0.555.0
- Typescript 5.8.3, svelte-check 4.2.2

### Base project setup (new repo)
1) Scaffold a new SvelteKit project (adapter-static).
2) Replace `package.json` with:
```json
{
  "name": "fait-consulting",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-check"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "3.0.8",
    "@sveltejs/kit": "2.22.2",
    "@sveltejs/vite-plugin-svelte": "5.1.0",
    "lucide-svelte": "0.555.0",
    "svelte": "5.34.8",
    "svelte-check": "4.2.2",
    "typescript": "5.8.3",
    "vite": "6.3.5"
  }
}
```
3) `svelte.config.js`:
```js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    prerender: { entries: ['*'] }
  }
};

export default config;
```
4) `vite.config.ts`:
```ts
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [sveltekit()] });
```
5) `src/app.html`:
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body>
    <div id="svelte">%sveltekit.body%</div>
  </body>
</html>
```
6) `tsconfig.json`:
```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": { "types": ["svelte"] }
}
```
7) `src/app.d.ts`:
```ts
export {};
declare global { namespace App {} }
```
8) Install deps: `npm install`

### Rebuild steps
1) Copy assets:
   - Move `images/Fait Consulting.jpg` (and other images) into your new `static/images/`.
   - Copy `sitemap.xml` into your new `static/`.
2) Recreate pages/components:
   - Use `html/index.html` as the blueprint for `src/routes/+page.svelte`. Break out header, footer, CTA, service cards, case study cards, stats grid into components.
   - Rebuild other routes using the corresponding HTML files in `html/`:
     - `/services`, `/services/process-automation`, `/services/waste-analysis`, `/services/business-optimization`
     - `/case-studies` and individual case studies
     - `/resources` and individual resources
     - `/contact`, `/about`, `/legal/privacy-policy`, `/legal/terms`, `/404`
3) Styling:
   - Use `css/*.css` as reference for spacing, typography, colors, buttons, hero styles. Migrate styles into component/global CSS (don’t rely on hashed filenames).
   - Ensure hero image uses `object-fit: cover; object-position: center top;`.
4) Verify and build:
   - `npm run dev` to check pages/navigation.
   - `npm run build` to produce `build/`.
5) Deploy:
   - rsync `build/` to `/root/FAIT/consulting/build/` on the server and reload Caddy:
     ```
     rsync -avz --delete build/ root@65.21.246.15:/root/FAIT/consulting/build/
     ssh root@65.21.246.15 "docker exec pointcounterpoint-frontend-1 caddy reload --config /etc/caddy/Caddyfile"
     ```
   - Or use your GitHub Actions workflow once the repo has source.

### Prompt to hand to a builder/agent
“You’re rebuilding the FAIT Consulting marketing site in a fresh SvelteKit (adapter-static) project. Use the seed folder at `~/Documents/augment-projects/rebuild_seed`:
- `html/` contains rendered pages (index, services, case studies/resources, contact, about, legal, 404) to replicate structure/content.
- `css/` contains the generated CSS for style reference (copy colors/spacing/typography).
- `images/` contains `Fait Consulting.jpg` for the hero and other assets; place in `static/images/`.
- `sitemap.xml` goes in `static/`.
Use SvelteKit 2.22.2, adapter-static 3.0.8, Vite 6.3.5, Svelte 5.34.8, lucide-svelte 0.555.0, TS 5.8.3. Recreate components for header/footer/CTA/cards, ensure the hero img uses object-fit: cover and object-position: center top. After pages are rebuilt, run npm run build and deploy via rsync to /root/FAIT/consulting/build and reload Caddy in container pointcounterpoint-frontend-1.” 
