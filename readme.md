# VerfiX — Production-Ready Static Website

## ✅ Production Status
- 51 HTML pages
- All paths root-relative (/css/, /js/, /assets/)
- Vercel-ready — `vercel.json` configured with 77 rewrites
- GA4 G-95ZS424SMP active
- Calendly https://calendly.com/ahmed-ahmed-alsultan/30min active
- Zoho CRM forms wired
- 0 production errors

---

## 🚀 Deploy to Vercel (step-by-step)

### Option A: Vercel Dashboard (no CLI needed)
1. Go to https://vercel.com → Log in
2. Click **"Add New Project"**
3. Click **"Upload"** (or connect GitHub — see Option B)
4. Drag and drop the entire `verfix-multipage/` folder
5. Vercel auto-detects: **Framework = Other** (static site)
6. **Build Command**: leave empty (nothing to build)
7. **Output Directory**: leave as `.` (root)
8. Click **Deploy**
9. Done — your site is live at `your-project.vercel.app`
10. Add custom domain `verfix.ch` in Project → Settings → Domains

### Option B: Vercel CLI
```bash
# Install Vercel CLI once
npm install -g vercel

# From inside the verfix-multipage/ folder:
cd verfix-multipage
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: your account
# - Link to existing project? N
# - Project name: verfix
# - In which directory is your code? ./
# - Build command: (leave empty — press Enter)
# - Output directory: ./  (press Enter)
# - Deploy: Y

# Production deploy:
vercel --prod
```

### Option C: GitHub → Vercel (recommended for ongoing updates)
1. Push the `verfix-multipage/` contents to a GitHub repo
2. Connect repo in Vercel dashboard
3. Every `git push` auto-deploys
4. No build command, output directory = `.`

---

## 🌐 Custom Domain Setup (verfix.ch)

1. In Vercel project → **Settings → Domains**
2. Add `verfix.ch` and `www.verfix.ch`
3. Vercel shows DNS records — add them at your domain registrar:
   - **A record**: `76.76.21.21` (Vercel IP)
   - **CNAME**: `www` → `cname.vercel-dns.com`
4. SSL certificate is automatic (Let's Encrypt)

---

## 💻 Local Preview (while developing)

```bash
cd verfix-multipage
python serve.py
```
Open: **http://localhost:8080**

> ⚠️ Do NOT open index.html directly via File Explorer.
> Root-relative paths (/css/, /assets/) require a local server.

---

## 📁 File Structure
```
verfix-multipage/
├── index.html          ← Homepage
├── css/main.css        ← All styles (109KB)
├── js/main.js          ← All scripts (29KB)
├── assets/
│   ├── images/         ← Logos, OG image
│   ├── team/           ← ⚠ ADD team photos here
│   └── downloads/      ← ⚠ ADD whitepaper PDF here
├── de/                 ← German pages
├── fr/                 ← French pages
├── en/                 ← English pages
├── insights/           ← Blog articles
├── vercel.json         ← Routing + headers config
├── sitemap.xml         ← 45 URLs
└── robots.txt
```

---

## ⚠️ Manual Actions Before Go-Live

| Action | What | Where |
|--------|------|-------|
| Upload team photos | ahmed-sherwed.jpeg, manel-mhamdi.jpeg, petter-stahle.jpeg | `/assets/team/` |
| Upload whitepaper PDF | verfix-nfadp-whitepaper.pdf | `/assets/downloads/` |
| Activate Zoho SalesIQ | Paste widget script | `<head>` of all pages (placeholder comment already there) |
| Submit sitemap | After first deploy | Google Search Console → verfix.ch/sitemap.xml |
