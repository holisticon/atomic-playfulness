import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface TagArgs {
  label: string;
}

const meta: Meta<TagArgs> = {
  args: {
    label: "Tag Label",
  },
};

export default meta;
type Story = StoryObj<TagArgs>;

export const Default: Story = {
  render: (args) => html`<span class="hap-tag">${args.label}</span>`,
};
