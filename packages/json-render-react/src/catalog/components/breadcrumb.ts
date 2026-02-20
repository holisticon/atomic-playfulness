import { z } from "zod";

export const Breadcrumb = {
  description: "Breadcrumb navigation trail.",
  props: z.object({
    pages: z.array(z.string()),
    currentIndex: z.number().int().optional(),
  }),
};
