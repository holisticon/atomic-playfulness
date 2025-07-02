import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

interface CheckboxArgs {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  intermediate?: boolean;
  error?: boolean;
}

const meta: Meta<CheckboxArgs> = {
  args: {
    label: "Checkbox",
    disabled: false,
    checked: false,
    intermediate: false,
  },
  render: (args) => html`
    <label class="hap-checkbox">
      <input
        type="checkbox"
        name="confirmation"
        ?disabled=${args.disabled}
        ?checked=${args.checked}
        .indeterminate=${args.intermediate ?? false}
      />
      <span>${args.label}</span>
    </label>
  `,
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  args: { label: "Default" },
};

export const Intermediate: Story = {
  args: { label: "Intermediate", intermediate: true },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true },
};

export const Error: Story = {
  args: { label: "Error" },
  render: (args) => html`
    <label class="hap-checkbox hap-checkbox--invalid">
      <input
        type="checkbox"
        name="confirmation"
        ?disabled=${args.disabled}
        ?checked=${args.checked}
        .indeterminate=${args.intermediate ?? false}
      />
      ${renderIcon("circle-alert", "small")}
      <span>${args.label}</span>
    </label>
  `,
};
