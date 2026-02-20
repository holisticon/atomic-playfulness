import { z } from "zod";

export const Indicator = {
  description: "Badge indicator.",
  props: z.object({
    content: z.number().nullable().optional(),
  }),
};
