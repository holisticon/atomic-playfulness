import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { when } from "lit/directives/when.js";

import { renderIcon } from "../icon/renderIcon.ts";

interface TagArgs {
  label: string;
  withIcon?: boolean;
  closeable?: boolean;
}

const meta: Meta<TagArgs> = {
  args: {
    label: "Tag Label",
    withIcon: false,
    closeable: false,
  },
  render: (args) =>
    html`<span class="hap-tag">
      ${when(args.withIcon, () => renderIcon("sparkles", "small"))}
      ${args.label}
      ${when(
        args.closeable,
        () =>
          html`<button class="hap-icon-button--xs">
            ${renderIcon("circle-x", "small")}
          </button>`,
      )}
    </span>`,
};

export default meta;
type Story = StoryObj<TagArgs>;

export const Default: Story = {};

export const LeadingIcon: Story = {
  args: { withIcon: true },
};

export const Closeable: Story = {
  args: { closeable: true },
};
