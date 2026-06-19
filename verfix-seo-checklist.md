# VerfiX — 40 SEO & Growth Actions

> All templates are copy-paste ready. Items marked ✅ Done are already implemented in the codebase — action is to verify/maintain post-deployment.

| # | Action | Type | Implementation (1 sentence) | Template |
|---|--------|------|-----------------------------|----------|
| 1 | **Submit sitemap to Google Search Console** | Tech | Go to search.google.com/search-console → Sitemaps → paste `https://verfix.ch/sitemap.xml` → Submit. | No |
| 2 | **Verify ownership in Google Search Console** | Tech | Add the GSC HTML meta tag to `<head>` of `index.html` and redeploy (takes 30 seconds). | **Yes** ↓ |
| 3 | **Add Google Search Console HTML verify tag** | Tech | Replace `XXXXXX` with your actual GSC verification code and paste before `</head>`. | **Yes** ↓ |
| 4 | **Submit sitemap to Bing Webmaster Tools** | Tech | Register at bing.com/webmasters, verify via DNS TXT record, then submit `https://verfix.ch/sitemap.xml`. | No |
| 5 | **Add Article schema to every blog post** | Schema | All 7 `/insights/` articles already have Article JSON-LD — verify post-deploy with Google Rich Results Test at each URL. | **Yes** ↓ |
| 6 | **Add SiteLinksSearchBox schema to homepage** | Schema | Paste the WebSite schema with `potentialAction` into `index.html` `<head>` to enable Google sitelinks search. | **Yes** ↓ |
| 7 | **Add SoftwareApplication schema to /solutions** | Schema | Paste the SoftwareApplication JSON-LD block into `solutions.html` to signal product category to Google. | **Yes** ↓ |
| 8 | **Add LocalBusiness schema with Swiss address** | Schema | LocalBusiness schema is already present — update `streetAddress`, `postalCode`, `addressLocality` with real VerfiX AG registered address. | **Yes** ↓ |
| 9 | **Create a /partners page** | Content | Build a page listing technology and channel partners with logos and descriptions — partner pages earn backlinks and signal ecosystem maturity. | No |
| 10 | **Publish one new blog post per month** | Content | Schedule 12 articles from the 30-post idea list already generated — assign one per month and set a calendar reminder. | No |
| 11 | **Add "Last Updated" date to every blog post** | Content | Add `<time datetime="2025-06-15">Updated June 2025</time>` below the article byline so Google treats content as fresh. | **Yes** ↓ |
| 12 | **Add estimated reading time to all articles** | UX | All 7 articles already have `14 min read` badges — ensure this is visible above the fold in the hero section. | No |
| 13 | **Create a /glossary page (KYC/AML terms)** | Content | Build a single long-form page defining 25+ compliance terms (KYC, KYB, AML, PEP, UBO, FINMA, nFADP, eIDAS) — earns informational backlinks. | No |
| 14 | **Add internal links from each blog post to /solutions** | Content | In each `/insights/` article, find the first mention of "KYC", "AML", or "verification" and wrap it with `<a href="/solutions">`. | **Yes** ↓ |
| 15 | **Implement Hreflang for all language variants** | Tech | Hreflang is already on `/de/`, `/fr/`, `/en/` pages — after deploy, validate at hreflangvalidator.com to confirm no conflicts. | No |
| 16 | **Add Open Graph image for each blog post** | Tech | Add a unique `og:image` meta tag to each article pointing to a 1200×630 cover image at `/assets/images/og/article-slug.png`. | **Yes** ↓ |
| 17 | **Compress all images with WebP and lazy loading** | Speed | All Petter and logo images already use `.webp` + `loading="lazy"` — verify after deploy with PageSpeed Insights → Images section. | No |
| 18 | **Add `font-display: swap` to Google Fonts** | Speed | Append `&display=swap` to every Google Fonts `<link>` URL in the `<head>` so text renders immediately while fonts load. | **Yes** ↓ |
| 19 | **Preload the critical CSS file** | Speed | Add `<link rel="preload" href="/css/main.css" as="style">` in `<head>` before the `<link rel="stylesheet">` tag. | **Yes** ↓ |
| 20 | **Add `dns-prefetch` for third-party domains** | Speed | Add four `<link rel="dns-prefetch">` tags for Calendly, GA4, Font Awesome, and Zoho so DNS resolves in advance. | **Yes** ↓ |
| 21 | **Set cache headers for static assets** | Speed | Cache headers for `/css/`, `/js/`, and `/assets/` are already set to `max-age=31536000, immutable` in `vercel.json`. | No |
| 22 | **Create a LinkedIn company page and complete all fields** | Outreach | Go to linkedin.com/company/setup → fill legal name "VerfiX AG", tagline, website, industry "Financial Services", Swiss headquarters. | No |
| 23 | **Post a LinkedIn article each time a blog goes live** | Outreach | Draft a 150-word LinkedIn post summarising the key insight from each `/insights/` article and add the URL in the first comment (not the post body). | **Yes** ↓ |
| 24 | **Get listed on Swiss Fintech startup directories** | Backlinks | Submit VerfiX to Swiss Fintech Map (fintechmap.ch), FinTech Switzerland (fintechswitzerland.com), and IFZ Fintech Database with the description template below. | **Yes** ↓ |
| 25 | **Submit to Product Hunt** | Backlinks | Go to producthunt.com/posts/new → complete the submission form using the tagline and description template below → schedule launch for a Tuesday morning UTC. | **Yes** ↓ |
| 26 | **Create a Crunchbase profile** | Backlinks | Go to crunchbase.com/organization/new → enter legal name "VerfiX AG", country Switzerland, category Identity Verification, use the company description template below. | **Yes** ↓ |
| 27 | **Submit to G2 Identity Verification category** | Backlinks | Create a free vendor profile at g2.com/products/new → category "Identity Verification" → ask three clients to leave a review within the first month. | No |
| 28 | **Pitch FINMA/nFADP compliance articles to Swiss finance media** | Outreach | Email the editors of finews.ch, paymentandbanking.com, and fuw.ch with the pitch email template below offering a 600-word expert column on nFADP. | **Yes** ↓ |
| 29 | **Apply for SEBA Bank / Sygnum fintech partnership** | Outreach | Send the partnership email template below to partnerships@seba.swiss and partnerships@sygnum.com proposing API integration for their KYC onboarding. | **Yes** ↓ |
| 30 | **Add a "Press" page with downloadable media kit** | Content | Press page already exists at `/press` — add a ZIP download of the media kit (logo SVG, PNG, brand guidelines PDF) and an embargo email contact. | **Yes** ↓ |
| 31 | **Create canonical tags on all paginated or duplicate URLs** | Tech | Every page already has `<link rel="canonical">` — verify that canonical points to the clean URL (e.g. `/solutions` not `/solutions/`) for every page after deploy. | No |
| 32 | **Add `rel="noopener noreferrer"` to all external links** | Tech | Run `grep -r 'target="_blank"' /insights/` and verify every result also has `rel="noopener noreferrer"` — all current articles comply. | No |
| 33 | **Add structured data for the `/pricing` page** | Schema | Add an `Offer` or `PriceSpecification` JSON-LD block to `pricing.html` describing the Starter and Enterprise tiers. | **Yes** ↓ |
| 34 | **Build a /changelog or /updates page** | Content | Create a simple `changelog.html` listing product updates by month — Google rewards sites with active update signals, and compliance buyers want to see product momentum. | No |
| 35 | **Add `<meta name="robots" content="max-snippet:-1">` to articles** | Tech | Add the max-snippet directive to all `/insights/` article `<head>` blocks so Google can show extended preview snippets in search results. | **Yes** ↓ |
| 36 | **Implement a cookie-free analytics alternative (Plausible/Fathom)** | Tech | Add Plausible (`<script defer data-domain="verfix.ch" src="https://plausible.io/js/script.js"></script>`) alongside GA4 for a GDPR-friendly analytics view. | **Yes** ↓ |
| 37 | **Add an email capture to the whitepaper download page** | UX | Replace the direct PDF link on `/en/whitepaper-nfadp/` with a Zoho form that emails the PDF link — capturing the lead before the download. | No |
| 38 | **A/B test two hero CTAs on the homepage** | UX | Set up a Vercel Edge Config experiment serving 50% of visitors "Book a Demo" and 50% "See How It Works" — measure Calendly opens per session. | No |
| 39 | **Apply for inclusion in FINMA's RegTech registry** | Local | Email regtech@finma.ch with a one-page product summary describing VerfiX's role in supporting FINMA-supervised institutions with KYC compliance. | **Yes** ↓ |
| 40 | **Monitor branded and competitor keywords weekly** | Outreach | Set up free Google Alerts for "VerfiX", "Swiss KYC software", "FINMA KYC", "Onfido Switzerland", and "IDnow Switzerland" at google.com/alerts. | No |

