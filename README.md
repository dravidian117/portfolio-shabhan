# Shabhan — Portfolio

Personal portfolio site for [Shabhan](https://github.com/dravidian117) (`dravidian117`).

## Stack

- Vite + React + TypeScript
- React Router (Home, Portfolio)
- Static assets in `public/`

## Develop

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize

| What | Where |
| --- | --- |
| Name, bio, expertise, contact, project slots | `src/content.ts` |
| Portrait / photo | `public/portrait.png` (update `portrait.src` / caption in `src/content.ts` if you change it) |
| Resume / CV PDF | `public/resume.pdf` — currently the uploaded NMSU resume; swap the file to update |
| Colors & typography | `src/index.css` (`:root` variables) |

## Pages

- **Home** — brand hero, short bio, contact
- **Portfolio** — placeholder project slots (template only)
- **Resume** — opens `/resume.pdf` in a new tab (`target="_blank"` + `rel="noopener noreferrer"`)
