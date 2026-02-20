import { z } from "zod";
import { iconName, iconSize } from "../shared.js";

export const Icon = {
  description: "SVG icon reference.",
  props: z.object({
    name: iconName,
    size: iconSize.optional(),
  }),
};
