import { z } from "zod";

export const Modal = {
  description: "Modal dialog.",
  props: z.object({
    title: z.string(),
    content: z.string(),
    open: z.boolean().optional(),
    primaryActionLabel: z.string().optional(),
    secondaryActionLabel: z.string().optional(),
  }),
};
