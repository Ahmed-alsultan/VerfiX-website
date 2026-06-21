import React from 'react';

const SIZES = { sm: 27, md: 30, lg: 38 };
const FS = { sm: '.6rem', md: '.65rem', lg: '.8rem' };

/**
 * Square red-on-tint icon chip — the recurring VerfiX feature glyph. Wraps a
 * single Font Awesome icon in a tinted rounded square with a red-line border.
 */
export function IconChip({ icon, size = 'md', tone = 'tint', style = {}, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  const tones = {
    tint: { background: 'var(--vx-red-bg)', border: '1px solid var(--vx-red-line)', color: 'var(--vx-red)' },
    solid:{ background: 'var(--vx-red)', border: '1px solid var(--vx-red)', color: '#fff' },
    dark: { background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', color: 'var(--vx-red)' },
    plain:{ background: 'transparent', border: '1.5px solid var(--vx-border)', color: 'var(--vx-red)' },
  };
  const t = tones[tone] || tones.tint;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: px, height: px, borderRadius: size === 'lg' ? '7px' : '5px',
        flexShrink: 0, fontSize: FS[size] || FS.md, ...t, ...style,
      }}
      {...rest}
    >
      <i className={icon} aria-hidden="true" />
    </span>
  );
}
