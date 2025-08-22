import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const textLink = cva({
  base: "hap-textlink",
  variants: {
    size: {
      standard: null, // default
      small: "hap-textlink--sm",
      "extra-small": "hap-textlink--xs",
    },
  },
  defaultVariants: {
    size: "standard",
  },
});

export interface TextLinkProps
  extends ComponentPropsWithRef<"a">,
    VariantProps<typeof textLink> {}

export function TextLink(props: TextLinkProps) {
  const { size, className, children, ...rest } = props;
  return (
    <a className={textLink({ size, className })} {...rest}>
      {children}
    </a>
  );
}
