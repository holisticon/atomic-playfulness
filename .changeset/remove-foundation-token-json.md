---
"@holisticon/hap-tailwind": major
"@holisticon/hap-foundation": major
---

Remove the public `@holisticon/hap-foundation/atomic-playfulness.tokens.json` export and stop publishing the raw token source file. Consumers should rely on the supported CSS entry points such as `@holisticon/hap-foundation/tokens.css` instead.

Add a dedicated `@holisticon/hap-foundation/tokens.css` export for consumers that only need the generated CSS variables.

Improve `@holisticon/hap-tailwind` integration by adding a reusable `preset` export, documenting the recommended preset-based setup, relaxing the Tailwind v3 peer dependency range, and aligning the generated utility names with the documented `rounded-large` and `*-onLight`/`*-onDark` class variants.

Standardize fill color utilities on the `onLight` and `onDark` naming scheme to match the underlying CSS variable names. The previous `*-light-*` and `*-dark-*` fill utility aliases are removed.
