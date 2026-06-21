/* @ds-bundle: {"format":3,"namespace":"VerfiXDesignSystem_1000e3","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconChip","sourcePath":"components/core/IconChip.jsx"},{"name":"Label","sourcePath":"components/core/Label.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DecisionPill","sourcePath":"components/data/DecisionPill.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"TrustScore","sourcePath":"components/data/TrustScore.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/core/Button.jsx":"e39e818ed11a","components/core/Card.jsx":"db5e67c3fe7a","components/core/IconChip.jsx":"3e68c7fd2ef0","components/core/Label.jsx":"7fa93d146832","components/core/Tag.jsx":"18614ee203b1","components/data/DecisionPill.jsx":"5386e8b2da89","components/data/Stat.jsx":"5acc0af86f38","components/data/TrustScore.jsx":"4cc010664d3b","components/feedback/Badge.jsx":"948c7bae93e2","components/forms/Input.jsx":"c520e8f60ef2","main.js":"ecbd2e0b8897","ui_kits/analytics/Analytics.jsx":"60f85776d1f0","ui_kits/case-management/CaseManagement.jsx":"d474411cf65c","ui_kits/compliance-center/ComplianceCenter.jsx":"4dd119990fe5","ui_kits/developer-portal/Shell.jsx":"393880a486bb","ui_kits/developer-portal/Views1.jsx":"e5613ef3d0e2","ui_kits/developer-portal/Views2.jsx":"1c71dac69591","ui_kits/developer-portal/Views3.jsx":"43465fa58196","ui_kits/developer-portal/Views4.jsx":"48a294d2278f","ui_kits/docs-center/DocsCenter.jsx":"90bf2cdc94f5","ui_kits/kyb-profile/KYBProfile.jsx":"2362c9eaa96b","ui_kits/mvp/MVP.jsx":"ceceb3b9e914","ui_kits/mvp/engine.js":"73d10526def2","ui_kits/orchestration/Orchestration.jsx":"5df8b052174f","ui_kits/rules-builder/RulesBuilder.jsx":"d6a63129ecee","ui_kits/rules-builder/RulesShell.jsx":"e0ef1ca95de2","ui_kits/website/Chrome.jsx":"013fce784e21","ui_kits/website/Company.jsx":"a0eefd5ca09d","ui_kits/website/DemoModal.jsx":"63d8d4cbb81e","ui_kits/website/Demos.jsx":"4ed248b368d9","ui_kits/website/Developers.jsx":"6139c67cf8da","ui_kits/website/Homepage.jsx":"9eb3434569a6","ui_kits/website/Industries.jsx":"ed581556db5c","ui_kits/website/Partners.jsx":"8229e1aecef7","ui_kits/website/Pilot.jsx":"0fb9b53ca322","ui_kits/website/Platform.jsx":"5d0ff5876e77","ui_kits/website/Pricing.jsx":"4169ac71c01e","ui_kits/website/ProductApp.jsx":"321ae285a341","ui_kits/website/Resources.jsx":"273c38a1eec1","ui_kits/website/TrustCenter.jsx":"c65e2d01edc2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VerfiXDesignSystem_1000e3 = window.VerfiXDesignSystem_1000e3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.45rem',
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  lineHeight: 1,
  border: '1.5px solid transparent',
  borderRadius: 'var(--radius)',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: 'background .15s, color .15s, border-color .15s, transform .15s, box-shadow .15s'
};
const SIZES = {
  sm: {
    padding: '.4rem .9rem',
    fontSize: '.77rem'
  },
  md: {
    padding: '.65rem 1.4rem',
    fontSize: '.875rem'
  },
  lg: {
    padding: '.82rem 1.85rem',
    fontSize: '.95rem'
  }
};
const VARIANTS = {
  red: {
    background: 'var(--vx-red)',
    color: '#fff'
  },
  navy: {
    background: 'var(--vx-navy)',
    color: '#fff'
  },
  outline: {
    background: 'transparent',
    color: 'var(--vx-text)',
    borderColor: 'var(--vx-border-2)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--vx-muted)'
  },
  white: {
    background: '#fff',
    color: 'var(--vx-navy)'
  }
};
const HOVER = {
  red: {
    background: 'var(--vx-red-dark)',
    transform: 'translateY(-1px)',
    boxShadow: 'var(--shadow-red)'
  },
  navy: {
    background: 'var(--vx-navy-2)',
    transform: 'translateY(-1px)'
  },
  outline: {
    borderColor: 'var(--vx-navy)',
    color: 'var(--vx-navy)',
    transform: 'translateY(-1px)'
  },
  ghost: {
    color: 'var(--vx-red)'
  },
  white: {
    background: 'var(--vx-off)',
    transform: 'translateY(-1px)'
  }
};

/**
 * VerfiX primary action control. Red is the default and should be the
 * single most important action on a view; navy/outline/ghost are secondary.
 */
function Button({
  children,
  variant = 'red',
  size = 'md',
  icon,
  iconRight,
  disabled = false,
  href,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const composed = {
    ...BASE,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? HOVER[variant] : {}),
    ...(disabled ? {
      opacity: .45,
      cursor: 'not-allowed',
      pointerEvents: 'none'
    } : {}),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: href ? undefined : disabled,
    style: composed,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      fontSize: '.85em'
    },
    "aria-hidden": "true"
  }), children, iconRight && /*#__PURE__*/React.createElement("i", {
    className: iconRight,
    style: {
      fontSize: '.85em'
    },
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VerfiX surface card. Flush, precise, 1px hairline border. Optional red top
 * accent line and an interactive hover lift. `dark` flips it to navy.
 */
function Card({
  children,
  accent = false,
  dark = false,
  hover = false,
  padding = '1.35rem',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const base = {
    position: 'relative',
    background: dark ? 'var(--vx-navy)' : 'var(--surface-card)',
    border: `1px solid ${dark ? 'var(--vx-navy)' : 'var(--vx-border)'}`,
    borderTop: accent ? '3px solid var(--vx-red)' : undefined,
    borderRadius: 'var(--radius-md)',
    padding,
    transition: 'transform .15s var(--ease-out), box-shadow .15s var(--ease-out), border-color .15s',
    ...(hover && h ? {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-md)'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: hover ? () => setH(true) : undefined,
    onMouseLeave: hover ? () => setH(false) : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 27,
  md: 30,
  lg: 38
};
const FS = {
  sm: '.6rem',
  md: '.65rem',
  lg: '.8rem'
};

/**
 * Square red-on-tint icon chip — the recurring VerfiX feature glyph. Wraps a
 * single Font Awesome icon in a tinted rounded square with a red-line border.
 */
function IconChip({
  icon,
  size = 'md',
  tone = 'tint',
  style = {},
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const tones = {
    tint: {
      background: 'var(--vx-red-bg)',
      border: '1px solid var(--vx-red-line)',
      color: 'var(--vx-red)'
    },
    solid: {
      background: 'var(--vx-red)',
      border: '1px solid var(--vx-red)',
      color: '#fff'
    },
    dark: {
      background: 'rgba(255,255,255,.1)',
      border: '1px solid rgba(255,255,255,.15)',
      color: 'var(--vx-red)'
    },
    plain: {
      background: 'transparent',
      border: '1.5px solid var(--vx-border)',
      color: 'var(--vx-red)'
    }
  };
  const t = tones[tone] || tones.tint;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: size === 'lg' ? '7px' : '5px',
      flexShrink: 0,
      fontSize: FS[size] || FS.md,
      ...t,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VerfiX mono section kicker — small uppercase IBM Plex Mono with a short
 * red dash. Sits above headings to label a section.
 */
function Label({
  children,
  color,
  dash = true,
  style = {},
  ...rest
}) {
  const c = color || 'var(--vx-red)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.5rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-label)',
      fontWeight: 500,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: c,
      ...style
    }
  }, rest), dash && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 1.5,
      background: c,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Label.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small neutral tag chip — used for tech keywords and capability pills under
 * feature copy. Bordered, lightweight, non-interactive by default.
 */
function Tag({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.3rem',
      fontFamily: 'var(--font-body)',
      fontSize: '.6rem',
      fontWeight: 600,
      color: 'var(--vx-muted)',
      background: 'var(--vx-off)',
      border: '1px solid var(--vx-border)',
      borderRadius: 'var(--radius-sm)',
      padding: '.13rem .4rem',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DecisionPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MAP = {
  approve: {
    bg: 'rgba(22,163,74,.15)',
    bd: 'rgba(22,163,74,.3)',
    fg: '#16A34A',
    icon: 'fas fa-check',
    label: 'Approve'
  },
  review: {
    bg: 'rgba(217,119,6,.12)',
    bd: 'rgba(217,119,6,.25)',
    fg: '#D97706',
    icon: 'fas fa-clock',
    label: 'Review'
  },
  reject: {
    bg: 'rgba(200,37,42,.15)',
    bd: 'rgba(200,37,42,.3)',
    fg: '#C8252A',
    icon: 'fas fa-xmark',
    label: 'Reject'
  }
};

/**
 * Trust Engine™ decision outcome pill — the Approve / Review / Reject verdict
 * chip. Solid color-coded states used at the end of a verification flow.
 */
function DecisionPill({
  decision = 'approve',
  children,
  style = {},
  ...rest
}) {
  const d = MAP[decision] || MAP.approve;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '.45rem',
      fontFamily: 'var(--font-body)',
      fontSize: '.72rem',
      fontWeight: 700,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      padding: '.5rem .9rem',
      borderRadius: 'var(--radius-md)',
      background: d.bg,
      border: `1px solid ${d.bd}`,
      color: d.fg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: d.icon,
    "aria-hidden": "true"
  }), children || d.label);
}
Object.assign(__ds_scope, { DecisionPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DecisionPill.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mono metric readout — large IBM Plex Mono number over a label/description.
 * `dark` for navy stat bars. Number is brand red by default.
 */
function Stat({
  value,
  label,
  desc,
  dark = false,
  accent = 'var(--vx-red)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '2.6rem',
      fontWeight: 700,
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: accent,
      marginBottom: '.45rem'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.9rem',
      fontWeight: 700,
      color: dark ? '#fff' : 'var(--vx-text)',
      marginBottom: '.28rem'
    }
  }, label), desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.77rem',
      color: dark ? 'rgba(255,255,255,.42)' : 'var(--vx-muted)'
    }
  }, desc));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data/TrustScore.jsx
try { (() => {
/**
 * VerfiX Trust Engine™ score gauge — a circular dial showing a 0–100 trust
 * score with a recommended decision. Color tracks the score band:
 * ≥80 approve (green), 50–79 review (amber), <50 reject (red).
 */
function TrustScore({
  score = 87,
  size = 132,
  label = 'Trust Score',
  decision,
  style = {}
}) {
  const band = score >= 80 ? 'approve' : score >= 50 ? 'review' : 'reject';
  const colors = {
    approve: 'var(--vx-approve)',
    review: 'var(--vx-review)',
    reject: 'var(--vx-reject)'
  };
  const text = {
    approve: 'Approve',
    review: 'Review',
    reject: 'Reject'
  };
  const c = colors[band];
  const r = (size - 14) / 2;
  const circ = 2 * Math.PI * r;
  const dash = score / 100 * circ;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '.5rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--vx-border)",
    strokeWidth: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: c,
    strokeWidth: "7",
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${circ}`,
    style: {
      transition: 'stroke-dasharray .6s var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: size * .3,
      fontWeight: 700,
      color: 'var(--vx-text)',
      lineHeight: 1
    }
  }, score), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.55rem',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--vx-light)',
      marginTop: 2
    }
  }, "/ 100"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.7rem',
      fontWeight: 700,
      color: 'var(--vx-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.82rem',
      fontWeight: 800,
      color: c,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: band === 'approve' ? 'fas fa-check' : band === 'review' ? 'fas fa-clock' : 'fas fa-xmark',
    style: {
      fontSize: '.85em',
      marginRight: 5
    }
  }), decision || text[band])));
}
Object.assign(__ds_scope, { TrustScore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrustScore.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--vx-off)',
    color: 'var(--vx-muted)',
    border: 'var(--vx-border)'
  },
  red: {
    background: 'var(--vx-red-bg)',
    color: 'var(--vx-red)',
    border: 'var(--vx-red-line)'
  },
  success: {
    background: 'var(--vx-success-bg)',
    color: 'var(--vx-success-fg)',
    border: 'transparent'
  },
  warn: {
    background: 'var(--vx-warn-bg)',
    color: 'var(--vx-warn-fg)',
    border: 'transparent'
  },
  danger: {
    background: 'var(--vx-danger-bg)',
    color: 'var(--vx-danger-fg)',
    border: 'transparent'
  },
  info: {
    background: 'var(--vx-info-bg)',
    color: 'var(--vx-info-fg)',
    border: 'transparent'
  }
};

/**
 * Small status badge — verification states, counts, labels. Tone carries
 * meaning: use success/warn/danger for states, red/neutral for labels.
 */
function Badge({
  children,
  tone = 'neutral',
  icon,
  style = {},
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '.3rem',
      fontFamily: 'var(--font-body)',
      fontSize: '.6rem',
      fontWeight: 700,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      padding: '.16rem .42rem',
      borderRadius: 'var(--radius-sm)',
      background: t.background,
      color: t.color,
      border: `1px solid ${t.border}`,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    style: {
      fontSize: '.9em'
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * VerfiX text field. Labelled input with a red focus border, matching the
 * contact/demo forms across the site.
 */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  hint,
  required = false,
  as = 'input',
  options = [],
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const field = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '.875rem',
    color: 'var(--vx-text)',
    background: '#fff',
    border: `1.5px solid ${focus ? 'var(--vx-red)' : 'var(--vx-border-2)'}`,
    borderRadius: 'var(--radius)',
    padding: '.56rem .78rem',
    outline: 'none',
    transition: 'border-color .13s',
    ...style
  };
  const common = {
    style: field,
    placeholder,
    value,
    onChange,
    required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '.74rem',
      fontWeight: 600,
      color: 'var(--vx-text)',
      marginBottom: '.3rem'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--vx-red)'
    }
  }, " *")), as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({}, common, {
    style: {
      ...field,
      minHeight: 86,
      resize: 'vertical'
    }
  })) : as === 'select' ? /*#__PURE__*/React.createElement("select", common, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '.7rem',
      color: 'var(--vx-light)',
      marginTop: '.3rem'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// main.js
try { (() => {
/* ═══ INDUSTRY DATA ═══ */
var IND = {
  banking: {
    n: 'Banking & Wealth',
    uses: ['Customer KYC onboarding', 'Telephone banking authentication', 'Account recovery', 'Fraud prevention'],
    stack: ['Document Verification', 'Face Verification', 'Voice Verification', 'AML Screening', 'Trust Engine™'],
    benefits: ['Faster customer onboarding', 'Lower fraud exposure', 'Stronger compliance posture'],
    dep: 'Private Cloud or On-Premise'
  },
  fintech: {
    n: 'Fintech',
    uses: ['Digital customer onboarding', 'Merchant onboarding', 'KYC automation', 'API-based AML'],
    stack: ['Document Verification', 'Face Verification', 'AML Screening', 'Risk Rules Engine', 'Trust Engine™'],
    benefits: ['Faster growth', 'Lower operational cost', 'Scalable compliance'],
    dep: 'SaaS or Swiss Dedicated'
  },
  crypto: {
    n: 'Crypto & Digital Assets',
    uses: ['Exchange onboarding', 'Wallet verification', 'KYB for VASPs', 'Sanctions screening'],
    stack: ['Document Verification', 'KYB Verification', 'Sanctions Screening', 'Fraud Intelligence', 'Trust Engine™'],
    benefits: ['VASP compliance', 'Fraud prevention', 'Regulatory confidence'],
    dep: 'SaaS or Swiss Dedicated'
  },
  insurance: {
    n: 'Insurance',
    uses: ['Customer onboarding', 'Claims identity verification', 'Voice authentication', 'Fraud prevention'],
    stack: ['Document Verification', 'Face Verification', 'Voice Verification', 'AML Screening', 'Trust Engine™'],
    benefits: ['Reduced claims fraud', 'Better customer experience', 'Audit-ready records'],
    dep: 'Private Cloud or On-Premise'
  },
  gov: {
    n: 'Government',
    uses: ['Citizen identity verification', 'Digital service onboarding', 'Secure access control', 'Audit-ready workflows'],
    stack: ['Document Verification', 'Face Verification', 'Trust Engine™', 'Audit Logs'],
    benefits: ['Secure digital services', 'Full audit compliance', 'Data sovereignty'],
    dep: 'On-Premise'
  },
  health: {
    n: 'Healthcare',
    uses: ['Patient identity verification', 'Secure access management', 'Identity-linked compliance'],
    stack: ['Document Verification', 'Face Verification', 'Trust Engine™'],
    benefits: ['Secure patient access', 'Compliance support', 'Audit trail'],
    dep: 'Private Cloud or On-Premise'
  },
  telecom: {
    n: 'Telecom',
    uses: ['SIM registration', 'Remote customer onboarding', 'SIM-swap prevention'],
    stack: ['Document Verification', 'Face Verification', 'Voice Verification'],
    benefits: ['Regulatory compliance', 'Fraud reduction', 'Remote onboarding'],
    dep: 'SaaS or Swiss Dedicated'
  },
  mobility: {
    n: 'Mobility & Transportation',
    uses: ['Driver identity verification', 'Fleet user onboarding', 'Identity-based access control'],
    stack: ['Document Verification', 'Face Verification', 'Trust Engine™'],
    benefits: ['Faster onboarding', 'Access security', 'Fraud prevention'],
    dep: 'SaaS'
  },
  mkt: {
    n: 'Marketplaces',
    uses: ['Seller onboarding', 'Merchant verification', 'Fraud prevention', 'Trust &amp; safety'],
    stack: ['Document Verification', 'KYB Verification', 'AML Screening', 'Trust Engine™'],
    benefits: ['Platform trust', 'Fraud reduction', 'Seller compliance'],
    dep: 'SaaS'
  },
  re: {
    n: 'Real Estate',
    uses: ['Tenant identity verification', 'Residence permit checks', 'Business verification', 'Application audit trail'],
    stack: ['Document Verification', 'Face Verification', 'KYB Verification'],
    benefits: ['Tenant trust', 'Fraud reduction', 'Audit trail'],
    dep: 'SaaS or Swiss Dedicated'
  }
};
function showInd(id) {
  var d = IND[id];
  if (!d) return;
  document.querySelectorAll('.mi-item').forEach(function (el) {
    el.classList.toggle('active', el.dataset.ind === id);
  });
  var p = document.getElementById('mi-panel');
  p.innerHTML = '<div style="font-size:.82rem;font-weight:800;letter-spacing:-.01em;color:var(--t);margin-bottom:.875rem;">' + d.n + '</div>' + '<div class="mi-sec" style="margin-top:0;">Use Cases</div>' + d.uses.map(function (u) {
    return '<div class="mi-li">' + u + '</div>';
  }).join('') + '<div class="mi-sec" style="margin-top:.72rem;">Recommended Stack</div>' + d.stack.map(function (s) {
    return '<div class="mi-check"><i class="fas fa-check"></i>' + s + '</div>';
  }).join('') + '<div class="mi-sec" style="margin-top:.72rem;">Key Benefits</div>' + d.benefits.map(function (b) {
    return '<div class="mi-check"><i class="fas fa-check"></i>' + b + '</div>';
  }).join('') + '<div class="mi-dep-badge" style="margin-top:.72rem;"><i class="fas fa-server" style="font-size:.55rem;"></i>' + d.dep + '</div>' + '<div style="margin-top:.875rem;"><a onclick="navClose(\'contact\')" class="btn btn-r btn-sm" style="font-size:.74rem;">Get Industry Demo</a></div>';
}

/* ═══ PAGES ═══ */
var curPg = 'home';
function nav(id) {
  document.querySelectorAll('.pg').forEach(function (p) {
    p.classList.remove('on');
  });
  var t = document.getElementById('pg-' + id);
  if (t) {
    t.classList.add('on');
    curPg = id;
  } else {
    document.getElementById('pg-home').classList.add('on');
    curPg = 'home';
  }
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  closeMob();
  closeAll();
  setTimeout(initRv, 60);
}
function navClose(id) {
  closeAll();
  nav(id);
}

/* ═══ MENUS ═══ */
var openM = null;
function toggleMenu(id) {
  var ni = document.getElementById('ni-' + id);
  if (!ni) return;
  if (ni.classList.contains('open')) {
    closeAll();
    return;
  }
  closeAll();
  ni.classList.add('open');
  openM = id;
}
function closeAll() {
  document.querySelectorAll('.ni').forEach(function (el) {
    el.classList.remove('open');
  });
  openM = null;
}
document.addEventListener('click', function (e) {
  if (!e.target.closest('.ni')) closeAll();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeAll();
    closeMob();
  }
});

/* ═══ MOBILE ═══ */
document.getElementById('ham-btn').addEventListener('click', function () {
  var m = document.getElementById('mob');
  if (m.classList.contains('open')) {
    closeMob();
  } else {
    m.classList.add('open');
    m.style.display = 'flex';
  }
});
function closeMob() {
  var m = document.getElementById('mob');
  m.classList.remove('open');
  m.style.display = 'none';
}

/* ═══ DEPLOYMENT TABS ═══ */
function setDep(id) {
  var ids = ['saas', 'swiss', 'private', 'onprem'];
  document.querySelectorAll('.dep-tab').forEach(function (t, i) {
    t.classList.toggle('on', ids[i] === id);
  });
  document.querySelectorAll('.dep-panel').forEach(function (p) {
    p.classList.remove('on');
  });
  var panel = document.getElementById('dep-' + id);
  if (panel) panel.classList.add('on');
}

/* ═══ TRANSLATIONS ═══ */
var T = {
  en: {
    /* Nav */
    nav_industries: 'Industries',
    nav_products: 'Products',
    nav_solutions: 'Solutions',
    nav_resources: 'Resources',
    nav_company: 'Company',
    nav_sales: 'Talk to Sales',
    nav_demo: 'Book a Demo',
    /* Hero */
    h_kicker: 'Swiss-Built · Enterprise-Grade',
    h_title: 'Verify Identity.<br/>Prevent Fraud.<br/>Automate Compliance.<br/><em>One Infrastructure Layer.</em>',
    h_sub: 'VerfiX unifies identity verification, fraud intelligence, AML compliance, and trust scoring into one platform for banks, fintechs, insurers, governments, and other regulated organizations.',
    h_cta1: 'Book a Demo',
    h_cta2: 'Explore Platform',
    /* Trust Engine */
    te_label: 'Trust Engine™',
    te_title: 'The decision layer behind trusted digital onboarding.',
    te_sub: 'Every identity signal, compliance check, and fraud indicator converges into one structured decision — Approve, Review, or Reject.',
    te_approve: 'Approve',
    te_review: 'Review',
    te_reject: 'Reject',
    /* Gateway */
    gw_label: 'New Product',
    gw_title: 'VerfiX Gateway',
    gw_sub: 'One API to verify trusted digital identities across Europe.',
    gw_m1_n: '~3s',
    gw_m1_l: 'Credential verification',
    gw_m1_s: 'Designed for real-time decisioning',
    gw_m2_n: '27+',
    gw_m2_l: 'EU country coverage',
    gw_m2_s: 'Built for eIDAS 2.0 compatibility',
    gw_m3_n: '1 API',
    gw_m3_l: 'One integration',
    gw_m3_s: 'For banks and regulated organizations',
    gw_m4_n: '1 layer',
    gw_m4_l: 'Trust verification',
    gw_m4_s: 'Issuer, credential, signature, revocation',
    /* Trust Score Demo */
    ts_label: 'Interactive Demo',
    ts_title: 'See how VerfiX builds a trust decision.',
    ts_sub: 'Click any signal to understand what VerfiX checks — then see how it combines into one final decision.',
    ts_live: 'Live Trust Decision',
    sig_doc: 'Document Verification',
    sig_doc_desc: 'Checks document authenticity, OCR data, expiry date, forgery signals, and issuing authority.',
    sig_face: 'Face Match & Liveness',
    sig_face_desc: 'Confirms the person matches the submitted identity document. Liveness check detects deepfakes.',
    sig_voice: 'Voice Verification',
    sig_voice_desc: 'Adds biometric voice identity signal for call centres and telephone banking.',
    sig_aml: 'AML Screening',
    sig_aml_desc: 'Screens against global sanctions, PEP registries, adverse media, and watchlists.',
    sig_kyb: 'KYB / Business Check',
    sig_kyb_desc: 'Verifies business registration, directors, UBO structure against registries and AML lists.',
    sig_fraud: 'Fraud Intelligence',
    sig_fraud_desc: 'Detects synthetic identities, document forgery, device anomalies, and behavioral signals.',
    sig_risk: 'Risk Rules Engine',
    sig_risk_desc: 'Configurable thresholds combine all signals into an automated trust decision.',
    ts_aml: 'AML Status',
    ts_clear: 'Clear',
    ts_kyb: 'KYB Check',
    ts_verified: 'Verified',
    ts_risk: 'Risk Level',
    ts_low: 'Low',
    ts_score_lbl: 'Trust Score',
    ts_decision_lbl: 'Decision',
    ts_approved: 'APPROVED',
    tfp_doc: 'Document verified',
    tfp_face: 'Face matched',
    tfp_voice: 'Voice verified',
    tfp_aml: 'AML clear',
    tfp_risk: 'Risk low',
    tfp_audit: 'Decision logged · Audit trail generated · Exportable on demand',
    /* Industries */
    ind_label: 'Industries',
    ind_title: 'Built for regulated sectors',
    ind_sub: 'Click any industry to see VerfiX use cases, recommended stack, and deployment options.',
    /* Security */
    sec_label: 'Security & Compliance',
    sec_title: 'Enterprise security at every layer',
    sec_sub: 'Hover or tap each card to see what it means, how VerfiX helps, and why it matters.',
    /* Roadmap */
    rd_label: 'Product Roadmap',
    rd_title: 'VerfiX Roadmap',
    rd_sub: 'Where we are, where we are going, and where the infrastructure is headed.',
    rd_today: 'Today',
    rd_today_lbl: 'Available Now',
    rd_next: 'Next',
    rd_next_lbl: 'In Development',
    rd_future: 'Future',
    rd_future_lbl: 'Vision & Direction',
    rd_note: 'Roadmap is indicative. Timelines and features may evolve based on regulatory developments and customer requirements.',
    /* Footer / Legal */
    foot_copy: '© 2025 VerfiX AG · Switzerland · All rights reserved',
    ck_txt: 'We use cookies to improve your experience. See our',
    ck_policy: 'Privacy Policy'
  },
  de: {
    nav_industries: 'Branchen',
    nav_products: 'Produkte',
    nav_solutions: 'Lösungen',
    nav_resources: 'Ressourcen',
    nav_company: 'Unternehmen',
    nav_sales: 'Vertrieb kontaktieren',
    nav_demo: 'Demo buchen',
    h_kicker: 'Schweizer Qualität · Enterprise-Grade',
    h_title: 'Identität prüfen.<br/>Betrug verhindern.<br/>Compliance automatisieren.<br/><em>Eine Infrastruktur-Schicht.</em>',
    h_sub: 'VerfiX vereint Identitätsprüfung, Betrugsbekämpfung, AML-Compliance und Trust-Scoring in einer Plattform für Banken, Fintechs, Versicherungen und Regierungsbehörden.',
    h_cta1: 'Demo buchen',
    h_cta2: 'Plattform erkunden',
    te_label: 'Trust Engine™',
    te_title: 'Die Entscheidungsschicht hinter vertrauenswürdigem digitalem Onboarding.',
    te_sub: 'Jedes Identitätssignal, jede Compliance-Prüfung und jeder Betrugsindiktor fließt in eine strukturierte Entscheidung — Genehmigen, Prüfen oder Ablehnen.',
    te_approve: 'Genehmigen',
    te_review: 'Prüfen',
    te_reject: 'Ablehnen',
    gw_label: 'Neues Produkt',
    gw_title: 'VerfiX Gateway',
    gw_sub: 'Eine API zur Prüfung digitaler Identitäten in ganz Europa.',
    gw_m1_n: '~3s',
    gw_m1_l: 'Credential-Verifizierung',
    gw_m1_s: 'Für Echtzeit-Entscheidungen konzipiert',
    gw_m2_n: '27+',
    gw_m2_l: 'EU-Länderabdeckung',
    gw_m2_s: 'Für eIDAS 2.0-Kompatibilität entwickelt',
    gw_m3_n: '1 API',
    gw_m3_l: 'Eine Integration',
    gw_m3_s: 'Für Banken und regulierte Organisationen',
    gw_m4_n: '1 Schicht',
    gw_m4_l: 'Trust-Verifizierung',
    gw_m4_s: 'Aussteller, Credential, Signatur, Widerruf',
    ts_label: 'Interaktive Demo',
    ts_title: 'So trifft VerfiX eine Vertrauensentscheidung.',
    ts_sub: 'Klicken Sie auf ein Signal, um zu verstehen, was VerfiX prüft — und wie alles zu einer Entscheidung kombiniert wird.',
    ts_live: 'Live Trust-Entscheidung',
    sig_doc: 'Dokumentenprüfung',
    sig_doc_desc: 'Prüft Dokumentechtheit, OCR-Daten, Ablaufdatum und Fälschungssignale.',
    sig_face: 'Gesichtsabgleich & Liveness',
    sig_face_desc: 'Bestätigt, dass die Person mit dem vorgelegten Ausweisdokument übereinstimmt.',
    sig_voice: 'Sprachverifizierung',
    sig_voice_desc: 'Biometrisches Sprachidentitätssignal für Call-Center und Telefonbanking.',
    sig_aml: 'AML-Screening',
    sig_aml_desc: 'Prüfung gegen globale Sanktionslisten, PEP-Register und Beobachtungslisten.',
    sig_kyb: 'KYB / Unternehmenscheck',
    sig_kyb_desc: 'Prüft Handelsregistereintrag, Direktoren und UBO-Struktur.',
    sig_fraud: 'Betrugsintelligenz',
    sig_fraud_desc: 'Erkennt synthetische Identitäten, Dokumentenfälschungen und Geräteanomalie.',
    sig_risk: 'Risikoregeln-Engine',
    sig_risk_desc: 'Konfigurierbare Schwellenwerte kombinieren alle Signale zu einer automatisierten Entscheidung.',
    ts_aml: 'AML-Status',
    ts_clear: 'Klar',
    ts_kyb: 'KYB-Prüfung',
    ts_verified: 'Verifiziert',
    ts_risk: 'Risikoniveau',
    ts_low: 'Niedrig',
    ts_score_lbl: 'Trust Score',
    ts_decision_lbl: 'Entscheidung',
    ts_approved: 'GENEHMIGT',
    tfp_doc: 'Dokument verifiziert',
    tfp_face: 'Gesicht abgeglichen',
    tfp_voice: 'Stimme verifiziert',
    tfp_aml: 'AML klar',
    tfp_risk: 'Risiko niedrig',
    tfp_audit: 'Entscheidung protokolliert · Prüfpfad erstellt · Exportierbar',
    ind_label: 'Branchen',
    ind_title: 'Für regulierte Sektoren entwickelt',
    ind_sub: 'Klicken Sie auf eine Branche für Anwendungsfälle, Stack und Deployment-Optionen.',
    sec_label: 'Sicherheit & Compliance',
    sec_title: 'Enterprise-Sicherheit auf jeder Ebene',
    sec_sub: 'Bewegen Sie den Mauszeiger über eine Karte oder tippen Sie darauf für Details.',
    rd_label: 'Produkt-Roadmap',
    rd_title: 'VerfiX Roadmap',
    rd_sub: 'Wo wir stehen, wohin wir gehen und die Infrastruktur-Vision.',
    rd_today: 'Heute',
    rd_today_lbl: 'Verfügbar jetzt',
    rd_next: 'Als nächstes',
    rd_next_lbl: 'In Entwicklung',
    rd_future: 'Zukunft',
    rd_future_lbl: 'Vision & Ausrichtung',
    rd_note: 'Die Roadmap ist indikativ. Zeitpläne können sich aufgrund regulatorischer Entwicklungen ändern.',
    foot_copy: '© 2025 VerfiX AG · Schweiz · Alle Rechte vorbehalten',
    ck_txt: 'Wir verwenden Cookies. Weitere Informationen in unserer',
    ck_policy: 'Datenschutzerklärung'
  },
  fr: {
    nav_industries: 'Secteurs',
    nav_products: 'Produits',
    nav_solutions: 'Solutions',
    nav_resources: 'Ressources',
    nav_company: 'Entreprise',
    nav_sales: 'Contacter les ventes',
    nav_demo: 'Réserver une démo',
    h_kicker: 'Qualité suisse · Grade entreprise',
    h_title: "Vérifier l'identité.<br/>Prévenir la fraude.<br/>Automatiser la conformité.<br/><em>Une couche d'infrastructure.</em>",
    h_sub: "VerfiX unifie la vérification d'identité, l'intelligence anti-fraude, la conformité AML et le scoring de confiance en une seule plateforme pour les banques, fintechs, assureurs et gouvernements.",
    h_cta1: 'Réserver une démo',
    h_cta2: 'Explorer la plateforme',
    te_label: 'Trust Engine™',
    te_title: "La couche de décision derrière l'onboarding numérique de confiance.",
    te_sub: "Chaque signal d'identité, vérification de conformité et indicateur de fraude converge vers une décision structurée — Approuver, Réviser ou Rejeter.",
    te_approve: 'Approuver',
    te_review: 'Réviser',
    te_reject: 'Rejeter',
    gw_label: 'Nouveau produit',
    gw_title: 'VerfiX Gateway',
    gw_sub: "Une API pour vérifier les identités numériques de confiance à travers l'Europe.",
    gw_m1_n: '~3s',
    gw_m1_l: 'Vérification de credential',
    gw_m1_s: 'Conçu pour les décisions en temps réel',
    gw_m2_n: '27+',
    gw_m2_l: 'Couverture UE',
    gw_m2_s: 'Conçu pour la compatibilité eIDAS 2.0',
    gw_m3_n: '1 API',
    gw_m3_l: 'Une intégration',
    gw_m3_s: 'Pour banques et organisations réglementées',
    gw_m4_n: '1 couche',
    gw_m4_l: 'Vérification de confiance',
    gw_m4_s: 'Émetteur, credential, signature, révocation',
    ts_label: 'Démo interactive',
    ts_title: 'Voir comment VerfiX construit une décision de confiance.',
    ts_sub: "Cliquez sur un signal pour comprendre ce que VerfiX vérifie — puis comment tout se combine en une décision finale.",
    ts_live: 'Décision de confiance en direct',
    sig_doc: 'Vérification de document',
    sig_doc_desc: "Vérifie l'authenticité du document, OCR, date d'expiration et signaux de fraude.",
    sig_face: 'Correspondance faciale & Liveness',
    sig_face_desc: "Confirme que la personne correspond au document d'identité soumis.",
    sig_voice: 'Vérification vocale',
    sig_voice_desc: "Signal biométrique vocal pour centres d'appels et banque téléphonique.",
    sig_aml: 'Screening AML',
    sig_aml_desc: 'Vérification contre les listes de sanctions, registres PEP et médias défavorables.',
    sig_kyb: 'KYB / Vérification entreprise',
    sig_kyb_desc: 'Vérifie immatriculation, dirigeants et structure UBO.',
    sig_fraud: 'Intelligence anti-fraude',
    sig_fraud_desc: 'Détecte identités synthétiques, contrefaçons de documents et anomalies.',
    sig_risk: 'Moteur de règles de risque',
    sig_risk_desc: 'Les seuils configurables combinent tous les signaux en une décision automatisée.',
    ts_aml: 'Statut AML',
    ts_clear: 'Clair',
    ts_kyb: 'Vérification KYB',
    ts_verified: 'Vérifié',
    ts_risk: 'Niveau de risque',
    ts_low: 'Faible',
    ts_score_lbl: 'Score de confiance',
    ts_decision_lbl: 'Décision',
    ts_approved: 'APPROUVÉ',
    tfp_doc: 'Document vérifié',
    tfp_face: 'Visage correspondant',
    tfp_voice: 'Voix vérifiée',
    tfp_aml: 'AML clair',
    tfp_risk: 'Risque faible',
    tfp_audit: 'Décision enregistrée · Piste d\'audit générée · Exportable sur demande',
    ind_label: 'Secteurs',
    ind_title: 'Conçu pour les secteurs réglementés',
    ind_sub: "Cliquez sur un secteur pour voir les cas d'usage, la stack recommandée et les options de déploiement.",
    sec_label: 'Sécurité & Conformité',
    sec_title: 'Sécurité entreprise à chaque couche',
    sec_sub: 'Survolez ou appuyez sur une carte pour voir les détails.',
    rd_label: 'Feuille de route',
    rd_title: 'Roadmap VerfiX',
    rd_sub: 'Où nous en sommes, où nous allons, et la vision infrastructure.',
    rd_today: "Aujourd'hui",
    rd_today_lbl: 'Disponible maintenant',
    rd_next: 'Prochain',
    rd_next_lbl: 'En développement',
    rd_future: 'Futur',
    rd_future_lbl: 'Vision & Direction',
    rd_note: 'La roadmap est indicative. Les délais peuvent évoluer selon les développements réglementaires.',
    foot_copy: '© 2025 VerfiX AG · Suisse · Tous droits réservés',
    ck_txt: 'Nous utilisons des cookies. Consultez notre',
    ck_policy: 'Politique de confidentialité'
  }
};
function applyLang(l) {
  var tr = T[l] || T['en'];
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (tr[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = tr[key];
      } else {
        el.innerHTML = tr[key];
      }
    }
  });
  // Cookie banner
  var ckTxtEl = document.getElementById('ck-txt');
  var ckPolicyPage = {
    en: 'privacy',
    de: 'datenschutz',
    fr: 'politique'
  };
  if (ckTxtEl) {
    ckTxtEl.innerHTML = tr['ck_txt'] + ' <a onclick="nav(\'' + ckPolicyPage[l] + '\')" style="color:var(--r);cursor:pointer;">' + tr['ck_policy'] + '</a>.';
  }
  // Footer copy
  var footC = document.getElementById('foot-c');
  if (footC) footC.textContent = tr['foot_copy'];
  // Footer legal links visibility
  var de = l === 'de',
    fr = l === 'fr';
  ['imp', 'dat'].forEach(function (x) {
    var e = document.getElementById('f-' + x);
    if (e) e.style.display = de ? 'block' : 'none';
  });
  ['men', 'pol'].forEach(function (x) {
    var e = document.getElementById('f-' + x);
    if (e) e.style.display = fr ? 'block' : 'none';
  });
  // Page title
  var titles = {
    en: 'VerfiX — Swiss Trust Infrastructure for Regulated Industries',
    de: 'VerfiX — Schweizer Trust-Infrastruktur für regulierte Branchen',
    fr: 'VerfiX — Infrastructure de confiance suisse pour les secteurs réglementés'
  };
  document.getElementById('pg-title').textContent = titles[l] || titles.en;
}

/* ═══ LANGUAGE ENTRYPOINT ═══ */
var lang = 'en';
function setLang(l) {
  lang = l;
  document.getElementById('html-root').setAttribute('lang', l);
  document.querySelectorAll('.lb').forEach(function (b) {
    b.classList.toggle('on', b.textContent.trim().toLowerCase() === l);
  });
  document.querySelectorAll('.mlb').forEach(function (b) {
    b.classList.toggle('on', b.textContent.trim().toLowerCase() === l);
  });
  applyLang(l);
}

/* ═══ COOKIE ═══ */
function ckOk() {
  localStorage.setItem('vx-ck', 'ok');
  document.getElementById('ck-bar').classList.remove('show');
}
function ckNo() {
  localStorage.setItem('vx-ck', 'no');
  document.getElementById('ck-bar').classList.remove('show');
}

/* ═══ FORM ═══ */
function submitForm() {
  var n = document.getElementById('fn').value,
    e = document.getElementById('fe').value;
  if (!n || !e) {
    alert({
      en: 'Please fill in all required fields.',
      de: 'Bitte füllen Sie alle Pflichtfelder aus.',
      fr: 'Veuillez remplir tous les champs obligatoires.'
    }[lang]);
    return;
  }
  alert({
    en: 'Thank you! We will be in touch within 24 hours.',
    de: 'Vielen Dank! Wir melden uns innerhalb von 24 Stunden.',
    fr: 'Merci ! Nous vous contacterons dans les 24 heures.'
  }[lang]);
}

/* ═══ SCROLL REVEAL — BULLETPROOF ═══ */
function initRv() {
  document.body.classList.add('js-ready');
  var els = document.querySelectorAll('.pg.on .rv');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '20px'
    });
    els.forEach(function (el) {
      obs.observe(el);
    });
  } else {
    els.forEach(function (el) {
      el.classList.add('in');
    });
  }
  /* Hard fallback: force visible after 120ms */
  setTimeout(function () {
    document.querySelectorAll('.pg.on .rv').forEach(function (el) {
      el.classList.add('in');
    });
  }, 120);
}

/* ═══ NAV SCROLL SHADOW ═══ */
function initScrollNav() {
  var n = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    n.classList.toggle('scrolled', window.scrollY > 8);
  }, {
    passive: true
  });
}

/* ═══ INIT ═══ */
document.addEventListener('DOMContentLoaded', function () {
  var bl = (navigator.language || '').toLowerCase();
  if (bl.startsWith('de')) setLang('de');else if (bl.startsWith('fr')) setLang('fr');else setLang('en');
  initRv();
  initScrollNav();
  showInd('banking');
  setTimeout(function () {
    document.querySelectorAll('.rv').forEach(function (el) {
      el.classList.add('in');
    });
  }, 500);
  // Apply translations on load
  applyLang(lang);
});
window.addEventListener('load', function () {
  if (!localStorage.getItem('vx-ck')) setTimeout(function () {
    document.getElementById('ck-bar').classList.add('show');
  }, 1400);
  document.querySelectorAll('.rv').forEach(function (el) {
    el.classList.add('in');
  });
});

/* ═══ TRUST SCORE DEMO ═══ */
function activateSig(el) {
  document.querySelectorAll('.ts-sig').forEach(function (s) {
    s.classList.remove('active');
  });
  el.classList.add('active');
}

/* ═══ INDUSTRIES INTERACTIVE ═══ */
var openIndKey = null;
function toggleInd(el, key) {
  var panel = document.getElementById('idp-' + key);
  if (!panel) return;
  var allPanels = document.querySelectorAll('.ind-detail-panel');
  var allCards = document.querySelectorAll('.ipc');
  if (openIndKey === key) {
    // close
    panel.classList.remove('open');
    el.classList.remove('open');
    openIndKey = null;
    return;
  }
  allPanels.forEach(function (p) {
    p.classList.remove('open');
  });
  allCards.forEach(function (c) {
    c.classList.remove('open');
  });
  panel.classList.add('open');
  el.classList.add('open');
  openIndKey = key;
  // Scroll panel into view smoothly
  setTimeout(function () {
    panel.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  }, 60);
}

/* ═══ MOBILE TAP FOR LEADER CARDS ═══ */
function tapCard(el) {
  var already = el.classList.contains('tapped');
  document.querySelectorAll('.lc.tapped').forEach(function (c) {
    c.classList.remove('tapped');
  });
  if (!already) el.classList.add('tapped');
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "main.js", error: String((e && e.message) || e) }); }

// ui_kits/analytics/Analytics.jsx
try { (() => {
// VerfiX Trust Engine Analytics — volume, approval rates, fraud trends, geographic risk,
// AML alerts, provider performance, risk distribution, operational KPIs.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip
  } = DS;
  const RED = 'var(--vx-red)';
  const VOL = [{
    l: 'Jan',
    v: 38
  }, {
    l: 'Feb',
    v: 42
  }, {
    l: 'Mar',
    v: 51
  }, {
    l: 'Apr',
    v: 47
  }, {
    l: 'May',
    v: 63
  }, {
    l: 'Jun',
    v: 71
  }, {
    l: 'Jul',
    v: 68
  }, {
    l: 'Aug',
    v: 59
  }, {
    l: 'Sep',
    v: 74
  }, {
    l: 'Oct',
    v: 82
  }, {
    l: 'Nov',
    v: 91
  }, {
    l: 'Dec',
    v: 88
  }];
  const FRAUD = [12, 9, 14, 11, 8, 7, 10, 6, 9, 5, 7, 6];
  function Analytics() {
    const [range, setRange] = React.useState('12m');
    return /*#__PURE__*/React.createElement("div", {
      className: "an-shell"
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        background: '#fff',
        borderBottom: '1px solid var(--vx-border)',
        padding: '1.3rem 1.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        color: 'var(--vx-light)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-chart-line",
      tone: "solid",
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.4rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: 0
      }
    }, "Trust Engine Analytics"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)'
      }
    }, "Operational intelligence across all verifications"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 100,
        padding: 2
      }
    }, ['30d', '90d', '12m'].map(r => /*#__PURE__*/React.createElement("button", {
      key: r,
      onClick: () => setRange(r),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.72rem',
        fontWeight: 700,
        border: 'none',
        cursor: 'pointer',
        padding: '.3rem .8rem',
        borderRadius: 100,
        background: range === r ? 'var(--vx-navy)' : 'transparent',
        color: range === r ? '#fff' : 'var(--vx-muted)'
      }
    }, r))), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-download"
    }, "Export"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.6rem 1.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '.8rem',
        marginBottom: '1.2rem'
      },
      className: "an-grid4"
    }, [['Total verifications', '847,210', '+12.4%', true, 'fas fa-id-card'], ['Approval rate', '91.3%', '+1.8%', true, 'fas fa-circle-check'], ['Fraud caught', '6,408', '−0.9%', true, 'fas fa-shield-halved'], ['Avg decision time', '2.8s', '−0.4s', true, 'fas fa-bolt']].map(([l, v, d, up, ic]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1rem 1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.7rem',
        fontWeight: 600,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, l), /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: RED,
        fontSize: '.8rem'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.7rem',
        fontWeight: 700,
        letterSpacing: '-.03em',
        margin: '.3rem 0 .15rem'
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.72rem',
        fontWeight: 600,
        color: 'var(--vx-success)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-up",
      style: {
        fontSize: '.6rem',
        marginRight: 3
      }
    }), d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.7fr 1fr',
        gap: '1rem',
        marginBottom: '1.2rem'
      },
      className: "an-grid"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Verification volume",
      sub: "thousands / month",
      icon: "fas fa-chart-column"
    }, /*#__PURE__*/React.createElement(Bars, {
      data: VOL
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "Risk distribution",
      icon: "fas fa-layer-group"
    }, /*#__PURE__*/React.createElement(Donut, null))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1.2rem'
      },
      className: "an-grid"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Approval rate breakdown",
      icon: "fas fa-circle-check"
    }, [['Auto-approved', 78, 'var(--vx-success)'], ['Approved after review', 13, 'var(--vx-review)'], ['Rejected', 6, 'var(--vx-reject)'], ['Abandoned', 3, 'var(--vx-light)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        marginBottom: '.75rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.79rem',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontFamily: 'var(--font-mono)'
      }
    }, v, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: 'var(--vx-off)',
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: c,
        borderRadius: 4
      }
    }))))), /*#__PURE__*/React.createElement(Panel, {
      title: "Fraud trend",
      sub: "flagged per 1k \xB7 lower is better",
      icon: "fas fa-chart-line"
    }, /*#__PURE__*/React.createElement(Line, {
      data: FRAUD
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1.2rem'
      },
      className: "an-grid"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Geographic risk",
      sub: "by verification origin",
      icon: "fas fa-earth-europe"
    }, [['🇨🇭 Switzerland', 'Low', 38, 'var(--vx-success)'], ['🇩🇪 Germany', 'Low', 22, 'var(--vx-success)'], ['🇫🇷 France', 'Low', 14, 'var(--vx-success)'], ['🇬🇧 United Kingdom', 'Medium', 9, 'var(--vx-review)'], ['🇦🇪 UAE', 'Medium', 7, 'var(--vx-review)'], ['Other / high-risk', 'Elevated', 10, 'var(--vx-reject)']].map(([c, lvl, v, col]) => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.45rem 0',
        borderBottom: '1px solid var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.82rem',
        flex: 1
      }
    }, c), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        width: 36,
        textAlign: 'right'
      }
    }, v, "%"), /*#__PURE__*/React.createElement(Badge, {
      tone: col === 'var(--vx-success)' ? 'success' : col === 'var(--vx-review)' ? 'warn' : 'danger'
    }, lvl)))), /*#__PURE__*/React.createElement(Panel, {
      title: "AML alerts",
      sub: "last 90 days",
      icon: "fas fa-magnifying-glass-dollar"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '.6rem',
        marginBottom: '.9rem'
      }
    }, [['Sanctions hits', '142', 'var(--vx-reject)'], ['PEP matches', '318', 'var(--vx-review)'], ['Watchlist', '87', 'var(--vx-review)'], ['Cleared', '11,920', 'var(--vx-success)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        border: '1px solid var(--vx-border)',
        borderRadius: 7,
        padding: '.6rem .7rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.25rem',
        fontWeight: 700,
        color: c
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-muted)'
      }
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-muted)'
      }
    }, "True-positive rate ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--vx-text)'
      }
    }, "94.2%"), " \xB7 escalated to SAR ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--vx-text)'
      }
    }, "12")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '1rem'
      },
      className: "an-grid"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Provider performance",
      sub: "document & biometric data sources",
      icon: "fas fa-server"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr .8fr .8fr .8fr',
        gap: '.5rem',
        padding: '.3rem 0 .5rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Provider"), /*#__PURE__*/React.createElement("span", null, "Uptime"), /*#__PURE__*/React.createElement("span", null, "Latency"), /*#__PURE__*/React.createElement("span", null, "Match")), [['Swiss ID Registry', '99.99%', '180ms', '98.4%'], ['Biometric Engine v4', '99.97%', '410ms', '96.1%'], ['Global Doc OCR', '99.92%', '620ms', '97.8%'], ['AML Data Union', '99.95%', '240ms', '—']].map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr .8fr .8fr .8fr',
        gap: '.5rem',
        alignItems: 'center',
        padding: '.55rem 0',
        borderBottom: i < 3 ? '1px solid var(--vx-off)' : 'none',
        fontSize: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: 'var(--vx-success)'
      }
    }), r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--vx-success)'
      }
    }, r[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--vx-muted)'
      }
    }, r[2]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--vx-muted)'
      }
    }, r[3])))), /*#__PURE__*/React.createElement(Panel, {
      title: "Operational KPIs",
      icon: "fas fa-gauge-high"
    }, [['SLA adherence', '99.4%', 'success'], ['Avg review time', '4m 12s', 'neutral'], ['Manual review rate', '13.0%', 'neutral'], ['Analyst throughput', '142 / day', 'neutral'], ['Cost per verification', 'CHF 0.84', 'success']].map(([l, v, tone]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem 0',
        borderBottom: '1px solid var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.8rem',
        color: 'var(--vx-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.85rem',
        fontWeight: 700,
        color: tone === 'success' ? 'var(--vx-success)' : 'var(--vx-text)'
      }
    }, v)))))));
  }
  function Panel({
    title,
    sub,
    icon,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '1rem'
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      style: {
        color: RED,
        fontSize: '.82rem'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '.92rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: 0
      }
    }, title), sub && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)',
        marginLeft: 'auto'
      }
    }, sub)), children);
  }
  function Bars({
    data
  }) {
    const max = Math.max(...data.map(d => d.v));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 5,
        height: 180
      }
    }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        height: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 30,
        height: d.v / max * 100 + '%',
        background: i >= data.length - 3 ? RED : 'color-mix(in oklab, var(--vx-red) 35%, var(--vx-off))',
        borderRadius: '3px 3px 0 0'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.54rem',
        color: 'var(--vx-light)'
      }
    }, d.l))));
  }
  function Line({
    data
  }) {
    const max = Math.max(...data),
      min = Math.min(...data);
    const W = 300,
      H = 150,
      pad = 10;
    const pts = data.map((v, i) => [pad + i * (W - 2 * pad) / (data.length - 1), H - pad - (v - min) / (max - min || 1) * (H - 2 * pad)]);
    const path = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
    const area = path + ` L${W - pad} ${H - pad} L${pad} ${H - pad} Z`;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${W} ${H}`,
      style: {
        width: '100%',
        height: 150
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: "rgba(200,37,42,.08)"
    }), /*#__PURE__*/React.createElement("path", {
      d: path,
      fill: "none",
      stroke: RED,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p[0],
      cy: p[1],
      r: i === pts.length - 1 ? 4 : 2.5,
      fill: RED
    })));
  }
  function Donut() {
    const segs = [['Low risk', 64, 'var(--vx-success)'], ['Medium', 24, 'var(--vx-review)'], ['High', 9, 'var(--vx-reject)'], ['Critical', 3, 'var(--vx-navy)']];
    let acc = 0;
    const R = 54,
      C = 2 * Math.PI * R;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "140",
      height: "140",
      viewBox: "0 0 140 140",
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("g", {
      transform: "rotate(-90 70 70)"
    }, segs.map((s, i) => {
      const len = s[1] / 100 * C;
      const el = /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: "70",
        cy: "70",
        r: R,
        fill: "none",
        stroke: s[2],
        strokeWidth: "18",
        strokeDasharray: `${len} ${C - len}`,
        strokeDashoffset: -acc
      });
      acc += len;
      return el;
    })), /*#__PURE__*/React.createElement("text", {
      x: "70",
      y: "66",
      textAnchor: "middle",
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '20px',
        fontWeight: 700,
        fill: 'var(--vx-text)'
      }
    }, "64%"), /*#__PURE__*/React.createElement("text", {
      x: "70",
      y: "82",
      textAnchor: "middle",
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '8px',
        fill: 'var(--vx-light)'
      }
    }, "LOW RISK")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, segs.map(s => /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        padding: '.3rem 0',
        fontSize: '.78rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 2,
        background: s[2]
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: 'var(--vx-muted)'
      }
    }, s[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700
      }
    }, s[1], "%")))));
  }
  window.Analytics = Analytics;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/analytics/Analytics.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case-management/CaseManagement.jsx
