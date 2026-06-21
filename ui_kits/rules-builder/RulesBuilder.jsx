// VerfiX Rules Builder — no-code verification workflow + decision simulator.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip, DecisionPill } = DS;

// ── Block catalog ────────────────────────────────────
const CATALOG = {
  trigger:   { icon: 'fas fa-play', color: '#2563EB', label: 'Trigger', kind: 'When verification starts' },
  condition: { icon: 'fas fa-code-branch', color: '#1A1F2E', label: 'Condition', kind: 'If / else branch' },
  risk:      { icon: 'fas fa-gauge-high', color: '#C8252A', label: 'Risk score', kind: 'Add to risk total' },
  aml:       { icon: 'fas fa-magnifying-glass-dollar', color: '#D97706', label: 'AML screen', kind: 'PEP / sanctions / watchlist' },
  country:   { icon: 'fas fa-earth-europe', color: '#16A34A', label: 'Country rule', kind: 'Geography-specific logic' },
  threshold: { icon: 'fas fa-sliders', color: '#7C3AED', label: 'Threshold', kind: 'Approve / review cutoff' },
  escalate:  { icon: 'fas fa-user-shield', color: '#0891B2', label: 'Escalation', kind: 'Assign to analyst' },
  decision:  { icon: 'fas fa-flag-checkered', color: '#1A1F2E', label: 'Decision', kind: 'Final outcome' },
};

const PALETTE = ['condition', 'risk', 'aml', 'country', 'threshold', 'escalate'];

const INITIAL = [
  { id: 'b1', type: 'trigger', title: 'New KYC verification', detail: 'Applicant submits document + selfie', cfg: {} },
  { id: 'b2', type: 'aml', title: 'AML & sanctions screen', detail: 'PEP + EU/OFAC/SECO watchlists', cfg: { weight: 40 } },
  { id: 'b3', type: 'country', title: 'High-risk geography', detail: 'If country ∈ FATF grey list → +25 risk', cfg: { weight: 25 } },
  { id: 'b4', type: 'risk', title: 'Document fraud signal', detail: 'Tampering / template mismatch → +30 risk', cfg: { weight: 30 } },
  { id: 'b5', type: 'threshold', title: 'Decision thresholds', detail: 'Approve < 35 · Review 35–69 · Reject ≥ 70', cfg: { approve: 35, reject: 70 } },
  { id: 'b6', type: 'escalate', title: 'Escalate to compliance', detail: 'Review band → assign Tier-2 analyst', cfg: {} },
  { id: 'b7', type: 'decision', title: 'Final decision', detail: 'Emit verification.completed webhook', cfg: {} },
];

let _seq = 100;
const uid = () => 'b' + (++_seq);

function RulesBuilderApp({ rule, onBack, onHistory }) {
  const [blocks, setBlocks] = React.useState(INITIAL);
  const [selected, setSelected] = React.useState('b5');
  const [dragId, setDragId] = React.useState(null);
  const [overId, setOverId] = React.useState(null);
  const [saved, setSaved] = React.useState(true);

  const dirty = () => setSaved(false);
  const sel = blocks.find(b => b.id === selected);

  // reorder
  const onDrop = (targetId) => {
    if (!dragId || dragId === targetId) { setDragId(null); setOverId(null); return; }
    const from = blocks.findIndex(b => b.id === dragId);
    const to = blocks.findIndex(b => b.id === targetId);
    const next = [...blocks];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setBlocks(next); setDragId(null); setOverId(null); dirty();
  };

  const addBlock = (type) => {
    const c = CATALOG[type];
    const nb = { id: uid(), type, title: c.label + ' rule', detail: c.kind, cfg: { weight: 20, approve: 35, reject: 70 } };
    // insert before final decision block
    const di = blocks.findIndex(b => b.type === 'decision');
    const next = [...blocks];
    next.splice(di < 0 ? blocks.length : di, 0, nb);
    setBlocks(next); setSelected(nb.id); dirty();
  };

  const removeBlock = (id) => {
    const b = blocks.find(x => x.id === id);
    if (b.type === 'trigger' || b.type === 'decision') return;
    setBlocks(blocks.filter(x => x.id !== id)); if (selected === id) setSelected(null); dirty();
  };

  const updateCfg = (id, patch) => { setBlocks(blocks.map(b => b.id === id ? { ...b, cfg: { ...b.cfg, ...patch } } : b)); dirty(); };

  return (
    <div className="rb-shell">
      <Header saved={saved} onSave={() => setSaved(true)} blocks={blocks} rule={rule} onBack={onBack} onHistory={onHistory} />
      <div className="rb-cols" style={{ display: 'grid', gridTemplateColumns: '200px 1fr 320px', minHeight: 700 }}>
        <Palette onAdd={addBlock} />
        <Canvas blocks={blocks} selected={selected} setSelected={setSelected}
          dragId={dragId} setDragId={setDragId} overId={overId} setOverId={setOverId} onDrop={onDrop} onRemove={removeBlock} />
        <Inspector block={sel} simBlocks={blocks} onCfg={updateCfg} />
      </div>
    </div>
  );
}

