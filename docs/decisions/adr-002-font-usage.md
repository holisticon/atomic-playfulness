# Font Usage

| Status   | Date       | Decided by |
| -------- | ---------- | ---------- |
| accepted | 21.06.2024 |            |

## Context

Due to the license of our "ES Klarheit" fonts, we cannot publish the
webfont-files publicly as part of Atomic Playfulness. As we want to develop this
design system in the open we need a solution to separate the fonts from the rest
of the design system so that we can publish it without encouraging usage of
these fonts without proper license.

## Discarded Alternative

The plan is to create a separate, private git-repository that contains the
webfont files (_.woff and _.woff2) and the CSS `@font-face` definitions. They
shall be made usable by publishing an NPM package that can only be accessed
Holisticon-internally.

The design system itself will only reference the fonts by name and provide
fallbacks for when it is used without the font package.

## Decision

Host the fonts on a CDN equipped with CORS-Headers that allow their usage only
on `*.holisticon.de` and `localhost`. That eliminates the need for a dedicated
artifact with font files. We can simply include the CSS `@font-face` definitions
in the design system and if it's used on a foreign domain, it will simply not
load the fonts and use the fall-back instead.

## Consequences

We can publish our design system both in code and in interactive documentation
(such as Storybook) without violating the font license.

Any application that wants to use the design system with the intended fonts
without configuring access to a private NPM repository.

Applications using Atomic Playfulness will only be fully offline-capable on
machines that have the fonts installed locally.
