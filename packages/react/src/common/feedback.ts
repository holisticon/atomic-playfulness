import { cva } from "cva";

export const feedback = cva({
  variants: {
    feedback: {
      default: null,
      informative: "hap-feedback--informative",
      positive: "hap-feedback--positive",
      critical: "hap-feedback--critical",
      caution: "hap-feedback--caution",
      new: "hap-feedback--new",
    },
  },
  defaultVariants: {
    feedback: "default",
  },
});
