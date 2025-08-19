# Copilot Instructions for Atomic Playfulness

## Architecture Overview

This is the **Holisticon Atomic Playfulness (HAP)** design system - a monorepo
with 4 packages following a layered architecture:

- **foundation** (`@holisticon/hap-foundation`): CSS classes using design tokens
  from `atomic-playfulness.tokens.json`, built with Terrazzo
- **tailwind** (`@holisticon/hap-tailwind`): Tailwind CSS theme configuration
- **react** (`@holisticon/hap-react`): React components using CVA
  (class-variance-authority)
- **documentation** (`@holisticon/hap-documentation`): Storybook with visual
  regression tests

## Key Patterns & Conventions

### CSS Class Naming

- All HAP classes use `hap-` prefix (e.g., `hap-badge`, `hap-button`)
- Modifiers follow BEM-like pattern: `hap-badge--strong`, `hap-button--primary`,
  `hap-button--sm`
- Feedback states:
  `hap-feedback--{default|informative|positive|critical|caution|new}`

### Design Tokens

- CSS custom properties: `var(--hap-color-feedback-dark)`,
  `var(--hap-spacing-xs)`
- Generated from `packages/foundation/atomic-playfulness.tokens.json` via
  Terrazzo
- Font families automatically get `, sans-serif` fallback

### React Component Patterns

#### Component with Component-Specific Variants (Button Pattern)

```tsx
import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef, ReactNode } from "react";

const button = cva({
  base: "hap-button",
  variants: {
    variant: {
      primary: "hap-button--primary",
      secondary: "hap-button--secondary",
      tertiary: "hap-button--tertiary",
      destructive: "hap-button--destructive",
    },
    size: {
      default: "",
      small: "hap-button--sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof button> {
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  const { variant, size, className, children, ...rest } = props;
  return (
    <button className={button({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
```

#### Component with Shared Feedback Variants (Badge Pattern)

```tsx
import { type VariantProps } from "cva";
import type { ReactNode } from "react";
import { feedback } from "../common/feedback.js";

interface BadgeProps extends VariantProps<typeof feedback> {
  children?: ReactNode;
}

export function Badge(props: BadgeProps) {
  return (
    <div className={feedback({ class: "hap-badge", ...props })}>
      {props.children}
    </div>
  );
}
```

## Development Workflows

### Building & Running

```bash
# Build all packages in dependency order
npm run build

# Start Storybook development server
npm run storybook

# React Storybook specifically
npm run dev -w @holisticon/hap-react
```

### Package Structure

- Each package has its own `package.json`, `tsconfig.json`
- Foundation CSS files in `src/elements/` mirror component structure
- Storybook stories in `packages/documentation/src/elements/`

### Versioning & Releases

- Use Changesets: `npx changeset` to create version bumps
- Follow Conventional Commits for PR titles (squash & merge)
- Semantic versioning across all packages

### TypeScript Configuration

- Uses strict TypeScript with `verbatimModuleSyntax: true`
- ESM-only (`"type": "module"`)
- Node16+ module resolution
- Files must use `.js` extensions in imports

## Integration Points

- **Foundation ↔ Tokens**: Terrazzo generates CSS from design tokens
- **React ↔ Foundation**: React components depend on foundation CSS classes
- **Documentation**: Storybook consumes all packages for component demos
- **External**: Peer dependencies on React 19.1.1+ and Tailwind CSS v3

When adding new components, create the CSS in `foundation/src/elements/`, the
React component in `react/src/components/`, and Storybook stories in
`documentation/src/elements/`.
