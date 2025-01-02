import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { createIcons, icons } from "lucide";
import {
  iconArgs,
  iconArgTypes,
  mapIconSizeToPx,
  renderIcons,
  type IconArgs,
} from "./icon-story-helpers.js";

const iconList = [
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
  argTypes: iconArgTypes,

  render: (args) =>
    html`<div
      style="display:grid;grid-template-columns: repeat(14, max-content);gap:40px"
    >
      ${renderIcons(args)}
    </div>`,
  play: (args) => {
    createIcons({
      icons,
      attrs: {
        "stroke-width": args.initialArgs.strokeWidth,
        "stroke-opacity": args.initialArgs.strokeOpacity,
        height: mapIconSizeToPx(args.initialArgs.size),
        width: mapIconSizeToPx(args.initialArgs.size),
        // TODO should stroke color be declared in CSS directly?
        color: "#141419CC",
      },
    });
  },
};

export default meta;

export type Story = StoryObj<IconArgs>;

export const IconsDefault: Story = { args: iconArgs(iconList, "default") };
export const IconsSmall: Story = { args: iconArgs(iconList, "small") };
