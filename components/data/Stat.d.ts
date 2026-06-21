import * as React from 'react';

/**
 * Mono metric readout — big IBM Plex Mono figure (brand red) above a bold
 * label and muted description. Used in impact stat bars.
 */
export interface StatProps {
  /** The figure, e.g. "<3s", "96", "10+" */
  value: React.ReactNode;
  label?: string;
  desc?: string;
  /** On navy backgrounds. @default false */
  dark?: boolean;
  /** Number color. @default brand red */
  accent?: string;
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
