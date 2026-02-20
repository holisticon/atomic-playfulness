import { renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Tag: CatalogComponents["Tag"] = ({ props, emit }) => (
  <span className="hap-tag">
    {props.icon ? renderIcon(props.icon, "small") : null}
    {props.label}
    {props.closeable ? (
      <button
        type="button"
        className="hap-icon-button--xs"
        onClick={() => emit("close")}
      >
        {renderIcon("circle-x", "small")}
      </button>
    ) : null}
  </span>
);
