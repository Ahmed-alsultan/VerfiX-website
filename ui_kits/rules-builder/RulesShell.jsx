// VerfiX Rules Builder — top-level shell: Rules Dashboard (list) → Editor → Version history.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip } = DS;

const RULES = [
  { id: 'r1', name: 'EU Onboarding Policy', status: 'active', version: 'v4', steps: 7, modified: '2 days ago', by: 'J. Müller', desc: 'Standard KYC for EU/CH retail onboarding.' },
  { id: 'r2', name: 'High-Value Account Review', status: 'active', version: 'v2', steps: 9, modified: '1 week ago', by: 'A. Roth', desc: 'Enhanced due diligence above CHF 100k.' },
  { id: 'r3', name: 'Crypto Exchange KYC', status: 'draft', version: 'v1', steps: 6, modified: '3 hours ago', by: 'J. Müller', desc: 'Travel-rule aware flow for VASP onboarding.' },
  { id: 'r4', name: 'Corporate KYB Policy', status: 'active', version: 'v3', steps: 8, modified: '12 days ago', by: 'T. Frei', desc: 'UBO resolution + registry + sanctions for KYB.' },
  { id: 'r5', name: 'Legacy Onboarding v1', status: 'archived', version: 'v6', steps: 5, modified: '4 months ago', by: 'A. Roth', desc: 'Retired — superseded by EU Onboarding Policy.' },
];

const VERSIONS = [
  { v: 'v4', when: '2 days ago', who: 'J. Müller', note: 'Raised reject threshold to 70; added FATF grey-list rule.', cur: true },
  { v: 'v3', when: '3 weeks ago', who: 'A. Roth', note: 'Added document-fraud risk weight (+30).', cur: false },
  { v: 'v2', when: 'Feb 2026', who: 'J. Müller', note: 'Introduced Tier-2 escalation on review band.', cur: false },
  { v: 'v1', when: 'Jan 2026', who: 'J. Müller', note: 'Initial policy — AML screen + thresholds.', cur: false },
];

const STATUS = { active: ['success', 'Active'], draft: ['warn', 'Draft'], archived: ['neutral', 'Archived'] };

function RulesApp() {
  const [screen, setScreen] = React.useState('list'); // list | editor | history
  const [rule, setRule] = React.useState(RULES[0]);
  const open = (r) => { setRule(r); setScreen('editor'); };

  if (screen === 'editor') {
    const Editor = window.__RuleEditor;
    return <Editor rule={rule} onBack={() => setScreen('list')} onHistory={() => setScreen('history')} />;
  }
  if (screen === 'history') return <VersionHistory rule={rule} onBack={() => setScreen('editor')} />;
  return <Dashboard onOpen={open} />;
}

function TopBar({ title, sub, back, actions }) {
  return (
    <header style={{ height: 60, borderBottom: '1px solid var(--vx-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.6rem', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.9rem' }}>
        {back
          ? <a onClick={back} role="link" tabIndex={0} style={{ color: 'var(--vx-light)', cursor: 'pointer' }}><i className="fas fa-arrow-left" /></a>
          : <a href="../website/index.html" style={{ color: 'var(--vx-light)', textDecoration: 'none' }}><i className="fas fa-arrow-left" /></a>}
        <IconChip icon="fas fa-diagram-project" tone="solid" />
        <div>
          <div style={{ fontWeight: 800, fontSize: '.98rem', letterSpacing: '-.02em' }}>{title}</div>
          {sub && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>{sub}</div>}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '.5rem' }}>{actions}</div>
    </header>
  );
}

