# Agent Prompt: Plan & Build Jade's Embedded Software Engineer Portfolio Website

---

## YOUR ROLE

You are a senior full-stack web developer and UX designer tasked with **planning and implementing a complete portfolio website** for Jesryl Jade Lazaga — a junior embedded software engineer with growing web development skills. Your output must be a thorough, actionable implementation plan followed by full working code.

---

## SUBJECT BRIEF

**Owner:** Jesryl Jade Lazaga ("Jade")
**Primary Identity:** Embedded Software Engineer
**Secondary Identity:** Web Development learner (side hustle, growing)
**Contact:** jesryljade18@gmail.com | 0969-169-8098
**LinkedIn:** https://www.linkedin.com/in/jesryl-jade-lazaga-b17742188
**Location:** Philippines

### Career Summary

Jade is a passionate embedded software engineer who designs and builds projects around microcontrollers and embedded Linux. He bridges hardware and software — from writing bare-metal firmware to deploying IoT systems — while also developing web development skills as a side pursuit.

**Current Role:** Software Engineer I (Embedded) at Henny Penny (Full-Time)

- C/C++, low-level drivers, bootloaders, BSPs, FreeRTOS, embedded Linux
- MCU architecture, peripherals, communication protocols (UART, SPI, I2C, CAN, USB, Ethernet)
- CI pipelines, testing frameworks, Agile/Scrum, Atlassian tools (JIRA, Confluence, GitHub)

**Freelance:** Embedded Systems Developer at YenkoDev

- Hardware prototyping and firmware programming for various clients

**Education:** Bachelor of Engineering (Electronics Technology) — Technological University of the Philippines

- Graduated October 2024, Cum Laude, Best in Thesis Award

### Tech Stack (Full)

| Domain         | Technologies                                                          |
| -------------- | --------------------------------------------------------------------- |
| Languages      | C, C++, Python, Bash, SQL, Java, Lua                                  |
| MCUs           | ARM, AVR, Espressif (ESP-IDF), NRF52                                  |
| Embedded Tools | STM32Cube, JTAG/SWD/STLINK debuggers                                  |
| RTOS/OS        | FreeRTOS, Embedded Linux                                              |
| Protocols      | UART, SPI, I2C, I2S, CAN, RS232, RS485, LoRaWAN, MQTT, USB, BLE, WiFi |
| Hardware       | Multimeter, Oscilloscope, Logic Analyzer                              |
| Build/Dev      | Git, Docker, CMake, Makefile, VSCode, JetBrains, MSVS                 |
| Frontend Web   | HTML, CSS, JavaScript, Bootstrap, jQuery, React                       |
| Backend Web    | Node.js, Express, EJS, Middlewares                                    |
| Databases      | PostgreSQL, MongoDB, SQLite                                           |
| Web Tools      | Postman, npm                                                          |

### Featured Projects

1. **Vision-Based Illegal Parking Alert System** — YOLOv8 + ByteTrack for detecting illegal parking in Damayan, Taytay Rizal _(Thesis — Best in Thesis Award)_
2. **Automated PWD Parking Assistance System** — YOLOv8 + EasyOCR for license plate recognition
3. **Power Consumption Meter with Cloud Logging** — PZEM sensor + Arduino + ESP32 + cloud dashboard
4. **Hydroponics Growth Monitoring System** — Image processing for plant health monitoring
5. **Motorbanca Monitoring Dashboard** — LoRaWAN + ThingsBoard for marine vessel tracking

---

## REFERENCE SITE

Study this portfolio as a stylistic and structural reference: **https://anvv.tech/**

Key observations from that site:

- OS/terminal-inspired boot sequence on load (distinctive signature)
- Clean dark theme, near-black background, minimal accent color
- Hero headline is bold and direct — a thesis statement, not a greeting
- "Technical Ecosystem" section with filterable skill tags
- Contact form + a social/guestbook feature (community engagement)
- Navigation is minimal: About, Skills, Projects, Contact
- The aesthetic communicates precision engineering, not just a developer blog

**Jade's site must have its own distinct identity** — do not clone the reference. Use it to understand quality bar and structure, then make deliberate choices that reflect embedded systems work (think: signal waveforms, circuit board traces, terminal/serial monitor aesthetics, hardware precision).

---

## DESIGN DIRECTION

### Aesthetic Theme: "Firmware Terminal"

The site should feel like a high-precision engineering workstation — not a generic dev portfolio. Draw from embedded systems visual language:

