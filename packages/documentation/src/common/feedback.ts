export type Feedback = (typeof feedbackArgType)["options"][number];

export const feedbackArgType = {
  control: { type: "select" },

  options: ["default", "positive", "caution", "critical", "new", "neutral"],
} as const;

/** @returns the class name for a given {@link Feedback}. */
export function feedback(feedback: Feedback): string {
  if (feedback === "default") return "";
  return `hap-feedback--${feedback}`;
}
