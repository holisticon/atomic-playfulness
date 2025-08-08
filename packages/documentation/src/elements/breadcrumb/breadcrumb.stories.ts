import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

interface BreadCrumbArgs {
  pages: string[];
  currentPageIndex: number;
}

const renderBreadcrumbIcon = (isLastIndex: boolean) =>
  html` ${isLastIndex ? html`${renderIcon("chevron-right", "small")} ` : ""}`;

const renderBreadcrumb = (args: BreadCrumbArgs) => {
  return html` <nav class="hap-breadcrumb">
    <ol class="hap-breadcrumb-list">
      ${args.pages?.map(
        (elem, index) => html`
          <li class="hap-breadcrumb-item">
            <a
              class=${index == args.currentPageIndex
                ? "selected hap-breadcrumb-link"
                : "hap-breadcrumb-link"}
            >
              ${elem} ${renderBreadcrumbIcon(args.pages.length - 1 !== index)}
            </a>
          </li>
        `,
      )}
    </ol>
  </nav>`;
};

const meta: Meta<BreadCrumbArgs> = {
  render: (args) => html`
    <div
      style="display:flex;gap:1rem;padding: var(--hap-spacing-md);color-scheme:light;background-color:white"
    >
      ${renderBreadcrumb(args)}
    </div>
    <div
      style="display:flex;gap:1rem;padding: var(--hap-spacing-md);color-scheme:dark;background-color:black"
    >
      ${renderBreadcrumb(args)}
    </div>
  `,
};

export default meta;
type Story = StoryObj<BreadCrumbArgs>;

export const Default: Story = {
  args: {
    pages: ["Navigation 1", "Navigation 2", "Navigation 3"],
    currentPageIndex: 2,
  },
};
