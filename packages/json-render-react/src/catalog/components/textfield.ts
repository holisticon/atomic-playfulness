import { z } from "zod";

export const Textfield = {
  description: "Text input with label and description.",
  props: z.object({
    label: z.string(),
    description: z.string().optional(),
    placeholder: z.string().optional(),
    disabled: z.boolean().optional(),
    readOnly: z.boolean().optional(),
    round: z.boolean().optional(),
    invalid: z.boolean().optional(),
    value: z.string().optional(),
    name: z.string().optional(),
    id: z.string().optional(),
    type: z.string().optional(),
  }),
};