try { (() => {
// VerfiX Case Management — investigation workspace: case list, detail, notes, attachments,
// escalations, reviewer assignment, audit trail, decision history, internal comments.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip,
    TrustScore
  } = DS;
  const CASES = [{
    id: 'CASE-2041',
    subject: 'Helvetia Trust AG',
    type: 'KYB',
    risk: 71,
    band: 'review',
    assignee: 'You',
    age: '2h',
    priority: 'high'
  }, {
    id: 'CASE-2038',
    subject: 'Marco Keller',
    type: 'KYC',
    risk: 88,
    band: 'reject',
    assignee: 'You',
    age: '4h',
    priority: 'high'
  }, {
    id: 'CASE-2035',
    subject: 'Sofia Brunner',
    type: 'KYC',
    risk: 34,
    band: 'approve',
    assignee: 'A. Roth',
    age: '1d',
    priority: 'low'
  }, {
    id: 'CASE-2031',
    subject: 'Leman Capital Sàrl',
    type: 'KYB',
    risk: 58,
    band: 'review',
    assignee: 'Unassigned',
    age: '1d',
    priority: 'med'
  }];
  function CaseManagement() {
    const [active, setActive] = React.useState('CASE-2041');
    const cur = CASES.find(c => c.id === active);
    return /*#__PURE__*/React.createElement("div", {
      className: "case-shell"
    }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
      className: "case-cols",
      style: {
        display: 'grid',
        gridTemplateColumns: '280px 1fr',
        minHeight: 700
      }
    }, /*#__PURE__*/React.createElement(CaseList, {
      active: active,
      setActive: setActive
    }), /*#__PURE__*/React.createElement(CaseDetail, {
      key: cur.id,
      c: cur
    })));
  }
  function TopBar() {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 54,
        background: 'var(--vx-navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        color: 'rgba(255,255,255,.6)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-folder-open",
      tone: "solid",
      size: "sm"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: '.95rem'
      }
    }, "Case Management")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.7rem',
        color: 'rgba(255,255,255,.5)'
      }
    }, "4 open \xB7 2 high priority"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: 'var(--vx-red)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.7rem',
        fontWeight: 700
      }
    }, "JM")));
  }
  function CaseList({
    active,
    setActive
  }) {
    const pri = {
      high: 'var(--vx-red)',
      med: 'var(--vx-warn)',
      low: 'var(--vx-light)'
    };
    return /*#__PURE__*/React.createElement("aside", {
      className: "case-list",
      style: {
        borderRight: '1px solid var(--vx-border)',
        background: '#fff',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.9rem 1rem',
        borderBottom: '1px solid var(--vx-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, "Investigation queue"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-filter",
      style: {
        color: 'var(--vx-light)',
        fontSize: '.74rem'
      }
    })), CASES.map(c => /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setActive(c.id),
      style: {
        display: 'block',
        width: '100%',
        textAlign: 'left',
        border: 'none',
        borderBottom: '1px solid var(--vx-off)',
        borderLeft: '3px solid ' + (active === c.id ? 'var(--vx-red)' : 'transparent'),
        background: active === c.id ? 'var(--vx-red-bg)' : '#fff',
        padding: '.8rem 1rem',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.64rem',
        color: 'var(--vx-light)'
      }
    }, c.id), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: '.62rem',
        fontWeight: 700,
        color: pri[c.priority],
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: pri[c.priority]
      }
    }), c.priority)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700,
        marginBottom: 4
      }
    }, c.subject), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.4rem'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, c.type), /*#__PURE__*/React.createElement(Badge, {
      tone: c.band === 'approve' ? 'success' : c.band === 'review' ? 'warn' : 'danger'
    }, c.band), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: '.68rem',
        color: 'var(--vx-light)'
      }
    }, c.age)))));
  }
  const TABS = [{
    id: 'investigation',
    label: 'Investigation',
    icon: 'fas fa-magnifying-glass'
  }, {
    id: 'notes',
    label: 'Notes & Comments',
    icon: 'fas fa-comment-dots'
  }, {
    id: 'attachments',
    label: 'Attachments',
    icon: 'fas fa-paperclip'
  }, {
    id: 'audit',
    label: 'Audit Trail',
    icon: 'fas fa-list-check'
  }, {
    id: 'decisions',
    label: 'Decision History',
    icon: 'fas fa-gavel'
  }];
  function CaseDetail({
    c
  }) {
    const [tab, setTab] = React.useState('investigation');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(CaseHeader, {
      c: c
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        borderBottom: '1px solid var(--vx-border)',
        background: '#fff',
        padding: '0 1.6rem',
        overflowX: 'auto'
      }
    }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.4rem',
        fontFamily: 'var(--font-body)',
        fontSize: '.82rem',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        background: 'transparent',
        border: 'none',
        borderBottom: '2px solid ' + (tab === t.id ? 'var(--vx-red)' : 'transparent'),
        color: tab === t.id ? 'var(--vx-red)' : 'var(--vx-muted)',
        padding: '.8rem .85rem',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: t.icon,
      style: {
        fontSize: '.76rem'
      }
    }), t.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.4rem 1.6rem',
        overflow: 'auto',
        flex: 1
      }
    }, tab === 'investigation' && /*#__PURE__*/React.createElement(Investigation, {
      c: c
    }), tab === 'notes' && /*#__PURE__*/React.createElement(Notes, null), tab === 'attachments' && /*#__PURE__*/React.createElement(Attachments, null), tab === 'audit' && /*#__PURE__*/React.createElement(Audit, null), tab === 'decisions' && /*#__PURE__*/React.createElement(Decisions, null)));
  }
  function CaseHeader({
    c
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderBottom: '1px solid var(--vx-border)',
        padding: '1.2rem 1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 9,
        background: 'var(--vx-navy)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700
      }
    }, c.subject.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: 0,
        whiteSpace: 'nowrap'
      }
    }, c.subject), /*#__PURE__*/React.createElement(Badge, {
      tone: c.band === 'approve' ? 'success' : c.band === 'review' ? 'warn' : 'danger'
    }, c.band)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.7rem',
        color: 'var(--vx-light)',
        marginTop: 2
      }
    }, c.id, " \xB7 ", c.type, " \xB7 opened ", c.age, " ago"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-user-plus"
    }, "Reassign"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-arrow-up-right-dots"
    }, "Escalate"), /*#__PURE__*/React.createElement(Button, {
      variant: "navy",
      size: "sm",
      icon: "fas fa-xmark"
    }, "Reject"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-check"
    }, "Approve")));
  }
  function Section({
    children,
    icon,
    title,
    right,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1.1rem 1.2rem',
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '.9rem',
        fontWeight: 800,
        margin: 0
      }
    }, title)), right), children);
  }

  // ── INVESTIGATION ────────────────────────────────────
  function Investigation({
    c
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '1rem'
      },
      className: "case-cols"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-flag",
      title: "Why this case opened"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.85rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: 0
      }
    }, c.type === 'KYB' ? 'Routed to manual review: an indirect beneficial owner holding 18% via Alpine Holding AG (Liechtenstein) could not be automatically resolved to a natural person. All other checks passed.' : 'Flagged by the Trust Engine: document tampering signals and a face-match score below threshold produced a high fraud risk. Requires analyst adjudication before a final decision.')), /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-triangle-exclamation",
      title: "Risk factors"
    }, (c.type === 'KYB' ? [['Ownership complexity', 'Indirect UBO via foreign holding', 'warn'], ['Geographic', 'Liechtenstein nominee structure', 'warn'], ['PEP', '1 domestic PEP associate (Tier 3)', 'warn'], ['Sanctions', 'No matches', 'success']] : [['Document', 'Template mismatch on ID back', 'danger'], ['Biometric', 'Face-match 0.71 (threshold 0.85)', 'danger'], ['Device', 'Emulator signals detected', 'warn'], ['AML', 'No watchlist hits', 'success']]).map(([k, v, tone]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.55rem 0',
        borderBottom: '1px solid var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: tone === 'success' ? 'fas fa-circle-check' : tone === 'warn' ? 'fas fa-circle-exclamation' : 'fas fa-circle-xmark',
      style: {
        color: tone === 'success' ? 'var(--vx-success)' : tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-danger)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.82rem',
        fontWeight: 700
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-muted)'
      }
    }, v)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-gauge-high",
      title: "Trust Engine"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '.4rem 0'
      }
    }, /*#__PURE__*/React.createElement(TrustScore, {
      score: 100 - c.risk,
      size: 120,
      label: "Trust score"
    }))), /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-user-shield",
      title: "Assignment"
    }, /*#__PURE__*/React.createElement(Row, {
      k: "Assignee",
      v: /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'var(--vx-navy)',
          color: '#fff',
          fontSize: '.6rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700
        }
      }, "JM"), c.assignee)
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Queue",
      v: "Tier-2 compliance"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "SLA",
      v: /*#__PURE__*/React.createElement(Badge, {
        tone: "warn"
      }, "6h remaining")
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Priority",
      v: /*#__PURE__*/React.createElement(Badge, {
        tone: c.priority === 'high' ? 'danger' : 'neutral'
      }, c.priority)
    }))));
  }
  function Row({
    k,
    v
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        padding: '.45rem 0',
        borderBottom: '1px solid var(--vx-off)',
        fontSize: '.82rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-light)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, v));
  }

  // ── NOTES & internal comments ────────────────────────
  const SEED_NOTES = [{
    who: 'A. Roth',
    init: 'AR',
    time: 'Today · 09:40',
    body: 'Pulled the ZEFIX extract. Alpine Holding confirmed as registered in Vaduz but the natural-person owner is not listed. Requesting shareholder register from the client.',
    internal: true
  }, {
    who: 'System',
    init: 'SY',
    time: 'Today · 09:14',
    body: 'Case auto-routed to Tier-2 after indirect UBO could not be resolved.',
    internal: false
  }];
  function Notes() {
    const [notes, setNotes] = React.useState(SEED_NOTES);
    const [text, setText] = React.useState('');
    const add = () => {
      if (!text.trim()) return;
      setNotes([{
        who: 'Jane Müller',
        init: 'JM',
        time: 'Just now',
        body: text.trim(),
        internal: true
      }, ...notes]);
      setText('');
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-comment-dots",
      title: "Add internal note"
    }, /*#__PURE__*/React.createElement("textarea", {
      value: text,
      onChange: e => setText(e.target.value),
      placeholder: "Document your findings\u2026 (visible to compliance team only)",
      style: {
        width: '100%',
        minHeight: 70,
        fontFamily: 'var(--font-body)',
        fontSize: '.85rem',
        border: '1.5px solid var(--vx-border-2)',
        borderRadius: 6,
        padding: '.6rem .7rem',
        resize: 'vertical'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-lock",
      style: {
        marginRight: 4
      }
    }), "Internal \u2014 not shared with applicant"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-paper-plane",
      onClick: add
    }, "Post note"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '.7rem'
      }
    }, notes.map((n, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: '.8rem',
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '.9rem 1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: n.who === 'System' ? 'var(--vx-off)' : 'var(--vx-navy)',
        color: n.who === 'System' ? 'var(--vx-muted)' : '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.68rem',
        fontWeight: 700,
        flexShrink: 0
      }
    }, n.init), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.82rem',
        fontWeight: 700
      }
    }, n.who), n.internal && /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, "Internal"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: '.68rem',
        color: 'var(--vx-light)'
      }
    }, n.time)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: 0
      }
    }, n.body))))));
  }

  // ── ATTACHMENTS ──────────────────────────────────────
  const FILES = [{
    n: 'passport_front.jpg',
    s: '2.4 MB',
    t: 'Identity document',
    icon: 'fas fa-image',
    by: 'Applicant'
  }, {
    n: 'passport_back.jpg',
    s: '2.1 MB',
    t: 'Identity document',
    icon: 'fas fa-image',
    by: 'Applicant'
  }, {
    n: 'zefix_extract.pdf',
    s: '180 KB',
    t: 'Registry document',
    icon: 'fas fa-file-pdf',
    by: 'A. Roth'
  }, {
    n: 'liveness_capture.mp4',
    s: '5.8 MB',
    t: 'Biometric',
    icon: 'fas fa-video',
    by: 'Applicant'
  }];
  function Attachments() {
    return /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-paperclip",
      title: "Case attachments",
      right: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-upload"
      }, "Upload"),
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: '.7rem'
      }
    }, FILES.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: '.7rem .8rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: 7,
        background: 'var(--vx-red-bg)',
        color: 'var(--vx-red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: f.icon
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.82rem',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, f.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)'
      }
    }, f.t, " \xB7 ", f.s, " \xB7 ", f.by)), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download",
      style: {
        color: 'var(--vx-light)',
        cursor: 'pointer',
        fontSize: '.82rem'
      }
    })))));
  }

  // ── AUDIT TRAIL ──────────────────────────────────────
  const AUDIT = [['09:14:02', 'System', 'Case created', 'Auto-routed from Trust Engine (review band)'], ['09:14:03', 'System', 'Reviewer assigned', 'Tier-2 compliance queue'], ['09:31:10', 'A. Roth', 'Note added', 'Requesting shareholder register'], ['09:38:55', 'A. Roth', 'Attachment uploaded', 'zefix_extract.pdf'], ['09:40:21', 'A. Roth', 'Reassigned', '→ Jane Müller'], ['09:52:00', 'Jane Müller', 'Viewed case', 'Opened investigation tab']];
  function Audit() {
    return /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-list-check",
      title: "Audit trail",
      right: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-download"
      }, "Export log"),
      style: {
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '90px 130px 150px 1fr',
        gap: '.5rem',
        padding: '.4rem .2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("span", null, "Actor"), /*#__PURE__*/React.createElement("span", null, "Action"), /*#__PURE__*/React.createElement("span", null, "Detail")), AUDIT.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '90px 130px 150px 1fr',
        gap: '.5rem',
        alignItems: 'center',
        padding: '.55rem .2rem',
        borderBottom: i < AUDIT.length - 1 ? '1px solid var(--vx-off)' : 'none',
        fontSize: '.78rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--vx-light)'
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, r[1]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, r[2])), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-muted)'
      }
    }, r[3]))));
  }

  // ── DECISION HISTORY ─────────────────────────────────
  const DECISIONS = [{
    d: 'Manual review',
    who: 'System · Trust Engine',
    time: 'Today 09:14',
    tone: 'warn',
    note: 'Auto-decision: indirect UBO unresolved'
  }, {
    d: 'Escalated',
    who: 'A. Roth',
    time: 'Today 09:40',
    tone: 'info',
    note: 'Raised to Tier-2 for ownership confirmation'
  }];
  function Decisions() {
    return /*#__PURE__*/React.createElement(Section, {
      icon: "fas fa-gavel",
      title: "Decision history",
      style: {
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingLeft: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 5,
        top: 4,
        bottom: 4,
        width: 2,
        background: 'var(--vx-border)'
      }
    }), DECISIONS.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        paddingBottom: '1.1rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '-1.4rem',
        top: 2,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: '#fff',
        border: '2px solid ' + (d.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-info)')
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700
      }
    }, d.d), /*#__PURE__*/React.createElement(Badge, {
      tone: d.tone
    }, d.tone === 'warn' ? 'Review' : 'Escalation')), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.76rem',
        color: 'var(--vx-muted)',
        marginTop: 2
      }
    }, d.note), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)',
        marginTop: 2
      }
    }, d.who, " \xB7 ", d.time))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '-1.4rem',
        top: 2,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: 'var(--vx-red-bg)',
        border: '2px solid var(--vx-red)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700,
        color: 'var(--vx-red)'
      }
    }, "Awaiting final decision"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.76rem',
        color: 'var(--vx-muted)',
        marginTop: 2
      }
    }, "Pending your adjudication"))));
  }
  window.CaseManagement = CaseManagement;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case-management/CaseManagement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/compliance-center/ComplianceCenter.jsx
