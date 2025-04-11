import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface RadioGroupArgs {
  label: string;
  disabled: boolean;
  options: { label: string; checked?: boolean }[];
}

const meta: Meta<RadioGroupArgs> = {
  args: {
    label: "Options Radio Group",
    disabled: false,
    options: [
      { label: "Option 1" },
      { label: "Option 2" },
      { label: "Option 3", checked: true },
      { label: "Option 4" },
    ],
  },
  render: (args) => html`
    <fieldset
      role="radiogroup"
      class="hap-radio-group"
      ?disabled=${args.disabled}
    >
      <legend>${args.label}</legend>
      ${args.options.map((option) => {
        return html`<label class="hap-radio">
          <input type="radio" name="option" ?checked=${option.checked} />
          <span>${option.label}</span>
        </label>`;
      })}
    </fieldset>
  `,
};

export default meta;
type Story = StoryObj<RadioGroupArgs>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
