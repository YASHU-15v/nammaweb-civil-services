# nammaweb — AI for Civil Services, KAS & Govt Exams

A static, responsive marketing site for nammaweb: AI-mentor-led coaching for
KAS, UPSC CSE and Karnataka government exams. No build step, no framework —
plain HTML, CSS and JavaScript, ready to host on GitHub Pages.

## What's inside

```
nammaweb/
├── index.html          Home page — hero, mentor program, career paths,
│                        exam tracks, pricing/booking, blog teasers, contact
├── blog.html            Full blog articles (linked from the home page)
├── css/style.css        Design system and all page styling
├── js/script.js         Mobile nav, WhatsApp popup, per-plan WhatsApp links
├── assets/
│   ├── logo.png          Logo with transparent background (used on the site)
│   └── logo.jpeg         Original logo file, kept for reference
└── README.md
```

## Editing the essentials

- **WhatsApp number** — set once, at the top of `js/script.js`:
  ```js
  var WHATSAPP_NUMBER = "917204248002"; // +91 72042 48002
  ```
- **Email** — `info@nammaweb.com` appears in `index.html`, `blog.html` and the
  page `<meta>` tags. Search and replace if it changes.
- **Prices / plan lengths** — in `index.html`, inside `<section id="pricing">`.
- **Blog posts** — each `<article class="article" id="...">` block in
  `blog.html`; the teaser cards linking to them live in `index.html` under
  `<section id="blog">`.

## Running it locally

No build tools are needed. Either open `index.html` directly in a browser, or
serve the folder so relative paths behave exactly as they will in production:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `nammaweb-website`) and push this
   folder's contents to its `main` branch:
   ```bash
   cd nammaweb
   git init
   git add .
   git commit -m "Initial nammaweb site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`, then **Save**.
4. GitHub Pages will publish the site at
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.
5. Optional — to use `www.nammaweb.com` instead of the github.io address, add
   a `CNAME` file containing just the domain, and point your domain's DNS at
   GitHub Pages (see GitHub's "Managing a custom domain" docs for the exact
   records).

## Notes

- The site is fully responsive (mobile, tablet, desktop) and has no external
  JavaScript dependencies — only Google Fonts is loaded over the network.
- The floating WhatsApp button in the bottom-right corner opens a small
  in-page popup; its "Chat on WhatsApp" button, and every "Book" button on
  the pricing plans, link to `wa.me/917204248002` with a pre-filled message
  naming the plan the visitor is interested in.
