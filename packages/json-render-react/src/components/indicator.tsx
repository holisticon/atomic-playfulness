import type { CatalogComponents } from "./types.js";

export const Indicator: CatalogComponents["Indicator"] = ({ props }) => (
  <div className="hap-indicator">{props.content ?? null}</div>
);
