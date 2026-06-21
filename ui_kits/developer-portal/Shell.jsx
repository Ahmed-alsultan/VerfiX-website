// VerfiX Developer Portal — shared shell + UI utilities. Exposed on window.DevUI.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Badge, IconChip } = DS;

// ── Brand mark ───────────────────────────────────────
function Mark({ size = 28 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, background: 'var(--vx-red)', borderRadius: 6 }}>
        <i className="fas fa-fingerprint" style={{ color: '#fff', fontSize: size * .5 }} />
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-.03em', color: '#fff' }}>Verfi<span style={{ color: 'var(--vx-red)' }}>X</span></span>
    </span>
  );
}

// ── App shell: navy sidebar + topbar + scrollable content ──
const NAV = [
  { id: 'dashboard', icon: 'fas fa-gauge-high', label: 'API Dashboard' },
  { id: 'keys', icon: 'fas fa-key', label: 'API Keys' },
  { id: 'sandbox', icon: 'fas fa-flask', label: 'Sandbox' },
  { id: 'webhooks', icon: 'fas fa-bolt', label: 'Webhooks' },
  { id: 'logs', icon: 'fas fa-list-ul', label: 'API Logs' },
  { id: 'ratelimits', icon: 'fas fa-gauge', label: 'Rate Limits' },
  { sec: 'Resources' },
  { id: 'docs', icon: 'fas fa-book', label: 'API Documentation' },
  { id: 'auth', icon: 'fas fa-shield-halved', label: 'Authentication' },
  { id: 'errors', icon: 'fas fa-triangle-exclamation', label: 'Error Reference' },
  { id: 'sdks', icon: 'fas fa-cubes', label: 'SDK Downloads' },
  { id: 'status', icon: 'fas fa-signal', label: 'Status Page' },
];

function AppShell({ view, setView, env, setEnv, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '232px 1fr', minHeight: 720, fontFamily: 'var(--font-body)', background: 'var(--vx-off)' }}>
      <aside style={{ background: 'var(--vx-navy)', display: 'flex', flexDirection: 'column', padding: '1.1rem .8rem' }}>
        <div style={{ padding: '.2rem .5rem 1.3rem' }}><Mark /></div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.55rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', padding: '0 .55rem .5rem' }}>Developers</div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {NAV.map((n, i) => n.sec
            ? <div key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '.55rem', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', padding: '1rem .55rem .5rem' }}>{n.sec}</div>
            : (
              <a key={n.id} role="link" tabIndex={0} onClick={() => setView(n.id)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setView(n.id); } }}
                style={{ display: 'flex', alignItems: 'center', gap: '.65rem', padding: '.5rem .55rem', borderRadius: 6, fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
                  color: view === n.id ? '#fff' : 'rgba(255,255,255,.55)', background: view === n.id ? 'rgba(200,37,42,.18)' : 'transparent' }}>
                <i className={n.icon} style={{ fontSize: '.8rem', width: 16, color: view === n.id ? 'var(--vx-red)' : 'rgba(255,255,255,.4)' }} />{n.label}
              </a>
            ))}
        </nav>
        <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
          <a href="../website/index.html" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.5rem .55rem', fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}><i className="fas fa-arrow-left" style={{ width: 16 }} />Back to site</a>
        </div>
      </aside>

      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{ height: 58, borderBottom: '1px solid var(--vx-border)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.6rem', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--vx-light)' }}>
            <i className="fas fa-terminal" style={{ color: 'var(--vx-red)' }} /><span>developers.verfix.swiss</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
            <EnvToggle env={env} setEnv={setEnv} />
            <span style={{ width: 1, height: 22, background: 'var(--vx-border)' }} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', fontSize: '.8rem', fontWeight: 600, color: 'var(--vx-text)' }}>
              <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--vx-navy)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.68rem', fontWeight: 700 }}>JM</span>
              Jane Müller
            </span>
          </div>
        </header>
        <main style={{ padding: '1.7rem 1.9rem', overflow: 'auto', flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}

function EnvToggle({ env, setEnv }) {
  return (
    <div style={{ display: 'inline-flex', background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 100, padding: 2 }}>
      {['test', 'live'].map(e => (
        <button key={e} onClick={() => setEnv(e)} style={{ fontFamily: 'var(--font-body)', fontSize: '.72rem', fontWeight: 700, textTransform: 'capitalize', border: 'none', cursor: 'pointer', padding: '.25rem .75rem', borderRadius: 100,
          background: env === e ? (e === 'live' ? 'var(--vx-red)' : 'var(--vx-navy)') : 'transparent', color: env === e ? '#fff' : 'var(--vx-muted)' }}>
          {e === 'live' ? '● Live' : '○ Test'}
        </button>
      ))}
    </div>
  );
}

// ── Page header ──────────────────────────────────────
function PageHead({ title, sub, actions }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: 0 }}>{title}</h1>
        {sub && <p style={{ fontSize: '.86rem', color: 'var(--vx-muted)', margin: '.3rem 0 0', maxWidth: 620 }}>{sub}</p>}
      </div>
      {actions && <div style={{ display: 'flex', gap: '.5rem' }}>{actions}</div>}
    </div>
  );
}

