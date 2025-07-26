import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, type TemplateResult } from "lit";
import { renderIcon } from "../elements/icon/icon.stories.js";
import { navigationItem } from "../elements/navigation-drawer/navigation-drawer.stories.js";
import { renderNavigationRailItem } from "../elements/navigation-rail/navigation-rail-item-story-helpers.js";

const surface = (
  children: TemplateResult,
  surfaceColor: "primary" | "secondary" | "brand" = "primary",
) => {
  return html`
    <div
      style="align-self: stretch; display: flex; flex-direction: column; gap: var(--hap-spacing-md); padding: var(--hap-spacing-md); border-radius: var(--hap-radius-rounded); background-color: var(--hap-color-surface-${surfaceColor}-default);"
    >
      ${children}
    </div>
  `;
};

const meta: Meta = {
  render: () => html`
    <style>
      h2 {
        margin: unset;
      }

      .form-card {
        box-sizing: border-box;
        background-color: var(--hap-color-surface-primary-default);
        padding: var(--hap-spacing-md-lg);
        border-radius: var(--hap-radius-minimal);
        display: flex;
        flex-direction: column;
        gap: var(--hap-spacing-md-lg);
        max-inline-size: 720px;
        margin-inline: auto;

        & button {
          align-self: flex-end;
        }
      }

      .inline {
        display: flex;
        align-items: center;
        gap: var(--hap-spacing-sm);
      }

      .flex-row {
        display: flex;
        flex-direction: row;
      }

      .flex-column {
        display: flex;
        flex-direction: column;
      }

      main {
        padding-inline: var(--hap-spacing-md);
        padding-block-start: var(--hap-spacing-lg);
        padding-block-end: var(--hap-spacing-xl);

        display: flex;
        flex: 1;
        align-items: start;
        flex-direction: column;
        gap: var(--hap-spacing-lg);
      }
    </style>
    <div class="hap-topbar">
      <h1 class="hap-headline-lg">Holibar</h1>
      <nav class="hap-topbar-nav">
        <a class="hap-topbar-nav-item hap-topbar-nav-item--active" href="#"
          >Timeline</a
        >
        <a class="hap-topbar-nav-item" href="#">Timeline</a>
        <a class="hap-topbar-nav-item" href="#">Timeline</a>
        <a class="hap-topbar-nav-item" href="#">Timeline</a>
      </nav>
      <button class="hap-button hap-button--secondary hap-button--small ">
        ${renderIcon("log-out")} Logout
      </button>
    </div>
    <div class="flex-row">
      <nav class="hap-navigation-rail">
        <a href="#" class=" hap-navigation-rail-item ">
          <div class="hap-navigation-rail-item-icon">${renderIcon("menu")}</div>
        </a>

        <div class="hap-navigation-rail-items">
          ${renderNavigationRailItem({
            icon: "shopping-cart",
            badgeVariant: "default",
            selected: true,
            label: "Label",
          })}
          ${renderNavigationRailItem({
            icon: "shopping-cart",
            badgeVariant: "default",
            badgeCount: "3",
            label: "Label",
          })}
          ${renderNavigationRailItem({
            icon: "shopping-cart",
            badgeVariant: "default",
            label: "Label",
          })}
          ${renderNavigationRailItem({
            icon: "shopping-cart",
            badgeVariant: "default",
            label: "Label",
          })}
          ${renderNavigationRailItem({
            icon: "shopping-cart",
            badgeVariant: "default",
            label: "Label",
          })}
        </div>
      </nav>

      <hr class="hap-divider hap-divider-vertical" />

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

      <main class="hap-text">
        <nav class="hap-breadcrumb">
          <ol class="hap-breadcrumb-list">
            <li class="hap-breadcrumb-item">
              <a class="hap-breadcrumb-link">
                Navigation 1 ${renderIcon("chevron-right", "small")}
              </a>
            </li>

            <li class="hap-breadcrumb-item">
              <a class="hap-breadcrumb-link">
                Navigation 2 ${renderIcon("chevron-right", "small")}
              </a>
            </li>

            <li class="hap-breadcrumb-item">
              <a class="selected hap-breadcrumb-link"> Navigation 3 </a>
            </li>
          </ol>
        </nav>

        <div class="hap-search">
          <span class="hap-search-icon"> ${renderIcon("search")} </span>
          <input id="search" arial-label="Search" placeholder="Placeholder" />
          <button class="hap-icon-button--sm">
            ${renderIcon("arrow-right")}
          </button>
        </div>

        ${surface(
          html`<span>Section Color: surface/primary</span>${surface(
              html`Section Color: surface/secondary`,
              "secondary",
            )}
            ${surface(html`Section Color: surface/brand`, "brand")}`,
          "primary",
        )}
        ${surface(
          html`<span>Section Color: surface/secondary</span>${surface(
              html`Section Color: surface/primary`,
              "primary",
            )}
            ${surface(html`Section Color: surface/brand`, "brand")}`,
          "secondary",
        )}
        ${surface(
          html`<span>Section Color: surface/brand</span>${surface(
              html`Section Color: surface/secondary`,
              "secondary",
            )}
            ${surface(html`Section Color: surface/primary`, "primary")}`,
          "brand",
        )}
      </main>
    </div>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
