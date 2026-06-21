// VerfiX Partners — partner program landing: categories, benefits, application. No fake partners.
(function(){
const { Label, Button, IconChip, Badge, Input } = window.VerfiXDesignSystem_1000e3;

const CATEGORIES = [
  { ic: 'fas fa-microchip', t: 'Technology Partners', d: 'OCR, biometric, AML and registry providers that plug into the VerfiX orchestration layer.' },
  { ic: 'fas fa-scale-balanced', t: 'Compliance Partners', d: 'Law firms and compliance consultancies that implement VerfiX for regulated clients.' },
  { ic: 'fas fa-flask', t: 'Research Institutions', d: 'Labs advancing fraud, biometrics and trust research alongside VerfiX.' },
  { ic: 'fas fa-graduation-cap', t: 'Universities', d: 'Academic collaboration on identity, cryptography and applied ML.' },
  { ic: 'fas fa-rocket', t: 'Accelerators', d: 'Programmes supporting VerfiX and connecting us with design partners.' },
  { ic: 'fas fa-people-group', t: 'Industry Associations', d: 'Banking, fintech and compliance bodies shaping identity standards.' },
];

const BENEFITS = [
  ['fas fa-plug', 'One integration, many buyers', 'Reach regulated buyers through a single VerfiX integration instead of many bespoke ones.'],
  ['fas fa-book', 'Co-built enablement', 'Joint documentation, demo assets and solution guides for shared use cases.'],
  ['fas fa-handshake', 'Aligned commercials', 'Referral and revenue-share models that fit how you go to market.'],
  ['fas fa-headset', 'Partner support', 'A named contact, sandbox access, and early visibility of the roadmap.'],
];

const TIERS = [
  ['Registered', 'Listed in the directory, sandbox access, partner docs.'],
  ['Certified', 'Validated integration, co-marketing, referral commercials.'],
  ['Strategic', 'Joint roadmap, deep integration, co-sell into enterprise.'],
];

function Partners({ onCTA }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ padding: '4.2rem 0 2.6rem', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 2rem' }}>
          <Label style={{ justifyContent: 'center' }}>Partner Program</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,3.6vw,3rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, margin: '.5rem 0 .9rem' }}>Build the trust layer together</h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: 0 }}>
            VerfiX is an orchestration layer — it's stronger with partners. We work with technology, compliance, research and accelerator partners to bring trusted verification to regulated businesses.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ padding: '3.4rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Partner categories</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.6rem' }}>Six ways to partner</h2>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {CATEGORIES.map(c => (
              <div key={c.t} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.3rem' }}>
                <IconChip icon={c.ic} size="lg" />
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '.7rem 0 .4rem' }}>{c.t}</h3>
                <p style={{ fontSize: '.83rem', color: 'var(--vx-muted)', lineHeight: 1.6, margin: 0 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: '3.4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Why partner</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.6rem' }}>Partner benefits</h2>
          <div className="vx-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
            {BENEFITS.map(([ic, t, d]) => (
              <div key={t} style={{ display: 'flex', gap: '1rem', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.2rem' }}>
                <IconChip icon={ic} size="lg" />
                <div><h3 style={{ fontSize: '.98rem', fontWeight: 800, margin: '.1rem 0 .35rem' }}>{t}</h3><p style={{ fontSize: '.83rem', color: 'var(--vx-muted)', lineHeight: 1.6, margin: 0 }}>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section style={{ padding: '3.4rem 0', background: 'var(--vx-navy)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem' }}>
          <Label color="rgba(255,255,255,.55)">Program tiers</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', margin: '.4rem 0 1.6rem' }}>How partnerships grow</h2>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {TIERS.map(([t, d], i) => (
              <div key={t} style={{ background: 'var(--vx-navy-2)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '1.3rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.8rem', fontWeight: 700, color: 'var(--vx-red)' }}>0{i + 1}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', margin: '.3rem 0 .4rem' }}>{t}</h3>
                <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.6, margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section style={{ padding: '3.6rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.4rem' }}>
            <Label style={{ justifyContent: 'center' }}>Apply</Label>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 0' }}>Become a partner</h2>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 12, padding: '1.6rem', boxShadow: 'var(--shadow-sm)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--vx-success-bg)', color: 'var(--vx-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', margin: '0 auto 1rem' }}><i className="fas fa-check" /></div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 .4rem' }}>Thanks — application received</h3>
                <p style={{ fontSize: '.88rem', color: 'var(--vx-muted)', maxWidth: 340, margin: '0 auto' }}>Our partnerships team will review and reach out within five business days.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.9rem' }}>
                  <Input label="Organization" placeholder="Acme Technologies" required />
                  <Input label="Work email" type="email" placeholder="you@acme.com" required />
                </div>
                <Input label="Partner category" as="select" options={CATEGORIES.map(c => c.t)} />
                <Input label="How would we work together?" as="textarea" placeholder="Tell us about your product or organization and the use case…" />
                <Button variant="red" size="md" icon="fas fa-paper-plane" onClick={() => setSent(true)}>Submit application</Button>
              </div>
            )}
          </div>
          <p style={{ textAlign: 'center', fontSize: '.76rem', color: 'var(--vx-light)', marginTop: '1rem' }}>
            <i className="fas fa-circle-info" style={{ marginRight: 5 }} />VerfiX does not list partners it doesn't have. This directory populates as real partnerships are signed.
          </p>
        </div>
      </section>
    </div>
  );
}

window.Partners = Partners;
})();
