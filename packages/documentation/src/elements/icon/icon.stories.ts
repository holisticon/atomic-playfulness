import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { createIcons, icons } from "lucide";
import {
  iconArgs,
  iconArgTypes,
  mapIconSizeToPx,
  type IconArgs,
} from "./icon-story-helpers.js";

const meta: Meta<IconArgs> = {
  argTypes: iconArgTypes,

  render: () =>
    html`<div
      style="display:grid;grid-template-columns: repeat(14, max-content);gap:40px"
    >
      <i data-lucide="check"></i>
      <i data-lucide="arrow-right"></i>
      <i data-lucide="arrow-left"></i>
      <i data-lucide="arrow-down"></i>
      <i data-lucide="arrow-up"></i>
      <i data-lucide="arrow-up-right"></i>
      <i data-lucide="arrow-down-right"></i>
      <i data-lucide="arrow-down-left"></i>
      <i data-lucide="arrow-down-up"></i>
      <i data-lucide="circle-x"></i>
      <i data-lucide="chevron-down"></i>
      <i data-lucide="chevron-up"></i>
      <i data-lucide="chevron-left"></i>
      <i data-lucide="chevron-right"></i>
      <i data-lucide="plus"></i>
      <i data-lucide="log-out"></i>
      <i data-lucide="shopping-cart"></i>
      <i data-lucide="user-round"></i>
      <i data-lucide="clock"></i>
      <i data-lucide="menu"></i>
      <i data-lucide="search"></i>
      <i data-lucide="eye"></i>
      <i data-lucide="circle-alert"></i>
      <i data-lucide="code"></i>
      <i data-lucide="copy"></i>
      <i data-lucide="circle-play"></i>
      <i data-lucide="circle-help"></i>
      <i data-lucide="settings"></i>
      <i data-lucide="bell"></i>
      <i data-lucide="building-2"></i>
      <i data-lucide="file"></i>
      <i data-lucide="calendar"></i>
      <i data-lucide="trash-2"></i>
      <i data-lucide="eye-off"></i>
      <i data-lucide="sparkles"></i>
      <i data-lucide="info"></i>
      <i data-lucide="megaphone"></i>
      <i data-lucide="circle-check"></i>
      <i data-lucide="folder-open"></i>
      <i data-lucide="mail"></i>
      <i data-lucide="download"></i>
      <i data-lucide="lock"></i>
    </div>`,
  play: (args) => {
    createIcons({
      icons,
      attrs: {
        "stroke-width": args.initialArgs.strokeWidth,
        "stroke-opacity": args.initialArgs.strokeOpacity,
        height: mapIconSizeToPx(args.initialArgs.size),
        width: mapIconSizeToPx(args.initialArgs.size),
        color: "grey",
      },
    });
  },
};

export default meta;

export type Story = StoryObj<IconArgs>;

export const IconsDefault: Story = { args: iconArgs("default") };
export const IconsSmall: Story = { args: iconArgs("small") };
