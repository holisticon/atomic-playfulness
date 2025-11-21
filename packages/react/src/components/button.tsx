import { cva, type VariantProps } from "cva";
import type { ComponentPropsWithRef } from "react";

const button = cva({
  variants: {
    size: {
      default: "hap-button",
      small: "hap-button--sm",
    },
    variant: {
      primary: "hap-button--primary",
      secondary: "hap-button--secondary",
      tertiary: "hap-button--tertiary",
      destructive: "hap-button--destructive",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "primary",
  },
});

interface ButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof button> {
  iconVariant?: "Text only" | "Icon left" | "Icon right";
  icon?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={button(props)}>
      {props.iconVariant === "Icon left" && props.icon}
      {props.children}
      {props.iconVariant === "Icon right" && props.icon}
    </button>
  );
}
