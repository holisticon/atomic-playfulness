import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface TooltipArgs {
  content: string;
}

const meta: Meta<TooltipArgs> = {
  render: (args) => html`<span class="hap-tooltip">${args.content}</span>`,
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Default: Story = {
  args: {
    content: "Tooltip Text Single line",
  },
};

export const Multiline: Story = {
  args: {
    content:
      "Tooltip Text Single line lorem ipsum dolor sit amet dolor sit dolor lorem ipsum dolor sit amet dolor",
  },
};