---

## TEMPLATES

### #2 + #3 — Google Search Console Verification Tag
```html
<!-- Replace XXXXXXXXXXXXXX with your actual GSC code -->
<meta name="google-site-verification" content="XXXXXXXXXXXXXX" />
```

---

### #5 — Article JSON-LD (already on all blog posts — reference)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ARTICLE TITLE HERE",
  "datePublished": "2025-06-15",
  "dateModified": "2025-06-15",
  "author": { "@type": "Organization", "name": "VerfiX AG", "url": "https://verfix.ch" },
  "publisher": {
    "@type": "Organization",
    "name": "VerfiX AG",
    "logo": { "@type": "ImageObject", "url": "https://verfix.ch/assets/images/verfix-logo.png" }
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://verfix.ch/insights/SLUG" }
}
```

---

### #6 — SiteLinksSearchBox Schema (add to `index.html` `<head>`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "VerfiX",
  "url": "https://verfix.ch",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://verfix.ch/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
</script>
```

---

### #7 — SoftwareApplication Schema (add to `solutions.html` `<head>`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VerfiX",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://verfix.ch",
  "description": "Swiss-hosted KYC, AML screening, KYB, and identity verification platform for regulated industries.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CHF",
    "price": "0",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "priceType": "https://schema.org/InvoicePrice",
      "description": "Per successful verification. Contact for quote."
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "VerfiX AG",
    "url": "https://verfix.ch",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CH"
    }
  }
}
</script>
```

---

### #8 — LocalBusiness Schema (update with real address after registration)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VerfiX AG",
  "url": "https://verfix.ch",
  "email": "contact@verfix.ch",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR STREET ADDRESS",
    "postalCode": "YOUR POSTAL CODE",
    "addressLocality": "Bern",
    "addressRegion": "BE",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.9480,
    "longitude": 7.4474
  },
  "sameAs": [
    "https://www.linkedin.com/company/verfix/",
    "https://github.com/Ahmed-alsultan/VerfiX"
  ]
}
</script>
```

