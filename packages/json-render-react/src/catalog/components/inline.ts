import { z } from "zod";
import { layoutAlign, layoutGap, layoutJustify } from "../shared.js";

export const Inline = {
  description: "Horizontal layout container.",
  props: z.object({
    gap: layoutGap.optional(),
    align: layoutAlign.optional(),
    justify: layoutJustify.optional(),
    wrap: z.boolean().optional(),
  }),
};
