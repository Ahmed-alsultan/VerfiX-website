import * as React from 'react';

/**
 * VerfiX labelled form field with a red focus border. Renders an input,
 * textarea, or select via the `as` prop.
 */
export interface InputProps {
  label?: string;
  /** HTML input type when as="input". @default "text" */
  type?: string;
  /** Element to render. @default "input" */
  as?: 'input' | 'textarea' | 'select';
  /** Options for as="select" */
  options?: string[];
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
  /** Helper text below the field */
  hint?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

export function Input(props: InputProps): JSX.Element;
