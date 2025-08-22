import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const divider = cva({
  base: "hap-divider",
  variants: {
    orientation: {
      horizontal: null, // default
      vertical: "hap-divider-vertical",
    },
    inset: {
      none: null, // default
      start: "hap-divider--inset",
      both: "hap-divider--middle-inset",
    },
    bold: {
      true: "hap-divider--bold",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    inset: "none",
  },
});

export interface DividerProps
  extends ComponentPropsWithRef<"hr">,
    VariantProps<typeof divider> {}

export function Divider(props: DividerProps) {
  const { orientation, inset, bold, className, ...rest } = props;
  return (
    <hr
      className={divider({ orientation, inset, bold, className })}
      {...rest}
    />
  );
}
