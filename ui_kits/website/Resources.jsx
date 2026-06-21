// VerfiX Resources — enterprise document library. Organizes the 30 uploaded
// documents into proper sections + an honest ecosystem strip. Each doc links to
// the real file in resources/. No fake partners / certs.
(function(){
const { Label, Button, IconChip, Badge } = window.VerfiXDesignSystem_1000e3;
const D = 'resources/';

const SECTIONS = [
  { id: 'company', label: 'Company', icon: 'fas fa-building', docs: [
    ['Company Overview', D + '01-Company-Overview.html'],
    ['Executive Summary', D + '02-Executive-Summary.html'],
    ['FAQ', D + '27-FAQ.html'],
    ['Google Business Profile', D + '28-Google-Business-Profile.html'],
    ['LinkedIn Content', D + '29-LinkedIn-Content.html'],
    ['Website SEO Content', D + '30-Website-SEO-Content.html'],
  ]},
  { id: 'product', label: 'Product', icon: 'fas fa-cube', docs: [
    ['Product Brochure', D + '03-Product-Brochure.html'],
    ['KYC Product Sheet', D + '04-KYC-Product-Sheet.html'],
    ['KYB Product Sheet', D + '05-KYB-Product-Sheet.html'],
    ['eID Gateway Product Sheet', D + '06-eID-Gateway-Product-Sheet.html'],
    ['Trust Engine™ Product Sheet', D + '07-Trust-Engine-Product-Sheet.html'],
  ]},
  { id: 'developers', label: 'Developers', icon: 'fas fa-code', docs: [
    ['API Documentation', D + '08-API-Documentation.html'],
    ['Developer Documentation', D + '18-Developer-Documentation.html'],
    ['Integration Guide', D + '19-Integration-Guide.html'],
  ]},
  { id: 'architecture', label: 'Architecture', icon: 'fas fa-sitemap', docs: [
    ['Technical Architecture', D + '20-Technical-Architecture.html'],
  ]},
  { id: 'security', label: 'Security', icon: 'fas fa-shield-halved', docs: [
    ['Security Overview', D + '09-Security-Overview.html'],
    ['Information Security Policy', D + '25-Information-Security-Policy.html'],
    ['Incident Response Policy', D + '24-Incident-Response-Policy.html'],
    ['Business Continuity Overview', D + '26-Business-Continuity-Overview.html'],
  ]},
  { id: 'compliance', label: 'Compliance', icon: 'fas fa-scale-balanced', docs: [
    ['Data Protection — nFADP Whitepaper', D + '10-nFADP-Whitepaper.html'],
    ['AML Compliance Whitepaper', D + '11-AML-Compliance-Whitepaper.html'],
    ['Privacy Policy', D + '21-Privacy-Policy.html'],
    ['Terms of Service', D + '22-Terms-of-Service.html'],
    ['Data Processing Agreement (DPA)', D + '23-Data-Processing-Agreement.html'],
  ]},
  { id: 'enterprise', label: 'Sales & Procurement', icon: 'fas fa-briefcase', docs: [
    ['Partner Program Guide', D + '12-Partner-Program-Guide.html'],
    ['Reseller Program Guide', D + '13-Reseller-Program-Guide.html'],
    ['Bank Sales Presentation', D + '14-Bank-Sales-Presentation.html'],
    ['Fintech Sales Presentation', D + '15-Fintech-Sales-Presentation.html'],
    ['Telecom Sales Presentation', D + '16-Telecom-Sales-Presentation.html'],
    ['Insurance Sales Presentation', D + '17-Insurance-Sales-Presentation.html'],
  ]},
];

function Resources({ onNav }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <section style={{ padding: '4rem 0 2.4rem', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2rem' }}>
          <Label style={{ justifyContent: 'center' }}>Resources</Label>
          <h1 style={{ fontSize: 'clamp(2.2rem,3.6vw,3rem)', fontWeight: 800, letterSpacing: '-.045em', lineHeight: 1.05, margin: '.5rem 0 .9rem' }}>Document library</h1>
          <p style={{ fontSize: '1.02rem', color: 'var(--vx-muted)', lineHeight: 1.7, margin: 0 }}>
            Every VerfiX document, organized by section — company, product, developer, security, compliance, architecture and sales materials. Built for enterprise evaluation and due diligence.
          </p>
        </div>
      </section>

      <section style={{ padding: '1.5rem 0 3rem', background: 'var(--vx-off)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {SECTIONS.map(s => (
            <div key={s.id} style={{ background: '#fff', border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.3rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem', marginBottom: '1rem' }}>
                <IconChip icon={s.icon} />
                <h2 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>{s.label}</h2>
                <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '.62rem', color: 'var(--vx-light)' }}>{s.docs.length} docs</span>
              </div>
              <div className="vx-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.6rem' }}>
                {s.docs.map(([n, href]) => (
                  <a key={n} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.6rem', border: '1px solid var(--vx-border)', borderRadius: 7, padding: '.6rem .75rem', textDecoration: 'none', background: 'var(--vx-off)' }}>
                    <i className="fas fa-file-lines" style={{ color: 'var(--vx-red)', fontSize: '.85rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--vx-text)', flex: 1, lineHeight: 1.3 }}>{n}</span>
                    <i className="fas fa-arrow-up-right-from-square" style={{ color: 'var(--vx-light)', fontSize: '.62rem' }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ECOSYSTEM — honest, no fake partnerships */}
      <section style={{ padding: '3.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem' }}>
          <Label>Supported by &amp; ecosystem</Label>
          <h2 style={{ fontSize: 'clamp(1.5rem,2.4vw,2rem)', fontWeight: 800, letterSpacing: '-.03em', margin: '.4rem 0 .5rem' }}>Our ecosystem</h2>
          <p style={{ fontSize: '.88rem', color: 'var(--vx-muted)', maxWidth: 560, margin: '0 0 1.6rem' }}>We're transparent about our ecosystem. Nothing below implies an official partnership unless explicitly stated.</p>
          <div className="vx-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.8rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--vx-muted)' }}>Startup ecosystem</span>
                <Badge tone="info">Ecosystem support</Badge>
              </div>
              <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                {['Trust Valley', 'Innosuisse'].map(n => (
                  <span key={n} style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', border: '1px solid var(--vx-border)', borderRadius: 7, padding: '.5rem .8rem', fontSize: '.85rem', fontWeight: 700, color: 'var(--vx-text)' }}><i className="fas fa-circle-nodes" style={{ color: 'var(--vx-red)', fontSize: '.78rem' }} />{n}</span>
                ))}
              </div>
            </div>
            <div style={{ border: '1px solid var(--vx-border)', borderRadius: 10, padding: '1.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.8rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--vx-muted)' }}>Research &amp; innovation network</span>
                <Badge tone="warn">Future collaboration target</Badge>
              </div>
              <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                {['CSEM', 'IDIAP'].map(n => (
                  <span key={n} style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', border: '1px dashed var(--vx-border-2)', borderRadius: 7, padding: '.5rem .8rem', fontSize: '.85rem', fontWeight: 700, color: 'var(--vx-muted)' }}><i className="fas fa-flask" style={{ color: 'var(--vx-light)', fontSize: '.78rem' }} />{n}</span>
                ))}
              </div>
              <p style={{ fontSize: '.72rem', color: 'var(--vx-light)', margin: '.7rem 0 0' }}>In discussion — not an active collaboration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Resources = Resources;
})();
