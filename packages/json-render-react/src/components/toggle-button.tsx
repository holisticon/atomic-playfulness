import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const ToggleButton: CatalogComponents["ToggleButton"] = ({
  props,
  emit,
}) => (
  <button
    type="button"
    aria-pressed={props.pressed ? "true" : "false"}
    className={classNames(
      props.size === "small" ? "hap-toggle-button--sm" : "hap-toggle-button",
      props.subtle ? "hap-toggle-button--subtle" : undefined,
    )}
    disabled={props.disabled}
    onClick={() => emit("press")}
  >
    {props.icon
      ? renderIcon(props.icon, props.size === "small" ? "small" : "default")
      : null}
    {props.label}
  </button>
);
