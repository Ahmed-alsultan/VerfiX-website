// VerfiX Industries — sector landing grid with a detail spotlight.
(function(){
const { Card, IconChip, Label, Button, Badge } = window.VerfiXDesignSystem_1000e3;

const SECTORS = [
  { i: 'fas fa-landmark', n: 'Banking', d: 'Account opening, ongoing AML monitoring and FINMA-aligned audit trails.', live: true },
  { i: 'fas fa-bolt', n: 'Fintech', d: 'Sub-3-second onboarding that scales with your growth without adding fraud.', live: true },
  { i: 'fas fa-shield-halved', n: 'Insurance', d: 'Verify policyholders and claimants while screening for fraud rings.', live: true },
  { i: 'fas fa-coins', n: 'Crypto', d: 'Travel Rule, wallet screening and Source-of-Funds checks in one flow.', live: true },
  { i: 'fas fa-building-columns', n: 'Government', d: 'eIDAS-aligned citizen identity for digital public services.', live: false },
  { i: 'fas fa-hospital', n: 'Healthcare', d: 'Patient and provider identity assurance with consent capture.', live: false },
  { i: 'fas fa-signal', n: 'Telecom', d: 'SIM registration and subscriber KYC at national scale.', live: false },
  { i: 'fas fa-car', n: 'Mobility', d: 'Driver and rider verification for trust on both sides of the marketplace.', live: false },
];

function Industries({ onCTA }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '4.5rem 0 3rem', background: 'var(--vx-navy)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label color="rgba(255,255,255,.6)">Industries</Label>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.2rem,3.6vw,3rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, margin: '.5rem 0 .9rem', maxWidth: 640 }}>
            Built for every regulated sector.
          </h1>
          <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '1rem', maxWidth: 540, lineHeight: 1.7, margin: 0 }}>
            One trust layer, configured to each industry's regulatory reality — from FINMA-supervised banks to crypto Travel Rule compliance.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <div className="vx-sectors" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.1rem' }}>
            {SECTORS.map(s => (
              <Card key={s.n} hover style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}>
                <IconChip icon={s.i} size="lg" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.35rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--vx-text)', margin: 0 }}>{s.n}</h3>
                    {s.live ? <Badge tone="success">Live</Badge> : <Badge tone="neutral">Coming soon</Badge>}
                  </div>
                  <p style={{ fontSize: '.84rem', color: 'var(--vx-muted)', lineHeight: 1.65, margin: 0 }}>{s.d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0 5rem', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2rem)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '0 0 .7rem' }}>Don't see your industry?</h2>
          <p style={{ color: 'var(--vx-muted)', margin: '0 0 1.6rem' }}>The Trust Engine™ adapts to any regulatory framework. Tell us about your onboarding.</p>
          <Button variant="red" size="lg" icon="fas fa-calendar-check" onClick={onCTA}>Book a Demo</Button>
        </div>
      </section>
    </div>
  );
}

window.Industries = Industries;
})();
