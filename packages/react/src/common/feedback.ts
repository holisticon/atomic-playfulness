import { cva } from "cva";

export const feedback = cva({
  variants: {
    feedback: {
      neutral: "hap-feedback--neutral",
      positive: "hap-feedback--positive",
      critical: "hap-feedback--critical",
      caution: "hap-feedback--caution",
      new: "hap-feedback--new",
    },
  },
  defaultVariants: {
    feedback: "neutral",
  },
});