function Dashboard({ onOpen }) {
  const [filter, setFilter] = React.useState('all');
  const counts = { all: RULES.length, active: RULES.filter(r => r.status === 'active').length, draft: RULES.filter(r => r.status === 'draft').length, archived: RULES.filter(r => r.status === 'archived').length };
  const rows = RULES.filter(r => filter === 'all' || r.status === filter);
  return (
    <div className="rb-shell">
      <TopBar title="Rules" sub={`${RULES.length} policies · ${counts.active} active`}
        actions={<Button variant="red" size="sm" icon="fas fa-plus" onClick={() => onOpen(RULES[2])}>New rule</Button>} />
      <div style={{ padding: '1.6rem 1.9rem' }}>
        {/* stat tiles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '.8rem', marginBottom: '1.4rem' }}>
          {[['Active rules', counts.active, 'var(--vx-success)', 'fas fa-circle-play'], ['Drafts', counts.draft, 'var(--vx-warn)', 'fas fa-pen'], ['Archived', counts.archived, 'var(--vx-light)', 'fas fa-box-archive'], ['Avg steps', '7', 'var(--vx-text)', 'fas fa-layer-group']].map(([l, v, c, ic]) => (
            <div key={l} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, padding: '1rem 1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{l}</span><i className={ic} style={{ color: 'var(--vx-red)', fontSize: '.8rem' }} /></div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, color: c, marginTop: '.3rem' }}>{v}</div>
            </div>
          ))}
        </div>
        {/* filter tabs */}
        <div style={{ display: 'flex', gap: '.4rem', marginBottom: '1rem' }}>
          {['all', 'active', 'draft', 'archived'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ fontFamily: 'var(--font-body)', fontSize: '.76rem', fontWeight: 600, textTransform: 'capitalize', cursor: 'pointer', padding: '.4rem .9rem', borderRadius: 100, border: '1px solid ' + (filter === f ? 'var(--vx-red)' : 'var(--vx-border)'), background: filter === f ? 'var(--vx-red)' : '#fff', color: filter === f ? '#fff' : 'var(--vx-muted)' }}>{f} <span style={{ opacity: .6 }}>{counts[f]}</span></button>
          ))}
        </div>
        {/* rules table */}
        <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr .7fr 1.2fr .6fr', gap: '.6rem', padding: '.6rem 1.1rem', borderBottom: '1px solid var(--vx-border)', fontFamily: 'var(--font-mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)' }}>
            <span>Rule</span><span>Status</span><span>Version</span><span>Last modified</span><span></span>
          </div>
          {rows.map((r, i) => (
            <div key={r.id} onClick={() => onOpen(r)} style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr .7fr 1.2fr .6fr', gap: '.6rem', alignItems: 'center', padding: '.85rem 1.1rem', borderBottom: i < rows.length - 1 ? '1px solid var(--vx-off)' : 'none', cursor: 'pointer' }}>
              <div><div style={{ fontSize: '.88rem', fontWeight: 700 }}>{r.name}</div><div style={{ fontSize: '.74rem', color: 'var(--vx-muted)' }}>{r.desc}</div></div>
              <span><Badge tone={STATUS[r.status][0]}>{STATUS[r.status][1]}</Badge></span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.78rem', color: 'var(--vx-muted)' }}>{r.version}</span>
              <div style={{ fontSize: '.78rem' }}><div>{r.modified}</div><div style={{ fontSize: '.7rem', color: 'var(--vx-light)' }}>by {r.by}</div></div>
              <span style={{ textAlign: 'right', color: 'var(--vx-light)' }}><i className="fas fa-chevron-right" style={{ fontSize: '.75rem' }} /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VersionHistory({ rule, onBack }) {
  return (
    <div className="rb-shell">
      <TopBar title={rule.name} sub="Version history" back={onBack}
        actions={<Button variant="outline" size="sm" icon="fas fa-pen" onClick={onBack}>Back to editor</Button>} />
      <div style={{ padding: '1.6rem 1.9rem', maxWidth: 760 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: 'var(--vx-info-bg)', borderRadius: 8, padding: '.7rem 1rem', marginBottom: '1.3rem', fontSize: '.82rem', color: 'var(--vx-info-fg)' }}>
          <i className="fas fa-code-branch" /> Every publish creates an immutable version. Roll back to restore a previous policy as a new draft.
        </div>
        <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
          <div style={{ position: 'absolute', left: 6, top: 6, bottom: 6, width: 2, background: 'var(--vx-border)' }} />
          {VERSIONS.map((v, i) => (
            <div key={v.v} style={{ position: 'relative', paddingBottom: i < VERSIONS.length - 1 ? '1.2rem' : 0 }}>
              <span style={{ position: 'absolute', left: '-1.5rem', top: 2, width: 14, height: 14, borderRadius: '50%', background: v.cur ? 'var(--vx-red)' : '#fff', border: '2px solid ' + (v.cur ? 'var(--vx-red)' : 'var(--vx-border-2)') }} />
              <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 8, padding: '.85rem 1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '.85rem' }}>{v.v}</span>
                  {v.cur ? <Badge tone="success">Current</Badge> : <Badge tone="neutral">Published</Badge>}
                  <span style={{ marginLeft: 'auto', fontSize: '.72rem', color: 'var(--vx-light)' }}>{v.when} · {v.who}</span>
                </div>
                <div style={{ fontSize: '.82rem', color: 'var(--vx-muted)', marginTop: '.4rem' }}>{v.note}</div>
                {!v.cur && (
                  <div style={{ marginTop: '.6rem', display: 'flex', gap: '.4rem' }}>
                    <Button variant="outline" size="sm" icon="fas fa-rotate-left">Roll back to {v.v}</Button>
                    <Button variant="ghost" size="sm" icon="fas fa-eye">Compare</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.RulesBuilderApp = RulesApp;
})();
