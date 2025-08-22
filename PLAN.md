# React Component Implementation Plan - Atomic Playfulness Design System

## Overview

This document outlines the comprehensive plan for implementing React components
for the "atomic playfulness" design system. The design system currently provides
CSS classes through `@holisticon/hap-foundation`, and this plan details how to
create corresponding React components that leverage these existing styles.

## Current State

### Existing React Components (6/22)

- Alert
- Badge
- Button
- Checkbox
- Switch
- Tag

### Missing Components (22 total)

All have CSS implementations in foundation package but need React wrappers.

## Architecture Patterns

### Established Patterns to Follow

- **CVA (Class Variant Authority)** for CSS class management
- **ComponentPropsWithRef** for proper TypeScript typing
- **Feedback system** using compose() for status variants
- **Lucide React** for icons
- **Destructured props** with rest spread pattern
- **ESM imports** with .js extensions
- **BEM-like CSS classes** with `hap-` prefix

### Example Pattern

```tsx
import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const component = cva({
  base: "hap-component",
  variants: {
    variant: {
      primary: "hap-component--primary",
      secondary: "hap-component--secondary",
    },
  },
});

interface ComponentProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof component> {}

export function Component(props: ComponentProps) {
  const { variant, className, children, ...rest } = props;
  return (
    <div className={component({ variant, className })} {...rest}>
      {children}
    </div>
  );
}

## Implementation Phases

### Phase 1: Foundation Components (5 components)

Simple components that require minimal logic and no external dependencies.

#### 1. Icon Component

interface IconProps extends ComponentPropsWithRef<"svg">, VariantProps<typeof icon> {
  name: string; // Lucide icon name
  size?: "small" | "medium" | "large";
}

• Dependencies: Lucide React (already available)
• CSS Classes: hap-icon, hap-icon--sm, etc.
• Notes: Wrapper around Lucide React icons with design system sizing

#### 2. Divider Component

interface DividerProps extends ComponentPropsWithRef<"hr">, VariantProps<typeof divider> {}

• Dependencies: None
• CSS Classes: hap-divider
• Notes: Simple horizontal rule with styling

#### 3. Indicator Component

interface IndicatorProps extends ComponentPropsWithRef<"div">, VariantProps<typeof indicator> {
  size?: "small" | "medium" | "large";
}

• Dependencies: None
• CSS Classes: hap-indicator
• Notes: Status indicator dot/circle

#### 4. Progress Indicator Component

interface ProgressProps extends ComponentPropsWithRef<"div">, VariantProps<typeof progress> {
  value: number;
  max?: number;
}

• Dependencies: None
• CSS Classes: hap-progress-indicator
• Notes: Progress bar with value/max props

#### 5. TextLink Component

interface TextLinkProps extends ComponentPropsWithRef<"a">, VariantProps<typeof textlink> {}

• Dependencies: None
• CSS Classes: hap-textlink
• Notes: Styled anchor element

### Phase 2: Composed Components (6 components)

Components that combine multiple elements and may use other components.

#### 6. TextField Component

interface TextFieldProps extends Omit<ComponentPropsWithRef<"input">, "type">, VariantProps<typeof textfield> {
  label?: string;
  description?: string;
  invalid?: boolean;
  brand?: boolean; // rounded variant
}

• Dependencies: Phase 1 (Icon for error states)
• CSS Classes: hap-textfield, hap-textfield--brand, hap-feedback--invalid
• Notes: Foundation for many other input components

#### 7. Textarea Component

interface TextareaProps extends ComponentPropsWithRef<"textarea">, VariantProps<typeof textarea> {
  label?: string;
  description?: string;
  invalid?: boolean;
}

• Dependencies: Phase 1 (Icon for error states)
• CSS Classes: hap-textarea, hap-feedback--invalid
• Notes: Multi-line text input

#### 8. Icon Button Component

interface IconButtonProps extends ComponentPropsWithRef<"button">, VariantProps<typeof iconButton> {
  icon: string; // Lucide icon name
  size?: "xs" | "small" | "medium" | "large";
}

• Dependencies: Button (existing), Icon (Phase 1)
• CSS Classes: hap-icon-button, hap-icon-button--xs
• Notes: Button containing only an icon

#### 9. Radio Group Component

interface RadioGroupProps extends ComponentPropsWithRef<"fieldset">, VariantProps<typeof radioGroup> {
  options: Array<{value: string; label: string; disabled?: boolean}>;
  value?: string;
  onChange?: (value: string) => void;
}

• Dependencies: None
• CSS Classes: hap-radio-group
• Notes: Fieldset with multiple radio inputs

#### 10. Breadcrumb Component

interface BreadcrumbProps extends ComponentPropsWithRef<"nav">, VariantProps<typeof breadcrumb> {
  items: Array<{label: string; href?: string}>;
}

• Dependencies: TextLink (Phase 1)
• CSS Classes: hap-breadcrumb
• Notes: Navigation breadcrumb trail

#### 11. Search Component

interface SearchProps extends Omit<ComponentPropsWithRef<"input">, "type">, VariantProps<typeof search> {
  onSearch?: (value: string) => void;
}

• Dependencies: TextField (Phase 2), Icon (Phase 1)
• CSS Classes: hap-search, uses hap-textfield base
• Notes: TextField variant with search icon

### Phase 3: Interactive Components (7 components)

Components requiring complex behavior and state management using Radix UI.

#### Required Dependencies

{
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-select": "^2.0.0",
  "@radix-ui/react-tabs": "^1.0.4",
  "@radix-ui/react-toast": "^1.1.5",
  "@radix-ui/react-tooltip": "^1.0.7"
}

#### 12. Tooltip Component

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}

• Radix: @radix-ui/react-tooltip
• CSS Classes: hap-tooltip
• Notes: Hover/focus popover

#### 13. Modal Component

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

• Radix: @radix-ui/react-dialog
• CSS Classes: hap-modal, hap-modal-title, hap-modal-content, hap-modal-actions
• Notes: Dialog overlay with backdrop

#### 14. Dropdown Component

interface DropdownProps {
  label?: string;
  placeholder?: string;
  value?: string;
  options: Array<{value: string; label: string}>;
  onChange?: (value: string) => void;
  invalid?: boolean;
}

• Radix: @radix-ui/react-select
• CSS Classes: Uses hap-textfield base classes
• Notes: Select dropdown using textfield styling

#### 15. Menu Component

interface MenuProps {
  trigger: React.ReactNode;
  items: Array<{label: string; onClick: () => void; disabled?: boolean}>;
}

• Radix: @radix-ui/react-dropdown-menu
• CSS Classes: hap-menu
• Notes: Context/dropdown menu

#### 16. Tabs Component

interface TabsProps {
  defaultTab?: string;
  tabs: Array<{id: string; label: string; content: React.ReactNode}>;
}

• Radix: @radix-ui/react-tabs
• CSS Classes: hap-tabs
• Notes: Tab navigation interface

#### 17. Snackbar Component

interface SnackbarProps {
  message: string;
  type?: "info" | "success" | "error" | "warning";
  duration?: number;
}

• Radix: @radix-ui/react-toast
• CSS Classes: hap-snackbar
• Notes: Toast notifications

#### 18. Navigation Drawer Component

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
}

• Radix: Custom implementation or @radix-ui/react-sheet (if available)
• CSS Classes: hap-navigation-drawer
• Notes: Slide-out side panel

### Phase 4: Complex Layout Components (4 components)

Advanced components for layout and navigation.

#### 19. Toggle Button Component

interface ToggleButtonProps extends ComponentPropsWithRef<"button">, VariantProps<typeof toggleButton> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

• Dependencies: Button patterns
• CSS Classes: hap-toggle-button
• Notes: Button with pressed/unpressed states

#### 20. Toggle Button Group Component

interface ToggleButtonGroupProps {
  type?: "single" | "multiple";
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  children: React.ReactNode;
}

• Dependencies: Toggle Button (Phase 4)
• CSS Classes: hap-toggle-button-group
• Notes: Group of toggle buttons with single/multi select

#### 21. Navigation Rail Component

interface NavigationRailProps {
  items: Array<{id: string; icon: string; label: string; href?: string}>;
  activeItem?: string;
}

• Dependencies: Icon Button (Phase 2), Icon (Phase 1)
• CSS Classes: hap-navigation-rail
• Notes: Vertical navigation sidebar

#### 22. Topbar Component

interface TopbarProps {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
}

• Dependencies: Various components as children
• CSS Classes: hap-topbar
• Notes: Application header bar

## Implementation Guidelines

### Development Standards

1. TypeScript Strict Mode: All components must pass strict type checking
2. Accessibility: Follow WCAG 2.1 AA standards, leverage Radix UI accessibility
3. Performance: Use React.memo for expensive components, avoid unnecessary re-renders
4. Testing: Create Storybook stories for each component
5. Documentation: Include JSDoc comments for all public APIs

### File Structure

packages/react/src/components/
├── icon.tsx
├── icon.stories.tsx
├── divider.tsx
├── divider.stories.tsx
├── ...
└── main.ts (export index)

### Code Style

• Use ESM imports with .js extensions
• Destructure props with rest spread pattern
• Export component and props interface
• Follow existing naming conventions
• No default exports (use named exports)

### CSS Integration

• Never write custom CSS - only use foundation classes
• Use CVA for variant management
• Compose feedback classes when needed
• Maintain BEM-like modifier patterns

### Radix UI Integration

• Import only needed Radix components
• Apply design system classes to Radix components
• Handle unstyled to styled component mapping
• Ensure proper accessibility attributes

## Testing Strategy

### Storybook Stories

• Default story showing basic usage
• All variant combinations
• Interactive states (hover, focus, disabled)
• Error states where applicable
• Accessibility testing scenarios

### Component Testing

• Unit tests for component logic
• Integration tests with Storybook
• Visual regression tests with Playwright
• Accessibility testing with axe-core

## Migration Strategy

### Phase Implementation

1. Start with Phase 1 - No external dependencies
2. Add Radix dependencies before Phase 3
3. Test each phase before proceeding
4. Update exports incrementally in main.ts
5. Create documentation as components are completed

### Backwards Compatibility

• Maintain existing component APIs
• Add new components without breaking changes
• Version appropriately for major API changes

## Success Criteria

### Definition of Done

[ ] Component implements all CSS variants
[ ] TypeScript types are complete and strict
[ ] Storybook story covers all use cases
[ ] Accessibility requirements met
[ ] Visual tests pass
[ ] Integration with existing components works
[ ] Exported in main.ts
[ ] Documentation updated

### Completion Metrics

• 22 total components to implement
• 100% CSS class coverage
• All Storybook stories passing
• Zero TypeScript errors
• All accessibility tests passing

## Risk Mitigation

### Potential Issues

1. Radix UI Version Conflicts: Pin specific versions, test thoroughly
2. Bundle Size Growth: Use tree shaking, analyze bundle impact
3. CSS Class Conflicts: Follow strict naming conventions
4. Accessibility Regressions: Regular testing with screen readers
5. Breaking Changes: Semantic versioning, migration guides

### Mitigation Strategies

• Incremental development and testing
• Regular dependency updates
• Comprehensive test coverage
• Code reviews focusing on patterns
• Performance monitoring
```
