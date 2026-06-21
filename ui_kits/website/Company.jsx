// VerfiX Company — about / team / trust & security page.
// NOTE: trust signals here are deliberately honest for an early-stage Swiss startup.
// Certifications not yet held are marked "Planned"; regulatory frameworks are "Aligned".
(function(){
const { Label, Button, IconChip, Card, Badge } = window.VerfiXDesignSystem_1000e3;

const VALUES = [
  { i: 'fas fa-lock', t: 'Privacy by design', d: 'Data minimization and Swiss data residency are defaults, not add-ons.' },
  { i: 'fas fa-scale-balanced', t: 'Explainable by default', d: 'Every decision is traceable to the signals that produced it.' },
  { i: 'fas fa-globe', t: 'Built for regulators', d: 'We map to the frameworks supervisors actually enforce.' },
];

// Founding facts only — no inflated coverage/volume metrics.
const FACTS = [
  ['2021', 'Founded', 'Lausanne, Switzerland'],
  ['🇨🇭', 'Swiss-built', 'Data residency by design'],
  ['Seed', 'Stage', 'Building toward first design partners'],
];

// Team — real photos in assets/team/<id>.jpg. Hover reveals the bio overlay.
const TEAM = [
  { id: 'ahmed', name: 'Ahmed Al-Sultan', role: 'Founder & CEO', initials: 'AA',
    li: 'https://www.linkedin.com/in/ahmedalsultan',
    bio: 'Founder and CEO of VerfiX. Leads vision, strategy, partnerships and go-to-market. Background across entrepreneurship, business development, compliance technology and digital transformation — building VerfiX into a European verification infrastructure platform.' },
  { id: 'manel', name: 'Manel Mhamdi', role: 'Co-Founder & Business Development', initials: 'MM',
    li: 'https://www.linkedin.com/in/manel-mhamdi-97019b111/?locale=en',
    bio: 'Drives strategic growth, partnerships and market expansion. Experience spans international business, stakeholder management and partnership development — bridging market needs with product strategy and commercial execution across regulated industries.' },
  { id: 'petter', name: 'Petter Stahl', role: 'Co-Founder & Technology Lead', initials: 'PS',
    li: 'https://www.linkedin.com/in/petter-stahl',
    bio: 'Leads technical architecture and platform development. Focused on scalable systems, enterprise software architecture and API ecosystems — guiding the platform toward a secure, scalable, enterprise-ready verification infrastructure.' },
];

// Honest security & compliance posture. status: live | aligned | planned
const POSTURE = [
  { ic: 'fas fa-server', n: 'Swiss data residency', status: 'live', note: 'All data processed & stored in CH/EU' },
  { ic: 'fas fa-flag', n: 'nFADP (Switzerland)', status: 'aligned', note: 'Built to the Swiss FADP' },
  { ic: 'fas fa-shield-halved', n: 'GDPR (EU)', status: 'aligned', note: 'Lawful basis & data-subject rights' },
  { ic: 'fas fa-id-badge', n: 'eIDAS', status: 'aligned', note: 'Mapped to eIDAS assurance levels' },
  { ic: 'fas fa-certificate', n: 'ISO 27001', status: 'planned', note: 'On the certification roadmap' },
  { ic: 'fas fa-building-columns', n: 'SOC 2 Type II', status: 'planned', note: 'On the certification roadmap' },
];
const STATUS = {
  live: { tone: 'success', label: 'Live' },
  aligned: { tone: 'info', label: 'Aligned' },
  planned: { tone: 'warn', label: 'Planned' },
};

function TeamCard({ m }) {
  const [hover, setHover] = React.useState(false);
  const [err, setErr] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--vx-border)', aspectRatio: '4 / 5', background: 'var(--vx-navy)', boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-xs)', transition: 'box-shadow .25s' }}>
      {!err
        ? <img src={`../../assets/team/${m.id}.jpg`} alt={m.name} onError={() => setErr(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', filter: hover ? 'brightness(.5)' : 'none', transition: 'filter .25s' }} />
        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.6rem', color: '#fff' }}>{m.initials}</div>}
      {/* base name plate */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '1rem 1.1rem', background: 'linear-gradient(transparent, rgba(15,20,32,.92))', opacity: hover ? 0 : 1, transition: 'opacity .25s' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', letterSpacing: '-.02em' }}>{m.name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--vx-red)', fontWeight: 600, marginTop: 2 }}>{m.role}</div>
      </div>
      {/* hover bio overlay */}
      <div style={{ position: 'absolute', inset: 0, padding: '1.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', opacity: hover ? 1 : 0, transition: 'opacity .25s', pointerEvents: hover ? 'auto' : 'none' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', letterSpacing: '-.02em' }}>{m.name}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.64rem', letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--vx-red)', fontWeight: 600, margin: '2px 0 .6rem' }}>{m.role}</div>
        <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.82)', lineHeight: 1.55, margin: '0 0 .8rem' }}>{m.bio}</p>
        <a href={m.li} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.78rem', fontWeight: 700, color: '#fff', textDecoration: 'none', alignSelf: 'flex-start', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 6, padding: '.35rem .7rem' }}><i className="fab fa-linkedin-in" />LinkedIn</a>
      </div>
    </div>
  );
}

