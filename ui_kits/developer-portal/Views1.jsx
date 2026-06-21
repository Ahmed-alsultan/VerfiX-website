// Developer Portal views: API Dashboard, API Keys, Rate Limits.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip } = DS;
const U = window.DevUI;

const REQ_7D = [{l:'Mon',v:8200},{l:'Tue',v:9100},{l:'Wed',v:7600},{l:'Thu',v:10400},{l:'Fri',v:11800},{l:'Sat',v:5200},{l:'Sun',v:6900}];

function Dashboard({ env }) {
  return (
    <>
      <U.PageHead title="API Dashboard"
        sub={`Live overview of your VerfiX integration · ${env === 'live' ? 'Production' : 'Test'} environment`}
        actions={<><Button variant="outline" size="sm" icon="fas fa-book">Docs</Button><Button variant="red" size="sm" icon="fas fa-flask">Open Sandbox</Button></>} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '.8rem', marginBottom: '1.5rem' }}>
        <U.StatTile label="Requests · 24h" value="59,210" delta="12.4% vs prev" deltaUp icon="fas fa-arrow-right-arrow-left" />
        <U.StatTile label="Verifications" value="3,847" delta="8.1%" deltaUp icon="fas fa-id-card" />
        <U.StatTile label="Success rate" value="99.2%" delta="0.3%" deltaUp icon="fas fa-circle-check" />
        <U.StatTile label="Avg latency" value="412ms" delta="22ms faster" deltaUp icon="fas fa-gauge-high" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <U.Panel>
          <U.SectionHead right={<span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>Last 7 days</span>}>API requests</U.SectionHead>
          <U.BarChart data={REQ_7D} />
        </U.Panel>
        <U.Panel>
          <U.SectionHead>Endpoint mix</U.SectionHead>
          {[['POST /verifications', 62, 'var(--vx-red)'], ['GET /verifications/:id', 24, 'var(--vx-navy)'], ['POST /companies', 9, 'var(--vx-review)'], ['POST /webhooks', 5, 'var(--vx-light)']].map(([l, v, c]) => (
            <div key={l} style={{ marginBottom: '.7rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.74rem', marginBottom: 4 }}><U.Mono>{l}</U.Mono><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--vx-text)' }}>{v}%</span></div>
              <div style={{ height: 6, background: 'var(--vx-off)', borderRadius: 3 }}><div style={{ width: v + '%', height: '100%', background: c, borderRadius: 3 }} /></div>
            </div>
          ))}
        </U.Panel>
      </div>

      <U.SectionHead right={<a style={{ fontSize: '.74rem', fontWeight: 600, color: 'var(--vx-red)', cursor: 'pointer' }}>View all logs →</a>}>Recent requests</U.SectionHead>
      <U.DataTable
        cols={['Method', 'Endpoint', 'Status', 'Latency', 'Time']}
        widths=".7fr 2fr .8fr .8fr 1fr"
        rows={[
          [<U.Method m="POST" />, <U.Mono>/v2/verifications</U.Mono>, <Badge tone="success">201</Badge>, <U.Mono>389ms</U.Mono>, <span style={{color:'var(--vx-light)'}}>12:04:51</span>],
          [<U.Method m="GET" />, <U.Mono>/v2/verifications/vrf_8Kd2mQ</U.Mono>, <Badge tone="success">200</Badge>, <U.Mono>88ms</U.Mono>, <span style={{color:'var(--vx-light)'}}>12:04:48</span>],
          [<U.Method m="POST" />, <U.Mono>/v2/companies</U.Mono>, <Badge tone="success">201</Badge>, <U.Mono>1.2s</U.Mono>, <span style={{color:'var(--vx-light)'}}>12:03:30</span>],
          [<U.Method m="POST" />, <U.Mono>/v2/verifications</U.Mono>, <Badge tone="warn">429</Badge>, <U.Mono>14ms</U.Mono>, <span style={{color:'var(--vx-light)'}}>12:02:11</span>],
          [<U.Method m="GET" />, <U.Mono>/v2/verifications/vrf_3Lp9xR</U.Mono>, <Badge tone="danger">404</Badge>, <U.Mono>22ms</U.Mono>, <span style={{color:'var(--vx-light)'}}>12:01:02</span>],
        ]} />
    </>
  );
}

const KEYS = [
  { name: 'Production · Backend', prefix: 'vx_live_', tail: '8Kd2', created: 'Jan 14, 2026', used: '2 min ago', env: 'live', scope: 'Full access' },
  { name: 'Production · Webhooks', prefix: 'vx_live_', tail: 'q9Lp', created: 'Jan 14, 2026', used: '5 min ago', env: 'live', scope: 'Read only' },
  { name: 'Sandbox · Default', prefix: 'vx_test_', tail: 'M3kZ', created: 'Dec 02, 2025', used: '1 hr ago', env: 'test', scope: 'Full access' },
];

