import { compose, cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { feedback } from "../common/feedback.js";
import { Icon } from "./icon.js";

const radioGroup = compose(
  feedback,
  cva({
    base: "hap-radio-group",
  }),
);

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<ComponentPropsWithRef<"fieldset">, "onChange">,
    VariantProps<typeof radioGroup> {
  legend?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  invalid?: boolean;
  errorMessage?: string;
  name: string;
}

export function RadioGroup(props: RadioGroupProps) {
  const {
    legend,
    options,
    value,
    onChange,
    invalid,
    errorMessage,
    name,
    feedback: feedbackProp,
    className,
    disabled,
    ...rest
  } = props;

  const handleChange = (optionValue: string) => {
    if (!disabled && onChange) {
      onChange(optionValue);
    }
  };

  return (
    <fieldset
      className={radioGroup({
        feedback: invalid ? "critical" : feedbackProp,
        className,
      })}
      disabled={disabled}
      {...rest}
    >
      {legend && <legend>{legend}</legend>}

      {options.map((option) => (
        <label key={option.value} className="hap-radio">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={disabled || option.disabled}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}

      {invalid && errorMessage && (
        <div className="hap-radio-group-error">
          <Icon name="CircleAlert" size="small" />
          {errorMessage}
        </div>
      )}
    </fieldset>
  );
}
