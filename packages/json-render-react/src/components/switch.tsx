import { useBoundProp } from "@json-render/react";
import type { CatalogComponents } from "./types.js";

export const Switch: CatalogComponents["Switch"] = ({
  props,
  bindings,
  emit,
}) => {
  const [checked, setChecked] = useBoundProp<boolean>(
    props.checked,
    bindings?.["checked"],
  );
  const resolvedChecked = checked ?? props.checked ?? false;
  return (
    <input
      type="checkbox"
      name={props.name}
      className={props.size === "small" ? "hap-switch--sm" : "hap-switch"}
      checked={resolvedChecked}
      disabled={props.disabled}
      onChange={(event) => {
        setChecked(event.target.checked);
        emit("change");
      }}
    />
  );
};
