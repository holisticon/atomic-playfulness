import { z } from "zod";
import { layoutAlign, layoutGap } from "../shared.js";

export const Stack = {
  description: "Vertical layout container.",
  props: z.object({
    gap: layoutGap.optional(),
    align: layoutAlign.optional(),
  }),
};
