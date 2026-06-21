import React from 'react';

const BASE = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '.45rem',
  fontFamily: 'var(--font-body)', fontWeight: 600, lineHeight: 1,
  border: '1.5px solid transparent', borderRadius: 'var(--radius)',
  cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none',
  transition: 'background .15s, color .15s, border-color .15s, transform .15s, box-shadow .15s',
};

const SIZES = {
  sm: { padding: '.4rem .9rem', fontSize: '.77rem' },
  md: { padding: '.65rem 1.4rem', fontSize: '.875rem' },
  lg: { padding: '.82rem 1.85rem', fontSize: '.95rem' },
};

const VARIANTS = {
  red:     { background: 'var(--vx-red)', color: '#fff' },
  navy:    { background: 'var(--vx-navy)', color: '#fff' },
  outline: { background: 'transparent', color: 'var(--vx-text)', borderColor: 'var(--vx-border-2)' },
  ghost:   { background: 'transparent', color: 'var(--vx-muted)' },
  white:   { background: '#fff', color: 'var(--vx-navy)' },
};

const HOVER = {
  red:     { background: 'var(--vx-red-dark)', transform: 'translateY(-1px)', boxShadow: 'var(--shadow-red)' },
  navy:    { background: 'var(--vx-navy-2)', transform: 'translateY(-1px)' },
  outline: { borderColor: 'var(--vx-navy)', color: 'var(--vx-navy)', transform: 'translateY(-1px)' },
  ghost:   { color: 'var(--vx-red)' },
  white:   { background: 'var(--vx-off)', transform: 'translateY(-1px)' },
};

/**
 * VerfiX primary action control. Red is the default and should be the
 * single most important action on a view; navy/outline/ghost are secondary.
 */
export function Button({
  children, variant = 'red', size = 'md', icon, iconRight,
  disabled = false, href, style = {}, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const composed = {
    ...BASE, ...SIZES[size], ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : {}),
    ...(disabled ? { opacity: .45, cursor: 'not-allowed', pointerEvents: 'none' } : {}),
    ...style,
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} disabled={href ? undefined : disabled} style={composed}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {icon && <i className={icon} style={{ fontSize: '.85em' }} aria-hidden="true" />}
      {children}
      {iconRight && <i className={iconRight} style={{ fontSize: '.85em' }} aria-hidden="true" />}
    </Tag>
  );
}
