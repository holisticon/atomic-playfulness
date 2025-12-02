import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const checkbox = cva({
  base: "hap-checkbox",
  variants: {
    invalid: {
      true: "hap-feedback--invalid",
    },
  },
});

interface CheckboxProps
  extends Omit<ComponentPropsWithRef<"input">, "type">,
    VariantProps<typeof checkbox> {
  indeterminate?: boolean;
  showLabel?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  const {
    children,
    indeterminate = false,
    showLabel,
    invalid,
    className,
    ...rest
  } = props;

  return (
    <label className={checkbox({ invalid, className })}>
      <input
        type="checkbox"
        // FIXME: This gets overwritten by an external ref, right?
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
        {...rest}
      />
      {showLabel && children}
    </label>
  );
}
