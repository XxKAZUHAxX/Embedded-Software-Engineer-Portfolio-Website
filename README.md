# Jesryl Jade Lazaga — Portfolio

A "Firmware Terminal" themed portfolio for an embedded software engineer. Built
with React (Vite) on the front end and Express + Nodemailer on the back end.

> **Design language:** dark engineering-workstation aesthetic, one accent color
> (oscilloscope phosphor green `#00FF88`), `JetBrains Mono` + `Inter` typography,
> and a signature hero **serial monitor** that boots and `printf`-types the intro.

---

## Tech Stack

| Layer    | Tech                                                            |
| -------- | -------------------------------------------------------------- |
| Frontend | React 18, Vite, Framer Motion, plain CSS (design tokens)       |
| Backend  | Node.js, Express, Nodemailer, express-validator, rate limiting |
| Tooling  | ESLint, Prettier, concurrently                                 |

---

## Project Structure

```
.
├── client/                 # Vite + React frontend
│   ├── public/             # favicon, (add cv.pdf, jade.jpg here)
│   ├── src/
│   │   ├── components/      # Navbar, Button, ProjectCard, SkillBadge, ...
│   │   ├── sections/        # Hero, About, Skills, Experience, Projects, Contact, Footer
│   │   ├── hooks/           # scroll-spy + reduced-motion helpers
│   │   ├── data/content.js  # single source of truth for all content
│   │   └── styles/global.css
│   └── vite.config.js       # dev proxy: /api -> :5000
├── server/                  # Express backend
│   ├── routes/contact.js    # POST /api/contact (validate + email)
│   ├── index.js             # CORS, rate-limit, error handling
│   └── .env.example
├── vercel.json              # frontend deploy config
├── render.yaml              # backend deploy config
└── package.json             # runs client + server together
```

---

## Getting Started

### 1. Install dependencies

```bash
npm run install:all
```

This installs the root, `client/`, and `server/` packages.

### 2. Configure the backend (optional for local UI work)

```bash
cp server/.env.example server/.env
```

Fill in SMTP credentials to enable real email delivery. **Without SMTP set, the
contact endpoint runs in dev mode** and just logs submissions — the UI still works.

> **Gmail tip:** enable 2FA, then create an [App Password](https://myaccount.google.com/apppasswords)
> and use it as `SMTP_PASS`.

### 3. Run both servers

```bash
npm run dev
```

- Frontend → http://localhost:5173
- Backend → http://localhost:5000
- API calls to `/api/*` are proxied to the backend automatically.

---

## Environment Variables (backend)

| Variable        | Description                                        |
| --------------- | -------------------------------------------------- |
| `PORT`          | Server port (default `5000`)                       |
| `CLIENT_ORIGIN` | Allowed CORS origin(s), comma-separated            |
| `SMTP_HOST`     | SMTP server host (e.g. `smtp.gmail.com`)           |
| `SMTP_PORT`     | `587` (STARTTLS) or `465` (SSL)                    |
| `SMTP_USER`     | SMTP username / sending address                    |
| `SMTP_PASS`     | SMTP password or app password                      |
| `CONTACT_TO`    | Recipient address (default `jesryljade18@gmail.com`) |

---

## Personalizing Content

All copy lives in [`client/src/data/content.js`](client/src/data/content.js).
Edit that one file to update the bio, skills, experience, and projects.

---

## Deployment

### Frontend → Vercel

1. Import the repo into Vercel.
2. Vercel reads `vercel.json` (build → `client/dist`, SPA rewrites included).
3. Deploy.

### Backend → Render (or Railway)

**Render:** create a new Blueprint pointing at this repo — `render.yaml` provisions
the service (`rootDir: server`, start `npm start`, health check `/api/health`).
Set the secret env vars in the dashboard.

**Railway:** create a service from `server/`, set the start command to `npm start`,
and add the same environment variables.

### Wire the two together

After both are live, set the backend's `CLIENT_ORIGIN` to your Vercel URL, and
update the frontend's API base if you are not using same-origin rewrites.

---

## Accessibility & Performance

- Semantic landmarks (`<nav>`, `<main>`, `<section>`, `<article>`), skip link.
- Visible accent-colored focus rings; full keyboard navigation.
- `prefers-reduced-motion` disables typing + scroll animations.
- No image-heavy assets; glyphs are inline SVG; fonts are preconnected.

---

## Scripts

| Command               | What it does                          |
| --------------------- | ------------------------------------- |
| `npm run dev`         | Run client + server concurrently      |
| `npm run build`       | Build the frontend for production     |
| `npm run install:all` | Install all workspaces                |
| `npm run start:server`| Start the backend only                |
