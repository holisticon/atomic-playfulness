import type { Meta, StoryObj } from "@storybook/web-components";
import { html, type TemplateResult } from "lit";

interface BreadCrumbArgs {
  pages: string[];
  currentPageIndex: number;
}

const renderBreadcrumb = (args: BreadCrumbArgs) => {
  let nav: TemplateResult<1> = html``;
  const lastIndex = args.pages?.length - 1;
  args.pages?.forEach((element: string, index: number) => {
    nav = html`
      ${nav}
      ${renderBreadcrumbElement(
        element,
        index == args.currentPageIndex,
        index == lastIndex,
      )}
    `;
  });
  return html` <nav class="hap-breadcrumb">
    <ol>
      ${nav}
    </ol>
  </nav>`;
};

const renderBreadcrumbElement = (
  label: string,
  isCurrent: boolean,
  isLastIndex: boolean,
) => html`
  <li>
    <a class=${isCurrent ? "selected" : ""}>
      ${label}
      ${!isLastIndex
        ? html`<i class="hap-icon" data-lucide="chevron-right"></i>`
        : ""}
    </a>
  </li>
`;

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
