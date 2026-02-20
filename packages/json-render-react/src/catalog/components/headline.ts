import { z } from "zod";
import { headlineSize } from "../shared.js";

export const Headline = {
  description: "Typography headline.",
  props: z.object({
    text: z.string(),
    size: headlineSize,
  }),
};
