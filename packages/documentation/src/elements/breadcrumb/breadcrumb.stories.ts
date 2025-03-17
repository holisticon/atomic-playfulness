import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface BreadCrumbArgs {
  pages: string[];
  currentPageIndex: number;
}

const renderBreadcrumb = (args: BreadCrumbArgs) => {
  return html` <nav class="hap-breadcrumb">
    <ol>
      ${args.pages?.map(
        (elem, index) => html`
          <li>
            <a class=${index == args.currentPageIndex ? "selected" : ""}>
              ${elem} ${renderBreadcrumbIcon(args.pages.length - 1 !== index)}
            </a>
          </li>
        `,
      )}
    </ol>
  </nav>`;
};

const renderBreadcrumbIcon = (isLastIndex: boolean) =>
  html` ${isLastIndex
    ? html` <svg viewBox="0 0 24 24" class="hap-icon hap-icon--small">
        <use href="#chevron-right"></use>
      </svg>`
    : ""}`;

const meta: Meta<BreadCrumbArgs> = {
  render: (args) => html`
    <div
      style="display:flex;gap:1rem;color-scheme:light;background-color:white"
    >
      ${renderBreadcrumb(args)}
    </div>
    <div style="display:flex;gap:1rem;color-scheme:dark;background-color:black">
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
