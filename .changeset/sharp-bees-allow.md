---
"@holisticon/hap-foundation": major
---

Overhauled the indicator to only use a single class `hap-indicator`. Instead of an additional "small" styling for indicators without contents, the styling is based on whether or not the indicator has content. The additional `small` and `hap-indicator-content` classes requirements have been removed.

```html
<!-- OLD -->
<div class="hap-indicator">
  - <span class="hap-indicator-number">123</span> -
</div>
<!-- NEW -->
<div class="hap-indicator">123</div>
```
