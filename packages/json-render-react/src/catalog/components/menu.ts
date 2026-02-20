import { z } from "zod";
import { iconName } from "../shared.js";

export const Menu = {
  description: "Menu list.",
  props: z.object({
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string().optional(),
        icon: iconName.optional(),
        selected: z.boolean().optional(),
        disabled: z.boolean().optional(),
      }),
    ),
  }),
};
