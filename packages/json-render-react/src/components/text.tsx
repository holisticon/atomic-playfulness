import type { CatalogComponents } from "./types.js";

export const Text: CatalogComponents["Text"] = ({ props }) => (
  <span
    className={
      props.size === "sm"
        ? "hap-text--sm"
        : props.size === "xs"
          ? "hap-text--xs"
          : "hap-text"
    }
  >
    {props.text}
  </span>
);
