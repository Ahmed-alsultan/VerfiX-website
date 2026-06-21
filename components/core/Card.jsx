import React from 'react';

/**
 * VerfiX surface card. Flush, precise, 1px hairline border. Optional red top
 * accent line and an interactive hover lift. `dark` flips it to navy.
 */
export function Card({
  children, accent = false, dark = false, hover = false, padding = '1.35rem',
  style = {}, ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = {
    position: 'relative',
    background: dark ? 'var(--vx-navy)' : 'var(--surface-card)',
    border: `1px solid ${dark ? 'var(--vx-navy)' : 'var(--vx-border)'}`,
    borderTop: accent ? '3px solid var(--vx-red)' : undefined,
    borderRadius: 'var(--radius-md)', padding,
    transition: 'transform .15s var(--ease-out), box-shadow .15s var(--ease-out), border-color .15s',
    ...(hover && h ? { transform: 'translateY(-2px)', boxShadow: 'var(--shadow-md)' } : {}),
    ...style,
  };
  return (
    <div
      style={base}
      onMouseEnter={hover ? () => setH(true) : undefined}
      onMouseLeave={hover ? () => setH(false) : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
