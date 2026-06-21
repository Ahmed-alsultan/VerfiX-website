// VerfiX Compliance Center — audit logs, consent records, retention, GDPR/nFADP controls,
// user activity logs, export center, regulatory reports.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip } = DS;

const NAV = [
  { id: 'overview', icon: 'fas fa-shield-halved', label: 'Overview' },
  { id: 'audit', icon: 'fas fa-list-check', label: 'Audit Logs' },
  { id: 'consent', icon: 'fas fa-file-signature', label: 'Consent Records' },
  { id: 'retention', icon: 'fas fa-clock', label: 'Data Retention' },
  { id: 'gdpr', icon: 'fas fa-user-shield', label: 'GDPR / nFADP' },
  { id: 'activity', icon: 'fas fa-user-clock', label: 'User Activity' },
  { id: 'exports', icon: 'fas fa-file-export', label: 'Export Center' },
  { id: 'reports', icon: 'fas fa-file-contract', label: 'Regulatory Reports' },
];

function ComplianceCenter() {
  const [view, setView] = React.useState('overview');
  return (
    <div className="cc-shell">
      <div style={{ display: 'grid', gridTemplateColumns: '230px 1fr', minHeight: 740 }}>
        <aside style={{ background: 'var(--vx-navy)', padding: '1.1rem .8rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.55rem', padding: '.2rem .5rem 1.2rem' }}>
            <IconChip icon="fas fa-shield-halved" tone="solid" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff', fontSize: '.95rem' }}>Compliance</span>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {NAV.map(n => (
              <a key={n.id} role="link" tabIndex={0} onClick={() => setView(n.id)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setView(n.id); } }}
                style={{ display: 'flex', alignItems: 'center', gap: '.65rem', padding: '.5rem .55rem', borderRadius: 6, fontSize: '.82rem', fontWeight: 600, cursor: 'pointer',
                  color: view === n.id ? '#fff' : 'rgba(255,255,255,.55)', background: view === n.id ? 'rgba(200,37,42,.18)' : 'transparent' }}>
                <i className={n.icon} style={{ fontSize: '.78rem', width: 16, color: view === n.id ? 'var(--vx-red)' : 'rgba(255,255,255,.4)' }} />{n.label}
              </a>
            ))}
          </nav>
          <a href="../website/index.html" style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '.6rem', padding: '.5rem .55rem', fontSize: '.78rem', fontWeight: 600, color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}><i className="fas fa-arrow-left" style={{ width: 16 }} />Back to site</a>
        </aside>
        <main style={{ padding: '1.7rem 1.9rem', overflow: 'auto' }}>
          {view === 'overview' && <Overview setView={setView} />}
          {view === 'audit' && <AuditLogs />}
          {view === 'consent' && <Consent />}
          {view === 'retention' && <Retention />}
          {view === 'gdpr' && <GDPR />}
          {view === 'activity' && <Activity />}
          {view === 'exports' && <Exports />}
          {view === 'reports' && <Reports />}
        </main>
      </div>
    </div>
  );
}

function Head({ title, sub, actions }) {
  return <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.4rem', flexWrap: 'wrap' }}>
    <div><h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-.03em', margin: 0 }}>{title}</h1>{sub && <p style={{ fontSize: '.85rem', color: 'var(--vx-muted)', margin: '.3rem 0 0', maxWidth: 600 }}>{sub}</p>}</div>
    {actions && <div style={{ display: 'flex', gap: '.5rem' }}>{actions}</div>}
  </div>;
}
function Card({ children, style = {}, pad = '1.2rem' }) { return <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: pad, ...style }}>{children}</div>; }
function SubHead({ children, right }) { return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.8rem' }}><h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)', margin: 0 }}>{children}</h2>{right}</div>; }
const mono = { fontFamily: 'var(--font-mono)', fontSize: '.74rem' };

