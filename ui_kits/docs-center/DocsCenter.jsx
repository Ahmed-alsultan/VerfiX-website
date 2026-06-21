// VerfiX Documentation Center — docs home, API docs, SDK docs, compliance docs,
// whitepapers, integration guides, quick-start guides.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip, Tag } = DS;

const TREE = [
  { sec: 'Get started', items: [['quickstart', 'Quick Start'], ['auth-guide', 'Authentication'], ['first-verification', 'Your first verification']] },
  { sec: 'Guides', items: [['integration', 'Integration guide'], ['webhooks-guide', 'Handling webhooks'], ['kyb-guide', 'KYB onboarding']] },
  { sec: 'API & SDKs', items: [['api', 'API reference'], ['sdk', 'SDK reference'], ['errors-doc', 'Error codes']] },
  { sec: 'Compliance', items: [['compliance', 'Compliance docs'], ['data-residency', 'Data residency'], ['whitepapers', 'Whitepapers']] },
];

function DocsCenter() {
  const [page, setPage] = React.useState('home');
  return (
    <div className="doc-shell">
      <TopNav page={page} setPage={setPage} />
      <div className="doc-body" style={{ display: 'grid', gridTemplateColumns: page === 'home' ? '1fr' : '240px 1fr', minHeight: 720 }}>
        {page !== 'home' && <SideTree page={page} setPage={setPage} />}
        <div style={{ overflow: 'auto' }}>
          {page === 'home' ? <Home setPage={setPage} /> : <Article page={page} setPage={setPage} />}
        </div>
      </div>
    </div>
  );
}

function TopNav({ page, setPage }) {
  return (
    <header style={{ height: 58, borderBottom: '1px solid var(--vx-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.9rem', position: 'sticky', top: 0, background: 'rgba(255,255,255,.9)', backdropFilter: 'blur(8px)', zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', cursor: 'pointer' }} onClick={() => setPage('home')}>
        <IconChip icon="fas fa-book" tone="solid" />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>VerfiX Docs</span>
      </div>
      <div style={{ flex: 1, maxWidth: 380, margin: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '.6rem', background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 7, padding: '.45rem .8rem' }}>
        <i className="fas fa-magnifying-glass" style={{ color: 'var(--vx-light)', fontSize: '.78rem' }} />
        <span style={{ fontSize: '.8rem', color: 'var(--vx-light)' }}>Search docs…</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)', border: '1px solid var(--vx-border)', borderRadius: 4, padding: '.05rem .3rem' }}>⌘K</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
        <a href="../developer-portal/index.html" style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--vx-muted)', textDecoration: 'none' }}>Dashboard</a>
        <Button variant="red" size="sm" icon="fas fa-arrow-right">Get API keys</Button>
      </div>
    </header>
  );
}

function SideTree({ page, setPage }) {
  return (
    <aside className="doc-side" style={{ borderRight: '1px solid var(--vx-border)', padding: '1.4rem 1rem', overflow: 'auto' }}>
      {TREE.map(grp => (
        <div key={grp.sec} style={{ marginBottom: '1.2rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.5rem' }}>{grp.sec}</div>
          {grp.items.map(([id, label]) => (
            <a key={id} role="link" tabIndex={0} onClick={() => setPage(id)} onKeyDown={e => { if (e.key === 'Enter') setPage(id); }}
              style={{ display: 'block', padding: '.35rem .6rem', borderRadius: 5, fontSize: '.82rem', fontWeight: page === id ? 700 : 500, cursor: 'pointer', color: page === id ? 'var(--vx-red)' : 'var(--vx-muted)', background: page === id ? 'var(--vx-red-bg)' : 'transparent', borderLeft: '2px solid ' + (page === id ? 'var(--vx-red)' : 'transparent') }}>{label}</a>
          ))}
        </div>
      ))}
    </aside>
  );
}

