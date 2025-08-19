import { cva, type VariantProps } from "cva";
import type { HTMLAttributes, ReactNode } from "react";

const tag = cva({
  base: "hap-tag",
});

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tag> {
  children?: ReactNode;
}

export function Tag(props: TagProps) {
  const { className, children, ...rest } = props;
  return (
    <span className={tag({ className })} {...rest}>
      {children}
    </span>
  );
}
