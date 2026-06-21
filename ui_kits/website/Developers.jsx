// VerfiX Developers — docs-style landing with a code panel and endpoint list.
(function(){
const { Label, Button, IconChip, Card, Tag } = window.VerfiXDesignSystem_1000e3;

const CODE = `POST /v2/verifications
Authorization: Bearer vx_live_••••

{
  "type": "kyc",
  "applicant": {
    "first_name": "Sofia",
    "last_name":  "Brunner",
    "country":    "CH"
  },
  "checks": ["document", "face", "aml"]
}

→ 201 Created
{
  "id": "vrf_8Kd2mQ",
  "trust_score": 96,
  "decision": "approve"
}`;

const ENDPOINTS = [
  ['POST', '/v2/verifications', 'Create a verification'],
  ['GET', '/v2/verifications/:id', 'Retrieve result & score'],
  ['POST', '/v2/companies', 'Run a KYB check'],
  ['POST', '/v2/webhooks', 'Subscribe to decisions'],
];
const SDKS = [['fab fa-node-js', 'Node.js'], ['fab fa-python', 'Python'], ['fab fa-java', 'Java'], ['fab fa-golang', 'Go'], ['fab fa-php', 'PHP'], ['fab fa-react', 'React']];

function Developers({ onCTA }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '4.5rem 0', background: 'var(--vx-navy)' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <Label color="rgba(255,255,255,.6)">Developers</Label>
            <h1 style={{ color: '#fff', fontSize: 'clamp(2rem,3.4vw,2.9rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, margin: '.5rem 0 .9rem' }}>
              Trust, in a few lines of code.
            </h1>
            <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.98rem', lineHeight: 1.7, margin: '0 0 1.6rem', maxWidth: 420 }}>
              A single REST API and typed SDKs. Create a verification, read back a Trust Score™ and decision — no infrastructure to run.
            </p>
            <div style={{ display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
              <Button variant="red" size="lg" icon="fas fa-book" onClick={onCTA}>Read the docs</Button>
              <Button variant="white" size="lg" icon="fas fa-key">Get API keys</Button>
            </div>
          </div>
          <div style={{ background: 'var(--vx-navy-3)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 10, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', padding: '.6rem .9rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
              {['#ef4444', '#f59e0b', '#22c55e'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'rgba(255,255,255,.55)', marginLeft: '.5rem' }}>create-verification.sh</span>
            </div>
            <pre style={{ margin: 0, padding: '1.1rem 1.2rem', fontFamily: 'var(--font-mono)', fontSize: '.72rem', lineHeight: 1.65, color: 'rgba(255,255,255,.82)', overflow: 'auto' }}>{CODE}</pre>
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '2.5rem' }}>
          <div>
            <Label>API Reference</Label>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 1.3rem' }}>Core endpoints</h2>
            <div style={{ border: '1px solid var(--vx-border)', borderRadius: 8, overflow: 'hidden' }}>
              {ENDPOINTS.map(([m, p, d], i) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '.9rem', padding: '.85rem 1rem', borderTop: i ? '1px solid var(--vx-border)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', fontWeight: 700, color: m === 'GET' ? 'var(--vx-info)' : 'var(--vx-red)', width: 36 }}>{m}</span>
                  <code style={{ fontFamily: 'var(--font-mono)', fontSize: '.78rem', color: 'var(--vx-text)', flex: 1 }}>{p}</code>
                  <span style={{ fontSize: '.76rem', color: 'var(--vx-light)' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Label>SDKs</Label>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 1.3rem' }}>Official libraries</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.7rem' }}>
              {SDKS.map(([ic, n]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '.65rem', padding: '.8rem .95rem', border: '1px solid var(--vx-border)', borderRadius: 7 }}>
                  <i className={ic} style={{ color: 'var(--vx-red)', fontSize: '1rem', width: 18 }} />
                  <span style={{ fontSize: '.84rem', fontWeight: 600, color: 'var(--vx-text)' }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Developers = Developers;
})();
