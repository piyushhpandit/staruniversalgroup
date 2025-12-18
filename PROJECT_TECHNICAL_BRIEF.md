# Star Universal Group — Technical Project Brief (AI-Readable)

## Executive summary
This repository contains:

- **Frontend**: A **React + Vite** single-page application (SPA) with **React Router** routing, inline-style heavy UI, Tailwind installed, and **PWA** support via `vite-plugin-pwa`.
- **Backend** (separate folder): A small **Express** server used for **contact form submissions**, sending email through **Resend**.

The site is essentially a multi-vertical brochure experience:

- **Events** (event planning)
- **Travel** (tour & travel services)
- **Foundation** (NGO/foundation page + gallery + donation info)

It relies heavily on local static assets (`src/assets/**`) for hero images, galleries, and client logos.

---

## Repo layout

### Frontend (root)
- `index.html`: Vite entry HTML (also contains GitHub Pages SPA redirect handling).
- `vite.config.ts`: Vite + React + Tailwind + PWA config (Workbox caching, chunk splitting).
- `src/main.tsx`: React entrypoint; wraps `App` in `BrowserRouter`.
- `src/App.tsx`: **All routes are defined here**.
- `src/pages/**`: Route-level pages (Events, Foundation, Travel, Contact forms).
- `src/components/**`: Shared components (e.g. `footer`, `OptimizedImage`).
- `src/utils/**`: Theme + Axios + image helper utilities.
- `public/**`: Static public assets, PWA icons, `404.html` redirect support for GitHub Pages.
- `dist/**`: Build output (committed/exists locally; used for `gh-pages` deploy).

### Backend (`server/`)
- `server/server.js`: Express API server with `/api/contact/*` endpoints using Resend.
- `server/package.json`: Backend dependencies and scripts.
- `server/README.md`, `server/test-send-email.js`, `server/test-email.sh`: operational/testing helpers.

---

## Tooling & dependencies

### Frontend
Defined in `package.json` (root):

- **React 19**, **React Router 7**
- **Vite 7**
- **Tailwind v4** (`tailwindcss` + `@tailwindcss/vite`)
- **PWA**: `vite-plugin-pwa`, `workbox-window`
- **Animation/UI**: `framer-motion`, `lucide-react`, `react-icons`
- **Forms**: `react-hook-form`, `formik`, `yup`
- **HTTP**: `axios`

Scripts (root `package.json`):
- `npm run dev`: Vite dev server
- `npm run build`: production build into `dist/`
- `npm run preview`: preview built app
- `npm run deploy`: publish `dist/` to GitHub Pages via `gh-pages`

### Backend
Defined in `server/package.json`:
- **Express 4**
- **cors**
- **dotenv**
- **resend**

Scripts:
- `npm run start`: `node server.js`
- `npm run dev`: `node --watch server.js`
- `npm run test-email`: `node test-send-email.js`

---

## Frontend runtime: entrypoints & routing

### Entrypoint
- `src/main.tsx` mounts `App` into `#root` and uses `BrowserRouter`.

### Route table (source of truth: `src/App.tsx`)

| Route | Component | File |
|------:|-----------|------|
| `/` | Landing hub | `src/pages/LandingPage.tsx` |
| `/events` | Events landing | `src/pages/Events/index.tsx` |
| `/aboutus` | Events About Us | `src/pages/Events/aboutUs.tsx` |
| `/eventclients` | Events Clients | `src/pages/Events/clients.tsx` |
| `/eventimages` | Events Image gallery | `src/pages/Events/images.tsx` |
| `/contact-event` | Events contact form | `src/pages/ContactUs/ContactEvent.jsx` |
| `/foundation` | Foundation landing | `src/pages/Foundation/index.tsx` |
| `/foundationaboutus` | Foundation about page | `src/pages/Foundation/foundationaboutus.tsx` |
| `/foundationgallery` | Foundation gallery | `src/pages/Foundation/gallery.tsx` |
| `/donations` | Donation details | `src/pages/Foundation/donation.tsx` |
| `/contact-foundation` | Foundation contact form | `src/pages/ContactUs/ContactFoundation.jsx` |
| `/travel` | Travel landing | `src/pages/Travel/index.tsx` |
| `/nepal` | Nepal packages | `src/pages/Travel/Tours/nepal.tsx` |
| `/india` | India packages | `src/pages/Travel/Tours/india.tsx` |
| `/buddhacircuit` | Buddha circuit | `src/pages/Travel/Tours/buddhaCircuit.tsx` |
| `/holidaypackage` | Holiday packages | `src/pages/Travel/Tours/holidayPackage.tsx` |
| `/contact-travel` | Travel contact form | `src/pages/ContactUs/ContactTravel.jsx` |

### Navigation headers
Each main vertical has its own header component, with a hard-coded nav list:

- Events header: `src/pages/Events/eventHeader.tsx`
- Foundation header: `src/pages/Foundation/foundationHeader.tsx`
- Travel header: `src/pages/Travel/travelHeader.tsx`

