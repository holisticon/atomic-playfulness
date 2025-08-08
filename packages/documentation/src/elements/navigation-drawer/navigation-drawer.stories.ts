import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { navigationItem } from "./navigation-drawer-helpers.js";

const meta: Meta = {
  render: () => html`
    <div
      style="min-height: 250px; background: var(--hap-color-background-neutral);"
    >
      <nav class="hap-navigation-drawer">
        <h2 class="hap-navigation-drawer-title">Title 1</h2>
        <menu>
          ${navigationItem("shopping-cart", "Nav Item 1", 99)}
          ${navigationItem("shopping-cart", "Nav Item 2", 0)}
          ${navigationItem("shopping-cart", "Nav Item 3", 3)}
        </menu>
        <hr class="hap-divider hap-divider--middle-inset" />

        <h2 class="hap-navigation-drawer-title">Title 1</h2>
        <menu>
          ${navigationItem("shopping-cart", "Nav Item 1", 99)}
          ${navigationItem("shopping-cart", "Nav Item 2", 0)}
          ${navigationItem("shopping-cart", "Nav Item 3", 3)}
        </menu>
        <hr class="hap-divider hap-divider--middle-inset" />

        <h2 class="hap-navigation-drawer-title">Title 1</h2>
        <menu>
          ${navigationItem("shopping-cart", "Nav Item 1", 99)}
          ${navigationItem("shopping-cart", "Nav Item 2", 0)}
          ${navigationItem("shopping-cart", "Nav Item 3", 3)}
        </menu>
      </nav>
    </div>
  `,
};

export default meta;
type Story = StoryObj;

export const NavigationDrawerStory: Story = {};