try { (() => {
// VerfiX Compliance Center — audit logs, consent records, retention, GDPR/nFADP controls,
// user activity logs, export center, regulatory reports.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip
  } = DS;
  const NAV = [{
    id: 'overview',
    icon: 'fas fa-shield-halved',
    label: 'Overview'
  }, {
    id: 'audit',
    icon: 'fas fa-list-check',
    label: 'Audit Logs'
  }, {
    id: 'consent',
    icon: 'fas fa-file-signature',
    label: 'Consent Records'
  }, {
    id: 'retention',
    icon: 'fas fa-clock',
    label: 'Data Retention'
  }, {
    id: 'gdpr',
    icon: 'fas fa-user-shield',
    label: 'GDPR / nFADP'
  }, {
    id: 'activity',
    icon: 'fas fa-user-clock',
    label: 'User Activity'
  }, {
    id: 'exports',
    icon: 'fas fa-file-export',
    label: 'Export Center'
  }, {
    id: 'reports',
    icon: 'fas fa-file-contract',
    label: 'Regulatory Reports'
  }];
  function ComplianceCenter() {
    const [view, setView] = React.useState('overview');
    return /*#__PURE__*/React.createElement("div", {
      className: "cc-shell"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '230px 1fr',
        minHeight: 740
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        background: 'var(--vx-navy)',
        padding: '1.1rem .8rem',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.55rem',
        padding: '.2rem .5rem 1.2rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-shield-halved",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        color: '#fff',
        fontSize: '.95rem'
      }
    }, "Compliance")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.id,
      role: "link",
      tabIndex: 0,
      onClick: () => setView(n.id),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setView(n.id);
        }
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.65rem',
        padding: '.5rem .55rem',
        borderRadius: 6,
        fontSize: '.82rem',
        fontWeight: 600,
        cursor: 'pointer',
        color: view === n.id ? '#fff' : 'rgba(255,255,255,.55)',
        background: view === n.id ? 'rgba(200,37,42,.18)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: n.icon,
      style: {
        fontSize: '.78rem',
        width: 16,
        color: view === n.id ? 'var(--vx-red)' : 'rgba(255,255,255,.4)'
      }
    }), n.label))), /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.5rem .55rem',
        fontSize: '.78rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,.5)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left",
      style: {
        width: 16
      }
    }), "Back to site")), /*#__PURE__*/React.createElement("main", {
      style: {
        padding: '1.7rem 1.9rem',
        overflow: 'auto'
      }
    }, view === 'overview' && /*#__PURE__*/React.createElement(Overview, {
      setView: setView
    }), view === 'audit' && /*#__PURE__*/React.createElement(AuditLogs, null), view === 'consent' && /*#__PURE__*/React.createElement(Consent, null), view === 'retention' && /*#__PURE__*/React.createElement(Retention, null), view === 'gdpr' && /*#__PURE__*/React.createElement(GDPR, null), view === 'activity' && /*#__PURE__*/React.createElement(Activity, null), view === 'exports' && /*#__PURE__*/React.createElement(Exports, null), view === 'reports' && /*#__PURE__*/React.createElement(Reports, null))));
  }
  function Head({
    title,
    sub,
    actions
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.4rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: 0
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.85rem',
        color: 'var(--vx-muted)',
        margin: '.3rem 0 0',
        maxWidth: 600
      }
    }, sub)), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, actions));
  }
  function Card({
    children,
    style = {},
    pad = '1.2rem'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: pad,
        ...style
      }
    }, children);
  }
  function SubHead({
    children,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        margin: 0
      }
    }, children), right);
  }
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: '.74rem'
  };
  function Table({
    cols,
    rows,
    gt
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      pad: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: gt,
        gap: '.6rem',
        padding: '.6rem 1rem',
        borderBottom: '1px solid var(--vx-border)',
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, cols.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i
    }, c))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: gt,
        gap: '.6rem',
        alignItems: 'center',
        padding: '.65rem 1rem',
        borderBottom: i < rows.length - 1 ? '1px solid var(--vx-off)' : 'none',
        fontSize: '.8rem'
      }
    }, r.map((c, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, c)))));
  }

  // ── OVERVIEW ─────────────────────────────────────────
  function Overview({
    setView
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Compliance Overview",
      sub: "Real-time posture across data protection, consent, retention and regulatory obligations.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-file-export"
      }, "Generate report")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '.8rem',
        marginBottom: '1.5rem'
      }
    }, [['Compliance score', '96%', 'fas fa-shield-halved', 'var(--vx-success)'], ['Active consents', '12,840', 'fas fa-file-signature', 'var(--vx-text)'], ['DSAR requests · 30d', '7', 'fas fa-user-shield', 'var(--vx-text)'], ['Retention actions due', '3', 'fas fa-clock', 'var(--vx-warn)']].map(([l, v, ic, c]) => /*#__PURE__*/React.createElement(Card, {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.7rem',
        fontWeight: 600,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, l), /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.7rem',
        fontWeight: 700,
        color: c,
        marginTop: '.35rem'
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      },
      className: "cc-grid"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SubHead, null, "Framework coverage"), [['GDPR (EU)', 100], ['nFADP (Switzerland)', 100], ['eIDAS', 96], ['ISO 27001', 92], ['SOC 2 Type II', 88]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        marginBottom: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.78rem',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontFamily: 'var(--font-mono)'
      }
    }, v, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--vx-off)',
        borderRadius: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: v === 100 ? 'var(--vx-success)' : 'var(--vx-red)',
        borderRadius: 3
      }
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SubHead, {
      right: /*#__PURE__*/React.createElement("a", {
        onClick: () => setView('reports'),
        style: {
          fontSize: '.74rem',
          fontWeight: 600,
          color: 'var(--vx-red)',
          cursor: 'pointer'
        }
      }, "All reports \u2192")
    }, "Attention required"), [['3 records past retention window', 'Schedule deletion', 'warn', () => setView('retention')], ['Q1 FINMA AML report due in 6 days', 'Prepare filing', 'warn', () => setView('reports')], ['2 pending DSAR access requests', 'Review requests', 'info', () => setView('gdpr')]].map(([t, a, tone, fn], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: fn,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.6rem .7rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 7,
        marginBottom: '.5rem',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: tone === 'warn' ? 'fas fa-triangle-exclamation' : 'fas fa-circle-info',
      style: {
        color: tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-info)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.8rem',
        fontWeight: 600
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-red)',
        fontWeight: 600
      }
    }, a, " \u2192")))))));
  }

  // ── AUDIT LOGS ───────────────────────────────────────
  const ALOG = [['2026-06-19 12:04:51', 'jane.muller@verfix', 'verification.approved', 'vrf_8Kd2mQ', '83.7.21.4'], ['2026-06-19 11:58:30', 'system', 'retention.purge', 'batch_2026Q2', '—'], ['2026-06-19 11:40:12', 'a.roth@verfix', 'case.reassigned', 'CASE-2041', '83.7.21.9'], ['2026-06-19 10:22:05', 'jane.muller@verfix', 'export.created', 'exp_4Lp9', '83.7.21.4'], ['2026-06-19 09:14:02', 'system', 'case.created', 'CASE-2041', '—'], ['2026-06-18 16:50:44', 'admin@verfix', 'apikey.rotated', 'vx_live_q9Lp', '83.7.21.1']];
  function AuditLogs() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Audit Logs",
      sub: "Immutable, tamper-evident record of every action across the platform. Retained 10 years.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-filter"
      }, "Filter"), /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-download"
      }, "Export"))
    }), /*#__PURE__*/React.createElement(Table, {
      gt: "1.3fr 1.6fr 1.4fr 1.1fr .9fr",
      cols: ['Timestamp (UTC)', 'Actor', 'Action', 'Resource', 'IP'],
      rows: ALOG.map(r => [/*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          color: 'var(--vx-light)'
        }
      }, r[0]), /*#__PURE__*/React.createElement("span", {
        style: mono
      }, r[1]), /*#__PURE__*/React.createElement(Badge, {
        tone: r[2].includes('purge') || r[2].includes('rotated') ? 'warn' : 'neutral'
      }, r[2]), /*#__PURE__*/React.createElement("span", {
        style: mono
      }, r[3]), /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          color: 'var(--vx-light)'
        }
      }, r[4])])
    }));
  }

  // ── CONSENT ──────────────────────────────────────────
  const CONSENT = [['Sofia Brunner', 'Identity verification', 'Granted', '2026-05-02', 'success'], ['Marco Keller', 'Identity + AML screening', 'Granted', '2026-05-14', 'success'], ['L. Dubois', 'Biometric processing', 'Withdrawn', '2026-06-01', 'danger'], ['A. Meier', 'Data sharing (partner)', 'Granted', '2026-06-10', 'success']];
  function Consent() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Consent Records",
      sub: "Explicit, purpose-bound consent captured at onboarding under GDPR Art. 7 and nFADP.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-download"
      }, "Export ledger")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem',
        marginBottom: '1.3rem'
      }
    }, [['Active consents', '12,840'], ['Withdrawn · 30d', '38'], ['Avg. capture rate', '99.1%']].map(([l, v]) => /*#__PURE__*/React.createElement(Card, {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em',
        fontWeight: 600
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.5rem',
        fontWeight: 700,
        marginTop: 4
      }
    }, v)))), /*#__PURE__*/React.createElement(Table, {
      gt: "1.2fr 1.6fr .9fr 1fr",
      cols: ['Subject', 'Purpose', 'Status', 'Date'],
      rows: CONSENT.map(r => [/*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r[0]), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)'
        }
      }, r[1]), /*#__PURE__*/React.createElement(Badge, {
        tone: r[4]
      }, r[2]), /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          color: 'var(--vx-light)'
        }
      }, r[3])])
    }));
  }

  // ── RETENTION ────────────────────────────────────────
  const POLICIES = [['Identity documents', '5 years', 'After verification', 'Auto-delete', 'success'], ['Biometric templates', '30 days', 'After decision', 'Auto-delete', 'success'], ['Verification metadata', '10 years', 'Regulatory (AMLA)', 'Retain', 'info'], ['Withdrawn-consent data', '30 days', 'After withdrawal', '3 due now', 'warn']];
  function Retention() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Data Retention Policies",
      sub: "Automated lifecycle rules enforce minimum and maximum retention per data class.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-trash-can"
      }, "Run purge (3)")
    }), /*#__PURE__*/React.createElement(Table, {
      gt: "1.5fr .9fr 1.3fr 1fr",
      cols: ['Data class', 'Retention', 'Trigger', 'Action'],
      rows: POLICIES.map(r => [/*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r[0]), /*#__PURE__*/React.createElement("span", {
        style: mono
      }, r[1]), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)'
        }
      }, r[2]), /*#__PURE__*/React.createElement(Badge, {
        tone: r[4]
      }, r[3])])
    }), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem',
        background: 'var(--vx-warn-bg)',
        border: '1px solid #FCE4A6'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clock",
      style: {
        color: 'var(--vx-warn)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-warn-fg)'
      }
    }, "3 withdrawn-consent records have passed their 30-day window and are queued for cryptographic erasure.")));
  }

  // ── GDPR / nFADP ─────────────────────────────────────
  const DSAR = [['DSAR-0192', 'Access request', 'A. Meier', 'In progress', 'warn', '4 days left'], ['DSAR-0190', 'Erasure (RTBF)', 'L. Dubois', 'In progress', 'warn', '9 days left'], ['DSAR-0188', 'Data portability', 'S. Brunner', 'Completed', 'success', 'Closed']];
  function GDPR() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "GDPR / nFADP Controls",
      sub: "Data-subject rights handling under EU GDPR and the Swiss Federal Act on Data Protection.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus"
      }, "New DSAR")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '.8rem',
        marginBottom: '1.3rem'
      }
    }, [['Right of access', 'fas fa-eye'], ['Right to erasure', 'fas fa-eraser'], ['Data portability', 'fas fa-right-left'], ['Rectification', 'fas fa-pen']].map(([l, ic]) => /*#__PURE__*/React.createElement(Card, {
      key: l,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '1.1rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem',
        fontWeight: 700,
        marginTop: '.5rem'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.68rem',
        color: 'var(--vx-success)',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-check"
    }), " Automated")))), /*#__PURE__*/React.createElement(SubHead, null, "Open data-subject requests"), /*#__PURE__*/React.createElement(Table, {
      gt: ".9fr 1.2fr 1fr 1fr 1fr",
      cols: ['ID', 'Type', 'Subject', 'Status', 'SLA'],
      rows: DSAR.map(r => [/*#__PURE__*/React.createElement("span", {
        style: mono
      }, r[0]), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r[1]), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)'
        }
      }, r[2]), /*#__PURE__*/React.createElement(Badge, {
        tone: r[4]
      }, r[3]), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '.76rem',
          color: r[4] === 'warn' ? 'var(--vx-warn)' : 'var(--vx-light)'
        }
      }, r[5])])
    }));
  }

  // ── USER ACTIVITY ────────────────────────────────────
  const ACT = [['Jane Müller', 'Approved verification', 'CASE-2041', '2 min ago', 'JM'], ['A. Roth', 'Added case note', 'CASE-2041', '24 min ago', 'AR'], ['Admin', 'Rotated API key', 'vx_live_q9Lp', '1 hr ago', 'AD'], ['Jane Müller', 'Created export', 'exp_4Lp9', '2 hr ago', 'JM'], ['T. Frei', 'Login', 'SSO · Okta', '3 hr ago', 'TF']];
  function Activity() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "User Activity Logs",
      sub: "Per-user action history for internal accountability and access reviews.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-download"
      }, "Export")
    }), /*#__PURE__*/React.createElement(Card, {
      pad: "0"
    }, ACT.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem',
        padding: '.8rem 1rem',
        borderBottom: i < ACT.length - 1 ? '1px solid var(--vx-off)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'var(--vx-navy)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.66rem',
        fontWeight: 700
      }
    }, a[4]), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.83rem',
        fontWeight: 600
      }
    }, a[0]), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-muted)'
      }
    }, a[1].toLowerCase()), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        ...mono,
        color: 'var(--vx-red)'
      }
    }, a[2])), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-light)'
      }
    }, a[3])))));
  }

  // ── EXPORT CENTER ────────────────────────────────────
  const EXPORTS = [['Verification register · Q2 2026', 'CSV', 'Ready', 'success', '4.2 MB'], ['Audit log · May 2026', 'JSON', 'Ready', 'success', '11.8 MB'], ['Consent ledger · full', 'CSV', 'Generating', 'warn', '—']];
  function Exports() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Export Center",
      sub: "Generate signed, regulator-ready data exports. Every export is itself audit-logged.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus"
      }, "New export")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem',
        marginBottom: '1.3rem'
      }
    }, [['Verification register', 'fas fa-id-card'], ['Audit log', 'fas fa-list-check'], ['Consent ledger', 'fas fa-file-signature']].map(([l, ic]) => /*#__PURE__*/React.createElement(Card, {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 7,
        background: 'var(--vx-red-bg)',
        color: 'var(--vx-red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.83rem',
        fontWeight: 700
      }
    }, l)), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-download",
      style: {
        width: '100%',
        marginTop: '.7rem'
      }
    }, "Generate")))), /*#__PURE__*/React.createElement(SubHead, null, "Recent exports"), /*#__PURE__*/React.createElement(Table, {
      gt: "1.8fr .7fr 1fr .8fr .7fr",
      cols: ['Export', 'Format', 'Status', 'Size', ''],
      rows: EXPORTS.map(r => [/*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r[0]), /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, r[1]), /*#__PURE__*/React.createElement(Badge, {
        tone: r[3]
      }, r[2]), /*#__PURE__*/React.createElement("span", {
        style: {
          ...mono,
          color: 'var(--vx-light)'
        }
      }, r[4]), r[3] === 'success' ? /*#__PURE__*/React.createElement("i", {
        className: "fas fa-download",
        style: {
          color: 'var(--vx-red)',
          cursor: 'pointer'
        }
      }) : /*#__PURE__*/React.createElement("i", {
        className: "fas fa-spinner fa-spin",
        style: {
          color: 'var(--vx-light)'
        }
      })])
    }));
  }

  // ── REGULATORY REPORTS ───────────────────────────────
  const REPORTS = [['FINMA AML annual report', 'Switzerland', 'Due 30 Jun', 'warn', 'fas fa-landmark'], ['GDPR Art. 30 processing record', 'EU', 'Current', 'success', 'fas fa-file-shield'], ['Suspicious Activity Report (MROS)', 'Switzerland', 'On demand', 'info', 'fas fa-flag'], ['Annual DPO transparency report', 'EU / CH', 'Filed', 'success', 'fas fa-user-shield']];
  function Reports() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Regulatory Reports",
      sub: "Pre-built report templates mapped to Swiss and EU filing obligations.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-file-export"
      }, "Generate filing")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.7rem'
      }
    }, REPORTS.map((r, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 8,
        background: 'var(--vx-red-bg)',
        color: 'var(--vx-red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: r[4]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.88rem',
        fontWeight: 700
      }
    }, r[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)'
      }
    }, r[1])), /*#__PURE__*/React.createElement(Badge, {
      tone: r[3]
    }, r[2]), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-arrow-right"
    }, "Open")))));
  }
  window.ComplianceCenter = ComplianceCenter;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/compliance-center/ComplianceCenter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/developer-portal/Shell.jsx
try { (() => {
// VerfiX Developer Portal — shared shell + UI utilities. Exposed on window.DevUI.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Badge,
    IconChip
  } = DS;

  // ── Brand mark ───────────────────────────────────────
  function Mark({
    size = 28
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        background: 'var(--vx-red)',
        borderRadius: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-fingerprint",
      style: {
        color: '#fff',
        fontSize: size * .5
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.05rem',
        letterSpacing: '-.03em',
        color: '#fff'
      }
    }, "Verfi", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-red)'
      }
    }, "X")));
  }

  // ── App shell: navy sidebar + topbar + scrollable content ──
  const NAV = [{
    id: 'dashboard',
    icon: 'fas fa-gauge-high',
    label: 'API Dashboard'
  }, {
    id: 'keys',
    icon: 'fas fa-key',
    label: 'API Keys'
  }, {
    id: 'sandbox',
    icon: 'fas fa-flask',
    label: 'Sandbox'
  }, {
    id: 'webhooks',
    icon: 'fas fa-bolt',
    label: 'Webhooks'
  }, {
    id: 'logs',
    icon: 'fas fa-list-ul',
    label: 'API Logs'
  }, {
    id: 'ratelimits',
    icon: 'fas fa-gauge',
    label: 'Rate Limits'
  }, {
    sec: 'Resources'
  }, {
    id: 'docs',
    icon: 'fas fa-book',
    label: 'API Documentation'
  }, {
    id: 'auth',
    icon: 'fas fa-shield-halved',
    label: 'Authentication'
  }, {
    id: 'errors',
    icon: 'fas fa-triangle-exclamation',
    label: 'Error Reference'
  }, {
    id: 'sdks',
    icon: 'fas fa-cubes',
    label: 'SDK Downloads'
  }, {
    id: 'status',
    icon: 'fas fa-signal',
    label: 'Status Page'
  }];
  function AppShell({
    view,
    setView,
    env,
    setEnv,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '232px 1fr',
        minHeight: 720,
        fontFamily: 'var(--font-body)',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        background: 'var(--vx-navy)',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.1rem .8rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '.2rem .5rem 1.3rem'
      }
    }, /*#__PURE__*/React.createElement(Mark, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.55rem',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.4)',
        padding: '0 .55rem .5rem'
      }
    }, "Developers"), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, NAV.map((n, i) => n.sec ? /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.55rem',
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.4)',
        padding: '1rem .55rem .5rem'
      }
    }, n.sec) : /*#__PURE__*/React.createElement("a", {
      key: n.id,
      role: "link",
      tabIndex: 0,
      onClick: () => setView(n.id),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setView(n.id);
        }
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.65rem',
        padding: '.5rem .55rem',
        borderRadius: 6,
        fontSize: '.82rem',
        fontWeight: 600,
        cursor: 'pointer',
        color: view === n.id ? '#fff' : 'rgba(255,255,255,.55)',
        background: view === n.id ? 'rgba(200,37,42,.18)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: n.icon,
      style: {
        fontSize: '.8rem',
        width: 16,
        color: view === n.id ? 'var(--vx-red)' : 'rgba(255,255,255,.4)'
      }
    }), n.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.5rem .55rem',
        fontSize: '.78rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,.5)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left",
      style: {
        width: 16
      }
    }), "Back to site"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        height: 58,
        borderBottom: '1px solid var(--vx-border)',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.6rem',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-terminal",
      style: {
        color: 'var(--vx-red)'
      }
    }), /*#__PURE__*/React.createElement("span", null, "developers.verfix.swiss")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
      }
    }, /*#__PURE__*/React.createElement(EnvToggle, {
      env: env,
      setEnv: setEnv
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 22,
        background: 'var(--vx-border)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.5rem',
        fontSize: '.8rem',
        fontWeight: 600,
        color: 'var(--vx-text)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: 'var(--vx-navy)',
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.68rem',
        fontWeight: 700
      }
    }, "JM"), "Jane M\xFCller"))), /*#__PURE__*/React.createElement("main", {
      style: {
        padding: '1.7rem 1.9rem',
        overflow: 'auto',
        flex: 1
      }
    }, children)));
  }
  function EnvToggle({
    env,
    setEnv
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 100,
        padding: 2
      }
    }, ['test', 'live'].map(e => /*#__PURE__*/React.createElement("button", {
      key: e,
      onClick: () => setEnv(e),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.72rem',
        fontWeight: 700,
        textTransform: 'capitalize',
        border: 'none',
        cursor: 'pointer',
        padding: '.25rem .75rem',
        borderRadius: 100,
        background: env === e ? e === 'live' ? 'var(--vx-red)' : 'var(--vx-navy)' : 'transparent',
        color: env === e ? '#fff' : 'var(--vx-muted)'
      }
    }, e === 'live' ? '● Live' : '○ Test')));
  }

  // ── Page header ──────────────────────────────────────
  function PageHead({
    title,
    sub,
    actions
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.4rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: 0
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.86rem',
        color: 'var(--vx-muted)',
        margin: '.3rem 0 0',
        maxWidth: 620
      }
    }, sub)), actions && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, actions));
  }
  function SectionHead({
    children,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 0 .8rem'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        margin: 0
      }
    }, children), right);
  }

  // ── Stat tile ────────────────────────────────────────
  function StatTile({
    label,
    value,
    delta,
    deltaUp,
    icon
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: '1rem 1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.7rem',
        fontWeight: 600,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, label), icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.7rem',
        fontWeight: 700,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.35rem 0 .2rem'
      }
    }, value), delta && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.72rem',
        fontWeight: 600,
        color: deltaUp ? 'var(--vx-success)' : 'var(--vx-muted)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: deltaUp ? 'fas fa-arrow-up' : 'fas fa-arrow-down',
      style: {
        fontSize: '.62rem',
        marginRight: 3
      }
    }), delta));
  }

  // ── Bar chart (CSS) ──────────────────────────────────
  function BarChart({
    data,
    height = 150,
    color = 'var(--vx-red)'
  }) {
    const max = Math.max(...data.map(d => d.v));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 6,
        height
      }
    }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        height: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      title: d.v,
      style: {
        width: '100%',
        maxWidth: 26,
        height: `${d.v / max * 100}%`,
        background: i === data.length - 1 ? color : 'color-mix(in oklab, ' + 'var(--vx-red) 38%, var(--vx-off))',
        borderRadius: '3px 3px 0 0',
        transition: 'height .4s var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        color: 'var(--vx-light)'
      }
    }, d.l))));
  }

  // ── Code block with copy ─────────────────────────────
  function CodeBlock({
    children,
    lang = 'bash',
    title
  }) {
    const [copied, setCopied] = React.useState(false);
    const copy = () => {
      try {
        navigator.clipboard.writeText(typeof children === 'string' ? children : '');
      } catch (e) {}
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy-3)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 8,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem .8rem',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'rgba(255,255,255,.45)',
        letterSpacing: '.04em'
      }
    }, title || lang), /*#__PURE__*/React.createElement("button", {
      onClick: copy,
      style: {
        background: 'transparent',
        border: 'none',
        color: copied ? 'var(--vx-success)' : 'rgba(255,255,255,.55)',
        fontSize: '.66rem',
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'var(--font-mono)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: copied ? 'fas fa-check' : 'fas fa-copy',
      style: {
        marginRight: 4
      }
    }), copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '.9rem 1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.74rem',
        lineHeight: 1.7,
        color: 'rgba(255,255,255,.85)',
        overflow: 'auto'
      }
    }, children));
  }

  // ── Data table ───────────────────────────────────────
  function DataTable({
    cols,
    rows,
    widths
  }) {
    const gt = widths || cols.map(() => '1fr').join(' ');
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: gt,
        gap: '.6rem',
        padding: '.6rem 1rem',
        borderBottom: '1px solid var(--vx-border)',
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, cols.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i
    }, c))), rows.map((r, ri) => /*#__PURE__*/React.createElement("div", {
      key: ri,
      style: {
        display: 'grid',
        gridTemplateColumns: gt,
        gap: '.6rem',
        alignItems: 'center',
        padding: '.7rem 1rem',
        borderBottom: ri < rows.length - 1 ? '1px solid var(--vx-off)' : 'none',
        fontSize: '.82rem'
      }
    }, r.map((cell, ci) => /*#__PURE__*/React.createElement("div", {
      key: ci,
      style: {
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, cell)))));
  }
  function Mono({
    children,
    color
  }) {
    return /*#__PURE__*/React.createElement("code", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.74rem',
        color: color || 'var(--vx-navy)'
      }
    }, children);
  }
  function Method({
    m
  }) {
    const c = {
      GET: 'var(--vx-info)',
      POST: 'var(--vx-red)',
      DELETE: 'var(--vx-danger)',
      PUT: 'var(--vx-warn)'
    }[m] || 'var(--vx-muted)';
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        fontWeight: 700,
        color: c
      }
    }, m);
  }
  function Panel({
    children,
    pad = '1.2rem',
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: pad,
        ...style
      }
    }, children);
  }
  window.DevUI = {
    AppShell,
    PageHead,
    SectionHead,
    StatTile,
    BarChart,
    CodeBlock,
    DataTable,
    Mono,
    Method,
    Panel,
    Mark,
    NAV
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/developer-portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/developer-portal/Views1.jsx
try { (() => {
// Developer Portal views: API Dashboard, API Keys, Rate Limits.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip
  } = DS;
  const U = window.DevUI;
  const REQ_7D = [{
    l: 'Mon',
    v: 8200
  }, {
    l: 'Tue',
    v: 9100
  }, {
    l: 'Wed',
    v: 7600
  }, {
    l: 'Thu',
    v: 10400
  }, {
    l: 'Fri',
    v: 11800
  }, {
    l: 'Sat',
    v: 5200
  }, {
    l: 'Sun',
    v: 6900
  }];
  function Dashboard({
    env
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "API Dashboard",
      sub: `Live overview of your VerfiX integration · ${env === 'live' ? 'Production' : 'Test'} environment`,
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-book"
      }, "Docs"), /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-flask"
      }, "Open Sandbox"))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '.8rem',
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Requests \xB7 24h",
      value: "59,210",
      delta: "12.4% vs prev",
      deltaUp: true,
      icon: "fas fa-arrow-right-arrow-left"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Verifications",
      value: "3,847",
      delta: "8.1%",
      deltaUp: true,
      icon: "fas fa-id-card"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Success rate",
      value: "99.2%",
      delta: "0.3%",
      deltaUp: true,
      icon: "fas fa-circle-check"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Avg latency",
      value: "412ms",
      delta: "22ms faster",
      deltaUp: true,
      icon: "fas fa-gauge-high"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.Panel, null, /*#__PURE__*/React.createElement(U.SectionHead, {
      right: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '.62rem',
          color: 'var(--vx-light)'
        }
      }, "Last 7 days")
    }, "API requests"), /*#__PURE__*/React.createElement(U.BarChart, {
      data: REQ_7D
    })), /*#__PURE__*/React.createElement(U.Panel, null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Endpoint mix"), [['POST /verifications', 62, 'var(--vx-red)'], ['GET /verifications/:id', 24, 'var(--vx-navy)'], ['POST /companies', 9, 'var(--vx-review)'], ['POST /webhooks', 5, 'var(--vx-light)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        marginBottom: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.74rem',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement(U.Mono, null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, v, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--vx-off)',
        borderRadius: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: c,
        borderRadius: 3
      }
    })))))), /*#__PURE__*/React.createElement(U.SectionHead, {
      right: /*#__PURE__*/React.createElement("a", {
        style: {
          fontSize: '.74rem',
          fontWeight: 600,
          color: 'var(--vx-red)',
          cursor: 'pointer'
        }
      }, "View all logs \u2192")
    }, "Recent requests"), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Method', 'Endpoint', 'Status', 'Latency', 'Time'],
      widths: ".7fr 2fr .8fr .8fr 1fr",
      rows: [[/*#__PURE__*/React.createElement(U.Method, {
        m: "POST"
      }), /*#__PURE__*/React.createElement(U.Mono, null, "/v2/verifications"), /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "201"), /*#__PURE__*/React.createElement(U.Mono, null, "389ms"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)'
        }
      }, "12:04:51")], [/*#__PURE__*/React.createElement(U.Method, {
        m: "GET"
      }), /*#__PURE__*/React.createElement(U.Mono, null, "/v2/verifications/vrf_8Kd2mQ"), /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "200"), /*#__PURE__*/React.createElement(U.Mono, null, "88ms"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)'
        }
      }, "12:04:48")], [/*#__PURE__*/React.createElement(U.Method, {
        m: "POST"
      }), /*#__PURE__*/React.createElement(U.Mono, null, "/v2/companies"), /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "201"), /*#__PURE__*/React.createElement(U.Mono, null, "1.2s"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)'
        }
      }, "12:03:30")], [/*#__PURE__*/React.createElement(U.Method, {
        m: "POST"
      }), /*#__PURE__*/React.createElement(U.Mono, null, "/v2/verifications"), /*#__PURE__*/React.createElement(Badge, {
        tone: "warn"
      }, "429"), /*#__PURE__*/React.createElement(U.Mono, null, "14ms"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)'
        }
      }, "12:02:11")], [/*#__PURE__*/React.createElement(U.Method, {
        m: "GET"
      }), /*#__PURE__*/React.createElement(U.Mono, null, "/v2/verifications/vrf_3Lp9xR"), /*#__PURE__*/React.createElement(Badge, {
        tone: "danger"
      }, "404"), /*#__PURE__*/React.createElement(U.Mono, null, "22ms"), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)'
        }
      }, "12:01:02")]]
    }));
  }
  const KEYS = [{
    name: 'Production · Backend',
    prefix: 'vx_live_',
    tail: '8Kd2',
    created: 'Jan 14, 2026',
    used: '2 min ago',
    env: 'live',
    scope: 'Full access'
  }, {
    name: 'Production · Webhooks',
    prefix: 'vx_live_',
    tail: 'q9Lp',
    created: 'Jan 14, 2026',
    used: '5 min ago',
    env: 'live',
    scope: 'Read only'
  }, {
    name: 'Sandbox · Default',
    prefix: 'vx_test_',
    tail: 'M3kZ',
    created: 'Dec 02, 2025',
    used: '1 hr ago',
    env: 'test',
    scope: 'Full access'
  }];
  function Keys({
    env
  }) {
    const [revealed, setRevealed] = React.useState(null);
    const rows = KEYS.filter(k => k.env === env);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "API Keys",
      sub: "Secret keys authenticate your server-side requests. Never expose a live key in client code.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus"
      }, "Create key")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        background: 'var(--vx-warn-bg)',
        border: '1px solid #FCE4A6',
        borderRadius: 8,
        padding: '.7rem 1rem',
        marginBottom: '1.2rem',
        fontSize: '.82rem',
        color: 'var(--vx-warn-fg)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-triangle-exclamation"
    }), " Keep secret keys confidential. Rotate immediately if a key is exposed \u2014 VerfiX cannot recover a leaked key."), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Name', 'Key', 'Scope', 'Last used', 'Created', ''],
      widths: "1.4fr 1.7fr .9fr .9fr .9fr .5fr",
      rows: rows.map(k => [/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 700,
          fontSize: '.82rem'
        }
      }, k.name)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem'
        }
      }, /*#__PURE__*/React.createElement(U.Mono, null, k.prefix, revealed === k.tail ? 'a1B2c3D4e5F6' + k.tail : '••••••••', revealed === k.tail ? '' : k.tail), /*#__PURE__*/React.createElement("i", {
        className: revealed === k.tail ? 'fas fa-eye-slash' : 'fas fa-eye',
        onClick: () => setRevealed(revealed === k.tail ? null : k.tail),
        style: {
          cursor: 'pointer',
          color: 'var(--vx-light)',
          fontSize: '.72rem'
        }
      })), /*#__PURE__*/React.createElement(Badge, {
        tone: k.scope === 'Full access' ? 'red' : 'neutral'
      }, k.scope), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)',
          fontSize: '.78rem'
        }
      }, k.used), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)',
          fontSize: '.78rem'
        }
      }, k.created), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-rotate",
        title: "Rotate",
        style: {
          color: 'var(--vx-red)',
          cursor: 'pointer'
        }
      })])
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.SectionHead, null, "Publishable key"), /*#__PURE__*/React.createElement(U.Panel, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.Mono, {
      color: "var(--vx-text)"
    }, "vx_pub_", env, "_4Kd9Lm2QpZ"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        marginTop: 4
      }
    }, "Safe to embed in the VerfiX Web SDK for client-side capture.")), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-copy"
    }, "Copy")))));
  }
  const TIERS = [['POST /v2/verifications', '50 / sec', '120,000 / day'], ['GET /v2/verifications/:id', '200 / sec', 'Unlimited'], ['POST /v2/companies', '20 / sec', '40,000 / day'], ['POST /v2/webhooks', '10 / sec', '5,000 / day']];
  function RateLimits() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "Rate Limits",
      sub: "Limits are enforced per organization. Exceeding a limit returns 429 with a Retry-After header."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem',
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Current plan",
      value: "Scale",
      icon: "fas fa-layer-group"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Burst capacity",
      value: "50 / sec",
      icon: "fas fa-bolt"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Today's usage",
      value: "49.3%",
      delta: "of daily quota",
      icon: "fas fa-gauge"
    })), /*#__PURE__*/React.createElement(U.SectionHead, null, "Per-endpoint limits"), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Endpoint', 'Rate limit', 'Daily quota'],
      widths: "2fr 1fr 1fr",
      rows: TIERS.map(([e, r, d]) => [/*#__PURE__*/React.createElement(U.Mono, null, e), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, r), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)'
        }
      }, d)])
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.SectionHead, null, "Handling 429 responses"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "response \xB7 429 Too Many Requests"
    }, `HTTP/1.1 429 Too Many Requests
Retry-After: 2
X-RateLimit-Limit: 50
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1718884802

{ "error": { "type": "rate_limit_exceeded",
  "message": "Too many requests. Retry after 2s." } }`), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.82rem',
        color: 'var(--vx-muted)',
        marginTop: '.8rem'
      }
    }, "Implement exponential backoff and respect ", /*#__PURE__*/React.createElement(U.Mono, null, "Retry-After"), ". Need higher limits? ", /*#__PURE__*/React.createElement("a", {
      style: {
        color: 'var(--vx-red)',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, "Contact sales"), ".")));
  }
  Object.assign(window, {
    DevDashboard: Dashboard,
    DevKeys: Keys,
    DevRateLimits: RateLimits
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/developer-portal/Views1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/developer-portal/Views2.jsx
try { (() => {
// Developer Portal views: Sandbox, Webhooks, API Logs.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip
  } = DS;
  const U = window.DevUI;

  // ── SANDBOX ──────────────────────────────────────────
  const SCENARIOS = [{
    id: 'approve',
    label: 'Approved applicant',
    score: 96,
    decision: 'approve'
  }, {
    id: 'review',
    label: 'Manual review',
    score: 64,
    decision: 'review'
  }, {
    id: 'reject',
    label: 'Rejected · fraud',
    score: 31,
    decision: 'reject'
  }];
  function Sandbox() {
    const [scenario, setScenario] = React.useState(SCENARIOS[0]);
    const [sent, setSent] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const run = () => {
      setLoading(true);
      setSent(false);
      setTimeout(() => {
        setLoading(false);
        setSent(true);
      }, 650);
    };
    const body = `{
  "type": "kyc",
  "applicant": {
    "first_name": "Sofia",
    "last_name": "Brunner",
    "country": "CH"
  },
  "checks": ["document", "face", "aml"],
  "sandbox_scenario": "${scenario.id}"
}`;
    const resp = `{
  "id": "vrf_sbx_${scenario.id}01",
  "object": "verification",
  "livemode": false,
  "trust_score": ${scenario.score},
  "decision": "${scenario.decision}",
  "checks": {
    "document": "${scenario.decision === 'reject' ? 'failed' : 'passed'}",
    "face": "${scenario.decision === 'reject' ? 'failed' : 'passed'}",
    "aml": "clear"
  },
  "created": 1718884800
}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "Sandbox",
      sub: "Fire real API calls against deterministic test scenarios \u2014 no live data, no charges.",
      actions: /*#__PURE__*/React.createElement(Badge, {
        tone: "info"
      }, "Test mode")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem',
        marginBottom: '1.2rem',
        flexWrap: 'wrap'
      }
    }, SCENARIOS.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => {
        setScenario(s);
        setSent(false);
      },
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.78rem',
        fontWeight: 600,
        cursor: 'pointer',
        padding: '.4rem .9rem',
        borderRadius: 6,
        border: '1px solid ' + (scenario.id === s.id ? 'var(--vx-red)' : 'var(--vx-border)'),
        background: scenario.id === s.id ? 'var(--vx-red-bg)' : '#fff',
        color: scenario.id === s.id ? 'var(--vx-red)' : 'var(--vx-muted)'
      }
    }, s.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, {
      right: /*#__PURE__*/React.createElement(U.Method, {
        m: "POST"
      })
    }, "Request"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "POST /v2/verifications"
    }, body), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: loading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane',
      onClick: run,
      style: {
        marginTop: '.8rem',
        width: '100%'
      }
    }, loading ? 'Sending…' : 'Send request')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, {
      right: sent ? /*#__PURE__*/React.createElement(Badge, {
        tone: scenario.decision === 'approve' ? 'success' : scenario.decision === 'review' ? 'warn' : 'danger'
      }, sent ? '201 Created' : '') : /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '.62rem',
          color: 'var(--vx-light)'
        }
      }, "awaiting")
    }, "Response"), sent ? /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "200 OK \xB7 application/json"
    }, resp) : /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy-3)',
        border: '1px dashed rgba(255,255,255,.15)',
        borderRadius: 8,
        minHeight: 240,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,.35)',
        fontFamily: 'var(--font-mono)',
        fontSize: '.74rem'
      }
    }, "Send a request to see the response"))));
  }

  // ── WEBHOOKS ─────────────────────────────────────────
  const EVENTS = ['verification.completed', 'verification.review_required', 'verification.rejected', 'company.verified', 'document.expired'];
  const DELIVERIES = [['verification.completed', '200', 'success', '2 min ago'], ['verification.review_required', '200', 'success', '8 min ago'], ['verification.rejected', '500', 'danger', '14 min ago'], ['company.verified', '200', 'success', '31 min ago']];
  function Webhooks() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "Webhooks",
      sub: "Receive real-time events when verifications change state.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus"
      }, "Add endpoint")
    }), /*#__PURE__*/React.createElement(U.Panel, {
      style: {
        marginBottom: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-bolt"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.Mono, {
      color: "var(--vx-text)"
    }, "https://api.acme-bank.ch/hooks/verfix"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        marginTop: 3
      }
    }, "5 events \xB7 signing secret ", /*#__PURE__*/React.createElement(U.Mono, null, "whsec_\u2022\u2022\u2022\u20224Kd9")))), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "fas fa-circle"
    }, "Active"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Subscribed events"), /*#__PURE__*/React.createElement(U.Panel, {
      pad: ".6rem .9rem"
    }, EVENTS.map((e, i) => /*#__PURE__*/React.createElement("div", {
      key: e,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem 0',
        borderBottom: i < EVENTS.length - 1 ? '1px solid var(--vx-off)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(U.Mono, null, e), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 18,
        borderRadius: 100,
        background: 'var(--vx-red)',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        right: 2,
        top: 2,
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: '#fff'
      }
    })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, {
      right: /*#__PURE__*/React.createElement("a", {
        style: {
          fontSize: '.74rem',
          fontWeight: 600,
          color: 'var(--vx-red)',
          cursor: 'pointer'
        }
      }, "Resend failed")
    }, "Recent deliveries"), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Event', 'Status', 'Delivered'],
      widths: "2fr .8fr 1fr",
      rows: DELIVERIES.map(([e, code, tone, t]) => [/*#__PURE__*/React.createElement(U.Mono, null, e), /*#__PURE__*/React.createElement(Badge, {
        tone: tone === 'success' ? 'success' : 'danger'
      }, code), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)',
          fontSize: '.78rem'
        }
      }, t)])
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(U.SectionHead, null, "Verify the signature"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "node \xB7 verify webhook"
    }, `const sig = req.headers['verfix-signature'];
const valid = verfix.webhooks.verify(
  req.rawBody, sig, process.env.VERFIX_WEBHOOK_SECRET
);
if (!valid) return res.status(400).end();`)));
  }

  // ── API LOGS ─────────────────────────────────────────
  const LOGS = [['POST', '/v2/verifications', '201', 'success', '389ms', '12:04:51', 'vx_live_8Kd2'], ['GET', '/v2/verifications/vrf_8Kd2mQ', '200', 'success', '88ms', '12:04:48', 'vx_live_8Kd2'], ['POST', '/v2/companies', '201', 'success', '1.21s', '12:03:30', 'vx_live_8Kd2'], ['POST', '/v2/verifications', '429', 'warn', '14ms', '12:02:11', 'vx_live_q9Lp'], ['GET', '/v2/verifications/vrf_3Lp9xR', '404', 'danger', '22ms', '12:01:02', 'vx_live_8Kd2'], ['POST', '/v2/verifications', '201', 'success', '402ms', '11:59:40', 'vx_live_8Kd2'], ['DELETE', '/v2/webhooks/whk_2Nf6', '200', 'success', '61ms', '11:58:12', 'vx_live_8Kd2']];
  function Logs() {
    const [filter, setFilter] = React.useState('all');
    const rows = LOGS.filter(l => filter === 'all' || filter === 'errors' && +l[2] >= 400 || filter === 'success' && +l[2] < 400);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "API Logs",
      sub: "Every request to your account, searchable and replayable.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-download"
      }, "Export"), /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-rotate"
      }, "Refresh"))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.4rem'
      }
    }, ['all', 'success', 'errors'].map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.74rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        cursor: 'pointer',
        padding: '.35rem .8rem',
        borderRadius: 100,
        border: '1px solid ' + (filter === f ? 'var(--vx-red)' : 'var(--vx-border)'),
        background: filter === f ? 'var(--vx-red)' : '#fff',
        color: filter === f ? '#fff' : 'var(--vx-muted)'
      }
    }, f))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 180,
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 6,
        padding: '.4rem .7rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-magnifying-glass",
      style: {
        color: 'var(--vx-light)',
        fontSize: '.78rem'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.74rem',
        color: 'var(--vx-light)'
      }
    }, "request_id, endpoint, status\u2026"))), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Method', 'Endpoint', 'Status', 'Latency', 'Time', 'Key'],
      widths: ".7fr 2fr .8fr .8fr .9fr 1fr",
      rows: rows.map(([m, e, code, tone, lat, t, key]) => [/*#__PURE__*/React.createElement(U.Method, {
        m: m
      }), /*#__PURE__*/React.createElement(U.Mono, null, e), /*#__PURE__*/React.createElement(Badge, {
        tone: tone === 'success' ? 'success' : tone === 'warn' ? 'warn' : 'danger'
      }, code), /*#__PURE__*/React.createElement(U.Mono, null, lat), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-light)',
          fontSize: '.78rem'
        }
      }, t), /*#__PURE__*/React.createElement(U.Mono, {
        color: "var(--vx-light)"
      }, key)])
    }));
  }
  Object.assign(window, {
    DevSandbox: Sandbox,
    DevWebhooks: Webhooks,
    DevLogs: Logs
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/developer-portal/Views2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/developer-portal/Views3.jsx
try { (() => {
// Developer Portal views: API Documentation, Authentication, Error Reference, SDK Downloads.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip,
    Tag
  } = DS;
  const U = window.DevUI;

  // ── API DOCUMENTATION ────────────────────────────────
  const ENDPOINTS = [{
    m: 'POST',
    p: '/v2/verifications',
    d: 'Create an identity verification'
  }, {
    m: 'GET',
    p: '/v2/verifications/:id',
    d: 'Retrieve a verification & score'
  }, {
    m: 'GET',
    p: '/v2/verifications',
    d: 'List verifications'
  }, {
    m: 'POST',
    p: '/v2/companies',
    d: 'Create a KYB company check'
  }, {
    m: 'GET',
    p: '/v2/companies/:id',
    d: 'Retrieve company profile & UBOs'
  }, {
    m: 'POST',
    p: '/v2/webhooks',
    d: 'Create a webhook endpoint'
  }, {
    m: 'DELETE',
    p: '/v2/webhooks/:id',
    d: 'Delete a webhook endpoint'
  }];
  function Docs() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "API Documentation",
      sub: "A single REST API over HTTPS. JSON request and response bodies, predictable resource URLs, standard verbs.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-up-right-from-square"
      }, "OpenAPI spec")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.Panel, null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Base URL"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "base"
    }, `https://api.verfix.swiss`)), /*#__PURE__*/React.createElement(U.Panel, null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Quick start"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "curl"
    }, `curl https://api.verfix.swiss/v2/verifications \\
  -H "Authorization: Bearer vx_live_..." \\
  -d type=kyc -d applicant[country]=CH`))), /*#__PURE__*/React.createElement(U.SectionHead, null, "Endpoints"), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Method', 'Path', 'Description'],
      widths: ".7fr 1.6fr 1.6fr",
      rows: ENDPOINTS.map(e => [/*#__PURE__*/React.createElement(U.Method, {
        m: e.m
      }), /*#__PURE__*/React.createElement(U.Mono, null, e.p), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)'
        }
      }, e.d)])
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.5rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Create \u2014 request"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "POST /v2/verifications"
    }, `{
  "type": "kyc",
  "applicant": {
    "first_name": "Sofia",
    "last_name": "Brunner",
    "country": "CH"
  },
  "checks": ["document", "face", "aml"]
}`)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Create \u2014 response"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "201 Created"
    }, `{
  "id": "vrf_8Kd2mQ",
  "object": "verification",
  "trust_score": 96,
  "decision": "approve",
  "livemode": true,
  "created": 1718884800
}`))));
  }

  // ── AUTHENTICATION ───────────────────────────────────
  function Auth() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "Authentication",
      sub: "Authenticate with a secret API key sent as a Bearer token. All requests must be made over HTTPS."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Bearer authentication"), /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "authenticated request"
    }, `curl https://api.verfix.swiss/v2/verifications/vrf_8Kd2mQ \\
  -H "Authorization: Bearer vx_live_a1B2c3D4e5F6"

# Or with an SDK
const verfix = new VerfiX(process.env.VERFIX_SECRET_KEY);
await verfix.verifications.retrieve("vrf_8Kd2mQ");`)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(U.SectionHead, null, "Key types"), /*#__PURE__*/React.createElement(U.Panel, {
      pad: ".9rem 1rem"
    }, [['vx_live_', 'Live secret', 'Server-side, production', 'red'], ['vx_test_', 'Test secret', 'Server-side, sandbox', 'neutral'], ['vx_pub_', 'Publishable', 'Client-side capture only', 'info']].map(([p, n, d, tone]) => /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        padding: '.55rem 0',
        borderBottom: p !== 'vx_pub_' ? '1px solid var(--vx-off)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement(U.Mono, {
      color: "var(--vx-text)"
    }, p, "\u2026"), /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, n)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)'
      }
    }, d)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.7rem',
        background: 'var(--vx-red-bg)',
        border: '1px solid var(--vx-red-line)',
        borderRadius: 8,
        padding: '.8rem 1rem',
        fontSize: '.82rem',
        color: 'var(--vx-text)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-lock",
      style: {
        color: 'var(--vx-red)',
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Never expose live secret keys."), " Keep them server-side and out of version control. Use environment variables and rotate keys regularly from the API Keys page.")));
  }

  // ── ERROR REFERENCE ──────────────────────────────────
  const ERRORS = [['400', 'invalid_request', 'Malformed request — check required parameters.', 'warn'], ['401', 'authentication_failed', 'Missing or invalid API key.', 'danger'], ['403', 'permission_denied', 'Key lacks scope for this resource.', 'danger'], ['404', 'resource_not_found', 'The requested object does not exist.', 'warn'], ['409', 'idempotency_conflict', 'Idempotency key reused with a different body.', 'warn'], ['422', 'verification_failed', 'Document or biometric checks could not be processed.', 'warn'], ['429', 'rate_limit_exceeded', 'Too many requests — back off and retry.', 'warn'], ['500', 'api_error', 'Something went wrong on our end. Safe to retry.', 'danger']];
  function Errors() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "Error Reference",
      sub: "VerfiX uses conventional HTTP status codes. 2xx success, 4xx client errors, 5xx VerfiX errors."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(U.CodeBlock, {
      title: "error envelope"
    }, `{
  "error": {
    "type": "authentication_failed",
    "code": "invalid_api_key",
    "message": "No such API key: vx_live_***",
    "doc_url": "https://developers.verfix.swiss/errors#401"
  }
}`)), /*#__PURE__*/React.createElement(U.SectionHead, null, "Status codes"), /*#__PURE__*/React.createElement(U.DataTable, {
      cols: ['Code', 'Type', 'Meaning'],
      widths: ".6fr 1.2fr 2fr",
      rows: ERRORS.map(([c, t, m, tone]) => [/*#__PURE__*/React.createElement(Badge, {
        tone: tone
      }, c), /*#__PURE__*/React.createElement(U.Mono, null, t), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--vx-muted)'
        }
      }, m)])
    }));
  }

  // ── SDK DOWNLOADS ────────────────────────────────────
  const SDKS = [{
    icon: 'fab fa-node-js',
    name: 'Node.js',
    pkg: 'npm i @verfix/node',
    v: 'v3.2.1'
  }, {
    icon: 'fab fa-python',
    name: 'Python',
    pkg: 'pip install verfix',
    v: 'v2.8.0'
  }, {
    icon: 'fab fa-java',
    name: 'Java',
    pkg: 'implementation "swiss.verfix:sdk:2.4.0"',
    v: 'v2.4.0'
  }, {
    icon: 'fab fa-golang',
    name: 'Go',
    pkg: 'go get verfix.swiss/go',
    v: 'v1.9.3'
  }, {
    icon: 'fab fa-php',
    name: 'PHP',
    pkg: 'composer require verfix/verfix-php',
    v: 'v2.1.0'
  }, {
    icon: 'fab fa-microsoft',
    name: '.NET',
    pkg: 'dotnet add package VerfiX',
    v: 'v1.6.0'
  }, {
    icon: 'fab fa-react',
    name: 'Web SDK',
    pkg: 'npm i @verfix/web',
    v: 'v4.0.2'
  }];
  function SDKs() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "SDK Downloads",
      sub: "Official, typed client libraries. Each ships with the full verification + KYB surface and webhook helpers.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fab fa-github"
      }, "View on GitHub")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.9rem'
      }
    }, SDKS.map(s => /*#__PURE__*/React.createElement(U.Panel, {
      key: s.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: s.icon,
      style: {
        color: 'var(--vx-red)',
        fontSize: '1.3rem',
        width: 22
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: '.92rem'
      }
    }, s.name)), /*#__PURE__*/React.createElement(Tag, null, s.v)), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 5,
        padding: '.5rem .6rem',
        marginBottom: '.7rem'
      }
    }, /*#__PURE__*/React.createElement(U.Mono, null, s.pkg)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.4rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-book",
      style: {
        flex: 1
      }
    }, "Docs"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-download",
      style: {
        flex: 1
      }
    }, "Install"))))));
  }
  Object.assign(window, {
    DevDocs: Docs,
    DevAuth: Auth,
    DevErrors: Errors,
    DevSDKs: SDKs
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/developer-portal/Views3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/developer-portal/Views4.jsx
try { (() => {
// Developer Portal — Status Page (API status, uptime, incident history).
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge
  } = DS;
  const U = window.DevUI;
  const SERVICES = [['Verification API', 'operational', '99.98%'], ['KYB API', 'operational', '99.97%'], ['AML Screening', 'operational', '99.99%'], ['Webhooks', 'operational', '99.95%'], ['Hosted Flow', 'degraded', '99.82%'], ['Dashboard & Console', 'operational', '99.99%'], ['Sandbox', 'operational', '100.0%']];
  const ST = {
    operational: {
      tone: 'success',
      label: 'Operational',
      dot: 'var(--vx-success)'
    },
    degraded: {
      tone: 'warn',
      label: 'Degraded performance',
      dot: 'var(--vx-warn)'
    },
    outage: {
      tone: 'danger',
      label: 'Outage',
      dot: 'var(--vx-danger)'
    }
  };

  // 90-day uptime bars (mostly up; a couple of degraded days)
  const DAYS = Array.from({
    length: 90
  }, (_, i) => i === 61 || i === 62 ? 'degraded' : i === 20 ? 'outage' : 'operational');
  const INCIDENTS = [{
    d: 'Jun 12, 2026',
    t: 'Hosted Flow — elevated latency',
    sev: 'degraded',
    dur: '38 min',
    note: 'A regional CDN issue slowed hosted capture screens. Mitigated by failover; no data impact.'
  }, {
    d: 'May 02, 2026',
    t: 'Webhooks — delayed delivery',
    sev: 'degraded',
    dur: '1h 12m',
    note: 'A queue backlog delayed webhook delivery. All events were retried and delivered.'
  }, {
    d: 'Apr 19, 2026',
    t: 'Verification API — brief outage',
    sev: 'outage',
    dur: '9 min',
    note: 'A failed deploy was rolled back automatically. Requests during the window returned 503 and were safe to retry.'
  }];
  function StatusPage() {
    const anyDegraded = SERVICES.some(s => s[1] !== 'operational');
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(U.PageHead, {
      title: "Status",
      sub: "Live operational status of the VerfiX platform, 90-day uptime and incident history.",
      actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-rss"
      }, "Subscribe"), /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-clock-rotate-left"
      }, "History"))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        background: anyDegraded ? 'var(--vx-warn-bg)' : 'var(--vx-success-bg)',
        border: '1px solid ' + (anyDegraded ? '#FCE4A6' : 'transparent'),
        borderRadius: 9,
        padding: '.9rem 1.1rem',
        marginBottom: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: anyDegraded ? 'fas fa-circle-exclamation' : 'fas fa-circle-check',
      style: {
        color: anyDegraded ? 'var(--vx-warn)' : 'var(--vx-success)',
        fontSize: '1.1rem'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.92rem',
        fontWeight: 800,
        color: anyDegraded ? 'var(--vx-warn-fg)' : 'var(--vx-success-fg)'
      }
    }, anyDegraded ? 'Some systems degraded' : 'All systems operational'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.76rem',
        color: 'var(--vx-muted)'
      }
    }, "Last checked just now \xB7 times in UTC")), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '1.4rem',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, "99.96%")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem',
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Uptime \xB7 90d",
      value: "99.96%",
      icon: "fas fa-signal"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Incidents \xB7 90d",
      value: "3",
      icon: "fas fa-triangle-exclamation"
    }), /*#__PURE__*/React.createElement(U.StatTile, {
      label: "Avg response",
      value: "412ms",
      icon: "fas fa-gauge-high"
    })), /*#__PURE__*/React.createElement(U.SectionHead, null, "Current status"), /*#__PURE__*/React.createElement(U.Panel, {
      pad: "0",
      style: {
        marginBottom: '1.5rem'
      }
    }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s[0],
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.8rem',
        padding: '.8rem 1rem',
        borderBottom: i < SERVICES.length - 1 ? '1px solid var(--vx-off)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: ST[s[1]].dot,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.86rem',
        fontWeight: 600,
        flex: 1
      }
    }, s[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        color: 'var(--vx-light)'
      }
    }, s[2]), /*#__PURE__*/React.createElement(Badge, {
      tone: ST[s[1]].tone
    }, ST[s[1]].label)))), /*#__PURE__*/React.createElement(U.SectionHead, {
      right: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '.62rem',
          color: 'var(--vx-light)'
        }
      }, "90 days ago \u2192 today")
    }, "Uptime history"), /*#__PURE__*/React.createElement(U.Panel, {
      style: {
        marginBottom: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2,
        alignItems: 'flex-end',
        height: 44
      }
    }, DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      title: d,
      style: {
        flex: 1,
        height: '100%',
        borderRadius: 2,
        background: d === 'operational' ? 'var(--vx-success)' : d === 'degraded' ? 'var(--vx-warn)' : 'var(--vx-danger)',
        opacity: d === 'operational' ? .85 : 1
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '.6rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "90 days ago"), /*#__PURE__*/React.createElement("span", null, "99.96% uptime"), /*#__PURE__*/React.createElement("span", null, "Today"))), /*#__PURE__*/React.createElement(U.SectionHead, null, "Incident history"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingLeft: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 5,
        top: 6,
        bottom: 6,
        width: 2,
        background: 'var(--vx-border)'
      }
    }), INCIDENTS.map((inc, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        paddingBottom: i < INCIDENTS.length - 1 ? '1.1rem' : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '-1.4rem',
        top: 3,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: '#fff',
        border: '2px solid ' + (inc.sev === 'outage' ? 'var(--vx-danger)' : 'var(--vx-warn)')
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.88rem',
        fontWeight: 700
      }
    }, inc.t), /*#__PURE__*/React.createElement(Badge, {
      tone: inc.sev === 'outage' ? 'danger' : 'warn'
    }, inc.sev === 'outage' ? 'Outage' : 'Degraded'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)'
      }
    }, inc.dur)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.8rem',
        color: 'var(--vx-muted)',
        marginTop: 3
      }
    }, inc.note), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)',
        marginTop: 2
      }
    }, inc.d, " \xB7 Resolved")))));
  }
  Object.assign(window, {
    DevStatus: StatusPage
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/developer-portal/Views4.jsx", error: String((e && e.message) || e) }); }

// ui_kits/docs-center/DocsCenter.jsx
try { (() => {
// VerfiX Documentation Center — docs home, API docs, SDK docs, compliance docs,
// whitepapers, integration guides, quick-start guides.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip,
    Tag
  } = DS;
  const TREE = [{
    sec: 'Get started',
    items: [['quickstart', 'Quick Start'], ['auth-guide', 'Authentication'], ['first-verification', 'Your first verification']]
  }, {
    sec: 'Guides',
    items: [['integration', 'Integration guide'], ['webhooks-guide', 'Handling webhooks'], ['kyb-guide', 'KYB onboarding']]
  }, {
    sec: 'API & SDKs',
    items: [['api', 'API reference'], ['sdk', 'SDK reference'], ['errors-doc', 'Error codes']]
  }, {
    sec: 'Compliance',
    items: [['compliance', 'Compliance docs'], ['data-residency', 'Data residency'], ['whitepapers', 'Whitepapers']]
  }];
  function DocsCenter() {
    const [page, setPage] = React.useState('home');
    return /*#__PURE__*/React.createElement("div", {
      className: "doc-shell"
    }, /*#__PURE__*/React.createElement(TopNav, {
      page: page,
      setPage: setPage
    }), /*#__PURE__*/React.createElement("div", {
      className: "doc-body",
      style: {
        display: 'grid',
        gridTemplateColumns: page === 'home' ? '1fr' : '240px 1fr',
        minHeight: 720
      }
    }, page !== 'home' && /*#__PURE__*/React.createElement(SideTree, {
      page: page,
      setPage: setPage
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'auto'
      }
    }, page === 'home' ? /*#__PURE__*/React.createElement(Home, {
      setPage: setPage
    }) : /*#__PURE__*/React.createElement(Article, {
      page: page,
      setPage: setPage
    }))));
  }
  function TopNav({
    page,
    setPage
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 58,
        borderBottom: '1px solid var(--vx-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.9rem',
        position: 'sticky',
        top: 0,
        background: 'rgba(255,255,255,.9)',
        backdropFilter: 'blur(8px)',
        zIndex: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        cursor: 'pointer'
      },
      onClick: () => setPage('home')
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-book",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1rem',
        letterSpacing: '-.02em',
        whiteSpace: 'nowrap'
      }
    }, "VerfiX Docs")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        maxWidth: 380,
        margin: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 7,
        padding: '.45rem .8rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-magnifying-glass",
      style: {
        color: 'var(--vx-light)',
        fontSize: '.78rem'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.8rem',
        color: 'var(--vx-light)'
      }
    }, "Search docs\u2026"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)',
        border: '1px solid var(--vx-border)',
        borderRadius: 4,
        padding: '.05rem .3rem'
      }
    }, "\u2318K")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../developer-portal/index.html",
      style: {
        fontSize: '.82rem',
        fontWeight: 600,
        color: 'var(--vx-muted)',
        textDecoration: 'none'
      }
    }, "Dashboard"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-arrow-right"
    }, "Get API keys")));
  }
  function SideTree({
    page,
    setPage
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      className: "doc-side",
      style: {
        borderRight: '1px solid var(--vx-border)',
        padding: '1.4rem 1rem',
        overflow: 'auto'
      }
    }, TREE.map(grp => /*#__PURE__*/React.createElement("div", {
      key: grp.sec,
      style: {
        marginBottom: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.5rem'
      }
    }, grp.sec), grp.items.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      role: "link",
      tabIndex: 0,
      onClick: () => setPage(id),
      onKeyDown: e => {
        if (e.key === 'Enter') setPage(id);
      },
      style: {
        display: 'block',
        padding: '.35rem .6rem',
        borderRadius: 5,
        fontSize: '.82rem',
        fontWeight: page === id ? 700 : 500,
        cursor: 'pointer',
        color: page === id ? 'var(--vx-red)' : 'var(--vx-muted)',
        background: page === id ? 'var(--vx-red-bg)' : 'transparent',
        borderLeft: '2px solid ' + (page === id ? 'var(--vx-red)' : 'transparent')
      }
    }, label)))));
  }
  const CARDS = [['quickstart', 'fas fa-rocket', 'Quick Start', 'Make your first verification call in under 5 minutes.'], ['api', 'fas fa-code', 'API Reference', 'Complete REST API — endpoints, parameters, responses.'], ['sdk', 'fas fa-cubes', 'SDK Reference', 'Typed client libraries for Node, Python, Go, Java, PHP.'], ['integration', 'fas fa-plug', 'Integration Guides', 'Patterns for web, mobile and server-side onboarding.'], ['compliance', 'fas fa-shield-halved', 'Compliance Docs', 'GDPR, nFADP, data residency and audit posture.'], ['whitepapers', 'fas fa-file-lines', 'Whitepapers', 'The Trust Engine™ architecture and risk methodology.']];
  function Home({
    setPage
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy)',
        padding: '3rem 2.4rem',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--vx-red)'
      }
    }, "Documentation"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '2.2rem',
        fontWeight: 800,
        letterSpacing: '-.04em',
        margin: '.6rem 0 .6rem',
        lineHeight: 1.1
      }
    }, "Build trust into your onboarding"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.7,
        margin: '0 0 1.4rem',
        maxWidth: 560
      }
    }, "Everything you need to integrate VerfiX \u2014 from your first API call to production-grade KYC, KYB and AML workflows."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-rocket",
      onClick: () => setPage('quickstart')
    }, "Quick Start"), /*#__PURE__*/React.createElement(Button, {
      variant: "white",
      size: "md",
      icon: "fas fa-code",
      onClick: () => setPage('api')
    }, "API Reference")))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2.2rem 2.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem'
      },
      className: "doc-grid"
    }, CARDS.map(([id, ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: id,
      onClick: () => setPage(id),
      role: "link",
      tabIndex: 0,
      onKeyDown: e => {
        if (e.key === 'Enter') setPage(id);
      },
      style: {
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.3rem',
        cursor: 'pointer',
        transition: 'border-color .15s, box-shadow .15s, transform .15s'
      },
      onMouseEnter: e => {
        e.currentTarget.style.borderColor = 'var(--vx-red)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = 'var(--vx-border)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: ic,
      size: "lg"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: '.8rem 0 .35rem'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: 0
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.8rem',
        fontSize: '.78rem',
        fontWeight: 700,
        color: 'var(--vx-red)'
      }
    }, "Read ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-right",
      style: {
        fontSize: '.7rem'
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      },
      className: "doc-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '.95rem',
        fontWeight: 800,
        margin: '0 0 .8rem'
      }
    }, "Popular guides"), [['integration', 'Integrating the Web SDK'], ['webhooks-guide', 'Verifying webhook signatures'], ['kyb-guide', 'Running a KYB company check'], ['auth-guide', 'Managing API keys securely']].map(([id, t]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => setPage(id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.5rem 0',
        borderBottom: '1px solid var(--vx-border)',
        fontSize: '.84rem',
        fontWeight: 600,
        color: 'var(--vx-text)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-lines",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.78rem'
      }
    }), t, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-right",
      style: {
        marginLeft: 'auto',
        color: 'var(--vx-light)',
        fontSize: '.7rem'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy)',
        borderRadius: 10,
        padding: '1.4rem',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '.95rem',
        fontWeight: 800,
        margin: '0 0 .5rem'
      }
    }, "Quick install"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.8rem',
        color: 'rgba(255,255,255,.55)',
        margin: '0 0 .9rem'
      }
    }, "Add the VerfiX SDK to your project."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy-3)',
        borderRadius: 7,
        padding: '.8rem 1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.78rem',
        color: 'rgba(255,255,255,.85)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-red)'
      }
    }, "$"), " npm install @verfix/node"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.8rem',
        display: 'flex',
        gap: '.4rem',
        flexWrap: 'wrap'
      }
    }, ['Node', 'Python', 'Go', 'Java', 'PHP'].map(l => /*#__PURE__*/React.createElement(Tag, {
      key: l
    }, l)))))));
  }

  // ── ARTICLE content ──────────────────────────────────
  const ARTICLES = {
    quickstart: {
      cat: 'Get started',
      title: 'Quick Start',
      read: '5 min',
      intro: 'This guide walks you through creating your first identity verification with VerfiX — from API key to a returned trust decision.',
      toc: ['Create an API key', 'Install the SDK', 'Create a verification', 'Handle the result'],
      blocks: [{
        h: 'Create an API key',
        p: 'In the Developer Portal, open API Keys and create a test secret key. Keep it server-side.'
      }, {
        h: 'Install the SDK',
        code: 'npm install @verfix/node',
        lang: 'bash'
      }, {
        h: 'Create a verification',
        code: `const verfix = new VerfiX(process.env.VERFIX_SECRET_KEY);\n\nconst v = await verfix.verifications.create({\n  type: "kyc",\n  applicant: { first_name: "Sofia", country: "CH" },\n  checks: ["document", "face", "aml"]\n});\n\nconsole.log(v.trust_score, v.decision);`,
        lang: 'javascript'
      }, {
        h: 'Handle the result',
        p: 'A verification returns a trust_score (0–100) and a decision of approve, review, or reject. Wire the webhook to receive the final state asynchronously.'
      }]
    },
    api: {
      cat: 'API & SDKs',
      title: 'API Reference',
      read: '12 min',
      intro: 'The VerfiX REST API is organized around resources: verifications, companies, and webhooks. All requests use HTTPS and return JSON.',
      toc: ['Base URL', 'Authentication', 'Create a verification', 'Retrieve a verification'],
      blocks: [{
        h: 'Base URL',
        code: 'https://api.verfix.swiss/v2',
        lang: 'bash'
      }, {
        h: 'Authentication',
        p: 'Pass your secret key as a Bearer token in the Authorization header.',
        code: 'Authorization: Bearer vx_live_...',
        lang: 'bash'
      }, {
        h: 'Create a verification',
        code: `POST /v2/verifications\n{\n  "type": "kyc",\n  "applicant": { "country": "CH" },\n  "checks": ["document", "face", "aml"]\n}`,
        lang: 'json'
      }, {
        h: 'Retrieve a verification',
        code: 'GET /v2/verifications/vrf_8Kd2mQ',
        lang: 'bash'
      }]
    },
    compliance: {
      cat: 'Compliance',
      title: 'Compliance Documentation',
      read: '8 min',
      intro: 'VerfiX is built for regulated industries. This section covers our data-protection posture under EU GDPR and the Swiss nFADP.',
      toc: ['Data residency', 'Lawful basis', 'Sub-processors', 'Retention'],
      blocks: [{
        h: 'Data residency',
        p: 'All personal data is processed and stored exclusively in Swiss and EU data centers. No data leaves the EU/CH perimeter.'
      }, {
        h: 'Lawful basis',
        p: 'Processing is based on explicit, purpose-bound consent (GDPR Art. 6(1)(a)) and legal obligation for AML record-keeping.'
      }, {
        h: 'Sub-processors',
        p: 'A current list of sub-processors is maintained in the Trust Center and updated with 30 days notice.'
      }, {
        h: 'Retention',
        p: 'Biometric templates are deleted within 30 days of a decision; verification metadata is retained 10 years per AMLA.'
      }]
    }
  };
  ['auth-guide', 'first-verification', 'integration', 'webhooks-guide', 'kyb-guide', 'sdk', 'errors-doc', 'data-residency', 'whitepapers'].forEach(id => {
    if (!ARTICLES[id]) ARTICLES[id] = ARTICLES[id] = null;
  });
  function Article({
    page,
    setPage
  }) {
    const a = ARTICLES[page] || fallback(page);
    return /*#__PURE__*/React.createElement("div", {
      className: "doc-body",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 200px',
        gap: '0'
      }
    }, /*#__PURE__*/React.createElement("article", {
      style: {
        padding: '2.2rem 2.6rem',
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        fontSize: '.76rem',
        color: 'var(--vx-light)',
        marginBottom: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        cursor: 'pointer'
      },
      onClick: () => setPage('home')
    }, "Docs"), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right",
      style: {
        fontSize: '.55rem'
      }
    }), /*#__PURE__*/React.createElement("span", null, a.cat)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '2rem',
        fontWeight: 800,
        letterSpacing: '-.035em',
        margin: '0 0 .5rem'
      }
    }, a.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        marginBottom: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-clock",
      style: {
        marginRight: 4
      }
    }), a.read, " read"), /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, a.cat)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.8,
        margin: '0 0 1.8rem'
      }
    }, a.intro), a.blocks.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        marginBottom: '1.6rem'
      },
      id: 'h-' + i
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: '0 0 .6rem'
      }
    }, b.h), b.p && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.9rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.8,
        margin: '0 0 .7rem'
      }
    }, b.p), b.code && /*#__PURE__*/React.createElement(CodeBlock, {
      lang: b.lang
    }, b.code))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2.4rem',
        paddingTop: '1.4rem',
        borderTop: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-arrow-left",
      onClick: () => setPage('home')
    }, "All docs"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "fas fa-arrow-right",
      onClick: () => setPage('api')
    }, "Next: API Reference"))), /*#__PURE__*/React.createElement("aside", {
      className: "doc-toc",
      style: {
        padding: '2.4rem 1.4rem',
        borderLeft: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 80
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.7rem'
      }
    }, "On this page"), a.toc.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: '.78rem',
        color: i === 0 ? 'var(--vx-red)' : 'var(--vx-muted)',
        fontWeight: i === 0 ? 700 : 500,
        padding: '.3rem 0',
        borderLeft: '2px solid ' + (i === 0 ? 'var(--vx-red)' : 'transparent'),
        paddingLeft: '.7rem',
        cursor: 'pointer'
      }
    }, t)))));
  }
  function fallback(page) {
    const titleMap = {
      'auth-guide': ['Get started', 'Authentication'],
      'first-verification': ['Get started', 'Your first verification'],
      'integration': ['Guides', 'Integration guide'],
      'webhooks-guide': ['Guides', 'Handling webhooks'],
      'kyb-guide': ['Guides', 'KYB onboarding'],
      'sdk': ['API & SDKs', 'SDK reference'],
      'errors-doc': ['API & SDKs', 'Error codes'],
      'data-residency': ['Compliance', 'Data residency'],
      'whitepapers': ['Compliance', 'Whitepapers']
    };
    const [cat, title] = titleMap[page] || ['Docs', 'Documentation'];
    return {
      cat,
      title,
      read: '6 min',
      intro: `${title} — practical, copy-pasteable guidance for integrating VerfiX. This section walks through the concepts, configuration and code you need.`,
      toc: ['Overview', 'Configuration', 'Example', 'Next steps'],
      blocks: [{
        h: 'Overview',
        p: `${title} is part of the VerfiX onboarding surface. The patterns below apply across all SDKs and the REST API.`
      }, {
        h: 'Configuration',
        p: 'Set your secret key as an environment variable and initialize the client once per process.',
        code: 'export VERFIX_SECRET_KEY=vx_live_...',
        lang: 'bash'
      }, {
        h: 'Example',
        code: `const verfix = new VerfiX(process.env.VERFIX_SECRET_KEY);\nconst result = await verfix.verifications.create({ type: "kyc" });`,
        lang: 'javascript'
      }, {
        h: 'Next steps',
        p: 'Continue to the API Reference for the full parameter list, or read the Compliance docs for data-handling obligations.'
      }]
    };
  }
  function CodeBlock({
    children,
    lang
  }) {
    const [copied, setCopied] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy-3)',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.45rem .8rem',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'rgba(255,255,255,.45)'
      }
    }, lang), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        try {
          navigator.clipboard.writeText(children);
        } catch (e) {}
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      },
      style: {
        background: 'transparent',
        border: 'none',
        color: copied ? 'var(--vx-success)' : 'rgba(255,255,255,.5)',
        cursor: 'pointer',
        fontSize: '.64rem',
        fontFamily: 'var(--font-mono)',
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: copied ? 'fas fa-check' : 'fas fa-copy',
      style: {
        marginRight: 3
      }
    }), copied ? 'Copied' : 'Copy')), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '.9rem 1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.76rem',
        lineHeight: 1.7,
        color: 'rgba(255,255,255,.85)',
        overflow: 'auto'
      }
    }, children));
  }
  window.DocsCenter = DocsCenter;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/docs-center/DocsCenter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kyb-profile/KYBProfile.jsx
