import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

interface SearchArgs {
  label: string;
  description: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  round: boolean;
}

const renderSearch = (args: SearchArgs) => html`
  <div class="hap-search">
    <span class="hap-search-icon"> ${renderIcon("search", "small")} </span>
    <input
      id="search"
      arial-label="${args.label}"
      placeholder=${args.placeholder}
    />
    <button class="hap-icon-button--sm">
      ${renderIcon("arrow-right", "small")}
    </button>
  </div>
`;

const meta: Meta<SearchArgs> = {
  args: {
    label: "Search",
    placeholder: "Placeholder",
  },
  render: (args) =>
    html` <div style="color-scheme: light; background: white; padding: 16px;">
        ${renderSearch(args)}
      </div>
      <div style="color-scheme: dark; background: black; padding: 16px;">
        ${renderSearch(args)}
      </div>`,
};

export default meta;
type Story = StoryObj<SearchArgs>;

export const Default: Story = {};

export const Results: Story = {
  render: () => html`
    <div class="hap-search-results">
      <div class="hap-search-result-category">Category</div>
      <hr class="hap-divider hap-divider-horizontal" />
      <a href="#" class="hap-search-result-entry">Entry 1</a>
      <a href="#" class="hap-search-result-entry">Entry 2</a>
      <a href="#" class="hap-search-result-entry">Entry 3</a>
    </div>
  `,
};
