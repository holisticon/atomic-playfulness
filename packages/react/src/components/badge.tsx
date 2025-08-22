import { compose, cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";
import { feedback } from "../common/feedback.js";

const badge = compose(
  feedback,
  cva({
    base: "hap-badge",
    variants: { strong: { true: "hap-badge--strong" } },
  }),
);

interface BadgeProps
  extends ComponentPropsWithRef<"div">,
    VariantProps<typeof badge> {}

export function Badge(props: BadgeProps) {
  return (
    <div {...props} className={badge(props)}>
      {props.children}
    </div>
  );
}
