import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { renderIcon } from "../icon/icon.stories.js";

const tabs = Array.from({ length: 4 }).map((_, i) => "Tab " + (i + 1));

interface TabsArgs {
  withIcon: boolean;
}

const meta: Meta<TabsArgs> = {
  args: {
    withIcon: false,
  },
  render: (args) =>
    html`<div class="hap-tabs">
      ${tabs.map(
        (tab, i) => html`
          <div
            tabindex="0"
            class=${classMap({ "hap-tab": true, "hap-tab--selected": i === 0 })}
          >
            ${when(args.withIcon, renderIcon.bind(null, "user-round", "small"))}
            <span>${tab}</span>
          </div>
        `,
      )}
    </div>`,
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const Default: Story = {};

export const WithIcons: Story = {
  args: { withIcon: true },
};
