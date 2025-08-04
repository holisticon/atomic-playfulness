export type Spacing = (typeof spacingArgType)["options"][number];
export const spacingArgType = {
  control: { type: "select" },
  options: ["none", "xs", "sm", "md", "md-lg", "lg", "xl", "2xl"],
} as const;

export type Align = (typeof alignArgType)["options"][number];
export const alignArgType = {
  control: { type: "select" },
  options: ["start", "center", "end", "stretch"],
} as const;

export type Justify = (typeof justifyArgType)["options"][number];
export const justifyArgType = {
  control: { type: "select" },
  options: ["start", "center", "end", "spaced"],
} as const;
