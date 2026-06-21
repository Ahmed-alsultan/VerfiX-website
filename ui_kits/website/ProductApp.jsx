// VerfiX product app — sign-in + verification queue dashboard with drill-in detail.
(function(){
const { Button, Input, Badge, IconChip, TrustScore, DecisionPill, Stat } = window.VerfiXDesignSystem_1000e3;
const Logo = window.Logo;

function navLink(handler) {
  return { role: 'link', tabIndex: 0, onClick: handler, onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } } };
}

const QUEUE = [
  { id: 'vrf_8Kd2mQ', name: 'Sofia Brunner', type: 'KYC', country: 'CH', score: 96, decision: 'approve', time: '2m ago',
    signals: [['Document', 98], ['Face match', 97], ['AML screening', 94], ['Device risk', 90]] },
  { id: 'vrf_3Lp9xR', name: 'Helvetia Trust AG', type: 'KYB', country: 'CH', score: 71, decision: 'review', time: '8m ago',
    signals: [['Registry', 88], ['UBO resolution', 64], ['AML screening', 70], ['Adverse media', 58]] },
  { id: 'vrf_7Qm4zT', name: 'Marco Keller', type: 'KYC', country: 'IT', score: 34, decision: 'reject', time: '14m ago',
    signals: [['Document', 41], ['Face match', 30], ['AML screening', 88], ['Device risk', 22]] },
  { id: 'vrf_2Nf6wK', name: 'Amélie Favre', type: 'KYC', country: 'FR', score: 89, decision: 'approve', time: '21m ago',
    signals: [['Document', 92], ['Face match', 90], ['AML screening', 86], ['Device risk', 84]] },
  { id: 'vrf_5Bd1vH', name: 'NordCrypto OÜ', type: 'KYB', country: 'EE', score: 62, decision: 'review', time: '33m ago',
    signals: [['Registry', 78], ['UBO resolution', 55], ['AML screening', 60], ['Adverse media', 49]] },
];

const toneFor = d => d === 'approve' ? 'success' : d === 'review' ? 'warn' : 'danger';
const colFor = d => d === 'approve' ? 'var(--vx-approve)' : d === 'review' ? 'var(--vx-review)' : 'var(--vx-reject)';

function SignIn({ onSignIn, onExit }) {
  return (
    <div className="vx-signin" style={{ minHeight: 620, display: 'grid', gridTemplateColumns: '1fr 1fr', fontFamily: 'var(--font-body)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <form onSubmit={e => { e.preventDefault(); onSignIn(); }} style={{ width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Logo onClick={onExit} />
          <div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '1rem 0 .3rem' }}>Sign in to console</h2>
            <p style={{ fontSize: '.84rem', color: 'var(--vx-muted)', margin: 0 }}>Access your verification dashboard.</p>
          </div>
          <Input label="Work email" type="email" placeholder="you@company.ch" required />
          <Input label="Password" type="password" placeholder="••••••••" required />
          <Button variant="red" size="lg" type="submit" style={{ width: '100%' }}>Sign in</Button>
          <div style={{ textAlign: 'center', fontSize: '.78rem', color: 'var(--vx-light)', display: 'flex', justifyContent: 'space-between' }}>
            <a {...navLink(onExit)} style={{ color: 'var(--vx-muted)', cursor: 'pointer', fontWeight: 600 }}>← Back to site</a>
            <a tabIndex={0} style={{ color: 'var(--vx-red)', cursor: 'pointer', fontWeight: 600 }}>Forgot password?</a>
          </div>
        </form>
      </div>
      <div className="vx-signin-aside" style={{ background: 'var(--vx-navy)', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vx-red)' }}>Trust Engine™ Console</div>
        <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.2, margin: 0 }}>Every verification, every signal, one queue.</h3>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Stat value="88" label="Avg score" dark />
          <Stat value="<3s" label="Decision" dark />
        </div>
      </div>
    </div>
  );
}

