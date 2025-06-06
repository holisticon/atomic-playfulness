import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface TooltipArgs {
  content: string;
}

const meta: Meta<TooltipArgs> = {
  args: { content: "Tooltip Text" },
  render: (args) => html`<span class="hap-tooltip">${args.content}</span>`,
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Default: Story = {};
