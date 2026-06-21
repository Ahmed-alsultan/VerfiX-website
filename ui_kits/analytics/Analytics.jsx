// VerfiX Trust Engine Analytics — volume, approval rates, fraud trends, geographic risk,
// AML alerts, provider performance, risk distribution, operational KPIs.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip } = DS;

const RED = 'var(--vx-red)';
const VOL = [
  { l: 'Jan', v: 38 }, { l: 'Feb', v: 42 }, { l: 'Mar', v: 51 }, { l: 'Apr', v: 47 },
  { l: 'May', v: 63 }, { l: 'Jun', v: 71 }, { l: 'Jul', v: 68 }, { l: 'Aug', v: 59 },
  { l: 'Sep', v: 74 }, { l: 'Oct', v: 82 }, { l: 'Nov', v: 91 }, { l: 'Dec', v: 88 },
];
const FRAUD = [12, 9, 14, 11, 8, 7, 10, 6, 9, 5, 7, 6];

function Analytics() {
  const [range, setRange] = React.useState('12m');
  return (
    <div className="an-shell">
      <header style={{ background: '#fff', borderBottom: '1px solid var(--vx-border)', padding: '1.3rem 1.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
          <a href="../website/index.html" style={{ color: 'var(--vx-light)', textDecoration: 'none' }}><i className="fas fa-arrow-left" /></a>
          <IconChip icon="fas fa-chart-line" tone="solid" size="lg" />
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-.03em', margin: 0 }}>Trust Engine Analytics</h1>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)' }}>Operational intelligence across all verifications</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <div style={{ display: 'inline-flex', background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 100, padding: 2 }}>
            {['30d', '90d', '12m'].map(r => <button key={r} onClick={() => setRange(r)} style={{ fontFamily: 'var(--font-body)', fontSize: '.72rem', fontWeight: 700, border: 'none', cursor: 'pointer', padding: '.3rem .8rem', borderRadius: 100, background: range === r ? 'var(--vx-navy)' : 'transparent', color: range === r ? '#fff' : 'var(--vx-muted)' }}>{r}</button>)}
          </div>
          <Button variant="outline" size="sm" icon="fas fa-download">Export</Button>
        </div>
      </header>

      <div style={{ padding: '1.6rem 1.9rem' }}>
        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '.8rem', marginBottom: '1.2rem' }} className="an-grid4">
          {[['Total verifications', '847,210', '+12.4%', true, 'fas fa-id-card'], ['Approval rate', '91.3%', '+1.8%', true, 'fas fa-circle-check'], ['Fraud caught', '6,408', '−0.9%', true, 'fas fa-shield-halved'], ['Avg decision time', '2.8s', '−0.4s', true, 'fas fa-bolt']].map(([l, v, d, up, ic]) => (
            <div key={l} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1rem 1.1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: '.7rem', fontWeight: 600, color: 'var(--vx-light)', textTransform: 'uppercase', letterSpacing: '.05em' }}>{l}</span><i className={ic} style={{ color: RED, fontSize: '.8rem' }} /></div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.7rem', fontWeight: 700, letterSpacing: '-.03em', margin: '.3rem 0 .15rem' }}>{v}</div>
              <div style={{ fontSize: '.72rem', fontWeight: 600, color: 'var(--vx-success)' }}><i className="fas fa-arrow-up" style={{ fontSize: '.6rem', marginRight: 3 }} />{d}</div>
            </div>
          ))}
        </div>

        {/* Volume + risk distribution */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '1rem', marginBottom: '1.2rem' }} className="an-grid">
          <Panel title="Verification volume" sub="thousands / month" icon="fas fa-chart-column">
            <Bars data={VOL} />
          </Panel>
          <Panel title="Risk distribution" icon="fas fa-layer-group">
            <Donut />
          </Panel>
        </div>

        {/* Approval + fraud trend */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }} className="an-grid">
          <Panel title="Approval rate breakdown" icon="fas fa-circle-check">
            {[['Auto-approved', 78, 'var(--vx-success)'], ['Approved after review', 13, 'var(--vx-review)'], ['Rejected', 6, 'var(--vx-reject)'], ['Abandoned', 3, 'var(--vx-light)']].map(([l, v, c]) => (
              <div key={l} style={{ marginBottom: '.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.79rem', marginBottom: 4 }}><span>{l}</span><span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{v}%</span></div>
                <div style={{ height: 8, background: 'var(--vx-off)', borderRadius: 4 }}><div style={{ width: v + '%', height: '100%', background: c, borderRadius: 4 }} /></div>
              </div>
            ))}
          </Panel>
          <Panel title="Fraud trend" sub="flagged per 1k · lower is better" icon="fas fa-chart-line">
            <Line data={FRAUD} />
          </Panel>
        </div>

        {/* Geographic + AML alerts */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }} className="an-grid">
          <Panel title="Geographic risk" sub="by verification origin" icon="fas fa-earth-europe">
            {[['🇨🇭 Switzerland', 'Low', 38, 'var(--vx-success)'], ['🇩🇪 Germany', 'Low', 22, 'var(--vx-success)'], ['🇫🇷 France', 'Low', 14, 'var(--vx-success)'], ['🇬🇧 United Kingdom', 'Medium', 9, 'var(--vx-review)'], ['🇦🇪 UAE', 'Medium', 7, 'var(--vx-review)'], ['Other / high-risk', 'Elevated', 10, 'var(--vx-reject)']].map(([c, lvl, v, col]) => (
              <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '.45rem 0', borderBottom: '1px solid var(--vx-off)' }}>
                <span style={{ fontSize: '.82rem', flex: 1 }}>{c}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.74rem', color: 'var(--vx-light)', width: 36, textAlign: 'right' }}>{v}%</span>
                <Badge tone={col === 'var(--vx-success)' ? 'success' : col === 'var(--vx-review)' ? 'warn' : 'danger'}>{lvl}</Badge>
              </div>
            ))}
          </Panel>
          <Panel title="AML alerts" sub="last 90 days" icon="fas fa-magnifying-glass-dollar">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem', marginBottom: '.9rem' }}>
              {[['Sanctions hits', '142', 'var(--vx-reject)'], ['PEP matches', '318', 'var(--vx-review)'], ['Watchlist', '87', 'var(--vx-review)'], ['Cleared', '11,920', 'var(--vx-success)']].map(([l, v, c]) => (
                <div key={l} style={{ border: '1px solid var(--vx-border)', borderRadius: 7, padding: '.6rem .7rem' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', fontWeight: 700, color: c }}>{v}</div>
                  <div style={{ fontSize: '.7rem', color: 'var(--vx-muted)' }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '.74rem', color: 'var(--vx-muted)' }}>True-positive rate <b style={{ color: 'var(--vx-text)' }}>94.2%</b> · escalated to SAR <b style={{ color: 'var(--vx-text)' }}>12</b></div>
          </Panel>
        </div>

        {/* Provider performance + ops KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }} className="an-grid">
          <Panel title="Provider performance" sub="document & biometric data sources" icon="fas fa-server">
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr .8fr .8fr .8fr', gap: '.5rem', padding: '.3rem 0 .5rem', fontFamily: 'var(--font-mono)', fontSize: '.56rem', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--vx-light)', borderBottom: '1px solid var(--vx-border)' }}>
              <span>Provider</span><span>Uptime</span><span>Latency</span><span>Match</span>
            </div>
            {[['Swiss ID Registry', '99.99%', '180ms', '98.4%'], ['Biometric Engine v4', '99.97%', '410ms', '96.1%'], ['Global Doc OCR', '99.92%', '620ms', '97.8%'], ['AML Data Union', '99.95%', '240ms', '—']].map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr .8fr .8fr .8fr', gap: '.5rem', alignItems: 'center', padding: '.55rem 0', borderBottom: i < 3 ? '1px solid var(--vx-off)' : 'none', fontSize: '.8rem' }}>
                <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--vx-success)' }} />{r[0]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--vx-success)' }}>{r[1]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--vx-muted)' }}>{r[2]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--vx-muted)' }}>{r[3]}</span>
              </div>
            ))}
          </Panel>
          <Panel title="Operational KPIs" icon="fas fa-gauge-high">
            {[['SLA adherence', '99.4%', 'success'], ['Avg review time', '4m 12s', 'neutral'], ['Manual review rate', '13.0%', 'neutral'], ['Analyst throughput', '142 / day', 'neutral'], ['Cost per verification', 'CHF 0.84', 'success']].map(([l, v, tone]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5rem 0', borderBottom: '1px solid var(--vx-off)' }}>
                <span style={{ fontSize: '.8rem', color: 'var(--vx-muted)' }}>{l}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', fontWeight: 700, color: tone === 'success' ? 'var(--vx-success)' : 'var(--vx-text)' }}>{v}</span>
              </div>
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, sub, icon, children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 9, padding: '1.2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1rem' }}>
        {icon && <i className={icon} style={{ color: RED, fontSize: '.82rem' }} />}
        <h2 style={{ fontSize: '.92rem', fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>{title}</h2>
        {sub && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)', marginLeft: 'auto' }}>{sub}</span>}
      </div>
      {children}
    </div>
  );
}

function Bars({ data }) {
  const max = Math.max(...data.map(d => d.v));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 180 }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, height: '100%', justifyContent: 'flex-end' }}>
          <div style={{ width: '100%', maxWidth: 30, height: (d.v / max * 100) + '%', background: i >= data.length - 3 ? RED : 'color-mix(in oklab, var(--vx-red) 35%, var(--vx-off))', borderRadius: '3px 3px 0 0' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.54rem', color: 'var(--vx-light)' }}>{d.l}</span>
        </div>
      ))}
    </div>
  );
}

function Line({ data }) {
  const max = Math.max(...data), min = Math.min(...data);
  const W = 300, H = 150, pad = 10;
  const pts = data.map((v, i) => [pad + i * (W - 2 * pad) / (data.length - 1), H - pad - (v - min) / (max - min || 1) * (H - 2 * pad)]);
  const path = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = path + ` L${W - pad} ${H - pad} L${pad} ${H - pad} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 150 }}>
      <path d={area} fill="rgba(200,37,42,.08)" />
      <path d={path} fill="none" stroke={RED} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 4 : 2.5} fill={RED} />)}
    </svg>
  );
}

function Donut() {
  const segs = [['Low risk', 64, 'var(--vx-success)'], ['Medium', 24, 'var(--vx-review)'], ['High', 9, 'var(--vx-reject)'], ['Critical', 3, 'var(--vx-navy)']];
  let acc = 0; const R = 54, C = 2 * Math.PI * R;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
      <svg width="140" height="140" viewBox="0 0 140 140" style={{ flexShrink: 0 }}>
        <g transform="rotate(-90 70 70)">
          {segs.map((s, i) => { const len = s[1] / 100 * C; const el = <circle key={i} cx="70" cy="70" r={R} fill="none" stroke={s[2]} strokeWidth="18" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-acc} />; acc += len; return el; })}
        </g>
        <text x="70" y="66" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, fill: 'var(--vx-text)' }}>64%</text>
        <text x="70" y="82" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', fill: 'var(--vx-light)' }}>LOW RISK</text>
      </svg>
      <div style={{ flex: 1 }}>
        {segs.map(s => (
          <div key={s[0]} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.3rem 0', fontSize: '.78rem' }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: s[2] }} />
            <span style={{ flex: 1, color: 'var(--vx-muted)' }}>{s[0]}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{s[1]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.Analytics = Analytics;
})();
