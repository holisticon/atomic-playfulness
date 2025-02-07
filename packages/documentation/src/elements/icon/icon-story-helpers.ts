import type { ArgTypes } from "@storybook/web-components";

export const iconArgs = (
  size: string,
  // default values for stroke according to design
  strokeWidth = 1.5,
  strokeOpacity = 0.8,
): IconArgs => ({
  size,
  strokeWidth,
  strokeOpacity,
});

export const iconArgTypes: Partial<ArgTypes<IconArgs>> = {
  size: {
    control: { type: "select" },
    options: ["default", "small"],
  },
};

export interface IconArgs {
  size: string;
  strokeWidth: number;
  strokeOpacity: number;
}

export const mapIconSizeToPx = (size: string): string => {
  if (size === "small") {
    return "16px";
  }

  return "24px";
};
