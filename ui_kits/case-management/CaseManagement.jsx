// VerfiX Case Management — investigation workspace: case list, detail, notes, attachments,
// escalations, reviewer assignment, audit trail, decision history, internal comments.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip, TrustScore } = DS;

const CASES = [
  { id: 'CASE-2041', subject: 'Helvetia Trust AG', type: 'KYB', risk: 71, band: 'review', assignee: 'You', age: '2h', priority: 'high' },
  { id: 'CASE-2038', subject: 'Marco Keller', type: 'KYC', risk: 88, band: 'reject', assignee: 'You', age: '4h', priority: 'high' },
  { id: 'CASE-2035', subject: 'Sofia Brunner', type: 'KYC', risk: 34, band: 'approve', assignee: 'A. Roth', age: '1d', priority: 'low' },
  { id: 'CASE-2031', subject: 'Leman Capital Sàrl', type: 'KYB', risk: 58, band: 'review', assignee: 'Unassigned', age: '1d', priority: 'med' },
];

function CaseManagement() {
  const [active, setActive] = React.useState('CASE-2041');
  const cur = CASES.find(c => c.id === active);
  return (
    <div className="case-shell">
      <TopBar />
      <div className="case-cols" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 700 }}>
        <CaseList active={active} setActive={setActive} />
        <CaseDetail key={cur.id} c={cur} />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header style={{ height: 54, background: 'var(--vx-navy)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.9rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', color: '#fff' }}>
        <a href="../website/index.html" style={{ color: 'rgba(255,255,255,.6)', textDecoration: 'none' }}><i className="fas fa-arrow-left" /></a>
        <IconChip icon="fas fa-folder-open" tone="solid" size="sm" />
        <span style={{ fontWeight: 800, fontSize: '.95rem' }}>Case Management</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'rgba(255,255,255,.5)' }}>4 open · 2 high priority</span>
        <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--vx-red)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', fontWeight: 700 }}>JM</span>
      </div>
    </header>
  );
}

function CaseList({ active, setActive }) {
  const pri = { high: 'var(--vx-red)', med: 'var(--vx-warn)', low: 'var(--vx-light)' };
  return (
    <aside className="case-list" style={{ borderRight: '1px solid var(--vx-border)', background: '#fff', overflow: 'auto' }}>
      <div style={{ padding: '.9rem 1rem', borderBottom: '1px solid var(--vx-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>Investigation queue</span>
        <i className="fas fa-filter" style={{ color: 'var(--vx-light)', fontSize: '.74rem' }} />
      </div>
      {CASES.map(c => (
        <button key={c.id} onClick={() => setActive(c.id)} style={{ display: 'block', width: '100%', textAlign: 'left', border: 'none', borderBottom: '1px solid var(--vx-off)', borderLeft: '3px solid ' + (active === c.id ? 'var(--vx-red)' : 'transparent'),
          background: active === c.id ? 'var(--vx-red-bg)' : '#fff', padding: '.8rem 1rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.64rem', color: 'var(--vx-light)' }}>{c.id}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '.62rem', fontWeight: 700, color: pri[c.priority], textTransform: 'uppercase' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: pri[c.priority] }} />{c.priority}</span>
          </div>
          <div style={{ fontSize: '.86rem', fontWeight: 700, marginBottom: 4 }}>{c.subject}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
            <Badge tone="info">{c.type}</Badge>
            <Badge tone={c.band === 'approve' ? 'success' : c.band === 'review' ? 'warn' : 'danger'}>{c.band}</Badge>
            <span style={{ marginLeft: 'auto', fontSize: '.68rem', color: 'var(--vx-light)' }}>{c.age}</span>
          </div>
        </button>
      ))}
    </aside>
  );
}

const TABS = [
  { id: 'investigation', label: 'Investigation', icon: 'fas fa-magnifying-glass' },
  { id: 'notes', label: 'Notes & Comments', icon: 'fas fa-comment-dots' },
  { id: 'attachments', label: 'Attachments', icon: 'fas fa-paperclip' },
  { id: 'audit', label: 'Audit Trail', icon: 'fas fa-list-check' },
  { id: 'decisions', label: 'Decision History', icon: 'fas fa-gavel' },
];