Notes:
- Headers use `useNavigate()` and inline styles; they implement a mobile menu toggle.
- Some links in other components (e.g. Footer quick links) point to paths not implemented in `App.tsx` (see “Known issues / drift”).

---

## Backend runtime: Email/contact API

### Server overview
File: `server/server.js`

- Express JSON API
- CORS enabled
- Default port: `process.env.PORT || 4000`
- Uses Resend SDK to send emails for contact forms

### Endpoints
All endpoints are under `/api`.

| Method | Path | Purpose | Required fields (minimum) |
|-------:|------|---------|---------------------------|
| GET | `/api/health` | Health check | none |
| POST | `/api/contact/event` | Event inquiry email | `name`, `email`, `phone`, `eventType`, `eventDate` |
| POST | `/api/contact/foundation` | Foundation inquiry email | `name`, `email`, `phone`, `inquiryType`, `message` |
| POST | `/api/contact/travel` | Travel inquiry email | `name`, `email`, `phone`, `tourType`, `destination`, `travelDate` |

### Environment variables (backend)
Loaded via `dotenv`.

- `RESEND_API_KEY` (**required**)
- `RECIPIENT_EMAIL` (**required**) — where inquiries are delivered
- `FROM_EMAIL` (optional) — defaults to `Star Universal <onboarding@resend.dev>` if absent
- `PORT` (optional) — default `4000`
- `NODE_ENV` (optional)

There is repo documentation about Resend limitations and domain verification in `RESEND_DOMAIN_FIX.md`.

---

## Frontend ↔ backend integration

### Frontend contact service
File: `src/api/contactService.js`

- `sendEventInquiry(data)` → POST `/contact/event`
- `sendTravelInquiry(data)` → POST `/contact/travel`
- `sendFoundationInquiry(data)` → POST `/contact/foundation`

These functions use the Axios instance in `src/api/api.js`.

### Axios base URLs
There are **two** Axios setups:

1) `src/api/api.js` (used by contact forms):
- currently sets:
  - `baseURL: "https://staruniversalgroup-be.onrender.com/api" || "http://localhost:4000/api"`
  - because a non-empty string is always truthy, the `||` fallback never triggers.

2) `src/utils/axiosInstance.ts` (generic API client, not clearly used by pages shown):
- baseURL: `import.meta.env.VITE_API_URL || "http://localhost:5000"`
- attaches `Authorization: Bearer <token>` if `localStorage.token` exists
- on 401 redirects to `/login` (route not defined in `App.tsx` currently)

If you’re an AI modifying the project, confirm which Axios client is intended for which use case.

---

## PWA & caching

### Vite PWA
Config: `vite.config.ts`

- `VitePWA({ registerType: 'autoUpdate' })`
- Workbox:
  - caches assets up to 5MB
  - runtime caching:
    - `NetworkFirst` for `https://api.*`
    - `CacheFirst` for images

### Service worker registration
Custom hook: `src/hooks/usePWA.ts`

- Registers `/sw.js` and listens for `beforeinstallprompt`
- Returns `isInstallable`, `installApp()`, `isOnline`

Note: Workbox-generated service worker is typically managed by the plugin; this repo also includes `/sw.js` in `dist/` output. If changing PWA behavior, verify runtime behavior in production build.

---

## Styling approach

- Predominantly **inline style objects** inside components/pages.
- Tailwind is installed (Vite plugin + dependency) but most pages do not use Tailwind classes heavily.
- `src/utils/theme.js` provides a central theme object and helper functions:
  - `createServiceBackground(mousePos, service)`
  - `createHoverCard(service, isHovered)`

---

## Key UI pages (what they contain)

### Landing (`/`)
File: `src/pages/LandingPage.tsx`

- Hub that routes to:
  - `/events`
  - `/travel`
  - `/foundation`
- Uses assets:
  - `src/assets/SUGLogo.png`
  - `src/assets/SUGTravel.jpg`
  - `src/assets/SUGFoundation.png`
  - `src/assets/SUGEvent.jpg`

### Events (`/events`)
Files:
- Page: `src/pages/Events/index.tsx`
- Header: `src/pages/Events/eventHeader.tsx`
- Subpages:
  - `/aboutus` → `src/pages/Events/aboutUs.tsx`
  - `/eventclients` → `src/pages/Events/clients.tsx`
  - `/eventimages` → `src/pages/Events/images.tsx`

Key assets:
- Hero: `src/assets/wedding hero.jpg`
- Gallery: `src/assets/wedding/*`, `src/assets/corporate/*`
- Clients: `src/assets/client/*`

### Foundation (`/foundation`)
Files:
- Page: `src/pages/Foundation/index.tsx`
- Header: `src/pages/Foundation/foundationHeader.tsx`
- Gallery: `src/pages/Foundation/gallery.tsx`
- Donations: `src/pages/Foundation/donation.tsx`

