// Developer Portal views: API Documentation, Authentication, Error Reference, SDK Downloads.
(function(){
const DS = window.VerfiXDesignSystem_1000e3;
const { Button, Badge, IconChip, Tag } = DS;
const U = window.DevUI;

// ── API DOCUMENTATION ────────────────────────────────
const ENDPOINTS = [
  { m: 'POST', p: '/v2/verifications', d: 'Create an identity verification' },
  { m: 'GET', p: '/v2/verifications/:id', d: 'Retrieve a verification & score' },
  { m: 'GET', p: '/v2/verifications', d: 'List verifications' },
  { m: 'POST', p: '/v2/companies', d: 'Create a KYB company check' },
  { m: 'GET', p: '/v2/companies/:id', d: 'Retrieve company profile & UBOs' },
  { m: 'POST', p: '/v2/webhooks', d: 'Create a webhook endpoint' },
  { m: 'DELETE', p: '/v2/webhooks/:id', d: 'Delete a webhook endpoint' },
];

function Docs() {
  return (
    <>
      <U.PageHead title="API Documentation" sub="A single REST API over HTTPS. JSON request and response bodies, predictable resource URLs, standard verbs."
        actions={<Button variant="outline" size="sm" icon="fas fa-up-right-from-square">OpenAPI spec</Button>} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <U.Panel>
          <U.SectionHead>Base URL</U.SectionHead>
          <U.CodeBlock title="base">{`https://api.verfix.swiss`}</U.CodeBlock>
        </U.Panel>
        <U.Panel>
          <U.SectionHead>Quick start</U.SectionHead>
          <U.CodeBlock title="curl">{`curl https://api.verfix.swiss/v2/verifications \\
  -H "Authorization: Bearer vx_live_..." \\
  -d type=kyc -d applicant[country]=CH`}</U.CodeBlock>
        </U.Panel>
      </div>

      <U.SectionHead>Endpoints</U.SectionHead>
      <U.DataTable cols={['Method', 'Path', 'Description']} widths=".7fr 1.6fr 1.6fr"
        rows={ENDPOINTS.map(e => [<U.Method m={e.m} />, <U.Mono>{e.p}</U.Mono>, <span style={{ color: 'var(--vx-muted)' }}>{e.d}</span>])} />

      <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <U.SectionHead>Create — request</U.SectionHead>
          <U.CodeBlock title="POST /v2/verifications">{`{
  "type": "kyc",
  "applicant": {
    "first_name": "Sofia",
    "last_name": "Brunner",
    "country": "CH"
  },
  "checks": ["document", "face", "aml"]
}`}</U.CodeBlock>
        </div>
        <div>
          <U.SectionHead>Create — response</U.SectionHead>
          <U.CodeBlock title="201 Created">{`{
  "id": "vrf_8Kd2mQ",
  "object": "verification",
  "trust_score": 96,
  "decision": "approve",
  "livemode": true,
  "created": 1718884800
}`}</U.CodeBlock>
        </div>
      </div>
    </>
  );
}

// ── AUTHENTICATION ───────────────────────────────────
function Auth() {
  return (
    <>
      <U.PageHead title="Authentication" sub="Authenticate with a secret API key sent as a Bearer token. All requests must be made over HTTPS." />

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <U.SectionHead>Bearer authentication</U.SectionHead>
          <U.CodeBlock title="authenticated request">{`curl https://api.verfix.swiss/v2/verifications/vrf_8Kd2mQ \\
  -H "Authorization: Bearer vx_live_a1B2c3D4e5F6"

# Or with an SDK
const verfix = new VerfiX(process.env.VERFIX_SECRET_KEY);
await verfix.verifications.retrieve("vrf_8Kd2mQ");`}</U.CodeBlock>
        </div>
        <div>
          <U.SectionHead>Key types</U.SectionHead>
          <U.Panel pad=".9rem 1rem">
            {[['vx_live_', 'Live secret', 'Server-side, production', 'red'], ['vx_test_', 'Test secret', 'Server-side, sandbox', 'neutral'], ['vx_pub_', 'Publishable', 'Client-side capture only', 'info']].map(([p, n, d, tone]) => (
              <div key={p} style={{ padding: '.55rem 0', borderBottom: p !== 'vx_pub_' ? '1px solid var(--vx-off)' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: 2 }}><U.Mono color="var(--vx-text)">{p}…</U.Mono><Badge tone={tone}>{n}</Badge></div>
                <div style={{ fontSize: '.74rem', color: 'var(--vx-light)' }}>{d}</div>
              </div>
            ))}
          </U.Panel>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '.7rem', background: 'var(--vx-red-bg)', border: '1px solid var(--vx-red-line)', borderRadius: 8, padding: '.8rem 1rem', fontSize: '.82rem', color: 'var(--vx-text)' }}>
        <i className="fas fa-lock" style={{ color: 'var(--vx-red)', marginTop: 2 }} />
        <div><b>Never expose live secret keys.</b> Keep them server-side and out of version control. Use environment variables and rotate keys regularly from the API Keys page.</div>
      </div>
    </>
  );
}

