// VerfiX KYB Company Profile — registry, directors, UBOs, ownership graph, risk, adverse media, sanctions, timeline.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip, TrustScore, DecisionPill } = DS;

const TABS = [
  { id: 'overview', label: 'Overview', icon: 'fas fa-building' },
  { id: 'registry', label: 'Registry', icon: 'fas fa-file-contract' },
  { id: 'people', label: 'Directors & UBOs', icon: 'fas fa-users' },
  { id: 'ownership', label: 'Ownership', icon: 'fas fa-sitemap' },
  { id: 'risk', label: 'Risk & Media', icon: 'fas fa-triangle-exclamation' },
  { id: 'timeline', label: 'Timeline', icon: 'fas fa-clock-rotate-left' },
];

function KYBProfile() {
  const [tab, setTab] = React.useState('overview');
  return (
    <div className="kyb-shell">
      <TopBar />
      <CompanyHeader tab={tab} />
      <div style={{ display: 'flex', gap: 0, padding: '0 1.9rem', borderBottom: '1px solid var(--vx-border)', background: '#fff', overflowX: 'auto' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ display: 'flex', alignItems: 'center', gap: '.45rem', fontFamily: 'var(--font-body)', fontSize: '.83rem', fontWeight: 600, whiteSpace: 'nowrap',
            background: 'transparent', border: 'none', borderBottom: '2px solid ' + (tab === t.id ? 'var(--vx-red)' : 'transparent'), color: tab === t.id ? 'var(--vx-red)' : 'var(--vx-muted)', padding: '.85rem .9rem', cursor: 'pointer' }}>
            <i className={t.icon} style={{ fontSize: '.78rem' }} />{t.label}
          </button>
        ))}
      </div>
      <div style={{ padding: '1.6rem 1.9rem' }}>
        {tab === 'overview' && <Overview />}
        {tab === 'registry' && <Registry />}
        {tab === 'people' && <People />}
        {tab === 'ownership' && <Ownership />}
        {tab === 'risk' && <RiskMedia />}
        {tab === 'timeline' && <Timeline />}
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header style={{ height: 54, background: 'var(--vx-navy)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.9rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem', fontSize: '.8rem', color: 'rgba(255,255,255,.6)' }}>
        <a href="../website/index.html" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}><i className="fas fa-arrow-left" /></a>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem' }}>KYB</span>
        <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
        <span style={{ color: '#fff', fontWeight: 600 }}>Helvetia Trust AG</span>
      </div>
      <div style={{ display: 'flex', gap: '.5rem' }}>
        <Button variant="ghost" size="sm" icon="fas fa-download" style={{ color: 'rgba(255,255,255,.7)' }}>Export PDF</Button>
        <Button variant="red" size="sm" icon="fas fa-arrows-rotate">Re-run check</Button>
      </div>
    </header>
  );
}

function CompanyHeader() {
  return (
    <div style={{ background: '#fff', padding: '1.5rem 1.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem' }}>
        <div style={{ width: 56, height: 56, borderRadius: 10, background: 'var(--vx-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem' }}>H</div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.45rem', fontWeight: 800, letterSpacing: '-.03em', margin: 0, whiteSpace: 'nowrap' }}>Helvetia Trust AG</h1>
            <Badge tone="warn" icon="fas fa-clock">Manual review</Badge>
          </div>
          <div style={{ display: 'flex', gap: '1.1rem', marginTop: '.4rem', fontSize: '.78rem', color: 'var(--vx-muted)', flexWrap: 'wrap' }}>
            <span><i className="fas fa-hashtag" style={{ color: 'var(--vx-light)', marginRight: 4 }} />CHE-114.227.811</span>
            <span><i className="fas fa-location-dot" style={{ color: 'var(--vx-light)', marginRight: 4 }} />Zürich, Switzerland</span>
            <span><i className="fas fa-industry" style={{ color: 'var(--vx-light)', marginRight: 4 }} />Financial services</span>
            <span><i className="fas fa-calendar" style={{ color: 'var(--vx-light)', marginRight: 4 }} />Inc. 2014</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 2 }}>UBOs verified</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 700 }}>3 / 4</div>
        </div>
        <TrustScore score={71} size={104} label="KYB Risk" />
      </div>
    </div>
  );
}

