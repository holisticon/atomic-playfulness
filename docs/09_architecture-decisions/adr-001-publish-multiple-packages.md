# Publish multiple packages

| Status   | Date       | Decided by                                        |
| -------- | ---------- | ------------------------------------------------- |
| accepted | 31.05.2024 | @christoph-fricke @filipamarta @joostme @mrm1st3r |

## Context

We want to use basic design tokens in places where we don't need components
(e.g. reveal.js). Also, we plan provide integrations for specific frameworks.

## Decision

Splitting up into multiple packages appears very natural, because we can easily
identify different layers of abstraction for them. Also, they can be expected to
have distinct reasons to be updated, where the more basic packages will change
less (like colors and fonts) and e.g. packages for framework integrations might
change more often to keep up with the frameworks themselves. Also, as these
integrations would need special dependencies, they shouldn't be included in a
general purpose package.

## Consequences

Users of the design system might need to update multiple packages.
