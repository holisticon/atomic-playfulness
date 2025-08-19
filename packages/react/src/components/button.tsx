import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef, ReactNode } from "react";

const button = cva({
  base: "hap-button",
  variants: {
    variant: {
      primary: "hap-button--primary",
      secondary: "hap-button--secondary",
      tertiary: "hap-button--tertiary",
      destructive: "hap-button--destructive",
    },
    size: {
      default: "",
      small: "hap-button--sm",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof button> {
  children?: ReactNode;
}

export function Button(props: ButtonProps) {
  const { variant, size, className, children, ...rest } = props;
  return (
    <button className={button({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
