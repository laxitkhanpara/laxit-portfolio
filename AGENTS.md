# AGENTS.md

## Cursor Cloud specific instructions

### Product
Personal portfolio site for Laxit Khanpara — Vite + React + TypeScript, React Three Fiber (3D hero), Framer Motion.

### Commands
See `README.md` / `package.json`. Standard flow:

- Install: `npm install`
- Dev: `npm run dev` (port **5173**)
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

### Notes
- Content lives in `src/content.ts` — prefer editing there over hardcoding in components.
- Project screenshots go in `public/media/`; wire them into `Projects` when assets arrive.
- Resume PDF is served from `public/Laxit_Khanpara_CV.pdf`.
- No backend / database required. Static deploy (Vercel recommended).
- 3D canvas (WebGL) needs a GPU-capable browser environment for visual QA; `npm run build` still validates without a display.
