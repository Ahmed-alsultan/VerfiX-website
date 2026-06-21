import * as React from 'react';

/**
 * Small neutral keyword/capability tag — bordered off-white chip placed in
 * rows beneath feature copy (e.g. "OCR", "Liveness", "PEP").
 */
export interface TagProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tag(props: TagProps): JSX.Element;
