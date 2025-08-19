import { type VariantProps } from "cva";
import type { ReactNode } from "react";
import { feedback } from "../common/feedback.js";

interface BadgeProps extends VariantProps<typeof feedback> {
  children?: ReactNode;
}

export function Badge(props: BadgeProps) {
  return (
    <div className={feedback({ class: "hap-badge", ...props })}>
      {props.children}
    </div>
  );
}
