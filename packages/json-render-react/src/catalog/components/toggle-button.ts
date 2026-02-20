import { z } from "zod";
import { buttonSize, iconName } from "../shared.js";

export const ToggleButton = {
  description: "Toggleable button.",
  props: z.object({
    label: z.string(),
    size: buttonSize.optional(),
    subtle: z.boolean().optional(),
    pressed: z.boolean().optional(),
    disabled: z.boolean().optional(),
    icon: iconName.optional(),
  }),
};
