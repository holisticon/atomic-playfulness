<h1 align="center">Atomic Playfulness - Foundation</h1>

Atomic Playfulness defines the brand design for Holisticon AG. This design
system "Holisticon Atomic Playfulness" (HAP) makes the brand design accessible
to web applications. It is intended to be used by applications that are built by
and for Holisticon.

## Installation

You can install the foundation package for Atomic Playfulness with this shell
command:

```bash
npm i @holisticon/hap-foundation
```

## Getting Started

The _hap-foundation_ package exposes a set of CSS classes that you can use to
style our application. Available classes and their usage is documented in our
[Storybook](https://atomic-playfulness.holisticon.de).

### Available CSS Entry Points

- `@holisticon/hap-foundation/atomic-playfulness.css` imports the full Atomic
  Playfulness base, component, and layout styles.
- `@holisticon/hap-foundation/tokens.css` imports only the generated CSS custom
  properties, which is useful for Tailwind integrations that only need the
  design tokens.

Use the tokens-only entry point when you just need the CSS variables:

```css
@import "@holisticon/hap-foundation/tokens.css";
```

Use the full stylesheet when you also want the bundled component and layout
styles:

```css
@import "@holisticon/hap-foundation/atomic-playfulness.css";
```

## License

Atomic Playfulness is created for [Holisticon AG](https://holisticon.de) and
only intended to be used by Holisticon and its projects.
