import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const switchVariants = cva({
  base: "hap-switch",
  variants: {
    size: {
      default: "",
      small: "hap-switch--sm",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SwitchProps
  extends Omit<ComponentPropsWithRef<"input">, "type" | "size">,
    VariantProps<typeof switchVariants> {}

export function Switch(props: SwitchProps) {
  const { size, className, ...rest } = props;

  return (
    <input
      type="checkbox"
      className={switchVariants({ size, className })}
      {...rest}
    />
  );
}
