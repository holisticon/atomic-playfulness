import { z } from "zod";
import { textSize } from "../shared.js";

export const Text = {
  description: "Body text.",
  props: z.object({
    text: z.string(),
    size: textSize.optional(),
  }),
};
