import React from 'react';

/**
 * VerfiX mono section kicker — small uppercase IBM Plex Mono with a short
 * red dash. Sits above headings to label a section.
 */
export function Label({ children, color, dash = true, style = {}, ...rest }) {
  const c = color || 'var(--vx-red)';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '.5rem',
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-label)', fontWeight: 500,
        letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: c, ...style,
      }}
      {...rest}
    >
      {dash && <span style={{ width: 14, height: 1.5, background: c, flexShrink: 0 }} />}
      {children}
    </span>
  );
}
