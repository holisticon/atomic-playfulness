import { z } from "zod";
import { buttonSize, buttonVariant, iconName } from "../shared.js";

export const Button = {
  description: "Primary action button.",
  props: z.object({
    label: z.string(),
    variant: buttonVariant,
    size: buttonSize.optional(),
    disabled: z.boolean().optional(),
    icon: iconName.optional(),
    iconPosition: z.enum(["left", "right"]).optional(),
    type: z.enum(["button", "submit", "reset"]).optional(),
  }),
};
