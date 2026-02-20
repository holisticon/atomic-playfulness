import { renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Snackbar: CatalogComponents["Snackbar"] = ({ props }) => {
  const variantClass =
    props.variant === "multi" ? "hap-snackbar-multiline" : "hap-snackbar";
  return (
    <div className={variantClass}>
      <div className="hap-snackbar-content">
        <span>{props.label}</span>
        <div className="hap-snackbar-actions">
          {props.actionLabel ? (
            <button className="hap-snackbar-button" type="button">
              {props.actionLabel}
            </button>
          ) : null}
          {props.closeable ? (
            <button className="hap-icon-button--sm" type="button">
              {renderIcon("circle-x", "small")}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