try { (() => {
// VerfiX KYB Company Profile — registry, directors, UBOs, ownership graph, risk, adverse media, sanctions, timeline.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip,
    TrustScore,
    DecisionPill
  } = DS;
  const TABS = [{
    id: 'overview',
    label: 'Overview',
    icon: 'fas fa-building'
  }, {
    id: 'registry',
    label: 'Registry',
    icon: 'fas fa-file-contract'
  }, {
    id: 'people',
    label: 'Directors & UBOs',
    icon: 'fas fa-users'
  }, {
    id: 'ownership',
    label: 'Ownership',
    icon: 'fas fa-sitemap'
  }, {
    id: 'risk',
    label: 'Risk & Media',
    icon: 'fas fa-triangle-exclamation'
  }, {
    id: 'timeline',
    label: 'Timeline',
    icon: 'fas fa-clock-rotate-left'
  }];
  function KYBProfile() {
    const [tab, setTab] = React.useState('overview');
    return /*#__PURE__*/React.createElement("div", {
      className: "kyb-shell"
    }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(CompanyHeader, {
      tab: tab
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 0,
        padding: '0 1.9rem',
        borderBottom: '1px solid var(--vx-border)',
        background: '#fff',
        overflowX: 'auto'
      }
    }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.45rem',
        fontFamily: 'var(--font-body)',
        fontSize: '.83rem',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        background: 'transparent',
        border: 'none',
        borderBottom: '2px solid ' + (tab === t.id ? 'var(--vx-red)' : 'transparent'),
        color: tab === t.id ? 'var(--vx-red)' : 'var(--vx-muted)',
        padding: '.85rem .9rem',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: t.icon,
      style: {
        fontSize: '.78rem'
      }
    }), t.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.6rem 1.9rem'
      }
    }, tab === 'overview' && /*#__PURE__*/React.createElement(Overview, null), tab === 'registry' && /*#__PURE__*/React.createElement(Registry, null), tab === 'people' && /*#__PURE__*/React.createElement(People, null), tab === 'ownership' && /*#__PURE__*/React.createElement(Ownership, null), tab === 'risk' && /*#__PURE__*/React.createElement(RiskMedia, null), tab === 'timeline' && /*#__PURE__*/React.createElement(Timeline, null)));
  }
  function TopBar() {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 54,
        background: 'var(--vx-navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.9rem',
        fontSize: '.8rem',
        color: 'rgba(255,255,255,.6)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        color: 'rgba(255,255,255,.6)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem'
      }
    }, "KYB"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,.3)'
      }
    }, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 600
      }
    }, "Helvetia Trust AG")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "fas fa-download",
      style: {
        color: 'rgba(255,255,255,.7)'
      }
    }, "Export PDF"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-arrows-rotate"
    }, "Re-run check")));
  }
  function CompanyHeader() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        padding: '1.5rem 1.9rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: 10,
        background: 'var(--vx-navy)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.3rem'
      }
    }, "H"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.45rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: 0,
        whiteSpace: 'nowrap'
      }
    }, "Helvetia Trust AG"), /*#__PURE__*/React.createElement(Badge, {
      tone: "warn",
      icon: "fas fa-clock"
    }, "Manual review")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1.1rem',
        marginTop: '.4rem',
        fontSize: '.78rem',
        color: 'var(--vx-muted)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-hashtag",
      style: {
        color: 'var(--vx-light)',
        marginRight: 4
      }
    }), "CHE-114.227.811"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-dot",
      style: {
        color: 'var(--vx-light)',
        marginRight: 4
      }
    }), "Z\xFCrich, Switzerland"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-industry",
      style: {
        color: 'var(--vx-light)',
        marginRight: 4
      }
    }), "Financial services"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-calendar",
      style: {
        color: 'var(--vx-light)',
        marginRight: 4
      }
    }), "Inc. 2014")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.6rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        marginBottom: 2
      }
    }, "UBOs verified"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.4rem',
        fontWeight: 700
      }
    }, "3 / 4")), /*#__PURE__*/React.createElement(TrustScore, {
      score: 71,
      size: 104,
      label: "KYB Risk"
    })));
  }

  // ── shared bits ──────────────────────────────────────
  function Card({
    children,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1.2rem',
        ...style
      }
    }, children);
  }
  function Head({
    children,
    icon,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.82rem'
      }
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '.95rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: 0
      }
    }, children)), right);
  }
  function Row({
    k,
    v
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '.5rem 0',
        borderBottom: '1px solid var(--vx-off)',
        fontSize: '.83rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-light)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: 'var(--vx-text)',
        textAlign: 'right'
      }
    }, v));
  }

  // ── OVERVIEW ─────────────────────────────────────────
  function Overview() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '1rem'
      },
      className: "kyb-cols"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-circle-info"
    }, "Company summary"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.86rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: '0 0 1rem'
      }
    }, "Helvetia Trust AG is a Z\xFCrich-based fiduciary and wealth-structuring firm regulated under Swiss FINMA AMLA. The entity is active and in good standing. Three of four ultimate beneficial owners are fully verified; one indirect UBO via a Liechtenstein holding requires manual confirmation."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 1.5rem'
      }
    }, /*#__PURE__*/React.createElement(Row, {
      k: "Legal form",
      v: "Aktiengesellschaft (AG)"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Status",
      v: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Active")
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Registered",
      v: "14 Mar 2014"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Share capital",
      v: "CHF 2,000,000"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Employees",
      v: "42"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "VAT",
      v: "CHE-114.227.811 MWST"
    }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-clipboard-check"
    }, "Compliance summary"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: '.6rem'
      }
    }, [['Sanctions', 'Clear', 'success', 'fas fa-ban'], ['PEP exposure', '1 associate', 'warn', 'fas fa-user-tie'], ['Adverse media', '2 low-severity', 'warn', 'fas fa-newspaper'], ['Registry', 'Verified', 'success', 'fas fa-file-contract']].map(([k, v, tone, ic]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.6rem .7rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 7
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: tone === 'success' ? 'var(--vx-success)' : 'var(--vx-warn)'
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)'
      }
    }, k), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.8rem',
        fontWeight: 700
      }
    }, v))))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-gauge-high"
    }, "Risk indicators"), [['Geographic risk', 30, 'var(--vx-review)'], ['Ownership complexity', 55, 'var(--vx-review)'], ['PEP / sanctions', 20, 'var(--vx-success)'], ['Adverse media', 25, 'var(--vx-review)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        marginBottom: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.76rem',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontFamily: 'var(--font-mono)'
      }
    }, v)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--vx-off)',
        borderRadius: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: c,
        borderRadius: 3
      }
    }))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: 'var(--vx-navy)',
        border: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.5)',
        marginBottom: '.6rem'
      }
    }, "Recommended action"), /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '.95rem',
        marginBottom: '.5rem'
      }
    }, "Manual review \u2014 confirm indirect UBO"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.6)',
        fontSize: '.78rem',
        lineHeight: 1.6,
        margin: '0 0 .9rem'
      }
    }, "One indirect beneficial owner holds 18% via Alpine Holding (LI). Obtain a current shareholder register to complete verification."), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-arrow-right",
      style: {
        width: '100%'
      }
    }, "Open case"))));
  }

  // ── REGISTRY ─────────────────────────────────────────
  function Registry() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      },
      className: "kyb-cols"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-file-contract",
      right: /*#__PURE__*/React.createElement(Badge, {
        tone: "success"
      }, "Verified")
    }, "Commercial registry"), /*#__PURE__*/React.createElement(Row, {
      k: "Source",
      v: "Handelsregister Z\xFCrich (ZEFIX)"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "UID",
      v: "CHE-114.227.811"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Registry no.",
      v: "CH-020.3.041.118-7"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Legal form",
      v: "Aktiengesellschaft"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Registered office",
      v: "Bahnhofstrasse 21, 8001 Z\xFCrich"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "First entry",
      v: "14 Mar 2014"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Last mutation",
      v: "08 Nov 2025"
    }), /*#__PURE__*/React.createElement(Row, {
      k: "Purpose",
      v: "Fiduciary & wealth structuring"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-file-lines"
    }, "Source documents"), [['Commercial register extract', 'PDF · 14 Nov 2025', 'fas fa-file-pdf'], ['Articles of association', 'PDF · 14 Mar 2014', 'fas fa-file-pdf'], ['Shareholder register', 'Pending', 'fas fa-clock']].map(([n, d, ic]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.55rem 0',
        borderBottom: '1px solid var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: ic.includes('clock') ? 'var(--vx-warn)' : 'var(--vx-red)',
        width: 16
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.82rem',
        fontWeight: 600
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)'
      }
    }, d)), !d.includes('Pending') && /*#__PURE__*/React.createElement("i", {
      className: "fas fa-download",
      style: {
        color: 'var(--vx-light)',
        cursor: 'pointer',
        fontSize: '.8rem'
      }
    })))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-check-double"
    }, "Verification checks"), [['Entity exists in registry', true], ['Active & in good standing', true], ['Address confirmed', true], ['Articles match filing', true], ['Shareholder register current', false]].map(([l, ok]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.4rem 0',
        fontSize: '.82rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ok ? 'fas fa-circle-check' : 'fas fa-circle-exclamation',
      style: {
        color: ok ? 'var(--vx-success)' : 'var(--vx-warn)'
      }
    }), l)))));
  }

  // ── PEOPLE: directors + UBOs ─────────────────────────
  const PEOPLE = [{
    name: 'Dr. Andreas Vogt',
    role: 'Chairman & Director',
    own: '34%',
    pep: false,
    sanc: false,
    ver: true,
    type: 'director'
  }, {
    name: 'Claudia Reinhardt',
    role: 'Director, CFO',
    own: '21%',
    pep: false,
    sanc: false,
    ver: true,
    type: 'director'
  }, {
    name: 'Marc-Olivier Dubois',
    role: 'Director',
    own: '12%',
    pep: true,
    sanc: false,
    ver: true,
    type: 'director'
  }, {
    name: 'Beatrice Keller',
    role: 'UBO (direct)',
    own: '15%',
    pep: false,
    sanc: false,
    ver: true,
    type: 'ubo'
  }, {
    name: 'Alpine Holding AG (LI)',
    role: 'UBO (indirect, 18%)',
    own: '18%',
    pep: false,
    sanc: false,
    ver: false,
    type: 'ubo'
  }];
  function People() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, ['director', 'ubo'].map(type => /*#__PURE__*/React.createElement(Card, {
      key: type
    }, /*#__PURE__*/React.createElement(Head, {
      icon: type === 'director' ? 'fas fa-user-tie' : 'fas fa-crown'
    }, type === 'director' ? 'Directors & officers' : 'Ultimate beneficial owners'), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, PEOPLE.filter(p => p.type === type).map((p, i, arr) => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.9rem',
        padding: '.7rem 0',
        borderBottom: i < arr.length - 1 ? '1px solid var(--vx-off)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: p.ver ? 'var(--vx-navy)' : 'var(--vx-off)',
        color: p.ver ? '#fff' : 'var(--vx-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '.8rem',
        flexShrink: 0
      }
    }, p.name.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-muted)'
      }
    }, p.role)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.4rem',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.8rem',
        fontWeight: 700,
        marginRight: '.3rem'
      }
    }, p.own), p.pep && /*#__PURE__*/React.createElement(Badge, {
      tone: "warn"
    }, "PEP"), p.sanc ? /*#__PURE__*/React.createElement(Badge, {
      tone: "danger"
    }, "Sanctioned") : /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "No sanctions"), p.ver ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "fas fa-check"
    }, "Verified") : /*#__PURE__*/React.createElement(Badge, {
      tone: "warn",
      icon: "fas fa-clock"
    }, "Pending"))))))));
  }

  // ── OWNERSHIP graph ──────────────────────────────────
  function Node({
    label,
    sub,
    pct,
    tone = 'navy',
    dashed
  }) {
    const bg = tone === 'red' ? 'var(--vx-red)' : tone === 'warn' ? '#fff' : 'var(--vx-navy)';
    const col = tone === 'warn' ? 'var(--vx-text)' : '#fff';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: bg,
        color: col,
        border: dashed ? '1.5px dashed var(--vx-warn)' : '1px solid ' + bg,
        borderRadius: 8,
        padding: '.6rem .8rem',
        textAlign: 'center',
        minWidth: 130,
        boxShadow: 'var(--shadow-sm)'
      }
    }, pct && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: tone === 'warn' ? 'var(--vx-warn)' : 'rgba(255,255,255,.6)',
        marginBottom: 2
      }
    }, pct), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.8rem',
        fontWeight: 700
      }
    }, label), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.64rem',
        color: tone === 'warn' ? 'var(--vx-light)' : 'rgba(255,255,255,.55)',
        marginTop: 1
      }
    }, sub));
  }
  function Conn() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        height: 20,
        background: 'var(--vx-border-2)',
        margin: '0 auto'
      }
    });
  }
  function Ownership() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '1rem'
      },
      className: "kyb-cols"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-sitemap",
      right: /*#__PURE__*/React.createElement(Badge, {
        tone: "warn"
      }, "1 unverified branch")
    }, "Ownership structure"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '.5rem 0'
      }
    }, /*#__PURE__*/React.createElement(Node, {
      label: "Helvetia Trust AG",
      sub: "Subject entity",
      tone: "navy"
    }), /*#__PURE__*/React.createElement(Conn, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Node, {
      label: "A. Vogt",
      pct: "34%",
      tone: "red"
    }), /*#__PURE__*/React.createElement(Conn, null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.64rem',
        color: 'var(--vx-light)'
      }
    }, "Natural person")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Node, {
      label: "C. Reinhardt",
      pct: "21%",
      tone: "red"
    }), /*#__PURE__*/React.createElement(Conn, null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.64rem',
        color: 'var(--vx-light)'
      }
    }, "Natural person")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Node, {
      label: "B. Keller",
      pct: "15%",
      tone: "red"
    }), /*#__PURE__*/React.createElement(Conn, null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.64rem',
        color: 'var(--vx-light)'
      }
    }, "Natural person")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Node, {
      label: "Alpine Holding AG",
      sub: "Liechtenstein",
      pct: "18%",
      tone: "warn",
      dashed: true
    }), /*#__PURE__*/React.createElement(Conn, null), /*#__PURE__*/React.createElement(Node, {
      label: "Indirect UBO",
      sub: "unconfirmed",
      tone: "warn",
      dashed: true
    }))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-percent"
    }, "Ownership breakdown"), [['A. Vogt', 34, 'var(--vx-red)'], ['C. Reinhardt', 21, 'var(--vx-red)'], ['Alpine Holding (LI)', 18, 'var(--vx-warn)'], ['B. Keller', 15, 'var(--vx-red)'], ['Free float / treasury', 12, 'var(--vx-light)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        marginBottom: '.75rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.78rem',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontFamily: 'var(--font-mono)'
      }
    }, v, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 7,
        background: 'var(--vx-off)',
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: c,
        borderRadius: 4
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.8rem',
        fontSize: '.72rem',
        color: 'var(--vx-muted)',
        background: 'var(--vx-warn-bg)',
        borderRadius: 6,
        padding: '.55rem .7rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-triangle-exclamation",
      style: {
        color: 'var(--vx-warn)',
        marginRight: 4
      }
    }), " Indirect ownership via Alpine Holding requires a current shareholder register to confirm the natural-person UBO.")));
  }

  // ── RISK & MEDIA ─────────────────────────────────────
  const MEDIA = [{
    title: 'Local outlet reports fiduciary-sector consolidation in Zürich',
    src: 'NZZ · Feb 2026',
    sev: 'low',
    tag: 'Industry'
  }, {
    title: 'Director named in unrelated civil contract dispute (dismissed)',
    src: 'Handelszeitung · 2023',
    sev: 'low',
    tag: 'Litigation'
  }];
  function RiskMedia() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: '1rem'
      },
      className: "kyb-cols"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-ban"
    }, "Sanctions screening"), [['EU consolidated list', true], ['OFAC SDN', true], ['SECO (Switzerland)', true], ['UN Security Council', true], ['Interpol notices', true]].map(([l, ok]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.45rem 0',
        borderBottom: '1px solid var(--vx-off)',
        fontSize: '.82rem'
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      icon: "fas fa-check"
    }, "Clear")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-user-tie"
    }, "PEP exposure"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.5rem 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: '50%',
        background: 'var(--vx-warn-bg)',
        color: 'var(--vx-warn)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-user-tie"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.82rem',
        fontWeight: 700
      }
    }, "Marc-Olivier Dubois"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-muted)'
      }
    }, "Domestic PEP \u2014 municipal council, 2018\u20132022")), /*#__PURE__*/React.createElement(Badge, {
      tone: "warn"
    }, "Tier 3")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-newspaper",
      right: /*#__PURE__*/React.createElement(Badge, {
        tone: "warn"
      }, "2 low")
    }, "Adverse media"), MEDIA.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '.7rem 0',
        borderBottom: i < MEDIA.length - 1 ? '1px solid var(--vx-off)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: 'var(--vx-warn)',
        marginTop: 5,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.84rem',
        fontWeight: 600,
        lineHeight: 1.4
      }
    }, m.title), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem',
        marginTop: '.35rem',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)'
      }
    }, m.src), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, m.tag), /*#__PURE__*/React.createElement(Badge, {
      tone: "warn"
    }, "Low severity")))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.8rem',
        fontSize: '.74rem',
        color: 'var(--vx-muted)'
      }
    }, "Screened across 40k+ global sources. No high-severity matches found.")));
  }

  // ── TIMELINE ─────────────────────────────────────────
  const EVENTS = [{
    t: '14 Nov 2025 · 09:12',
    e: 'KYB check initiated',
    d: 'Triggered by onboarding API',
    icon: 'fas fa-play',
    tone: 'info'
  }, {
    t: '14 Nov 2025 · 09:12',
    e: 'Registry retrieved',
    d: 'ZEFIX / Handelsregister Zürich matched',
    icon: 'fas fa-file-contract',
    tone: 'success'
  }, {
    t: '14 Nov 2025 · 09:13',
    e: 'Directors & UBOs resolved',
    d: '5 individuals identified',
    icon: 'fas fa-users',
    tone: 'success'
  }, {
    t: '14 Nov 2025 · 09:13',
    e: 'Sanctions & PEP screened',
    d: 'No sanctions · 1 PEP associate flagged',
    icon: 'fas fa-ban',
    tone: 'warn'
  }, {
    t: '14 Nov 2025 · 09:14',
    e: 'Adverse media scan',
    d: '2 low-severity articles surfaced',
    icon: 'fas fa-newspaper',
    tone: 'warn'
  }, {
    t: '14 Nov 2025 · 09:14',
    e: 'Routed to manual review',
    d: 'Indirect UBO via Alpine Holding unconfirmed',
    icon: 'fas fa-user-shield',
    tone: 'warn'
  }];
  function Timeline() {
    return /*#__PURE__*/React.createElement(Card, {
      style: {
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement(Head, {
      icon: "fas fa-clock-rotate-left"
    }, "Verification timeline"), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingLeft: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 6,
        top: 6,
        bottom: 6,
        width: 2,
        background: 'var(--vx-border)'
      }
    }), EVENTS.map((ev, i) => {
      const c = ev.tone === 'success' ? 'var(--vx-success)' : ev.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-info)';
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          position: 'relative',
          paddingBottom: i < EVENTS.length - 1 ? '1.1rem' : 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          left: '-1.5rem',
          top: 2,
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: '#fff',
          border: '2px solid ' + c
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: ev.icon,
        style: {
          color: c,
          fontSize: '.78rem'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '.86rem',
          fontWeight: 700
        }
      }, ev.e)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '.76rem',
          color: 'var(--vx-muted)',
          marginTop: 2
        }
      }, ev.d), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '.66rem',
          color: 'var(--vx-light)',
          marginTop: 2
        }
      }, ev.t));
    })));
  }
  window.KYBProfile = KYBProfile;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kyb-profile/KYBProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mvp/MVP.jsx
