import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { when } from "lit/directives/when.js";

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
      <label for="textfield">
        ${args.label}${when(
          args.required,
          () => html`<span aria-hidden="true">*</span>`,
        )}
      </label>
      <input
        id="textfield"
        ?required=${args.required}
        ?disabled=${args.disabled}
      />
      <span class="hap-textfield-error">This is a error message</span>
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

export const Invalid: Story = {
  args: {
    label: "Enter and Remove Text",
    required: true,
  },
};
