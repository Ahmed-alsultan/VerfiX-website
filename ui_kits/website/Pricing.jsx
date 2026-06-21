// VerfiX Pricing — enterprise packaging. NO fake prices or customer counts.
// Every plan routes to "Contact Sales". Deployment models + professional services.
(function(){
const { Label, Button, IconChip, Badge } = window.VerfiXDesignSystem_1000e3;

const PLANS = [
  { id: 'pilot', name: 'Pilot Program', tag: 'Start here', tone: 'navy',
    blurb: 'A time-boxed proof of value on your own onboarding flow.', price: 'Fixed pilot fee',
    feats: ['30 / 60 / 90-day options', 'KYC + KYB + AML', 'Hosted or API integration', 'Success-metrics review', 'Dedicated solutions engineer'], cta: 'Apply for pilot', ctaTo: 'pilot' },
  { id: 'enterprise', name: 'Enterprise', tag: 'Most teams', tone: 'red', featured: true,
    blurb: 'Production verification for regulated businesses at scale.', price: 'Custom · volume-based',
    feats: ['Everything in Pilot', 'Trust Engine™ + Rules Builder', 'Case Management + Compliance Center', 'SLA + priority support', 'SSO/SAML, audit exports', 'Dedicated CSM'], cta: 'Contact Sales', ctaTo: 'cta' },
  { id: 'onprem', name: 'On-Premise / Private', tag: 'Sovereign', tone: 'navy',
    blurb: 'Deploy inside your own Swiss/EU environment for full data control.', price: 'Custom · annual licence',
    feats: ['Everything in Enterprise', 'Private cloud or on-prem', 'Data never leaves your perimeter', 'Custom data-processing terms', 'Implementation services'], cta: 'Talk to Sales', ctaTo: 'cta' },
];

const ADDONS = [
  ['fas fa-window-maximize', 'Hosted Verification', 'White-label, mobile-first screens VerfiX hosts for you — no front-end build.'],
  ['fas fa-code', 'API Access', 'Direct REST + SDK integration with sandbox, webhooks and the full platform.'],
  ['fas fa-screwdriver-wrench', 'Professional Services', 'Integration, rule design, and compliance-workflow setup by our solutions team.'],
];

const DEPLOY = [
  ['fas fa-cloud', 'VerfiX Cloud', 'Multi-tenant SaaS in Swiss/EU regions. Fastest to launch.'],
  ['fas fa-server', 'Private Cloud', 'Single-tenant in a dedicated CH/EU environment.'],
  ['fas fa-building-shield', 'On-Premise', 'Inside your own infrastructure for sovereign data control.'],
];

const FAQ = [
  ['Why no public prices?', 'Verification pricing depends on volume, the mix of checks (KYC/KYB/AML), and deployment model. We scope a quote to your actual flow rather than publish a number that wouldn\'t fit you.'],
  ['How is usage measured?', 'Primarily per completed verification, with KYB and ongoing AML monitoring priced separately. Pilots use a fixed fee so you can evaluate without usage risk.'],
  ['Is there a free tier?', 'No free production tier — but the sandbox is free to build against, and the pilot program is the low-risk way to prove value.'],
];

function PlanCard({ p, onCTA, onNav }) {
  const featured = p.featured;
  return (
    <div style={{ position: 'relative', background: featured ? 'var(--vx-navy)' : '#fff', color: featured ? '#fff' : 'var(--vx-text)', border: '1px solid ' + (featured ? 'var(--vx-navy)' : 'var(--vx-border)'), borderRadius: 12, padding: '1.6rem 1.5rem', display: 'flex', flexDirection: 'column', boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-xs)' }}>
      {featured && <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)' }}><Badge tone="red">{p.tag}</Badge></div>}
      {!featured && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>{p.tag}</span>}
      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '-.02em', margin: featured ? '.4rem 0 .3rem' : '.5rem 0 .3rem' }}>{p.name}</h3>
      <p style={{ fontSize: '.85rem', color: featured ? 'rgba(255,255,255,.6)' : 'var(--vx-muted)', lineHeight: 1.6, margin: '0 0 1rem', minHeight: 42 }}>{p.blurb}</p>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.05rem', fontWeight: 700, color: featured ? '#fff' : 'var(--vx-text)', marginBottom: '1.1rem' }}>{p.price}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.4rem', flex: 1 }}>
        {p.feats.map(f => (
          <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '.55rem', fontSize: '.82rem', color: featured ? 'rgba(255,255,255,.85)' : 'var(--vx-text)' }}>
            <i className="fas fa-check" style={{ color: 'var(--vx-red)', fontSize: '.78rem', marginTop: 3 }} />{f}
          </div>
        ))}
      </div>
      <Button variant={featured ? 'red' : 'outline'} size="md" style={{ width: '100%' }}
        onClick={() => p.ctaTo === 'pilot' ? onNav('pilot') : onCTA()}>{p.cta}</Button>
    </div>
  );
}

