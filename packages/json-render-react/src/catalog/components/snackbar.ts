import { z } from "zod";
import { snackbarVariant } from "../shared.js";

export const Snackbar = {
  description: "Snackbar notification.",
  props: z.object({
    label: z.string(),
    variant: snackbarVariant.optional(),
    actionLabel: z.string().optional(),
    closeable: z.boolean().optional(),
  }),
};
