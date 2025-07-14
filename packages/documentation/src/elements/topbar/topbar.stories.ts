import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

const meta: Meta = {};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<div class="hap-topbar">
      <div class="hap-headline-sm">FANCY LOGO</div>
      <nav class="hap-topbar-nav">
        <a class="hap-topbar-nav-item hap-topbar-nav-item--active" href="#"
          >Link 1</a
        >
        <a class="hap-topbar-nav-item" href="#">Link 2</a>
        <a class="hap-topbar-nav-item" href="#">Link 3</a>
        <a class="hap-topbar-nav-item hap-topbar-nav-item--disabled" href="#">
          Link 4
        </a>
        <a class="hap-topbar-nav-item" href="#">Link 5</a>
      </nav>
      <button class="hap-button hap-button--secondary hap-button--small ">
        ${renderIcon("log-out")} Logout
      </button>
    </div>`,
};

export const Search: Story = {
  render: () =>
    html`<div class="hap-topbar">
      <div class="hap-headline-sm">FANCY LOGO</div>
      <div class="hap-search">
        <span class="hap-search-icon">${renderIcon("search", "small")}</span>
        <input id="search" arial-label="Search" placeholder="Placeholder" />
        <button class="hap-icon-button--sm">
          ${renderIcon("arrow-right", "small")}
        </button>
      </div>
      <button class="hap-button hap-button--secondary hap-button--small ">
        ${renderIcon("log-out")} Logout
      </button>
    </div>`,
};