function Header({ saved, onSave, blocks, rule, onBack, onHistory }) {
  const name = (rule && rule.name) || 'EU Onboarding Policy';
  const ver = (rule && rule.version) || 'v4';
  return (
    <header style={{ height: 60, borderBottom: '1px solid var(--vx-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <a onClick={onBack} role="link" tabIndex={0} style={{ color: 'var(--vx-light)', fontSize: '.85rem', textDecoration: 'none', cursor: 'pointer' }}><i className="fas fa-arrow-left" /></a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <IconChip icon="fas fa-diagram-project" tone="solid" />
          <div>
            <div style={{ fontWeight: 800, fontSize: '.95rem', letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>{name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>rules · {ver} · {blocks.length} steps</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
        <Badge tone={saved ? 'success' : 'warn'}>{saved ? 'All changes saved' : 'Unsaved changes'}</Badge>
        <Button variant="outline" size="sm" icon="fas fa-clock-rotate-left" onClick={onHistory}>History</Button>
        <Button variant="red" size="sm" icon="fas fa-circle-check" onClick={onSave}>Publish</Button>
      </div>
    </header>
  );
}

function Palette({ onAdd }) {
  return (
    <aside style={{ borderRight: '1px solid var(--vx-border)', background: 'var(--vx-off)', padding: '1.1rem .8rem' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.56rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.7rem' }}>Add rule block</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
        {PALETTE.map(t => {
          const c = CATALOG[t];
          return (
            <button key={t} onClick={() => onAdd(t)} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', textAlign: 'left', background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 7, padding: '.55rem .6rem', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>
              <span style={{ width: 26, height: 26, borderRadius: 6, background: c.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.7rem', flexShrink: 0 }}><i className={c.icon} /></span>
              <span><span style={{ display: 'block', fontSize: '.78rem', fontWeight: 700, color: 'var(--vx-text)' }}>{c.label}</span><span style={{ fontSize: '.64rem', color: 'var(--vx-light)' }}>{c.kind}</span></span>
            </button>
          );
        })}
      </div>
      <div style={{ marginTop: '1.2rem', padding: '.7rem', background: 'var(--vx-red-bg)', border: '1px solid var(--vx-red-line)', borderRadius: 7, fontSize: '.7rem', color: 'var(--vx-text)', lineHeight: 1.5 }}>
        <i className="fas fa-hand-pointer" style={{ color: 'var(--vx-red)', marginRight: 4 }} /> Drag steps on the canvas to reorder. Click a step to configure it.
      </div>
    </aside>
  );
}

function Canvas({ blocks, selected, setSelected, dragId, setDragId, overId, setOverId, onDrop, onRemove }) {
  return (
    <div style={{ padding: '1.4rem 1.6rem', overflow: 'auto', background: 'radial-gradient(circle, var(--vx-border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div style={{ maxWidth: 540, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 0 }}>
        {blocks.map((b, i) => {
          const c = CATALOG[b.type];
          const isSel = selected === b.id;
          const fixed = b.type === 'trigger' || b.type === 'decision';
          return (
            <React.Fragment key={b.id}>
              <div
                className={fixed ? '' : 'rb-drag'}
                draggable={!fixed}
                onDragStart={() => setDragId(b.id)}
                onDragOver={(e) => { e.preventDefault(); setOverId(b.id); }}
                onDrop={() => onDrop(b.id)}
                onClick={() => setSelected(b.id)}
                style={{
                  position: 'relative', background: '#fff', borderRadius: 9,
                  border: '1.5px solid ' + (isSel ? c.color : overId === b.id && dragId ? 'var(--vx-red)' : 'var(--vx-border)'),
                  boxShadow: isSel ? '0 4px 16px rgba(26,31,46,.1)' : 'var(--shadow-xs)',
                  padding: '.8rem .9rem', opacity: dragId === b.id ? .4 : 1, transition: 'border-color .15s, box-shadow .15s',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
                  <span style={{ width: 32, height: 32, borderRadius: 7, background: c.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.82rem', flexShrink: 0 }}><i className={c.icon} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                      <span style={{ fontSize: '.6rem', fontFamily: 'var(--font-mono)', letterSpacing: '.08em', textTransform: 'uppercase', color: c.color, fontWeight: 700 }}>{c.label}</span>
                      {b.cfg && b.cfg.weight != null && b.type !== 'threshold' && <Badge tone="neutral">+{b.cfg.weight} risk</Badge>}
                    </div>
                    <div style={{ fontSize: '.85rem', fontWeight: 700, color: 'var(--vx-text)', marginTop: 1 }}>{b.title}</div>
                    <div style={{ fontSize: '.74rem', color: 'var(--vx-muted)', marginTop: 1 }}>{b.detail}</div>
                  </div>
                  {!fixed && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, color: 'var(--vx-light)' }}>
                      <i className="fas fa-grip-vertical" style={{ fontSize: '.75rem' }} />
                      <i className="fas fa-xmark" onClick={(e) => { e.stopPropagation(); onRemove(b.id); }} style={{ fontSize: '.78rem', cursor: 'pointer' }} title="Remove" />
                    </div>
                  )}
                </div>
              </div>
              {i < blocks.length - 1 && <div style={{ width: 2, height: 22, background: 'var(--vx-border-2)', margin: '0 auto' }} />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// ── Inspector + simulator ────────────────────────────
function Inspector({ block, simBlocks, onCfg }) {
  return (
    <aside style={{ borderLeft: '1px solid var(--vx-border)', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '1.1rem 1.2rem', borderBottom: '1px solid var(--vx-border)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.56rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vx-light)', marginBottom: '.8rem' }}>Configure</div>
        {block ? <BlockConfig block={block} onCfg={onCfg} /> : <div style={{ fontSize: '.8rem', color: 'var(--vx-light)' }}>Select a step on the canvas to configure it.</div>}
      </div>
      <Simulator blocks={simBlocks} />
    </aside>
  );
}

function Field({ label, children }) {
  return <label style={{ display: 'block', marginBottom: '.8rem' }}><span style={{ display: 'block', fontSize: '.72rem', fontWeight: 600, color: 'var(--vx-text)', marginBottom: '.3rem' }}>{label}</span>{children}</label>;
}
const inputStyle = { width: '100%', fontFamily: 'var(--font-body)', fontSize: '.82rem', border: '1.5px solid var(--vx-border-2)', borderRadius: 5, padding: '.45rem .6rem', color: 'var(--vx-text)' };

function BlockConfig({ block, onCfg }) {
  const c = window.__RB_CATALOG[block.type];
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.9rem' }}>
        <span style={{ width: 26, height: 26, borderRadius: 6, background: c.color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '.72rem' }}><i className={c.icon} /></span>
        <span style={{ fontWeight: 700, fontSize: '.88rem' }}>{block.title}</span>
      </div>
      {block.type === 'threshold' ? (
        <>
          <Field label="Approve when risk below"><input type="number" value={block.cfg.approve} onChange={e => onCfg(block.id, { approve: +e.target.value })} style={inputStyle} /></Field>
          <Field label="Reject when risk at or above"><input type="number" value={block.cfg.reject} onChange={e => onCfg(block.id, { reject: +e.target.value })} style={inputStyle} /></Field>
          <div style={{ fontSize: '.72rem', color: 'var(--vx-muted)', background: 'var(--vx-off)', borderRadius: 5, padding: '.5rem .6rem' }}>Scores between the two values route to <b>manual review</b>.</div>
        </>
      ) : block.type === 'escalate' ? (
        <Field label="Assign review to"><select style={inputStyle} defaultValue="Tier-2"><option>Tier-1 queue</option><option>Tier-2 analyst</option><option>Compliance officer</option></select></Field>
      ) : block.type === 'aml' ? (
        <>
          <Field label="Risk weight on hit"><input type="number" value={block.cfg.weight} onChange={e => onCfg(block.id, { weight: +e.target.value })} style={inputStyle} /></Field>
          <Field label="Lists screened">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>{['PEP', 'EU', 'OFAC', 'SECO', 'UN', 'Interpol'].map(l => <span key={l} style={{ fontSize: '.66rem', fontWeight: 600, padding: '.18rem .45rem', borderRadius: 4, background: 'var(--vx-red-bg)', color: 'var(--vx-red)', border: '1px solid var(--vx-red-line)' }}>{l}</span>)}</div>
          </Field>
        </>
      ) : block.type === 'country' ? (
        <>
          <Field label="Risk weight"><input type="number" value={block.cfg.weight} onChange={e => onCfg(block.id, { weight: +e.target.value })} style={inputStyle} /></Field>
          <Field label="Applies to list"><select style={inputStyle}><option>FATF grey list</option><option>FATF black list</option><option>EU high-risk third countries</option><option>Custom list…</option></select></Field>
        </>
      ) : ['risk', 'condition'].includes(block.type) ? (
        <Field label="Risk weight"><input type="number" value={block.cfg.weight ?? 20} onChange={e => onCfg(block.id, { weight: +e.target.value })} style={inputStyle} /></Field>
      ) : (
        <div style={{ fontSize: '.78rem', color: 'var(--vx-muted)' }}>This step has no configurable parameters.</div>
      )}
    </>
  );
}

const SIM_CASES = [
  { id: 'clean', label: 'Clean CH applicant', risk: 0, flags: [] },
  { id: 'pep', label: 'PEP match', risk: 40, flags: ['aml'] },
  { id: 'geo', label: 'FATF-grey country', risk: 25, flags: ['country'] },
  { id: 'fraud', label: 'Tampered document', risk: 30, flags: ['risk'] },
  { id: 'stacked', label: 'PEP + grey country', risk: 65, flags: ['aml', 'country'] },
];

function Simulator({ blocks }) {
  const [caseId, setCaseId] = React.useState('clean');
  const c = SIM_CASES.find(x => x.id === caseId);
  const thr = blocks.find(b => b.type === 'threshold')?.cfg || { approve: 35, reject: 70 };
  const risk = c.risk;
  const decision = risk < thr.approve ? 'approve' : risk >= thr.reject ? 'reject' : 'review';
  const pct = Math.min(100, risk);
  return (
    <div style={{ padding: '1.1rem 1.2rem', background: 'var(--vx-navy)', color: '#fff', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.9rem' }}>
        <i className="fas fa-vial-circle-check" style={{ color: 'var(--vx-red)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Decision Simulator</span>
      </div>
      <select value={caseId} onChange={e => setCaseId(e.target.value)} style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: '.8rem', background: 'var(--vx-navy-2)', color: '#fff', border: '1px solid rgba(255,255,255,.15)', borderRadius: 5, padding: '.45rem .6rem', marginBottom: '1rem' }}>
        {SIM_CASES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
      </select>

      <div style={{ fontSize: '.66rem', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.4rem' }}>Computed risk score</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem', marginBottom: '.5rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-.04em', color: decision === 'approve' ? '#34D399' : decision === 'review' ? '#FBBF24' : '#F87171' }}>{risk}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.8rem', color: 'rgba(255,255,255,.4)' }}>/ 100</span>
      </div>
      <div style={{ position: 'relative', height: 8, background: 'rgba(255,255,255,.12)', borderRadius: 4, marginBottom: '.3rem', overflow: 'hidden' }}>
        <div style={{ width: pct + '%', height: '100%', background: decision === 'approve' ? '#34D399' : decision === 'review' ? '#FBBF24' : '#F87171', borderRadius: 4, transition: 'width .4s var(--ease-out)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '.58rem', color: 'rgba(255,255,255,.4)', marginBottom: '1rem' }}>
        <span>approve &lt;{thr.approve}</span><span>reject ≥{thr.reject}</span>
      </div>

      <div style={{ fontSize: '.66rem', color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Outcome</div>
      <DecisionPill decision={decision} style={{ width: '100%', justifyContent: 'center', background: decision === 'approve' ? 'rgba(52,211,153,.16)' : decision === 'review' ? 'rgba(251,191,36,.16)' : 'rgba(248,113,113,.16)', borderColor: 'transparent', color: decision === 'approve' ? '#34D399' : decision === 'review' ? '#FBBF24' : '#F87171' }} />

      {c.flags.length > 0 && (
        <div style={{ marginTop: '.9rem', fontSize: '.72rem', color: 'rgba(255,255,255,.6)' }}>
          <span style={{ color: 'rgba(255,255,255,.4)' }}>Triggered: </span>{c.flags.map(f => window.__RB_CATALOG[f].label).join(' · ')}
        </div>
      )}
    </div>
  );
}

window.__RB_CATALOG = CATALOG;
window.__RuleEditor = RulesBuilderApp;
})();
