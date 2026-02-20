import { z } from "zod";
import { iconName, textLinkSize } from "../shared.js";

export const Textlink = {
  description: "Text link with optional icon.",
  props: z.object({
    label: z.string(),
    size: textLinkSize.optional(),
    href: z.string().optional(),
    icon: iconName.optional(),
    iconPosition: z.enum(["left", "right"]).optional(),
  }),
};