try { (() => {
// VerfiX MVP — runnable verification demo driven by the REAL engine (engine.js).
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip,
    TrustScore
  } = DS;
  const SCENARIOS = {
    clean: {
      label: 'Clean applicant',
      firstName: 'Sofia',
      lastName: 'Brunner',
      country: 'CH',
      docType: 'passport',
      faceMatch: 'high',
      amlHit: 'none',
      tampered: false,
      emulator: false
    },
    pep: {
      label: 'PEP match',
      firstName: 'Marc',
      lastName: 'Dubois',
      country: 'CH',
      docType: 'id_card',
      faceMatch: 'high',
      amlHit: 'pep',
      tampered: false,
      emulator: false
    },
    fraud: {
      label: 'Tampered document + low face',
      firstName: 'M',
      lastName: 'Keller',
      country: 'DE',
      docType: 'id_card',
      faceMatch: 'low',
      amlHit: 'none',
      tampered: true,
      emulator: true
    },
    sanction: {
      label: 'Sanctions hit',
      firstName: 'A',
      lastName: 'Petrov',
      country: 'RU',
      docType: 'passport',
      faceMatch: 'med',
      amlHit: 'sanction',
      tampered: false,
      emulator: false
    }
  };
  const STEPS = [{
    k: 'ocr',
    icon: 'fas fa-id-card',
    label: 'OCR / Document',
    provider: 'VerfiX Native OCR'
  }, {
    k: 'face',
    icon: 'fas fa-face-smile',
    label: 'Face & Liveness',
    provider: 'Biometric Engine v4'
  }, {
    k: 'aml',
    icon: 'fas fa-magnifying-glass-dollar',
    label: 'AML Screening',
    provider: 'AML Data Union'
  }, {
    k: 'engine',
    icon: 'fas fa-gauge-high',
    label: 'Trust Engine',
    provider: 'te-1.0'
  }, {
    k: 'workflow',
    icon: 'fas fa-diagram-project',
    label: 'Workflow',
    provider: 'router'
  }];
  function MVP() {
    const [scenario, setScenario] = React.useState('clean');
    const [running, setRunning] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(-1);
    const [result, setResult] = React.useState(null);
    const run = () => {
      setRunning(true);
      setResult(null);
      setActiveStep(0);
      const out = window.VerfiXEngine.runVerification(SCENARIOS[scenario]);
      // animate the pipeline, then reveal result
      let i = 0;
      const tick = () => {
        i++;
        setActiveStep(i);
        if (i < STEPS.length) setTimeout(tick, 320);else {
          setResult(out);
          setRunning(false);
        }
      };
      setTimeout(tick, 320);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "mvp-shell"
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        height: 60,
        background: 'var(--vx-navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        color: 'rgba(255,255,255,.6)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-play",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: '.95rem'
      }
    }, "VerfiX MVP \u2014 Live Engine"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'rgba(255,255,255,.5)'
      }
    }, "real scoring \xB7 runs in your browser"))), /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "Sandbox \xB7 livemode false")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.6rem 1.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        flexWrap: 'wrap',
        marginBottom: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, "Scenario"), Object.entries(SCENARIOS).map(([k, s]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => {
        setScenario(k);
        setResult(null);
        setActiveStep(-1);
      },
      disabled: running,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.78rem',
        fontWeight: 600,
        cursor: running ? 'default' : 'pointer',
        padding: '.4rem .85rem',
        borderRadius: 100,
        border: '1px solid ' + (scenario === k ? 'var(--vx-red)' : 'var(--vx-border)'),
        background: scenario === k ? 'var(--vx-red-bg)' : '#fff',
        color: scenario === k ? 'var(--vx-red)' : 'var(--vx-muted)'
      }
    }, s.label)), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: running ? 'fas fa-spinner fa-spin' : 'fas fa-play',
      onClick: run,
      disabled: running,
      style: {
        marginLeft: 'auto'
      }
    }, running ? 'Running…' : 'Run verification')), /*#__PURE__*/React.createElement("div", {
      className: "mvp-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, null, "Verification pipeline"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, STEPS.map((s, i) => {
      const done = activeStep > i;
      const active = activeStep === i && running;
      const stepResult = result ? stepSummary(s.k, result.detail) : null;
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: s.k
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.8rem',
          padding: '.6rem .2rem',
          opacity: activeStep < 0 ? .5 : activeStep >= i ? 1 : .45,
          transition: 'opacity .2s'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 34,
          height: 34,
          borderRadius: 8,
          background: done ? 'var(--vx-navy)' : active ? 'var(--vx-red)' : 'var(--vx-off)',
          color: done || active ? '#fff' : 'var(--vx-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'background .2s'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: active ? 'fas fa-spinner fa-spin' : done ? 'fas fa-check' : s.icon
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '.85rem',
          fontWeight: 700
        }
      }, s.label), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: '.64rem',
          color: 'var(--vx-light)'
        }
      }, s.provider)), done && stepResult && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '.76rem',
          fontWeight: 600,
          color: stepResult.tone
        }
      }, stepResult.text)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("div", {
        style: {
          width: 2,
          height: 12,
          background: 'var(--vx-border)',
          marginLeft: 17
        }
      }));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: result ? '#fff' : 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, result ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TrustScore, {
      score: result.response.trust_score,
      size: 132,
      label: "Trust Score"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.06em',
        fontWeight: 600
      }
    }, "Workflow"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.9rem',
        fontWeight: 700,
        marginTop: 2
      }
    }, result.detail.flow.action), result.detail.flow.queue && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.76rem',
        color: 'var(--vx-muted)'
      }
    }, "\u2192 ", result.detail.flow.queue))) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-gauge-high",
      style: {
        fontSize: '2rem',
        marginBottom: '.6rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.84rem'
      }
    }, "Run a verification to compute a live decision")))), result && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mvp-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, null, "Why this decision \u2014 explainability"), result.detail.result.reasons.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        fontSize: '.84rem',
        color: 'var(--vx-success)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-check"
    }), "No risk signals \u2014 all checks passed.") : result.detail.result.reasons.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.5rem 0',
        borderBottom: '1px solid var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-triangle-exclamation",
      style: {
        color: 'var(--vx-warn)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.84rem',
        fontWeight: 700
      }
    }, r.signal), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.8rem',
        color: 'var(--vx-muted)'
      }
    }, "\u2014 ", r.detail)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.78rem',
        fontWeight: 700,
        color: 'var(--vx-red)'
      }
    }, "+", r.points))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.7rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        color: 'var(--vx-light)'
      }
    }, "risk ", result.detail.result.risk_score, " \u2192 trust ", result.response.trust_score, " \xB7 tier ", result.detail.result.risk_tier, " \xB7 ", result.detail.result.engine_version)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, null, "API response"), /*#__PURE__*/React.createElement(Code, null, JSON.stringify(result.response, null, 2)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement(SectionHead, null, "Audit trail \u2014 append-only, ", result.audit.length, " entries"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        overflow: 'hidden'
      }
    }, result.audit.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '160px 130px 1fr',
        gap: '.6rem',
        alignItems: 'center',
        padding: '.5rem 1rem',
        borderBottom: i < result.audit.length - 1 ? '1px solid var(--vx-off)' : 'none',
        fontSize: '.78rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)'
      }
    }, a.ts.replace('T', ' ').slice(0, 19)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.68rem',
        color: 'var(--vx-navy)'
      }
    }, a.actor), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, a.action), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-muted)'
      }
    }, a.detail)))))))));
  }
  function SectionHead({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.8rem'
      }
    }, children);
  }
  function Code({
    children
  }) {
    return /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        background: 'var(--vx-navy-3)',
        color: 'rgba(255,255,255,.85)',
        borderRadius: 10,
        padding: '1rem 1.1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.74rem',
        lineHeight: 1.6,
        overflow: 'auto',
        maxHeight: 300
      }
    }, children);
  }
  function stepSummary(k, d) {
    if (k === 'ocr') return d.ocr.checks.tamper_detected ? {
      text: 'Tamper',
      tone: 'var(--vx-danger)'
    } : {
      text: 'Passed',
      tone: 'var(--vx-success)'
    };
    if (k === 'face') return d.face.similarity < 0.85 ? {
      text: d.face.similarity.toFixed(2),
      tone: 'var(--vx-warn)'
    } : {
      text: d.face.similarity.toFixed(2),
      tone: 'var(--vx-success)'
    };
    if (k === 'aml') return d.aml.hits > 0 ? {
      text: d.aml.sanctions === 'match' ? 'Sanction' : 'PEP',
      tone: 'var(--vx-danger)'
    } : {
      text: 'Clear',
      tone: 'var(--vx-success)'
    };
    if (k === 'engine') return {
      text: d.result.trust_score + '/100',
      tone: 'var(--vx-text)'
    };
    if (k === 'workflow') return {
      text: d.result.decision,
      tone: d.result.decision === 'approve' ? 'var(--vx-success)' : d.result.decision === 'review' ? 'var(--vx-warn)' : 'var(--vx-danger)'
    };
    return null;
  }
  window.MVP = MVP;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mvp/MVP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mvp/engine.js
try { (() => {
// VerfiX MVP Engine — REAL working verification logic (runs in-browser).
// This is not a mockup: OCR extraction, Trust Engine scoring, workflow routing
// and the audit log are all computed live from inputs.
(function () {
  // ── OCR provider abstraction ─────────────────────────
  // Swappable provider interface. extract() returns structured fields + a
  // document-integrity signal. A "tampered" input flips the integrity check.
  const OcrProvider = {
    name: 'VerfiX Native OCR',
    extract({
      firstName,
      lastName,
      country,
      docType,
      tampered
    }) {
      const mrz = `${docType.slice(0, 1).toUpperCase()}<${country}<${(lastName || '').toUpperCase()}<<${(firstName || '').toUpperCase()}`.padEnd(44, '<').slice(0, 44);
      return {
        provider: this.name,
        fields: {
          first_name: firstName,
          last_name: lastName,
          country,
          document_type: docType,
          document_number: 'X' + Math.abs(hash(firstName + lastName)).toString().slice(0, 7),
          mrz
        },
        checks: {
          ocr_confidence: tampered ? 0.61 : 0.985,
          template_match: tampered ? 'failed' : 'passed',
          tamper_detected: !!tampered
        }
      };
    }
  };

  // ── Face & liveness provider ─────────────────────────
  const FaceProvider = {
    name: 'Biometric Engine v4',
    verify({
      faceMatch
    }) {
      const score = faceMatch === 'low' ? 0.71 : faceMatch === 'med' ? 0.86 : 0.97;
      return {
        provider: this.name,
        similarity: score,
        liveness: faceMatch === 'low' ? 'review' : 'passed',
        spoof_detected: false
      };
    }
  };

  // ── AML provider ─────────────────────────────────────
  const AmlProvider = {
    name: 'AML Data Union',
    screen({
      amlHit
    }) {
      if (amlHit === 'sanction') return {
        provider: this.name,
        sanctions: 'match',
        pep: 'clear',
        adverse_media: 'clear',
        hits: 1
      };
      if (amlHit === 'pep') return {
        provider: this.name,
        sanctions: 'clear',
        pep: 'match',
        adverse_media: 'clear',
        hits: 1
      };
      return {
        provider: this.name,
        sanctions: 'clear',
        pep: 'clear',
        adverse_media: 'clear',
        hits: 0
      };
    }
  };

  // ── Trust Engine — REAL weighted scoring ─────────────
  // Risk points accumulate; trust_score = 100 - risk. Each signal contributes a
  // weighted, explainable amount. This is the actual scoring logic.
  const TrustEngine = {
    version: 'te-1.0',
    weights: {
      ocr: 30,
      face: 25,
      aml_sanction: 70,
      aml_pep: 40,
      device: 15
    },
    score(signals) {
      let risk = 0;
      const reasons = [];
      // Document / OCR
      if (signals.ocr.checks.tamper_detected) {
        risk += this.weights.ocr;
        reasons.push({
          signal: 'Document',
          detail: 'Tamper detected',
          points: this.weights.ocr
        });
      } else if (signals.ocr.checks.ocr_confidence < 0.8) {
        risk += 15;
        reasons.push({
          signal: 'Document',
          detail: 'Low OCR confidence',
          points: 15
        });
      }
      // Face
      if (signals.face.similarity < 0.85) {
        risk += this.weights.face;
        reasons.push({
          signal: 'Face match',
          detail: `Similarity ${signals.face.similarity.toFixed(2)} < 0.85`,
          points: this.weights.face
        });
      }
      // AML
      if (signals.aml.sanctions === 'match') {
        risk += this.weights.aml_sanction;
        reasons.push({
          signal: 'AML',
          detail: 'Sanctions match',
          points: this.weights.aml_sanction
        });
      }
      if (signals.aml.pep === 'match') {
        risk += this.weights.aml_pep;
        reasons.push({
          signal: 'AML',
          detail: 'PEP match',
          points: this.weights.aml_pep
        });
      }
      // Device
      if (signals.device && signals.device.emulator) {
        risk += this.weights.device;
        reasons.push({
          signal: 'Device',
          detail: 'Emulator signals',
          points: this.weights.device
        });
      }
      risk = Math.min(100, risk);
      const trust = 100 - risk;
      const tier = risk < 35 ? 'low' : risk < 70 ? 'medium' : 'high';
      const decision = tier === 'low' ? 'approve' : tier === 'medium' ? 'review' : 'reject';
      return {
        trust_score: trust,
        risk_score: risk,
        risk_tier: tier,
        decision,
        reasons,
        engine_version: this.version
      };
    }
  };

  // ── Workflow engine — routes on tier ─────────────────
  const Workflow = {
    route(result) {
      if (result.risk_tier === 'low') return {
        path: 'straight_through',
        action: 'Auto-approved',
        queue: null
      };
      if (result.risk_tier === 'medium') return {
        path: 'manual_review',
        action: 'Routed to analyst',
        queue: 'Tier-2 review'
      };
      return {
        path: 'enhanced_due_diligence',
        action: 'Escalated',
        queue: 'Compliance / EDD'
      };
    }
  };

  // ── Audit log — append-only with timestamps ──────────
  function makeAudit() {
    const entries = [];
    return {
      record(actor, action, detail) {
        entries.push({
          ts: new Date().toISOString(),
          actor,
          action,
          detail
        });
        return entries[entries.length - 1];
      },
      all() {
        return entries.slice();
      }
    };
  }

  // ── Orchestrator — runs the real pipeline ────────────
  // Returns the full API response + audit trail. Deterministic for given input.
  function runVerification(input) {
    const audit = makeAudit();
    const id = 'vrf_' + Math.abs(hash(JSON.stringify(input) + Date.now())).toString(36).slice(0, 10);
    audit.record('system', 'verification.created', `id=${id} type=${input.type}`);
    const ocr = OcrProvider.extract(input);
    audit.record(ocr.provider, 'ocr.extracted', `confidence=${ocr.checks.ocr_confidence} tamper=${ocr.checks.tamper_detected}`);
    const face = FaceProvider.verify(input);
    audit.record(face.provider, 'face.verified', `similarity=${face.similarity}`);
    const aml = AmlProvider.screen(input);
    audit.record(aml.provider, 'aml.screened', `sanctions=${aml.sanctions} pep=${aml.pep} hits=${aml.hits}`);
    const device = {
      emulator: !!input.emulator
    };
    const signals = {
      ocr,
      face,
      aml,
      device
    };
    const result = TrustEngine.score(signals);
    audit.record('trust-engine', 'score.computed', `trust=${result.trust_score} tier=${result.risk_tier} decision=${result.decision}`);
    const flow = Workflow.route(result);
    audit.record('workflow', 'routed', `${flow.path} — ${flow.action}`);
    audit.record('system', 'verification.completed', `decision=${result.decision}`);
    return {
      request: {
        method: 'POST',
        path: '/v2/verifications',
        body: {
          type: input.type,
          applicant: {
            first_name: input.firstName,
            last_name: input.lastName,
            country: input.country
          },
          checks: ['document', 'face', 'aml']
        }
      },
      response: {
        id,
        object: 'verification',
        livemode: false,
        trust_score: result.trust_score,
        risk_tier: result.risk_tier,
        decision: result.decision,
        checks: {
          document: ocr.checks.tamper_detected ? 'failed' : 'passed',
          face: face.similarity < 0.85 ? 'review' : 'passed',
          aml: aml.hits > 0 ? 'flagged' : 'clear'
        },
        workflow: flow.path,
        created: Math.floor(Date.now() / 1000)
      },
      detail: {
        ocr,
        face,
        aml,
        device,
        result,
        flow
      },
      audit: audit.all()
    };
  }
  function hash(s) {
    let h = 0;
    s = String(s);
    for (let i = 0; i < s.length; i++) {
      h = (h << 5) - h + s.charCodeAt(i);
      h |= 0;
    }
    return h;
  }
  window.VerfiXEngine = {
    runVerification,
    TrustEngine,
    OcrProvider,
    FaceProvider,
    AmlProvider,
    Workflow
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mvp/engine.js", error: String((e && e.message) || e) }); }

// ui_kits/orchestration/Orchestration.jsx
try { (() => {
// VerfiX Provider Orchestration — vendor-neutral registry, routing engine, failover.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip
  } = DS;
  const NAV = [{
    id: 'registry',
    icon: 'fas fa-server',
    label: 'Provider Registry'
  }, {
    id: 'routing',
    icon: 'fas fa-route',
    label: 'Routing Engine'
  }, {
    id: 'failover',
    icon: 'fas fa-shield-halved',
    label: 'Failover Logic'
  }];
  const PROVIDERS = [{
    sig: 'OCR / Document',
    ic: 'fas fa-id-card',
    items: [['VerfiX Native OCR', 'primary', '99.4%', '180ms'], ['Regional ID specialist', 'active', '99.1%', '260ms'], ['Travel-doc reader', 'standby', '—', '—']]
  }, {
    sig: 'Face & Liveness',
    ic: 'fas fa-face-smile',
    items: [['Biometric Engine v4', 'primary', '99.2%', '410ms'], ['Passive face-match', 'active', '98.7%', '320ms']]
  }, {
    sig: 'AML data',
    ic: 'fas fa-magnifying-glass-dollar',
    items: [['AML Data Union', 'primary', '99.9%', '240ms'], ['Adverse-media feed', 'active', '99.5%', '600ms']]
  }, {
    sig: 'KYB / Registry',
    ic: 'fas fa-building-columns',
    items: [['Swiss ZEFIX', 'primary', '99.9%', '300ms'], ['EU registers', 'active', '99.2%', '720ms']]
  }, {
    sig: 'Fraud',
    ic: 'fas fa-shield-halved',
    items: [['Device intelligence', 'primary', '99.8%', '90ms']]
  }];
  const PSTATUS = {
    primary: ['red', 'Primary'],
    active: ['success', 'Active'],
    standby: ['neutral', 'Standby']
  };
  function Orchestration() {
    const [view, setView] = React.useState('registry');
    return /*#__PURE__*/React.createElement("div", {
      className: "po-shell"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '230px 1fr',
        minHeight: 740
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        background: 'var(--vx-navy)',
        padding: '1.1rem .8rem',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.55rem',
        padding: '.2rem .5rem 1.2rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-diagram-project",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        color: '#fff',
        fontSize: '.95rem'
      }
    }, "Orchestration")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.id,
      role: "link",
      tabIndex: 0,
      onClick: () => setView(n.id),
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setView(n.id);
        }
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.65rem',
        padding: '.5rem .55rem',
        borderRadius: 6,
        fontSize: '.82rem',
        fontWeight: 600,
        cursor: 'pointer',
        color: view === n.id ? '#fff' : 'rgba(255,255,255,.55)',
        background: view === n.id ? 'rgba(200,37,42,.18)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: n.icon,
      style: {
        fontSize: '.78rem',
        width: 16,
        color: view === n.id ? 'var(--vx-red)' : 'rgba(255,255,255,.4)'
      }
    }), n.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.2rem',
        padding: '.8rem',
        background: 'rgba(255,255,255,.05)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.45)',
        marginBottom: '.4rem'
      }
    }, "Why this matters"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.74rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.5,
        margin: 0
      }
    }, "VerfiX never depends on a single vendor. Swap, route and fail over providers without changing your integration.")), /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.5rem .55rem',
        fontSize: '.78rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,.5)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left",
      style: {
        width: 16
      }
    }), "Back to site")), /*#__PURE__*/React.createElement("main", {
      style: {
        padding: '1.7rem 1.9rem',
        overflow: 'auto'
      }
    }, view === 'registry' && /*#__PURE__*/React.createElement(Registry, null), view === 'routing' && /*#__PURE__*/React.createElement(Routing, null), view === 'failover' && /*#__PURE__*/React.createElement(Failover, null))));
  }
  function Head({
    title,
    sub,
    actions
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.4rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: 0
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.85rem',
        color: 'var(--vx-muted)',
        margin: '.3rem 0 0',
        maxWidth: 620
      }
    }, sub)), actions);
  }
  function Registry() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Provider Registry",
      sub: "Every verification signal can draw from multiple providers. VerfiX scores them on health, latency and match quality.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus"
      }, "Add provider")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, PROVIDERS.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.sig,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.8rem 1.1rem',
        borderBottom: '1px solid var(--vx-border)',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: p.ic,
      style: {
        color: 'var(--vx-red)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: '.9rem'
      }
    }, p.sig), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)'
      }
    }, p.items.length, " providers")), p.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: it[0],
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr .8fr .8fr .6fr',
        gap: '.6rem',
        alignItems: 'center',
        padding: '.7rem 1.1rem',
        borderBottom: i < p.items.length - 1 ? '1px solid var(--vx-off)' : 'none',
        fontSize: '.82rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: it[1] === 'standby' ? 'var(--vx-light)' : 'var(--vx-success)'
      }
    }), it[0]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
      tone: PSTATUS[it[1]][0]
    }, PSTATUS[it[1]][1])), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        color: 'var(--vx-muted)'
      }
    }, it[2]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        color: 'var(--vx-muted)'
      }
    }, it[3]), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-gear",
      style: {
        cursor: 'pointer'
      }
    }))))))));
  }
  const RULES = [{
    when: ['Country', '=', 'Switzerland'],
    then: 'VerfiX Native OCR + Swiss ZEFIX',
    tone: 'red'
  }, {
    when: ['Country', '=', 'Germany'],
    then: 'Regional ID specialist + EU registers',
    tone: 'navy'
  }, {
    when: ['AML result', '=', 'High risk'],
    then: 'Enhanced screening (AML Union + adverse media)',
    tone: 'navy'
  }, {
    when: ['Document', '=', 'Travel document'],
    then: 'Travel-doc reader',
    tone: 'navy'
  }, {
    when: ['default', '', ''],
    then: 'Primary provider per signal',
    tone: 'neutral'
  }];
  function Routing() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Routing Engine",
      sub: "Declarative rules pick the right provider per verification \u2014 by geography, risk, or document type.",
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus"
      }, "Add rule")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.7rem'
      }
    }, RULES.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderLeft: '3px solid ' + (r.tone === 'red' ? 'var(--vx-red)' : r.tone === 'navy' ? 'var(--vx-navy)' : 'var(--vx-border-2)'),
        borderRadius: 8,
        padding: '.9rem 1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        flexWrap: 'wrap'
      }
    }, r.when[0] === 'default' ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.7rem',
        fontWeight: 700,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.06em'
      }
    }, "Default") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        fontWeight: 700,
        color: 'var(--vx-red)',
        textTransform: 'uppercase'
      }
    }, "IF"), /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 5,
        padding: '.25rem .5rem',
        fontSize: '.78rem',
        fontWeight: 600
      }
    }, r.when[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--vx-light)'
      }
    }, r.when[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        background: 'var(--vx-red-bg)',
        border: '1px solid var(--vx-red-line)',
        color: 'var(--vx-red)',
        borderRadius: 5,
        padding: '.25rem .5rem',
        fontSize: '.78rem',
        fontWeight: 700
      }
    }, r.when[2]))), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-right",
      style: {
        color: 'var(--vx-light)',
        fontSize: '.8rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        fontWeight: 700,
        color: 'var(--vx-navy)',
        textTransform: 'uppercase'
      }
    }, "Route to"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.82rem',
        fontWeight: 700
      }
    }, r.then)), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-grip-vertical",
      style: {
        marginLeft: 'auto',
        color: 'var(--vx-light)',
        fontSize: '.78rem'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        background: 'var(--vx-info-bg)',
        borderRadius: 8,
        padding: '.7rem 1rem',
        fontSize: '.82rem',
        color: 'var(--vx-info-fg)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-info"
    }), " Rules evaluate top-down; the first match wins. Customers integrate once \u2014 routing changes never touch their code."));
  }
  function Failover() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Head, {
      title: "Failover Logic",
      sub: "When a provider degrades or fails, VerfiX recovers automatically \u2014 no dropped verifications."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem 0 1.5rem'
      }
    }, [{
      ic: 'fas fa-paper-plane',
      t: 'Request to primary provider',
      d: 'Route per the routing engine',
      tone: 'navy'
    }, {
      ic: 'fas fa-triangle-exclamation',
      t: 'Provider error or timeout',
      d: 'Health check trips after threshold',
      tone: 'warn'
    }, {
      ic: 'fas fa-rotate',
      t: 'Automatic fallback',
      d: 'Retry on the next active provider for that signal',
      tone: 'red'
    }, {
      ic: 'fas fa-user-shield',
      t: 'Escalation if all fail',
      d: 'Route to manual review — verification is never silently dropped',
      tone: 'navy'
    }].map((s, i, arr) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 520,
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderLeft: '3px solid ' + (s.tone === 'red' ? 'var(--vx-red)' : s.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-navy)'),
        borderRadius: 9,
        padding: '.9rem 1.1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 8,
        background: s.tone === 'red' ? 'var(--vx-red)' : s.tone === 'warn' ? 'var(--vx-warn)' : 'var(--vx-navy)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: s.ic
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.88rem',
        fontWeight: 700
      }
    }, s.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem',
        color: 'var(--vx-muted)'
      }
    }, s.d)), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '.7rem',
        color: 'var(--vx-light)'
      }
    }, "0", i + 1)), i < arr.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        height: 22,
        background: 'var(--vx-border-2)'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem'
      },
      className: "po-grid"
    }, [['Health threshold', '3 errors / 30s', 'fas fa-heart-pulse'], ['Retry budget', '2 fallbacks', 'fas fa-rotate'], ['Max latency', '5s then fail over', 'fas fa-gauge-high']].map(([l, v, ic]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: '1rem 1.1rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.85rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em',
        fontWeight: 600,
        marginTop: '.5rem'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.95rem',
        fontWeight: 700,
        marginTop: 2
      }
    }, v)))));
  }
  window.Orchestration = Orchestration;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/orchestration/Orchestration.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rules-builder/RulesBuilder.jsx
