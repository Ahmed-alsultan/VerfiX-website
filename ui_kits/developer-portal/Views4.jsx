// Developer Portal — Status Page (API status, uptime, incident history).
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge } = DS;
const U = window.DevUI;

const SERVICES = [
  ['Verification API', 'operational', '99.98%'],
  ['KYB API', 'operational', '99.97%'],
  ['AML Screening', 'operational', '99.99%'],
  ['Webhooks', 'operational', '99.95%'],
  ['Hosted Flow', 'degraded', '99.82%'],
  ['Dashboard & Console', 'operational', '99.99%'],
  ['Sandbox', 'operational', '100.0%'],
];
const ST = {
  operational: { tone: 'success', label: 'Operational', dot: 'var(--vx-success)' },
  degraded: { tone: 'warn', label: 'Degraded performance', dot: 'var(--vx-warn)' },
  outage: { tone: 'danger', label: 'Outage', dot: 'var(--vx-danger)' },
};

// 90-day uptime bars (mostly up; a couple of degraded days)
const DAYS = Array.from({ length: 90 }, (_, i) => (i === 61 || i === 62) ? 'degraded' : (i === 20 ? 'outage' : 'operational'));

const INCIDENTS = [
  { d: 'Jun 12, 2026', t: 'Hosted Flow — elevated latency', sev: 'degraded', dur: '38 min', note: 'A regional CDN issue slowed hosted capture screens. Mitigated by failover; no data impact.' },
  { d: 'May 02, 2026', t: 'Webhooks — delayed delivery', sev: 'degraded', dur: '1h 12m', note: 'A queue backlog delayed webhook delivery. All events were retried and delivered.' },
  { d: 'Apr 19, 2026', t: 'Verification API — brief outage', sev: 'outage', dur: '9 min', note: 'A failed deploy was rolled back automatically. Requests during the window returned 503 and were safe to retry.' },
];

function StatusPage() {
  const anyDegraded = SERVICES.some(s => s[1] !== 'operational');
  return (
    <>
      <U.PageHead title="Status" sub="Live operational status of the VerfiX platform, 90-day uptime and incident history."
        actions={<><Button variant="outline" size="sm" icon="fas fa-rss">Subscribe</Button><Button variant="outline" size="sm" icon="fas fa-clock-rotate-left">History</Button></>} />

      {/* Banner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', background: anyDegraded ? 'var(--vx-warn-bg)' : 'var(--vx-success-bg)', border: '1px solid ' + (anyDegraded ? '#FCE4A6' : 'transparent'), borderRadius: 9, padding: '.9rem 1.1rem', marginBottom: '1.4rem' }}>
        <i className={anyDegraded ? 'fas fa-circle-exclamation' : 'fas fa-circle-check'} style={{ color: anyDegraded ? 'var(--vx-warn)' : 'var(--vx-success)', fontSize: '1.1rem' }} />
        <div>
          <div style={{ fontSize: '.92rem', fontWeight: 800, color: anyDegraded ? 'var(--vx-warn-fg)' : 'var(--vx-success-fg)' }}>{anyDegraded ? 'Some systems degraded' : 'All systems operational'}</div>
          <div style={{ fontSize: '.76rem', color: 'var(--vx-muted)' }}>Last checked just now · times in UTC</div>
        </div>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--vx-text)' }}>99.96%</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem', marginBottom: '1.5rem' }}>
        <U.StatTile label="Uptime · 90d" value="99.96%" icon="fas fa-signal" />
        <U.StatTile label="Incidents · 90d" value="3" icon="fas fa-triangle-exclamation" />
        <U.StatTile label="Avg response" value="412ms" icon="fas fa-gauge-high" />
      </div>

      {/* Services */}
      <U.SectionHead>Current status</U.SectionHead>
      <U.Panel pad="0" style={{ marginBottom: '1.5rem' }}>
        {SERVICES.map((s, i) => (
          <div key={s[0]} style={{ display: 'flex', alignItems: 'center', gap: '.8rem', padding: '.8rem 1rem', borderBottom: i < SERVICES.length - 1 ? '1px solid var(--vx-off)' : 'none' }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: ST[s[1]].dot, flexShrink: 0 }} />
            <span style={{ fontSize: '.86rem', fontWeight: 600, flex: 1 }}>{s[0]}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.72rem', color: 'var(--vx-light)' }}>{s[2]}</span>
            <Badge tone={ST[s[1]].tone}>{ST[s[1]].label}</Badge>
          </div>
        ))}
      </U.Panel>

      {/* 90-day uptime bar */}
      <U.SectionHead right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>90 days ago → today</span>}>Uptime history</U.SectionHead>
      <U.Panel style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: 2, alignItems: 'flex-end', height: 44 }}>
          {DAYS.map((d, i) => (
            <div key={i} title={d} style={{ flex: 1, height: '100%', borderRadius: 2, background: d === 'operational' ? 'var(--vx-success)' : d === 'degraded' ? 'var(--vx-warn)' : 'var(--vx-danger)', opacity: d === 'operational' ? .85 : 1 }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.6rem', fontFamily: 'var(--font-mono)', fontSize: '.6rem', color: 'var(--vx-light)' }}>
          <span>90 days ago</span><span>99.96% uptime</span><span>Today</span>
        </div>
      </U.Panel>

      {/* Incidents */}
      <U.SectionHead>Incident history</U.SectionHead>
      <div style={{ position: 'relative', paddingLeft: '1.4rem' }}>
        <div style={{ position: 'absolute', left: 5, top: 6, bottom: 6, width: 2, background: 'var(--vx-border)' }} />
        {INCIDENTS.map((inc, i) => (
          <div key={i} style={{ position: 'relative', paddingBottom: i < INCIDENTS.length - 1 ? '1.1rem' : 0 }}>
            <span style={{ position: 'absolute', left: '-1.4rem', top: 3, width: 12, height: 12, borderRadius: '50%', background: '#fff', border: '2px solid ' + (inc.sev === 'outage' ? 'var(--vx-danger)' : 'var(--vx-warn)') }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '.88rem', fontWeight: 700 }}>{inc.t}</span>
              <Badge tone={inc.sev === 'outage' ? 'danger' : 'warn'}>{inc.sev === 'outage' ? 'Outage' : 'Degraded'}</Badge>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)' }}>{inc.dur}</span>
            </div>
            <div style={{ fontSize: '.8rem', color: 'var(--vx-muted)', marginTop: 3 }}>{inc.note}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '.66rem', color: 'var(--vx-light)', marginTop: 2 }}>{inc.d} · Resolved</div>
          </div>
        ))}
      </div>
    </>
  );
}

Object.assign(window, { DevStatus: StatusPage });
})();
