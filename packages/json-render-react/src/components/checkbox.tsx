import { useBoundProp } from "@json-render/react";
import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Checkbox: CatalogComponents["Checkbox"] = ({
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
    <label
      className={classNames(
        "hap-checkbox",
        props.error ? "hap-feedback--invalid" : undefined,
      )}
    >
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        checked={resolvedChecked}
        disabled={props.disabled}
        onChange={(event) => {
          const next = event.target.checked;
          setChecked(next);
          emit("change");
        }}
        ref={(input) => {
          if (input) input.indeterminate = !!props.indeterminate;
        }}
      />
      <span>{props.label}</span>
    </label>
  );
};
