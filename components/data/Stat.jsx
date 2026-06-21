import React from 'react';

/**
 * Mono metric readout — large IBM Plex Mono number over a label/description.
 * `dark` for navy stat bars. Number is brand red by default.
 */
export function Stat({ value, label, desc, dark = false, accent = 'var(--vx-red)', style = {}, ...rest }) {
  return (
    <div style={style} {...rest}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '2.6rem', fontWeight: 700,
        letterSpacing: '-.04em', lineHeight: 1, color: accent, marginBottom: '.45rem',
      }}>{value}</div>
      {label && <div style={{ fontSize: '.9rem', fontWeight: 700, color: dark ? '#fff' : 'var(--vx-text)', marginBottom: '.28rem' }}>{label}</div>}
      {desc && <div style={{ fontSize: '.77rem', color: dark ? 'rgba(255,255,255,.42)' : 'var(--vx-muted)' }}>{desc}</div>}
    </div>
  );
}
