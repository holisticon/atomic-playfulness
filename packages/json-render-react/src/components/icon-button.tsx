import { classNames, renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const IconButton: CatalogComponents["IconButton"] = ({
  props,
  emit,
}) => (
  <button
    type="button"
    className={classNames(
      props.size && props.size !== "default"
        ? `hap-icon-button--${props.size}`
        : "hap-icon-button",
      props.selected ? "hap-icon-button--selected" : undefined,
    )}
    disabled={props.disabled}
    onClick={() => emit("press")}
  >
    {renderIcon(props.icon, props.size === "default" ? "default" : "small")}
  </button>
);
