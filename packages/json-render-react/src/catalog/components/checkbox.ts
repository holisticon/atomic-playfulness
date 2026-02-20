import { z } from "zod";

export const Checkbox = {
  description: "Checkbox input with label.",
  props: z.object({
    label: z.string(),
    checked: z.boolean().optional(),
    indeterminate: z.boolean().optional(),
    disabled: z.boolean().optional(),
    error: z.boolean().optional(),
    name: z.string().optional(),
    value: z.string().optional(),
  }),
};
