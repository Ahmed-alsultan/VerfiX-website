// Developer Portal views: Sandbox, Webhooks, API Logs.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip } = DS;
const U = window.DevUI;

// ── SANDBOX ──────────────────────────────────────────
const SCENARIOS = [
  { id: 'approve', label: 'Approved applicant', score: 96, decision: 'approve' },
  { id: 'review', label: 'Manual review', score: 64, decision: 'review' },
  { id: 'reject', label: 'Rejected · fraud', score: 31, decision: 'reject' },
];

function Sandbox() {
  const [scenario, setScenario] = React.useState(SCENARIOS[0]);
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const run = () => { setLoading(true); setSent(false); setTimeout(() => { setLoading(false); setSent(true); }, 650); };
  const body = `{
  "type": "kyc",
  "applicant": {
    "first_name": "Sofia",
    "last_name": "Brunner",
    "country": "CH"
  },
  "checks": ["document", "face", "aml"],
  "sandbox_scenario": "${scenario.id}"
}`;
  const resp = `{
  "id": "vrf_sbx_${scenario.id}01",
  "object": "verification",
  "livemode": false,
  "trust_score": ${scenario.score},
  "decision": "${scenario.decision}",
  "checks": {
    "document": "${scenario.decision === 'reject' ? 'failed' : 'passed'}",
    "face": "${scenario.decision === 'reject' ? 'failed' : 'passed'}",
    "aml": "clear"
  },
  "created": 1718884800
}`;
  return (
    <>
      <U.PageHead title="Sandbox" sub="Fire real API calls against deterministic test scenarios — no live data, no charges."
        actions={<Badge tone="info">Test mode</Badge>} />

      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
        {SCENARIOS.map(s => (
          <button key={s.id} onClick={() => { setScenario(s); setSent(false); }} style={{ fontFamily: 'var(--font-body)', fontSize: '.78rem', fontWeight: 600, cursor: 'pointer', padding: '.4rem .9rem', borderRadius: 6,
            border: '1px solid ' + (scenario.id === s.id ? 'var(--vx-red)' : 'var(--vx-border)'), background: scenario.id === s.id ? 'var(--vx-red-bg)' : '#fff', color: scenario.id === s.id ? 'var(--vx-red)' : 'var(--vx-muted)' }}>
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <U.SectionHead right={<U.Method m="POST" />}>Request</U.SectionHead>
          <U.CodeBlock title="POST /v2/verifications">{body}</U.CodeBlock>
          <Button variant="red" size="md" icon={loading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'} onClick={run} style={{ marginTop: '.8rem', width: '100%' }}>{loading ? 'Sending…' : 'Send request'}</Button>
        </div>
        <div>
          <U.SectionHead right={sent ? <Badge tone={scenario.decision === 'approve' ? 'success' : scenario.decision === 'review' ? 'warn' : 'danger'}>{sent ? '201 Created' : ''}</Badge> : <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>awaiting</span>}>Response</U.SectionHead>
          {sent
            ? <U.CodeBlock title="200 OK · application/json">{resp}</U.CodeBlock>
            : <div style={{ background: 'var(--vx-navy-3)', border: '1px dashed rgba(255,255,255,.15)', borderRadius: 8, minHeight: 240, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,.35)', fontFamily: 'var(--font-mono)', fontSize: '.74rem' }}>Send a request to see the response</div>}
        </div>
      </div>
    </>
  );
}

// ── WEBHOOKS ─────────────────────────────────────────
const EVENTS = ['verification.completed', 'verification.review_required', 'verification.rejected', 'company.verified', 'document.expired'];
const DELIVERIES = [
  ['verification.completed', '200', 'success', '2 min ago'],
  ['verification.review_required', '200', 'success', '8 min ago'],
  ['verification.rejected', '500', 'danger', '14 min ago'],
  ['company.verified', '200', 'success', '31 min ago'],
];

function Webhooks() {
  return (
    <>
      <U.PageHead title="Webhooks" sub="Receive real-time events when verifications change state."
        actions={<Button variant="red" size="sm" icon="fas fa-plus">Add endpoint</Button>} />

      <U.Panel style={{ marginBottom: '1.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.6rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
            <IconChip icon="fas fa-bolt" />
            <div>
              <U.Mono color="var(--vx-text)">https://api.acme-bank.ch/hooks/verfix</U.Mono>
              <div style={{ fontSize: '.74rem', color: 'var(--vx-light)', marginTop: 3 }}>5 events · signing secret <U.Mono>whsec_••••4Kd9</U.Mono></div>
            </div>
          </div>
          <Badge tone="success" icon="fas fa-circle">Active</Badge>
        </div>
      </U.Panel>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '1rem' }}>
        <div>
          <U.SectionHead>Subscribed events</U.SectionHead>
          <U.Panel pad=".6rem .9rem">
            {EVENTS.map((e, i) => (
              <div key={e} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.5rem 0', borderBottom: i < EVENTS.length - 1 ? '1px solid var(--vx-off)' : 'none' }}>
                <U.Mono>{e}</U.Mono>
                <span style={{ width: 34, height: 18, borderRadius: 100, background: 'var(--vx-red)', position: 'relative' }}><span style={{ position: 'absolute', right: 2, top: 2, width: 14, height: 14, borderRadius: '50%', background: '#fff' }} /></span>
              </div>
            ))}
          </U.Panel>
        </div>
        <div>
          <U.SectionHead right={<a style={{ fontSize: '.74rem', fontWeight: 600, color: 'var(--vx-red)', cursor: 'pointer' }}>Resend failed</a>}>Recent deliveries</U.SectionHead>
          <U.DataTable cols={['Event', 'Status', 'Delivered']} widths="2fr .8fr 1fr"
            rows={DELIVERIES.map(([e, code, tone, t]) => [<U.Mono>{e}</U.Mono>, <Badge tone={tone === 'success' ? 'success' : 'danger'}>{code}</Badge>, <span style={{ color: 'var(--vx-light)', fontSize: '.78rem' }}>{t}</span>])} />
        </div>
      </div>

      <div style={{ marginTop: '1.3rem' }}>
        <U.SectionHead>Verify the signature</U.SectionHead>
        <U.CodeBlock title="node · verify webhook">{`const sig = req.headers['verfix-signature'];
const valid = verfix.webhooks.verify(
  req.rawBody, sig, process.env.VERFIX_WEBHOOK_SECRET
);
if (!valid) return res.status(400).end();`}</U.CodeBlock>
      </div>
    </>
  );
}

// ── API LOGS ─────────────────────────────────────────
const LOGS = [
  ['POST', '/v2/verifications', '201', 'success', '389ms', '12:04:51', 'vx_live_8Kd2'],
  ['GET', '/v2/verifications/vrf_8Kd2mQ', '200', 'success', '88ms', '12:04:48', 'vx_live_8Kd2'],
  ['POST', '/v2/companies', '201', 'success', '1.21s', '12:03:30', 'vx_live_8Kd2'],
  ['POST', '/v2/verifications', '429', 'warn', '14ms', '12:02:11', 'vx_live_q9Lp'],
  ['GET', '/v2/verifications/vrf_3Lp9xR', '404', 'danger', '22ms', '12:01:02', 'vx_live_8Kd2'],
  ['POST', '/v2/verifications', '201', 'success', '402ms', '11:59:40', 'vx_live_8Kd2'],
  ['DELETE', '/v2/webhooks/whk_2Nf6', '200', 'success', '61ms', '11:58:12', 'vx_live_8Kd2'],
];

function Logs() {
  const [filter, setFilter] = React.useState('all');
  const rows = LOGS.filter(l => filter === 'all' || (filter === 'errors' && +l[2] >= 400) || (filter === 'success' && +l[2] < 400));
  return (
    <>
      <U.PageHead title="API Logs" sub="Every request to your account, searchable and replayable."
        actions={<><Button variant="outline" size="sm" icon="fas fa-download">Export</Button><Button variant="outline" size="sm" icon="fas fa-rotate">Refresh</Button></>} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '.4rem' }}>
          {['all', 'success', 'errors'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ fontFamily: 'var(--font-body)', fontSize: '.74rem', fontWeight: 600, textTransform: 'capitalize', cursor: 'pointer', padding: '.35rem .8rem', borderRadius: 100, border: '1px solid ' + (filter === f ? 'var(--vx-red)' : 'var(--vx-border)'), background: filter === f ? 'var(--vx-red)' : '#fff', color: filter === f ? '#fff' : 'var(--vx-muted)' }}>{f}</button>
          ))}
        </div>
        <div style={{ flex: 1, minWidth: 180, display: 'flex', alignItems: 'center', gap: '.5rem', background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 6, padding: '.4rem .7rem' }}>
          <i className="fas fa-magnifying-glass" style={{ color: 'var(--vx-light)', fontSize: '.78rem' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.74rem', color: 'var(--vx-light)' }}>request_id, endpoint, status…</span>
        </div>
      </div>

      <U.DataTable
        cols={['Method', 'Endpoint', 'Status', 'Latency', 'Time', 'Key']}
        widths=".7fr 2fr .8fr .8fr .9fr 1fr"
        rows={rows.map(([m, e, code, tone, lat, t, key]) => [
          <U.Method m={m} />, <U.Mono>{e}</U.Mono>,
          <Badge tone={tone === 'success' ? 'success' : tone === 'warn' ? 'warn' : 'danger'}>{code}</Badge>,
          <U.Mono>{lat}</U.Mono>, <span style={{ color: 'var(--vx-light)', fontSize: '.78rem' }}>{t}</span>, <U.Mono color="var(--vx-light)">{key}</U.Mono>,
        ])} />
    </>
  );
}

Object.assign(window, { DevSandbox: Sandbox, DevWebhooks: Webhooks, DevLogs: Logs });
})();
