import { z } from "zod";
import { iconButtonSize, iconName } from "../shared.js";

export const IconButton = {
  description: "Icon-only button.",
  props: z.object({
    icon: iconName,
    size: iconButtonSize.optional(),
    selected: z.boolean().optional(),
    disabled: z.boolean().optional(),
  }),
};
