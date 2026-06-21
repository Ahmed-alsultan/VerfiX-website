import React from 'react';

/**
 * VerfiX text field. Labelled input with a red focus border, matching the
 * contact/demo forms across the site.
 */
export function Input({
  label, type = 'text', placeholder, value, onChange, hint, required = false,
  as = 'input', options = [], style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%', fontFamily: 'var(--font-body)', fontSize: '.875rem',
    color: 'var(--vx-text)', background: '#fff',
    border: `1.5px solid ${focus ? 'var(--vx-red)' : 'var(--vx-border-2)'}`,
    borderRadius: 'var(--radius)', padding: '.56rem .78rem', outline: 'none',
    transition: 'border-color .13s', ...style,
  };
  const common = {
    style: field, placeholder, value, onChange, required,
    onFocus: () => setFocus(true), onBlur: () => setFocus(false), ...rest,
  };
  return (
    <label style={{ display: 'block' }}>
      {label && (
        <span style={{ display: 'block', fontSize: '.74rem', fontWeight: 600, color: 'var(--vx-text)', marginBottom: '.3rem' }}>
          {label}{required && <span style={{ color: 'var(--vx-red)' }}> *</span>}
        </span>
      )}
      {as === 'textarea'
        ? <textarea {...common} style={{ ...field, minHeight: 86, resize: 'vertical' }} />
        : as === 'select'
          ? <select {...common}>{options.map((o) => <option key={o} value={o}>{o}</option>)}</select>
          : <input type={type} {...common} />}
      {hint && <span style={{ display: 'block', fontSize: '.7rem', color: 'var(--vx-light)', marginTop: '.3rem' }}>{hint}</span>}
    </label>
  );
}