function Table({ cols, rows, gt }) {
  return <Card pad="0">
    <div style={{ display: 'grid', gridTemplateColumns: gt, gap: '.6rem', padding: '.6rem 1rem', borderBottom: '1px solid var(--vx-border)', fontFamily: 'var(--font-mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>{cols.map((c, i) => <span key={i}>{c}</span>)}</div>
    {rows.map((r, i) => <div key={i} style={{ display: 'grid', gridTemplateColumns: gt, gap: '.6rem', alignItems: 'center', padding: '.65rem 1rem', borderBottom: i < rows.length - 1 ? '1px solid var(--vx-off)' : 'none', fontSize: '.8rem' }}>{r.map((c, j) => <div key={j} style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{c}</div>)}</div>)}
  </Card>;
}

// ── OVERVIEW ─────────────────────────────────────────
function Overview({ setView }) {
  return (
    <>
      <Head title="Compliance Overview" sub="Real-time posture across data protection, consent, retention and regulatory obligations."
        actions={<Button variant="red" size="sm" icon="fas fa-file-export">Generate report</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '.8rem', marginBottom: '1.5rem' }}>
        {[['Compliance score', '96%', 'fas fa-shield-halved', 'var(--vx-success)'], ['Active consents', '12,840', 'fas fa-file-signature', 'var(--vx-text)'], ['DSAR requests · 30d', '7', 'fas fa-user-shield', 'var(--vx-text)'], ['Retention actions due', '3', 'fas fa-clock', 'var(--vx-warn)']].map(([l, v, ic, c]) => (
          <Card key={l}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{l}</span><i className={ic} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} /></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: c, marginTop: '.35rem' }}>{v}</div>
          </Card>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="cc-grid">
        <Card>
          <SubHead>Framework coverage</SubHead>
          {[['GDPR (EU)', 100], ['nFADP (Switzerland)', 100], ['eIDAS', 96], ['ISO 27001', 92], ['SOC 2 Type II', 88]].map(([l, v]) => (
            <div key={l} style={{ marginBottom: '.7rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.78rem', marginBottom: 4 }}><span>{l}</span><span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{v}%</span></div>
              <div style={{ height: 6, background: 'var(--vx-off)', borderRadius: 3 }}><div style={{ width: v + '%', height: '100%', background: v === 100 ? 'var(--vx-success)' : 'var(--vx-red)', borderRadius: 3 }} /></div>
            </div>
          ))}
        </Card>
        <Card>
          <SubHead right={<a onClick={() => setView('reports')} style={{ fontSize: '.74rem', fontWeight: 600, color: 'var(--vx-red)', cursor: 'pointer' }}>All reports →</a>}>Attention required</SubHead>
          {[['3 records past retention window', 'Schedule deletion', 'warn', () => setView('retention')], ['Q1 FINMA AML report due in 6 days', 'Prepare filing', 'warn', () => setView('reports')], ['2 pending DSAR access requests', 'Review requests', 'info', () => setView('gdpr')]].map(([t, a, tone, fn], i) => (
            <div key={i} onClick={fn} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.6rem .7rem', border: '1px solid var(--vx-border)', borderRadius: 7, marginBottom: '.5rem', cursor: 'pointer' }}>
              <i className={tone === 'warn' ? 'fas fa-triangle-exclamation' : 'fas fa-circle-info'} style={{ color: tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-info)' }} />
              <div style={{ flex: 1 }}><div style={{ fontSize: '.8rem', fontWeight: 600 }}>{t}</div><div style={{ fontSize: '.72rem', color: 'var(--vx-red)', fontWeight: 600 }}>{a} →</div></div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}

// ── AUDIT LOGS ───────────────────────────────────────
const ALOG = [
  ['2026-06-19 12:04:51', 'jane.muller@verfix', 'verification.approved', 'vrf_8Kd2mQ', '83.7.21.4'],
  ['2026-06-19 11:58:30', 'system', 'retention.purge', 'batch_2026Q2', '—'],
  ['2026-06-19 11:40:12', 'a.roth@verfix', 'case.reassigned', 'CASE-2041', '83.7.21.9'],
  ['2026-06-19 10:22:05', 'jane.muller@verfix', 'export.created', 'exp_4Lp9', '83.7.21.4'],
  ['2026-06-19 09:14:02', 'system', 'case.created', 'CASE-2041', '—'],
  ['2026-06-18 16:50:44', 'admin@verfix', 'apikey.rotated', 'vx_live_q9Lp', '83.7.21.1'],
];
function AuditLogs() {
  return (
    <>
      <Head title="Audit Logs" sub="Immutable, tamper-evident record of every action across the platform. Retained 10 years."
        actions={<><Button variant="outline" size="sm" icon="fas fa-filter">Filter</Button><Button variant="outline" size="sm" icon="fas fa-download">Export</Button></>} />
      <Table gt="1.3fr 1.6fr 1.4fr 1.1fr .9fr" cols={['Timestamp (UTC)', 'Actor', 'Action', 'Resource', 'IP']}
        rows={ALOG.map(r => [<span style={{ ...mono, color: 'var(--vx-light)' }}>{r[0]}</span>, <span style={mono}>{r[1]}</span>, <Badge tone={r[2].includes('purge') || r[2].includes('rotated') ? 'warn' : 'neutral'}>{r[2]}</Badge>, <span style={mono}>{r[3]}</span>, <span style={{ ...mono, color: 'var(--vx-light)' }}>{r[4]}</span>])} />
    </>
  );
}

// ── CONSENT ──────────────────────────────────────────
const CONSENT = [
  ['Sofia Brunner', 'Identity verification', 'Granted', '2026-05-02', 'success'],
  ['Marco Keller', 'Identity + AML screening', 'Granted', '2026-05-14', 'success'],
  ['L. Dubois', 'Biometric processing', 'Withdrawn', '2026-06-01', 'danger'],
  ['A. Meier', 'Data sharing (partner)', 'Granted', '2026-06-10', 'success'],
];
function Consent() {
  return (
    <>
      <Head title="Consent Records" sub="Explicit, purpose-bound consent captured at onboarding under GDPR Art. 7 and nFADP."
        actions={<Button variant="outline" size="sm" icon="fas fa-download">Export ledger</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem', marginBottom: '1.3rem' }}>
        {[['Active consents', '12,840'], ['Withdrawn · 30d', '38'], ['Avg. capture rate', '99.1%']].map(([l, v]) => <Card key={l}><div style={{ fontSize: '.7rem', color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em', fontWeight: 600 }}>{l}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 700, marginTop: 4 }}>{v}</div></Card>)}
      </div>
      <Table gt="1.2fr 1.6fr .9fr 1fr" cols={['Subject', 'Purpose', 'Status', 'Date']}
        rows={CONSENT.map(r => [<span style={{ fontWeight: 600 }}>{r[0]}</span>, <span style={{ color: 'var(--vx-muted)' }}>{r[1]}</span>, <Badge tone={r[4]}>{r[2]}</Badge>, <span style={{ ...mono, color: 'var(--vx-light)' }}>{r[3]}</span>])} />
    </>
  );
}

// ── RETENTION ────────────────────────────────────────
const POLICIES = [
  ['Identity documents', '5 years', 'After verification', 'Auto-delete', 'success'],
  ['Biometric templates', '30 days', 'After decision', 'Auto-delete', 'success'],
  ['Verification metadata', '10 years', 'Regulatory (AMLA)', 'Retain', 'info'],
  ['Withdrawn-consent data', '30 days', 'After withdrawal', '3 due now', 'warn'],
];
function Retention() {
  return (
    <>
      <Head title="Data Retention Policies" sub="Automated lifecycle rules enforce minimum and maximum retention per data class."
        actions={<Button variant="red" size="sm" icon="fas fa-trash-can">Run purge (3)</Button>} />
      <Table gt="1.5fr .9fr 1.3fr 1fr" cols={['Data class', 'Retention', 'Trigger', 'Action']}
        rows={POLICIES.map(r => [<span style={{ fontWeight: 600 }}>{r[0]}</span>, <span style={mono}>{r[1]}</span>, <span style={{ color: 'var(--vx-muted)' }}>{r[2]}</span>, <Badge tone={r[4]}>{r[3]}</Badge>])} />
      <Card style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '.8rem', background: 'var(--vx-warn-bg)', border: '1px solid #FCE4A6' }}>
        <i className="fas fa-clock" style={{ color: 'var(--vx-warn)' }} />
        <span style={{ fontSize: '.83rem', color: 'var(--vx-warn-fg)' }}>3 withdrawn-consent records have passed their 30-day window and are queued for cryptographic erasure.</span>
      </Card>
    </>
  );
}

// ── GDPR / nFADP ─────────────────────────────────────
const DSAR = [
  ['DSAR-0192', 'Access request', 'A. Meier', 'In progress', 'warn', '4 days left'],
  ['DSAR-0190', 'Erasure (RTBF)', 'L. Dubois', 'In progress', 'warn', '9 days left'],
  ['DSAR-0188', 'Data portability', 'S. Brunner', 'Completed', 'success', 'Closed'],
];
function GDPR() {
  return (
    <>
      <Head title="GDPR / nFADP Controls" sub="Data-subject rights handling under EU GDPR and the Swiss Federal Act on Data Protection."
        actions={<Button variant="red" size="sm" icon="fas fa-plus">New DSAR</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '.8rem', marginBottom: '1.3rem' }}>
        {[['Right of access', 'fas fa-eye'], ['Right to erasure', 'fas fa-eraser'], ['Data portability', 'fas fa-right-left'], ['Rectification', 'fas fa-pen']].map(([l, ic]) => (
          <Card key={l} style={{ textAlign: 'center' }}><i className={ic} style={{ color: 'var(--vx-red)', fontSize: '1.1rem' }} /><div style={{ fontSize: '.78rem', fontWeight: 700, marginTop: '.5rem' }}>{l}</div><div style={{ fontSize: '.68rem', color: 'var(--vx-success)', marginTop: 2 }}><i className="fas fa-circle-check" /> Automated</div></Card>
        ))}
      </div>
      <SubHead>Open data-subject requests</SubHead>
      <Table gt=".9fr 1.2fr 1fr 1fr 1fr" cols={['ID', 'Type', 'Subject', 'Status', 'SLA']}
        rows={DSAR.map(r => [<span style={mono}>{r[0]}</span>, <span style={{ fontWeight: 600 }}>{r[1]}</span>, <span style={{ color: 'var(--vx-muted)' }}>{r[2]}</span>, <Badge tone={r[4]}>{r[3]}</Badge>, <span style={{ fontSize: '.76rem', color: r[4] === 'warn' ? 'var(--vx-warn)' : 'var(--vx-light)' }}>{r[5]}</span>])} />
    </>
  );
}

// ── USER ACTIVITY ────────────────────────────────────
const ACT = [
  ['Jane Müller', 'Approved verification', 'CASE-2041', '2 min ago', 'JM'],
  ['A. Roth', 'Added case note', 'CASE-2041', '24 min ago', 'AR'],
  ['Admin', 'Rotated API key', 'vx_live_q9Lp', '1 hr ago', 'AD'],
  ['Jane Müller', 'Created export', 'exp_4Lp9', '2 hr ago', 'JM'],
  ['T. Frei', 'Login', 'SSO · Okta', '3 hr ago', 'TF'],
];
function Activity() {
  return (
    <>
      <Head title="User Activity Logs" sub="Per-user action history for internal accountability and access reviews."
        actions={<Button variant="outline" size="sm" icon="fas fa-download">Export</Button>} />
      <Card pad="0">
        {ACT.map((a, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.8rem', padding: '.8rem 1rem', borderBottom: i < ACT.length - 1 ? '1px solid var(--vx-off)' : 'none' }}>
            <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--vx-navy)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.66rem', fontWeight: 700 }}>{a[4]}</span>
            <div style={{ flex: 1 }}><span style={{ fontSize: '.83rem', fontWeight: 600 }}>{a[0]}</span> <span style={{ fontSize: '.83rem', color: 'var(--vx-muted)' }}>{a[1].toLowerCase()}</span> <span style={{ ...mono, color: 'var(--vx-red)' }}>{a[2]}</span></div>
            <span style={{ fontSize: '.72rem', color: 'var(--vx-light)' }}>{a[3]}</span>
          </div>
        ))}
      </Card>
    </>
  );
}

// ── EXPORT CENTER ────────────────────────────────────
const EXPORTS = [
  ['Verification register · Q2 2026', 'CSV', 'Ready', 'success', '4.2 MB'],
  ['Audit log · May 2026', 'JSON', 'Ready', 'success', '11.8 MB'],
  ['Consent ledger · full', 'CSV', 'Generating', 'warn', '—'],
];
function Exports() {
  return (
    <>
      <Head title="Export Center" sub="Generate signed, regulator-ready data exports. Every export is itself audit-logged."
        actions={<Button variant="red" size="sm" icon="fas fa-plus">New export</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem', marginBottom: '1.3rem' }}>
        {[['Verification register', 'fas fa-id-card'], ['Audit log', 'fas fa-list-check'], ['Consent ledger', 'fas fa-file-signature']].map(([l, ic]) => (
          <Card key={l}><div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}><div style={{ width: 34, height: 34, borderRadius: 7, background: 'var(--vx-red-bg)', color: 'var(--vx-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className={ic} /></div><span style={{ fontSize: '.83rem', fontWeight: 700 }}>{l}</span></div><Button variant="outline" size="sm" icon="fas fa-download" style={{ width: '100%', marginTop: '.7rem' }}>Generate</Button></Card>
        ))}
      </div>
      <SubHead>Recent exports</SubHead>
      <Table gt="1.8fr .7fr 1fr .8fr .7fr" cols={['Export', 'Format', 'Status', 'Size', '']}
        rows={EXPORTS.map(r => [<span style={{ fontWeight: 600 }}>{r[0]}</span>, <Badge tone="neutral">{r[1]}</Badge>, <Badge tone={r[3]}>{r[2]}</Badge>, <span style={{ ...mono, color: 'var(--vx-light)' }}>{r[4]}</span>, r[3] === 'success' ? <i className="fas fa-download" style={{ color: 'var(--vx-red)', cursor: 'pointer' }} /> : <i className="fas fa-spinner fa-spin" style={{ color: 'var(--vx-light)' }} />])} />
    </>
  );
}

// ── REGULATORY REPORTS ───────────────────────────────
const REPORTS = [
  ['FINMA AML annual report', 'Switzerland', 'Due 30 Jun', 'warn', 'fas fa-landmark'],
  ['GDPR Art. 30 processing record', 'EU', 'Current', 'success', 'fas fa-file-shield'],
  ['Suspicious Activity Report (MROS)', 'Switzerland', 'On demand', 'info', 'fas fa-flag'],
  ['Annual DPO transparency report', 'EU / CH', 'Filed', 'success', 'fas fa-user-shield'],
];
function Reports() {
  return (
    <>
      <Head title="Regulatory Reports" sub="Pre-built report templates mapped to Swiss and EU filing obligations."
        actions={<Button variant="red" size="sm" icon="fas fa-file-export">Generate filing</Button>} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
        {REPORTS.map((r, i) => (
          <Card key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--vx-red-bg)', color: 'var(--vx-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className={r[4]} /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: '.88rem', fontWeight: 700 }}>{r[0]}</div><div style={{ fontSize: '.74rem', color: 'var(--vx-light)' }}>{r[1]}</div></div>
            <Badge tone={r[3]}>{r[2]}</Badge>
            <Button variant="outline" size="sm" icon="fas fa-arrow-right">Open</Button>
          </Card>
        ))}
      </div>
    </>
  );
}

window.ComplianceCenter = ComplianceCenter;
})();
