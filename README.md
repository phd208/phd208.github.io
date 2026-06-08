# pedrodornas.dev

Personal site and FV engineering portfolio.

## Stack

- [Astro](https://astro.build/) — static site generator
- [MDX](https://mdxjs.com/) — for content-heavy pages
- GitHub Pages — hosting
- Custom domain: `pedrodornas.dev`

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Structure

```
src/
  pages/
    index.astro          # Home
    about.astro          # About
    notes/
      index.astro        # Notes index
      sva-cheat-sheet.astro
    writing/
      index.astro        # Writing index
      fv-project-walkthrough.astro
    projects.astro       # Projects
  layouts/
    Base.astro           # Shared layout (nav, footer)
  styles/
    global.css           # Design tokens, typography, base styles
```

## Adding content

**New note:** add a file to `src/pages/notes/your-slug.astro` and add an entry to the array in `src/pages/notes/index.astro`.

**New article:** same pattern under `src/pages/writing/`.

## Deployment

Pushes to `main` trigger automatic deployment via GitHub Actions (`.github/workflows/deploy.yml`).

### Custom domain setup

1. In your domain registrar, add a CNAME record: `pedrodornas.dev` → `phd208.github.io`
2. In GitHub repo Settings → Pages → Custom domain, enter `pedrodornas.dev`
3. Check "Enforce HTTPS"

Add a `CNAME` file to `public/` with the content `pedrodornas.dev` (already included if you see it in the repo).