function Keys({ env }) {
  const [revealed, setRevealed] = React.useState(null);
  const rows = KEYS.filter(k => k.env === env);
  return (
    <>
      <U.PageHead title="API Keys"
        sub="Secret keys authenticate your server-side requests. Never expose a live key in client code."
        actions={<Button variant="red" size="sm" icon="fas fa-plus">Create key</Button>} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', background: 'var(--vx-warn-bg)', border: '1px solid #FCE4A6', borderRadius: 8, padding: '.7rem 1rem', marginBottom: '1.2rem', fontSize: '.82rem', color: 'var(--vx-warn-fg)' }}>
        <i className="fas fa-triangle-exclamation" /> Keep secret keys confidential. Rotate immediately if a key is exposed — VerfiX cannot recover a leaked key.
      </div>

      <U.DataTable
        cols={['Name', 'Key', 'Scope', 'Last used', 'Created', '']}
        widths="1.4fr 1.7fr .9fr .9fr .9fr .5fr"
        rows={rows.map(k => [
          <div><div style={{ fontWeight: 700, fontSize: '.82rem' }}>{k.name}</div></div>,
          <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <U.Mono>{k.prefix}{revealed === k.tail ? 'a1B2c3D4e5F6' + k.tail : '••••••••'}{revealed === k.tail ? '' : k.tail}</U.Mono>
            <i className={revealed === k.tail ? 'fas fa-eye-slash' : 'fas fa-eye'} onClick={() => setRevealed(revealed === k.tail ? null : k.tail)} style={{ cursor: 'pointer', color: 'var(--vx-light)', fontSize: '.72rem' }} />
          </div>,
          <Badge tone={k.scope === 'Full access' ? 'red' : 'neutral'}>{k.scope}</Badge>,
          <span style={{ color: 'var(--vx-muted)', fontSize: '.78rem' }}>{k.used}</span>,
          <span style={{ color: 'var(--vx-light)', fontSize: '.78rem' }}>{k.created}</span>,
          <i className="fas fa-rotate" title="Rotate" style={{ color: 'var(--vx-red)', cursor: 'pointer' }} />,
        ])} />

      <div style={{ marginTop: '1.5rem' }}>
        <U.SectionHead>Publishable key</U.SectionHead>
        <U.Panel>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <div><U.Mono color="var(--vx-text)">vx_pub_{env}_4Kd9Lm2QpZ</U.Mono><div style={{ fontSize: '.74rem', color: 'var(--vx-light)', marginTop: 4 }}>Safe to embed in the VerfiX Web SDK for client-side capture.</div></div>
            <Button variant="outline" size="sm" icon="fas fa-copy">Copy</Button>
          </div>
        </U.Panel>
      </div>
    </>
  );
}

const TIERS = [
  ['POST /v2/verifications', '50 / sec', '120,000 / day'],
  ['GET /v2/verifications/:id', '200 / sec', 'Unlimited'],
  ['POST /v2/companies', '20 / sec', '40,000 / day'],
  ['POST /v2/webhooks', '10 / sec', '5,000 / day'],
];

function RateLimits() {
  return (
    <>
      <U.PageHead title="Rate Limits"
        sub="Limits are enforced per organization. Exceeding a limit returns 429 with a Retry-After header." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.8rem', marginBottom: '1.5rem' }}>
        <U.StatTile label="Current plan" value="Scale" icon="fas fa-layer-group" />
        <U.StatTile label="Burst capacity" value="50 / sec" icon="fas fa-bolt" />
        <U.StatTile label="Today's usage" value="49.3%" delta="of daily quota" icon="fas fa-gauge" />
      </div>

      <U.SectionHead>Per-endpoint limits</U.SectionHead>
      <U.DataTable cols={['Endpoint', 'Rate limit', 'Daily quota']} widths="2fr 1fr 1fr"
        rows={TIERS.map(([e, r, d]) => [<U.Mono>{e}</U.Mono>, <span style={{ fontWeight: 600 }}>{r}</span>, <span style={{ color: 'var(--vx-muted)' }}>{d}</span>])} />

      <div style={{ marginTop: '1.5rem' }}>
        <U.SectionHead>Handling 429 responses</U.SectionHead>
        <U.CodeBlock title="response · 429 Too Many Requests">{`HTTP/1.1 429 Too Many Requests
Retry-After: 2
X-RateLimit-Limit: 50
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1718884802

{ "error": { "type": "rate_limit_exceeded",
  "message": "Too many requests. Retry after 2s." } }`}</U.CodeBlock>
        <p style={{ fontSize: '.82rem', color: 'var(--vx-muted)', marginTop: '.8rem' }}>Implement exponential backoff and respect <U.Mono>Retry-After</U.Mono>. Need higher limits? <a style={{ color: 'var(--vx-red)', fontWeight: 600, cursor: 'pointer' }}>Contact sales</a>.</p>
      </div>
    </>
  );
}

Object.assign(window, { DevDashboard: Dashboard, DevKeys: Keys, DevRateLimits: RateLimits });
})();
