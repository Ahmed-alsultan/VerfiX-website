
/**
 * VerfiX Breadcrumb Schema Generator
 * Usage: add getBreadcrumbSchema(items) result to <head> as JSON-LD
 *
 * @param {Array<{name: string, url: string}>} items
 * @returns {string} JSON-LD script tag
 */
function getBreadcrumbSchema(items) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": "https://verfix.ch" + item.url
    }))
  };
  return '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>';
}

// ── Templates for each page type ──

const BREADCRUMBS = {
  home: [
    { name: "VerfiX", url: "/" }
  ],
  solutions: [
    { name: "VerfiX", url: "/" },
    { name: "Solutions", url: "/solutions" }
  ],
  api: [
    { name: "VerfiX", url: "/" },
    { name: "Resources", url: "/resources" },
    { name: "API Reference", url: "/api" }
  ],
  trustCenter: [
    { name: "VerfiX", url: "/" },
    { name: "Trust Center", url: "/trust-center" }
  ],
  caseStudies: [
    { name: "VerfiX", url: "/" },
    { name: "Case Studies", url: "/case-studies" }
  ],
  resources: [
    { name: "VerfiX", url: "/" },
    { name: "Resources", url: "/resources" }
  ],
  insights: [
    { name: "VerfiX", url: "/" },
    { name: "Insights", url: "/insights" }
  ],
  insightsArticle: (title) => [
    { name: "VerfiX", url: "/" },
    { name: "Insights", url: "/insights" },
    { name: title, url: window.location.pathname }
  ],
  pricing: [
    { name: "VerfiX", url: "/" },
    { name: "Pricing", url: "/pricing" }
  ],
  faq: [
    { name: "VerfiX", url: "/" },
    { name: "FAQ", url: "/faq" }
  ],
  gateway: [
    { name: "VerfiX", url: "/" },
    { name: "Gateway", url: "/gateway" }
  ],
  dpa: [
    { name: "VerfiX", url: "/" },
    { name: "Legal", url: "/privacy" },
    { name: "Data Processing Agreement", url: "/dpa" }
  ],
  productPage: (productName, productUrl) => [
    { name: "VerfiX", url: "/" },
    { name: "Products", url: "/solutions" },
    { name: productName, url: productUrl }
  ],
  geoPage: (lang, pageName, pageUrl) => [
    { name: "VerfiX", url: "/" },
    { name: lang.toUpperCase(), url: "/" + lang },
    { name: pageName, url: pageUrl }
  ]
};

// ── Auto-inject breadcrumb schema on page load ──
document.addEventListener("DOMContentLoaded", function() {
  const path = window.location.pathname;
  let items = null;

  if (path === "/")                    items = BREADCRUMBS.home;
  else if (path.startsWith("/solutions")) items = BREADCRUMBS.solutions;
  else if (path.startsWith("/api"))    items = BREADCRUMBS.api;
  else if (path.startsWith("/trust-center")) items = BREADCRUMBS.trustCenter;
  else if (path.startsWith("/case-studies")) items = BREADCRUMBS.caseStudies;
  else if (path.startsWith("/resources")) items = BREADCRUMBS.resources;
  else if (path.startsWith("/insights/") && path.length > 10) {
    const title = document.title.replace(" | VerfiX", "").replace(" | VerfiX Switzerland", "");
    items = BREADCRUMBS.insightsArticle(title);
  }
  else if (path.startsWith("/insights")) items = BREADCRUMBS.insights;
  else if (path.startsWith("/pricing")) items = BREADCRUMBS.pricing;
  else if (path.startsWith("/faq"))     items = BREADCRUMBS.faq;
  else if (path.startsWith("/gateway")) items = BREADCRUMBS.gateway;
  else if (path.startsWith("/dpa"))     items = BREADCRUMBS.dpa;
  else if (path.startsWith("/products/")) {
    const slug = path.replace("/products/","").replace(/\/$/,"");
    const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    items = BREADCRUMBS.productPage(name, path);
  }

  if (items && items.length > 1) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": "https://verfix.ch" + item.url
      }))
    });
    document.head.appendChild(script);
  }
});