// ── ERROR REFERENCE ──────────────────────────────────
const ERRORS = [
  ['400', 'invalid_request', 'Malformed request — check required parameters.', 'warn'],
  ['401', 'authentication_failed', 'Missing or invalid API key.', 'danger'],
  ['403', 'permission_denied', 'Key lacks scope for this resource.', 'danger'],
  ['404', 'resource_not_found', 'The requested object does not exist.', 'warn'],
  ['409', 'idempotency_conflict', 'Idempotency key reused with a different body.', 'warn'],
  ['422', 'verification_failed', 'Document or biometric checks could not be processed.', 'warn'],
  ['429', 'rate_limit_exceeded', 'Too many requests — back off and retry.', 'warn'],
  ['500', 'api_error', 'Something went wrong on our end. Safe to retry.', 'danger'],
];

function Errors() {
  return (
    <>
      <U.PageHead title="Error Reference" sub="VerfiX uses conventional HTTP status codes. 2xx success, 4xx client errors, 5xx VerfiX errors." />
      <div style={{ marginBottom: '1.3rem' }}>
        <U.CodeBlock title="error envelope">{`{
  "error": {
    "type": "authentication_failed",
    "code": "invalid_api_key",
    "message": "No such API key: vx_live_***",
    "doc_url": "https://developers.verfix.swiss/errors#401"
  }
}`}</U.CodeBlock>
      </div>
      <U.SectionHead>Status codes</U.SectionHead>
      <U.DataTable cols={['Code', 'Type', 'Meaning']} widths=".6fr 1.2fr 2fr"
        rows={ERRORS.map(([c, t, m, tone]) => [<Badge tone={tone}>{c}</Badge>, <U.Mono>{t}</U.Mono>, <span style={{ color: 'var(--vx-muted)' }}>{m}</span>])} />
    </>
  );
}

// ── SDK DOWNLOADS ────────────────────────────────────
const SDKS = [
  { icon: 'fab fa-node-js', name: 'Node.js', pkg: 'npm i @verfix/node', v: 'v3.2.1' },
  { icon: 'fab fa-python', name: 'Python', pkg: 'pip install verfix', v: 'v2.8.0' },
  { icon: 'fab fa-java', name: 'Java', pkg: 'implementation "swiss.verfix:sdk:2.4.0"', v: 'v2.4.0' },
  { icon: 'fab fa-golang', name: 'Go', pkg: 'go get verfix.swiss/go', v: 'v1.9.3' },
  { icon: 'fab fa-php', name: 'PHP', pkg: 'composer require verfix/verfix-php', v: 'v2.1.0' },
  { icon: 'fab fa-microsoft', name: '.NET', pkg: 'dotnet add package VerfiX', v: 'v1.6.0' },
  { icon: 'fab fa-react', name: 'Web SDK', pkg: 'npm i @verfix/web', v: 'v4.0.2' },
];

function SDKs() {
  return (
    <>
      <U.PageHead title="SDK Downloads" sub="Official, typed client libraries. Each ships with the full verification + KYB surface and webhook helpers."
        actions={<Button variant="outline" size="sm" icon="fab fa-github">View on GitHub</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.9rem' }}>
        {SDKS.map(s => (
          <U.Panel key={s.name}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.7rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <i className={s.icon} style={{ color: 'var(--vx-red)', fontSize: '1.3rem', width: 22 }} />
                <span style={{ fontWeight: 700, fontSize: '.92rem' }}>{s.name}</span>
              </div>
              <Tag>{s.v}</Tag>
            </div>
            <div style={{ background: 'var(--vx-off)', border: '1px solid var(--vx-border)', borderRadius: 5, padding: '.5rem .6rem', marginBottom: '.7rem' }}><U.Mono>{s.pkg}</U.Mono></div>
            <div style={{ display: 'flex', gap: '.4rem' }}>
              <Button variant="outline" size="sm" icon="fas fa-book" style={{ flex: 1 }}>Docs</Button>
              <Button variant="red" size="sm" icon="fas fa-download" style={{ flex: 1 }}>Install</Button>
            </div>
          </U.Panel>
        ))}
      </div>
    </>
  );
}

Object.assign(window, { DevDocs: Docs, DevAuth: Auth, DevErrors: Errors, DevSDKs: SDKs });
})();
