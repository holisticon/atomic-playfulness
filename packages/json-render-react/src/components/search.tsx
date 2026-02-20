import { useBoundProp } from "@json-render/react";
import { renderIcon } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Search: CatalogComponents["Search"] = ({
  props,
  bindings,
  emit,
}) => {
  const [value, setValue] = useBoundProp<string>(
    props.value,
    bindings?.["value"],
  );
  return (
    <div className="hap-search">
      <span className="hap-search-icon">{renderIcon("search", "small")}</span>
      <input
        aria-label={props.label}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        value={value ?? props.value ?? ""}
        onChange={(event) => {
          setValue(event.target.value);
          emit("change");
        }}
      />
      <button
        className="hap-icon-button--sm"
        type="button"
        onClick={() => emit("submit")}
      >
        {renderIcon("arrow-right", "small")}
      </button>
    </div>
  );
};
