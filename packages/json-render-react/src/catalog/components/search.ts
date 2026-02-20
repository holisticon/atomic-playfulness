import { z } from "zod";

export const Search = {
  description: "Search input with icon and action.",
  props: z.object({
    label: z.string().optional(),
    placeholder: z.string().optional(),
    disabled: z.boolean().optional(),
    readOnly: z.boolean().optional(),
    value: z.string().optional(),
  }),
};
