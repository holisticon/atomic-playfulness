# Icon Packaging

| Status   | Date       | Decided by |
| -------- | ---------- | ---------- |
| accepted | 10.01.2025 |            |

## Context

As part of the design system, we want to provide an icon set. On the design
side, we're using [Lucide Icons](https://lucide.dev/). In the implementation, we
can either bundle these icons with our design system or have them installed
separately by applications.

If icons were bundled, it is expected to be harder for applications to use
different icons instead. E.g. because our API design might lean towards only
distinguishing between different icons by name instead of allowing any element.

If icons aren't bundled, users of the design system might need to figure out how
to install and use icons, making it harder to use the design system properly.

## Decision

There will be no icons provided with the design system itself. Only basic
styling for sizing and coloring of icons will be provided.

To make usage easier, the storybook will include instructions on how to install
and examples how to use the Lucide Icons.

## Consequences

Users of the design system will need to install an icon package separately.
