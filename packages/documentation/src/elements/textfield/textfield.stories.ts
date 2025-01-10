import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface TextfieldArgs {
  label: string;
  description: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
}

const meta: Meta<TextfieldArgs> = {
  args: {
    label: "Textfield",
    description: "Optional supporting text",
    placeholder: "Placeholder",
    disabled: false,
    readonly: false,
  },
  render: (args) => html`
    <div class="hap-textfield">
      <label for="textfield">${args.label}</label>
      <input
        id="textfield"
        aria-describedby="description"
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
      />
      <span id="description">${args.description}</span>
    </div>
  `,
};

export default meta;
type Story = StoryObj<TextfieldArgs>;

export const Default: Story = {};
