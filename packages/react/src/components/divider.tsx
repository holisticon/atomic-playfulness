import { cva, type VariantProps } from "cva";

const divider = cva({
  variants: {
    orientation: {
      horizontal: "hap-divider",
      vertical: "hap-divider-vertical",
    },
    variant: {
      full: null,
      inset: "hap-divider--inset",
      "middle-inset": "hap-divider--middle-inset",
    },
    weight: {
      bold: "hap-divider--bold",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "full",
  },
});

export interface DividerProps extends VariantProps<typeof divider> {}

export function Divider(props: DividerProps) {
  return (
    <hr
      {...props}
      className={divider(props)}
      aria-hidden
      aria-orientation={props.orientation}
    />
  );
}
