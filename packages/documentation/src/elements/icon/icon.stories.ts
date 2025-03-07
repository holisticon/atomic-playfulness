import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

interface IconArgs {
  iconSize: "default" | "small";
}

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
];

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
  render: (args) =>
    html`${icons.map(
      (icon) =>
        html`<i
          class=${classMap({
            "hap-icon": true,
            "hap-icon--small": args.iconSize === "small",
          })}
          data-lucide=${icon}
        ></i>`,
    )}`,
};

export default meta;

export type Story = StoryObj<IconArgs>;

export const IconsDefault: Story = { args: { iconSize: "default" } };

export const IconsSmall: Story = { args: { iconSize: "small" } };
