import * as React from 'react';

/**
 * Square red-on-tint icon chip — the recurring VerfiX feature glyph: one Font
 * Awesome icon in a tinted rounded square with a red-line border.
 */
export interface IconChipProps {
  /** Font Awesome class, e.g. "fas fa-shield-halved" */
  icon: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** tint = red on pink (default), solid = white on red, dark = on navy, plain = neutral border */
  tone?: 'tint' | 'solid' | 'dark' | 'plain';
  style?: React.CSSProperties;
}

export function IconChip(props: IconChipProps): JSX.Element;