- **Palette inspiration:** Dark background (not pure black — a very dark navy or charcoal, e.g. `#0D1117` or `#0E1420`), with a single accent color reminiscent of oscilloscope traces or logic analyzer signals. Good candidates: electric green (`#00FF88`), amber (`#FFB800`), or cyan (`#00D4FF`). Pick one and justify it. A secondary neutral for body text and borders.
- **Typography:** Pair a monospace/code-style display font (for headings — feel like firmware output) with a clean sans-serif for body. Consider `JetBrains Mono` or `Fira Code` for display/accents, `Inter` or `DM Sans` for body. The type treatment itself should scream "engineer."
- **Signature element:** One distinctive, memorable visual — options include: a scrolling serial monitor terminal in the hero that types out Jade's intro as if it's a `printf` debug log; OR a PCB trace / circuit board SVG that subtly animates in the background; OR a logic analyzer waveform that acts as a section divider. Choose whichever best serves the brief.
- **Motion:** Intentional and restrained. One orchestrated page-load moment. Subtle hover states. Scroll-triggered reveals. No gratuitous animation.
- **Layout:** Card-based projects section, scannable skills grid (filterable by domain), clean nav bar. Responsive down to mobile.

---

## WEBSITE ARCHITECTURE

### Pages / Sections (Single Page Application recommended)

```
/
├── Hero                  → Bold intro, tagline, CTA buttons ("View My Work", "Contact Me")
├── About                 → Short bio, photo placeholder, personality, career focus
├── Skills                → Filterable tech stack grid (Embedded, Protocols, Web, Tools)
├── Experience            → Timeline (Henny Penny, YenkoDev, Education)
├── Projects              → Cards with title, description, tech tags, GitHub/demo link
├── Contact               → Form (Name, Email, Message) + social links
└── Footer                → Copyright, links
```

### Tech Stack for the Website Itself

**Frontend:**

- React (Vite) — component-based, fast
- CSS Modules or Tailwind CSS — scoped styling
- Framer Motion — for scroll animations and entrance effects
- React Router (if multi-page) or single-page scroll navigation

**Backend:**

- Node.js + Express
- Contact form endpoint → sends email via Nodemailer (or stores to DB)
- Optional: MongoDB to persist contact form submissions and/or a guestbook
- RESTful API design

**Deployment considerations to document:**

- Frontend: Vercel or Netlify
- Backend: Railway, Render, or a VPS
- Environment variables for secrets (email credentials, DB URI)

---

## CONTENT SPECIFICATIONS

### Hero Section Copy (draft, refine as needed)

```
Headline: "Embedded Software Engineer"
Subhead:  "I write firmware that talks to hardware —
           and recently, web apps that talk to users."
CTA:      [View My Work]  [Download CV]
```

The hero should feel like a terminal session initializing. Optional: animate the subhead as if it's being typed to stdout.

### About Section

Write 2–3 short paragraphs covering:

1. Who Jade is — embedded systems focus, Philippines-based
2. What he does at Henny Penny and in freelance work
3. His growing interest in web development as a secondary skill

Keep it in first person ("Hi, I'm Jade..."), warm but technical.

### Skills Section

Organize into filterable tabs or toggle groups:

| Group               | Skills                                                  |
| ------------------- | ------------------------------------------------------- |
| **Embedded Core**   | C, C++, FreeRTOS, Embedded Linux, Bootloaders, BSPs     |
| **MCUs & Hardware** | ARM, AVR, ESP32/ESP-IDF, NRF52, STM32, JTAG, SWD        |
| **Protocols**       | UART, SPI, I2C, CAN, USB, LoRaWAN, MQTT, BLE, WiFi      |
| **Web Frontend**    | HTML, CSS, JavaScript, React, Bootstrap, jQuery         |
| **Web Backend**     | Node.js, Express, EJS, PostgreSQL, MongoDB, SQLite      |
| **DevOps & Tools**  | Git, Docker, CMake, Makefile, Postman, JIRA, Confluence |

### Projects Section

Each project card must include:

- Title + a 1–2 sentence plain-language description
- Tech tags (visual chips/badges)
- Category tag: `[Embedded]`, `[Vision/AI]`, `[IoT]`, `[Web]`
- GitHub link (placeholder if not yet public) + optional live demo link
- A visual — either a photo, a diagram, or a representative icon/illustration

### Experience Section

Timeline format, newest first:

1. **Software Engineer I (Embedded)** — Henny Penny | Full-Time | 2024–Present
2. **Embedded Systems Developer** — YenkoDev | Freelance
3. **B.Eng. Electronics Technology** — TUP | Cum Laude, Best in Thesis | Oct 2024

### Contact Section

- Contact form: Name, Email, Message, Send button
- Backend endpoint: `POST /api/contact` — validates input, sends email via Nodemailer to `jesryljade18@gmail.com`
- Return proper JSON success/error responses
- CORS configuration for frontend origin
- Optional stretch: MongoDB-backed guestbook (visitors can leave a public note)

