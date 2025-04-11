import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

interface CheckboxArgs {
  label: string;
  error?: boolean;
}

const meta: Meta<CheckboxArgs> = {
  args: {
    label: "Checkbox",
    error: false,
  },
  argTypes: {},

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox" />
        ${renderIcon("#check")}
        <label for="checkbox5">
          ${args.error ? renderIcon("#circle-alert") : ""} ${args.label} default
        </label>
      </div>
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox2" checked />
        ${renderIcon("#check")}
        <label for="checkbox5">
          ${args.error ? renderIcon("#circle-alert") : ""} ${args.label} checked
        </label>
      </div>
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox3" checked />
        ${renderIcon("#minus")}
        <label for="checkbox5">
          ${args.error ? renderIcon("#circle-alert") : ""} ${args.label}
          indeterminate
        </label>
      </div>
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox4" checked disabled />
        ${renderIcon("#check")}
        <label for="checkbox5">
          ${args.error ? renderIcon("#circle-alert") : ""} ${args.label}
          disabled
        </label>
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Default: Story = {
  args: { label: "Default" },
};

export const Error: Story = {
  args: { label: "Error", error: true },
};
