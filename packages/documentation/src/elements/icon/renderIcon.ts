import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import type { IconSizeType, IconType } from "./icon.stories.ts";

export const renderIcon = (icon: IconType, size: IconSizeType = "default") =>
  html` <svg
    class="${classMap({
      "hap-icon": size !== "small",
      "hap-icon--sm": size === "small",
    })}"
    viewBox="0 0 24 24"
  >
    <use href="#${icon}" />
  </svg>`;
