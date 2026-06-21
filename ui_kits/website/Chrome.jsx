// VerfiX site chrome — top navigation + footer. All links route in-app.
(function(){
const { Button } = window.VerfiXDesignSystem_1000e3;

// Keyboard-accessible SPA link: focusable + Enter/Space activation.
function navLink(handler) {
  return {
    role: 'link', tabIndex: 0, onClick: handler,
    onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } },
  };
}

function Logo({ light = false, onClick }) {
  return (
    <a aria-label="VerfiX home" {...navLink(onClick)} style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', cursor: 'pointer', textDecoration: 'none' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 30, height: 30, background: 'var(--vx-red)', borderRadius: 6 }}>
        <i className="fas fa-fingerprint" style={{ color: '#fff', fontSize: '.9rem' }} />
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.18rem', letterSpacing: '-.03em', color: light ? '#fff' : 'var(--vx-navy)' }}>
        Verfi<span style={{ color: 'var(--vx-red)' }}>X</span>
      </span>
    </a>
  );
}

const NAV = ['Platform', 'Pricing', 'Industries', 'Developers', 'Resources', 'Trust', 'Company'];

function NavBar({ current, onNav, onCTA }) {
  const [menu, setMenu] = React.useState(false);
  const go = (key) => { setMenu(false); onNav(key); };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--vx-border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo onClick={() => go('home')} />
        <nav className="vx-nav" aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
          {NAV.map(n => {
            const key = n.toLowerCase();
            const active = current === key;
            return (
              <a key={n} aria-current={active ? 'page' : undefined} {...navLink(() => go(key))} style={{ cursor: 'pointer', fontSize: '.84rem', fontWeight: 600, color: active ? 'var(--vx-red)' : 'var(--vx-muted)', padding: '.5rem .8rem', borderRadius: 5, textDecoration: 'none', transition: 'color .13s' }}>{n}</a>
            );
          })}
        </nav>
        <div className="vx-nav" style={{ display: 'flex', alignItems: 'center', gap: '.55rem' }}>
          <a {...navLink(() => go('app'))} style={{ cursor: 'pointer', fontSize: '.84rem', fontWeight: 600, color: 'var(--vx-muted)', textDecoration: 'none' }}>Sign in</a>
          <Button variant="red" size="sm" icon="fas fa-calendar-check" onClick={onCTA}>Book a Demo</Button>
        </div>
        <button className="vx-menu-btn" aria-label="Open menu" aria-expanded={menu} onClick={() => setMenu(m => !m)} style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, background: 'transparent', border: '1px solid var(--vx-border)', borderRadius: 6, color: 'var(--vx-navy)', cursor: 'pointer' }}>
          <i className={menu ? 'fas fa-xmark' : 'fas fa-bars'} />
        </button>
      </div>
      {menu && (
        <div className="vx-mobile-menu" style={{ flexDirection: 'column', padding: '.75rem 2rem 1.25rem', borderTop: '1px solid var(--vx-border)', background: '#fff', gap: '.2rem' }}>
          {NAV.map(n => (
            <a key={n} {...navLink(() => go(n.toLowerCase()))} style={{ cursor: 'pointer', fontSize: '.95rem', fontWeight: 600, color: current === n.toLowerCase() ? 'var(--vx-red)' : 'var(--vx-text)', padding: '.7rem 0', borderBottom: '1px solid var(--vx-off)', textDecoration: 'none' }}>{n}</a>
          ))}
          <a {...navLink(() => go('app'))} style={{ cursor: 'pointer', fontSize: '.95rem', fontWeight: 600, color: 'var(--vx-text)', padding: '.7rem 0', textDecoration: 'none' }}>Sign in</a>
          <Button variant="red" size="md" icon="fas fa-calendar-check" onClick={() => { setMenu(false); onCTA(); }} style={{ marginTop: '.5rem' }}>Book a Demo</Button>
        </div>
      )}
    </header>
  );
}

