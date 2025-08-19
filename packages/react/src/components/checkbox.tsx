import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef, ReactNode } from "react";

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
  children?: ReactNode;
  indeterminate?: boolean;
}

export function Checkbox(props: CheckboxProps) {
  const {
    children,
    indeterminate = false,
    invalid,
    className,
    ...rest
  } = props;

  return (
    <label className={checkbox({ invalid, className })}>
      <input
        type="checkbox"
        ref={(input) => {
          if (input) {
            input.indeterminate = indeterminate;
          }
        }}
        {...rest}
      />
      {children}
    </label>
  );
}
