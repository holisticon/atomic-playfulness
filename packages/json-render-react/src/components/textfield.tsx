import { useBoundProp } from "@json-render/react";
import React from "react";
import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Textfield: CatalogComponents["Textfield"] = ({
  props,
  bindings,
  emit,
}) => {
  const [value, setValue] = useBoundProp<string>(
    props.value,
    bindings?.["value"],
  );
  const inputId = props.id ?? React.useId();
  return (
    <div
      className={classNames(
        "hap-textfield",
        props.round ? "hap-textfield--brand" : undefined,
        props.invalid ? "hap-feedback--invalid" : undefined,
      )}
    >
      <label htmlFor={inputId}>{props.label}</label>
      <div className="hap-textfield-input">
        <input
          id={inputId}
          name={props.name}
          type={props.type ?? "text"}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          value={value ?? props.value ?? ""}
          onChange={(event) => {
            setValue(event.target.value);
            emit("change");
          }}
        />
      </div>
      {props.description ? <span>{props.description}</span> : null}
    </div>
  );
};