function SectionHead({ children, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 0 .8rem' }}>
      <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)', margin: 0 }}>{children}</h2>
      {right}
    </div>
  );
}

// ── Stat tile ────────────────────────────────────────
function StatTile({ label, value, delta, deltaUp, icon }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, padding: '1rem 1.1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{label}</span>
        {icon && <i className={icon} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} />}
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.35rem 0 .2rem' }}>{value}</div>
      {delta && <div style={{ fontSize: '.72rem', fontWeight: 600, color: deltaUp ? 'var(--vx-success)' : 'var(--vx-muted)' }}><i className={deltaUp ? 'fas fa-arrow-up' : 'fas fa-arrow-down'} style={{ fontSize: '.62rem', marginRight: 3 }} />{delta}</div>}
    </div>
  );
}

// ── Bar chart (CSS) ──────────────────────────────────
function BarChart({ data, height = 150, color = 'var(--vx-red)' }) {
  const max = Math.max(...data.map(d => d.v));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
          <div title={d.v} style={{ width: '100%', maxWidth: 26, height: `${(d.v / max) * 100}%`, background: i === data.length - 1 ? color : 'color-mix(in oklab, ' + 'var(--vx-red) 38%, var(--vx-off))', borderRadius: '3px 3px 0 0', transition: 'height .4s var(--ease-out)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.56rem', color: 'var(--vx-light)' }}>{d.l}</span>
        </div>
      ))}
    </div>
  );
}

// ── Code block with copy ─────────────────────────────
function CodeBlock({ children, lang = 'bash', title }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => { try { navigator.clipboard.writeText(typeof children === 'string' ? children : ''); } catch (e) {} setCopied(true); setTimeout(() => setCopied(false), 1400); };
  return (
    <div style={{ background: 'var(--vx-navy-3)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5rem .8rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'rgba(255,255,255,.45)', letterSpacing: '.04em' }}>{title || lang}</span>
        <button onClick={copy} style={{ background: 'transparent', border: 'none', color: copied ? 'var(--vx-success)' : 'rgba(255,255,255,.55)', fontSize: '.66rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-mono)' }}>
          <i className={copied ? 'fas fa-check' : 'fas fa-copy'} style={{ marginRight: 4 }} />{copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '.9rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '.74rem', lineHeight: 1.7, color: 'rgba(255,255,255,.85)', overflow: 'auto' }}>{children}</pre>
    </div>
  );
}

// ── Data table ───────────────────────────────────────
function DataTable({ cols, rows, widths }) {
  const gt = widths || cols.map(() => '1fr').join(' ');
  return (
    <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: gt, gap: '.6rem', padding: '.6rem 1rem', borderBottom: '1px solid var(--vx-border)', fontFamily: 'var(--font-mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>
        {cols.map((c, i) => <span key={i}>{c}</span>)}
      </div>
      {rows.map((r, ri) => (
        <div key={ri} style={{ display: 'grid', gridTemplateColumns: gt, gap: '.6rem', alignItems: 'center', padding: '.7rem 1rem', borderBottom: ri < rows.length - 1 ? '1px solid var(--vx-off)' : 'none', fontSize: '.82rem' }}>
          {r.map((cell, ci) => <div key={ci} style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{cell}</div>)}
        </div>
      ))}
    </div>
  );
}

function Mono({ children, color }) { return <code style={{ fontFamily: 'var(--font-mono)', fontSize: '.74rem', color: color || 'var(--vx-navy)' }}>{children}</code>; }
function Method({ m }) { const c = { GET: 'var(--vx-info)', POST: 'var(--vx-red)', DELETE: 'var(--vx-danger)', PUT: 'var(--vx-warn)' }[m] || 'var(--vx-muted)'; return <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', fontWeight: 700, color: c }}>{m}</span>; }

function Panel({ children, pad = '1.2rem', style = {} }) {
  return <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, padding: pad, ...style }}>{children}</div>;
}

window.DevUI = { AppShell, PageHead, SectionHead, StatTile, BarChart, CodeBlock, DataTable, Mono, Method, Panel, Mark, NAV };
})();
