Labelled form field; focus turns the border red. Switch element with `as`.

```jsx
<Input label="Work email" type="email" placeholder="you@bank.ch" required />
<Input label="Industry" as="select" options={['Banking','Fintech','Insurance']} />
<Input label="Message" as="textarea" hint="Tell us about your onboarding flow" />
```

Use on light surfaces (`#fff` field on off-white form box). Required adds a red asterisk.
