<h1 align="center">Atomic Playfulness - Tailwind Configuration</h1>

Atomic Playfulness defines the brand design for Holisticon AG. This design
system "Holisticon Atomic Playfulness" (HAP) makes the brand design accessible
to web applications. It is intended to be used by applications that are built by
and for Holisticon.

## Installation

Install the Tailwind package together with the foundation tokens and Tailwind
v3:

```bash
npm install @holisticon/hap-foundation @holisticon/hap-tailwind tailwindcss@^3.4
```

## Quick Start

The recommended setup uses the exported Tailwind preset and the tokens-only CSS
file.

### 1. Configure Tailwind

Create `tailwind.config.mjs`:

```js
import { preset as hapPreset } from "@holisticon/hap-tailwind";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  presets: [hapPreset],
};
```

If your project still uses CommonJS, keep the application code as-is and switch
only the Tailwind config file to `tailwind.config.mjs` so it can import this ESM
package.

### 2. Import the CSS variables

In your global stylesheet, import the design tokens before Tailwind layers:

```css
@import "@holisticon/hap-foundation/tokens.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

If you also want the full Atomic Playfulness base, component, and layout styles,
import `@holisticon/hap-foundation/atomic-playfulness.css` instead.

### 3. Start using the utilities

```html
<button
  class="rounded-large bg-fill-brand-onLight-default p-md text-text-primary-onLight shadow-firstLevel"
>
  Click me
</button>
```

## API

- `preset`: recommended export for Tailwind v3 projects; use it in `presets`.
- `theme`: legacy export if you prefer `theme: { extend: hapTheme }`.

```js
import { theme as hapTheme } from "@holisticon/hap-tailwind";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: hapTheme,
  },
};
```

## Notes

- This package targets [Tailwind v3](https://v3.tailwindcss.com).
- The generated class names follow the token structure, for example
  `text-text-primary-onLight` or `bg-fill-brand-onLight-default`.
- A more detailed guide and class reference are available in our
  [Storybook Tailwind documentation](https://atomic-playfulness.holisticon.de/?path=/docs/tailwind-getting-started--docs).

## License

Atomic Playfulness is created for [Holisticon AG](https://holisticon.de) and
only intended to be used by Holisticon and its projects.
