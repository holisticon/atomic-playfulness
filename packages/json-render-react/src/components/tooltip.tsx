import type { CatalogComponents } from "./types.js";

export const Tooltip: CatalogComponents["Tooltip"] = ({ props }) => (
  <span className="hap-tooltip">{props.content}</span>
);
