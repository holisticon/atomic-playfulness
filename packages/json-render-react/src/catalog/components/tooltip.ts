import { z } from "zod";

export const Tooltip = {
  description: "Tooltip bubble.",
  props: z.object({
    content: z.string(),
  }),
};
