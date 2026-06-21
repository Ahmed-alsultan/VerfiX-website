// VerfiX MVP — runnable verification demo driven by the REAL engine (engine.js).
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip, TrustScore } = DS;

const SCENARIOS = {
  clean:   { label: 'Clean applicant', firstName: 'Sofia', lastName: 'Brunner', country: 'CH', docType: 'passport', faceMatch: 'high', amlHit: 'none', tampered: false, emulator: false },
  pep:     { label: 'PEP match', firstName: 'Marc', lastName: 'Dubois', country: 'CH', docType: 'id_card', faceMatch: 'high', amlHit: 'pep', tampered: false, emulator: false },
  fraud:   { label: 'Tampered document + low face', firstName: 'M', lastName: 'Keller', country: 'DE', docType: 'id_card', faceMatch: 'low', amlHit: 'none', tampered: true, emulator: true },
  sanction:{ label: 'Sanctions hit', firstName: 'A', lastName: 'Petrov', country: 'RU', docType: 'passport', faceMatch: 'med', amlHit: 'sanction', tampered: false, emulator: false },
};

const STEPS = [
  { k: 'ocr', icon: 'fas fa-id-card', label: 'OCR / Document', provider: 'VerfiX Native OCR' },
  { k: 'face', icon: 'fas fa-face-smile', label: 'Face & Liveness', provider: 'Biometric Engine v4' },
  { k: 'aml', icon: 'fas fa-magnifying-glass-dollar', label: 'AML Screening', provider: 'AML Data Union' },
  { k: 'engine', icon: 'fas fa-gauge-high', label: 'Trust Engine', provider: 'te-1.0' },
  { k: 'workflow', icon: 'fas fa-diagram-project', label: 'Workflow', provider: 'router' },
];

