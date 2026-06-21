import * as React from 'react';

/**
 * VerfiX mono section kicker — small uppercase IBM Plex Mono label with a
 * short red dash, placed above section headings.
 */
export interface LabelProps {
  children: React.ReactNode;
  /** Override the text + dash color. @default brand red */
  color?: string;
  /** Show the leading dash. @default true */
  dash?: boolean;
  style?: React.CSSProperties;
}

export function Label(props: LabelProps): JSX.Element;
