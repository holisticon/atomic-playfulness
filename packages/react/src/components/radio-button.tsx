import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const radioButton = cva({
  base: "hap-radio-button",
});

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioButtonProps
  extends Omit<ComponentPropsWithRef<"input">, "type">,
    VariantProps<typeof radioButton> {
  option: RadioOption;
}

export function RadioButton(props: RadioButtonProps) {
  const { option, value, onChange, name, className, disabled, ...rest } = props;

  return (
    <label key={option.value} className={radioButton({ className })}>
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={value === option.value}
        disabled={disabled || option.disabled}
        onChange={onChange}
        {...rest}
      />
      {option.label}
    </label>
  );
}