Key assets:
- Hero: `src/assets/ngo-hero.jpg`
- Focus area images: `src/assets/Foundation/NGOPic*.jpg`
- Media coverage: `src/assets/news/newspaper*.jpg`
- Gallery: `src/assets/ngo/*`
- Donation logo: `src/assets/axislogo.png`

### Travel (`/travel`)
Files:
- Page: `src/pages/Travel/index.tsx`
- Header: `src/pages/Travel/travelHeader.tsx`
- Tours:
  - `/nepal` → `src/pages/Travel/Tours/nepal.tsx`
  - `/india` → `src/pages/Travel/Tours/india.tsx`
  - `/buddhacircuit` → `src/pages/Travel/Tours/buddhaCircuit.tsx`
  - `/holidaypackage` → `src/pages/Travel/Tours/holidayPackage.tsx`

Key assets:
- Hero: `src/assets/nepal-tour.jpg`
- Destination cards: `src/assets/travel/Bihar.jpeg`, `src/assets/travel/India.jpeg`, `src/assets/travel/Nepal.jpeg`
- Tour package images:
  - `src/assets/travel/nepal/*`
  - `src/assets/travel/india/*`
  - `src/assets/travel/buddha/*`
  - `src/assets/travel/holiday/*`

---

## Shared components

### Footer
File: `src/components/footer.tsx`

- Contains:
  - Company info + logo (`src/assets/logo.png`)
  - Social links (mailto + WhatsApp)
  - “Quick Links” (some are placeholders or point to non-existent routes)
  - Contact info and office addresses
  - Bottom bar includes `/privacy` and `/terms` links (routes not defined in `App.tsx`)

### OptimizedImage
File: `src/components/OptimizedImage.tsx`

- IntersectionObserver lazy-load wrapper
- Optional placeholder support
- Used for performance on image-heavy pages (but many pages still use raw `<img>` directly)

---

## Static assets & public files

### `src/assets/**` (bundled)
Contains all primary imagery, grouped roughly as:

- `client/` — client logos/photos
- `corporate/` — corporate event photos
- `wedding/` — wedding event photos
- `ngo/`, `Foundation/` — foundation images
- `news/` — newspaper clippings
- `travel/` — travel packages, destinations
- plus miscellaneous logos/hero images in `src/assets/*`

### `public/**` (served as-is)
Contains:
- `404.html` for GitHub Pages SPA redirect
- PWA icons / favicons
- `CNAME` (GitHub Pages custom domain)
- `manifest.webmanifest` is generated into `dist/` by build/PWA plugin

---

## Deployment model (as currently set up)

### Frontend
Likely deployed via **GitHub Pages**:
- `npm run deploy` uses `gh-pages -d dist`
- `public/404.html` supports SPA routing on GitHub Pages

### Backend
The contact service base URL indicates a deployment at:
- `https://staruniversalgroup-be.onrender.com/api`

Backend is likely deployed to Render (common with Resend docs in repo).

---

## Postman collection
File: `Star_Universal_Contact_APIs.postman_collection.json`

Contains saved requests for the contact APIs (useful for testing backend).

---

## Known issues / drift (important for an AI maintainer)

- **`src/api/api.js` baseURL fallback is ineffective** because it uses:
  - `"https://...onrender.com/api" || "http://localhost:4000/api"`
  - The localhost fallback will never be chosen. Consider swapping order or using an env var.

- **Routes referenced but not implemented in `App.tsx`**:
  - Footer links: `/about`, `/contact`, `/privacy`, `/terms`
  - `src/utils/axiosInstance.ts` redirects to `/login` on 401
  - Some Travel tour pages navigate to `"/contact"` (not defined); correct route is likely `/contact-travel`.

- **Potential syntax error in `src/pages/Foundation/gallery.tsx`**:
  - There is a truncated token (`impo`) visible near the imports, which may break compilation.
  - If you see build failures, start by fixing this file.

---

## “How to run” (local)

### Frontend
From repo root:
- Install: `npm install`
- Dev: `npm run dev`

Vite dev ports:
- `vite.config.ts` sets `server.port = 3000`
- README mentions `5173` (may be out-of-date)

### Backend (contact/email server)
From `server/`:
- Install: `npm install`
- Run: `npm run dev` or `npm run start`

You must set backend env vars (`RESEND_API_KEY`, `RECIPIENT_EMAIL`, optional `FROM_EMAIL`).

---

## If another AI needs to extend the project

### Adding a new page/route
1. Create page under `src/pages/...`
2. Add a `<Route>` entry in `src/App.tsx`
3. Update the appropriate header component nav list (Events/Foundation/Travel) and/or footer links.

### Adding/using assets
- Add images under `src/assets/<bucket>/...`
- Import into TSX/JSX (`import img from '.../assets/...';`) and use as `<img src={img} />`.

### Changing contact form behavior
- Frontend: edit `src/pages/ContactUs/*.jsx` and `src/api/contactService.js`.
- Backend: edit `server/server.js` endpoints and email templates (`formatEmailHTML`, `formatEmailText`).


