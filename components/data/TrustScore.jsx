import React from 'react';

/**
 * VerfiX Trust Engine™ score gauge — a circular dial showing a 0–100 trust
 * score with a recommended decision. Color tracks the score band:
 * ≥80 approve (green), 50–79 review (amber), <50 reject (red).
 */
export function TrustScore({ score = 87, size = 132, label = 'Trust Score', decision, style = {} }) {
  const band = score >= 80 ? 'approve' : score >= 50 ? 'review' : 'reject';
  const colors = { approve: 'var(--vx-approve)', review: 'var(--vx-review)', reject: 'var(--vx-reject)' };
  const text = { approve: 'Approve', review: 'Review', reject: 'Reject' };
  const c = colors[band];
  const r = (size - 14) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', ...style }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--vx-border)" strokeWidth="7" />
          <circle
            cx={size / 2} cy={size / 2} r={r} fill="none" stroke={c} strokeWidth="7"
            strokeLinecap="round" strokeDasharray={`${dash} ${circ}`}
            style={{ transition: 'stroke-dasharray .6s var(--ease-out)' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: size * .3, fontWeight: 700, color: 'var(--vx-text)', lineHeight: 1 }}>{score}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--vx-light)', marginTop: 2 }}>/ 100</span>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--vx-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{label}</div>
        <div style={{ fontSize: '.82rem', fontWeight: 800, color: c, marginTop: 2 }}>
          <i className={band === 'approve' ? 'fas fa-check' : band === 'review' ? 'fas fa-clock' : 'fas fa-xmark'} style={{ fontSize: '.85em', marginRight: 5 }} />
          {decision || text[band]}
        </div>
      </div>
    </div>
  );
}
