import * as React from 'react';

/**
 * VerfiX primary action control. Red is the brand default — use it for the
 * single most important action; navy / outline / ghost for secondary actions.
 *
 * @startingPoint section="Core" subtitle="Brand button — red / navy / outline / ghost / white" viewport="700x120"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "red" */
  variant?: 'red' | 'navy' | 'outline' | 'ghost' | 'white';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Font Awesome class for a leading icon, e.g. "fas fa-calendar-check" */
  icon?: string;
  /** Font Awesome class for a trailing icon, e.g. "fas fa-arrow-right" */
  iconRight?: string;
  disabled?: boolean;
  /** Render as an anchor instead of a button */
  href?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