function Dashboard({ onSignOut }) {
  const [sel, setSel] = React.useState(QUEUE[0]);
  const [filter, setFilter] = React.useState('all');
  const rows = filter === 'all' ? QUEUE : QUEUE.filter(r => r.decision === filter);
  return (
    <div className="vx-console" style={{ minHeight: 640, fontFamily: 'var(--font-body)', background: 'var(--vx-off)' }}>
    <div className="vx-console-inner" style={{ display: 'grid', gridTemplateColumns: '210px 1fr', minHeight: 640 }}>
      {/* sidebar */}
      <aside style={{ background: 'var(--vx-navy)', padding: '1.2rem 1rem', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1.8rem', paddingLeft: '.3rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, background: 'var(--vx-red)', borderRadius: 6 }}><i className="fas fa-fingerprint" style={{ color: '#fff', fontSize: '.78rem' }} /></span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem', color: '#fff', letterSpacing: '-.03em' }}>Verfi<span style={{ color: 'var(--vx-red)' }}>X</span></span>
        </div>
        {[['fas fa-gauge-high', 'Dashboard', true], ['fas fa-list-check', 'Verifications', false], ['fas fa-building', 'Companies', false], ['fas fa-sliders', 'Rules', false], ['fas fa-scroll', 'Audit log', false], ['fas fa-gear', 'Settings', false]].map(([ic, n, active]) => (
          <a key={n} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.55rem .65rem', borderRadius: 6, fontSize: '.82rem', fontWeight: 600, marginBottom: 2, cursor: 'pointer', color: active ? '#fff' : 'rgba(255,255,255,.5)', background: active ? 'rgba(200,37,42,.18)' : 'transparent' }}>
            <i className={ic} style={{ fontSize: '.8rem', color: active ? 'var(--vx-red)' : 'rgba(255,255,255,.4)', width: 16 }} />{n}
          </a>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,.08)' }}>
          <a onClick={onSignOut} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.55rem .65rem', fontSize: '.82rem', fontWeight: 600, color: 'rgba(255,255,255,.5)', cursor: 'pointer' }}><i className="fas fa-arrow-right-from-bracket" style={{ width: 16 }} />Sign out</a>
        </div>
      </aside>

      {/* main */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px' }}>
        <main style={{ padding: '1.5rem 1.6rem', borderRight: '1px solid var(--vx-border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
            <div style={{ flexShrink: 0 }}>
              <h1 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: 0, whiteSpace: 'nowrap' }}>Verification queue</h1>
              <p style={{ fontSize: '.8rem', color: 'var(--vx-light)', margin: '.2rem 0 0' }}>{rows.length} of {QUEUE.length} verifications</p>
            </div>
            <Button variant="red" size="sm" icon="fas fa-plus">New verification</Button>
          </div>
          {/* stat strip */}
          <div className="vx-stats-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.7rem', marginBottom: '1.2rem' }}>
            {[['Approved today', '42', 'var(--vx-approve)'], ['In review', '7', 'var(--vx-review)'], ['Rejected', '3', 'var(--vx-reject)']].map(([l, v, c]) => (
              <div key={l} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, padding: '.85rem 1rem' }}>
                <div style={{ fontSize: '.68rem', fontWeight: 600, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{l}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: c, marginTop: 2 }}>{v}</div>
              </div>
            ))}
          </div>
          {/* filters */}
          <div style={{ display: 'flex', gap: '.4rem', marginBottom: '.8rem' }}>
            {['all', 'approve', 'review', 'reject'].map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ fontFamily: 'var(--font-body)', fontSize: '.74rem', fontWeight: 600, textTransform: 'capitalize', padding: '.35rem .8rem', borderRadius: 100, cursor: 'pointer', border: '1px solid ' + (filter === f ? 'var(--vx-red)' : 'var(--vx-border)'), background: filter === f ? 'var(--vx-red)' : '#fff', color: filter === f ? '#fff' : 'var(--vx-muted)' }}>{f}</button>
            ))}
          </div>
          {/* table */}
          <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr .6fr .8fr .8fr', gap: '.5rem', padding: '.6rem 1rem', borderBottom: '1px solid var(--vx-border)', fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>
              <span>Applicant</span><span>Type</span><span>Score</span><span>Decision</span>
            </div>
            {rows.map(r => (
              <div key={r.id} onClick={() => setSel(r)} style={{ display: 'grid', gridTemplateColumns: '1.6fr .6fr .8fr .8fr', gap: '.5rem', alignItems: 'center', padding: '.7rem 1rem', borderBottom: '1px solid var(--vx-off)', cursor: 'pointer', background: sel.id === r.id ? 'var(--vx-red-bg)' : '#fff' }}>
                <div>
                  <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--vx-text)' }}>{r.name}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>{r.id} · {r.country} · {r.time}</div>
                </div>
                <span style={{ fontSize: '.72rem', fontWeight: 600, color: 'var(--vx-muted)' }}>{r.type}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.9rem', fontWeight: 700, color: colFor(r.decision) }}>{r.score}</span>
                <Badge tone={toneFor(r.decision)}>{r.decision}</Badge>
              </div>
            ))}
          </div>
        </main>

        {/* detail */}
        <aside style={{ padding: '1.5rem 1.4rem', background: '#fff' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '1rem' }}>Verification detail</div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
            <TrustScore score={sel.score} size={120} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '1.3rem' }}>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--vx-text)' }}>{sel.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)', marginTop: 2 }}>{sel.id} · {sel.type} · {sel.country}</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.6rem' }}>Signal breakdown</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.4rem' }}>
            {sel.signals.map(([l, v]) => (
              <div key={l}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.74rem', marginBottom: 3 }}><span style={{ color: 'var(--vx-muted)' }}>{l}</span><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--vx-text)' }}>{v}</span></div>
                <div style={{ height: 5, background: 'var(--vx-off)', borderRadius: 3 }}><div style={{ width: v + '%', height: '100%', background: colFor(sel.decision), borderRadius: 3 }} /></div>
              </div>
            ))}
          </div>
          <DecisionPill decision={sel.decision} style={{ width: '100%', justifyContent: 'center', marginBottom: '.7rem' }} />
          <div style={{ display: 'flex', gap: '.5rem' }}>
            <Button variant="outline" size="sm" style={{ flex: 1 }}>Reassign</Button>
            <Button variant="red" size="sm" style={{ flex: 1 }}>Override</Button>
          </div>
        </aside>
      </div>
    </div>
    </div>
  );
}

function ProductApp({ onExit }) {
  const [authed, setAuthed] = React.useState(false);
  return authed ? <Dashboard onSignOut={() => { setAuthed(false); onExit && onExit(); }} /> : <SignIn onSignIn={() => setAuthed(true)} onExit={onExit} />;
}

window.ProductApp = ProductApp;
})();
