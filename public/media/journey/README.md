# Journey photos

**Upload page:** [/admin/upload](/admin/upload) — drag photos, pick a milestone, download or save (dev).

Drop JPG/PNG/WebP files here for the **Journey** tab. Paths are wired in `src/content.ts` → `journey`.

## Add a new milestone

1. Copy photos into `public/media/journey/` (kebab-case names, e.g. `cursor-hackathon-team.jpg`).
2. Add an entry in `src/content.ts`:

```ts
{
  id: 'my-milestone',           // unique slug
  sortDate: 202607,             // YYYYMM — higher = newer (shown first)
  year: 'Jul 2026',               // display label
  title: 'My Event · Title',
  tag: 'Hackathon',             // Hackathon | Career | Build | Award | …
  story: 'One or two sentences about the milestone.',
  image: '/media/journey/my-milestone-cover.jpg',
  images: [
    '/media/journey/my-milestone-2.jpg',
    '/media/journey/my-milestone-3.jpg',
  ],
},
```

3. Push — Render will serve new files from `public/media/journey/`.

Missing files are hidden automatically (no broken placeholders).

## Photo slots waiting for uploads

These paths are already wired; add matching files when you have them:

| File | Milestone |
|------|-----------|
| `cursor-hackathon-team.jpg` | Cursor Hackathon |
| `cursor-hackathon-demo.jpg` | Cursor Hackathon |
| `cursor-hackathon-workspace.jpg` | Cursor Hackathon |
| `liferay-cli-npm.jpg` | Liferay CX scaffolders |
| `liferay-blog-feature.jpg` | Liferay CX scaffolders |
| `liferay-cli-terminal.jpg` | Liferay CX scaffolders |
| `liferay-cli-repo.jpg` | Liferay CX scaffolders |
| `axpert-certificate.jpg` | AXpert of the Month |
| `aixtor-office.jpg` | Aixtor / Integrari |
| `integrari-dashboard.jpg` | Aixtor / Integrari |
| `integrari-team.jpg` | Aixtor / Integrari |
| `education-convocation.jpg` | B.Tech graduation |
| `placement-celebration.jpg` | Campus placement |
| `vastrarent-api.jpg` | VastraRent API |
| `vastrarent-swagger.jpg` | VastraRent API |
| `vastrarent-docker.jpg` | VastraRent API |
| `limbdi-ums-portal.jpg` | Limbdi UMS freelance |
| `limbdi-ums-admin.jpg` | Limbdi UMS freelance |
| `limbdi-ums-marksheet.jpg` | Limbdi UMS freelance |
| `limbdi-ums-dashboard.jpg` | Limbdi UMS freelance |
| `cscode-esm.jpg` | CSCodeTech |
| `cscode-rbac.jpg` | CSCodeTech |
| `cscode-dashboard.jpg` | CSCodeTech |
| `cscode-team.jpg` | CSCodeTech |
| `pu-hackathon-team.jpg` | PU Code Hackathon |
| `campusway-demo.jpg` | PU Code Hackathon |
| `givevote-dashboard.jpg` | GiveVote |
| `givevote-results.jpg` | GiveVote |
| `sharshah-leaves.jpg` | Sharshah |
| `codeshafe-dsa.jpg` | Codeshafe DSA |
| `codeshafe-certificate.jpg` | Codeshafe DSA |
| `cybersecurity-fdp-certificate.jpg` | Cybersecurity FDP |
| `vadodara-hackathon-team.jpg` | Vadodara Hackathon |

## Tips

- Prefer landscape or square photos (~1200px wide).
- Use the **cover** image (`image`) for the hero shot; extras go in `images`.
- Keep filenames stable — if you rename a file, update `content.ts` too.
