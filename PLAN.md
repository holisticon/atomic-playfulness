# React Package Tailwind Removal & Class Hygiene Plan (Restricted to `@holisticon/hap-react` Only)

## 1. Purpose

Refactor the `@holisticon/hap-react` package to eliminate all Tailwind-like
utility class usage from component source and stories **without modifying any
other packages** (no changes to foundation, tailwind, or documentation
packages). We rely solely on already existing `hap-` classes (including layout
helpers: `hap-stack`, `hap-inline`, `hap-gap-*`).

## 2. Updated Constraints Incorporated

| Constraint                            | Effect on Plan                                                                                                                |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| React package only                    | No edits to foundation CSS or tokens; only remove / simplify within React source & stories                                    |
| Existing layout helpers present       | Reuse `hap-stack`, `hap-inline`, `hap-gap-*`; do not invent new helper classes                                                |
| No ESLint rule desired                | Skip custom rule; rely on one-time grep + code review                                                                         |
| No new semantic classes outside React | If a needed style previously faked by utilities does not exist, we accept simpler appearance rather than cross-package change |

## 3. Success Criteria

1. Zero Tailwind-style (utility) class tokens in
   `packages/react/src/components/**/*.tsx` & related `*.stories.tsx`.
2. All `className` values resolve to existing `hap-` classes or CVA outputs
   referencing those.
3. No new `hap-` class names introduced that aren't already defined (we do not
   assume or create unseen foundation classes).
4. Build, type-check, and visual tests pass (differences only from removal of
   previously inert utilities).
5. React package CHANGELOG updated (patch) summarizing cleanup.

## 4. Audit (React Only)

| Area                              | File                       | Issue                                            | Planned Action                                                                                                                              |
| --------------------------------- | -------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Snackbar viewport                 | `snackbar.tsx`             | Template literal of utilities                    | Remove utilities; leave bare viewport element or minimal wrapper (no Tailwind)                                                              |
| Dropdown trigger/content/items    | `dropdown.tsx`             | Utility chains for layout/focus/animation        | Strip utilities; keep structural Radix markup; retain only existing `hap-menu` / `hap-menu-item` if already used elsewhere (otherwise none) |
| Menu popup & items                | `menu.tsx`                 | Utility sequences for animation & spacing        | Remove utility tokens; preserve current `hap-menu*` class references only                                                                   |
| Modal overlay/content/close       | `modal.tsx`                | Positioning/animation/focus ring utilities       | Remove utilities not guaranteed by existing classes; accept simpler modal rendering                                                         |
| Navigation Drawer                 | `navigation-drawer.tsx`    | Width/position utilities, close button utilities | Remove them; keep base `hap-navigation-drawer*` usage only                                                                                  |
| Tabs content                      | `tabs.tsx`                 | `mt-6` & focus ring utilities                    | Remove margin & focus utilities                                                                                                             |
| Stories (multiple)                | `*.stories.tsx`            | Layout / typography utilities                    | Replace with `hap-stack` / `hap-inline hap-gap-*` or plain markup                                                                           |
| Indicator spans / item indicators | `menu.tsx`, `dropdown.tsx` | Positional flex utilities                        | Simplify (icon inline)                                                                                                                      |

## 5. Simplification Strategy (No Foundation Changes)

Principle: Remove misleading, non-functional utility strings even if this
reduces visual polish; correctness > phantom styling.

Rules:

1. Delete utility tokens outright unless they are already true `hap-` classes.
2. Do not add inline styles unless accessibility or structural layout breaks
   (rare).
3. For clustered layout in stories, wrap groups with existing
   `hap-stack hap-gap-sm|md|lg`.
4. Animations relying on Tailwind utilities are dropped silently; document in
   CHANGELOG.

## 6. Execution Order

1. Tabs cleanup (validate approach on a low-risk file)
2. Snackbar viewport simplification
3. Dropdown & Menu cleanup (shared patterns)
4. Modal & Navigation Drawer simplification
5. Batch story refactor (Tabs, Navigation Rail, Drawer, Topbar, Toggle Button
   Group, Snackbar, Dropdown etc.)
6. Final grep sweep
7. Visual test run / snapshot review
8. CHANGELOG update

## 7. Tailwind Pattern Sweep (One-Time)

Manual (and optional temporary script) grep for these substrings after refactor:
`flex`, `grid-`, ` p-`, ` m-`, ` mt-`, ` mb-`, ` ml-`, ` mr-`, ` px-`, ` py-`,
` gap-`, ` space-x-`, ` space-y-`, ` text-`, ` font-`, ` bg-`, ` rounded`,
` ring-`, ` focus:`, ` data-[`, ` w-`, ` h-`, ` top-`, ` left-`, ` right-`,
` bottom-`, ` inset-`, ` translate-`, ` opacity-`.

Allowlist: occurrences inside documentation comments or variable names (none
expected) are acceptable; only `className="..."` contexts matter.

## 8. CHANGELOG (React Only)

```
### @holisticon/hap-react (Patch)
refactor: remove Tailwind-style utility class strings from components & stories (they were non-operative)
docs: clarify reliance on existing hap-* classes only
```

## 9. Risks & Mitigation

| Risk                               | Mitigation                                                             |
| ---------------------------------- | ---------------------------------------------------------------------- | ------------------- |
| Visual spacing tighter than before | Add `hap-stack hap-gap-sm                                              | md` in stories only |
| Perceived regression in animations | Note in CHANGELOG; future enhancement would require foundation support |
| Over-removal of necessary class    | Incremental commits + manual story validation                          |
| Missed residual utility            | Final comprehensive grep                                               |

## 10. Non-Goals

| Out of Scope                                       | Reason                                 |
| -------------------------------------------------- | -------------------------------------- |
| Adding new foundation classes or tokens            | Constraint: react-only changes         |
| ESLint rule or permanent script                    | Explicitly not required                |
| Styling parity for animations previously simulated | Utilities were inert; not required now |

## 11. Execution Checklist

| Step | Action                                    | Output                                                 |
| ---- | ----------------------------------------- | ------------------------------------------------------ |
| 1    | Edit `tabs.tsx`                           | Remove `mt-6`, focus ring utilities                    |
| 2    | Edit `snackbar.tsx`                       | Simplify viewport; drop utility template               |
| 3    | Edit `dropdown.tsx`                       | Strip utility-heavy base strings                       |
| 4    | Edit `menu.tsx`                           | Remove animation/spacing utilities                     |
| 5    | Edit `modal.tsx`, `navigation-drawer.tsx` | Remove positioning/animation utilities                 |
| 6    | Refactor stories                          | Replace layout utilities with `hap-stack`/`hap-inline` |
| 7    | Grep sweep                                | Confirm zero disallowed patterns                       |
| 8    | Visual tests                              | Validate no unintended regressions                     |
| 9    | CHANGELOG                                 | Patch note added                                       |

## 12. Current Open Questions

None (all constraints resolved by stakeholder input).

## 13. Next Step

Begin with Step 1 (Tabs cleanup) on branch `feat/hap-react`.

Prepared / Updated: September 2025

Scope-limited remediation plan for `@holisticon/hap-react` only.