---

### #11 — "Last Updated" date HTML block (add below article byline)
```html
<div style="font-size:.78rem;color:var(--lt);display:flex;align-items:center;gap:.4rem;">
  <i class="fas fa-rotate" style="font-size:.65rem;"></i>
  Last updated <time datetime="2025-06-15">June 15, 2025</time>
</div>
```

---

### #14 — Internal link from blog posts to /solutions
```html
<!-- In article body, wrap first KYC mention: -->
<a href="/solutions" style="color:var(--r);font-weight:600;text-decoration:none;"
   onmouseover="this.style.textDecoration='underline'"
   onmouseout="this.style.textDecoration='none'">KYC verification</a>
```

---

### #16 — Open Graph image meta tag (add to each blog post `<head>`)
```html
<!-- Create a 1200×630 image at /assets/images/og/article-slug.png -->
<meta property="og:image" content="https://verfix.ch/assets/images/og/finma-kyc-checklist-2025.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:image:alt" content="FINMA KYC Compliance Checklist 2025 — VerfiX"/>
<meta name="twitter:image" content="https://verfix.ch/assets/images/og/finma-kyc-checklist-2025.png"/>
```

---

### #18 — Google Fonts with display=swap
```html
<!-- Replace existing Google Fonts link with this: -->
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet"/>
```

---

### #19 — Preload critical CSS
```html
<!-- Add immediately inside <head>, before the stylesheet link -->
<link rel="preload" href="/css/main.css" as="style"/>
```

---

