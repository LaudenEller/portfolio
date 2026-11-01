# laudeneller.com

Lauden Eller's portfolio: a single-page React site with an intro, an ESG highlight (Better Portfolios), case studies
from client work, and a contact footer. Live at **https://www.laudeneller.com**.

Built with Create React App (React 18), react-router 6, Bootstrap 5 CSS and GSAP. Hosted on Vercel.

## Run, test, build

```bash
npm install                            # once, or after dependencies change
npm start                              # dev server at http://localhost:3000
CI=true npm test -- --watchAll=false   # smoke test (src/App.test.js)
CI=true npm run build                  # production build; with CI=true, lint warnings fail the build (as on Vercel)
```

## Deploy

Vercel builds every push:

- **Branch** (e.g. `icm/…`) → a preview URL (login-protected). Check it on desktop and phone.
- **Merge a PR into `main`** → production at laudeneller.com.
- **Rollback:** Vercel → Deployments → pick the previous production deployment → **Instant Rollback**.

### Environment variables (Vercel → Settings → Environment Variables)

| Name | Used for |
| --- | --- |
| `REACT_APP_EMAILJS_SERVICE_ID` | Contact form (EmailJS) |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | Contact form (EmailJS) |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | Contact form (EmailJS) |

Until all three are set, the footer button opens an email (`mailto:`) instead of the form. They're baked in at build
time, so redeploy after changing them. Keep local copies in `.env` (git-ignored); never commit it.

## Where things live

| What | Where |
| --- | --- |
| Page sections, in order | `src/pages/Home.js` (Hero → Highlights → Work examples); navbar and footer in `src/layouts/MainLayout.js` |
| Case-study list (title, summary, colours, tech, role, demo/code links, published flag) | `accordionData` in `src/components/WorkExamples/WorkExamples1.js` |
| Each case study's article | `src/components/WorkExamples/<Client>.js` |
| Hero lines | `src/components/Hero/Hero.js` |
| About paragraph | `src/components/About/AboutParagraph.js` |
| ESG / Better Portfolios text | `src/components/ProjectHighlights/Highlights.js` |
| Nav links and social profiles | `src/components/Navbar/Navbar1.js` (a social icon shows once its `href` is set) |
| Theme colours (light/dark) | `src/styles/themes.css` |
| Images, logo, icons | `public/assets/` |
| Share card (Open Graph / Twitter) | `public/index.html` + `public/og-image.jpg` (1200×630) |
| Old code, kept for reference | `_legacy/` (outside `src/`, so it isn't built, linted or tested) |

### Common edits

- **Publish or hide a case study:** set `published: true/false` in `accordionData`.
- **Add a demo or code link:** fill `demo` / `code` in `accordionData`. Empty links aren't shown.
- **Add a case study:** create `src/components/WorkExamples/<Client>.js` (copy an existing one), import it in
  `WorkExamples1.js`, and add an `accordionData` entry with a unique `id`.

## Accessibility

Animations respect the visitor's **reduced motion** setting (no typing, pinning or logo drawing). Phones, touch screens
and reduced-motion visitors get a simple accordion with normal page scrolling. Case studies open with the keyboard
(Tab to a title, Enter or Space).
