import { z } from "zod";
import { iconName } from "../shared.js";

export const NavigationRail = {
  description: "Navigation rail with items.",
  props: z.object({
    items: z.array(
      z.object({
        icon: iconName,
        label: z.string().optional(),
        selected: z.boolean().optional(),
        badgeCount: z.number().int().optional(),
      }),
    ),
  }),
};
