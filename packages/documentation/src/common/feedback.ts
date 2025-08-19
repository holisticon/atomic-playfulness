export type Feedback = (typeof feedbackArgType)["options"][number];

export const feedbackArgType = {
  control: { type: "select" },

  options: ["positive", "caution", "critical", "new", "neutral"],
} as const;

/** @returns the class name for a given {@link Feedback}. */
export function feedback(feedback: Feedback): string {
  return `hap-feedback--${feedback}`;
}
