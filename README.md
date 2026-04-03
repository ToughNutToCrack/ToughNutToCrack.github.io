# Portfolio — Astro + Tailwind CSS

A responsive, performance-first portfolio site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), designed for GitHub Pages hosting.

## Stack

| Layer      | Choice                              |
|------------|-------------------------------------|
| Framework  | Astro 4 (static output)             |
| Styling    | Tailwind CSS 3                      |
| Fonts      | Cormorant Garamond + DM Mono        |
| Deploy     | GitHub Pages via GitHub Actions     |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Customise the content

All content lives in `src/pages/index.astro`. Open it and edit:

- **Cover** — swap `image="/images/cover.jpg"` with your own photo (drop it in `/public/images/`)
- **About** — update `headline` and `body` props
- **Projects** — edit the `projects` array (title, category, image path, link)
- **Footer** — update `name` and `footerLinks`

Drop your project images in `/public/images/projects/` and match the filenames in the array.

## Deploy to GitHub Pages

### 1. Update `astro.config.mjs`

```js
// Replace with your actual values:
base: '/your-repo-name',   // or '/' if using username.github.io
site: 'https://your-username.github.io',
```

### 2. Enable GitHub Pages in your repo settings

- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**

### 3. Push to `main`

The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on every push to `main`. That's it.

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── cover.jpg              ← your cover photo
│       └── projects/              ← project thumbnails + gallery images
├── src/
│   ├── data/
│   │   └── projects.ts            ← ★ SINGLE SOURCE OF TRUTH for all projects
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Cover.astro
│   │   ├── About.astro
│   │   ├── PortfolioGrid.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro           ← HTML shell + SEO meta + View Transitions
│   ├── pages/
│   │   ├── index.astro            ← homepage
│   │   └── projects/
│   │       └── [slug].astro       ← dynamic project pages (auto-generated)
│   └── styles/
│       └── global.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
└── tailwind.config.mjs
```

## Adding or editing projects

**All project content lives in one place: `src/data/projects.ts`**

Each entry in the `projects` array generates:
- A card on the homepage grid
- A full project page at `/projects/[slug]`
- Automatic prev/next navigation between projects

Fields you can set per project:

| Field | Required | Description |
|---|---|---|
| `slug` | ✓ | URL-safe identifier, e.g. `my-project` |
| `title` | ✓ | Displayed in the grid and on the page |
| `category` | ✓ | e.g. `Branding · Identity` |
| `tagline` | ✓ | Short description for SEO + grid hover |
| `cover` | ✓ | Path to cover image in `/public/` |
| `year` | ✓ | e.g. `2025` |
| `role` | ✓ | Your role on the project |
| `description` | ✓ | Main body text (supports `<em>`, `<br>`) |
| `client` | — | Client name |
| `descriptionExtra` | — | Second paragraph |
| `gallery` | — | Array of `{ src, alt, size }` images |
| `details` | — | Sidebar key/value pairs |
| `href` | — | External link to live site |
| `placeholder` | — | CSS gradient shown before the image loads |


## Performance notes

- All images use `loading="lazy"` except the cover (which gets `fetchpriority="high"`)
- Tailwind purges unused CSS at build time — the shipped CSS bundle is tiny
- Zero JavaScript is shipped by default; the only JS is the nav scroll/mobile menu (~1 KB)
- Lighthouse scores of 95–100 across all categories are expected on production
