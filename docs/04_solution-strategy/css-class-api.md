# CSS Class API

This strategy outlines the best-practices and patterns for naming and composing
CSS classes in _Atomic Playfulness_.

## Class Naming Schema

The CSS classes should all conform to some basic naming conventions:

- All classes **must** start with a `hap-`prefix. This ensures that our API does
  not accidentally clash with other CSS classes.
- Sizes must be abbreviated (`sm` instead of `small`)
- Variant classes should be built similar to BEM (`.hap-headline--xl` instead of
  `.hap-headline-xl`)

## Make the Default Easy

Typing and remembering CSS classes is no fun. To make each component easy to
use, the default should be applicable through a single class. I.e. `.hap-badge`
instead of `.hap-badge .hap-badge--regular .hap-badge--default`.

When there are variants of a component that can be identified as the "main
variant" (typically the size), these variants should be usable with a single css
class, e.g. `.hap-button--sm`.  
Only other variants should then require the usage of a secondary class, e.g.
`.hap-button--sm .hap-button--primary`.

## Non-Class Selectors

Where possible, you should apply styles based on attributes and pseudoclasses to
reduce the amount CSS classes in HTML templates. It can further help with
creating accessible components.

## Composition APIs

In proper components (e.g. React or Web-Components) a component can contain more
than one HTML element. The components abstracts the internal structure. With CSS
classes this is not really possible.

Nonetheless, "bigger" components, e.g. a textfield can provide a convenient CSS
class for styling the whole template. It should ensure that implicit styles are
unambiguous.

```html
<div class="hap-textfield">
  <label for="textfield">Label</label>
  <input id="textfield" aria-describedby="description" />
  <span class="hap-textfield-description" id="description">Description</span>
</div>

<!-- ...instead of requiring... -->

<div class="hap-textfield">
  <label class="hap-textfield-label" for="textfield">Label</label>
  <input
    class="hap-textfield-input"
    id="textfield"
    aria-describedby="description"
  />
  <span class="hap-textfield-description" id="description">Description</span>
</div>
```

## Global Concepts

The CSS classes should form a coherent API. Overarching concepts between
components should be named the same to be recognizable and intuitive.

When possible, consider abstracting a concept into one set CSS classes that
compose with components, instead of defining the concept for each component. For
example, some components, such as `badge` and `alert`, all have a concept of
feedback. This could be abstracted into global `hap-feedback-{tone}` classes
that define special CSS custom properties, which components can reuse.
