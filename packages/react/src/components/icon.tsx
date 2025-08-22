import { cva, type VariantProps } from "cva";
import { icons } from "lucide-react";
import type { ComponentPropsWithRef } from "react";

const icon = cva({
  base: "hap-icon",
  variants: {
    size: {
      medium: null, // default, uses hap-icon
      small: "hap-icon--sm",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export interface IconProps
  extends Omit<ComponentPropsWithRef<"svg">, "children">,
    VariantProps<typeof icon> {
  name: keyof typeof icons;
}

export function Icon(props: IconProps) {
  const { name, size, className, ...rest } = props;
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    if (typeof window !== "undefined") {
      console.warn(`Icon "${name}" not found in Lucide React icons`);
    }
    return null;
  }

  return <LucideIcon className={icon({ size, className })} {...rest} />;
}
