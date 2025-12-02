import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef, ReactNode } from "react";

const indicator = cva({
  base: "hap-indicator",
});

export interface IndicatorProps
  extends ComponentPropsWithRef<"span">,
    VariantProps<typeof indicator> {
  children?: ReactNode;
}

export function Indicator(props: IndicatorProps) {
  const { className, children, ...rest } = props;

  return (
    <span className={indicator({ className })} {...rest}>
      {children}
    </span>
  );
}
