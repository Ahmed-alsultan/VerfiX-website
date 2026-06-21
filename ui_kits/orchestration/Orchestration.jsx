// VerfiX Provider Orchestration — vendor-neutral registry, routing engine, failover.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip } = DS;

const NAV = [
  { id: 'registry', icon: 'fas fa-server', label: 'Provider Registry' },
  { id: 'routing', icon: 'fas fa-route', label: 'Routing Engine' },
  { id: 'failover', icon: 'fas fa-shield-halved', label: 'Failover Logic' },
];

const PROVIDERS = [
  { sig: 'OCR / Document', ic: 'fas fa-id-card', items: [['VerfiX Native OCR', 'primary', '99.4%', '180ms'], ['Regional ID specialist', 'active', '99.1%', '260ms'], ['Travel-doc reader', 'standby', '—', '—']] },
  { sig: 'Face & Liveness', ic: 'fas fa-face-smile', items: [['Biometric Engine v4', 'primary', '99.2%', '410ms'], ['Passive face-match', 'active', '98.7%', '320ms']] },
  { sig: 'AML data', ic: 'fas fa-magnifying-glass-dollar', items: [['AML Data Union', 'primary', '99.9%', '240ms'], ['Adverse-media feed', 'active', '99.5%', '600ms']] },
  { sig: 'KYB / Registry', ic: 'fas fa-building-columns', items: [['Swiss ZEFIX', 'primary', '99.9%', '300ms'], ['EU registers', 'active', '99.2%', '720ms']] },
  { sig: 'Fraud', ic: 'fas fa-shield-halved', items: [['Device intelligence', 'primary', '99.8%', '90ms']] },
];
const PSTATUS = { primary: ['red', 'Primary'], active: ['success', 'Active'], standby: ['neutral', 'Standby'] };

function Orchestration() {
  const [view, setView] = React.useState('registry');
  return (
    <div className="po-shell">
      <div style={{ display: 'grid', gridTemplateColumns: '230px 1fr', minHeight: 740 }}>
        <aside style={{ background: 'var(--vx-navy)', padding: '1.1rem .8rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.55rem', padding: '.2rem .5rem 1.2rem' }}>
            <IconChip icon="fas fa-diagram-project" tone="solid" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '.95rem' }}>Orchestration</span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {NAV.map(n => (
              <a key={n.id} role="link" tabIndex={0} onClick={() => setView(n.id)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setView(n.id); } }}
                style={{ display: 'flex', alignItems: 'center', gap: '.65rem', padding: '.5rem .55rem', borderRadius: 6, fontSize: '.82rem', fontWeight: 600, cursor: 'pointer', color: view === n.id ? '#fff' : 'rgba(255,255,255,.55)', background: view === n.id ? 'rgba(200,37,42,.18)' : 'transparent' }}>
                <i className={n.icon} style={{ fontSize: '.78rem', width: 16, color: view === n.id ? 'var(--vx-red)' : 'rgba(255,255,255,.4)' }} />{n.label}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: '1.2rem', padding: '.8rem', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.56rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: '.4rem' }}>Why this matters</div>
            <p style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.5, margin: 0 }}>VerfiX never depends on a single vendor. Swap, route and fail over providers without changing your integration.</p>
          </div>
          <a href="../website/index.html" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.5rem .55rem', fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}><i className="fas fa-arrow-left" style={{ width: 16 }} />Back to site</a>
        </aside>
        <main style={{ padding: '1.7rem 1.9rem', overflow: 'auto' }}>
          {view === 'registry' && <Registry />}
          {view === 'routing' && <Routing />}
          {view === 'failover' && <Failover />}
        </main>
      </div>
    </div>
  );
}

function Head({ title, sub, actions }) {
  return <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
    <div><h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', margin: 0 }}>{title}</h1>{sub && <p style={{ fontSize: '.85rem', color: 'var(--vx-muted)', margin: '.3rem 0 0', maxWidth: 620 }}>{sub}</p>}</div>
    {actions}
  </div>;
}

