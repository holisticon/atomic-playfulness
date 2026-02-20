<h1 align="center">Atomic Playfulness - JSON Render React</h1>

Atomic Playfulness defines the brand design for Holisticon AG. This package
exposes a JSON Render catalog and React registry that render the Atomic
Playfulness elements using the CSS classes from `@holisticon/hap-foundation`.

## Installation

```bash
npm i @holisticon/hap-json-render-react @holisticon/hap-foundation
```

## Getting Started

```tsx
import "@holisticon/hap-foundation/atomic-playfulness.css";
import { Renderer } from "@json-render/react";
import { registry } from "@holisticon/hap-json-render-react";

const spec = {
  root: {
    type: "Button",
    props: { label: "Click me", variant: "primary" },
  },
};

export function App() {
  return <Renderer spec={spec} registry={registry} />;
}
```

## License

Atomic Playfulness is created for [Holisticon AG](https://holisticon.de) and
only intended to be used by Holisticon and its projects.