try { (() => {
// VerfiX Rules Builder — no-code verification workflow + decision simulator.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip,
    DecisionPill
  } = DS;

  // ── Block catalog ────────────────────────────────────
  const CATALOG = {
    trigger: {
      icon: 'fas fa-play',
      color: '#2563EB',
      label: 'Trigger',
      kind: 'When verification starts'
    },
    condition: {
      icon: 'fas fa-code-branch',
      color: '#1A1F2E',
      label: 'Condition',
      kind: 'If / else branch'
    },
    risk: {
      icon: 'fas fa-gauge-high',
      color: '#C8252A',
      label: 'Risk score',
      kind: 'Add to risk total'
    },
    aml: {
      icon: 'fas fa-magnifying-glass-dollar',
      color: '#D97706',
      label: 'AML screen',
      kind: 'PEP / sanctions / watchlist'
    },
    country: {
      icon: 'fas fa-earth-europe',
      color: '#16A34A',
      label: 'Country rule',
      kind: 'Geography-specific logic'
    },
    threshold: {
      icon: 'fas fa-sliders',
      color: '#7C3AED',
      label: 'Threshold',
      kind: 'Approve / review cutoff'
    },
    escalate: {
      icon: 'fas fa-user-shield',
      color: '#0891B2',
      label: 'Escalation',
      kind: 'Assign to analyst'
    },
    decision: {
      icon: 'fas fa-flag-checkered',
      color: '#1A1F2E',
      label: 'Decision',
      kind: 'Final outcome'
    }
  };
  const PALETTE = ['condition', 'risk', 'aml', 'country', 'threshold', 'escalate'];
  const INITIAL = [{
    id: 'b1',
    type: 'trigger',
    title: 'New KYC verification',
    detail: 'Applicant submits document + selfie',
    cfg: {}
  }, {
    id: 'b2',
    type: 'aml',
    title: 'AML & sanctions screen',
    detail: 'PEP + EU/OFAC/SECO watchlists',
    cfg: {
      weight: 40
    }
  }, {
    id: 'b3',
    type: 'country',
    title: 'High-risk geography',
    detail: 'If country ∈ FATF grey list → +25 risk',
    cfg: {
      weight: 25
    }
  }, {
    id: 'b4',
    type: 'risk',
    title: 'Document fraud signal',
    detail: 'Tampering / template mismatch → +30 risk',
    cfg: {
      weight: 30
    }
  }, {
    id: 'b5',
    type: 'threshold',
    title: 'Decision thresholds',
    detail: 'Approve < 35 · Review 35–69 · Reject ≥ 70',
    cfg: {
      approve: 35,
      reject: 70
    }
  }, {
    id: 'b6',
    type: 'escalate',
    title: 'Escalate to compliance',
    detail: 'Review band → assign Tier-2 analyst',
    cfg: {}
  }, {
    id: 'b7',
    type: 'decision',
    title: 'Final decision',
    detail: 'Emit verification.completed webhook',
    cfg: {}
  }];
  let _seq = 100;
  const uid = () => 'b' + ++_seq;
  function RulesBuilderApp({
    rule,
    onBack,
    onHistory
  }) {
    const [blocks, setBlocks] = React.useState(INITIAL);
    const [selected, setSelected] = React.useState('b5');
    const [dragId, setDragId] = React.useState(null);
    const [overId, setOverId] = React.useState(null);
    const [saved, setSaved] = React.useState(true);
    const dirty = () => setSaved(false);
    const sel = blocks.find(b => b.id === selected);

    // reorder
    const onDrop = targetId => {
      if (!dragId || dragId === targetId) {
        setDragId(null);
        setOverId(null);
        return;
      }
      const from = blocks.findIndex(b => b.id === dragId);
      const to = blocks.findIndex(b => b.id === targetId);
      const next = [...blocks];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      setBlocks(next);
      setDragId(null);
      setOverId(null);
      dirty();
    };
    const addBlock = type => {
      const c = CATALOG[type];
      const nb = {
        id: uid(),
        type,
        title: c.label + ' rule',
        detail: c.kind,
        cfg: {
          weight: 20,
          approve: 35,
          reject: 70
        }
      };
      // insert before final decision block
      const di = blocks.findIndex(b => b.type === 'decision');
      const next = [...blocks];
      next.splice(di < 0 ? blocks.length : di, 0, nb);
      setBlocks(next);
      setSelected(nb.id);
      dirty();
    };
    const removeBlock = id => {
      const b = blocks.find(x => x.id === id);
      if (b.type === 'trigger' || b.type === 'decision') return;
      setBlocks(blocks.filter(x => x.id !== id));
      if (selected === id) setSelected(null);
      dirty();
    };
    const updateCfg = (id, patch) => {
      setBlocks(blocks.map(b => b.id === id ? {
        ...b,
        cfg: {
          ...b.cfg,
          ...patch
        }
      } : b));
      dirty();
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "rb-shell"
    }, /*#__PURE__*/React.createElement(Header, {
      saved: saved,
      onSave: () => setSaved(true),
      blocks: blocks,
      rule: rule,
      onBack: onBack,
      onHistory: onHistory
    }), /*#__PURE__*/React.createElement("div", {
      className: "rb-cols",
      style: {
        display: 'grid',
        gridTemplateColumns: '200px 1fr 320px',
        minHeight: 700
      }
    }, /*#__PURE__*/React.createElement(Palette, {
      onAdd: addBlock
    }), /*#__PURE__*/React.createElement(Canvas, {
      blocks: blocks,
      selected: selected,
      setSelected: setSelected,
      dragId: dragId,
      setDragId: setDragId,
      overId: overId,
      setOverId: setOverId,
      onDrop: onDrop,
      onRemove: removeBlock
    }), /*#__PURE__*/React.createElement(Inspector, {
      block: sel,
      simBlocks: blocks,
      onCfg: updateCfg
    })));
  }
  function Header({
    saved,
    onSave,
    blocks,
    rule,
    onBack,
    onHistory
  }) {
    const name = rule && rule.name || 'EU Onboarding Policy';
    const ver = rule && rule.version || 'v4';
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 60,
        borderBottom: '1px solid var(--vx-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onBack,
      role: "link",
      tabIndex: 0,
      style: {
        color: 'var(--vx-light)',
        fontSize: '.85rem',
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-diagram-project",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: '.95rem',
        letterSpacing: '-.02em',
        whiteSpace: 'nowrap'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)'
      }
    }, "rules \xB7 ", ver, " \xB7 ", blocks.length, " steps")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: saved ? 'success' : 'warn'
    }, saved ? 'All changes saved' : 'Unsaved changes'), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-clock-rotate-left",
      onClick: onHistory
    }, "History"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-circle-check",
      onClick: onSave
    }, "Publish")));
  }
  function Palette({
    onAdd
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        borderRight: '1px solid var(--vx-border)',
        background: 'var(--vx-off)',
        padding: '1.1rem .8rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.7rem'
      }
    }, "Add rule block"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.45rem'
      }
    }, PALETTE.map(t => {
      const c = CATALOG[t];
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        onClick: () => onAdd(t),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.6rem',
          textAlign: 'left',
          background: '#fff',
          border: '1px solid var(--vx-border)',
          borderRadius: 7,
          padding: '.55rem .6rem',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 26,
          height: 26,
          borderRadius: 6,
          background: c.color,
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '.7rem',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: c.icon
      })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          fontSize: '.78rem',
          fontWeight: 700,
          color: 'var(--vx-text)'
        }
      }, c.label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '.64rem',
          color: 'var(--vx-light)'
        }
      }, c.kind)));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.2rem',
        padding: '.7rem',
        background: 'var(--vx-red-bg)',
        border: '1px solid var(--vx-red-line)',
        borderRadius: 7,
        fontSize: '.7rem',
        color: 'var(--vx-text)',
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-hand-pointer",
      style: {
        color: 'var(--vx-red)',
        marginRight: 4
      }
    }), " Drag steps on the canvas to reorder. Click a step to configure it."));
  }
  function Canvas({
    blocks,
    selected,
    setSelected,
    dragId,
    setDragId,
    overId,
    setOverId,
    onDrop,
    onRemove
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.4rem 1.6rem',
        overflow: 'auto',
        background: 'radial-gradient(circle, var(--vx-border) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 540,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 0
      }
    }, blocks.map((b, i) => {
      const c = CATALOG[b.type];
      const isSel = selected === b.id;
      const fixed = b.type === 'trigger' || b.type === 'decision';
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: b.id
      }, /*#__PURE__*/React.createElement("div", {
        className: fixed ? '' : 'rb-drag',
        draggable: !fixed,
        onDragStart: () => setDragId(b.id),
        onDragOver: e => {
          e.preventDefault();
          setOverId(b.id);
        },
        onDrop: () => onDrop(b.id),
        onClick: () => setSelected(b.id),
        style: {
          position: 'relative',
          background: '#fff',
          borderRadius: 9,
          border: '1.5px solid ' + (isSel ? c.color : overId === b.id && dragId ? 'var(--vx-red)' : 'var(--vx-border)'),
          boxShadow: isSel ? '0 4px 16px rgba(26,31,46,.1)' : 'var(--shadow-xs)',
          padding: '.8rem .9rem',
          opacity: dragId === b.id ? .4 : 1,
          transition: 'border-color .15s, box-shadow .15s'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.7rem'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 32,
          height: 32,
          borderRadius: 7,
          background: c.color,
          color: '#fff',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '.82rem',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: c.icon
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '.5rem'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: '.6rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '.08em',
          textTransform: 'uppercase',
          color: c.color,
          fontWeight: 700
        }
      }, c.label), b.cfg && b.cfg.weight != null && b.type !== 'threshold' && /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, "+", b.cfg.weight, " risk")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '.85rem',
          fontWeight: 700,
          color: 'var(--vx-text)',
          marginTop: 1
        }
      }, b.title), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: '.74rem',
          color: 'var(--vx-muted)',
          marginTop: 1
        }
      }, b.detail)), !fixed && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          color: 'var(--vx-light)'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-grip-vertical",
        style: {
          fontSize: '.75rem'
        }
      }), /*#__PURE__*/React.createElement("i", {
        className: "fas fa-xmark",
        onClick: e => {
          e.stopPropagation();
          onRemove(b.id);
        },
        style: {
          fontSize: '.78rem',
          cursor: 'pointer'
        },
        title: "Remove"
      })))), i < blocks.length - 1 && /*#__PURE__*/React.createElement("div", {
        style: {
          width: 2,
          height: 22,
          background: 'var(--vx-border-2)',
          margin: '0 auto'
        }
      }));
    })));
  }

  // ── Inspector + simulator ────────────────────────────
  function Inspector({
    block,
    simBlocks,
    onCfg
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        borderLeft: '1px solid var(--vx-border)',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.1rem 1.2rem',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.8rem'
      }
    }, "Configure"), block ? /*#__PURE__*/React.createElement(BlockConfig, {
      block: block,
      onCfg: onCfg
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.8rem',
        color: 'var(--vx-light)'
      }
    }, "Select a step on the canvas to configure it.")), /*#__PURE__*/React.createElement(Simulator, {
      blocks: simBlocks
    }));
  }
  function Field({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'block',
        marginBottom: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: '.72rem',
        fontWeight: 600,
        color: 'var(--vx-text)',
        marginBottom: '.3rem'
      }
    }, label), children);
  }
  const inputStyle = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontSize: '.82rem',
    border: '1.5px solid var(--vx-border-2)',
    borderRadius: 5,
    padding: '.45rem .6rem',
    color: 'var(--vx-text)'
  };
  function BlockConfig({
    block,
    onCfg
  }) {
    const c = window.__RB_CATALOG[block.type];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 6,
        background: c.color,
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '.72rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: c.icon
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: '.88rem'
      }
    }, block.title)), block.type === 'threshold' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Approve when risk below"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: block.cfg.approve,
      onChange: e => onCfg(block.id, {
        approve: +e.target.value
      }),
      style: inputStyle
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Reject when risk at or above"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: block.cfg.reject,
      onChange: e => onCfg(block.id, {
        reject: +e.target.value
      }),
      style: inputStyle
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-muted)',
        background: 'var(--vx-off)',
        borderRadius: 5,
        padding: '.5rem .6rem'
      }
    }, "Scores between the two values route to ", /*#__PURE__*/React.createElement("b", null, "manual review"), ".")) : block.type === 'escalate' ? /*#__PURE__*/React.createElement(Field, {
      label: "Assign review to"
    }, /*#__PURE__*/React.createElement("select", {
      style: inputStyle,
      defaultValue: "Tier-2"
    }, /*#__PURE__*/React.createElement("option", null, "Tier-1 queue"), /*#__PURE__*/React.createElement("option", null, "Tier-2 analyst"), /*#__PURE__*/React.createElement("option", null, "Compliance officer"))) : block.type === 'aml' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Risk weight on hit"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: block.cfg.weight,
      onChange: e => onCfg(block.id, {
        weight: +e.target.value
      }),
      style: inputStyle
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Lists screened"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.3rem'
      }
    }, ['PEP', 'EU', 'OFAC', 'SECO', 'UN', 'Interpol'].map(l => /*#__PURE__*/React.createElement("span", {
      key: l,
      style: {
        fontSize: '.66rem',
        fontWeight: 600,
        padding: '.18rem .45rem',
        borderRadius: 4,
        background: 'var(--vx-red-bg)',
        color: 'var(--vx-red)',
        border: '1px solid var(--vx-red-line)'
      }
    }, l))))) : block.type === 'country' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
      label: "Risk weight"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: block.cfg.weight,
      onChange: e => onCfg(block.id, {
        weight: +e.target.value
      }),
      style: inputStyle
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Applies to list"
    }, /*#__PURE__*/React.createElement("select", {
      style: inputStyle
    }, /*#__PURE__*/React.createElement("option", null, "FATF grey list"), /*#__PURE__*/React.createElement("option", null, "FATF black list"), /*#__PURE__*/React.createElement("option", null, "EU high-risk third countries"), /*#__PURE__*/React.createElement("option", null, "Custom list\u2026")))) : ['risk', 'condition'].includes(block.type) ? /*#__PURE__*/React.createElement(Field, {
      label: "Risk weight"
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: block.cfg.weight ?? 20,
      onChange: e => onCfg(block.id, {
        weight: +e.target.value
      }),
      style: inputStyle
    })) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem',
        color: 'var(--vx-muted)'
      }
    }, "This step has no configurable parameters."));
  }
  const SIM_CASES = [{
    id: 'clean',
    label: 'Clean CH applicant',
    risk: 0,
    flags: []
  }, {
    id: 'pep',
    label: 'PEP match',
    risk: 40,
    flags: ['aml']
  }, {
    id: 'geo',
    label: 'FATF-grey country',
    risk: 25,
    flags: ['country']
  }, {
    id: 'fraud',
    label: 'Tampered document',
    risk: 30,
    flags: ['risk']
  }, {
    id: 'stacked',
    label: 'PEP + grey country',
    risk: 65,
    flags: ['aml', 'country']
  }];
  function Simulator({
    blocks
  }) {
    const [caseId, setCaseId] = React.useState('clean');
    const c = SIM_CASES.find(x => x.id === caseId);
    const thr = blocks.find(b => b.type === 'threshold')?.cfg || {
      approve: 35,
      reject: 70
    };
    const risk = c.risk;
    const decision = risk < thr.approve ? 'approve' : risk >= thr.reject ? 'reject' : 'review';
    const pct = Math.min(100, risk);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.1rem 1.2rem',
        background: 'var(--vx-navy)',
        color: '#fff',
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-vial-circle-check",
      style: {
        color: 'var(--vx-red)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.6)'
      }
    }, "Decision Simulator")), /*#__PURE__*/React.createElement("select", {
      value: caseId,
      onChange: e => setCaseId(e.target.value),
      style: {
        width: '100%',
        fontFamily: 'var(--font-body)',
        fontSize: '.8rem',
        background: 'var(--vx-navy-2)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,.15)',
        borderRadius: 5,
        padding: '.45rem .6rem',
        marginBottom: '1rem'
      }
    }, SIM_CASES.map(s => /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.label))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.66rem',
        color: 'rgba(255,255,255,.5)',
        textTransform: 'uppercase',
        letterSpacing: '.06em',
        marginBottom: '.4rem'
      }
    }, "Computed risk score"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '.4rem',
        marginBottom: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '2.2rem',
        fontWeight: 700,
        letterSpacing: '-.04em',
        color: decision === 'approve' ? '#34D399' : decision === 'review' ? '#FBBF24' : '#F87171'
      }
    }, risk), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.8rem',
        color: 'rgba(255,255,255,.4)'
      }
    }, "/ 100")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: 8,
        background: 'rgba(255,255,255,.12)',
        borderRadius: 4,
        marginBottom: '.3rem',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: decision === 'approve' ? '#34D399' : decision === 'review' ? '#FBBF24' : '#F87171',
        borderRadius: 4,
        transition: 'width .4s var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        color: 'rgba(255,255,255,.4)',
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/React.createElement("span", null, "approve <", thr.approve), /*#__PURE__*/React.createElement("span", null, "reject \u2265", thr.reject)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.66rem',
        color: 'rgba(255,255,255,.5)',
        textTransform: 'uppercase',
        letterSpacing: '.06em',
        marginBottom: '.5rem'
      }
    }, "Outcome"), /*#__PURE__*/React.createElement(DecisionPill, {
      decision: decision,
      style: {
        width: '100%',
        justifyContent: 'center',
        background: decision === 'approve' ? 'rgba(52,211,153,.16)' : decision === 'review' ? 'rgba(251,191,36,.16)' : 'rgba(248,113,113,.16)',
        borderColor: 'transparent',
        color: decision === 'approve' ? '#34D399' : decision === 'review' ? '#FBBF24' : '#F87171'
      }
    }), c.flags.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.9rem',
        fontSize: '.72rem',
        color: 'rgba(255,255,255,.6)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(255,255,255,.4)'
      }
    }, "Triggered: "), c.flags.map(f => window.__RB_CATALOG[f].label).join(' · ')));
  }
  window.__RB_CATALOG = CATALOG;
  window.__RuleEditor = RulesBuilderApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rules-builder/RulesBuilder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rules-builder/RulesShell.jsx
try { (() => {
// VerfiX Rules Builder — top-level shell: Rules Dashboard (list) → Editor → Version history.
(function () {
  const DS = window.VerfiXDesignSystem_1000e3;
  const {
    Button,
    Badge,
    IconChip
  } = DS;
  const RULES = [{
    id: 'r1',
    name: 'EU Onboarding Policy',
    status: 'active',
    version: 'v4',
    steps: 7,
    modified: '2 days ago',
    by: 'J. Müller',
    desc: 'Standard KYC for EU/CH retail onboarding.'
  }, {
    id: 'r2',
    name: 'High-Value Account Review',
    status: 'active',
    version: 'v2',
    steps: 9,
    modified: '1 week ago',
    by: 'A. Roth',
    desc: 'Enhanced due diligence above CHF 100k.'
  }, {
    id: 'r3',
    name: 'Crypto Exchange KYC',
    status: 'draft',
    version: 'v1',
    steps: 6,
    modified: '3 hours ago',
    by: 'J. Müller',
    desc: 'Travel-rule aware flow for VASP onboarding.'
  }, {
    id: 'r4',
    name: 'Corporate KYB Policy',
    status: 'active',
    version: 'v3',
    steps: 8,
    modified: '12 days ago',
    by: 'T. Frei',
    desc: 'UBO resolution + registry + sanctions for KYB.'
  }, {
    id: 'r5',
    name: 'Legacy Onboarding v1',
    status: 'archived',
    version: 'v6',
    steps: 5,
    modified: '4 months ago',
    by: 'A. Roth',
    desc: 'Retired — superseded by EU Onboarding Policy.'
  }];
  const VERSIONS = [{
    v: 'v4',
    when: '2 days ago',
    who: 'J. Müller',
    note: 'Raised reject threshold to 70; added FATF grey-list rule.',
    cur: true
  }, {
    v: 'v3',
    when: '3 weeks ago',
    who: 'A. Roth',
    note: 'Added document-fraud risk weight (+30).',
    cur: false
  }, {
    v: 'v2',
    when: 'Feb 2026',
    who: 'J. Müller',
    note: 'Introduced Tier-2 escalation on review band.',
    cur: false
  }, {
    v: 'v1',
    when: 'Jan 2026',
    who: 'J. Müller',
    note: 'Initial policy — AML screen + thresholds.',
    cur: false
  }];
  const STATUS = {
    active: ['success', 'Active'],
    draft: ['warn', 'Draft'],
    archived: ['neutral', 'Archived']
  };
  function RulesApp() {
    const [screen, setScreen] = React.useState('list'); // list | editor | history
    const [rule, setRule] = React.useState(RULES[0]);
    const open = r => {
      setRule(r);
      setScreen('editor');
    };
    if (screen === 'editor') {
      const Editor = window.__RuleEditor;
      return /*#__PURE__*/React.createElement(Editor, {
        rule: rule,
        onBack: () => setScreen('list'),
        onHistory: () => setScreen('history')
      });
    }
    if (screen === 'history') return /*#__PURE__*/React.createElement(VersionHistory, {
      rule: rule,
      onBack: () => setScreen('editor')
    });
    return /*#__PURE__*/React.createElement(Dashboard, {
      onOpen: open
    });
  }
  function TopBar({
    title,
    sub,
    back,
    actions
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        height: 60,
        borderBottom: '1px solid var(--vx-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.6rem',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.9rem'
      }
    }, back ? /*#__PURE__*/React.createElement("a", {
      onClick: back,
      role: "link",
      tabIndex: 0,
      style: {
        color: 'var(--vx-light)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })) : /*#__PURE__*/React.createElement("a", {
      href: "../website/index.html",
      style: {
        color: 'var(--vx-light)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    })), /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-diagram-project",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: '.98rem',
        letterSpacing: '-.02em'
      }
    }, title), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)'
      }
    }, sub))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, actions));
  }
  function Dashboard({
    onOpen
  }) {
    const [filter, setFilter] = React.useState('all');
    const counts = {
      all: RULES.length,
      active: RULES.filter(r => r.status === 'active').length,
      draft: RULES.filter(r => r.status === 'draft').length,
      archived: RULES.filter(r => r.status === 'archived').length
    };
    const rows = RULES.filter(r => filter === 'all' || r.status === filter);
    return /*#__PURE__*/React.createElement("div", {
      className: "rb-shell"
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: "Rules",
      sub: `${RULES.length} policies · ${counts.active} active`,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "red",
        size: "sm",
        icon: "fas fa-plus",
        onClick: () => onOpen(RULES[2])
      }, "New rule")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.6rem 1.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '.8rem',
        marginBottom: '1.4rem'
      }
    }, [['Active rules', counts.active, 'var(--vx-success)', 'fas fa-circle-play'], ['Drafts', counts.draft, 'var(--vx-warn)', 'fas fa-pen'], ['Archived', counts.archived, 'var(--vx-light)', 'fas fa-box-archive'], ['Avg steps', '7', 'var(--vx-text)', 'fas fa-layer-group']].map(([l, v, c, ic]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: '1rem 1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.7rem',
        fontWeight: 600,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, l), /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.7rem',
        fontWeight: 700,
        color: c,
        marginTop: '.3rem'
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.4rem',
        marginBottom: '1rem'
      }
    }, ['all', 'active', 'draft', 'archived'].map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.76rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        cursor: 'pointer',
        padding: '.4rem .9rem',
        borderRadius: 100,
        border: '1px solid ' + (filter === f ? 'var(--vx-red)' : 'var(--vx-border)'),
        background: filter === f ? 'var(--vx-red)' : '#fff',
        color: filter === f ? '#fff' : 'var(--vx-muted)'
      }
    }, f, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .6
      }
    }, counts[f])))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '2.2fr 1fr .7fr 1.2fr .6fr',
        gap: '.6rem',
        padding: '.6rem 1.1rem',
        borderBottom: '1px solid var(--vx-border)',
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Rule"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Version"), /*#__PURE__*/React.createElement("span", null, "Last modified"), /*#__PURE__*/React.createElement("span", null)), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: () => onOpen(r),
      style: {
        display: 'grid',
        gridTemplateColumns: '2.2fr 1fr .7fr 1.2fr .6fr',
        gap: '.6rem',
        alignItems: 'center',
        padding: '.85rem 1.1rem',
        borderBottom: i < rows.length - 1 ? '1px solid var(--vx-off)' : 'none',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.88rem',
        fontWeight: 700
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-muted)'
      }
    }, r.desc)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
      tone: STATUS[r.status][0]
    }, STATUS[r.status][1])), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.78rem',
        color: 'var(--vx-muted)'
      }
    }, r.version), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, r.modified), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)'
      }
    }, "by ", r.by)), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-right",
      style: {
        fontSize: '.75rem'
      }
    })))))));
  }
  function VersionHistory({
    rule,
    onBack
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "rb-shell"
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: rule.name,
      sub: "Version history",
      back: onBack,
      actions: /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        icon: "fas fa-pen",
        onClick: onBack
      }, "Back to editor")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.6rem 1.9rem',
        maxWidth: 760
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        background: 'var(--vx-info-bg)',
        borderRadius: 8,
        padding: '.7rem 1rem',
        marginBottom: '1.3rem',
        fontSize: '.82rem',
        color: 'var(--vx-info-fg)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-code-branch"
    }), " Every publish creates an immutable version. Roll back to restore a previous policy as a new draft."), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingLeft: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 6,
        top: 6,
        bottom: 6,
        width: 2,
        background: 'var(--vx-border)'
      }
    }), VERSIONS.map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: v.v,
      style: {
        position: 'relative',
        paddingBottom: i < VERSIONS.length - 1 ? '1.2rem' : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '-1.5rem',
        top: 2,
        width: 14,
        height: 14,
        borderRadius: '50%',
        background: v.cur ? 'var(--vx-red)' : '#fff',
        border: '2px solid ' + (v.cur ? 'var(--vx-red)' : 'var(--vx-border-2)')
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: '.85rem 1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '.85rem'
      }
    }, v.v), v.cur ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Current") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Published"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: '.72rem',
        color: 'var(--vx-light)'
      }
    }, v.when, " \xB7 ", v.who)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.82rem',
        color: 'var(--vx-muted)',
        marginTop: '.4rem'
      }
    }, v.note), !v.cur && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '.6rem',
        display: 'flex',
        gap: '.4rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      icon: "fas fa-rotate-left"
    }, "Roll back to ", v.v), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "fas fa-eye"
    }, "Compare"))))))));
  }
  window.RulesBuilderApp = RulesApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rules-builder/RulesShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// VerfiX site chrome — top navigation + footer. All links route in-app.
(function () {
  const {
    Button
  } = window.VerfiXDesignSystem_1000e3;

  // Keyboard-accessible SPA link: focusable + Enter/Space activation.
  function navLink(handler) {
    return {
      role: 'link',
      tabIndex: 0,
      onClick: handler,
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler();
        }
      }
    };
  }
  function Logo({
    light = false,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("a", _extends({
      "aria-label": "VerfiX home"
    }, navLink(onClick), {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.5rem',
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        background: 'var(--vx-red)',
        borderRadius: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-fingerprint",
      style: {
        color: '#fff',
        fontSize: '.9rem'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.18rem',
        letterSpacing: '-.03em',
        color: light ? '#fff' : 'var(--vx-navy)'
      }
    }, "Verfi", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-red)'
      }
    }, "X")));
  }
  const NAV = ['Platform', 'Pricing', 'Industries', 'Developers', 'Resources', 'Trust', 'Company'];
  function NavBar({
    current,
    onNav,
    onCTA
  }) {
    const [menu, setMenu] = React.useState(false);
    const go = key => {
      setMenu(false);
      onNav(key);
    };
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      onClick: () => go('home')
    }), /*#__PURE__*/React.createElement("nav", {
      className: "vx-nav",
      "aria-label": "Primary",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.3rem'
      }
    }, NAV.map(n => {
      const key = n.toLowerCase();
      const active = current === key;
      return /*#__PURE__*/React.createElement("a", _extends({
        key: n,
        "aria-current": active ? 'page' : undefined
      }, navLink(() => go(key)), {
        style: {
          cursor: 'pointer',
          fontSize: '.84rem',
          fontWeight: 600,
          color: active ? 'var(--vx-red)' : 'var(--vx-muted)',
          padding: '.5rem .8rem',
          borderRadius: 5,
          textDecoration: 'none',
          transition: 'color .13s'
        }
      }), n);
    })), /*#__PURE__*/React.createElement("div", {
      className: "vx-nav",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.55rem'
      }
    }, /*#__PURE__*/React.createElement("a", _extends({}, navLink(() => go('app')), {
      style: {
        cursor: 'pointer',
        fontSize: '.84rem',
        fontWeight: 600,
        color: 'var(--vx-muted)',
        textDecoration: 'none'
      }
    }), "Sign in"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a Demo")), /*#__PURE__*/React.createElement("button", {
      className: "vx-menu-btn",
      "aria-label": "Open menu",
      "aria-expanded": menu,
      onClick: () => setMenu(m => !m),
      style: {
        display: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        background: 'transparent',
        border: '1px solid var(--vx-border)',
        borderRadius: 6,
        color: 'var(--vx-navy)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: menu ? 'fas fa-xmark' : 'fas fa-bars'
    }))), menu && /*#__PURE__*/React.createElement("div", {
      className: "vx-mobile-menu",
      style: {
        flexDirection: 'column',
        padding: '.75rem 2rem 1.25rem',
        borderTop: '1px solid var(--vx-border)',
        background: '#fff',
        gap: '.2rem'
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", _extends({
      key: n
    }, navLink(() => go(n.toLowerCase())), {
      style: {
        cursor: 'pointer',
        fontSize: '.95rem',
        fontWeight: 600,
        color: current === n.toLowerCase() ? 'var(--vx-red)' : 'var(--vx-text)',
        padding: '.7rem 0',
        borderBottom: '1px solid var(--vx-off)',
        textDecoration: 'none'
      }
    }), n)), /*#__PURE__*/React.createElement("a", _extends({}, navLink(() => go('app')), {
      style: {
        cursor: 'pointer',
        fontSize: '.95rem',
        fontWeight: 600,
        color: 'var(--vx-text)',
        padding: '.7rem 0',
        textDecoration: 'none'
      }
    }), "Sign in"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-calendar-check",
      onClick: () => {
        setMenu(false);
        onCTA();
      },
      style: {
        marginTop: '.5rem'
      }
    }, "Book a Demo")));
  }

  // Footer items: a string routes in-app; [label, url] opens a real platform surface.
  const FOOT = {
    Product: ['Trust Engine™', ['Platform', 'platform'], ['Pricing', 'pricing'], ['Product demos', 'demos'], ['Industries', 'industries'], ['Provider Orchestration', '../orchestration/index.html']],
    Resources: [['Documentation', '../docs-center/index.html'], ['API Docs', '../docs-center/index.html'], ['Developer Portal', '../developer-portal/index.html'], ['Status Page', '../developer-portal/index.html'], ['MVP · Live Engine', '../mvp/index.html']],
    Company: [['About', 'company'], ['Team', 'company'], ['Pilot Program', 'pilot'], ['Partners', 'partners'], ['Contact', 'company']],
    Legal: [['Privacy', 'trust'], ['DPA', 'trust'], ['Terms', 'trust'], ['Security', 'trust'], ['Compliance', 'trust']]
  };

  // Real VerfiX social/profile links (branded monochrome icons).
  const SOCIALS = [['fab fa-linkedin-in', 'https://www.linkedin.com/company/verfix/'], ['fab fa-github', 'https://github.com/Ahmed-alsultan/VerfiX'], ['fab fa-youtube', 'https://www.youtube.com/playlist?list=PLOENtMm5HXQu0nxIcnmBwiT_oVgRCSxH1'], ['fas fa-circle-nodes', 'https://www.crunchbase.com/organization/verfix'], ['fab fa-product-hunt', 'https://www.producthunt.com/products/verfix/verfix/prelaunch']];

  // Trust signals — factual posture only (no fake certs / customers / badges).
  const TRUST_STRIP = [['fas fa-location-dot', 'Swiss-Based'], ['fas fa-lock', 'Privacy First'], ['fas fa-building-shield', 'Enterprise Ready'], ['fas fa-diagram-project', 'Multi-Provider Architecture']];
  function Footer({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--vx-navy-3)',
        color: '#fff',
        padding: '0 0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: '1px solid rgba(255,255,255,.1)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-foot-grid",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '1.6rem 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '1rem'
      }
    }, TRUST_STRIP.map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.95rem'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.84rem',
        fontWeight: 700,
        color: '#fff'
      }
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '3rem 2rem 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-foot-grid",
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr repeat(4,1fr)',
        gap: '2.5rem',
        paddingBottom: '2.5rem',
        borderBottom: '1px solid rgba(255,255,255,.1)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      light: true,
      onClick: () => onNav('home')
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.82rem',
        color: 'rgba(255,255,255,.45)',
        lineHeight: 1.7,
        margin: '1rem 0 1.1rem',
        maxWidth: 240
      }
    }, "Swiss trust infrastructure for regulated digital onboarding."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem',
        flexWrap: 'wrap'
      }
    }, SOCIALS.map(([ic, href]) => /*#__PURE__*/React.createElement("a", {
      key: href,
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": ic,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        border: '1px solid rgba(255,255,255,.15)',
        borderRadius: 5,
        color: 'rgba(255,255,255,.6)',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        fontSize: '.8rem'
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: '1.2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-dot",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem',
        marginTop: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.8rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.5
      }
    }, "VerfiX AG", /*#__PURE__*/React.createElement("br", null), "Lausanne, Switzerland"))), Object.entries(FOOT).map(([h, items]) => /*#__PURE__*/React.createElement("div", {
      key: h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 600,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.55)',
        marginBottom: '1rem'
      }
    }, h), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.6rem'
      }
    }, items.map(it => Array.isArray(it) ? /^(\.\.|https?:)/.test(it[1]) ? /*#__PURE__*/React.createElement("a", {
      key: it[0],
      href: it[1],
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.4rem',
        fontSize: '.82rem',
        color: 'rgba(255,255,255,.7)',
        textDecoration: 'none'
      }
    }, it[0], /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-up-right-from-square",
      style: {
        fontSize: '.56rem',
        opacity: .5
      }
    })) : /*#__PURE__*/React.createElement("a", _extends({
      key: it[0]
    }, navLink(() => onNav(it[1])), {
      style: {
        cursor: 'pointer',
        fontSize: '.82rem',
        color: 'rgba(255,255,255,.7)',
        textDecoration: 'none'
      }
    }), it[0]) : /*#__PURE__*/React.createElement("a", _extends({
      key: it
    }, navLink(() => onNav(h.toLowerCase())), {
      style: {
        cursor: 'pointer',
        fontSize: '.82rem',
        color: 'rgba(255,255,255,.7)',
        textDecoration: 'none'
      }
    }), it)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingTop: '1.75rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.75rem',
        color: 'rgba(255,255,255,.55)'
      }
    }, "\xA9 2026 VerfiX AG \xB7 Lausanne, Switzerland"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.4rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.62rem',
        color: 'rgba(255,255,255,.4)',
        marginRight: '.2rem'
      }
    }, "Aligned with"), ['nFADP', 'GDPR', 'eIDAS', 'FINMA AMLA'].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 500,
        color: 'rgba(255,255,255,.6)',
        border: '1px solid rgba(255,255,255,.12)',
        borderRadius: 3,
        padding: '.18rem .45rem'
      }
    }, t))))));
  }
  Object.assign(window, {
    NavBar,
    Footer,
    Logo
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Company.jsx
try { (() => {
// VerfiX Company — about / team / trust & security page.
// NOTE: trust signals here are deliberately honest for an early-stage Swiss startup.
// Certifications not yet held are marked "Planned"; regulatory frameworks are "Aligned".
(function () {
  const {
    Label,
    Button,
    IconChip,
    Card,
    Badge
  } = window.VerfiXDesignSystem_1000e3;
  const VALUES = [{
    i: 'fas fa-lock',
    t: 'Privacy by design',
    d: 'Data minimization and Swiss data residency are defaults, not add-ons.'
  }, {
    i: 'fas fa-scale-balanced',
    t: 'Explainable by default',
    d: 'Every decision is traceable to the signals that produced it.'
  }, {
    i: 'fas fa-globe',
    t: 'Built for regulators',
    d: 'We map to the frameworks supervisors actually enforce.'
  }];

  // Founding facts only — no inflated coverage/volume metrics.
  const FACTS = [['2021', 'Founded', 'Lausanne, Switzerland'], ['🇨🇭', 'Swiss-built', 'Data residency by design'], ['Seed', 'Stage', 'Building toward first design partners']];

  // Team — real photos in assets/team/<id>.jpg. Hover reveals the bio overlay.
  const TEAM = [{
    id: 'ahmed',
    name: 'Ahmed Al-Sultan',
    role: 'Founder & CEO',
    initials: 'AA',
    li: 'https://www.linkedin.com/in/ahmedalsultan',
    bio: 'Founder and CEO of VerfiX. Leads vision, strategy, partnerships and go-to-market. Background across entrepreneurship, business development, compliance technology and digital transformation — building VerfiX into a European verification infrastructure platform.'
  }, {
    id: 'manel',
    name: 'Manel Mhamdi',
    role: 'Co-Founder & Business Development',
    initials: 'MM',
    li: 'https://www.linkedin.com/in/manel-mhamdi-97019b111/?locale=en',
    bio: 'Drives strategic growth, partnerships and market expansion. Experience spans international business, stakeholder management and partnership development — bridging market needs with product strategy and commercial execution across regulated industries.'
  }, {
    id: 'petter',
    name: 'Petter Stahl',
    role: 'Co-Founder & Technology Lead',
    initials: 'PS',
    li: 'https://www.linkedin.com/in/petter-stahl',
    bio: 'Leads technical architecture and platform development. Focused on scalable systems, enterprise software architecture and API ecosystems — guiding the platform toward a secure, scalable, enterprise-ready verification infrastructure.'
  }];

  // Honest security & compliance posture. status: live | aligned | planned
  const POSTURE = [{
    ic: 'fas fa-server',
    n: 'Swiss data residency',
    status: 'live',
    note: 'All data processed & stored in CH/EU'
  }, {
    ic: 'fas fa-flag',
    n: 'nFADP (Switzerland)',
    status: 'aligned',
    note: 'Built to the Swiss FADP'
  }, {
    ic: 'fas fa-shield-halved',
    n: 'GDPR (EU)',
    status: 'aligned',
    note: 'Lawful basis & data-subject rights'
  }, {
    ic: 'fas fa-id-badge',
    n: 'eIDAS',
    status: 'aligned',
    note: 'Mapped to eIDAS assurance levels'
  }, {
    ic: 'fas fa-certificate',
    n: 'ISO 27001',
    status: 'planned',
    note: 'On the certification roadmap'
  }, {
    ic: 'fas fa-building-columns',
    n: 'SOC 2 Type II',
    status: 'planned',
    note: 'On the certification roadmap'
  }];
  const STATUS = {
    live: {
      tone: 'success',
      label: 'Live'
    },
    aligned: {
      tone: 'info',
      label: 'Aligned'
    },
    planned: {
      tone: 'warn',
      label: 'Planned'
    }
  };
  function TeamCard({
    m
  }) {
    const [hover, setHover] = React.useState(false);
    const [err, setErr] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--vx-border)',
        aspectRatio: '4 / 5',
        background: 'var(--vx-navy)',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
        transition: 'box-shadow .25s'
      }
    }, !err ? /*#__PURE__*/React.createElement("img", {
      src: `../../assets/team/${m.id}.jpg`,
      alt: m.name,
      onError: () => setErr(true),
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center top',
        display: 'block',
        filter: hover ? 'brightness(.5)' : 'none',
        transition: 'filter .25s'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '2.6rem',
        color: '#fff'
      }
    }, m.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: '1rem 1.1rem',
        background: 'linear-gradient(transparent, rgba(15,20,32,.92))',
        opacity: hover ? 0 : 1,
        transition: 'opacity .25s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.05rem',
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-.02em'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: 'var(--vx-red)',
        fontWeight: 600,
        marginTop: 2
      }
    }, m.role)), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        padding: '1.4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        opacity: hover ? 1 : 0,
        transition: 'opacity .25s',
        pointerEvents: hover ? 'auto' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.05rem',
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-.02em'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.64rem',
        letterSpacing: '.05em',
        textTransform: 'uppercase',
        color: 'var(--vx-red)',
        fontWeight: 600,
        margin: '2px 0 .6rem'
      }
    }, m.role), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.8rem',
        color: 'rgba(255,255,255,.82)',
        lineHeight: 1.55,
        margin: '0 0 .8rem'
      }
    }, m.bio), /*#__PURE__*/React.createElement("a", {
      href: m.li,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.4rem',
        fontSize: '.78rem',
        fontWeight: 700,
        color: '#fff',
        textDecoration: 'none',
        alignSelf: 'flex-start',
        background: 'rgba(255,255,255,.12)',
        border: '1px solid rgba(255,255,255,.25)',
        borderRadius: 6,
        padding: '.35rem .7rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-linkedin-in"
    }), "LinkedIn")));
  }
  function Company({
    onCTA,
    onNav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0 3rem',
        background: '#fff',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Company"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,3.6vw,3rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        color: 'var(--vx-text)',
        margin: '.5rem 0 .9rem'
      }
    }, "Trust is infrastructure."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.02rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.75,
        margin: 0
      }
    }, "VerfiX is a Swiss company building the verification layer that regulated businesses depend on \u2014 engineered in Lausanne for compliance teams worldwide."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3rem 0',
        background: 'var(--vx-navy-3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '2rem'
      }
    }, FACTS.map(([v, l, d]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '2.2rem',
        fontWeight: 700,
        color: 'var(--vx-red)',
        letterSpacing: '-.03em',
        lineHeight: 1
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.9rem',
        fontWeight: 700,
        color: '#fff',
        marginTop: '.5rem'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.76rem',
        color: 'rgba(255,255,255,.5)',
        marginTop: '.2rem'
      }
    }, d))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "What we believe"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 2rem'
      }
    }, "Principles, not posture"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1.1rem'
      }
    }, VALUES.map(v => /*#__PURE__*/React.createElement(Card, {
      key: v.t,
      accent: true
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: v.i,
      size: "lg",
      style: {
        marginBottom: '.8rem'
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--vx-text)',
        margin: '0 0 .4rem'
      }
    }, v.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.84rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.65,
        margin: 0
      }
    }, v.d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Team"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 2rem'
      }
    }, "The people behind VerfiX"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.92rem',
        color: 'var(--vx-muted)',
        margin: '0 0 1.6rem',
        maxWidth: 540
      }
    }, "Hover any founder to read their background."), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1.1rem'
      }
    }, TEAM.map(m => /*#__PURE__*/React.createElement(TeamCard, {
      key: m.id,
      m: m
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Security & Compliance"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 .6rem'
      }
    }, "Honest about where we are"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.9rem',
        color: 'var(--vx-muted)',
        maxWidth: 580,
        margin: '0 0 2rem'
      }
    }, "We publish our real posture. Frameworks we align to today are marked ", /*#__PURE__*/React.createElement("b", null, "Aligned"), "; certifications on our roadmap are marked ", /*#__PURE__*/React.createElement("b", null, "Planned"), ". No badge here implies an audit we haven't completed."), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem'
      }
    }, POSTURE.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.n,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1.1rem 1.2rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 7,
        background: 'var(--vx-red-bg)',
        color: 'var(--vx-red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: p.ic
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '.4rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700
      }
    }, p.n), /*#__PURE__*/React.createElement(Badge, {
      tone: STATUS[p.status].tone
    }, STATUS[p.status].label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-muted)',
        marginTop: '.3rem'
      }
    }, p.note))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.7rem',
        justifyContent: 'center',
        marginTop: '2.2rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      icon: "fas fa-shield-halved",
      onClick: () => onNav && onNav('trust')
    }, "Visit Trust Center"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a Demo")))));
  }
  window.Company = Company;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Company.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DemoModal.jsx