### #20 — DNS prefetch for third-party domains
```html
<link rel="dns-prefetch" href="https://assets.calendly.com"/>
<link rel="dns-prefetch" href="https://www.googletagmanager.com"/>
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com"/>
<link rel="dns-prefetch" href="https://crm.zoho.eu"/>
```

---

### #23 — LinkedIn post template (use when publishing a new blog post)
```
🔒 New compliance guide for Swiss banks:

[ARTICLE TITLE]

We cover:
→ [Point 1 from article]
→ [Point 2 from article]
→ [Point 3 from article]

With Switzerland on the FATF grey list, FINMA inspections are becoming more rigorous. Here's what compliance officers need to know.

👇 Full article in the first comment.

#FINMA #KYC #SwissBanking #Compliance #AML #nFADP
```
*Post the URL as the first comment, not in the post body — this preserves LinkedIn reach.*

---

### #24 — Swiss Fintech Directory submission description
```
Company: VerfiX AG
Website: https://verfix.ch
Category: RegTech / Identity Verification / KYC/KYB
Founded: 2024
Headquarters: Switzerland
Stage: Early Stage

Short description (150 chars):
Swiss-hosted KYC, AML, and KYB platform for regulated industries. FINMA Circular 2016/7 compliant. One REST API. Go live in 48 hours.

Long description:
VerfiX AG provides Swiss-hosted identity verification and trust infrastructure for regulated industries including banking, fintech, crypto, insurance, and government. Our platform delivers document verification (4,500+ document types, 190+ countries), biometric face matching with liveness detection, AML screening against 60+ global lists, KYB and UBO verification, and the Trust Engine™ risk scoring layer — all via a single REST API. All data is processed and stored exclusively in Switzerland, meeting nFADP and FINMA data residency requirements. FINMA Circular 2016/7 compliant. Integration in under 48 hours.
```

---

### #25 — Product Hunt submission
```
Name: VerfiX
Tagline: Swiss KYC & AML platform for regulated industries — FINMA-compliant, Swiss-hosted

Description:
VerfiX is the identity verification and trust infrastructure platform built for regulated industries in Switzerland and Europe.

What makes it different:
🇨🇭 100% Swiss-hosted — all data stays in Switzerland (nFADP + FINMA compliant)
⚡ One REST API for KYC, KYB, AML screening, and fraud intelligence
🔒 Trust Engine™ — composite risk score 0–100 with configurable decision rules
📋 FINMA Circular 2016/7 compliant, GwG Art. 3 & 4 ready
⏱ Go live in under 48 hours

Built for: Swiss banks, cantonal banks, fintechs, crypto exchanges, insurers, government

Makers: Ahmed Al-Sultan (Founder & CEO)
Website: https://verfix.ch
```

---

### #26 — Crunchbase company description
```
VerfiX AG is a Swiss identity verification and trust infrastructure company. The VerfiX platform provides KYC, KYB, AML screening, biometric verification, and fraud intelligence for regulated industries via a single REST API. All data is processed exclusively in Switzerland. The platform meets FINMA Circular 2016/7, Swiss nFADP, and GwG Art. 3 & 4 requirements. Founded in 2024, headquartered in Switzerland.

Categories: Identity Verification, RegTech, Compliance, Financial Services, API
```

---

### #28 — Media pitch email (finews.ch / paymentandbanking.com)
```
Subject: Expert column offer: What Swiss banks must do for FINMA KYC compliance in 2025

Dear [Editor name],

Switzerland's FATF grey listing has made FINMA KYC compliance the top priority for Swiss compliance teams in 2025. I'd like to offer a 600-word expert column for [Publication name] covering:

1. What changed after the FATF grey listing
2. The 7 KYC obligations Swiss banks cannot afford to miss
3. How technology is closing the compliance gap

I'm Ahmed Al-Sultan, Founder & CEO of VerfiX AG, a Swiss identity verification platform built for regulated industries. We work directly with Swiss banks on FINMA-compliant KYC programmes.

The piece would be editorially independent, not promotional. Happy to tailor the angle to your readership.

Would this be of interest? I can have a draft to you within one week.

Best regards,
Ahmed Al-Sultan
Founder & CEO, VerfiX AG
contact@verfix.ch | https://verfix.ch
```

