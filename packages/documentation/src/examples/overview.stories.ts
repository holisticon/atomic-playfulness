import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, type TemplateResult } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { renderIcon } from "../elements/icon/icon.stories.js";
import { navigationItem } from "../elements/navigation-drawer/navigation-drawer-helpers.js";
import { renderNavigationRailItem } from "../elements/navigation-rail/navigation-rail-item-story-helpers.js";

const surface = (
  children: TemplateResult,
  surfaceColor: "primary" | "secondary" | "brand" = "primary",
) => {
  return html`
    <div
      style="align-self: stretch; flex: 1; display: flex; flex-direction: column; gap: var(--hap-spacing-md); padding: var(--hap-spacing-md); border-radius: var(--hap-radius-rounded); background-color: var(--hap-color-surface-${surfaceColor}-default);"
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

      .stretch {
        align-self: stretch;
      }

      .flex-grow {
        flex: 1;
      }

      .gap-md {
        gap: var(--hap-spacing-md);
      }

      .align-items-center {
        align-items: center;
      }

      .align-items-start {
        align-items: flex-start;
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
      <button class="hap-button--sm hap-button--secondary">
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
              <a class="hap-breadcrumb-link hap-breadcrumb-link--current">
                Navigation 3
              </a>
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
        ${surface(
          html`
            <div class="flex-row">
              <span
                class="hap-headline-md"
                style="flex: 1;color: var(--hap-color-text-primary-on-light);"
                >Textcolor Primary</span
              >
              <span
                class="hap-headline-md"
                style="flex: 1;color: var(--hap-color-text-secondary-on-light);"
                >Textcolor Secondary</span
              >
              <span
                class="hap-headline-md"
                style="flex: 1;color: var(--hap-color-text-tertiary-on-light);"
                >Textcolor Tertiary</span
              >
              <span
                class="hap-headline-md"
                style="flex: 1;color: var(--hap-color-text-brand-on-light);"
                >Textcolor Brand</span
              >
            </div>
          `,
          "primary",
        )}

        <div class="hap-tabs stretch">
          ${Array.from({ length: 4 }).map(
            (tab, i) => html`
              <div
                tabindex="0"
                class=${classMap({
                  "hap-tab": true,
                  "hap-tab--selected": i === 0,
                })}
              >
                <span>Tab</span>
              </div>
            `,
          )}
        </div>

        <div class="hap-alert hap-feedback--critical stretch">
          <div class="hap-alert-content">
            ${renderIcon("info")}
            <span>This is a critical message.</span>
          </div>
          <button class="hap-icon-button--sm">
            ${renderIcon("circle-x", "small")}
          </button>
        </div>

        ${surface(html`
          <div class="flex-row gap-md">
            <span class="hap-tag">Label</span>
            <span class="hap-tag">${renderIcon("sparkles", "small")}Label</span>
            <span class="hap-tag"
              >Label<button class="hap-icon-button--xs">
                ${renderIcon("circle-x", "small")}
              </button></span
            >
          </div>
        `)}

        <div class="flex-row stretch gap-md">
          <div class=" hap-textfield flex-grow">
            <label for="textfield-1">Label</label>
            <div class="hap-textfield-input">
              ${renderIcon("search")}
              <input
                id="textfield-1"
                aria-describedby="description"
                placeholder="Placeholder"
              />
              <button class="hap-icon-button--sm">
                ${renderIcon("circle-x", "small")}
              </button>
            </div>
            <span id="description"></span>
          </div>

          <div class=" hap-textfield hap-feedback-invalid  flex-grow">
            <label for="textfield">
              <svg viewBox="0 0 24 24" class="hap-icon">
                <use href="#circle-alert"></use>
              </svg>
              Textfield
            </label>
            <div class="hap-textfield-input">
              <input
                id="textfield"
                aria-describedby="description"
                placeholder="Placeholder"
              />
            </div>
            <span id="description">Optional supporting text</span>
          </div>

          <div class=" hap-textfield flex-grow">
            <label for="textfield">Dropdown</label>
            <div class="hap-textfield-input">
              <div class="hap-textfield-input-tags">
                <span class="hap-tag"
                  >Item 1
                  <button class="hap-icon-button--xs">
                    ${renderIcon("circle-x", "small")}
                  </button></span
                >
                <span class="hap-tag"
                  >Item 2
                  <button class="hap-icon-button--xs">
                    ${renderIcon("circle-x", "small")}
                  </button></span
                >
              </div>
              ${renderIcon("chevron-down")}
            </div>
            <span id="description"></span>
          </div>
        </div>

        <div class="hap-textarea stretch">
          <label for="textarea">Textarea</label>
          <textarea
            id="textarea"
            aria-describedby="description"
            placeholder="Placeholder"
          ></textarea>
          <span id="description">Optional supporting text</span>
        </div>

        <div class="flex-row gap-md stretch">
          ${surface(
            html` <div>
              <input name="some-setting" type="checkbox" class=" hap-switch " />
              <input
                name="some-setting"
                type="checkbox"
                checked="checked"
                class=" hap-switch "
              />
              <br />
              <input
                name="some-setting"
                type="checkbox"
                class=" hap-switch hap-switch--small "
              />
              <input
                name="some-setting"
                type="checkbox"
                checked="checked"
                class=" hap-switch hap-switch--small "
              />
            </div>`,
          )}
          ${surface(
            html` <div>
              <label class="hap-checkbox">
                <input type="checkbox" name="confirmation" />
                <span>Default</span>
              </label>
              <label class="hap-checkbox">
                <input type="checkbox" checked="checked" name="confirmation" />
                <span>Default</span>
              </label>
              <label class="hap-checkbox">
                <input
                  type="checkbox"
                  .indeterminate=${true}
                  name="confirmation"
                />
                <span>Default</span>
              </label>
              <label class="hap-checkbox hap-checkbox--invalid">
                <input type="checkbox" name="confirmation" />
                ${renderIcon("circle-alert", "small")}
                <span>Error</span>
              </label>
              <label class="hap-checkbox hap-checkbox--invalid">
                <input type="checkbox" checked="checked" name="confirmation" />
                ${renderIcon("circle-alert", "small")}
                <span>Error</span>
              </label>
            </div>`,
          )}
          ${surface(
            html` <div>
              <label class="hap-radio">
                <input type="radio" name="invalid" />
                <span>Option 1</span>
              </label>
              <label class="hap-radio">
                <input type="radio" name="invalid" />
                <span>Option 2</span>
              </label>
              <label class="hap-radio">
                <input type="radio" name="invalid" checked="" />
                <span>Option 3</span>
              </label>
              <label class="hap-radio hap-feedback-invalid">
                <input type="radio" name="invalid" />
                <span>Option 4</span>
              </label>
            </div>`,
          )}
        </div>

        <div class="flex-row gap-md align-items-center">
          <button class="hap-button hap-button--primary">
            ${renderIcon("check")} Button
          </button>

          <button class="hap-button hap-button--secondary">
            Button ${renderIcon("arrow-right")}
          </button>

          <button class="hap-button hap-button--tertiary">Button</button>

          <button class="hap-button--sm hap-button--primary">
            ${renderIcon("plus", "small")} Button
          </button>

          <button class="hap-button--sm hap-button--secondary">
            Button ${renderIcon("chevron-down", "small")}
          </button>

          <button class="hap-button--sm hap-button--tertiary">Button</button>
        </div>

        <div>
          <div class="hap-badge hap-badge--strong hap-feedback--default">
            <span>Default</span>
            ${renderIcon("info", "small")}
          </div>
          <div class="hap-badge hap-badge--strong hap-feedback--positive">
            <span>Positive</span>
            ${renderIcon("arrow-up-right", "small")}
          </div>
          <div class="hap-badge hap-badge--strong hap-feedback--caution">
            <span>Caution</span>
            ${renderIcon("circle-alert", "small")}
          </div>
          <div class="hap-badge hap-badge--strong hap-feedback--neutral">
            <span>Neutral</span>
            ${renderIcon("check", "small")}
          </div>
          <div class="hap-badge hap-badge--strong hap-feedback--critical">
            <span>Critical</span>
            ${renderIcon("arrow-down", "small")}
          </div>
          <div class="hap-badge hap-badge--strong hap-feedback--new">
            <span>New</span>
            ${renderIcon("sparkles", "small")}
          </div>
          <br />

          <div class="hap-badge hap-feedback--default">
            <span>Default</span>
            ${renderIcon("info", "small")}
          </div>
          <div class="hap-badge hap-feedback--positive">
            <span>Positive</span>
            ${renderIcon("arrow-up-right", "small")}
          </div>
          <div class="hap-badge hap-feedback--caution">
            <span>Caution</span>
            ${renderIcon("circle-alert", "small")}
          </div>
          <div class="hap-badge hap-feedback--neutral">
            <span>Neutral</span>
            ${renderIcon("check", "small")}
          </div>
          <div class="hap-badge hap-feedback--critical">
            <span>Critical</span>
            ${renderIcon("arrow-down", "small")}
          </div>
          <div class="hap-badge hap-feedback--new">
            <span>New</span>
            ${renderIcon("sparkles", "small")}
          </div>
        </div>

        <div class="flex-column gap-md align-items-start">
          <span class="hap-tooltip">Tooltip Text Single line</span>

          <span class="hap-tooltip"
            >Tooltip Text Single line lorem ipsum dolor sit amet dolor sit dolor
            lorem ipsum dolor sit amet dolor</span
          >
        </div>

        <div class="hap-alert hap-feedback--caution">
          <div class="hap-alert-content">
            ${renderIcon("circle-alert")}
            <span>This is a cautionary message.</span>
          </div>
          <button class="hap-icon-button--sm">
            ${renderIcon("circle-x", "small")}
          </button>
        </div>

        <div class="hap-snackbar">
          <div class="hap-snackbar-content">
            <span>This is a single line snackbar.</span>
            <div class="hap-snackbar-actions">
              <button class="hap-snackbar-button">Action</button>
              <button class="hap-icon-button--sm">
                ${renderIcon("circle-x", "small")}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
