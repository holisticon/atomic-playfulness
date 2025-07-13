import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import {
  renderNavigationRailItem,
  type NavigationRailItemArgs,
} from "./navigation-rail-item-story-helpers.js";

const meta: Meta<NavigationRailItemArgs> = {
  args: {
    icon: "shopping-cart",
    badgeCount: "3",
    badgeVariant: "none",
    label: "Label",
  },
  render: (args) =>
    html`<div
      style="display:flex;gap:0.5rem;padding:2rem;flex-direction:column;background:#eeeeee"
    >
      <div
        style="display:flex;gap:0.5rem;flex-direction:column;width:max-content; background:white"
      >
        ${renderNavigationRailItem({ ...args, icon: "menu", label: "" })}
        ${renderNavigationRailItem({ ...args, selected: true })}
        ${renderNavigationRailItem({ ...args, badgeVariant: "default" })}
        ${renderNavigationRailItem(args)} ${renderNavigationRailItem(args)}
        ${renderNavigationRailItem(args)}
      </div>
    </div>`,
};

export default meta;

export type Story = StoryObj<NavigationRailItemArgs>;

export const NavigationRail: Story = {};
