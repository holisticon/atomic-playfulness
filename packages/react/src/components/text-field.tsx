import { compose, cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { feedback } from "../common/feedback.js";
import { Icon } from "./icon.js";

const textField = compose(
  feedback,
  cva({
    base: "hap-textfield",
    variants: {
      brand: {
        true: "hap-textfield--brand",
      },
    },
  }),
);

export interface TextFieldProps
  extends Omit<ComponentPropsWithRef<"input">, "type">,
    VariantProps<typeof textField> {
  label?: string;
  description?: string;
  invalid?: boolean;
  brand?: boolean;
  type?: "text" | "email" | "password" | "tel" | "url" | "search";
}

export function TextField(props: TextFieldProps) {
  const {
    label,
    description,
    invalid,
    brand,
    feedback: feedbackProp,
    className,
    id,
    type = "text",
    ...rest
  } = props;

  const inputId = id || `textfield-${Math.random().toString(36).slice(2, 11)}`;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <div
      className={textField({
        feedback: invalid ? "critical" : feedbackProp,
        brand,
        className,
      })}
    >
      {label && (
        <label htmlFor={inputId}>
          {invalid && <Icon name="CircleAlert" size="small" />}
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className="hap-textfield-input"
        aria-describedby={descriptionId}
        {...rest}
      />
      {description && <span id={descriptionId}>{description}</span>}
    </div>
  );
}
