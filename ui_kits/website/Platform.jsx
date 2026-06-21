// VerfiX Platform — product detail page. Capabilities, how-it-works, Trust Engine panel.
(function(){
const { Card, IconChip, Label, Button, Tag, TrustScore, Stat } = window.VerfiXDesignSystem_1000e3;

const CAPS = [
  { i: 'fas fa-id-card', t: 'Document Verification', d: 'OCR capture and forensic fraud checks across a broad range of government ID types and countries.', tags: ['OCR', 'MRZ', 'Tamper detection'] },
  { i: 'fas fa-face-smile', t: 'Face & Liveness', d: 'Match the holder to their document with passive and active liveness against deepfakes.', tags: ['Face match', 'Liveness', 'Anti-spoof'] },
  { i: 'fas fa-magnifying-glass-dollar', t: 'AML & Sanctions', d: 'Screen against global sanctions, PEP and adverse-media lists with ongoing monitoring.', tags: ['PEP', 'Sanctions', 'Adverse media'] },
  { i: 'fas fa-building', t: 'KYB & Registry', d: 'Resolve company structures, UBOs and registry data across jurisdictions.', tags: ['UBO', 'Registry', 'Ownership'] },
  { i: 'fas fa-shield-halved', t: 'Fraud Intelligence', d: 'Device fingerprinting, behavioral signals and velocity rules catch coordinated fraud.', tags: ['Device', 'Behavior', 'Velocity'] },
  { i: 'fas fa-scroll', t: 'Audit & Reporting', d: 'Immutable decision logs and exportable evidence packs your regulators can read.', tags: ['Audit trail', 'Evidence', 'Export'] },
];

function Platform({ onCTA }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '4.5rem 0 3rem', background: '#fff', borderBottom: '1px solid var(--vx-border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <Label style={{ justifyContent: 'center' }}>The Platform</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,3.6vw,3.2rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, color: 'var(--vx-text)', margin: '.5rem auto .9rem', maxWidth: 720 }}>
            One platform for identity, compliance & fraud.
          </h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--vx-muted)', maxWidth: 540, margin: '0 auto 1.6rem', lineHeight: 1.7 }}>
            Compose any onboarding flow from modular verification building blocks — all feeding a single, explainable Trust Engine™ decision.
          </p>
          <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="red" size="lg" icon="fas fa-calendar-check" onClick={onCTA}>Book a Demo</Button>
            <Button variant="outline" size="lg" iconRight="fas fa-arrow-right">Read the docs</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: '4.5rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <Label>Capabilities</Label>
            <h2 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 0' }}>Modular by design</h2>
          </div>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.1rem' }}>
            {CAPS.map(c => (
              <Card key={c.t} accent hover>
                <IconChip icon={c.i} size="lg" style={{ marginBottom: '.8rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--vx-text)', margin: '0 0 .4rem' }}>{c.t}</h3>
                <p style={{ fontSize: '.83rem', color: 'var(--vx-muted)', lineHeight: 1.65, margin: '0 0 .85rem' }}>{c.d}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>{c.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Engine spotlight */}
      <section style={{ padding: '5rem 0', background: 'var(--vx-navy)' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <Label color="rgba(255,255,255,.6)">Trust Engine™</Label>
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1rem' }}>From raw signals to one explainable score.</h2>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.95rem', lineHeight: 1.75, margin: '0 0 1.5rem' }}>
              Configure weighted rules per risk tier. Every input that moved the score is recorded, so analysts and regulators see exactly why a decision was made.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
              {['Configurable rules per risk tier & jurisdiction', 'Explainable score with full signal breakdown', 'Straight-through processing for low-risk users'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', color: 'rgba(255,255,255,.8)', fontSize: '.88rem' }}>
                  <i className="fas fa-circle-check" style={{ color: 'var(--vx-red)' }} />{t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            <TrustScore score={92} label="Trust Score" />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {[['Document', 98], ['Face match', 95], ['AML screening', 88], ['Device risk', 84]].map(([l, v]) => (
                <div key={l}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.72rem', color: 'rgba(255,255,255,.6)', marginBottom: 3 }}><span>{l}</span><span style={{ fontFamily: 'var(--font-mono)', color: '#fff' }}>{v}</span></div>
                  <div style={{ height: 5, background: 'rgba(255,255,255,.1)', borderRadius: 3 }}><div style={{ width: v + '%', height: '100%', background: 'var(--vx-red)', borderRadius: 3 }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Platform = Platform;
})();
