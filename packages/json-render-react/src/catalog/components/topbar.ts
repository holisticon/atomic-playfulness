import { z } from "zod";
import { iconName } from "../shared.js";

export const Topbar = {
  description: "Topbar navigation.",
  props: z.object({
    brand: z.string(),
    items: z.array(
      z.object({
        label: z.string(),
        href: z.string().optional(),
        current: z.boolean().optional(),
        disabled: z.boolean().optional(),
      }),
    ),
    actionLabel: z.string().optional(),
    actionIcon: iconName.optional(),
  }),
};