function CaseDetail({ c }) {
  const [tab, setTab] = React.useState('investigation');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
      <CaseHeader c={c} />
      <div style={{ display: 'flex', borderBottom: '1px solid var(--vx-border)', background: '#fff', padding: '0 1.6rem', overflowX: 'auto' }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', fontFamily: 'var(--font-body)', fontSize: '.82rem', fontWeight: 600, whiteSpace: 'nowrap',
            background: 'transparent', border: 'none', borderBottom: '2px solid ' + (tab === t.id ? 'var(--vx-red)' : 'transparent'), color: tab === t.id ? 'var(--vx-red)' : 'var(--vx-muted)', padding: '.8rem .85rem', cursor: 'pointer' }}>
            <i className={t.icon} style={{ fontSize: '.76rem' }} />{t.label}
          </button>
        ))}
      </div>
      <div style={{ padding: '1.4rem 1.6rem', overflow: 'auto', flex: 1 }}>
        {tab === 'investigation' && <Investigation c={c} />}
        {tab === 'notes' && <Notes />}
        {tab === 'attachments' && <Attachments />}
        {tab === 'audit' && <Audit />}
        {tab === 'decisions' && <Decisions />}
      </div>
    </div>
  );
}

function CaseHeader({ c }) {
  return (
    <div style={{ background: '#fff', borderBottom: '1px solid var(--vx-border)', padding: '1.2rem 1.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ width: 46, height: 46, borderRadius: 9, background: 'var(--vx-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{c.subject.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-.02em', margin: 0, whiteSpace: 'nowrap' }}>{c.subject}</h1>
            <Badge tone={c.band === 'approve' ? 'success' : c.band === 'review' ? 'warn' : 'danger'}>{c.band}</Badge>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'var(--vx-light)', marginTop: 2 }}>{c.id} · {c.type} · opened {c.age} ago</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <Button variant="outline" size="sm" icon="fas fa-user-plus">Reassign</Button>
        <Button variant="outline" size="sm" icon="fas fa-arrow-up-right-dots">Escalate</Button>
        <Button variant="navy" size="sm" icon="fas fa-xmark">Reject</Button>
        <Button variant="red" size="sm" icon="fas fa-check">Approve</Button>
      </div>
    </div>
  );
}

function Section({ children, icon, title, right, style = {} }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1.1rem 1.2rem', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>{icon && <i className={icon} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} />}<h2 style={{ fontSize: '.9rem', fontWeight: 800, margin: 0 }}>{title}</h2></div>
        {right}
      </div>
      {children}
    </div>
  );
}

// ── INVESTIGATION ────────────────────────────────────
function Investigation({ c }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1rem' }} className="case-cols">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Section icon="fas fa-flag" title="Why this case opened">
          <p style={{ fontSize: '.85rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: 0 }}>
            {c.type === 'KYB'
              ? 'Routed to manual review: an indirect beneficial owner holding 18% via Alpine Holding AG (Liechtenstein) could not be automatically resolved to a natural person. All other checks passed.'
              : 'Flagged by the Trust Engine: document tampering signals and a face-match score below threshold produced a high fraud risk. Requires analyst adjudication before a final decision.'}
          </p>
        </Section>
        <Section icon="fas fa-triangle-exclamation" title="Risk factors">
          {(c.type === 'KYB'
            ? [['Ownership complexity', 'Indirect UBO via foreign holding', 'warn'], ['Geographic', 'Liechtenstein nominee structure', 'warn'], ['PEP', '1 domestic PEP associate (Tier 3)', 'warn'], ['Sanctions', 'No matches', 'success']]
            : [['Document', 'Template mismatch on ID back', 'danger'], ['Biometric', 'Face-match 0.71 (threshold 0.85)', 'danger'], ['Device', 'Emulator signals detected', 'warn'], ['AML', 'No watchlist hits', 'success']]
          ).map(([k, v, tone]) => (
            <div key={k} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.55rem 0', borderBottom: '1px solid var(--vx-off)' }}>
              <i className={tone === 'success' ? 'fas fa-circle-check' : tone === 'warn' ? 'fas fa-circle-exclamation' : 'fas fa-circle-xmark'} style={{ color: tone === 'success' ? 'var(--vx-success)' : tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-danger)' }} />
              <div style={{ flex: 1 }}><div style={{ fontSize: '.82rem', fontWeight: 700 }}>{k}</div><div style={{ fontSize: '.74rem', color: 'var(--vx-muted)' }}>{v}</div></div>
            </div>
          ))}
        </Section>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Section icon="fas fa-gauge-high" title="Trust Engine">
          <div style={{ display: 'flex', justifyContent: 'center', padding: '.4rem 0' }}><TrustScore score={100 - c.risk} size={120} label="Trust score" /></div>
        </Section>
        <Section icon="fas fa-user-shield" title="Assignment">
          <Row k="Assignee" v={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--vx-navy)', color: '#fff', fontSize: '.6rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>JM</span>{c.assignee}</span>} />
          <Row k="Queue" v="Tier-2 compliance" />
          <Row k="SLA" v={<Badge tone="warn">6h remaining</Badge>} />
          <Row k="Priority" v={<Badge tone={c.priority === 'high' ? 'danger' : 'neutral'}>{c.priority}</Badge>} />
        </Section>
      </div>
    </div>
  );
}
function Row({ k, v }) { return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '.45rem 0', borderBottom: '1px solid var(--vx-off)', fontSize: '.82rem' }}><span style={{ color: 'var(--vx-light)' }}>{k}</span><span style={{ fontWeight: 600 }}>{v}</span></div>; }

// ── NOTES & internal comments ────────────────────────
const SEED_NOTES = [
  { who: 'A. Roth', init: 'AR', time: 'Today · 09:40', body: 'Pulled the ZEFIX extract. Alpine Holding confirmed as registered in Vaduz but the natural-person owner is not listed. Requesting shareholder register from the client.', internal: true },
  { who: 'System', init: 'SY', time: 'Today · 09:14', body: 'Case auto-routed to Tier-2 after indirect UBO could not be resolved.', internal: false },
];

function Notes() {
  const [notes, setNotes] = React.useState(SEED_NOTES);
  const [text, setText] = React.useState('');
  const add = () => { if (!text.trim()) return; setNotes([{ who: 'Jane Müller', init: 'JM', time: 'Just now', body: text.trim(), internal: true }, ...notes]); setText(''); };
  return (
    <div style={{ maxWidth: 760 }}>
      <Section icon="fas fa-comment-dots" title="Add internal note">
        <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Document your findings… (visible to compliance team only)" style={{ width: '100%', minHeight: 70, fontFamily: 'var(--font-body)', fontSize: '.85rem', border: '1.5px solid var(--vx-border-2)', borderRadius: 6, padding: '.6rem .7rem', resize: 'vertical' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '.6rem' }}>
          <span style={{ fontSize: '.72rem', color: 'var(--vx-light)' }}><i className="fas fa-lock" style={{ marginRight: 4 }} />Internal — not shared with applicant</span>
          <Button variant="red" size="sm" icon="fas fa-paper-plane" onClick={add}>Post note</Button>
        </div>
      </Section>
      <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
        {notes.map((n, i) => (
          <div key={i} style={{ display: 'flex', gap: '.8rem', background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '.9rem 1rem' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: n.who === 'System' ? 'var(--vx-off)' : 'var(--vx-navy)', color: n.who === 'System' ? 'var(--vx-muted)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.68rem', fontWeight: 700, flexShrink: 0 }}>{n.init}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: 3 }}>
                <span style={{ fontSize: '.82rem', fontWeight: 700 }}>{n.who}</span>
                {n.internal && <Badge tone="red">Internal</Badge>}
                <span style={{ marginLeft: 'auto', fontSize: '.68rem', color: 'var(--vx-light)' }}>{n.time}</span>
              </div>
              <p style={{ fontSize: '.83rem', color: 'var(--vx-muted)', lineHeight: 1.6, margin: 0 }}>{n.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ATTACHMENTS ──────────────────────────────────────
const FILES = [
  { n: 'passport_front.jpg', s: '2.4 MB', t: 'Identity document', icon: 'fas fa-image', by: 'Applicant' },
  { n: 'passport_back.jpg', s: '2.1 MB', t: 'Identity document', icon: 'fas fa-image', by: 'Applicant' },
  { n: 'zefix_extract.pdf', s: '180 KB', t: 'Registry document', icon: 'fas fa-file-pdf', by: 'A. Roth' },
  { n: 'liveness_capture.mp4', s: '5.8 MB', t: 'Biometric', icon: 'fas fa-video', by: 'Applicant' },
];
function Attachments() {
  return (
    <Section icon="fas fa-paperclip" title="Case attachments" right={<Button variant="outline" size="sm" icon="fas fa-upload">Upload</Button>} style={{ maxWidth: 760 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '.7rem' }}>
        {FILES.map(f => (
          <div key={f.n} style={{ display: 'flex', alignItems: 'center', gap: '.8rem', border: '1px solid var(--vx-border)', borderRadius: 8, padding: '.7rem .8rem' }}>
            <div style={{ width: 38, height: 38, borderRadius: 7, background: 'var(--vx-red-bg)', color: 'var(--vx-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i className={f.icon} /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '.82rem', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.n}</div>
              <div style={{ fontSize: '.7rem', color: 'var(--vx-light)' }}>{f.t} · {f.s} · {f.by}</div>
            </div>
            <i className="fas fa-download" style={{ color: 'var(--vx-light)', cursor: 'pointer', fontSize: '.82rem' }} />
          </div>
        ))}
      </div>
    </Section>
  );
}

// ── AUDIT TRAIL ──────────────────────────────────────
const AUDIT = [
  ['09:14:02', 'System', 'Case created', 'Auto-routed from Trust Engine (review band)'],
  ['09:14:03', 'System', 'Reviewer assigned', 'Tier-2 compliance queue'],
  ['09:31:10', 'A. Roth', 'Note added', 'Requesting shareholder register'],
  ['09:38:55', 'A. Roth', 'Attachment uploaded', 'zefix_extract.pdf'],
  ['09:40:21', 'A. Roth', 'Reassigned', '→ Jane Müller'],
  ['09:52:00', 'Jane Müller', 'Viewed case', 'Opened investigation tab'],
];
function Audit() {
  return (
    <Section icon="fas fa-list-check" title="Audit trail" right={<Button variant="outline" size="sm" icon="fas fa-download">Export log</Button>} style={{ maxWidth: 820 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '90px 130px 150px 1fr', gap: '.5rem', padding: '.4rem .2rem', fontFamily: 'var(--font-mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)', borderBottom: '1px solid var(--vx-border)' }}>
        <span>Time</span><span>Actor</span><span>Action</span><span>Detail</span>
      </div>
      {AUDIT.map((r, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 130px 150px 1fr', gap: '.5rem', alignItems: 'center', padding: '.55rem .2rem', borderBottom: i < AUDIT.length - 1 ? '1px solid var(--vx-off)' : 'none', fontSize: '.78rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--vx-light)' }}>{r[0]}</span>
          <span style={{ fontWeight: 600 }}>{r[1]}</span>
          <span><Badge tone="neutral">{r[2]}</Badge></span>
          <span style={{ color: 'var(--vx-muted)' }}>{r[3]}</span>
        </div>
      ))}
    </Section>
  );
}

// ── DECISION HISTORY ─────────────────────────────────
const DECISIONS = [
  { d: 'Manual review', who: 'System · Trust Engine', time: 'Today 09:14', tone: 'warn', note: 'Auto-decision: indirect UBO unresolved' },
  { d: 'Escalated', who: 'A. Roth', time: 'Today 09:40', tone: 'info', note: 'Raised to Tier-2 for ownership confirmation' },
];
function Decisions() {
  return (
    <Section icon="fas fa-gavel" title="Decision history" style={{ maxWidth: 760 }}>
      <div style={{ position: 'relative', paddingLeft: '1.4rem' }}>
        <div style={{ position: 'absolute', left: 5, top: 4, bottom: 4, width: 2, background: 'var(--vx-border)' }} />
        {DECISIONS.map((d, i) => (
          <div key={i} style={{ position: 'relative', paddingBottom: '1.1rem' }}>
            <span style={{ position: 'absolute', left: '-1.4rem', top: 2, width: 12, height: 12, borderRadius: '50%', background: '#fff', border: '2px solid ' + (d.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-info)') }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}><span style={{ fontSize: '.86rem', fontWeight: 700 }}>{d.d}</span><Badge tone={d.tone}>{d.tone === 'warn' ? 'Review' : 'Escalation'}</Badge></div>
            <div style={{ fontSize: '.76rem', color: 'var(--vx-muted)', marginTop: 2 }}>{d.note}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)', marginTop: 2 }}>{d.who} · {d.time}</div>
          </div>
        ))}
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '-1.4rem', top: 2, width: 12, height: 12, borderRadius: '50%', background: 'var(--vx-red-bg)', border: '2px solid var(--vx-red)' }} />
          <div style={{ fontSize: '.86rem', fontWeight: 700, color: 'var(--vx-red)' }}>Awaiting final decision</div>
          <div style={{ fontSize: '.76rem', color: 'var(--vx-muted)', marginTop: 2 }}>Pending your adjudication</div>
        </div>
      </div>
    </Section>
  );
}

window.CaseManagement = CaseManagement;
})();
