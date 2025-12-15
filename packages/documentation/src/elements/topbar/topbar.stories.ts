import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

import { renderIcon } from "../icon/renderIcon.ts";

const meta: Meta = {};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<nav class="hap-topbar">
      <div class="hap-headline--sm">FANCY LOGO</div>
      <ol class="hap-topbar-nav">
        <li>
          <a class="hap-topbar-nav-item hap-topbar-nav-item--current" href="#"
            >Link 1</a
          >
        </li>
        <li><a class="hap-topbar-nav-item" href="#">Link 2</a></li>
        <li><a class="hap-topbar-nav-item" href="#">Link 3</a></li>
        <li>
          <a class="hap-topbar-nav-item hap-topbar-nav-item--disabled" href="#"
            >Link 4</a
          >
        </li>
        <li><a class="hap-topbar-nav-item" href="#">Link 5</a></li>
      </ol>
      <button class="hap-button--sm hap-button--secondary">
        ${renderIcon("log-out")} Logout
      </button>
    </nav>`,
};

export const Search: Story = {
  render: () =>
    html`<nav class="hap-topbar">
      <div class="hap-headline--sm">FANCY LOGO</div>
      <div class="hap-search">
        <span class="hap-search-icon">${renderIcon("search", "small")}</span>
        <input id="search" arial-label="Search" placeholder="Placeholder" />
        <button class="hap-icon-button--sm">
          ${renderIcon("arrow-right", "small")}
        </button>
      </div>
      <button class="hap-button--sm hap-button--secondary">
        ${renderIcon("log-out")} Logout
      </button>
    </nav>`,
};
