import type { CatalogComponents } from "./types.js";

export const Headline: CatalogComponents["Headline"] = ({ props }) => (
  <span className={`hap-headline--${props.size}`}>{props.text}</span>
);
