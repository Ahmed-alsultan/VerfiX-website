import React from 'react';

const TONES = {
  neutral: { background: 'var(--vx-off)',         color: 'var(--vx-muted)',   border: 'var(--vx-border)' },
  red:     { background: 'var(--vx-red-bg)',      color: 'var(--vx-red)',     border: 'var(--vx-red-line)' },
  success: { background: 'var(--vx-success-bg)',  color: 'var(--vx-success-fg)', border: 'transparent' },
  warn:    { background: 'var(--vx-warn-bg)',     color: 'var(--vx-warn-fg)', border: 'transparent' },
  danger:  { background: 'var(--vx-danger-bg)',   color: 'var(--vx-danger-fg)', border: 'transparent' },
  info:    { background: 'var(--vx-info-bg)',     color: 'var(--vx-info-fg)', border: 'transparent' },
};

/**
 * Small status badge — verification states, counts, labels. Tone carries
 * meaning: use success/warn/danger for states, red/neutral for labels.
 */
export function Badge({ children, tone = 'neutral', icon, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '.3rem',
        fontFamily: 'var(--font-body)', fontSize: '.6rem', fontWeight: 700,
        letterSpacing: '.04em', textTransform: 'uppercase',
        padding: '.16rem .42rem', borderRadius: 'var(--radius-sm)',
        background: t.background, color: t.color,
        border: `1px solid ${t.border}`, ...style,
      }}
      {...rest}
    >
      {icon && <i className={icon} style={{ fontSize: '.9em' }} aria-hidden="true" />}
      {children}
    </span>
  );
}
