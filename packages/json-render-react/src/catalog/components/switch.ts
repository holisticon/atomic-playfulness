import { z } from "zod";
import { switchSize } from "../shared.js";

export const Switch = {
  description: "Toggle switch.",
  props: z.object({
    size: switchSize.optional(),
    checked: z.boolean().optional(),
    disabled: z.boolean().optional(),
    name: z.string().optional(),
  }),
};
