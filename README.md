# Portfolio — Nrusimha Sri Ganesh K

Personal portfolio website built with **React + TypeScript + Vite**, deployed on **Vercel**.

🔗 [sriganeshk.me](https://sriganeshk.me)

---

## Tech Stack

- **Frontend** — React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- **Backend** — Vercel Serverless Function (`/api/contact.ts`) using EmailJS Node SDK
- **Data** — All content driven from a single `src/data.json` file

## Project Structure

```
src/
├── components/       # All UI components (TSX)
├── data.json         # Single source of truth for all portfolio content
├── env.ts            # Typed environment variable exports
├── constant.ts       # SVG icon strings
└── App.tsx           # Root with React Router

api/
└── contact.ts        # Serverless email handler
```

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file at the root:

```env
VITE_RESUME_URL=<your_resume_url>

# Backend (Vercel env, not prefixed with VITE_)
SERVICE_ID=<emailjs_service_id>
TEMPLATE_ID=<emailjs_template_id>
PUBLIC_KEY=<emailjs_public_key>
PRIVATE_KEY=<emailjs_private_key>
CONTACT_EMAIL=<your_email>
```

## Adding Content

All portfolio data lives in `src/data.json` — update projects, experience, skills, and personal info there.  
To add project links, use `liveLink` and/or `demoLink` inside any project entry.