function Registry() {
  return (
    <>
      <Head title="Provider Registry" sub="Every verification signal can draw from multiple providers. VerfiX scores them on health, latency and match quality."
        actions={<Button variant="red" size="sm" icon="fas fa-plus">Add provider</Button>} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {PROVIDERS.map(p => (
          <div key={p.sig} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.8rem 1.1rem', borderBottom: '1px solid var(--vx-border)', background: 'var(--vx-off)' }}>
              <i className={p.ic} style={{ color: 'var(--vx-red)' }} /><span style={{ fontWeight: 800, fontSize: '.9rem' }}>{p.sig}</span>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>{p.items.length} providers</span>
            </div>
            {p.items.map((it, i) => (
              <div key={it[0]} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr .8fr .8fr .6fr', gap: '.6rem', alignItems: 'center', padding: '.7rem 1.1rem', borderBottom: i < p.items.length - 1 ? '1px solid var(--vx-off)' : 'none', fontSize: '.82rem' }}>
                <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '.5rem' }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: it[1] === 'standby' ? 'var(--vx-light)' : 'var(--vx-success)' }} />{it[0]}</span>
                <span><Badge tone={PSTATUS[it[1]][0]}>{PSTATUS[it[1]][1]}</Badge></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--vx-muted)' }}>{it[2]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--vx-muted)' }}>{it[3]}</span>
                <span style={{ textAlign: 'right', color: 'var(--vx-light)' }}><i className="fas fa-gear" style={{ cursor: 'pointer' }} /></span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

const RULES = [
  { when: ['Country', '=', 'Switzerland'], then: 'VerfiX Native OCR + Swiss ZEFIX', tone: 'red' },
  { when: ['Country', '=', 'Germany'], then: 'Regional ID specialist + EU registers', tone: 'navy' },
  { when: ['AML result', '=', 'High risk'], then: 'Enhanced screening (AML Union + adverse media)', tone: 'navy' },
  { when: ['Document', '=', 'Travel document'], then: 'Travel-doc reader', tone: 'navy' },
  { when: ['default', '', ''], then: 'Primary provider per signal', tone: 'neutral' },
];

function Routing() {
  return (
    <>
      <Head title="Routing Engine" sub="Declarative rules pick the right provider per verification — by geography, risk, or document type."
        actions={<Button variant="red" size="sm" icon="fas fa-plus">Add rule</Button>} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
        {RULES.map((r, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderLeft: '3px solid ' + (r.tone === 'red' ? 'var(--vx-red)' : r.tone === 'navy' ? 'var(--vx-navy)' : 'var(--vx-border-2)'), borderRadius: 8, padding: '.9rem 1.1rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
              {r.when[0] === 'default'
                ? <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', fontWeight: 700, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Default</span>
                : <><span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', fontWeight: 700, color: 'var(--vx-red)', textTransform: 'uppercase' }}>IF</span>
                  <span style={{ background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 5, padding: '.25rem .5rem', fontSize: '.78rem', fontWeight: 600 }}>{r.when[0]}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--vx-light)' }}>{r.when[1]}</span>
                  <span style={{ background: 'var(--vx-red-bg)', border: '1px solid var(--vx-red-line)', color: 'var(--vx-red)', borderRadius: 5, padding: '.25rem .5rem', fontSize: '.78rem', fontWeight: 700 }}>{r.when[2]}</span></>}
            </div>
            <i className="fas fa-arrow-right" style={{ color: 'var(--vx-light)', fontSize: '.8rem' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', fontWeight: 700, color: 'var(--vx-navy)', textTransform: 'uppercase' }}>Route to</span>
              <span style={{ fontSize: '.82rem', fontWeight: 700 }}>{r.then}</span>
            </div>
            <i className="fas fa-grip-vertical" style={{ marginLeft: 'auto', color: 'var(--vx-light)', fontSize: '.78rem' }} />
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '.6rem', background: 'var(--vx-info-bg)', borderRadius: 8, padding: '.7rem 1rem', fontSize: '.82rem', color: 'var(--vx-info-fg)' }}>
        <i className="fas fa-circle-info" /> Rules evaluate top-down; the first match wins. Customers integrate once — routing changes never touch their code.
      </div>
    </>
  );
}

function Failover() {
  return (
    <>
      <Head title="Failover Logic" sub="When a provider degrades or fails, VerfiX recovers automatically — no dropped verifications." />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem 0 1.5rem' }}>
        {[
          { ic: 'fas fa-paper-plane', t: 'Request to primary provider', d: 'Route per the routing engine', tone: 'navy' },
          { ic: 'fas fa-triangle-exclamation', t: 'Provider error or timeout', d: 'Health check trips after threshold', tone: 'warn' },
          { ic: 'fas fa-rotate', t: 'Automatic fallback', d: 'Retry on the next active provider for that signal', tone: 'red' },
          { ic: 'fas fa-user-shield', t: 'Escalation if all fail', d: 'Route to manual review — verification is never silently dropped', tone: 'navy' },
        ].map((s, i, arr) => (
          <React.Fragment key={i}>
            <div style={{ width: '100%', maxWidth: 520, background: '#fff', border: '1px solid var(--vx-border)', borderLeft: '3px solid ' + (s.tone === 'red' ? 'var(--vx-red)' : s.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-navy)'), borderRadius: 9, padding: '.9rem 1.1rem', display: 'flex', alignItems: 'center', gap: '.9rem' }}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: s.tone === 'red' ? 'var(--vx-red)' : s.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className={s.ic} /></span>
              <div><div style={{ fontSize: '.88rem', fontWeight: 700 }}>{s.t}</div><div style={{ fontSize: '.78rem', color: 'var(--vx-muted)' }}>{s.d}</div></div>
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'var(--vx-light)' }}>0{i + 1}</span>
            </div>
            {i < arr.length - 1 && <div style={{ width: 2, height: 22, background: 'var(--vx-border-2)' }} />}
          </React.Fragment>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem' }} className="po-grid">
        {[['Health threshold', '3 errors / 30s', 'fas fa-heart-pulse'], ['Retry budget', '2 fallbacks', 'fas fa-rotate'], ['Max latency', '5s then fail over', 'fas fa-gauge-high']].map(([l, v, ic]) => (
          <div key={l} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, padding: '1rem 1.1rem' }}>
            <i className={ic} style={{ color: 'var(--vx-red)', fontSize: '.85rem' }} />
            <div style={{ fontSize: '.7rem', color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: 600, marginTop: '.5rem' }}>{l}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.95rem', fontWeight: 700, marginTop: 2 }}>{v}</div>
          </div>
        ))}
      </div>
    </>
  );
}

window.Orchestration = Orchestration;
})();
