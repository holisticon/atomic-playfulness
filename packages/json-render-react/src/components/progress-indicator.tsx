import type { CSSProperties } from "react";
import type { CatalogComponents } from "./types.js";

export const ProgressIndicator: CatalogComponents["ProgressIndicator"] = ({
  props,
}) => (
  <div
    role="progressbar"
    aria-label="Loading"
    aria-valuenow={props.progress}
    className="hap-progress-indicator"
    style={{ "--progress": `${props.progress ?? 0}%` } as CSSProperties}
  />
);
