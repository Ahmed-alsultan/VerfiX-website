import * as React from 'react';

/**
 * Trust Engine™ decision outcome pill — the Approve / Review / Reject verdict
 * chip rendered at the end of a verification flow.
 */
export interface DecisionPillProps {
  /** @default "approve" */
  decision?: 'approve' | 'review' | 'reject';
  /** Override the label text */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function DecisionPill(props: DecisionPillProps): JSX.Element;
