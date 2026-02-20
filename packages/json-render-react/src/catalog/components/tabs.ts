import { z } from "zod";
import { iconName } from "../shared.js";

export const Tabs = {
  description: "Tabs navigation.",
  props: z.object({
    selectedIndex: z.number().int().optional(),
    tabs: z.array(
      z.object({
        label: z.string(),
        icon: iconName.optional(),
        selected: z.boolean().optional(),
      }),
    ),
  }),
};
