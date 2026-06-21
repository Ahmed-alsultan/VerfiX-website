// VerfiX Trust Center — security, compliance, privacy, data processing,
// responsible disclosure, security contact. Honest, early-stage posture.
(function(){
const { Label, Button, IconChip, Card, Badge } = window.VerfiXDesignSystem_1000e3;

const PILLARS = [
  { ic: 'fas fa-server', t: 'Data residency', d: 'All personal data is processed and stored exclusively in Swiss and EU data centers. Nothing leaves the CH/EU perimeter.', status: 'live' },
  { ic: 'fas fa-lock', t: 'Encryption', d: 'TLS 1.3 in transit and AES-256 at rest. Secrets are isolated per environment and rotated on demand.', status: 'live' },
  { ic: 'fas fa-user-shield', t: 'Access control', d: 'Role-based access, SSO/SAML, and least-privilege defaults across the platform and internal tooling.', status: 'live' },
  { ic: 'fas fa-clock-rotate-left', t: 'Audit logging', d: 'Every action is recorded in an immutable, tamper-evident audit trail retained for 10 years.', status: 'live' },
];

const FRAMEWORKS = [
  ['nFADP (Switzerland)', 'aligned', 'Built to the Swiss Federal Act on Data Protection'],
  ['GDPR (EU)', 'aligned', 'Lawful basis, DPA, and full data-subject rights'],
  ['eIDAS', 'aligned', 'Mapped to eIDAS levels of assurance'],
  ['FINMA AMLA', 'aligned', 'Supports AML record-keeping obligations'],
  ['ISO 27001', 'planned', 'Information security management — on roadmap'],
  ['SOC 2 Type II', 'planned', 'Trust services criteria — on roadmap'],
];
const STATUS = { live: ['success', 'Live'], aligned: ['info', 'Aligned'], planned: ['warn', 'Planned'] };

const SUBPROCESSORS = [
  ['Cloud hosting (CH/EU region)', 'Infrastructure', 'Switzerland / EU'],
  ['Email delivery', 'Transactional email', 'EU'],
  ['Error monitoring', 'Observability', 'EU'],
];

function TrustCenter({ onNav }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ background: 'var(--vx-navy)', padding: '4.2rem 0 3.6rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 2rem' }}>
          <Label color="rgba(255,255,255,.55)">Trust Center</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, color: '#fff', margin: '.5rem 0 .8rem' }}>
            Security and privacy, <span style={{ color: 'var(--vx-red)' }}>in the open</span>.
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, maxWidth: 600, margin: 0 }}>
            We handle identity data for regulated businesses, so we hold ourselves to a high bar — and we publish exactly where we stand, including what is still on the roadmap.
          </p>
          <div style={{ display: 'flex', gap: '.6rem', marginTop: '1.6rem', flexWrap: 'wrap' }}>
            <Button variant="red" size="md" icon="fas fa-shield-halved" onClick={() => document.getElementById('disclosure').scrollIntoView({ behavior: 'smooth' })}>Report a vulnerability</Button>
            <Button variant="white" size="md" icon="fas fa-file-lines">Request docs</Button>
          </div>
        </div>
      </section>

      {/* SECURITY PILLARS */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Security</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.8rem' }}>How we protect data</h2>
          <div className="vx-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
            {PILLARS.map(p => (
              <Card key={p.t} style={{ display: 'flex', gap: '1rem' }}>
                <IconChip icon={p.ic} size="lg" />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}><h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>{p.t}</h3><Badge tone="success">Live</Badge></div>
                  <p style={{ fontSize: '.84rem', color: 'var(--vx-muted)', lineHeight: 1.6, margin: '.35rem 0 0' }}>{p.d}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE FRAMEWORKS */}
      <section style={{ padding: '4rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Compliance</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 .5rem' }}>Frameworks &amp; certifications</h2>
          <p style={{ fontSize: '.88rem', color: 'var(--vx-muted)', maxWidth: 560, margin: '0 0 1.8rem' }}>What we align to today, and what we are working toward. Nothing here claims an audit we have not completed.</p>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem' }}>
            {FRAMEWORKS.map(([n, st, d]) => (
              <div key={n} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1.1rem 1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '.9rem', fontWeight: 700 }}>{n}</span><Badge tone={STATUS[st][0]}>{STATUS[st][1]}</Badge></div>
                <p style={{ fontSize: '.76rem', color: 'var(--vx-muted)', margin: '.4rem 0 0', lineHeight: 1.5 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY + DATA PROCESSING */}
      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <Label>Privacy</Label>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1rem' }}>Your data, minimized</h2>
            {[['Data minimization', 'We collect only what a verification requires, and no more.'], ['Purpose limitation', 'Data is used solely for the verification you requested.'], ['Right to erasure', 'Biometric templates are deleted within 30 days of a decision.'], ['Transparency', 'A full DPA and processing record are available on request.']].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: '.7rem', padding: '.6rem 0', borderBottom: '1px solid var(--vx-off)' }}>
                <i className="fas fa-circle-check" style={{ color: 'var(--vx-success)', marginTop: 3 }} />
                <div><div style={{ fontSize: '.86rem', fontWeight: 700 }}>{t}</div><div style={{ fontSize: '.78rem', color: 'var(--vx-muted)' }}>{d}</div></div>
              </div>
            ))}
          </div>
          <div>
            <Label>Data processing</Label>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1rem' }}>Sub-processors</h2>
            <div style={{ background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 9, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.2fr 1fr', gap: '.5rem', padding: '.6rem .9rem', borderBottom: '1px solid var(--vx-border)', fontFamily: 'var(--font-mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>
                <span>Sub-processor</span><span>Purpose</span><span>Region</span>
              </div>
              {SUBPROCESSORS.map((r, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1.2fr 1fr', gap: '.5rem', padding: '.65rem .9rem', borderBottom: i < SUBPROCESSORS.length - 1 ? '1px solid var(--vx-border)' : 'none', fontSize: '.8rem', background: '#fff' }}>
                  <span style={{ fontWeight: 600 }}>{r[0]}</span><span style={{ color: 'var(--vx-muted)' }}>{r[1]}</span><span style={{ color: 'var(--vx-muted)' }}>{r[2]}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '.74rem', color: 'var(--vx-light)', marginTop: '.7rem' }}>Representative categories. The current named list ships with 30 days notice of change in the DPA.</p>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE DISCLOSURE + SECURITY CONTACT */}
      <section id="disclosure" style={{ padding: '4rem 0', background: 'var(--vx-navy)' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2rem', alignItems: 'start' }}>
          <div>
            <Label color="rgba(255,255,255,.55)">Responsible disclosure</Label>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', margin: '.4rem 0 1rem' }}>Found a vulnerability?</h2>
            <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, margin: '0 0 1.2rem' }}>
              We welcome reports from security researchers. Disclose in good faith, give us reasonable time to remediate, and avoid accessing data that isn't yours — and we'll acknowledge your contribution.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {[['1', 'Email a detailed report to our security team'], ['2', 'We acknowledge within 3 business days'], ['3', 'We remediate and credit valid findings']].map(([n, t]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--vx-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '.72rem', fontWeight: 700, flexShrink: 0 }}>{n}</span>
                  <span style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.8)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--vx-navy-2)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, padding: '1.4rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: '.8rem' }}>Security contact</div>
            {[['fas fa-envelope', 'security@verfix.swiss'], ['fas fa-key', 'PGP key on request'], ['fas fa-file-shield', 'security.txt published']].map(([ic, t]) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.5rem 0', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
                <i className={ic} style={{ color: 'var(--vx-red)', width: 16 }} /><span style={{ fontFamily: 'var(--font-mono)', fontSize: '.8rem', color: '#fff' }}>{t}</span>
              </div>
            ))}
            <Button variant="red" size="md" icon="fas fa-paper-plane" style={{ width: '100%', marginTop: '1rem' }}>Contact security</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.TrustCenter = TrustCenter;
})();
