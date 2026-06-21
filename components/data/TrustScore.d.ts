import * as React from 'react';

/**
 * Trust Engine™ score gauge — circular dial for a 0–100 trust score with a
 * recommended decision. Ring color tracks the band: ≥80 green (approve),
 * 50–79 amber (review), <50 red (reject).
 *
 * @startingPoint section="Trust Engine" subtitle="0–100 trust score dial with decision" viewport="220x220"
 */
export interface TrustScoreProps {
  /** 0–100. @default 87 */
  score?: number;
  /** Dial diameter in px. @default 132 */
  size?: number;
  /** Caption under the dial. @default "Trust Score" */
  label?: string;
  /** Override the decision word (else derived from score band) */
  decision?: string;
  style?: React.CSSProperties;
}

export function TrustScore(props: TrustScoreProps): JSX.Element;
