import { z } from "zod";

export const RadioGroup = {
  description: "Radio group fieldset.",
  props: z.object({
    label: z.string(),
    name: z.string(),
    value: z.string().optional(),
    disabled: z.boolean().optional(),
    error: z.boolean().optional(),
    options: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
  }),
};
