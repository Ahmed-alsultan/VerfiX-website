// VerfiX demo-booking modal — multi-step lead form ending in a confirmation.
(function(){
const { Button, Input, IconChip } = window.VerfiXDesignSystem_1000e3;

function DemoModal({ open, onClose }) {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { if (open) setDone(false); }, [open]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(15,20,32,.55)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div onClick={e => e.stopPropagation()} style={{ width: '100%', maxWidth: 460, background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
        <div style={{ background: 'var(--vx-navy)', padding: '1.4rem 1.6rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.7rem' }}>
            <IconChip icon="fas fa-calendar-check" tone="solid" />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Book a Demo</span>
          </div>
          <i className="fas fa-xmark" onClick={onClose} style={{ color: 'rgba(255,255,255,.6)', cursor: 'pointer', padding: 4 }} />
        </div>
        {done ? (
          <div style={{ padding: '2.5rem 1.6rem', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--vx-success-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <i className="fas fa-check" style={{ color: 'var(--vx-success)', fontSize: '1.3rem' }} />
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--vx-text)', margin: '0 0 .5rem' }}>You're all set.</h3>
            <p style={{ fontSize: '.88rem', color: 'var(--vx-muted)', margin: '0 0 1.5rem', lineHeight: 1.6 }}>Our team will reach out within one business day to schedule your Trust Engine™ walkthrough.</p>
            <Button variant="red" onClick={onClose}>Done</Button>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }}>
              <Input label="First name" placeholder="Jane" required />
              <Input label="Last name" placeholder="Müller" required />
            </div>
            <Input label="Work email" type="email" placeholder="jane@bank.ch" required />
            <Input label="Company" placeholder="Helvetia Trust AG" required />
            <Input label="Industry" as="select" options={['Banking', 'Fintech', 'Insurance', 'Crypto', 'Government', 'Telecom', 'Other']} />
            <Button variant="red" size="lg" type="submit" style={{ width: '100%', marginTop: '.2rem' }}>Request my demo</Button>
            <p style={{ fontSize: '.7rem', color: 'var(--vx-light)', textAlign: 'center', margin: 0 }}>By submitting you agree to our Privacy Policy. Swiss data residency applies.</p>
          </form>
        )}
      </div>
    </div>
  );
}

window.DemoModal = DemoModal;
})();