function MVP() {
  const [scenario, setScenario] = React.useState('clean');
  const [running, setRunning] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(-1);
  const [result, setResult] = React.useState(null);

  const run = () => {
    setRunning(true); setResult(null); setActiveStep(0);
    const out = window.VerfiXEngine.runVerification(SCENARIOS[scenario]);
    // animate the pipeline, then reveal result
    let i = 0;
    const tick = () => {
      i++; setActiveStep(i);
      if (i < STEPS.length) setTimeout(tick, 320);
      else { setResult(out); setRunning(false); }
    };
    setTimeout(tick, 320);
  };

  return (
    <div className="mvp-shell">
      <header style={{ height: 60, background: 'var(--vx-navy)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', color: '#fff' }}>
          <a href="../website/index.html" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}><i className="fas fa-arrow-left" /></a>
          <IconChip icon="fas fa-play" tone="solid" />
          <div>
            <div style={{ fontWeight: 800, fontSize: '.95rem' }}>VerfiX MVP — Live Engine</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'rgba(255,255,255,.5)' }}>real scoring · runs in your browser</div>
          </div>
        </div>
        <Badge tone="info">Sandbox · livemode false</Badge>
      </header>

      <div style={{ padding: '1.6rem 1.9rem' }}>
        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', flexWrap: 'wrap', marginBottom: '1.4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>Scenario</span>
          {Object.entries(SCENARIOS).map(([k, s]) => (
            <button key={k} onClick={() => { setScenario(k); setResult(null); setActiveStep(-1); }} disabled={running}
              style={{ fontFamily: 'var(--font-body)', fontSize: '.78rem', fontWeight: 600, cursor: running ? 'default' : 'pointer', padding: '.4rem .85rem', borderRadius: 100, border: '1px solid ' + (scenario === k ? 'var(--vx-red)' : 'var(--vx-border)'), background: scenario === k ? 'var(--vx-red-bg)' : '#fff', color: scenario === k ? 'var(--vx-red)' : 'var(--vx-muted)' }}>{s.label}</button>
          ))}
          <Button variant="red" size="md" icon={running ? 'fas fa-spinner fa-spin' : 'fas fa-play'} onClick={run} disabled={running} style={{ marginLeft: 'auto' }}>{running ? 'Running…' : 'Run verification'}</Button>
        </div>

        <div className="mvp-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }}>
          {/* Pipeline */}
          <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.2rem' }}>
            <SectionHead>Verification pipeline</SectionHead>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {STEPS.map((s, i) => {
                const done = activeStep > i;
                const active = activeStep === i && running;
                const stepResult = result ? stepSummary(s.k, result.detail) : null;
                return (
                  <React.Fragment key={s.k}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem', padding: '.6rem .2rem', opacity: activeStep < 0 ? .5 : (activeStep >= i ? 1 : .45), transition: 'opacity .2s' }}>
                      <span style={{ width: 34, height: 34, borderRadius: 8, background: done ? 'var(--vx-navy)' : active ? 'var(--vx-red)' : 'var(--vx-off)', color: done || active ? '#fff' : 'var(--vx-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background .2s' }}>
                        <i className={active ? 'fas fa-spinner fa-spin' : done ? 'fas fa-check' : s.icon} />
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '.85rem', fontWeight: 700 }}>{s.label}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.64rem', color: 'var(--vx-light)' }}>{s.provider}</div>
                      </div>
                      {done && stepResult && <span style={{ fontSize: '.76rem', fontWeight: 600, color: stepResult.tone }}>{stepResult.text}</span>}
                    </div>
                    {i < STEPS.length - 1 && <div style={{ width: 2, height: 12, background: 'var(--vx-border)', marginLeft: 17 }} />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Decision */}
          <div style={{ background: result ? '#fff' : 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {result ? (
              <>
                <TrustScore score={result.response.trust_score} size={132} label="Trust Score" />
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '.72rem', color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Workflow</div>
                  <div style={{ fontSize: '.9rem', fontWeight: 700, marginTop: 2 }}>{result.detail.flow.action}</div>
                  {result.detail.flow.queue && <div style={{ fontSize: '.76rem', color: 'var(--vx-muted)' }}>→ {result.detail.flow.queue}</div>}
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', color: 'var(--vx-light)' }}>
                <i className="fas fa-gauge-high" style={{ fontSize: '2rem', marginBottom: '.6rem' }} />
                <div style={{ fontSize: '.84rem' }}>Run a verification to compute a live decision</div>
              </div>
            )}
          </div>
        </div>

        {/* Explainability + API + Audit */}
        {result && (
          <div style={{ marginTop: '1rem' }}>
            <div className="mvp-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.2rem' }}>
                <SectionHead>Why this decision — explainability</SectionHead>
                {result.detail.result.reasons.length === 0
                  ? <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.84rem', color: 'var(--vx-success)' }}><i className="fas fa-circle-check" />No risk signals — all checks passed.</div>
                  : result.detail.result.reasons.map((r, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.5rem 0', borderBottom: '1px solid var(--vx-off)' }}>
                      <i className="fas fa-triangle-exclamation" style={{ color: 'var(--vx-warn)' }} />
                      <div style={{ flex: 1 }}><span style={{ fontSize: '.84rem', fontWeight: 700 }}>{r.signal}</span> <span style={{ fontSize: '.8rem', color: 'var(--vx-muted)' }}>— {r.detail}</span></div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.78rem', fontWeight: 700, color: 'var(--vx-red)' }}>+{r.points}</span>
                    </div>
                  ))}
                <div style={{ marginTop: '.7rem', fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--vx-light)' }}>risk {result.detail.result.risk_score} → trust {result.response.trust_score} · tier {result.detail.result.risk_tier} · {result.detail.result.engine_version}</div>
              </div>
              <div>
                <SectionHead>API response</SectionHead>
                <Code>{JSON.stringify(result.response, null, 2)}</Code>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <SectionHead>Audit trail — append-only, {result.audit.length} entries</SectionHead>
              <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 10, overflow: 'hidden' }}>
                {result.audit.map((a, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 130px 1fr', gap: '.6rem', alignItems: 'center', padding: '.5rem 1rem', borderBottom: i < result.audit.length - 1 ? '1px solid var(--vx-off)' : 'none', fontSize: '.78rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)' }}>{a.ts.replace('T', ' ').slice(0, 19)}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.68rem', color: 'var(--vx-navy)' }}>{a.actor}</span>
                    <span><span style={{ fontWeight: 600 }}>{a.action}</span> <span style={{ color: 'var(--vx-muted)' }}>{a.detail}</span></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SectionHead({ children }) {
  return <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.8rem' }}>{children}</div>;
}
function Code({ children }) {
  return <pre style={{ margin: 0, background: 'var(--vx-navy-3)', color: 'rgba(255,255,255,.85)', borderRadius: 10, padding: '1rem 1.1rem', fontFamily: 'var(--font-mono)', fontSize: '.74rem', lineHeight: 1.6, overflow: 'auto', maxHeight: 300 }}>{children}</pre>;
}
function stepSummary(k, d) {
  if (k === 'ocr') return d.ocr.checks.tamper_detected ? { text: 'Tamper', tone: 'var(--vx-danger)' } : { text: 'Passed', tone: 'var(--vx-success)' };
  if (k === 'face') return d.face.similarity < 0.85 ? { text: d.face.similarity.toFixed(2), tone: 'var(--vx-warn)' } : { text: d.face.similarity.toFixed(2), tone: 'var(--vx-success)' };
  if (k === 'aml') return d.aml.hits > 0 ? { text: (d.aml.sanctions === 'match' ? 'Sanction' : 'PEP'), tone: 'var(--vx-danger)' } : { text: 'Clear', tone: 'var(--vx-success)' };
  if (k === 'engine') return { text: d.result.trust_score + '/100', tone: 'var(--vx-text)' };
  if (k === 'workflow') return { text: d.result.decision, tone: d.result.decision === 'approve' ? 'var(--vx-success)' : d.result.decision === 'review' ? 'var(--vx-warn)' : 'var(--vx-danger)' };
  return null;
}

window.MVP = MVP;
})();
