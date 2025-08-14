import React from "react";

export type IndicatorVariant = "default" | "small";

export interface IndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The visual variant of the indicator
   * @default 'default'
   */
  variant?: IndicatorVariant;
  /**
   * Optional number to display in the indicator
   */
  number?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Indicator component displays a small notification badge with an optional number.
 *
 * @example
 * ```tsx
 * // Default indicator with number
 * <Indicator number="123" />
 *
 * // Small indicator without number
 * <Indicator variant="small" />
 * ```
 */
export const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>(
  ({ variant = "default", number, className, ...props }, ref) => {
    const classes = ["hap-indicator", variant === "small" && "small", className]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classes} {...props}>
        {number && <span className="hap-indicator-number">{number}</span>}
      </div>
    );
  },
);

Indicator.displayName = "Indicator";