// Footer items: a string routes in-app; [label, url] opens a real platform surface.
const FOOT = {
  Product: ['Trust Engine™', ['Platform', 'platform'], ['Pricing', 'pricing'], ['Product demos', 'demos'], ['Industries', 'industries'], ['Provider Orchestration', '../orchestration/index.html']],
  Resources: [['Documentation', '../docs-center/index.html'], ['API Docs', '../docs-center/index.html'], ['Developer Portal', '../developer-portal/index.html'], ['Status Page', '../developer-portal/index.html'], ['MVP · Live Engine', '../mvp/index.html']],
  Company: [['About', 'company'], ['Team', 'company'], ['Pilot Program', 'pilot'], ['Partners', 'partners'], ['Contact', 'company']],
  Legal: [['Privacy', 'trust'], ['DPA', 'trust'], ['Terms', 'trust'], ['Security', 'trust'], ['Compliance', 'trust']],
};

// Real VerfiX social/profile links (branded monochrome icons).
const SOCIALS = [
  ['fab fa-linkedin-in', 'https://www.linkedin.com/company/verfix/'],
  ['fab fa-github', 'https://github.com/Ahmed-alsultan/VerfiX'],
  ['fab fa-youtube', 'https://www.youtube.com/playlist?list=PLOENtMm5HXQu0nxIcnmBwiT_oVgRCSxH1'],
  ['fas fa-circle-nodes', 'https://www.crunchbase.com/organization/verfix'],
  ['fab fa-product-hunt', 'https://www.producthunt.com/products/verfix/verfix/prelaunch'],
];

// Trust signals — factual posture only (no fake certs / customers / badges).
const TRUST_STRIP = [
  ['fas fa-location-dot', 'Swiss-Based'],
  ['fas fa-lock', 'Privacy First'],
  ['fas fa-building-shield', 'Enterprise Ready'],
  ['fas fa-diagram-project', 'Multi-Provider Architecture'],
];

function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--vx-navy-3)', color: '#fff', padding: '0 0 2rem' }}>
      {/* TRUST STRIP */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div className="vx-foot-grid" style={{ maxWidth: 1100, margin: '0 auto', padding: '1.6rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
          {TRUST_STRIP.map(([ic, t]) => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', justifyContent: 'center' }}>
              <i className={ic} style={{ color: 'var(--vx-red)', fontSize: '.95rem' }} />
              <span style={{ fontSize: '.84rem', fontWeight: 700, color: '#fff' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 2rem 0' }}>
        <div className="vx-foot-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div>
            <Logo light onClick={() => onNav('home')} />
            <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7, margin: '1rem 0 1.1rem', maxWidth: 240 }}>Swiss trust infrastructure for regulated digital onboarding.</p>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              {SOCIALS.map(([ic, href]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={ic} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, border: '1px solid rgba(255,255,255,.15)', borderRadius: 5, color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}><i className={ic} style={{ fontSize: '.8rem' }} /></a>
              ))}
            </div>
            <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'flex-start', gap: '.5rem' }}>
              <i className="fas fa-location-dot" style={{ color: 'var(--vx-red)', fontSize: '.8rem', marginTop: 3 }} />
              <span style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.5 }}>VerfiX AG<br/>Lausanne, Switzerland</span>
            </div>
          </div>
          {Object.entries(FOOT).map(([h, items]) => (
            <div key={h}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '1rem' }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
                {items.map(it => Array.isArray(it)
                  ? (/^(\.\.|https?:)/.test(it[1])
                      ? <a key={it[0]} href={it[1]} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.82rem', color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>{it[0]}<i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '.56rem', opacity: .5 }} /></a>
                      : <a key={it[0]} {...navLink(() => onNav(it[1]))} style={{ cursor: 'pointer', fontSize: '.82rem', color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>{it[0]}</a>)
                  : <a key={it} {...navLink(() => onNav(h.toLowerCase()))} style={{ cursor: 'pointer', fontSize: '.82rem', color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>{it}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.75rem' }}>
          <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.55)' }}>© 2026 VerfiX AG · Lausanne, Switzerland</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.4)', marginRight: '.2rem' }}>Aligned with</span>
            {['nFADP', 'GDPR', 'eIDAS', 'FINMA AMLA'].map(t => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 500, color: 'rgba(255,255,255,.6)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 3, padding: '.18rem .45rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { NavBar, Footer, Logo });
})();
