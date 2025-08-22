import { cva, type VariantProps } from "cva";
import { icons } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import { Icon } from "./icon.js";

const iconButton = cva({
  base: "hap-icon-button",
  variants: {
    size: {
      medium: null, // default
      small: "hap-icon-button--sm",
      "extra-small": "hap-icon-button--xs",
    },
    selected: {
      true: "hap-icon-button--selected",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface IconButtonProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof iconButton> {
  icon: keyof typeof icons;
  selected?: boolean;
}

export function IconButton(props: IconButtonProps) {
  const { icon, size, selected, className, ...rest } = props;

  const iconSize =
    size === "extra-small" ? "small" : size === "small" ? "small" : "medium";

  return (
    <button className={iconButton({ size, selected, className })} {...rest}>
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
