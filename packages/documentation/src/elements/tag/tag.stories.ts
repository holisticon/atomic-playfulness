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

export const LeadingIcon: Story = {
  render: (args) => html`
    <span class="hap-tag">
      <svg viewBox="0 0 24 24" class="hap-icon hap-icon--small">
        <use href="#sparkles"></use>
      </svg>
      ${args.label}
    </span>
  `,
};