// ── shared bits ──────────────────────────────────────
function Card({ children, style = {} }) { return <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1.2rem', ...style }}>{children}</div>; }
function Head({ children, icon, right }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.9rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>{icon && <i className={icon} style={{ color: 'var(--vx-red)', fontSize: '.82rem' }} />}<h2 style={{ fontSize: '.95rem', fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>{children}</h2></div>
    {right}
  </div>;
}
function Row({ k, v }) { return <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', padding: '.5rem 0', borderBottom: '1px solid var(--vx-off)', fontSize: '.83rem' }}><span style={{ color: 'var(--vx-light)' }}>{k}</span><span style={{ fontWeight: 600, color: 'var(--vx-text)', textAlign: 'right' }}>{v}</span></div>; }

// ── OVERVIEW ─────────────────────────────────────────
function Overview() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }} className="kyb-cols">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card>
          <Head icon="fas fa-circle-info">Company summary</Head>
          <p style={{ fontSize: '.86rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: '0 0 1rem' }}>
            Helvetia Trust AG is a Zürich-based fiduciary and wealth-structuring firm regulated under Swiss FINMA AMLA. The entity is active and in good standing. Three of four ultimate beneficial owners are fully verified; one indirect UBO via a Liechtenstein holding requires manual confirmation.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem' }}>
            <Row k="Legal form" v="Aktiengesellschaft (AG)" />
            <Row k="Status" v={<Badge tone="success">Active</Badge>} />
            <Row k="Registered" v="14 Mar 2014" />
            <Row k="Share capital" v="CHF 2,000,000" />
            <Row k="Employees" v="42" />
            <Row k="VAT" v="CHE-114.227.811 MWST" />
          </div>
        </Card>
        <Card>
          <Head icon="fas fa-clipboard-check">Compliance summary</Head>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '.6rem' }}>
            {[['Sanctions', 'Clear', 'success', 'fas fa-ban'], ['PEP exposure', '1 associate', 'warn', 'fas fa-user-tie'], ['Adverse media', '2 low-severity', 'warn', 'fas fa-newspaper'], ['Registry', 'Verified', 'success', 'fas fa-file-contract']].map(([k, v, tone, ic]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.6rem .7rem', border: '1px solid var(--vx-border)', borderRadius: 7 }}>
                <i className={ic} style={{ color: tone === 'success' ? 'var(--vx-success)' : 'var(--vx-warn)' }} />
                <div><div style={{ fontSize: '.7rem', color: 'var(--vx-light)' }}>{k}</div><div style={{ fontSize: '.8rem', fontWeight: 700 }}>{v}</div></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card>
          <Head icon="fas fa-gauge-high">Risk indicators</Head>
          {[['Geographic risk', 30, 'var(--vx-review)'], ['Ownership complexity', 55, 'var(--vx-review)'], ['PEP / sanctions', 20, 'var(--vx-success)'], ['Adverse media', 25, 'var(--vx-review)']].map(([l, v, c]) => (
            <div key={l} style={{ marginBottom: '.7rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.76rem', marginBottom: 4 }}><span style={{ color: 'var(--vx-muted)' }}>{l}</span><span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{v}</span></div>
              <div style={{ height: 6, background: 'var(--vx-off)', borderRadius: 3 }}><div style={{ width: v + '%', height: '100%', background: c, borderRadius: 3 }} /></div>
            </div>
          ))}
        </Card>
        <Card style={{ background: 'var(--vx-navy)', border: 'none' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.58rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)', marginBottom: '.6rem' }}>Recommended action</div>
          <div style={{ color: '#fff', fontWeight: 700, fontSize: '.95rem', marginBottom: '.5rem' }}>Manual review — confirm indirect UBO</div>
          <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.78rem', lineHeight: 1.6, margin: '0 0 .9rem' }}>One indirect beneficial owner holds 18% via Alpine Holding (LI). Obtain a current shareholder register to complete verification.</p>
          <Button variant="red" size="sm" icon="fas fa-arrow-right" style={{ width: '100%' }}>Open case</Button>
        </Card>
      </div>
    </div>
  );
}

// ── REGISTRY ─────────────────────────────────────────
function Registry() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="kyb-cols">
      <Card>
        <Head icon="fas fa-file-contract" right={<Badge tone="success">Verified</Badge>}>Commercial registry</Head>
        <Row k="Source" v="Handelsregister Zürich (ZEFIX)" />
        <Row k="UID" v="CHE-114.227.811" />
        <Row k="Registry no." v="CH-020.3.041.118-7" />
        <Row k="Legal form" v="Aktiengesellschaft" />
        <Row k="Registered office" v="Bahnhofstrasse 21, 8001 Zürich" />
        <Row k="First entry" v="14 Mar 2014" />
        <Row k="Last mutation" v="08 Nov 2025" />
        <Row k="Purpose" v="Fiduciary & wealth structuring" />
      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card>
          <Head icon="fas fa-file-lines">Source documents</Head>
          {[['Commercial register extract', 'PDF · 14 Nov 2025', 'fas fa-file-pdf'], ['Articles of association', 'PDF · 14 Mar 2014', 'fas fa-file-pdf'], ['Shareholder register', 'Pending', 'fas fa-clock']].map(([n, d, ic]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.55rem 0', borderBottom: '1px solid var(--vx-off)' }}>
              <i className={ic} style={{ color: ic.includes('clock') ? 'var(--vx-warn)' : 'var(--vx-red)', width: 16 }} />
              <div style={{ flex: 1 }}><div style={{ fontSize: '.82rem', fontWeight: 600 }}>{n}</div><div style={{ fontSize: '.7rem', color: 'var(--vx-light)' }}>{d}</div></div>
              {!d.includes('Pending') && <i className="fas fa-download" style={{ color: 'var(--vx-light)', cursor: 'pointer', fontSize: '.8rem' }} />}
            </div>
          ))}
        </Card>
        <Card>
          <Head icon="fas fa-check-double">Verification checks</Head>
          {[['Entity exists in registry', true], ['Active & in good standing', true], ['Address confirmed', true], ['Articles match filing', true], ['Shareholder register current', false]].map(([l, ok]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.4rem 0', fontSize: '.82rem' }}>
              <i className={ok ? 'fas fa-circle-check' : 'fas fa-circle-exclamation'} style={{ color: ok ? 'var(--vx-success)' : 'var(--vx-warn)' }} />{l}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

// ── PEOPLE: directors + UBOs ─────────────────────────
const PEOPLE = [
  { name: 'Dr. Andreas Vogt', role: 'Chairman & Director', own: '34%', pep: false, sanc: false, ver: true, type: 'director' },
  { name: 'Claudia Reinhardt', role: 'Director, CFO', own: '21%', pep: false, sanc: false, ver: true, type: 'director' },
  { name: 'Marc-Olivier Dubois', role: 'Director', own: '12%', pep: true, sanc: false, ver: true, type: 'director' },
  { name: 'Beatrice Keller', role: 'UBO (direct)', own: '15%', pep: false, sanc: false, ver: true, type: 'ubo' },
  { name: 'Alpine Holding AG (LI)', role: 'UBO (indirect, 18%)', own: '18%', pep: false, sanc: false, ver: false, type: 'ubo' },
];

function People() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {['director', 'ubo'].map(type => (
        <Card key={type}>
          <Head icon={type === 'director' ? 'fas fa-user-tie' : 'fas fa-crown'}>{type === 'director' ? 'Directors & officers' : 'Ultimate beneficial owners'}</Head>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {PEOPLE.filter(p => p.type === type).map((p, i, arr) => (
              <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '.9rem', padding: '.7rem 0', borderBottom: i < arr.length - 1 ? '1px solid var(--vx-off)' : 'none' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: p.ver ? 'var(--vx-navy)' : 'var(--vx-off)', color: p.ver ? '#fff' : 'var(--vx-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '.8rem', flexShrink: 0 }}>
                  {p.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '.86rem', fontWeight: 700 }}>{p.name}</div>
                  <div style={{ fontSize: '.74rem', color: 'var(--vx-muted)' }}>{p.role}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.8rem', fontWeight: 700, marginRight: '.3rem' }}>{p.own}</span>
                  {p.pep && <Badge tone="warn">PEP</Badge>}
                  {p.sanc ? <Badge tone="danger">Sanctioned</Badge> : <Badge tone="success">No sanctions</Badge>}
                  {p.ver ? <Badge tone="success" icon="fas fa-check">Verified</Badge> : <Badge tone="warn" icon="fas fa-clock">Pending</Badge>}
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

// ── OWNERSHIP graph ──────────────────────────────────
function Node({ label, sub, pct, tone = 'navy', dashed }) {
  const bg = tone === 'red' ? 'var(--vx-red)' : tone === 'warn' ? '#fff' : 'var(--vx-navy)';
  const col = tone === 'warn' ? 'var(--vx-text)' : '#fff';
  return (
    <div style={{ background: bg, color: col, border: dashed ? '1.5px dashed var(--vx-warn)' : '1px solid ' + bg, borderRadius: 8, padding: '.6rem .8rem', textAlign: 'center', minWidth: 130, boxShadow: 'var(--shadow-sm)' }}>
      {pct && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: tone === 'warn' ? 'var(--vx-warn)' : 'rgba(255,255,255,.6)', marginBottom: 2 }}>{pct}</div>}
      <div style={{ fontSize: '.8rem', fontWeight: 700 }}>{label}</div>
      {sub && <div style={{ fontSize: '.64rem', color: tone === 'warn' ? 'var(--vx-light)' : 'rgba(255,255,255,.55)', marginTop: 1 }}>{sub}</div>}
    </div>
  );
}
function Conn() { return <div style={{ width: 2, height: 20, background: 'var(--vx-border-2)', margin: '0 auto' }} />; }

function Ownership() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }} className="kyb-cols">
      <Card>
        <Head icon="fas fa-sitemap" right={<Badge tone="warn">1 unverified branch</Badge>}>Ownership structure</Head>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '.5rem 0' }}>
          <Node label="Helvetia Trust AG" sub="Subject entity" tone="navy" />
          <Conn />
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Node label="A. Vogt" pct="34%" tone="red" /><Conn /><span style={{ fontSize: '.64rem', color: 'var(--vx-light)' }}>Natural person</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Node label="C. Reinhardt" pct="21%" tone="red" /><Conn /><span style={{ fontSize: '.64rem', color: 'var(--vx-light)' }}>Natural person</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><Node label="B. Keller" pct="15%" tone="red" /><Conn /><span style={{ fontSize: '.64rem', color: 'var(--vx-light)' }}>Natural person</span></div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Node label="Alpine Holding AG" sub="Liechtenstein" pct="18%" tone="warn" dashed /><Conn />
              <Node label="Indirect UBO" sub="unconfirmed" tone="warn" dashed />
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <Head icon="fas fa-percent">Ownership breakdown</Head>
        {[['A. Vogt', 34, 'var(--vx-red)'], ['C. Reinhardt', 21, 'var(--vx-red)'], ['Alpine Holding (LI)', 18, 'var(--vx-warn)'], ['B. Keller', 15, 'var(--vx-red)'], ['Free float / treasury', 12, 'var(--vx-light)']].map(([l, v, c]) => (
          <div key={l} style={{ marginBottom: '.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', marginBottom: 4 }}><span>{l}</span><span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{v}%</span></div>
            <div style={{ height: 7, background: 'var(--vx-off)', borderRadius: 4 }}><div style={{ width: v + '%', height: '100%', background: c, borderRadius: 4 }} /></div>
          </div>
        ))}
        <div style={{ marginTop: '.8rem', fontSize: '.72rem', color: 'var(--vx-muted)', background: 'var(--vx-warn-bg)', borderRadius: 6, padding: '.55rem .7rem' }}>
          <i className="fas fa-triangle-exclamation" style={{ color: 'var(--vx-warn)', marginRight: 4 }} /> Indirect ownership via Alpine Holding requires a current shareholder register to confirm the natural-person UBO.
        </div>
      </Card>
    </div>
  );
}

// ── RISK & MEDIA ─────────────────────────────────────
const MEDIA = [
  { title: 'Local outlet reports fiduciary-sector consolidation in Zürich', src: 'NZZ · Feb 2026', sev: 'low', tag: 'Industry' },
  { title: 'Director named in unrelated civil contract dispute (dismissed)', src: 'Handelszeitung · 2023', sev: 'low', tag: 'Litigation' },
];

function RiskMedia() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '1rem' }} className="kyb-cols">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card>
          <Head icon="fas fa-ban">Sanctions screening</Head>
          {[['EU consolidated list', true], ['OFAC SDN', true], ['SECO (Switzerland)', true], ['UN Security Council', true], ['Interpol notices', true]].map(([l, ok]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.45rem 0', borderBottom: '1px solid var(--vx-off)', fontSize: '.82rem' }}>
              <span>{l}</span><Badge tone="success" icon="fas fa-check">Clear</Badge>
            </div>
          ))}
        </Card>
        <Card>
          <Head icon="fas fa-user-tie">PEP exposure</Head>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.5rem 0' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--vx-warn-bg)', color: 'var(--vx-warn)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className="fas fa-user-tie" /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: '.82rem', fontWeight: 700 }}>Marc-Olivier Dubois</div><div style={{ fontSize: '.72rem', color: 'var(--vx-muted)' }}>Domestic PEP — municipal council, 2018–2022</div></div>
            <Badge tone="warn">Tier 3</Badge>
          </div>
        </Card>
      </div>
      <Card>
        <Head icon="fas fa-newspaper" right={<Badge tone="warn">2 low</Badge>}>Adverse media</Head>
        {MEDIA.map((m, i) => (
          <div key={i} style={{ padding: '.7rem 0', borderBottom: i < MEDIA.length - 1 ? '1px solid var(--vx-off)' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--vx-warn)', marginTop: 5, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '.84rem', fontWeight: 600, lineHeight: 1.4 }}>{m.title}</div>
                <div style={{ display: 'flex', gap: '.5rem', marginTop: '.35rem', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)' }}>{m.src}</span>
                  <Badge tone="neutral">{m.tag}</Badge>
                  <Badge tone="warn">Low severity</Badge>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: '.8rem', fontSize: '.74rem', color: 'var(--vx-muted)' }}>Screened across 40k+ global sources. No high-severity matches found.</div>
      </Card>
    </div>
  );
}

// ── TIMELINE ─────────────────────────────────────────
const EVENTS = [
  { t: '14 Nov 2025 · 09:12', e: 'KYB check initiated', d: 'Triggered by onboarding API', icon: 'fas fa-play', tone: 'info' },
  { t: '14 Nov 2025 · 09:12', e: 'Registry retrieved', d: 'ZEFIX / Handelsregister Zürich matched', icon: 'fas fa-file-contract', tone: 'success' },
  { t: '14 Nov 2025 · 09:13', e: 'Directors & UBOs resolved', d: '5 individuals identified', icon: 'fas fa-users', tone: 'success' },
  { t: '14 Nov 2025 · 09:13', e: 'Sanctions & PEP screened', d: 'No sanctions · 1 PEP associate flagged', icon: 'fas fa-ban', tone: 'warn' },
  { t: '14 Nov 2025 · 09:14', e: 'Adverse media scan', d: '2 low-severity articles surfaced', icon: 'fas fa-newspaper', tone: 'warn' },
  { t: '14 Nov 2025 · 09:14', e: 'Routed to manual review', d: 'Indirect UBO via Alpine Holding unconfirmed', icon: 'fas fa-user-shield', tone: 'warn' },
];

function Timeline() {
  return (
    <Card style={{ maxWidth: 720 }}>
      <Head icon="fas fa-clock-rotate-left">Verification timeline</Head>
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 2, background: 'var(--vx-border)' }} />
        {EVENTS.map((ev, i) => {
          const c = ev.tone === 'success' ? 'var(--vx-success)' : ev.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-info)';
          return (
            <div key={i} style={{ position: 'relative', paddingBottom: i < EVENTS.length - 1 ? '1.1rem' : 0 }}>
              <span style={{ position: 'absolute', left: '-1.5rem', top: 2, width: 14, height: 14, borderRadius: '50%', background: '#fff', border: '2px solid ' + c }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                <i className={ev.icon} style={{ color: c, fontSize: '.78rem' }} />
                <span style={{ fontSize: '.86rem', fontWeight: 700 }}>{ev.e}</span>
              </div>
              <div style={{ fontSize: '.76rem', color: 'var(--vx-muted)', marginTop: 2 }}>{ev.d}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)', marginTop: 2 }}>{ev.t}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

window.KYBProfile = KYBProfile;
})();
