// VerfiX Pilot Program — landing + 30/60/90 tracks + multi-step application flow + FAQ.
(function(){
const { Label, Button, IconChip, Badge, Input } = window.VerfiXDesignSystem_1000e3;

const TRACKS = [
  { d: '30', name: 'Sprint Pilot', for: 'Single flow, fast signal', items: ['1 verification flow (KYC or KYB)', 'Hosted integration', 'Success review at day 30'] },
  { d: '60', name: 'Standard Pilot', for: 'Most teams', featured: true, items: ['KYC + KYB + AML', 'Hosted or API', 'Rules tuned to your policy', 'Mid-point + final review'] },
  { d: '90', name: 'Deep Pilot', for: 'Complex / regulated rollout', items: ['Full platform incl. Case Mgmt', 'API + webhooks integration', 'Compliance workflow setup', 'Production-readiness sign-off'] },
];

const CRITERIA = [
  ['fas fa-building-columns', 'Regulated business', 'Bank, fintech, crypto exchange, insurer, or telecom with a real onboarding flow.'],
  ['fas fa-users', 'Onboarding volume', 'A live or near-live flow with meaningful applicant volume to evaluate.'],
  ['fas fa-user-shield', 'Compliance owner', 'A named compliance or risk stakeholder to define the decision policy.'],
  ['fas fa-plug', 'Integration capacity', 'Engineering availability for a hosted or API integration during the pilot.'],
];

const METRICS = [
  ['Pass / completion rate', 'Share of applicants who complete verification.'],
  ['Decision time', 'Median time from start to Approve/Review/Reject.'],
  ['Manual review rate', 'Share routed to an analyst vs auto-decided.'],
  ['Fraud catch', 'Flagged attempts the Trust Engine surfaced.'],
];

const FAQ = [
  ['What does a pilot cost?', 'A fixed pilot fee scoped to the track and checks — no per-verification usage risk during evaluation. We quote it up front.'],
  ['How long to get started?', 'Hosted pilots can start within days of a signed pilot agreement; API pilots depend on your integration capacity.'],
  ['What happens after?', 'We review against the success metrics you set. If the pilot hits them, we convert to an Enterprise plan; if not, you walk away with the data.'],
  ['Is our data safe during a pilot?', 'Yes — pilots run under the same Swiss/EU data-residency and processing terms as production, governed by a pilot agreement + DPA.'],
];

function Stepper({ step }) {
  const labels = ['Company', 'Use case', 'Submit'];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1.5rem' }}>
      {labels.map((l, i) => (
        <React.Fragment key={l}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.45rem' }}>
            <span style={{ width: 24, height: 24, borderRadius: '50%', background: i <= step ? 'var(--vx-red)' : 'var(--vx-off)', color: i <= step ? '#fff' : 'var(--vx-light)', border: '1px solid ' + (i <= step ? 'var(--vx-red)' : 'var(--vx-border)'), display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '.7rem', fontWeight: 700 }}>{i < step ? <i className="fas fa-check" style={{ fontSize: '.6rem' }} /> : i + 1}</span>
            <span style={{ fontSize: '.78rem', fontWeight: 600, color: i <= step ? 'var(--vx-text)' : 'var(--vx-light)' }}>{l}</span>
          </div>
          {i < 2 && <span style={{ flex: 1, height: 1, background: 'var(--vx-border)', maxWidth: 40 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Application({ track }) {
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--vx-success-bg)', color: 'var(--vx-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', margin: '0 auto 1rem' }}><i className="fas fa-check" /></div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: '0 0 .5rem' }}>Application received</h3>
        <p style={{ fontSize: '.9rem', color: 'var(--vx-muted)', maxWidth: 360, margin: '0 auto' }}>Thanks — our team reviews pilot applications within two business days and will reach out to scope your {track}-day pilot.</p>
      </div>
    );
  }
  return (
    <div>
      <Stepper step={step} />
      {step === 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.9rem' }}>
            <Input label="Company" placeholder="Acme Bank AG" required />
            <Input label="Work email" type="email" placeholder="you@acme.ch" required />
          </div>
          <Input label="Industry" as="select" options={['Banking', 'Fintech', 'Crypto exchange', 'Insurance', 'Telecom', 'Government', 'Other']} />
          <Button variant="red" size="md" style={{ alignSelf: 'flex-end' }} iconRight="fas fa-arrow-right" onClick={() => setStep(1)}>Continue</Button>
        </div>
      )}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
          <Input label="What do you need to verify?" as="select" options={['KYC — individuals', 'KYB — companies', 'KYC + KYB', 'AML screening only']} />
          <Input label="Monthly onboarding volume" as="select" options={['< 1,000', '1,000 – 10,000', '10,000 – 100,000', '100,000+']} />
          <Input label="Anything we should know?" as="textarea" placeholder="Current flow, pain points, timeline…" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="ghost" size="md" icon="fas fa-arrow-left" onClick={() => setStep(0)}>Back</Button>
            <Button variant="red" size="md" iconRight="fas fa-arrow-right" onClick={() => setStep(2)}>Continue</Button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
          <div style={{ background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.5rem' }}>You're applying for</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}><Badge tone="red">{track}-day pilot</Badge><span style={{ fontSize: '.85rem', color: 'var(--vx-muted)' }}>Fixed pilot fee · scoped on review</span></div>
          </div>
          <Input label="Name" placeholder="Jane Müller" required />
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', fontSize: '.8rem', color: 'var(--vx-muted)' }}>
            <input type="checkbox" style={{ marginTop: 3 }} /> I agree to be contacted about a VerfiX pilot and accept the pilot terms & privacy notice.
          </label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="ghost" size="md" icon="fas fa-arrow-left" onClick={() => setStep(1)}>Back</Button>
            <Button variant="red" size="md" icon="fas fa-paper-plane" onClick={() => setDone(true)}>Submit application</Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Pilot({ onCTA }) {
  const [track, setTrack] = React.useState('60');
  const [faq, setFaq] = React.useState(0);
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ background: 'var(--vx-navy)', padding: '4rem 0 3.4rem' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <Badge tone="red"><i className="fas fa-rocket" style={{ marginRight: 4 }} />Early Access</Badge>
          <h1 style={{ fontSize: 'clamp(2.2rem,4vw,3.2rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, color: '#fff', margin: '.9rem 0 .8rem' }}>The VerfiX Pilot Program</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,.62)', lineHeight: 1.7, margin: '0 auto', maxWidth: 560 }}>
            Prove verification value on your own onboarding flow in 30–90 days — fixed fee, real data, measurable success criteria. Built for banks, fintechs, crypto exchanges, insurers and telecoms.
          </p>
          <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center', marginTop: '1.6rem', flexWrap: 'wrap' }}>
            <Button variant="red" size="lg" icon="fas fa-paper-plane" onClick={() => document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })}>Apply now</Button>
            <Button variant="white" size="lg" icon="fas fa-file-lines">Pilot one-pager</Button>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section style={{ padding: '3.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Pilot tracks</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.6rem' }}>Choose a timeline</h2>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.1rem' }}>
            {TRACKS.map(t => (
              <div key={t.d} style={{ position: 'relative', border: '1px solid ' + (t.featured ? 'var(--vx-red)' : 'var(--vx-border)'), borderRadius: 12, padding: '1.5rem', background: t.featured ? 'var(--vx-red-bg)' : '#fff' }}>
                {t.featured && <div style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)' }}><Badge tone="red">Recommended</Badge></div>}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '.3rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.4rem', fontWeight: 700, letterSpacing: '-.04em', color: 'var(--vx-red)' }}>{t.d}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--vx-light)' }}>days</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '.3rem 0 .15rem' }}>{t.name}</h3>
                <div style={{ fontSize: '.74rem', color: 'var(--vx-light)', marginBottom: '.9rem' }}>{t.for}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
                  {t.items.map(it => <div key={it} style={{ display: 'flex', alignItems: 'flex-start', gap: '.5rem', fontSize: '.81rem' }}><i className="fas fa-check" style={{ color: 'var(--vx-red)', fontSize: '.74rem', marginTop: 3 }} />{it}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRITERIA + METRICS */}
      <section style={{ padding: '3.5rem 0', background: 'var(--vx-off)' }}>
        <div className="vx-grid-2" style={{ maxWidth: 1080, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <Label>Qualification</Label>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1rem' }}>Who qualifies</h2>
            {CRITERIA.map(([ic, t, d]) => (
              <div key={t} style={{ display: 'flex', gap: '.8rem', padding: '.7rem 0', borderBottom: '1px solid var(--vx-border)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 7, background: 'var(--vx-red-bg)', color: 'var(--vx-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className={ic} /></div>
                <div><div style={{ fontSize: '.86rem', fontWeight: 700 }}>{t}</div><div style={{ fontSize: '.78rem', color: 'var(--vx-muted)' }}>{d}</div></div>
              </div>
            ))}
          </div>
          <div>
            <Label>Success metrics</Label>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1rem' }}>How we measure it</h2>
            <p style={{ fontSize: '.84rem', color: 'var(--vx-muted)', margin: '0 0 1rem', lineHeight: 1.6 }}>You set target thresholds at kickoff; we report against them at review.</p>
            {METRICS.map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: '.7rem', padding: '.6rem 0', borderBottom: '1px solid var(--vx-border)' }}>
                <i className="fas fa-chart-line" style={{ color: 'var(--vx-red)', marginTop: 3 }} />
                <div><div style={{ fontSize: '.85rem', fontWeight: 700 }}>{t}</div><div style={{ fontSize: '.77rem', color: 'var(--vx-muted)' }}>{d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section id="apply" style={{ padding: '3.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.6rem' }}>
            <Label style={{ justifyContent: 'center' }}>Apply</Label>
            <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 .3rem' }}>Apply for a pilot</h2>
          </div>
          <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginBottom: '1.4rem' }}>
            {TRACKS.map(t => (
              <button key={t.d} onClick={() => setTrack(t.d)} style={{ fontFamily: 'var(--font-body)', fontSize: '.8rem', fontWeight: 700, cursor: 'pointer', padding: '.4rem 1rem', borderRadius: 100, border: '1px solid ' + (track === t.d ? 'var(--vx-red)' : 'var(--vx-border)'), background: track === t.d ? 'var(--vx-red)' : '#fff', color: track === t.d ? '#fff' : 'var(--vx-muted)' }}>{t.d}-day</button>
            ))}
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 12, padding: '1.6rem', boxShadow: 'var(--shadow-sm)' }}>
            <Application track={track} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3.5rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Pilot FAQ</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2.1rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 1.4rem' }}>Before you apply</h2>
          {FAQ.map(([q, a], i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--vx-border)' }}>
              <button onClick={() => setFaq(faq === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', background: 'transparent', border: 'none', padding: '1rem 0', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)' }}>
                <span style={{ fontSize: '.95rem', fontWeight: 700 }}>{q}</span>
                <i className={faq === i ? 'fas fa-minus' : 'fas fa-plus'} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} />
              </button>
              {faq === i && <p style={{ fontSize: '.88rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: '0 0 1.1rem' }}>{a}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

window.Pilot = Pilot;
})();
