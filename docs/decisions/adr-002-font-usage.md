# Font Usage

| Status   | Date       | Decided by |
| -------- | ---------- | ---------- |
| proposed | 17.06.2024 |            |

## Context

Due to the license of our "ES Klarheit" fonts, we cannot publish the
webfont-files publicly as part of Atomic Playfulness. As we want to develop this
design system in the open we need a solution to separate the fonts from the rest
of the design system so that we can publish it without encouraging usage of
these fonts without proper license.

## Decision

The plan is to create a separate, private git-repository that contains the
webfont files (_.woff and _.woff2) and the CSS `@font-face` definitions. They
shall be made usable by publishing an NPM package that can only be accessed
Holisticon-internally.

The design system itself will only reference the fonts by name and provide
fallbacks for when it is used without the font package.

## Consequences

We can publish our design system both in code and in interactive documentation
(such as Storybook) without violating the font license.

Any application that wants to use the design system with the intended fonts
needs to include an additional dependency and configure the internal NPM
repository. When using modern tooling (e.g. Vite) it should be enough to include
the CSS file containing the `@font-face` definitions - no asset copying or
additional configuration should necessary.
