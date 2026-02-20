import { useBoundProp } from "@json-render/react";
import React from "react";
import { classNames } from "./shared.js";
import type { CatalogComponents } from "./types.js";

export const Textarea: CatalogComponents["Textarea"] = ({
  props,
  bindings,
  emit,
}) => {
  const [value, setValue] = useBoundProp<string>(
    props.value,
    bindings?.["value"],
  );
  const textareaId = props.id ?? React.useId();
  return (
    <div
      className={classNames(
        "hap-textarea",
        props.invalid ? "hap-feedback--invalid" : undefined,
      )}
    >
      <label htmlFor={textareaId}>{props.label}</label>
      <textarea
        id={textareaId}
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.readOnly}
        rows={props.rows}
        value={value ?? props.value ?? ""}
        onChange={(event) => {
          setValue(event.target.value);
          emit("change");
        }}
      />
      {props.description ? <span>{props.description}</span> : null}
    </div>
  );
};
