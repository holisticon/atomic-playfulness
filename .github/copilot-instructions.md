# Copilot Instructions for Atomic Playfulness (HAP)

## Architecture Overview

This is **Holisticon Atomic Playfulness (HAP)** - a design system monorepo with
three distinct packages:

- `@holisticon/hap-foundation` - Core design tokens and CSS components
- `@holisticon/hap-documentation` - Storybook documentation with visual testing
- `@holisticon/hap-tailwind` - Tailwind CSS integration layer

The packages have a clear dependency hierarchy: `documentation` and `tailwind`
depend on `foundation`, which contains the source of truth for all design
tokens.

## Essential Development Workflows

### Building & Development

```bash
npm run storybook          # Build all packages, then start Storybook dev server
npm run build              # Build all packages (foundation → documentation → tailwind)
npm run visual-test        # Run Playwright visual regression tests
npm run visual-test-update # Update visual test snapshots
```

### Package-specific builds

```bash
npm run build:foundation    # Build design tokens via Terrazzo
npm run build:documentation # Build Storybook
npm run build:tailwind      # Build Tailwind config
```

## Design Token System

### Token Architecture

- **Source**: `packages/foundation/atomic-playfulness.tokens.json` (Design
  Tokens Format)
- **Build Tool**: [Terrazzo](https://terrazzo.app/) via `terrazzo.config.mjs`
- **Output**: CSS custom properties with `--hap-` prefix
- **CSS Integration**: `src/atomic-playfulness.css` imports all element
  stylesheets

### Token Naming Convention

```css
--hap-color-text-primary-on-light     /* Semantic tokens */
--hap-spacing-md                      /* Size tokens */
--hap-typography-font-family-body     /* Typography tokens */
```

## Component Development Patterns

### CSS Architecture

- **Location**: `packages/foundation/src/elements/`
- **Naming**: `.hap-{component}` base class with variant modifiers
- **Example Pattern**:

```css
.hap-alert {
  /* Base styles using design tokens */
  font-family: var(--hap-typography-font-family-body);

  &.positive {
    /* Variant modifier */
  }
  &.critical {
    /* Variant modifier */
  }
}
```

### Storybook Stories

- **Location**: `packages/documentation/src/elements/{component}/`
- **Pattern**: Use Lit HTML templates with typed args
- **Icon Integration**: Lucide icons via sprite injection in Storybook config

## Tailwind Integration

The Tailwind config at `packages/tailwind/src/tailwind.config.ts` maps all
design tokens to Tailwind utilities:

- Colors: Semantic naming like `text-primary-onLight`,
  `fill-brand-onDark-hovered`
- Spacing: Token-based spacing scale (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`,
  `mdlg`)
- Typography: Headline and bodytext variants with corresponding line-heights

## Visual Testing Strategy

**Automated visual regression testing** covers every Storybook story:

- Tests run via Playwright against built Storybook
- Screenshots stored in `packages/documentation/tests/screenshots/{platform}/`
- Use `npm run visual-test-update` after intentional visual changes

## Key Conventions

### File Organization

- Each component has: `{name}.css` (foundation), `{name}.stories.ts` +
  `{name}.mdx` (docs)
- Stories export typed variants as individual Story objects
- MDX files provide component documentation

### CSS Methodology

- No CSS frameworks - pure CSS with design token variables
- Use nested selectors for variants (`&.variant-name`)
- Interactive states follow pattern: `default` → `hovered` → `pressed` →
  `selected`

### Development Dependencies

- **Terrazzo**: Design token compilation
- **Lit**: HTML templates in Storybook
- **Playwright**: Visual regression testing
- **Changesets**: Version management and changelogs

## Common Pitfalls

- Always build foundation before other packages (tokens must be generated first)
- Visual tests require built Storybook - run `npm run build` before
  `visual-test`
- Tailwind config imports from foundation package - ensure peer dependencies are
  correct
- Icons need sprite injection - check `.storybook/main.ts` for Lucide
  integration

## Architecture Decisions

See `docs/09_architecture-decisions/` for context on:

- Multi-package publishing strategy (ADR-001)
- Font and icon packaging decisions
- CSS class API design approach
