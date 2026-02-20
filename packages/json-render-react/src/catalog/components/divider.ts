import { z } from "zod";
import { dividerOrientation } from "../shared.js";

export const Divider = {
  description: "Divider rule.",
  props: z.object({
    orientation: dividerOrientation.optional(),
    inset: z.boolean().optional(),
    middleInset: z.boolean().optional(),
    bold: z.boolean().optional(),
  }),
};
