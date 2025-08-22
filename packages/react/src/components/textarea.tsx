import { compose, cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { feedback } from "../common/feedback.js";
import { Icon } from "./icon.js";

const textArea = compose(
  feedback,
  cva({
    base: "hap-textarea",
  }),
);

export interface TextareaProps
  extends ComponentPropsWithRef<"textarea">,
    VariantProps<typeof textArea> {
  label?: string;
  description?: string;
  invalid?: boolean;
}

export function Textarea(props: TextareaProps) {
  const {
    label,
    description,
    invalid,
    feedback: feedbackProp,
    className,
    id,
    children,
    ...rest
  } = props;

  const textareaId =
    id || `textarea-${Math.random().toString(36).slice(2, 11)}`;
  const descriptionId = description ? `${textareaId}-description` : undefined;

  return (
    <div
      className={textArea({
        feedback: invalid ? "critical" : feedbackProp,
        className,
      })}
    >
      {label && (
        <label htmlFor={textareaId}>
          {invalid && <Icon name="CircleAlert" size="small" />}
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className="hap-textarea-input"
        aria-describedby={descriptionId}
        {...rest}
      >
        {children}
      </textarea>
      {description && <span id={descriptionId}>{description}</span>}
    </div>
  );
}