function Pricing({ onCTA, onNav }) {
  const [faq, setFaq] = React.useState(0);
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ padding: '4.2rem 0 2.5rem', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 2rem' }}>
          <Label style={{ justifyContent: 'center' }}>Pricing</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,3.6vw,3rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, margin: '.5rem 0 .9rem' }}>Priced to your verification flow</h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: 0 }}>
            Verification pricing is volume- and check-dependent, so we scope a quote to your real use case. Start with a fixed-fee pilot, then scale on a plan that fits.
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section style={{ padding: '1.5rem 0 3.5rem', background: 'var(--vx-off)' }}>
        <div className="vx-grid-3" style={{ maxWidth: 1080, margin: '0 auto', padding: '1.5rem 2rem 0', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.1rem', alignItems: 'stretch' }}>
          {PLANS.map(p => <PlanCard key={p.id} p={p} onCTA={onCTA} onNav={onNav} />)}
        </div>
        <p style={{ textAlign: 'center', fontSize: '.78rem', color: 'var(--vx-light)', marginTop: '1.4rem' }}>
          <i className="fas fa-circle-info" style={{ marginRight: 5 }} />No public per-unit prices, no customer counts — figures are scoped per engagement. Nothing here is a fabricated number.
        </p>
      </section>

      {/* ACCESS MODELS */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem' }}>
          <Label>How you consume it</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.6rem' }}>Access models</h2>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {ADDONS.map(([ic, t, d]) => (
              <div key={t} style={{ border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.3rem' }}>
                <IconChip icon={ic} size="lg" />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '.7rem 0 .4rem' }}>{t}</h3>
                <p style={{ fontSize: '.84rem', color: 'var(--vx-muted)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MODELS */}
      <section style={{ padding: '4rem 0', background: 'var(--vx-navy)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem' }}>
          <Label color="rgba(255,255,255,.55)">Deployment</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', margin: '.4rem 0 1.6rem' }}>Three deployment models</h2>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {DEPLOY.map(([ic, t, d], i) => (
              <div key={t} style={{ background: 'var(--vx-navy-2)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '1.3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.6rem' }}>
                  <span style={{ width: 34, height: 34, borderRadius: 7, background: 'rgba(200,37,42,.18)', color: 'var(--vx-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className={ic} /></span>
                  <span style={{ fontWeight: 800, fontSize: '.98rem', color: '#fff' }}>{t}</span>
                </div>
                <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Pricing FAQ</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.4rem' }}>Common questions</h2>
          {FAQ.map(([q, a], i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--vx-border)' }}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', background: 'transparent', border: 'none', padding: '1rem 0', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                <span style={{ fontSize: '.95rem', fontWeight: 700, color: 'var(--vx-text)' }}>{q}</span>
                <i className={faq === i ? 'fas fa-minus' : 'fas fa-plus'} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} />
              </button>
              {faq === i && <p style={{ fontSize: '.88rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: '0 0 1.1rem' }}>{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--vx-off)', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: 800, letterSpacing: '-.03em', margin: '0 0 .6rem' }}>Let's scope your verification</h2>
          <p style={{ fontSize: '.95rem', color: 'var(--vx-muted)', margin: '0 0 1.6rem' }}>Tell us your volumes and the checks you need — we'll come back with a tailored quote and a pilot plan.</p>
          <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="red" size="lg" icon="fas fa-calendar-check" onClick={onCTA}>Contact Sales</Button>
            <Button variant="outline" size="lg" icon="fas fa-rocket" onClick={() => onNav('pilot')}>Explore the pilot</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Pricing = Pricing;
})();
