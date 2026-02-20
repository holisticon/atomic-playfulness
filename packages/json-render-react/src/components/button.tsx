import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Button: CatalogComponents["Button"] = ({ props, emit }) => (
  <button
    type={props.type ?? "button"}
    className={classNames(
      props.size === "small" ? "hap-button--sm" : "hap-button",
      `hap-button--${props.variant}`,
    )}
    disabled={props.disabled}
    onClick={() => emit("press")}
  >
    {props.icon && props.iconPosition !== "right"
      ? renderIcon(props.icon)
      : null}
    {props.label}
    {props.icon && props.iconPosition === "right"
      ? renderIcon(props.icon)
      : null}
  </button>
);
