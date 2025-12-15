import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import { renderIcon } from "../icon/renderIcon.ts";

const meta: Meta = {
  render: () =>
    html` <div style="color-scheme: light; background: white; padding: 16px;">
      <div class="hap-menu">
        <a href="#" class="hap-menu-item"><span>Link Entry</span></a>
        <button type="button" class="hap-menu-item hap-menu-item--selected">
          <span>Entry 2</span>
          ${renderIcon("check")}
        </button>
        <button type="button" class="hap-menu-item">
          <span>Entry 3</span>
        </button>
        <button type="button" class="hap-menu-item">
          ${renderIcon("shopping-cart")}
          <span>Entry 4</span>
        </button>
        <hr class="hap-divider" />
        <button type="button" class="hap-menu-item">
          <span>Entry 5</span>
          ${renderIcon("arrow-right")}
        </button>
      </div>
    </div>`,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