function Company({ onCTA, onNav }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {/* HERO */}
      <section style={{ padding: '4.5rem 0 3rem', background: '#fff', borderBottom: '1px solid var(--vx-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <Label style={{ justifyContent: 'center' }}>Company</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,3.6vw,3rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, color: 'var(--vx-text)', margin: '.5rem 0 .9rem' }}>
            Trust is infrastructure.
          </h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--vx-muted)', lineHeight: 1.75, margin: 0 }}>
            VerfiX is a Swiss company building the verification layer that regulated businesses depend on — engineered in Lausanne for compliance teams worldwide.
          </p>
        </div>
      </section>

      {/* FOUNDING FACTS */}
      <section style={{ padding: '3rem 0', background: 'var(--vx-navy-3)' }}>
        <div className="vx-grid-3" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {FACTS.map(([v, l, d]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--vx-red)', letterSpacing: '-.03em', lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: '.9rem', fontWeight: 700, color: '#fff', marginTop: '.5rem' }}>{l}</div>
              <div style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.5)', marginTop: '.2rem' }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: '4.5rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label>What we believe</Label>
          <h2 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 2rem' }}>Principles, not posture</h2>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.1rem' }}>
            {VALUES.map(v => (
              <Card key={v.t} accent>
                <IconChip icon={v.i} size="lg" style={{ marginBottom: '.8rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--vx-text)', margin: '0 0 .4rem' }}>{v.t}</h3>
                <p style={{ fontSize: '.84rem', color: 'var(--vx-muted)', lineHeight: 1.65, margin: 0 }}>{v.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '4.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Team</Label>
          <h2 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 2rem' }}>The people behind VerfiX</h2>
          <p style={{ fontSize: '.92rem', color: 'var(--vx-muted)', margin: '0 0 1.6rem', maxWidth: 540 }}>Hover any founder to read their background.</p>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.1rem' }}>
            {TEAM.map(m => <TeamCard key={m.id} m={m} />)}
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE — honest posture */}
      <section style={{ padding: '4.5rem 0', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Security &amp; Compliance</Label>
          <h2 style={{ fontSize: 'clamp(1.6rem,2.5vw,2.2rem)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--vx-text)', margin: '.4rem 0 .6rem' }}>Honest about where we are</h2>
          <p style={{ fontSize: '.9rem', color: 'var(--vx-muted)', maxWidth: 580, margin: '0 0 2rem' }}>We publish our real posture. Frameworks we align to today are marked <b>Aligned</b>; certifications on our roadmap are marked <b>Planned</b>. No badge here implies an audit we haven't completed.</p>
          <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem' }}>
            {POSTURE.map(p => (
              <div key={p.n} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1.1rem 1.2rem', display: 'flex', alignItems: 'flex-start', gap: '.8rem' }}>
                <div style={{ width: 34, height: 34, borderRadius: 7, background: 'var(--vx-red-bg)', color: 'var(--vx-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className={p.ic} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.4rem' }}>
                    <span style={{ fontSize: '.86rem', fontWeight: 700 }}>{p.n}</span>
                    <Badge tone={STATUS[p.status].tone}>{STATUS[p.status].label}</Badge>
                  </div>
                  <div style={{ fontSize: '.74rem', color: 'var(--vx-muted)', marginTop: '.3rem' }}>{p.note}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '.7rem', justifyContent: 'center', marginTop: '2.2rem', flexWrap: 'wrap' }}>
            <Button variant="outline" size="lg" icon="fas fa-shield-halved" onClick={() => onNav && onNav('trust')}>Visit Trust Center</Button>
            <Button variant="red" size="lg" icon="fas fa-calendar-check" onClick={onCTA}>Book a Demo</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Company = Company;
})();
