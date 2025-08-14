# @holisticon/hap-react

React components for the atomic-playfulness design system.

## Installation

```bash
npm install @holisticon/hap-react @holisticon/hap-foundation
```

## Usage

```tsx
import { Indicator } from "@holisticon/hap-react";

function App() {
  return (
    <div>
      <Indicator number="5" />
      <Indicator variant="small" />
    </div>
  );
}
```

## Styling

Make sure to import the foundation CSS in your application:

```css
@import "@holisticon/hap-foundation/atomic-playfulness.css";
```

## Components

- [Indicator](#indicator)

### Indicator

The Indicator component displays a small notification badge with an optional
number.

#### Props

- `variant?: 'default' | 'small'` - The visual variant of the indicator
- `number?: string` - Optional number to display in the indicator
- `className?: string` - Additional CSS classes
- `...rest` - All other HTML div attributes

#### Examples

```tsx
// Default indicator with number
<Indicator number="123" />

// Small indicator without number
<Indicator variant="small" />

// With custom className
<Indicator number="5" className="my-custom-class" />
```
