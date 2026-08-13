# AGENTS.md

## Cursor Cloud specific instructions

### Product
Personal portfolio for Laxit Khanpara — Vite + React + TypeScript, Framer Motion, dark glass UI with teal accents.

### Commands
See `README.md` / `package.json`. Standard flow:

- Install: `npm install`
- Dev: `npm run dev` (port **5173**)
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

### Notes
- Content lives in `src/content.ts` — prefer editing there over hardcoding in components.
- Nav tabs: About | Experience | Education | Projects | Journey | Contact.
- Projects filters: All · Enterprise · Tools · Hackathon · Apps · Blog (no separate Blog subtab).
- On ≤1024px, the primary nav is a fixed bottom dock portaled to `document.body` (glass `backdrop-filter` on cards traps `position: fixed` if left inside `.card`).
- Resume PDF: `public/Laxit_Khanpara_CV.pdf` (update anytime via `/?admin=resume` or admin hub `/?admin=1`).
- Journey photos: `/?admin=upload`. Project media: `public/media/`.
- No backend / database. Contact form opens `mailto:`. Static deploy (Render Blueprint in `render.yaml`).
- For local preview from your machine while using Cloud Agents, forward port 5173 via the plug icon.
- On live Render, admin pages use **Download** then commit to GitHub (no write API). Local `npm run dev` can **Save to project**.
