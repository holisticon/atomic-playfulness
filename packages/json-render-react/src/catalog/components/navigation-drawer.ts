import { z } from "zod";
import { iconName } from "../shared.js";

export const NavigationDrawer = {
  description: "Navigation drawer layout.",
  props: z.object({
    sections: z.array(
      z.object({
        title: z.string(),
        items: z.array(
          z.object({
            label: z.string(),
            icon: iconName.optional(),
            badgeCount: z.number().int().optional(),
          }),
        ),
      }),
    ),
  }),
};
