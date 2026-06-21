// VerfiX Demos — product video showcase. Cards with a `yt` ID play the real
// YouTube video on click; cards without one show a "Coming soon" placeholder.
(function(){
const { Label, Button, IconChip, Badge, Tag } = window.VerfiXDesignSystem_1000e3;

const DEMOS = [
  { id: 'kyc', ic: 'fas fa-id-card', t: 'KYC & KYB Verification', len: '', yt: 'wbc3rPniu1M',
    d: 'Swiss digital identity verification for KYC & KYB — document capture, OCR, face match and liveness, with the Trust Score resolving in real time.',
    points: ['Document capture & OCR', 'Passive + active liveness', 'Instant Approve / Review / Reject'] },
  { id: 'gateway', ic: 'fas fa-window-maximize', t: 'VerfiX Gateway — eID Wallets', len: '', yt: '-HJ4ftiiRuk',
    d: 'One API for European digital identity wallets. Launch verification with VerfiX-hosted, embedded screens — branded, mobile-first and localized.',
    points: ['One API for EU eID wallets', 'Hosted & embedded SDK', 'Mobile-first capture'] },
  { id: 'engine', ic: 'fas fa-gauge-high', t: 'Trust Engine™', len: '', yt: '20cseEOwD-w',
    d: 'From verification signals to automated trust decisions: independent signals fused into one explainable 0–100 trust score with a traceable reason for every decision.',
    points: ['Multi-signal fusion', 'Explainable scoring', 'Configurable thresholds'] },
  { id: 'industries', ic: 'fas fa-layer-group', t: 'One Infrastructure, Many Industries', len: '', yt: '9ByXnBRW2H4',
    d: 'One identity platform across banking, fintech, crypto, insurance, telecom and government — the same trust layer, configured per industry.',
    points: ['Six regulated sectors', 'Shared trust layer', 'Per-industry policy'] },
  { id: 'atm', ic: 'fas fa-money-check-dollar', t: 'Revolutionizing the ATM', len: '', yt: 'e65uXNBxd3g',
    d: 'A real-world use case: VerfiX bringing trusted identity verification to ATM and self-service banking experiences.',
    points: ['Self-service identity', 'Branchless onboarding', 'Fraud-resistant access'] },
  { id: 'aml', ic: 'fas fa-magnifying-glass-dollar', t: 'AML Screening', len: '1:50', yt: null,
    d: 'How a name is screened against sanctions, PEP and watchlists, how matches are scored, and how ongoing monitoring re-checks over time.',
    points: ['Sanctions / PEP / watchlists', 'Match scoring & disposition', 'Ongoing monitoring'] },
];

function VideoCard({ demo, reversed, onCTA }) {
  const [hover, setHover] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const player = (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        onClick={() => demo.yt && setPlaying(true)}
        style={{ position: 'relative', aspectRatio: '16 / 9', borderRadius: 12, overflow: 'hidden', background: '#000', border: '1px solid var(--vx-border)', cursor: demo.yt ? 'pointer' : 'default', boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)', transition: 'box-shadow .2s' }}>
        {playing && demo.yt ? (
          <iframe title={demo.t} src={`https://www.youtube.com/embed/${demo.yt}?autoplay=1&rel=0`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        ) : demo.yt ? (
          <>
            <img src={`https://img.youtube.com/vi/${demo.yt}/hqdefault.jpg`} alt={demo.t} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: hover ? 'brightness(.78)' : 'brightness(.92)', transition: 'filter .2s' }} />
            <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: '.5rem', zIndex: 2 }}>
              <IconChip icon={demo.ic} tone="solid" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: '#fff', letterSpacing: '.06em', textTransform: 'uppercase', textShadow: '0 1px 4px rgba(0,0,0,.6)' }}>VerfiX</span>
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
              <span style={{ width: 66, height: 66, borderRadius: '50%', background: 'var(--vx-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', boxShadow: '0 6px 28px rgba(200,37,42,.5)', transform: hover ? 'scale(1.08)' : 'scale(1)', transition: 'transform .2s' }}><i className="fas fa-play" style={{ marginLeft: 4 }} /></span>
            </div>
            <div style={{ position: 'absolute', bottom: 14, left: 14, zIndex: 2 }}><Badge tone="red"><i className="fab fa-youtube" style={{ marginRight: 4 }} />Watch</Badge></div>
          </>
        ) : (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--vx-navy) 0%, var(--vx-navy-3) 100%)' }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
            <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <IconChip icon={demo.ic} tone="solid" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'rgba(255,255,255,.5)', letterSpacing: '.06em', textTransform: 'uppercase' }}>VerfiX demo</span>
            </div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ width: 66, height: 66, borderRadius: '50%', background: 'rgba(255,255,255,.12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}><i className="fas fa-play" style={{ marginLeft: 4 }} /></span>
            </div>
            <div style={{ position: 'absolute', bottom: 14, left: 14 }}><Badge tone="warn">Coming soon</Badge></div>
          </>
        )}
      </div>
      {demo.yt
        ? <p style={{ fontSize: '.74rem', color: 'var(--vx-light)', margin: '.6rem 0 0', textAlign: 'center' }}><i className="fab fa-youtube" style={{ marginRight: 4, color: 'var(--vx-red)' }} />Plays the official VerfiX video on YouTube</p>
        : <p style={{ fontSize: '.74rem', color: 'var(--vx-light)', margin: '.6rem 0 0', textAlign: 'center' }}><i className="fas fa-circle-info" style={{ marginRight: 4 }} />Footage in production</p>}
    </div>
  );
  const copy = (
    <div style={{ flex: 1, minWidth: 0 }}>
      <Label>{demo.t}</Label>
      <h3 style={{ fontSize: 'clamp(1.4rem,2.2vw,1.8rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.5rem 0 .7rem' }}>{demo.t}</h3>
      <p style={{ fontSize: '.95rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: '0 0 1.1rem' }}>{demo.d}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.3rem' }}>
        {demo.points.map(p => (
          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', fontSize: '.85rem', color: 'var(--vx-text)' }}>
            <i className="fas fa-circle-check" style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} />{p}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
        <Button variant="red" size="md" icon="fas fa-calendar-check" onClick={onCTA}>Book a live demo</Button>
        <Button variant="outline" size="md" icon="fas fa-bell">Notify me</Button>
      </div>
    </div>
  );
  return (
    <div className="vx-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center', padding: '2.4rem 0', borderBottom: '1px solid var(--vx-border)' }}>
      {reversed ? <>{copy}{player}</> : <>{player}{copy}</>}
    </div>
  );
}

function Demos({ onCTA }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '4.2rem 0 2.5rem', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem' }}>
          <Label style={{ justifyContent: 'center' }}>Product demos</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,3.6vw,3rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, margin: '.5rem 0 .9rem' }}>See VerfiX in action</h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: 0 }}>
            Six guided walkthroughs of the core flows. Footage is in production — book a live demo to see any flow run on your own use case today.
          </p>
        </div>
      </section>
      <section style={{ background: 'var(--vx-off)', padding: '1rem 0 3rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          {DEMOS.map((d, i) => <VideoCard key={d.id} demo={d} reversed={i % 2 === 1} onCTA={onCTA} />)}
        </div>
      </section>
    </div>
  );
}

window.Demos = Demos;
})();
