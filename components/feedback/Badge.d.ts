import * as React from 'react';

/**
 * Small uppercase status badge for verification states, counts and labels.
 * Tone carries meaning — success/warn/danger/info for state, red/neutral for labels.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: 'neutral' | 'red' | 'success' | 'warn' | 'danger' | 'info';
  /** Font Awesome class for a leading icon */
  icon?: string;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
