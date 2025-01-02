import type { ArgTypes } from "@storybook/web-components";
import { html } from "lit";

export const iconArgs = (
  iconNames: string[],
  size: string,
  // default values for stroke according to design
  strokeWidth = 1.5,
  strokeOpacity = 0.8,
): IconArgs => ({
  iconNames,
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
  iconNames: string[];
  size: string;
  strokeWidth: number;
  strokeOpacity: number;
}

export const renderIcons = (args: IconArgs) => html`
  ${args.iconNames.map((iconName) => html`<i data-lucide=${iconName}></i>`)}
`;

export const mapIconSizeToPx = (size: string): string => {
  if (size === "small") {
    return "16px";
  }

  return "24px";
};
