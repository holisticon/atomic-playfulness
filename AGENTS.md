# AGENTS.md - Holisticon Atomic Playfulness Design System

## Build/Test Commands

- `npm run build` - Build all packages in dependency order
- `npm run lint` - Lint all packages and check formatting
- `npm run format` - Format code with Prettier
- `npm run storybook` - Start Storybook dev server at :6006
- `npm run visual-test` - Run Playwright visual tests
- `npm run visual-test-update` - Update visual test snapshots
- `npm run dev -w @holisticon/hap-react` - React Storybook at :6007
- Single test: `npm run visual-test -- tests/visual.spec.ts`

## Code Style & Conventions

- **ESM-only**: Use `.js` extensions in imports, `"type": "module"`
- **TypeScript**: Strict mode, `verbatimModuleSyntax: true`, Node16+ resolution
- **CSS Classes**: `hap-` prefix, BEM-like modifiers (`hap-button--primary`)
- **React Components**: Use CVA for variants, `ComponentPropsWithRef` for props
- **Imports**: Organized by Prettier plugin, type imports with `type` keyword
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Props**: Destructure with rest spread, optional `children?: ReactNode`
- **Error Handling**: Use TypeScript strict types, avoid `any`

## Architecture Notes

- Monorepo: foundation (CSS) → react (components + Storybook) → documentation
  (Storybook)
- Design tokens from `atomic-playfulness.tokens.json` via Terrazzo
