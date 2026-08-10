# Laxit Khanpara — Portfolio

Personal portfolio inspired by the classic dark **vCard** layout (sidebar + About / Experience / Education / Portfolio / Journey / Contact tabs).

## Stack
- Vite + React + TypeScript
- Deploy-ready for **Render** (static site), Vercel, or Netlify

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy on Render
1. Connect this GitHub repo in the [Render Dashboard](https://dashboard.render.com/).
2. Create a **Static Site** (or apply the Blueprint from `render.yaml`):
   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
3. SPA routing is handled by the rewrite in `render.yaml` (`/*` → `/index.html`).
4. Auto-deploys on every push to the connected branch.

## Content
Edit `src/content.ts` for bio, experience, projects, skills.

Resume: `public/Laxit_Khanpara_CV.pdf`
