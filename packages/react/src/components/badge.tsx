import { compose, cva, type VariantProps } from "cva";
import type { ReactNode } from "react";
import { feedback } from "../common/feedback.js";

const badge = compose(
  feedback,
  cva({
    base: "hap-badge",
    variants: { strong: { true: "hap-badge--strong" } },
  }),
);

interface BadgeProps extends VariantProps<typeof badge> {
  children: ReactNode;
  className?: string;
}

export function Badge(props: BadgeProps) {
  const { className, children, feedback, ...rest } = props;
  return (
    <div className={badge({ className, feedback })} {...rest}>
      {children}
    </div>
  );
}
