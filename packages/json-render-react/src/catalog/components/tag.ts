import { z } from "zod";
import { iconName } from "../shared.js";

export const Tag = {
  description: "Tag label with optional icon and close action.",
  props: z.object({
    label: z.string(),
    icon: iconName.optional(),
    closeable: z.boolean().optional(),
  }),
};
