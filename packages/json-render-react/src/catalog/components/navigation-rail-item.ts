import { z } from "zod";
import { iconName } from "../shared.js";

export const NavigationRailItem = {
  description: "Single navigation rail item.",
  props: z.object({
    icon: iconName,
    label: z.string().optional(),
    selected: z.boolean().optional(),
    badgeCount: z.number().int().optional(),
  }),
};
