import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { renderIcon } from "./renderIcon.ts";

interface IconArgs {
  iconSize: IconSizeType;
  iconType?: IconType;
}

export type IconSizeType = "default" | "small";
export type IconType = (typeof icons)[number];

const icons = [
  "check",
  "arrow-right",
  "arrow-left",
  "arrow-down",
  "arrow-up",
  "arrow-up-right",
  "arrow-down-right",
  "arrow-down-left",
  "arrow-down-up",
  "circle-x",
  "chevron-down",
  "chevron-up",
  "chevron-left",
  "chevron-right",
  "plus",
  "log-out",
  "shopping-cart",
  "user-round",
  "clock",
  "minus",
  "menu",
  "search",
  "eye",
  "circle-alert",
  "code",
  "copy",
  "circle-play",
  "circle-help",
  "settings",
  "bell",
  "building-2",
  "file",
  "calendar",
  "trash-2",
  "eye-off",
  "sparkles",
  "info",
  "megaphone",
  "circle-check",
  "folder-open",
  "mail",
  "download",
  "lock",
  "user-round",
] as const;

const renderAllIcons = (args: IconArgs) =>
  html` ${icons.map((icon) => html`${renderIcon(icon, args.iconSize)}`)}`;

const meta: Meta<IconArgs> = {
  decorators: (story) =>
    html`<div
      style=${styleMap({
        display: "grid",
        gridTemplateColumns: "repeat(14, max-content)",
        gap: "40px",
      })}
    >
      ${story()}
    </div>`,
  render: (args) => {
    return html` ${args.iconType
      ? renderIcon(args.iconType, args.iconSize)
      : renderAllIcons(args)}`;
  },
};

export default meta;

export type Story = StoryObj<IconArgs>;

export const IconsDefault: Story = { args: { iconSize: "default" } };

export const IconsSmall: Story = { args: { iconSize: "small" } };