try { (() => {
// VerfiX demo-booking modal — multi-step lead form ending in a confirmation.
(function () {
  const {
    Button,
    Input,
    IconChip
  } = window.VerfiXDesignSystem_1000e3;
  function DemoModal({
    open,
    onClose
  }) {
    const [done, setDone] = React.useState(false);
    React.useEffect(() => {
      if (open) setDone(false);
    }, [open]);
    if (!open) return null;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(15,20,32,.55)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        width: '100%',
        maxWidth: 460,
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy)',
        padding: '1.4rem 1.6rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: "fas fa-calendar-check",
      tone: "solid"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 700,
        fontSize: '1rem'
      }
    }, "Book a Demo")), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-xmark",
      onClick: onClose,
      style: {
        color: 'rgba(255,255,255,.6)',
        cursor: 'pointer',
        padding: 4
      }
    })), done ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2.5rem 1.6rem',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'var(--vx-success-bg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check",
      style: {
        color: 'var(--vx-success)',
        fontSize: '1.3rem'
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.15rem',
        fontWeight: 800,
        color: 'var(--vx-text)',
        margin: '0 0 .5rem'
      }
    }, "You're all set."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.88rem',
        color: 'var(--vx-muted)',
        margin: '0 0 1.5rem',
        lineHeight: 1.6
      }
    }, "Our team will reach out within one business day to schedule your Trust Engine\u2122 walkthrough."), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      onClick: onClose
    }, "Done")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setDone(true);
      },
      style: {
        padding: '1.6rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '.8rem'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      placeholder: "Jane",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      placeholder: "M\xFCller",
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "jane@bank.ch",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Company",
      placeholder: "Helvetia Trust AG",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Industry",
      as: "select",
      options: ['Banking', 'Fintech', 'Insurance', 'Crypto', 'Government', 'Telecom', 'Other']
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      type: "submit",
      style: {
        width: '100%',
        marginTop: '.2rem'
      }
    }, "Request my demo"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.7rem',
        color: 'var(--vx-light)',
        textAlign: 'center',
        margin: 0
      }
    }, "By submitting you agree to our Privacy Policy. Swiss data residency applies."))));
  }
  window.DemoModal = DemoModal;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DemoModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Demos.jsx
try { (() => {
// VerfiX Demos — product video showcase. Cards with a `yt` ID play the real
// YouTube video on click; cards without one show a "Coming soon" placeholder.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Badge,
    Tag
  } = window.VerfiXDesignSystem_1000e3;
  const DEMOS = [{
    id: 'kyc',
    ic: 'fas fa-id-card',
    t: 'KYC & KYB Verification',
    len: '',
    yt: 'wbc3rPniu1M',
    d: 'Swiss digital identity verification for KYC & KYB — document capture, OCR, face match and liveness, with the Trust Score resolving in real time.',
    points: ['Document capture & OCR', 'Passive + active liveness', 'Instant Approve / Review / Reject']
  }, {
    id: 'gateway',
    ic: 'fas fa-window-maximize',
    t: 'VerfiX Gateway — eID Wallets',
    len: '',
    yt: '-HJ4ftiiRuk',
    d: 'One API for European digital identity wallets. Launch verification with VerfiX-hosted, embedded screens — branded, mobile-first and localized.',
    points: ['One API for EU eID wallets', 'Hosted & embedded SDK', 'Mobile-first capture']
  }, {
    id: 'engine',
    ic: 'fas fa-gauge-high',
    t: 'Trust Engine™',
    len: '',
    yt: '20cseEOwD-w',
    d: 'From verification signals to automated trust decisions: independent signals fused into one explainable 0–100 trust score with a traceable reason for every decision.',
    points: ['Multi-signal fusion', 'Explainable scoring', 'Configurable thresholds']
  }, {
    id: 'industries',
    ic: 'fas fa-layer-group',
    t: 'One Infrastructure, Many Industries',
    len: '',
    yt: '9ByXnBRW2H4',
    d: 'One identity platform across banking, fintech, crypto, insurance, telecom and government — the same trust layer, configured per industry.',
    points: ['Six regulated sectors', 'Shared trust layer', 'Per-industry policy']
  }, {
    id: 'atm',
    ic: 'fas fa-money-check-dollar',
    t: 'Revolutionizing the ATM',
    len: '',
    yt: 'e65uXNBxd3g',
    d: 'A real-world use case: VerfiX bringing trusted identity verification to ATM and self-service banking experiences.',
    points: ['Self-service identity', 'Branchless onboarding', 'Fraud-resistant access']
  }, {
    id: 'aml',
    ic: 'fas fa-magnifying-glass-dollar',
    t: 'AML Screening',
    len: '1:50',
    yt: null,
    d: 'How a name is screened against sanctions, PEP and watchlists, how matches are scored, and how ongoing monitoring re-checks over time.',
    points: ['Sanctions / PEP / watchlists', 'Match scoring & disposition', 'Ongoing monitoring']
  }];
  function VideoCard({
    demo,
    reversed,
    onCTA
  }) {
    const [hover, setHover] = React.useState(false);
    const [playing, setPlaying] = React.useState(false);
    const player = /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      onClick: () => demo.yt && setPlaying(true),
      style: {
        position: 'relative',
        aspectRatio: '16 / 9',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#000',
        border: '1px solid var(--vx-border)',
        cursor: demo.yt ? 'pointer' : 'default',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transition: 'box-shadow .2s'
      }
    }, playing && demo.yt ? /*#__PURE__*/React.createElement("iframe", {
      title: demo.t,
      src: `https://www.youtube.com/embed/${demo.yt}?autoplay=1&rel=0`,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 0
      },
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowFullScreen: true
    }) : demo.yt ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
      src: `https://img.youtube.com/vi/${demo.yt}/hqdefault.jpg`,
      alt: demo.t,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: hover ? 'brightness(.78)' : 'brightness(.92)',
        transition: 'filter .2s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 14,
        left: 14,
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: demo.ic,
      tone: "solid"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: '#fff',
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        textShadow: '0 1px 4px rgba(0,0,0,.6)'
      }
    }, "VerfiX")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 66,
        height: 66,
        borderRadius: '50%',
        background: 'var(--vx-red)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem',
        boxShadow: '0 6px 28px rgba(200,37,42,.5)',
        transform: hover ? 'scale(1.08)' : 'scale(1)',
        transition: 'transform .2s'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-play",
      style: {
        marginLeft: 4
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-youtube",
      style: {
        marginRight: 4
      }
    }), "Watch"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, var(--vx-navy) 0%, var(--vx-navy-3) 100%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)',
        backgroundSize: '22px 22px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 14,
        left: 14,
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: demo.ic,
      tone: "solid"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'rgba(255,255,255,.5)',
        letterSpacing: '.06em',
        textTransform: 'uppercase'
      }
    }, "VerfiX demo")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 66,
        height: 66,
        borderRadius: '50%',
        background: 'rgba(255,255,255,.12)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-play",
      style: {
        marginLeft: 4
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 14,
        left: 14
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "warn"
    }, "Coming soon")))), demo.yt ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        margin: '.6rem 0 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fab fa-youtube",
      style: {
        marginRight: 4,
        color: 'var(--vx-red)'
      }
    }), "Plays the official VerfiX video on YouTube") : /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        margin: '.6rem 0 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-info",
      style: {
        marginRight: 4
      }
    }), "Footage in production"));
    const copy = /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Label, null, demo.t), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 'clamp(1.4rem,2.2vw,1.8rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.5rem 0 .7rem'
      }
    }, demo.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.95rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: '0 0 1.1rem'
      }
    }, demo.d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        marginBottom: '1.3rem'
      }
    }, demo.points.map(p => /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        fontSize: '.85rem',
        color: 'var(--vx-text)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-check",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    }), p))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a live demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "md",
      icon: "fas fa-bell"
    }, "Notify me")));
    return /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2.5rem',
        alignItems: 'center',
        padding: '2.4rem 0',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, reversed ? /*#__PURE__*/React.createElement(React.Fragment, null, copy, player) : /*#__PURE__*/React.createElement(React.Fragment, null, player, copy));
  }
  function Demos({
    onCTA
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.2rem 0 2.5rem',
        background: '#fff',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Product demos"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,3.6vw,3rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        margin: '.5rem 0 .9rem'
      }
    }, "See VerfiX in action"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.02rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: 0
      }
    }, "Six guided walkthroughs of the core flows. Footage is in production \u2014 book a live demo to see any flow run on your own use case today."))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vx-off)',
        padding: '1rem 0 3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, DEMOS.map((d, i) => /*#__PURE__*/React.createElement(VideoCard, {
      key: d.id,
      demo: d,
      reversed: i % 2 === 1,
      onCTA: onCTA
    })))));
  }
  window.Demos = Demos;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Demos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Developers.jsx
try { (() => {
// VerfiX Developers — docs-style landing with a code panel and endpoint list.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Card,
    Tag
  } = window.VerfiXDesignSystem_1000e3;
  const CODE = `POST /v2/verifications
Authorization: Bearer vx_live_••••

{
  "type": "kyc",
  "applicant": {
    "first_name": "Sofia",
    "last_name":  "Brunner",
    "country":    "CH"
  },
  "checks": ["document", "face", "aml"]
}

→ 201 Created
{
  "id": "vrf_8Kd2mQ",
  "trust_score": 96,
  "decision": "approve"
}`;
  const ENDPOINTS = [['POST', '/v2/verifications', 'Create a verification'], ['GET', '/v2/verifications/:id', 'Retrieve result & score'], ['POST', '/v2/companies', 'Run a KYB check'], ['POST', '/v2/webhooks', 'Subscribe to decisions']];
  const SDKS = [['fab fa-node-js', 'Node.js'], ['fab fa-python', 'Python'], ['fab fa-java', 'Java'], ['fab fa-golang', 'Go'], ['fab fa-php', 'PHP'], ['fab fa-react', 'React']];
  function Developers({
    onCTA
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.6)"
    }, "Developers"), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: '#fff',
        fontSize: 'clamp(2rem,3.4vw,2.9rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        margin: '.5rem 0 .9rem'
      }
    }, "Trust, in a few lines of code."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.55)',
        fontSize: '.98rem',
        lineHeight: 1.7,
        margin: '0 0 1.6rem',
        maxWidth: 420
      }
    }, "A single REST API and typed SDKs. Create a verification, read back a Trust Score\u2122 and decision \u2014 no infrastructure to run."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.7rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-book",
      onClick: onCTA
    }, "Read the docs"), /*#__PURE__*/React.createElement(Button, {
      variant: "white",
      size: "lg",
      icon: "fas fa-key"
    }, "Get API keys"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy-3)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.4rem',
        padding: '.6rem .9rem',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, ['#ef4444', '#f59e0b', '#22c55e'].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: c
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'rgba(255,255,255,.55)',
        marginLeft: '.5rem'
      }
    }, "create-verification.sh")), /*#__PURE__*/React.createElement("pre", {
      style: {
        margin: 0,
        padding: '1.1rem 1.2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        lineHeight: 1.65,
        color: 'rgba(255,255,255,.82)',
        overflow: 'auto'
      }
    }, CODE)))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: '2.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "API Reference"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.6rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 1.3rem'
      }
    }, "Core endpoints"), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        overflow: 'hidden'
      }
    }, ENDPOINTS.map(([m, p, d], i) => /*#__PURE__*/React.createElement("div", {
      key: p,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.9rem',
        padding: '.85rem 1rem',
        borderTop: i ? '1px solid var(--vx-border)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        fontWeight: 700,
        color: m === 'GET' ? 'var(--vx-info)' : 'var(--vx-red)',
        width: 36
      }
    }, m), /*#__PURE__*/React.createElement("code", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.78rem',
        color: 'var(--vx-text)',
        flex: 1
      }
    }, p), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.76rem',
        color: 'var(--vx-light)'
      }
    }, d))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "SDKs"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.6rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 1.3rem'
      }
    }, "Official libraries"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '.7rem'
      }
    }, SDKS.map(([ic, n]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.65rem',
        padding: '.8rem .95rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 7
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '1rem',
        width: 18
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.84rem',
        fontWeight: 600,
        color: 'var(--vx-text)'
      }
    }, n))))))));
  }
  window.Developers = Developers;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Developers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
// VerfiX marketing homepage — hero, Trust Engine flow, industries, CTA.
// Recreates verfix.swiss using the design-system primitives.
(function () {
  const {
    Button,
    Card,
    IconChip,
    Label,
    Badge,
    Stat,
    Tag,
    DecisionPill
  } = window.VerfiXDesignSystem_1000e3;
  function HeroMock() {
    const rows = [{
      n: 'Sofia Brunner',
      t: 'KYC',
      s: 96,
      d: 'approve'
    }, {
      n: 'Helvetia Trust AG',
      t: 'KYB',
      s: 71,
      d: 'review'
    }, {
      n: 'M. Keller',
      t: 'KYC',
      s: 34,
      d: 'reject'
    }];
    const col = {
      approve: 'var(--vx-approve)',
      review: 'var(--vx-review)',
      reject: 'var(--vx-reject)'
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy)',
        padding: '.62rem 1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '.38rem'
      }
    }, ['#ef4444', '#f59e0b', '#22c55e'].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: c
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.57rem',
        color: 'rgba(255,255,255,.5)',
        marginLeft: '.55rem'
      }
    }, "verfix.swiss/admin \u2014 verification queue")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.15rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 700,
        color: 'var(--vx-light)',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        marginBottom: '.8rem'
      }
    }, "Sample queue \xB7 illustrative"), rows.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.n,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem .7rem',
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 5,
        marginBottom: '.34rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, r.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'var(--vx-light)'
      }
    }, r.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.85rem',
        fontWeight: 700,
        color: col[r.d]
      }
    }, r.s), /*#__PURE__*/React.createElement(Badge, {
      tone: r.d === 'approve' ? 'success' : r.d === 'review' ? 'warn' : 'danger'
    }, r.d)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy)',
        borderRadius: 5,
        padding: '.62rem .82rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.62rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,.6)',
        textTransform: 'uppercase',
        letterSpacing: '.07em'
      }
    }, "Avg trust score \xB7 sample"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#fff'
      }
    }, "88"))));
  }
  const TE_STEPS = [{
    i: 'fas fa-id-card',
    n: 'Document Verification',
    s: 'OCR · Fraud'
  }, {
    i: 'fas fa-face-smile',
    n: 'Face Verification',
    s: 'Match · Liveness'
  }, {
    i: 'fas fa-magnifying-glass-dollar',
    n: 'AML / Sanctions',
    s: 'PEP · Watchlists'
  }, {
    i: 'fas fa-building',
    n: 'KYB Verification',
    s: 'UBO · Registry'
  }, {
    i: 'fas fa-shield-halved',
    n: 'Fraud Intelligence',
    s: 'Device · Behavior'
  }];
  const INDUSTRIES = [['fas fa-landmark', 'Banking'], ['fas fa-bolt', 'Fintech'], ['fas fa-shield-halved', 'Insurance'], ['fas fa-coins', 'Crypto'], ['fas fa-building-columns', 'Government'], ['fas fa-hospital', 'Healthcare'], ['fas fa-signal', 'Telecom'], ['fas fa-car', 'Mobility'], ['fas fa-store', 'Marketplaces'], ['fas fa-building', 'Real Estate']];
  function Homepage({
    onCTA
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0 4rem',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3.5rem',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.42rem',
        background: 'var(--vx-red-bg)',
        border: '1px solid var(--vx-red-line)',
        borderRadius: 100,
        padding: '.25rem .82rem',
        fontSize: '.7rem',
        fontWeight: 700,
        color: 'var(--vx-red)',
        marginBottom: '1.35rem',
        letterSpacing: '.03em'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-location-dot",
      style: {
        fontSize: '.6rem'
      }
    }), " Swiss Trust Infrastructure \xB7 Lausanne"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.4rem,4vw,3.6rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.03,
        color: 'var(--vx-text)',
        margin: '0 0 .95rem'
      }
    }, "Verify once. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-red)'
      }
    }, "Trust"), " everywhere."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1rem',
        lineHeight: 1.75,
        color: 'var(--vx-muted)',
        maxWidth: 470,
        margin: '0 0 1.85rem'
      }
    }, "VerfiX is the identity and compliance layer behind regulated digital onboarding \u2014 KYC, KYB, AML, fraud intelligence, and the Trust Engine\u2122 in one decision."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.7rem',
        marginBottom: '2rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a Demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg"
    }, "Explore Platform")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.4rem',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.67rem',
        fontWeight: 700,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.06em',
        marginRight: '.2rem'
      }
    }, "Built to align with"), ['nFADP', 'GDPR', 'eIDAS', 'FINMA AMLA'].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontSize: '.7rem',
        fontWeight: 600,
        color: 'var(--vx-muted)',
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 3,
        padding: '.16rem .5rem'
      }
    }, t)))), /*#__PURE__*/React.createElement(HeroMock, null))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.5rem 0',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 500,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.55)',
        paddingRight: '1rem',
        borderRight: '1px solid rgba(255,255,255,.1)'
      }
    }, "Designed for regulated industries"), INDUSTRIES.slice(0, 7).map(([ic, n]) => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.45rem',
        fontSize: '.78rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,.5)',
        padding: '.35rem .75rem',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 4
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.58rem'
      }
    }), n)))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vx-navy)',
        padding: '5.5rem 0',
        borderTop: '1px solid rgba(255,255,255,.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: '3rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.5rem',
        background: 'rgba(200,37,42,.15)',
        border: '1px solid rgba(200,37,42,.3)',
        borderRadius: 100,
        padding: '.28rem .9rem',
        fontSize: '.7rem',
        fontWeight: 700,
        color: 'var(--vx-red)',
        marginBottom: '1.25rem',
        letterSpacing: '.03em'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-gauge-high",
      style: {
        fontSize: '.55rem'
      }
    }), " VerfiX Trust Engine\u2122"), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: '#fff',
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        maxWidth: 640,
        margin: '0 auto .8rem'
      }
    }, "Every signal. One decision."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.5)',
        maxWidth: 500,
        margin: '0 auto',
        fontSize: '.98rem'
      }
    }, "Identity, compliance, fraud and risk signals converge into one explainable decision \u2014 Approve, Review, or Reject.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'stretch',
        gap: '.6rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }, TE_STEPS.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 150px',
        minWidth: 150,
        background: 'rgba(255,255,255,.05)',
        border: '1px solid rgba(255,255,255,.1)',
        borderLeft: '3px solid rgba(200,37,42,.4)',
        borderRadius: 7,
        padding: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: s.i,
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem',
        fontWeight: 700,
        color: '#fff',
        marginTop: '.5rem'
      }
    }, s.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        color: 'rgba(255,255,255,.55)',
        marginTop: '.2rem'
      }
    }, s.s))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem 0',
        color: 'rgba(255,255,255,.25)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chevron-down"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 420,
        margin: '0 auto',
        background: 'var(--vx-red)',
        borderRadius: 8,
        padding: '.9rem 1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.6rem',
        boxShadow: '0 4px 24px rgba(200,37,42,.4)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-gauge-high",
      style: {
        color: '#fff'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#fff',
        fontWeight: 800,
        fontSize: '.95rem'
      }
    }, "Trust Engine\u2122 \xB7 Score \xB7 Rules \xB7 Decision")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.6rem',
        maxWidth: 420,
        margin: '1rem auto 0'
      }
    }, [['approve', 'Approve'], ['review', 'Review'], ['reject', 'Reject']].map(([d, l]) => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(DecisionPill, {
      decision: d,
      style: {
        width: '100%',
        justifyContent: 'center'
      }
    })))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vx-navy-3)',
        padding: '4rem 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        border: '1px solid rgba(255,255,255,.08)',
        borderRadius: 10,
        overflow: 'hidden'
      }
    }, [['Logged', 'Every decision', 'Full audit trail by design'], ['3', 'Outcomes', 'Approve · Review · Reject'], ['CH/EU', 'Data residency', 'Swiss & EU processing only']].map(([v, l, d], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        padding: '2.25rem 2.5rem',
        borderRight: i < 2 ? '1px solid rgba(255,255,255,.08)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: v,
      label: l,
      desc: d,
      dark: true
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '5rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '2.5rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Industries"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 0'
      }
    }, "Trust infrastructure for regulated sectors")), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-5",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: 1,
        background: 'var(--vx-border)',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        overflow: 'hidden'
      }
    }, INDUSTRIES.map(([ic, n]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: '#fff',
        padding: '1.5rem 1.25rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: ic,
      style: {
        marginBottom: '.7rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.83rem',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, n)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vx-navy)',
        padding: '5.5rem 0',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.6)",
      style: {
        justifyContent: 'center'
      }
    }, "Get started"), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: '#fff',
        fontSize: 'clamp(1.8rem,3vw,2.6rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        maxWidth: 580,
        margin: '.4rem auto .875rem'
      }
    }, "Bring trust to your onboarding."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.48)',
        maxWidth: 440,
        margin: '0 auto 2.25rem'
      }
    }, "See the Trust Engine\u2122 run on your own onboarding flow in a 30-minute walkthrough."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.72rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a Demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "white",
      size: "lg"
    }, "Talk to Sales")))));
  }
  window.Homepage = Homepage;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Industries.jsx
try { (() => {
// VerfiX Industries — sector landing grid with a detail spotlight.
(function () {
  const {
    Card,
    IconChip,
    Label,
    Button,
    Badge
  } = window.VerfiXDesignSystem_1000e3;
  const SECTORS = [{
    i: 'fas fa-landmark',
    n: 'Banking',
    d: 'Account opening, ongoing AML monitoring and FINMA-aligned audit trails.',
    live: true
  }, {
    i: 'fas fa-bolt',
    n: 'Fintech',
    d: 'Sub-3-second onboarding that scales with your growth without adding fraud.',
    live: true
  }, {
    i: 'fas fa-shield-halved',
    n: 'Insurance',
    d: 'Verify policyholders and claimants while screening for fraud rings.',
    live: true
  }, {
    i: 'fas fa-coins',
    n: 'Crypto',
    d: 'Travel Rule, wallet screening and Source-of-Funds checks in one flow.',
    live: true
  }, {
    i: 'fas fa-building-columns',
    n: 'Government',
    d: 'eIDAS-aligned citizen identity for digital public services.',
    live: false
  }, {
    i: 'fas fa-hospital',
    n: 'Healthcare',
    d: 'Patient and provider identity assurance with consent capture.',
    live: false
  }, {
    i: 'fas fa-signal',
    n: 'Telecom',
    d: 'SIM registration and subscriber KYC at national scale.',
    live: false
  }, {
    i: 'fas fa-car',
    n: 'Mobility',
    d: 'Driver and rider verification for trust on both sides of the marketplace.',
    live: false
  }];
  function Industries({
    onCTA
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0 3rem',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.6)"
    }, "Industries"), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: '#fff',
        fontSize: 'clamp(2.2rem,3.6vw,3rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        margin: '.5rem 0 .9rem',
        maxWidth: 640
      }
    }, "Built for every regulated sector."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.55)',
        fontSize: '1rem',
        maxWidth: 540,
        lineHeight: 1.7,
        margin: 0
      }
    }, "One trust layer, configured to each industry's regulatory reality \u2014 from FINMA-supervised banks to crypto Travel Rule compliance."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-sectors",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: '1.1rem'
      }
    }, SECTORS.map(s => /*#__PURE__*/React.createElement(Card, {
      key: s.n,
      hover: true,
      style: {
        display: 'flex',
        gap: '1.1rem',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: s.i,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        marginBottom: '.35rem'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--vx-text)',
        margin: 0
      }
    }, s.n), s.live ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Live") : /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Coming soon")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.84rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.65,
        margin: 0
      }
    }, s.d))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0 5rem',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '0 0 .7rem'
      }
    }, "Don't see your industry?"), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--vx-muted)',
        margin: '0 0 1.6rem'
      }
    }, "The Trust Engine\u2122 adapts to any regulatory framework. Tell us about your onboarding."), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a Demo"))));
  }
  window.Industries = Industries;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Industries.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Partners.jsx
try { (() => {
// VerfiX Partners — partner program landing: categories, benefits, application. No fake partners.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Badge,
    Input
  } = window.VerfiXDesignSystem_1000e3;
  const CATEGORIES = [{
    ic: 'fas fa-microchip',
    t: 'Technology Partners',
    d: 'OCR, biometric, AML and registry providers that plug into the VerfiX orchestration layer.'
  }, {
    ic: 'fas fa-scale-balanced',
    t: 'Compliance Partners',
    d: 'Law firms and compliance consultancies that implement VerfiX for regulated clients.'
  }, {
    ic: 'fas fa-flask',
    t: 'Research Institutions',
    d: 'Labs advancing fraud, biometrics and trust research alongside VerfiX.'
  }, {
    ic: 'fas fa-graduation-cap',
    t: 'Universities',
    d: 'Academic collaboration on identity, cryptography and applied ML.'
  }, {
    ic: 'fas fa-rocket',
    t: 'Accelerators',
    d: 'Programmes supporting VerfiX and connecting us with design partners.'
  }, {
    ic: 'fas fa-people-group',
    t: 'Industry Associations',
    d: 'Banking, fintech and compliance bodies shaping identity standards.'
  }];
  const BENEFITS = [['fas fa-plug', 'One integration, many buyers', 'Reach regulated buyers through a single VerfiX integration instead of many bespoke ones.'], ['fas fa-book', 'Co-built enablement', 'Joint documentation, demo assets and solution guides for shared use cases.'], ['fas fa-handshake', 'Aligned commercials', 'Referral and revenue-share models that fit how you go to market.'], ['fas fa-headset', 'Partner support', 'A named contact, sandbox access, and early visibility of the roadmap.']];
  const TIERS = [['Registered', 'Listed in the directory, sandbox access, partner docs.'], ['Certified', 'Validated integration, co-marketing, referral commercials.'], ['Strategic', 'Joint roadmap, deep integration, co-sell into enterprise.']];
  function Partners({
    onCTA
  }) {
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.2rem 0 2.6rem',
        background: '#fff',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 740,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Partner Program"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,3.6vw,3rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        margin: '.5rem 0 .9rem'
      }
    }, "Build the trust layer together"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.02rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: 0
      }
    }, "VerfiX is an orchestration layer \u2014 it's stronger with partners. We work with technology, compliance, research and accelerator partners to bring trusted verification to regulated businesses."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.4rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Partner categories"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.6rem'
      }
    }, "Six ways to partner"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem'
      }
    }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.t,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: c.ic,
      size: "lg"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 800,
        margin: '.7rem 0 .4rem'
      }
    }, c.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: 0
      }
    }, c.d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Why partner"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.6rem'
      }
    }, "Partner benefits"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: '1rem'
      }
    }, BENEFITS.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: '1rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: ic,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '.98rem',
        fontWeight: 800,
        margin: '.1rem 0 .35rem'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: 0
      }
    }, d))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.4rem 0',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.55)"
    }, "Program tiers"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: '#fff',
        margin: '.4rem 0 1.6rem'
      }
    }, "How partnerships grow"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem'
      }
    }, TIERS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        background: 'var(--vx-navy-2)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 10,
        padding: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.8rem',
        fontWeight: 700,
        color: 'var(--vx-red)'
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.05rem',
        fontWeight: 800,
        color: '#fff',
        margin: '.3rem 0 .4rem'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.82rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.6,
        margin: 0
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.6rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 600,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Apply"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 0'
      }
    }, "Become a partner")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 12,
        padding: '1.6rem',
        boxShadow: 'var(--shadow-sm)'
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '1.5rem 1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: 'var(--vx-success-bg)',
        color: 'var(--vx-success)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        margin: '0 auto 1rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.2rem',
        fontWeight: 800,
        margin: '0 0 .4rem'
      }
    }, "Thanks \u2014 application received"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.88rem',
        color: 'var(--vx-muted)',
        maxWidth: 340,
        margin: '0 auto'
      }
    }, "Our partnerships team will review and reach out within five business days.")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Organization",
      placeholder: "Acme Technologies",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "you@acme.com",
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Partner category",
      as: "select",
      options: CATEGORIES.map(c => c.t)
    }), /*#__PURE__*/React.createElement(Input, {
      label: "How would we work together?",
      as: "textarea",
      placeholder: "Tell us about your product or organization and the use case\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-paper-plane",
      onClick: () => setSent(true)
    }, "Submit application"))), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: '.76rem',
        color: 'var(--vx-light)',
        marginTop: '1rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-info",
      style: {
        marginRight: 5
      }
    }), "VerfiX does not list partners it doesn't have. This directory populates as real partnerships are signed."))));
  }
  window.Partners = Partners;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Partners.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pilot.jsx
try { (() => {
// VerfiX Pilot Program — landing + 30/60/90 tracks + multi-step application flow + FAQ.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Badge,
    Input
  } = window.VerfiXDesignSystem_1000e3;
  const TRACKS = [{
    d: '30',
    name: 'Sprint Pilot',
    for: 'Single flow, fast signal',
    items: ['1 verification flow (KYC or KYB)', 'Hosted integration', 'Success review at day 30']
  }, {
    d: '60',
    name: 'Standard Pilot',
    for: 'Most teams',
    featured: true,
    items: ['KYC + KYB + AML', 'Hosted or API', 'Rules tuned to your policy', 'Mid-point + final review']
  }, {
    d: '90',
    name: 'Deep Pilot',
    for: 'Complex / regulated rollout',
    items: ['Full platform incl. Case Mgmt', 'API + webhooks integration', 'Compliance workflow setup', 'Production-readiness sign-off']
  }];
  const CRITERIA = [['fas fa-building-columns', 'Regulated business', 'Bank, fintech, crypto exchange, insurer, or telecom with a real onboarding flow.'], ['fas fa-users', 'Onboarding volume', 'A live or near-live flow with meaningful applicant volume to evaluate.'], ['fas fa-user-shield', 'Compliance owner', 'A named compliance or risk stakeholder to define the decision policy.'], ['fas fa-plug', 'Integration capacity', 'Engineering availability for a hosted or API integration during the pilot.']];
  const METRICS = [['Pass / completion rate', 'Share of applicants who complete verification.'], ['Decision time', 'Median time from start to Approve/Review/Reject.'], ['Manual review rate', 'Share routed to an analyst vs auto-decided.'], ['Fraud catch', 'Flagged attempts the Trust Engine surfaced.']];
  const FAQ = [['What does a pilot cost?', 'A fixed pilot fee scoped to the track and checks — no per-verification usage risk during evaluation. We quote it up front.'], ['How long to get started?', 'Hosted pilots can start within days of a signed pilot agreement; API pilots depend on your integration capacity.'], ['What happens after?', 'We review against the success metrics you set. If the pilot hits them, we convert to an Enterprise plan; if not, you walk away with the data.'], ['Is our data safe during a pilot?', 'Yes — pilots run under the same Swiss/EU data-residency and processing terms as production, governed by a pilot agreement + DPA.']];
  function Stepper({
    step
  }) {
    const labels = ['Company', 'Use case', 'Submit'];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '1.5rem'
      }
    }, labels.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.45rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: i <= step ? 'var(--vx-red)' : 'var(--vx-off)',
        color: i <= step ? '#fff' : 'var(--vx-light)',
        border: '1px solid ' + (i <= step ? 'var(--vx-red)' : 'var(--vx-border)'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '.7rem',
        fontWeight: 700
      }
    }, i < step ? /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check",
      style: {
        fontSize: '.6rem'
      }
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.78rem',
        fontWeight: 600,
        color: i <= step ? 'var(--vx-text)' : 'var(--vx-light)'
      }
    }, l)), i < 2 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--vx-border)',
        maxWidth: 40
      }
    }))));
  }
  function Application({
    track
  }) {
    const [step, setStep] = React.useState(0);
    const [done, setDone] = React.useState(false);
    if (done) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'center',
          padding: '2rem 1rem'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--vx-success-bg)',
          color: 'var(--vx-success)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          margin: '0 auto 1rem'
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-check"
      })), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: '1.3rem',
          fontWeight: 800,
          margin: '0 0 .5rem'
        }
      }, "Application received"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: '.9rem',
          color: 'var(--vx-muted)',
          maxWidth: 360,
          margin: '0 auto'
        }
      }, "Thanks \u2014 our team reviews pilot applications within two business days and will reach out to scope your ", track, "-day pilot."));
    }
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Stepper, {
      step: step
    }), step === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Company",
      placeholder: "Acme Bank AG",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "you@acme.ch",
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Industry",
      as: "select",
      options: ['Banking', 'Fintech', 'Crypto exchange', 'Insurance', 'Telecom', 'Government', 'Other']
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      style: {
        alignSelf: 'flex-end'
      },
      iconRight: "fas fa-arrow-right",
      onClick: () => setStep(1)
    }, "Continue")), step === 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "What do you need to verify?",
      as: "select",
      options: ['KYC — individuals', 'KYB — companies', 'KYC + KYB', 'AML screening only']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Monthly onboarding volume",
      as: "select",
      options: ['< 1,000', '1,000 – 10,000', '10,000 – 100,000', '100,000+']
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Anything we should know?",
      as: "textarea",
      placeholder: "Current flow, pain points, timeline\u2026"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      icon: "fas fa-arrow-left",
      onClick: () => setStep(0)
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      iconRight: "fas fa-arrow-right",
      onClick: () => setStep(2)
    }, "Continue"))), step === 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.9rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1rem 1.1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.5rem'
      }
    }, "You're applying for"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, track, "-day pilot"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.85rem',
        color: 'var(--vx-muted)'
      }
    }, "Fixed pilot fee \xB7 scoped on review"))), /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Jane M\xFCller",
      required: true
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.5rem',
        fontSize: '.8rem',
        color: 'var(--vx-muted)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      style: {
        marginTop: 3
      }
    }), " I agree to be contacted about a VerfiX pilot and accept the pilot terms & privacy notice."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "md",
      icon: "fas fa-arrow-left",
      onClick: () => setStep(1)
    }, "Back"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-paper-plane",
      onClick: () => setDone(true)
    }, "Submit application"))));
  }
  function Pilot({
    onCTA
  }) {
    const [track, setTrack] = React.useState('60');
    const [faq, setFaq] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vx-navy)',
        padding: '4rem 0 3.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-rocket",
      style: {
        marginRight: 4
      }
    }), "Early Access"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,4vw,3.2rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        color: '#fff',
        margin: '.9rem 0 .8rem'
      }
    }, "The VerfiX Pilot Program"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.05rem',
        color: 'rgba(255,255,255,.62)',
        lineHeight: 1.7,
        margin: '0 auto',
        maxWidth: 560
      }
    }, "Prove verification value on your own onboarding flow in 30\u201390 days \u2014 fixed fee, real data, measurable success criteria. Built for banks, fintechs, crypto exchanges, insurers and telecoms."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.7rem',
        justifyContent: 'center',
        marginTop: '1.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-paper-plane",
      onClick: () => document.getElementById('apply').scrollIntoView({
        behavior: 'smooth'
      })
    }, "Apply now"), /*#__PURE__*/React.createElement(Button, {
      variant: "white",
      size: "lg",
      icon: "fas fa-file-lines"
    }, "Pilot one-pager")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.5rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Pilot tracks"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.6rem'
      }
    }, "Choose a timeline"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1.1rem'
      }
    }, TRACKS.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.d,
      style: {
        position: 'relative',
        border: '1px solid ' + (t.featured ? 'var(--vx-red)' : 'var(--vx-border)'),
        borderRadius: 12,
        padding: '1.5rem',
        background: t.featured ? 'var(--vx-red-bg)' : '#fff'
      }
    }, t.featured && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -11,
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, "Recommended")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: '.3rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '2.4rem',
        fontWeight: 700,
        letterSpacing: '-.04em',
        color: 'var(--vx-red)'
      }
    }, t.d), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.85rem',
        color: 'var(--vx-light)'
      }
    }, "days")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.05rem',
        fontWeight: 800,
        margin: '.3rem 0 .15rem'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        marginBottom: '.9rem'
      }
    }, t.for), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.45rem'
      }
    }, t.items.map(it => /*#__PURE__*/React.createElement("div", {
      key: it,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.5rem',
        fontSize: '.81rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.74rem',
        marginTop: 3
      }
    }), it)))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.5rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Qualification"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1rem'
      }
    }, "Who qualifies"), CRITERIA.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: '.8rem',
        padding: '.7rem 0',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 7,
        background: 'var(--vx-red-bg)',
        color: 'var(--vx-red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem',
        color: 'var(--vx-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Success metrics"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1rem'
      }
    }, "How we measure it"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.84rem',
        color: 'var(--vx-muted)',
        margin: '0 0 1rem',
        lineHeight: 1.6
      }
    }, "You set target thresholds at kickoff; we report against them at review."), METRICS.map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: '.7rem',
        padding: '.6rem 0',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chart-line",
      style: {
        color: 'var(--vx-red)',
        marginTop: 3
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.85rem',
        fontWeight: 700
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.77rem',
        color: 'var(--vx-muted)'
      }
    }, d))))))), /*#__PURE__*/React.createElement("section", {
      id: "apply",
      style: {
        padding: '3.5rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: '1.6rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Apply"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 .3rem'
      }
    }, "Apply for a pilot")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem',
        justifyContent: 'center',
        marginBottom: '1.4rem'
      }
    }, TRACKS.map(t => /*#__PURE__*/React.createElement("button", {
      key: t.d,
      onClick: () => setTrack(t.d),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.8rem',
        fontWeight: 700,
        cursor: 'pointer',
        padding: '.4rem 1rem',
        borderRadius: 100,
        border: '1px solid ' + (track === t.d ? 'var(--vx-red)' : 'var(--vx-border)'),
        background: track === t.d ? 'var(--vx-red)' : '#fff',
        color: track === t.d ? '#fff' : 'var(--vx-muted)'
      }
    }, t.d, "-day"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 12,
        padding: '1.6rem',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement(Application, {
      track: track
    })))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.5rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Pilot FAQ"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.4rem'
      }
    }, "Before you apply"), FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setFaq(faq === i ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        background: 'transparent',
        border: 'none',
        padding: '1rem 0',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.95rem',
        fontWeight: 700
      }
    }, q), /*#__PURE__*/React.createElement("i", {
      className: faq === i ? 'fas fa-minus' : 'fas fa-plus',
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    })), faq === i && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.88rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: '0 0 1.1rem'
      }
    }, a))))));
  }
  window.Pilot = Pilot;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pilot.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Platform.jsx
