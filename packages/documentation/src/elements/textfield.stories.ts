import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface TextfieldArgs {
  label: string;
  disabled: boolean;
  required: boolean;
}

const meta: Meta<TextfieldArgs> = {
  args: {
    label: "Textfield",
    disabled: false,
    required: false,
  },
  render: (args) => html`
    <div class="hap-textfield">
      <label for="textfield">${args.label}</label>
      <input
        id="textfield"
        ?required=${args.required}
        ?disabled=${args.disabled}
      />
    </div>
  `,
};

export default meta;
type Story = StoryObj<TextfieldArgs>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
