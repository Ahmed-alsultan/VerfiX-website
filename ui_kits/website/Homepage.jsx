// VerfiX marketing homepage — hero, Trust Engine flow, industries, CTA.
// Recreates verfix.swiss using the design-system primitives.
(function(){
const { Button, Card, IconChip, Label, Badge, Stat, Tag, DecisionPill } = window.VerfiXDesignSystem_1000e3;

function HeroMock() {
  const rows = [
    { n: 'Sofia Brunner', t: 'KYC', s: 96, d: 'approve' },
    { n: 'Helvetia Trust AG', t: 'KYB', s: 71, d: 'review' },
    { n: 'M. Keller', t: 'KYC', s: 34, d: 'reject' },
  ];
  const col = { approve: 'var(--vx-approve)', review: 'var(--vx-review)', reject: 'var(--vx-reject)' };
  return (
    <div style={{ background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
      <div style={{ background: 'var(--vx-navy)', padding: '.62rem 1rem', display: 'flex', alignItems: 'center', gap: '.38rem' }}>
        {['#ef4444', '#f59e0b', '#22c55e'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.57rem', color: 'rgba(255,255,255,.5)', marginLeft: '.55rem' }}>verfix.swiss/admin — verification queue</span>
      </div>
      <div style={{ padding: '1.15rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 700, color: 'var(--vx-light)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '.8rem' }}>Sample queue · illustrative</div>
        {rows.map(r => (
          <div key={r.n} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5rem .7rem', background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 5, marginBottom: '.34rem' }}>
            <div>
              <div style={{ fontSize: '.74rem', fontWeight: 700, color: 'var(--vx-text)' }}>{r.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--vx-light)' }}>{r.t}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', fontWeight: 700, color: col[r.d] }}>{r.s}</span>
              <Badge tone={r.d === 'approve' ? 'success' : r.d === 'review' ? 'warn' : 'danger'}>{r.d}</Badge>
            </div>
          </div>
        ))}
        <div style={{ background: 'var(--vx-navy)', borderRadius: 5, padding: '.62rem .82rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.5rem' }}>
          <span style={{ fontSize: '.62rem', fontWeight: 600, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase', letterSpacing: '.07em' }}>Avg trust score · sample</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>88</span>
        </div>
      </div>
    </div>
  );
}

const TE_STEPS = [
  { i: 'fas fa-id-card', n: 'Document Verification', s: 'OCR · Fraud' },
  { i: 'fas fa-face-smile', n: 'Face Verification', s: 'Match · Liveness' },
  { i: 'fas fa-magnifying-glass-dollar', n: 'AML / Sanctions', s: 'PEP · Watchlists' },
  { i: 'fas fa-building', n: 'KYB Verification', s: 'UBO · Registry' },
  { i: 'fas fa-shield-halved', n: 'Fraud Intelligence', s: 'Device · Behavior' },
];
const INDUSTRIES = [
  ['fas fa-landmark', 'Banking'], ['fas fa-bolt', 'Fintech'], ['fas fa-shield-halved', 'Insurance'],
  ['fas fa-coins', 'Crypto'], ['fas fa-building-columns', 'Government'], ['fas fa-hospital', 'Healthcare'],
  ['fas fa-signal', 'Telecom'], ['fas fa-car', 'Mobility'], ['fas fa-store', 'Marketplaces'], ['fas fa-building', 'Real Estate'],
];

function Homepage({ onCTA }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ padding: '4.5rem 0 4rem', background: '#fff' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.42rem', background: 'var(--vx-red-bg)', border: '1px solid var(--vx-red-line)', borderRadius: 100, padding: '.25rem .82rem', fontSize: '.7rem', fontWeight: 700, color: 'var(--vx-red)', marginBottom: '1.35rem', letterSpacing: '.03em' }}>
              <i className="fas fa-location-dot" style={{ fontSize: '.6rem' }} /> Swiss Trust Infrastructure · Lausanne
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem,4vw,3.6rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.03, color: 'var(--vx-text)', margin: '0 0 .95rem' }}>
              Verify once. <span style={{ color: 'var(--vx-red)' }}>Trust</span> everywhere.
            </h1>
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--vx-muted)', maxWidth: 470, margin: '0 0 1.85rem' }}>
              VerfiX is the identity and compliance layer behind regulated digital onboarding — KYC, KYB, AML, fraud intelligence, and the Trust Engine™ in one decision.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.7rem', marginBottom: '2rem' }}>
              <Button variant="red" size="lg" icon="fas fa-calendar-check" onClick={onCTA}>Book a Demo</Button>
              <Button variant="outline" size="lg">Explore Platform</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', alignItems: 'center' }}>
              <span style={{ fontSize: '.67rem', fontWeight: 700, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.06em', marginRight: '.2rem' }}>Built to align with</span>
              {['nFADP', 'GDPR', 'eIDAS', 'FINMA AMLA'].map(t => (
                <span key={t} style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--vx-muted)', background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 3, padding: '.16rem .5rem' }}>{t}</span>
              ))}
            </div>
          </div>
          <HeroMock />
        </div>
      </section>

      {/* DESIGNED FOR BAR */}
      <div style={{ padding: '1.5rem 0', background: 'var(--vx-navy)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', paddingRight: '1rem', borderRight: '1px solid rgba(255,255,255,.1)' }}>Designed for regulated industries</span>
          {INDUSTRIES.slice(0, 7).map(([ic, n]) => (
            <span key={n} style={{ display: 'flex', alignItems: 'center', gap: '.45rem', fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.5)', padding: '.35rem .75rem', border: '1px solid rgba(255,255,255,.1)', borderRadius: 4 }}>
              <i className={ic} style={{ color: 'var(--vx-red)', fontSize: '.58rem' }} />{n}
            </span>
          ))}
        </div>
      </div>

      {/* TRUST ENGINE */}
      <section style={{ background: 'var(--vx-navy)', padding: '5.5rem 0', borderTop: '1px solid rgba(255,255,255,.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(200,37,42,.15)', border: '1px solid rgba(200,37,42,.3)', borderRadius: 100, padding: '.28rem .9rem', fontSize: '.7rem', fontWeight: 700, color: 'var(--vx-red)', marginBottom: '1.25rem', letterSpacing: '.03em' }}>
              <i className="fas fa-gauge-high" style={{ fontSize: '.55rem' }} /> VerfiX Trust Engine™
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800, letterSpacing: '-.03em', maxWidth: 640, margin: '0 auto .8rem' }}>Every signal. One decision.</h2>
            <p style={{ color: 'rgba(255,255,255,.5)', maxWidth: 500, margin: '0 auto', fontSize: '.98rem' }}>Identity, compliance, fraud and risk signals converge into one explainable decision — Approve, Review, or Reject.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: '.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {TE_STEPS.map((s, i) => (
              <React.Fragment key={s.n}>
                <div style={{ flex: '1 1 150px', minWidth: 150, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderLeft: '3px solid rgba(200,37,42,.4)', borderRadius: 7, padding: '.9rem' }}>
                  <i className={s.i} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} />
                  <div style={{ fontSize: '.78rem', fontWeight: 700, color: '#fff', marginTop: '.5rem' }}>{s.n}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'rgba(255,255,255,.55)', marginTop: '.2rem' }}>{s.s}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0', color: 'rgba(255,255,255,.25)' }}><i className="fas fa-chevron-down" /></div>
          <div style={{ maxWidth: 420, margin: '0 auto', background: 'var(--vx-red)', borderRadius: 8, padding: '.9rem 1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.6rem', boxShadow: '0 4px 24px rgba(200,37,42,.4)' }}>
            <i className="fas fa-gauge-high" style={{ color: '#fff' }} />
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '.95rem' }}>Trust Engine™ · Score · Rules · Decision</span>
          </div>
          <div style={{ display: 'flex', gap: '.6rem', maxWidth: 420, margin: '1rem auto 0' }}>
            {[['approve', 'Approve'], ['review', 'Review'], ['reject', 'Reject']].map(([d, l]) => (
              <div key={d} style={{ flex: 1 }}><DecisionPill decision={d} style={{ width: '100%', justifyContent: 'center' }} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--vx-navy-3)', padding: '4rem 0' }}>
        <div className="vx-grid-3" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, overflow: 'hidden' }}>
          {[['Logged', 'Every decision', 'Full audit trail by design'], ['3', 'Outcomes', 'Approve · Review · Reject'], ['CH/EU', 'Data residency', 'Swiss & EU processing only']].map(([v, l, d], i) => (
            <div key={l} style={{ padding: '2.25rem 2.5rem', borderRight: i < 2 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
              <Stat value={v} label={l} desc={d} dark />
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <Label>Industries</Label>
            <h2 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 0' }}>Trust infrastructure for regulated sectors</h2>
          </div>
          <div className="vx-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: 'var(--vx-border)', border: '1px solid var(--vx-border)', borderRadius: 10, overflow: 'hidden' }}>
            {INDUSTRIES.map(([ic, n]) => (
              <div key={n} style={{ background: '#fff', padding: '1.5rem 1.25rem' }}>
                <IconChip icon={ic} style={{ marginBottom: '.7rem' }} />
                <div style={{ fontSize: '.83rem', fontWeight: 700, color: 'var(--vx-text)' }}>{n}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--vx-navy)', padding: '5.5rem 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label color="rgba(255,255,255,.6)" style={{ justifyContent: 'center' }}>Get started</Label>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 800, letterSpacing: '-.03em', maxWidth: 580, margin: '.4rem auto .875rem' }}>Bring trust to your onboarding.</h2>
          <p style={{ color: 'rgba(255,255,255,.48)', maxWidth: 440, margin: '0 auto 2.25rem' }}>See the Trust Engine™ run on your own onboarding flow in a 30-minute walkthrough.</p>
          <div style={{ display: 'flex', gap: '.72rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="red" size="lg" icon="fas fa-calendar-check" onClick={onCTA}>Book a Demo</Button>
            <Button variant="white" size="lg">Talk to Sales</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Homepage = Homepage;
})();
