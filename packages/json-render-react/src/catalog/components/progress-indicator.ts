import { z } from "zod";

export const ProgressIndicator = {
  description: "Linear progress indicator.",
  props: z.object({
    progress: z.number().min(0).max(100).optional(),
  }),
};