---

### #29 — Partnership email (Swiss crypto banks / fintechs)
```
Subject: API partnership proposal — FINMA-compliant KYC for [Bank name]'s onboarding

Dear [Name],

[Bank name] operates in one of the most demanding KYC environments in the world. I'd like to propose a technical integration between VerfiX and [Bank name]'s onboarding workflow that could reduce your KYC onboarding time significantly while strengthening your FINMA audit trail.

VerfiX is a Swiss-hosted identity verification platform offering:
→ Document verification + face biometrics + liveness in <3 seconds
→ AML screening (SECO, UN, EU, OFAC, PEP) with configurable thresholds
→ KYB + UBO verification via Zefix and EU registry integration
→ Trust Engine™ composite risk scoring
→ FINMA Circular 2016/7 compliant, 100% Swiss data residency

Integration is via REST API and typically takes 1–2 days. We have an existing sandbox you can evaluate immediately.

Could we arrange a 20-minute technical call this week or next?

Best regards,
Ahmed Al-Sultan
Founder & CEO, VerfiX AG
https://verfix.ch | contact@verfix.ch
```

---

### #30 — Press page media kit download HTML block
```html
<div style="background:var(--off);border:1px solid var(--bd);border-radius:12px;padding:1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;flex-wrap:wrap;">
  <div>
    <h3 style="font-size:.95rem;font-weight:800;color:var(--t);margin-bottom:.3rem;">VerfiX Media Kit</h3>
    <p style="font-size:.84rem;color:var(--m);">Logos (SVG + PNG), brand colours, executive bios, and company fact sheet.</p>
  </div>
  <a href="/assets/downloads/verfix-media-kit.zip" download class="btn btn-r" onclick="trackCTA('press_media_kit')">
    <i class="fas fa-download"></i> Download Media Kit
  </a>
</div>
```

---

### #33 — Offer Schema for `/pricing` page
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "VerfiX Identity Verification Platform",
  "description": "Swiss-hosted KYC, AML screening, KYB, and Trust Engine™ for regulated industries.",
  "brand": { "@type": "Brand", "name": "VerfiX" },
  "url": "https://verfix.ch/pricing",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "description": "Pay-per-verification. Document verification, face matching, AML screening, REST API.",
      "priceCurrency": "CHF",
      "priceSpecification": { "@type": "UnitPriceSpecification", "description": "Per successful verification, volume-tiered" },
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "VerfiX AG" }
    },
    {
      "@type": "Offer",
      "name": "Enterprise",
      "description": "Custom pricing with SLA, dedicated account manager, Swiss data residency, Trust Engine™.",
      "priceCurrency": "CHF",
      "priceSpecification": { "@type": "UnitPriceSpecification", "description": "Negotiated rate, custom SLA" },
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "VerfiX AG" }
    }
  ]
}
</script>
```

---

### #35 — Max-snippet robots meta (add to all article `<head>`)
```html
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
```

---

### #36 — Plausible Analytics (cookie-free, add alongside GA4)
```html
<!-- Cookie-free analytics — no consent banner needed -->
<script defer data-domain="verfix.ch" src="https://plausible.io/js/script.js"></script>
```

---

### #39 — FINMA RegTech email
```
Subject: VerfiX AG — RegTech platform supporting FINMA-supervised institutions

Dear FINMA RegTech team,

I am writing to introduce VerfiX AG, a Swiss identity verification and compliance infrastructure company founded in 2024.

VerfiX provides FINMA-supervised financial intermediaries with a fully Swiss-hosted platform for:
• Client identification under GwG Art. 3 (FINMA Circular 2016/7 compliant)
• Beneficial owner identification under GwG Art. 4
• AML screening (SECO, UN, EU, OFAC, PEP registries)
• KYB and UBO verification
• FINMA-inspection-ready audit trail with 10-year retention

We would welcome the opportunity to be included in FINMA's RegTech resources or to discuss how VerfiX can support supervised institutions in meeting their compliance obligations more efficiently.

Further information: https://verfix.ch/trust-center

Yours sincerely,
Ahmed Al-Sultan
Founder & CEO, VerfiX AG
contact@verfix.ch
```
