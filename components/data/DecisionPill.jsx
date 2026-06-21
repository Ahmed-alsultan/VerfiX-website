import React from 'react';

const MAP = {
  approve: { bg: 'rgba(22,163,74,.15)', bd: 'rgba(22,163,74,.3)', fg: '#16A34A', icon: 'fas fa-check', label: 'Approve' },
  review:  { bg: 'rgba(217,119,6,.12)', bd: 'rgba(217,119,6,.25)', fg: '#D97706', icon: 'fas fa-clock', label: 'Review' },
  reject:  { bg: 'rgba(200,37,42,.15)', bd: 'rgba(200,37,42,.3)', fg: '#C8252A', icon: 'fas fa-xmark', label: 'Reject' },
};

/**
 * Trust Engine™ decision outcome pill — the Approve / Review / Reject verdict
 * chip. Solid color-coded states used at the end of a verification flow.
 */
export function DecisionPill({ decision = 'approve', children, style = {}, ...rest }) {
  const d = MAP[decision] || MAP.approve;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.45rem',
        fontFamily: 'var(--font-body)', fontSize: '.72rem', fontWeight: 700,
        letterSpacing: '.04em', textTransform: 'uppercase',
        padding: '.5rem .9rem', borderRadius: 'var(--radius-md)',
        background: d.bg, border: `1px solid ${d.bd}`, color: d.fg, ...style,
      }}
      {...rest}
    >
      <i className={d.icon} aria-hidden="true" />
      {children || d.label}
    </span>
  );
}
