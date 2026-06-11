# VerfiX Website — Production Build

**Swiss Trust Infrastructure for Regulated Industries**  
Domain: `verfix.ch`

---

## Quick Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
# or drag folder to vercel.com
```

### Netlify
Drag the entire folder to [netlify.com](https://netlify.com) → new site.

### Apache / cPanel
Upload all files to `public_html/`. `.htaccess` handles HTTPS and routing.

---

## Project Structure

```
verfix-website/
├── index.html              ← Complete SPA (all pages)
├── css/main.css            ← All styles (86KB)
├── js/main.js              ← All JavaScript (33KB)
│
├── assets/
│   ├── images/
│   │   ├── verfix-logo.png             ← Nav logo
│   │   ├── verfix-logo--footer.png     ← Footer logo
│   │   └── og-image.jpg                ← Social sharing (1200×630)
│   └── team/
│       ├── ahmed-sherwed.jpeg          ← Founder & CEO
│       ├── manel-mhamdi.jpeg           ← Business Development
│       └── petter-stahle.jpeg          ← AI & Technology Lead
│
├── vercel.json             ← Vercel config (headers + SPA routing)
├── _headers                ← Netlify / Cloudflare Pages headers
├── _redirects              ← Netlify SPA routing
├── .htaccess               ← Apache config
├── robots.txt              ← SEO crawler rules
└── sitemap.xml             ← Search engine sitemap
```

---

## Setup Checklist

### 1. Formspree (Contact Form)
1. Go to [formspree.io](https://formspree.io) → create a free account
2. Create a new form → copy the form ID (e.g. `xbjnakvp`)
3. In `js/main.js`, replace:
   ```js
   var FORMSPREE_CONTACT = 'YOUR_FORMSPREE_ID';
   var FORMSPREE_DEMO    = 'YOUR_FORMSPREE_ID';
   ```

### 2. Google Analytics 4
1. Go to [analytics.google.com](https://analytics.google.com) → create GA4 property
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. In `js/main.js`, replace:
   ```js
   var GA4_ID = 'G-XXXXXXXXXX';
   ```
   Analytics only loads after cookie consent.

### 3. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `verfix.ch`
3. In `index.html` `<head>`, uncomment:
   ```html
   <meta name="google-site-verification" content="YOUR_GSC_CODE"/>
   ```
4. Submit `https://verfix.ch/sitemap.xml`

### 4. Domain DNS
Point `verfix.ch` to your host:

**Vercel:**
```
A     @    76.76.21.21
CNAME www  cname.vercel-dns.com
```

**Netlify:**
```
A     @    75.2.60.5
CNAME www  your-site.netlify.app
```

---

## Pages

| Page | nav ID |
|------|--------|
| Home | `home` |
| Solutions | `solutions` |
| Industries | `industries` |
| Gateway | `gateway` |
| API Docs | `apidocs` |
| Trust Center | `trustcenter` |
| Case Studies | `casestudies` |
| Careers | `careers` |
| Press & Media | `press` |
| About | `about` |
| Contact | `contact` |
| Privacy | `privacy` |

---

## After Deployment

- [ ] Test contact form (sends to Formspree)
- [ ] Verify OG preview at [opengraph.xyz](https://opengraph.xyz)
- [ ] Submit sitemap to Google Search Console
- [ ] Test JSON-LD at [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Run Lighthouse audit (target 90+)
- [ ] Test on iOS Safari and Android Chrome

---

*VerfiX AG · Switzerland · hello@verfix.ch*
