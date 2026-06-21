import * as React from 'react';

/**
 * VerfiX surface card — flush 1px-hairline panel with an optional red top
 * accent and hover lift. `dark` flips to navy for use on light sections.
 *
 * @startingPoint section="Core" subtitle="Feature card with red top accent" viewport="360x220"
 */
export interface CardProps {
  children: React.ReactNode;
  /** Add the 3px red top accent line. @default false */
  accent?: boolean;
  /** Navy background variant. @default false */
  dark?: boolean;
  /** Lift + shadow on hover. @default false */
  hover?: boolean;
  /** CSS padding. @default "1.35rem" */
  padding?: string;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
