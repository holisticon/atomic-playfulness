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
  return <div className={badge(props)}>{props.children}</div>;
}
