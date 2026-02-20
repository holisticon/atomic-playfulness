import { z } from "zod";
import { feedback, iconName } from "../shared.js";

export const Alert = {
  description: "Status alert with optional icon and action.",
  props: z.object({
    label: z.string(),
    feedback,
    icon: iconName.optional(),
    actionIcon: iconName.optional(),
  }),
};
