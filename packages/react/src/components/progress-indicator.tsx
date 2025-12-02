import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const progressIndicator = cva({
  base: "hap-progress-indicator",
});

export interface ProgressIndicatorProps
  extends Omit<ComponentPropsWithRef<"div">, "children">,
    VariantProps<typeof progressIndicator> {
  value: number;
  max?: number;
  variant?: "linear" | "linear-countdown";
}

export function ProgressIndicator(props: ProgressIndicatorProps) {
  const { value, max = 100, className, style, variant, ...rest } = props;

  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={progressIndicator({ className })}
      style={
        {
          "--progress": `${variant === "linear-countdown" ? 100 - percentage : percentage}%`,
          ...style,
        } as React.CSSProperties
      }
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      {...rest}
    />
  );
}