const CARDS = [
  ['quickstart', 'fas fa-rocket', 'Quick Start', 'Make your first verification call in under 5 minutes.'],
  ['api', 'fas fa-code', 'API Reference', 'Complete REST API — endpoints, parameters, responses.'],
  ['sdk', 'fas fa-cubes', 'SDK Reference', 'Typed client libraries for Node, Python, Go, Java, PHP.'],
  ['integration', 'fas fa-plug', 'Integration Guides', 'Patterns for web, mobile and server-side onboarding.'],
  ['compliance', 'fas fa-shield-halved', 'Compliance Docs', 'GDPR, nFADP, data residency and audit posture.'],
  ['whitepapers', 'fas fa-file-lines', 'Whitepapers', 'The Trust Engine™ architecture and risk methodology.'],
];

function Home({ setPage }) {
  return (
    <div>
      <div style={{ background: 'var(--vx-navy)', padding: '3rem 2.4rem', color: '#fff' }}>
        <div style={{ maxWidth: 720 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vx-red)' }}>Documentation</span>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, letterSpacing: '-.04em', margin: '.6rem 0 .6rem', lineHeight: 1.1 }}>Build trust into your onboarding</h1>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, margin: '0 0 1.4rem', maxWidth: 560 }}>Everything you need to integrate VerfiX — from your first API call to production-grade KYC, KYB and AML workflows.</p>
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
            <Button variant="red" size="md" icon="fas fa-rocket" onClick={() => setPage('quickstart')}>Quick Start</Button>
            <Button variant="white" size="md" icon="fas fa-code" onClick={() => setPage('api')}>API Reference</Button>
          </div>
        </div>
      </div>
      <div style={{ padding: '2.2rem 2.4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }} className="doc-grid">
          {CARDS.map(([id, ic, t, d]) => (
            <div key={id} onClick={() => setPage(id)} role="link" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') setPage(id); }}
              style={{ border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.3rem', cursor: 'pointer', transition: 'border-color .15s, box-shadow .15s, transform .15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--vx-red)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--vx-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
              <IconChip icon={ic} size="lg" />
              <h3 style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-.02em', margin: '.8rem 0 .35rem' }}>{t}</h3>
              <p style={{ fontSize: '.83rem', color: 'var(--vx-muted)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              <div style={{ marginTop: '.8rem', fontSize: '.78rem', fontWeight: 700, color: 'var(--vx-red)' }}>Read <i className="fas fa-arrow-right" style={{ fontSize: '.7rem' }} /></div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="doc-grid">
          <div style={{ background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.4rem' }}>
            <h3 style={{ fontSize: '.95rem', fontWeight: 800, margin: '0 0 .8rem' }}>Popular guides</h3>
            {[['integration', 'Integrating the Web SDK'], ['webhooks-guide', 'Verifying webhook signatures'], ['kyb-guide', 'Running a KYB company check'], ['auth-guide', 'Managing API keys securely']].map(([id, t]) => (
              <a key={id} onClick={() => setPage(id)} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.5rem 0', borderBottom: '1px solid var(--vx-border)', fontSize: '.84rem', fontWeight: 600, color: 'var(--vx-text)', cursor: 'pointer' }}>
                <i className="fas fa-file-lines" style={{ color: 'var(--vx-red)', fontSize: '.78rem' }} />{t}<i className="fas fa-arrow-right" style={{ marginLeft: 'auto', color: 'var(--vx-light)', fontSize: '.7rem' }} />
              </a>
            ))}
          </div>
          <div style={{ background: 'var(--vx-navy)', borderRadius: 10, padding: '1.4rem', color: '#fff' }}>
            <h3 style={{ fontSize: '.95rem', fontWeight: 800, margin: '0 0 .5rem' }}>Quick install</h3>
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.55)', margin: '0 0 .9rem' }}>Add the VerfiX SDK to your project.</p>
            <div style={{ background: 'var(--vx-navy-3)', borderRadius: 7, padding: '.8rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '.78rem', color: 'rgba(255,255,255,.85)' }}>
              <span style={{ color: 'var(--vx-red)' }}>$</span> npm install @verfix/node
            </div>
            <div style={{ marginTop: '.8rem', display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
              {['Node', 'Python', 'Go', 'Java', 'PHP'].map(l => <Tag key={l}>{l}</Tag>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ARTICLE content ──────────────────────────────────
const ARTICLES = {
  quickstart: {
    cat: 'Get started', title: 'Quick Start', read: '5 min',
    intro: 'This guide walks you through creating your first identity verification with VerfiX — from API key to a returned trust decision.',
    toc: ['Create an API key', 'Install the SDK', 'Create a verification', 'Handle the result'],
    blocks: [
      { h: 'Create an API key', p: 'In the Developer Portal, open API Keys and create a test secret key. Keep it server-side.' },
      { h: 'Install the SDK', code: 'npm install @verfix/node', lang: 'bash' },
      { h: 'Create a verification', code: `const verfix = new VerfiX(process.env.VERFIX_SECRET_KEY);\n\nconst v = await verfix.verifications.create({\n  type: "kyc",\n  applicant: { first_name: "Sofia", country: "CH" },\n  checks: ["document", "face", "aml"]\n});\n\nconsole.log(v.trust_score, v.decision);`, lang: 'javascript' },
      { h: 'Handle the result', p: 'A verification returns a trust_score (0–100) and a decision of approve, review, or reject. Wire the webhook to receive the final state asynchronously.' },
    ],
  },
  api: { cat: 'API & SDKs', title: 'API Reference', read: '12 min', intro: 'The VerfiX REST API is organized around resources: verifications, companies, and webhooks. All requests use HTTPS and return JSON.', toc: ['Base URL', 'Authentication', 'Create a verification', 'Retrieve a verification'], blocks: [{ h: 'Base URL', code: 'https://api.verfix.swiss/v2', lang: 'bash' }, { h: 'Authentication', p: 'Pass your secret key as a Bearer token in the Authorization header.', code: 'Authorization: Bearer vx_live_...', lang: 'bash' }, { h: 'Create a verification', code: `POST /v2/verifications\n{\n  "type": "kyc",\n  "applicant": { "country": "CH" },\n  "checks": ["document", "face", "aml"]\n}`, lang: 'json' }, { h: 'Retrieve a verification', code: 'GET /v2/verifications/vrf_8Kd2mQ', lang: 'bash' }] },
  compliance: { cat: 'Compliance', title: 'Compliance Documentation', read: '8 min', intro: 'VerfiX is built for regulated industries. This section covers our data-protection posture under EU GDPR and the Swiss nFADP.', toc: ['Data residency', 'Lawful basis', 'Sub-processors', 'Retention'], blocks: [{ h: 'Data residency', p: 'All personal data is processed and stored exclusively in Swiss and EU data centers. No data leaves the EU/CH perimeter.' }, { h: 'Lawful basis', p: 'Processing is based on explicit, purpose-bound consent (GDPR Art. 6(1)(a)) and legal obligation for AML record-keeping.' }, { h: 'Sub-processors', p: 'A current list of sub-processors is maintained in the Trust Center and updated with 30 days notice.' }, { h: 'Retention', p: 'Biometric templates are deleted within 30 days of a decision; verification metadata is retained 10 years per AMLA.' }] },
};
['auth-guide', 'first-verification', 'integration', 'webhooks-guide', 'kyb-guide', 'sdk', 'errors-doc', 'data-residency', 'whitepapers'].forEach(id => {
  if (!ARTICLES[id]) ARTICLES[id] = ARTICLES[id] = null;
});

function Article({ page, setPage }) {
  const a = ARTICLES[page] || fallback(page);
  return (
    <div className="doc-body" style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '0' }}>
      <article style={{ padding: '2.2rem 2.6rem', maxWidth: 760 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.76rem', color: 'var(--vx-light)', marginBottom: '.7rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setPage('home')}>Docs</span><i className="fas fa-chevron-right" style={{ fontSize: '.55rem' }} /><span>{a.cat}</span>
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, letterSpacing: '-.035em', margin: '0 0 .5rem' }}>{a.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1.4rem' }}>
          <Badge tone="neutral"><i className="fas fa-clock" style={{ marginRight: 4 }} />{a.read} read</Badge>
          <Badge tone="red">{a.cat}</Badge>
        </div>
        <p style={{ fontSize: '1rem', color: 'var(--vx-muted)', lineHeight: 1.8, margin: '0 0 1.8rem' }}>{a.intro}</p>
        {a.blocks.map((b, i) => (
          <div key={i} style={{ marginBottom: '1.6rem' }} id={'h-' + i}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 .6rem' }}>{b.h}</h2>
            {b.p && <p style={{ fontSize: '.9rem', color: 'var(--vx-muted)', lineHeight: 1.8, margin: '0 0 .7rem' }}>{b.p}</p>}
            {b.code && <CodeBlock lang={b.lang}>{b.code}</CodeBlock>}
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.4rem', paddingTop: '1.4rem', borderTop: '1px solid var(--vx-border)' }}>
          <Button variant="outline" size="sm" icon="fas fa-arrow-left" onClick={() => setPage('home')}>All docs</Button>
          <Button variant="ghost" size="sm" iconRight="fas fa-arrow-right" onClick={() => setPage('api')}>Next: API Reference</Button>
        </div>
      </article>
      <aside className="doc-toc" style={{ padding: '2.4rem 1.4rem', borderLeft: '1px solid var(--vx-border)' }}>
        <div style={{ position: 'sticky', top: 80 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.7rem' }}>On this page</div>
          {a.toc.map((t, i) => <div key={i} style={{ fontSize: '.78rem', color: i === 0 ? 'var(--vx-red)' : 'var(--vx-muted)', fontWeight: i === 0 ? 700 : 500, padding: '.3rem 0', borderLeft: '2px solid ' + (i === 0 ? 'var(--vx-red)' : 'transparent'), paddingLeft: '.7rem', cursor: 'pointer' }}>{t}</div>)}
        </div>
      </aside>
    </div>
  );
}

function fallback(page) {
  const titleMap = { 'auth-guide': ['Get started', 'Authentication'], 'first-verification': ['Get started', 'Your first verification'], 'integration': ['Guides', 'Integration guide'], 'webhooks-guide': ['Guides', 'Handling webhooks'], 'kyb-guide': ['Guides', 'KYB onboarding'], 'sdk': ['API & SDKs', 'SDK reference'], 'errors-doc': ['API & SDKs', 'Error codes'], 'data-residency': ['Compliance', 'Data residency'], 'whitepapers': ['Compliance', 'Whitepapers'] };
  const [cat, title] = titleMap[page] || ['Docs', 'Documentation'];
  return {
    cat, title, read: '6 min',
    intro: `${title} — practical, copy-pasteable guidance for integrating VerfiX. This section walks through the concepts, configuration and code you need.`,
    toc: ['Overview', 'Configuration', 'Example', 'Next steps'],
    blocks: [
      { h: 'Overview', p: `${title} is part of the VerfiX onboarding surface. The patterns below apply across all SDKs and the REST API.` },
      { h: 'Configuration', p: 'Set your secret key as an environment variable and initialize the client once per process.', code: 'export VERFIX_SECRET_KEY=vx_live_...', lang: 'bash' },
      { h: 'Example', code: `const verfix = new VerfiX(process.env.VERFIX_SECRET_KEY);\nconst result = await verfix.verifications.create({ type: "kyc" });`, lang: 'javascript' },
      { h: 'Next steps', p: 'Continue to the API Reference for the full parameter list, or read the Compliance docs for data-handling obligations.' },
    ],
  };
}

function CodeBlock({ children, lang }) {
  const [copied, setCopied] = React.useState(false);
  return (
    <div style={{ background: 'var(--vx-navy-3)', borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.45rem .8rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'rgba(255,255,255,.45)' }}>{lang}</span>
        <button onClick={() => { try { navigator.clipboard.writeText(children); } catch (e) {} setCopied(true); setTimeout(() => setCopied(false), 1200); }} style={{ background: 'transparent', border: 'none', color: copied ? 'var(--vx-success)' : 'rgba(255,255,255,.5)', cursor: 'pointer', fontSize: '.64rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}><i className={copied ? 'fas fa-check' : 'fas fa-copy'} style={{ marginRight: 3 }} />{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre style={{ margin: 0, padding: '.9rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '.76rem', lineHeight: 1.7, color: 'rgba(255,255,255,.85)', overflow: 'auto' }}>{children}</pre>
    </div>
  );
}

window.DocsCenter = DocsCenter;
})();