---

## IMPLEMENTATION PLAN

Produce a step-by-step plan in the following phases. For each phase, output the actual working code, not pseudocode.

### Phase 1 — Project Scaffold

- Initialize Vite + React project
- Set up folder structure: `src/components`, `src/sections`, `src/assets`, `src/styles`
- Configure ESLint, Prettier
- Set up Express backend: `server/index.js`, `server/routes/contact.js`
- Configure `.env` for backend secrets
- Set up `package.json` scripts for concurrent frontend + backend dev

### Phase 2 — Global Styles & Design Tokens

- Define CSS custom properties (color palette, typography scale, spacing, breakpoints)
- Import and configure chosen Google Fonts
- Global reset and base styles
- Utility classes for common patterns

### Phase 3 — Component Library

Build these reusable components:

- `Navbar` — sticky, with scroll-spy active state, hamburger on mobile
- `Button` — variants: primary (accent), ghost (outline), icon
- `SkillBadge` — colored chip with category-based color coding
- `ProjectCard` — image/icon, title, description, tags, links
- `TimelineItem` — for experience section
- `SectionWrapper` — consistent padding, scroll-reveal animation trigger

### Phase 4 — Sections (implement all)

Implement each section as a React component. Follow the content specs above exactly.

For the **Hero**: implement the terminal-typing animation for the subhead using `useEffect` and a character-by-character state update loop. Show a blinking cursor `_` at the end.

For the **Skills**: implement a filter bar with tab buttons (All, Embedded, Protocols, Web, Tools). Clicking a tab filters the visible `SkillBadge` components with a smooth fade transition.

For the **Projects**: implement a category filter (All, Embedded, Vision/AI, IoT, Web). Cards should lift on hover with a subtle box-shadow transition.

For the **Experience**: implement a vertical timeline with alternating or left-aligned entries. Animate entries in as user scrolls.

### Phase 5 — Backend API

- `POST /api/contact` endpoint with express-validator for input sanitization
- Nodemailer integration — send email to `jesryljade18@gmail.com`
- Return proper JSON success/error responses
- CORS configuration for frontend origin
- Optional: `POST /api/guestbook` and `GET /api/guestbook` with MongoDB + Mongoose

### Phase 6 — Responsive & Accessibility Polish

- Test and fix layout at 375px, 768px, 1024px, 1440px
- Keyboard navigation focus states (visible, styled to match accent color)
- `prefers-reduced-motion` media query — disable animations if set
- Semantic HTML: `<section>`, `<nav>`, `<main>`, `<article>`, proper heading hierarchy
- Alt text for all images
- Lighthouse score target: Performance ≥ 90, Accessibility ≥ 95

### Phase 7 — Deployment Config

- `vercel.json` or Netlify config for frontend
- `Procfile` or `railway.toml` for backend
- Document environment variables needed
- Add a `README.md` with setup instructions

---

## CONSTRAINTS & RULES

1. **Embedded-first identity** — the site must make it unmistakably clear that Jade is an embedded engineer. Web dev is a bonus skill, not the headline.
2. **No generic templates** — avoid Bootstrap cards, cookie-cutter hero layouts, or designs that look like any Tailwind UI kit. Every section must feel crafted.
3. **Performance matters** — Jade builds for constrained hardware; the website should reflect the same discipline. No unnecessary libraries. Lazy-load images. Minify assets.
4. **Real content only** — populate every section with Jade's actual data from this brief. No "Lorem ipsum" placeholders, except for the project GitHub URLs (mark those clearly as `#TODO`).
5. **Mobile first** — write CSS mobile-first then scale up.
6. **Comment your code** — embedded engineers read datasheets; your code should be equally readable. Comment non-obvious logic.
7. **One accent color** — pick it, justify it, and use it consistently. Do not introduce a second accent.

---

## DELIVERABLES

At the end of your planning and implementation, produce:

1. ✅ **Design plan** — palette (hex values), typography pair, layout concept, signature element, and a brief justification for each choice
2. ✅ **Full frontend source** — all React components and sections, ready to run with `npm run dev`
3. ✅ **Full backend source** — Express server with contact form API, ready to run
4. ✅ **README.md** — setup, environment variables, deployment instructions
5. ✅ **Deployment guide** — how to push frontend to Vercel and backend to Railway/Render

---

## FINAL NOTE TO AGENT

Jade is a hardware person who learned to speak software fluently. The website should feel like something he would be proud to show both a hiring manager at a semiconductor company **and** a recruiter at a web startup. It needs to say: _"I live in the embedded world, but I can build for the web too."_ That dual identity — hardware precision meets modern web craft — is the soul of this portfolio. Don't lose it.
