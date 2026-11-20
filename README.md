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
| Portrait / photo | `public/portrait.svg` (or swap for a `.jpg`/`.png` and update `portrait.src`) |
| Resume / CV PDF | `public/resume.pdf` — replace with your real CV; the nav/CTA link already opens it in a new tab |
| Colors & typography | `src/index.css` (`:root` variables) |

## Pages

- **Home** — brand hero, short bio, contact
- **Portfolio** — placeholder project slots (template only)
- **Resume** — opens `/resume.pdf` in a new tab (`target="_blank"` + `rel="noopener noreferrer"`)
