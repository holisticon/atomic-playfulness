import { useBoundProp } from "@json-render/react";
import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const RadioGroup: CatalogComponents["RadioGroup"] = ({
  props,
  bindings,
  emit,
}) => {
  const [value, setValue] = useBoundProp<string>(
    props.value,
    bindings?.["value"],
  );
  const currentValue = value ?? props.value;
  return (
    <fieldset
      role="radiogroup"
      className={classNames(
        "hap-radio-group",
        props.error ? "hap-feedback--invalid" : undefined,
      )}
      disabled={props.disabled}
    >
      <legend>{props.label}</legend>
      {props.options.map((option: { label: string; value: string }) => (
        <label className="hap-radio" key={option.value}>
          <input
            type="radio"
            name={props.name}
            value={option.value}
            checked={currentValue === option.value}
            onChange={() => {
              setValue(option.value);
              emit("change");
            }}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
};
