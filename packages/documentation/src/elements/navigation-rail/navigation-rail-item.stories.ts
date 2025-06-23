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
  },
  argTypes: {
    badgeVariant: {
      control: { type: "select" },
      options: ["default", "small", "none"],
    },
  },
  render: (args) =>
    html`<div style="display:flex;gap:2rem;padding:2rem">
      ${renderNavigationRailItem({ ...args })}
      ${renderNavigationRailItem({ ...args, selected: true })}
      ${renderNavigationRailItem({
        ...args,
        label: "Label",
      })}
      ${renderNavigationRailItem({
        ...args,
        label: "Label",
        selected: true,
      })}
    </div>`,
};

export default meta;

export type Story = StoryObj<NavigationRailItemArgs>;

export const NavigationRailItem: Story = {};
