import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<div class="hap-topbar">
      <div class="hap-headline-sm">FANCY LOGO</div>
      <nav class="hap-topbar-nav">
        <a class="hap-topbar-nav-item" href="#">Link 1</a>
        <a class="hap-topbar-nav-item" href="#">Link 2</a>
        <a class="hap-topbar-nav-item" href="#">Link 3</a>
        <a class="hap-topbar-nav-item hap-topbar-nav-item--disabled" href="#">
          Link 4
        </a>
        <a class="hap-topbar-nav-item" href="#">Link 5</a>
      </nav>
      <button class="hap-button hap-button--secondary hap-button--small ">
        <svg viewBox="0 0 24 24" class="hap-icon">
          <use href="#log-out"></use>
        </svg>
        Logout
      </button>
    </div>`,
};

export const Search: Story = {
  render: () =>
    html`<div class="hap-topbar">
      <div class="hap-headline-sm">FANCY LOGO</div>
      <div class="hap-search">
        <span class="hap-search-icon">
          <svg viewBox="0 0 24 24" class="hap-icon hap-icon--small">
            <use href="#search"></use>
          </svg>
        </span>
        <input id="search" arial-label="Search" placeholder="Placeholder" />
        <button class="hap-icon-button--sm">
          <svg viewBox="0 0 24 24" class="hap-icon hap-icon--small">
            <use href="#arrow-right"></use>
          </svg>
        </button>
      </div>
      <button class="hap-button hap-button--secondary hap-button--small ">
        <svg viewBox="0 0 24 24" class="hap-icon">
          <use href="#log-out"></use>
        </svg>
        Logout
      </button>
    </div>`,
};
