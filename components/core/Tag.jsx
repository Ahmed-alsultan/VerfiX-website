import React from 'react';

/**
 * Small neutral tag chip — used for tech keywords and capability pills under
 * feature copy. Bordered, lightweight, non-interactive by default.
 */
export function Tag({ children, style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '.3rem',
        fontFamily: 'var(--font-body)', fontSize: '.6rem', fontWeight: 600,
        color: 'var(--vx-muted)', background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)', borderRadius: 'var(--radius-sm)',
        padding: '.13rem .4rem', ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