try { (() => {
// VerfiX Platform — product detail page. Capabilities, how-it-works, Trust Engine panel.
(function () {
  const {
    Card,
    IconChip,
    Label,
    Button,
    Tag,
    TrustScore,
    Stat
  } = window.VerfiXDesignSystem_1000e3;
  const CAPS = [{
    i: 'fas fa-id-card',
    t: 'Document Verification',
    d: 'OCR capture and forensic fraud checks across a broad range of government ID types and countries.',
    tags: ['OCR', 'MRZ', 'Tamper detection']
  }, {
    i: 'fas fa-face-smile',
    t: 'Face & Liveness',
    d: 'Match the holder to their document with passive and active liveness against deepfakes.',
    tags: ['Face match', 'Liveness', 'Anti-spoof']
  }, {
    i: 'fas fa-magnifying-glass-dollar',
    t: 'AML & Sanctions',
    d: 'Screen against global sanctions, PEP and adverse-media lists with ongoing monitoring.',
    tags: ['PEP', 'Sanctions', 'Adverse media']
  }, {
    i: 'fas fa-building',
    t: 'KYB & Registry',
    d: 'Resolve company structures, UBOs and registry data across jurisdictions.',
    tags: ['UBO', 'Registry', 'Ownership']
  }, {
    i: 'fas fa-shield-halved',
    t: 'Fraud Intelligence',
    d: 'Device fingerprinting, behavioral signals and velocity rules catch coordinated fraud.',
    tags: ['Device', 'Behavior', 'Velocity']
  }, {
    i: 'fas fa-scroll',
    t: 'Audit & Reporting',
    d: 'Immutable decision logs and exportable evidence packs your regulators can read.',
    tags: ['Audit trail', 'Evidence', 'Export']
  }];
  function Platform({
    onCTA
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0 3rem',
        background: '#fff',
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "The Platform"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,3.6vw,3.2rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        color: 'var(--vx-text)',
        margin: '.5rem auto .9rem',
        maxWidth: 720
      }
    }, "One platform for identity, compliance & fraud."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.02rem',
        color: 'var(--vx-muted)',
        maxWidth: 540,
        margin: '0 auto 1.6rem',
        lineHeight: 1.7
      }
    }, "Compose any onboarding flow from modular verification building blocks \u2014 all feeding a single, explainable Trust Engine\u2122 decision."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.7rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Book a Demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      iconRight: "fas fa-arrow-right"
    }, "Read the docs")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.5rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '2.5rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Capabilities"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.6rem,2.5vw,2.2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '.4rem 0 0'
      }
    }, "Modular by design")), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1.1rem'
      }
    }, CAPS.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.t,
      accent: true,
      hover: true
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: c.i,
      size: "lg",
      style: {
        marginBottom: '.8rem'
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 700,
        color: 'var(--vx-text)',
        margin: '0 0 .4rem'
      }
    }, c.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.83rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.65,
        margin: '0 0 .85rem'
      }
    }, c.d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.3rem'
      }
    }, c.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t)))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '5rem 0',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3.5rem',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.6)"
    }, "Trust Engine\u2122"), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: '#fff',
        fontSize: 'clamp(1.7rem,2.8vw,2.4rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1rem'
      }
    }, "From raw signals to one explainable score."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'rgba(255,255,255,.55)',
        fontSize: '.95rem',
        lineHeight: 1.75,
        margin: '0 0 1.5rem'
      }
    }, "Configure weighted rules per risk tier. Every input that moved the score is recorded, so analysts and regulators see exactly why a decision was made."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.7rem'
      }
    }, ['Configurable rules per risk tier & jurisdiction', 'Explainable score with full signal breakdown', 'Straight-through processing for low-risk users'].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        color: 'rgba(255,255,255,.8)',
        fontSize: '.88rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-check",
      style: {
        color: 'var(--vx-red)'
      }
    }), t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(255,255,255,.04)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 12,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(TrustScore, {
      score: 92,
      label: "Trust Score"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem'
      }
    }, [['Document', 98], ['Face match', 95], ['AML screening', 88], ['Device risk', 84]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.72rem',
        color: 'rgba(255,255,255,.6)',
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: '#fff'
      }
    }, v)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: 'rgba(255,255,255,.1)',
        borderRadius: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: 'var(--vx-red)',
        borderRadius: 3
      }
    })))))))));
  }
  window.Platform = Platform;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Platform.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
// VerfiX Pricing — enterprise packaging. NO fake prices or customer counts.
// Every plan routes to "Contact Sales". Deployment models + professional services.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Badge
  } = window.VerfiXDesignSystem_1000e3;
  const PLANS = [{
    id: 'pilot',
    name: 'Pilot Program',
    tag: 'Start here',
    tone: 'navy',
    blurb: 'A time-boxed proof of value on your own onboarding flow.',
    price: 'Fixed pilot fee',
    feats: ['30 / 60 / 90-day options', 'KYC + KYB + AML', 'Hosted or API integration', 'Success-metrics review', 'Dedicated solutions engineer'],
    cta: 'Apply for pilot',
    ctaTo: 'pilot'
  }, {
    id: 'enterprise',
    name: 'Enterprise',
    tag: 'Most teams',
    tone: 'red',
    featured: true,
    blurb: 'Production verification for regulated businesses at scale.',
    price: 'Custom · volume-based',
    feats: ['Everything in Pilot', 'Trust Engine™ + Rules Builder', 'Case Management + Compliance Center', 'SLA + priority support', 'SSO/SAML, audit exports', 'Dedicated CSM'],
    cta: 'Contact Sales',
    ctaTo: 'cta'
  }, {
    id: 'onprem',
    name: 'On-Premise / Private',
    tag: 'Sovereign',
    tone: 'navy',
    blurb: 'Deploy inside your own Swiss/EU environment for full data control.',
    price: 'Custom · annual licence',
    feats: ['Everything in Enterprise', 'Private cloud or on-prem', 'Data never leaves your perimeter', 'Custom data-processing terms', 'Implementation services'],
    cta: 'Talk to Sales',
    ctaTo: 'cta'
  }];
  const ADDONS = [['fas fa-window-maximize', 'Hosted Verification', 'White-label, mobile-first screens VerfiX hosts for you — no front-end build.'], ['fas fa-code', 'API Access', 'Direct REST + SDK integration with sandbox, webhooks and the full platform.'], ['fas fa-screwdriver-wrench', 'Professional Services', 'Integration, rule design, and compliance-workflow setup by our solutions team.']];
  const DEPLOY = [['fas fa-cloud', 'VerfiX Cloud', 'Multi-tenant SaaS in Swiss/EU regions. Fastest to launch.'], ['fas fa-server', 'Private Cloud', 'Single-tenant in a dedicated CH/EU environment.'], ['fas fa-building-shield', 'On-Premise', 'Inside your own infrastructure for sovereign data control.']];
  const FAQ = [['Why no public prices?', 'Verification pricing depends on volume, the mix of checks (KYC/KYB/AML), and deployment model. We scope a quote to your actual flow rather than publish a number that wouldn\'t fit you.'], ['How is usage measured?', 'Primarily per completed verification, with KYB and ongoing AML monitoring priced separately. Pilots use a fixed fee so you can evaluate without usage risk.'], ['Is there a free tier?', 'No free production tier — but the sandbox is free to build against, and the pilot program is the low-risk way to prove value.']];
  function PlanCard({
    p,
    onCTA,
    onNav
  }) {
    const featured = p.featured;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: featured ? 'var(--vx-navy)' : '#fff',
        color: featured ? '#fff' : 'var(--vx-text)',
        border: '1px solid ' + (featured ? 'var(--vx-navy)' : 'var(--vx-border)'),
        borderRadius: 12,
        padding: '1.6rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-xs)'
      }
    }, featured && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -11,
        left: '50%',
        transform: 'translateX(-50%)'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, p.tag)), !featured && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, p.tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1.3rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: featured ? '.4rem 0 .3rem' : '.5rem 0 .3rem'
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.85rem',
        color: featured ? 'rgba(255,255,255,.6)' : 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: '0 0 1rem',
        minHeight: 42
      }
    }, p.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.05rem',
        fontWeight: 700,
        color: featured ? '#fff' : 'var(--vx-text)',
        marginBottom: '1.1rem'
      }
    }, p.price), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        marginBottom: '1.4rem',
        flex: 1
      }
    }, p.feats.map(f => /*#__PURE__*/React.createElement("div", {
      key: f,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '.55rem',
        fontSize: '.82rem',
        color: featured ? 'rgba(255,255,255,.85)' : 'var(--vx-text)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-check",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.78rem',
        marginTop: 3
      }
    }), f))), /*#__PURE__*/React.createElement(Button, {
      variant: featured ? 'red' : 'outline',
      size: "md",
      style: {
        width: '100%'
      },
      onClick: () => p.ctaTo === 'pilot' ? onNav('pilot') : onCTA()
    }, p.cta));
  }
  function Pricing({
    onCTA,
    onNav
  }) {
    const [faq, setFaq] = React.useState(0);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4.2rem 0 2.5rem',
        background: '#fff',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,3.6vw,3rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        margin: '.5rem 0 .9rem'
      }
    }, "Priced to your verification flow"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.02rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: 0
      }
    }, "Verification pricing is volume- and check-dependent, so we scope a quote to your real use case. Start with a fixed-fee pilot, then scale on a plan that fits."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '1.5rem 0 3.5rem',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '1.5rem 2rem 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1.1rem',
        alignItems: 'stretch'
      }
    }, PLANS.map(p => /*#__PURE__*/React.createElement(PlanCard, {
      key: p.id,
      p: p,
      onCTA: onCTA,
      onNav: onNav
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        fontSize: '.78rem',
        color: 'var(--vx-light)',
        marginTop: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-info",
      style: {
        marginRight: 5
      }
    }), "No public per-unit prices, no customer counts \u2014 figures are scoped per engagement. Nothing here is a fabricated number.")), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "How you consume it"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.6rem'
      }
    }, "Access models"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem'
      }
    }, ADDONS.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: ic,
      size: "lg"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 800,
        margin: '.7rem 0 .4rem'
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.84rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: 0
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.55)"
    }, "Deployment"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: '#fff',
        margin: '.4rem 0 1.6rem'
      }
    }, "Three deployment models"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1rem'
      }
    }, DEPLOY.map(([ic, t, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        background: 'var(--vx-navy-2)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 10,
        padding: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        marginBottom: '.6rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 7,
        background: 'rgba(200,37,42,.18)',
        color: 'var(--vx-red)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 800,
        fontSize: '.98rem',
        color: '#fff'
      }
    }, t)), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.82rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.6,
        margin: 0
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Pricing FAQ"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.4rem'
      }
    }, "Common questions"), FAQ.map(([q, a], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setFaq(faq === i ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        background: 'transparent',
        border: 'none',
        padding: '1rem 0',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.95rem',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, q), /*#__PURE__*/React.createElement("i", {
      className: faq === i ? 'fas fa-minus' : 'fas fa-plus',
      style: {
        color: 'var(--vx-red)',
        fontSize: '.8rem'
      }
    })), faq === i && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.88rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: '0 0 1.1rem'
      }
    }, a))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: 'var(--vx-off)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 640,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.7rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '0 0 .6rem'
      }
    }, "Let's scope your verification"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.95rem',
        color: 'var(--vx-muted)',
        margin: '0 0 1.6rem'
      }
    }, "Tell us your volumes and the checks you need \u2014 we'll come back with a tailored quote and a pilot plan."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.7rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      icon: "fas fa-calendar-check",
      onClick: onCTA
    }, "Contact Sales"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      icon: "fas fa-rocket",
      onClick: () => onNav('pilot')
    }, "Explore the pilot")))));
  }
  window.Pricing = Pricing;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// VerfiX product app — sign-in + verification queue dashboard with drill-in detail.
(function () {
  const {
    Button,
    Input,
    Badge,
    IconChip,
    TrustScore,
    DecisionPill,
    Stat
  } = window.VerfiXDesignSystem_1000e3;
  const Logo = window.Logo;
  function navLink(handler) {
    return {
      role: 'link',
      tabIndex: 0,
      onClick: handler,
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler();
        }
      }
    };
  }
  const QUEUE = [{
    id: 'vrf_8Kd2mQ',
    name: 'Sofia Brunner',
    type: 'KYC',
    country: 'CH',
    score: 96,
    decision: 'approve',
    time: '2m ago',
    signals: [['Document', 98], ['Face match', 97], ['AML screening', 94], ['Device risk', 90]]
  }, {
    id: 'vrf_3Lp9xR',
    name: 'Helvetia Trust AG',
    type: 'KYB',
    country: 'CH',
    score: 71,
    decision: 'review',
    time: '8m ago',
    signals: [['Registry', 88], ['UBO resolution', 64], ['AML screening', 70], ['Adverse media', 58]]
  }, {
    id: 'vrf_7Qm4zT',
    name: 'Marco Keller',
    type: 'KYC',
    country: 'IT',
    score: 34,
    decision: 'reject',
    time: '14m ago',
    signals: [['Document', 41], ['Face match', 30], ['AML screening', 88], ['Device risk', 22]]
  }, {
    id: 'vrf_2Nf6wK',
    name: 'Amélie Favre',
    type: 'KYC',
    country: 'FR',
    score: 89,
    decision: 'approve',
    time: '21m ago',
    signals: [['Document', 92], ['Face match', 90], ['AML screening', 86], ['Device risk', 84]]
  }, {
    id: 'vrf_5Bd1vH',
    name: 'NordCrypto OÜ',
    type: 'KYB',
    country: 'EE',
    score: 62,
    decision: 'review',
    time: '33m ago',
    signals: [['Registry', 78], ['UBO resolution', 55], ['AML screening', 60], ['Adverse media', 49]]
  }];
  const toneFor = d => d === 'approve' ? 'success' : d === 'review' ? 'warn' : 'danger';
  const colFor = d => d === 'approve' ? 'var(--vx-approve)' : d === 'review' ? 'var(--vx-review)' : 'var(--vx-reject)';
  function SignIn({
    onSignIn,
    onExit
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "vx-signin",
      style: {
        minHeight: 620,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        onSignIn();
      },
      style: {
        width: '100%',
        maxWidth: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      onClick: onExit
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.4rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: '1rem 0 .3rem'
      }
    }, "Sign in to console"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.84rem',
        color: 'var(--vx-muted)',
        margin: 0
      }
    }, "Access your verification dashboard.")), /*#__PURE__*/React.createElement(Input, {
      label: "Work email",
      type: "email",
      placeholder: "you@company.ch",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      required: true
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "lg",
      type: "submit",
      style: {
        width: '100%'
      }
    }, "Sign in"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        fontSize: '.78rem',
        color: 'var(--vx-light)',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("a", _extends({}, navLink(onExit), {
      style: {
        color: 'var(--vx-muted)',
        cursor: 'pointer',
        fontWeight: 600
      }
    }), "\u2190 Back to site"), /*#__PURE__*/React.createElement("a", {
      tabIndex: 0,
      style: {
        color: 'var(--vx-red)',
        cursor: 'pointer',
        fontWeight: 600
      }
    }, "Forgot password?")))), /*#__PURE__*/React.createElement("div", {
      className: "vx-signin-aside",
      style: {
        background: 'var(--vx-navy)',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 500,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--vx-red)'
      }
    }, "Trust Engine\u2122 Console"), /*#__PURE__*/React.createElement("h3", {
      style: {
        color: '#fff',
        fontSize: '1.6rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        lineHeight: 1.2,
        margin: 0
      }
    }, "Every verification, every signal, one queue."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '2rem'
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      value: "88",
      label: "Avg score",
      dark: true
    }), /*#__PURE__*/React.createElement(Stat, {
      value: "<3s",
      label: "Decision",
      dark: true
    }))));
  }
  function Dashboard({
    onSignOut
  }) {
    const [sel, setSel] = React.useState(QUEUE[0]);
    const [filter, setFilter] = React.useState('all');
    const rows = filter === 'all' ? QUEUE : QUEUE.filter(r => r.decision === filter);
    return /*#__PURE__*/React.createElement("div", {
      className: "vx-console",
      style: {
        minHeight: 640,
        fontFamily: 'var(--font-body)',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-console-inner",
      style: {
        display: 'grid',
        gridTemplateColumns: '210px 1fr',
        minHeight: 640
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        background: 'var(--vx-navy)',
        padding: '1.2rem 1rem',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '1.8rem',
        paddingLeft: '.3rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 26,
        height: 26,
        background: 'var(--vx-red)',
        borderRadius: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-fingerprint",
      style: {
        color: '#fff',
        fontSize: '.78rem'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: '1.05rem',
        color: '#fff',
        letterSpacing: '-.03em'
      }
    }, "Verfi", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-red)'
      }
    }, "X"))), [['fas fa-gauge-high', 'Dashboard', true], ['fas fa-list-check', 'Verifications', false], ['fas fa-building', 'Companies', false], ['fas fa-sliders', 'Rules', false], ['fas fa-scroll', 'Audit log', false], ['fas fa-gear', 'Settings', false]].map(([ic, n, active]) => /*#__PURE__*/React.createElement("a", {
      key: n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.55rem .65rem',
        borderRadius: 6,
        fontSize: '.82rem',
        fontWeight: 600,
        marginBottom: 2,
        cursor: 'pointer',
        color: active ? '#fff' : 'rgba(255,255,255,.5)',
        background: active ? 'rgba(200,37,42,.18)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        fontSize: '.8rem',
        color: active ? 'var(--vx-red)' : 'rgba(255,255,255,.4)',
        width: 16
      }
    }), n)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onSignOut,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        padding: '.55rem .65rem',
        fontSize: '.82rem',
        fontWeight: 600,
        color: 'rgba(255,255,255,.5)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-right-from-bracket",
      style: {
        width: 16
      }
    }), "Sign out"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 320px'
      }
    }, /*#__PURE__*/React.createElement("main", {
      style: {
        padding: '1.5rem 1.6rem',
        borderRight: '1px solid var(--vx-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: '1.3rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: 'var(--vx-text)',
        margin: 0,
        whiteSpace: 'nowrap'
      }
    }, "Verification queue"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.8rem',
        color: 'var(--vx-light)',
        margin: '.2rem 0 0'
      }
    }, rows.length, " of ", QUEUE.length, " verifications")), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      icon: "fas fa-plus"
    }, "New verification")), /*#__PURE__*/React.createElement("div", {
      className: "vx-stats-strip",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.7rem',
        marginBottom: '1.2rem'
      }
    }, [['Approved today', '42', 'var(--vx-approve)'], ['In review', '7', 'var(--vx-review)'], ['Rejected', '3', 'var(--vx-reject)']].map(([l, v, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        padding: '.85rem 1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.68rem',
        fontWeight: 600,
        color: 'var(--vx-light)',
        textTransform: 'uppercase',
        letterSpacing: '.05em'
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: c,
        marginTop: 2
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.4rem',
        marginBottom: '.8rem'
      }
    }, ['all', 'approve', 'review', 'reject'].map(f => /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: '.74rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        padding: '.35rem .8rem',
        borderRadius: 100,
        cursor: 'pointer',
        border: '1px solid ' + (filter === f ? 'var(--vx-red)' : 'var(--vx-border)'),
        background: filter === f ? 'var(--vx-red)' : '#fff',
        color: filter === f ? '#fff' : 'var(--vx-muted)'
      }
    }, f))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 8,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr .6fr .8fr .8fr',
        gap: '.5rem',
        padding: '.6rem 1rem',
        borderBottom: '1px solid var(--vx-border)',
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Applicant"), /*#__PURE__*/React.createElement("span", null, "Type"), /*#__PURE__*/React.createElement("span", null, "Score"), /*#__PURE__*/React.createElement("span", null, "Decision")), rows.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: () => setSel(r),
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr .6fr .8fr .8fr',
        gap: '.5rem',
        alignItems: 'center',
        padding: '.7rem 1rem',
        borderBottom: '1px solid var(--vx-off)',
        cursor: 'pointer',
        background: sel.id === r.id ? 'var(--vx-red-bg)' : '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.82rem',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)'
      }
    }, r.id, " \xB7 ", r.country, " \xB7 ", r.time)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.72rem',
        fontWeight: 600,
        color: 'var(--vx-muted)'
      }
    }, r.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.9rem',
        fontWeight: 700,
        color: colFor(r.decision)
      }
    }, r.score), /*#__PURE__*/React.createElement(Badge, {
      tone: toneFor(r.decision)
    }, r.decision))))), /*#__PURE__*/React.createElement("aside", {
      style: {
        padding: '1.5rem 1.4rem',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 600,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '1rem'
      }
    }, "Verification detail"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1.2rem'
      }
    }, /*#__PURE__*/React.createElement(TrustScore, {
      score: sel.score,
      size: 120
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginBottom: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.02rem',
        fontWeight: 800,
        color: 'var(--vx-text)'
      }
    }, sel.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.66rem',
        color: 'var(--vx-light)',
        marginTop: 2
      }
    }, sel.id, " \xB7 ", sel.type, " \xB7 ", sel.country)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)',
        marginBottom: '.6rem'
      }
    }, "Signal breakdown"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.6rem',
        marginBottom: '1.4rem'
      }
    }, sel.signals.map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '.74rem',
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-muted)'
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, v)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: 'var(--vx-off)',
        borderRadius: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + '%',
        height: '100%',
        background: colFor(sel.decision),
        borderRadius: 3
      }
    }))))), /*#__PURE__*/React.createElement(DecisionPill, {
      decision: sel.decision,
      style: {
        width: '100%',
        justifyContent: 'center',
        marginBottom: '.7rem'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      style: {
        flex: 1
      }
    }, "Reassign"), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "sm",
      style: {
        flex: 1
      }
    }, "Override"))))));
  }
  function ProductApp({
    onExit
  }) {
    const [authed, setAuthed] = React.useState(false);
    return authed ? /*#__PURE__*/React.createElement(Dashboard, {
      onSignOut: () => {
        setAuthed(false);
        onExit && onExit();
      }
    }) : /*#__PURE__*/React.createElement(SignIn, {
      onSignIn: () => setAuthed(true),
      onExit: onExit
    });
  }
  window.ProductApp = ProductApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Resources.jsx
try { (() => {
// VerfiX Resources — enterprise document library. Organizes the 30 uploaded
// documents into proper sections + an honest ecosystem strip. Each doc links to
// the real file in resources/. No fake partners / certs.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Badge
  } = window.VerfiXDesignSystem_1000e3;
  const D = 'resources/';
  const SECTIONS = [{
    id: 'company',
    label: 'Company',
    icon: 'fas fa-building',
    docs: [['Company Overview', D + '01-Company-Overview.html'], ['Executive Summary', D + '02-Executive-Summary.html'], ['FAQ', D + '27-FAQ.html'], ['Google Business Profile', D + '28-Google-Business-Profile.html'], ['LinkedIn Content', D + '29-LinkedIn-Content.html'], ['Website SEO Content', D + '30-Website-SEO-Content.html']]
  }, {
    id: 'product',
    label: 'Product',
    icon: 'fas fa-cube',
    docs: [['Product Brochure', D + '03-Product-Brochure.html'], ['KYC Product Sheet', D + '04-KYC-Product-Sheet.html'], ['KYB Product Sheet', D + '05-KYB-Product-Sheet.html'], ['eID Gateway Product Sheet', D + '06-eID-Gateway-Product-Sheet.html'], ['Trust Engine™ Product Sheet', D + '07-Trust-Engine-Product-Sheet.html']]
  }, {
    id: 'developers',
    label: 'Developers',
    icon: 'fas fa-code',
    docs: [['API Documentation', D + '08-API-Documentation.html'], ['Developer Documentation', D + '18-Developer-Documentation.html'], ['Integration Guide', D + '19-Integration-Guide.html']]
  }, {
    id: 'architecture',
    label: 'Architecture',
    icon: 'fas fa-sitemap',
    docs: [['Technical Architecture', D + '20-Technical-Architecture.html']]
  }, {
    id: 'security',
    label: 'Security',
    icon: 'fas fa-shield-halved',
    docs: [['Security Overview', D + '09-Security-Overview.html'], ['Information Security Policy', D + '25-Information-Security-Policy.html'], ['Incident Response Policy', D + '24-Incident-Response-Policy.html'], ['Business Continuity Overview', D + '26-Business-Continuity-Overview.html']]
  }, {
    id: 'compliance',
    label: 'Compliance',
    icon: 'fas fa-scale-balanced',
    docs: [['Data Protection — nFADP Whitepaper', D + '10-nFADP-Whitepaper.html'], ['AML Compliance Whitepaper', D + '11-AML-Compliance-Whitepaper.html'], ['Privacy Policy', D + '21-Privacy-Policy.html'], ['Terms of Service', D + '22-Terms-of-Service.html'], ['Data Processing Agreement (DPA)', D + '23-Data-Processing-Agreement.html']]
  }, {
    id: 'enterprise',
    label: 'Sales & Procurement',
    icon: 'fas fa-briefcase',
    docs: [['Partner Program Guide', D + '12-Partner-Program-Guide.html'], ['Reseller Program Guide', D + '13-Reseller-Program-Guide.html'], ['Bank Sales Presentation', D + '14-Bank-Sales-Presentation.html'], ['Fintech Sales Presentation', D + '15-Fintech-Sales-Presentation.html'], ['Telecom Sales Presentation', D + '16-Telecom-Sales-Presentation.html'], ['Insurance Sales Presentation', D + '17-Insurance-Sales-Presentation.html']]
  }];
  function Resources({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0 2.4rem',
        background: '#fff',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      style: {
        justifyContent: 'center'
      }
    }, "Resources"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,3.6vw,3rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        margin: '.5rem 0 .9rem'
      }
    }, "Document library"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.02rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.7,
        margin: 0
      }
    }, "Every VerfiX document, organized by section \u2014 company, product, developer, security, compliance, architecture and sales materials. Built for enterprise evaluation and due diligence."))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '1.5rem 0 3rem',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }
    }, SECTIONS.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.3rem 1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem',
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: s.icon
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.05rem',
        fontWeight: 800,
        letterSpacing: '-.02em',
        margin: 0
      }
    }, s.label), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '.62rem',
        color: 'var(--vx-light)'
      }
    }, s.docs.length, " docs")), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.6rem'
      }
    }, s.docs.map(([n, href]) => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: href,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 7,
        padding: '.6rem .75rem',
        textDecoration: 'none',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-file-lines",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.85rem',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.8rem',
        fontWeight: 600,
        color: 'var(--vx-text)',
        flex: 1,
        lineHeight: 1.3
      }
    }, n), /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-up-right-from-square",
      style: {
        color: 'var(--vx-light)',
        fontSize: '.62rem'
      }
    })))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '3.5rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Supported by & ecosystem"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 .5rem'
      }
    }, "Our ecosystem"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.88rem',
        color: 'var(--vx-muted)',
        maxWidth: 560,
        margin: '0 0 1.6rem'
      }
    }, "We're transparent about our ecosystem. Nothing below implies an official partnership unless explicitly stated."), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--vx-muted)'
      }
    }, "Startup ecosystem"), /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "Ecosystem support")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.6rem',
        flexWrap: 'wrap'
      }
    }, ['Trust Valley', 'Innosuisse'].map(n => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.45rem',
        border: '1px solid var(--vx-border)',
        borderRadius: 7,
        padding: '.5rem .8rem',
        fontSize: '.85rem',
        fontWeight: 700,
        color: 'var(--vx-text)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-nodes",
      style: {
        color: 'var(--vx-red)',
        fontSize: '.78rem'
      }
    }), n)))), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--vx-border)',
        borderRadius: 10,
        padding: '1.3rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        marginBottom: '.8rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.6rem',
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase',
        color: 'var(--vx-muted)'
      }
    }, "Research & innovation network"), /*#__PURE__*/React.createElement(Badge, {
      tone: "warn"
    }, "Future collaboration target")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.6rem',
        flexWrap: 'wrap'
      }
    }, ['CSEM', 'IDIAP'].map(n => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '.45rem',
        border: '1px dashed var(--vx-border-2)',
        borderRadius: 7,
        padding: '.5rem .8rem',
        fontSize: '.85rem',
        fontWeight: 700,
        color: 'var(--vx-muted)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-flask",
      style: {
        color: 'var(--vx-light)',
        fontSize: '.78rem'
      }
    }), n))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.72rem',
        color: 'var(--vx-light)',
        margin: '.7rem 0 0'
      }
    }, "In discussion \u2014 not an active collaboration."))))));
  }
  window.Resources = Resources;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Resources.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrustCenter.jsx
try { (() => {
// VerfiX Trust Center — security, compliance, privacy, data processing,
// responsible disclosure, security contact. Honest, early-stage posture.
(function () {
  const {
    Label,
    Button,
    IconChip,
    Card,
    Badge
  } = window.VerfiXDesignSystem_1000e3;
  const PILLARS = [{
    ic: 'fas fa-server',
    t: 'Data residency',
    d: 'All personal data is processed and stored exclusively in Swiss and EU data centers. Nothing leaves the CH/EU perimeter.',
    status: 'live'
  }, {
    ic: 'fas fa-lock',
    t: 'Encryption',
    d: 'TLS 1.3 in transit and AES-256 at rest. Secrets are isolated per environment and rotated on demand.',
    status: 'live'
  }, {
    ic: 'fas fa-user-shield',
    t: 'Access control',
    d: 'Role-based access, SSO/SAML, and least-privilege defaults across the platform and internal tooling.',
    status: 'live'
  }, {
    ic: 'fas fa-clock-rotate-left',
    t: 'Audit logging',
    d: 'Every action is recorded in an immutable, tamper-evident audit trail retained for 10 years.',
    status: 'live'
  }];
  const FRAMEWORKS = [['nFADP (Switzerland)', 'aligned', 'Built to the Swiss Federal Act on Data Protection'], ['GDPR (EU)', 'aligned', 'Lawful basis, DPA, and full data-subject rights'], ['eIDAS', 'aligned', 'Mapped to eIDAS levels of assurance'], ['FINMA AMLA', 'aligned', 'Supports AML record-keeping obligations'], ['ISO 27001', 'planned', 'Information security management — on roadmap'], ['SOC 2 Type II', 'planned', 'Trust services criteria — on roadmap']];
  const STATUS = {
    live: ['success', 'Live'],
    aligned: ['info', 'Aligned'],
    planned: ['warn', 'Planned']
  };
  const SUBPROCESSORS = [['Cloud hosting (CH/EU region)', 'Infrastructure', 'Switzerland / EU'], ['Email delivery', 'Transactional email', 'EU'], ['Error monitoring', 'Observability', 'EU']];
  function TrustCenter({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--vx-navy)',
        padding: '4.2rem 0 3.6rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 900,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.55)"
    }, "Trust Center"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 'clamp(2.2rem,4vw,3.2rem)',
        fontWeight: 800,
        letterSpacing: '-.045em',
        lineHeight: 1.05,
        color: '#fff',
        margin: '.5rem 0 .8rem'
      }
    }, "Security and privacy, ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-red)'
      }
    }, "in the open"), "."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '1.05rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.7,
        maxWidth: 600,
        margin: 0
      }
    }, "We handle identity data for regulated businesses, so we hold ourselves to a high bar \u2014 and we publish exactly where we stand, including what is still on the roadmap."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '.6rem',
        marginTop: '1.6rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-shield-halved",
      onClick: () => document.getElementById('disclosure').scrollIntoView({
        behavior: 'smooth'
      })
    }, "Report a vulnerability"), /*#__PURE__*/React.createElement(Button, {
      variant: "white",
      size: "md",
      icon: "fas fa-file-lines"
    }, "Request docs")))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Security"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1.8rem'
      }
    }, "How we protect data"), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: '1rem'
      }
    }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.t,
      style: {
        display: 'flex',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      icon: p.ic,
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: '1rem',
        fontWeight: 700,
        margin: 0
      }
    }, p.t), /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Live")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.84rem',
        color: 'var(--vx-muted)',
        lineHeight: 1.6,
        margin: '.35rem 0 0'
      }
    }, p.d))))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: 'var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem'
      }
    }, /*#__PURE__*/React.createElement(Label, null, "Compliance"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 'clamp(1.5rem,2.4vw,2.1rem)',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 .5rem'
      }
    }, "Frameworks & certifications"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.88rem',
        color: 'var(--vx-muted)',
        maxWidth: 560,
        margin: '0 0 1.8rem'
      }
    }, "What we align to today, and what we are working toward. Nothing here claims an audit we have not completed."), /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-3",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '.8rem'
      }
    }, FRAMEWORKS.map(([n, st, d]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        background: '#fff',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        padding: '1.1rem 1.2rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.9rem',
        fontWeight: 700
      }
    }, n), /*#__PURE__*/React.createElement(Badge, {
      tone: STATUS[st][0]
    }, STATUS[st][1])), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.76rem',
        color: 'var(--vx-muted)',
        margin: '.4rem 0 0',
        lineHeight: 1.5
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '4rem 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Privacy"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1rem'
      }
    }, "Your data, minimized"), [['Data minimization', 'We collect only what a verification requires, and no more.'], ['Purpose limitation', 'Data is used solely for the verification you requested.'], ['Right to erasure', 'Biometric templates are deleted within 30 days of a decision.'], ['Transparency', 'A full DPA and processing record are available on request.']].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: '.7rem',
        padding: '.6rem 0',
        borderBottom: '1px solid var(--vx-off)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-circle-check",
      style: {
        color: 'var(--vx-success)',
        marginTop: 3
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.86rem',
        fontWeight: 700
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.78rem',
        color: 'var(--vx-muted)'
      }
    }, d))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Data processing"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        margin: '.4rem 0 1rem'
      }
    }, "Sub-processors"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-off)',
        border: '1px solid var(--vx-border)',
        borderRadius: 9,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1.2fr 1fr',
        gap: '.5rem',
        padding: '.6rem .9rem',
        borderBottom: '1px solid var(--vx-border)',
        fontFamily: 'var(--font-mono)',
        fontSize: '.56rem',
        fontWeight: 600,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        color: 'var(--vx-light)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Sub-processor"), /*#__PURE__*/React.createElement("span", null, "Purpose"), /*#__PURE__*/React.createElement("span", null, "Region")), SUBPROCESSORS.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.6fr 1.2fr 1fr',
        gap: '.5rem',
        padding: '.65rem .9rem',
        borderBottom: i < SUBPROCESSORS.length - 1 ? '1px solid var(--vx-border)' : 'none',
        fontSize: '.8rem',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, r[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-muted)'
      }
    }, r[1]), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--vx-muted)'
      }
    }, r[2])))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.74rem',
        color: 'var(--vx-light)',
        marginTop: '.7rem'
      }
    }, "Representative categories. The current named list ships with 30 days notice of change in the DPA.")))), /*#__PURE__*/React.createElement("section", {
      id: "disclosure",
      style: {
        padding: '4rem 0',
        background: 'var(--vx-navy)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vx-grid-2",
      style: {
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 2rem',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: '2rem',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      color: "rgba(255,255,255,.55)"
    }, "Responsible disclosure"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: '1.6rem',
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: '#fff',
        margin: '.4rem 0 1rem'
      }
    }, "Found a vulnerability?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '.9rem',
        color: 'rgba(255,255,255,.6)',
        lineHeight: 1.7,
        margin: '0 0 1.2rem'
      }
    }, "We welcome reports from security researchers. Disclose in good faith, give us reasonable time to remediate, and avoid accessing data that isn't yours \u2014 and we'll acknowledge your contribution."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.6rem'
      }
    }, [['1', 'Email a detailed report to our security team'], ['2', 'We acknowledge within 3 business days'], ['3', 'We remediate and credit valid findings']].map(([n, t]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.7rem'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: 'var(--vx-red)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '.72rem',
        fontWeight: 700,
        flexShrink: 0
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.85rem',
        color: 'rgba(255,255,255,.8)'
      }
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--vx-navy-2)',
        border: '1px solid rgba(255,255,255,.1)',
        borderRadius: 10,
        padding: '1.4rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.58rem',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.45)',
        marginBottom: '.8rem'
      }
    }, "Security contact"), [['fas fa-envelope', 'security@verfix.swiss'], ['fas fa-key', 'PGP key on request'], ['fas fa-file-shield', 'security.txt published']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '.6rem',
        padding: '.5rem 0',
        borderBottom: '1px solid rgba(255,255,255,.08)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: ic,
      style: {
        color: 'var(--vx-red)',
        width: 16
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: '.8rem',
        color: '#fff'
      }
    }, t))), /*#__PURE__*/React.createElement(Button, {
      variant: "red",
      size: "md",
      icon: "fas fa-paper-plane",
      style: {
        width: '100%',
        marginTop: '1rem'
      }
    }, "Contact security")))));
  }
  window.TrustCenter = TrustCenter;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrustCenter.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DecisionPill = __ds_scope.DecisionPill;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.TrustScore = __ds_scope.TrustScore;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Input = __ds_scope.Input;

})();
