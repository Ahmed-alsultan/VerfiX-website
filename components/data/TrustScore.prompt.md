The flagship Trust Engine™ visualization — a circular trust-score dial whose ring color and decision word derive from the score band.

```jsx
<TrustScore score={96} />              {/* green → Approve */}
<TrustScore score={64} label="Risk" /> {/* amber → Review  */}
<TrustScore score={38} />              {/* red   → Reject  */}
```

Bands: ≥80 Approve, 50–79 Review, <50 Reject. The number renders in IBM Plex Mono. Pair with `DecisionPill` for a full decision panel.
