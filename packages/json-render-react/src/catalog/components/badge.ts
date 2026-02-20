import { z } from "zod";
import { feedback, iconName } from "../shared.js";

export const Badge = {
  description: "Compact status badge.",
  props: z.object({
    label: z.string(),
    feedback,
    strong: z.boolean().optional(),
    icon: iconName.optional(),
  }),
};
