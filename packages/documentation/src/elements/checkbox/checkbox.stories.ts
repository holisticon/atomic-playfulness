import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

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
        <!-- TODO: input inside or next to label? -->
        <input type="checkbox" id="checkbox" />
        <svg class="hap-icon" viewBox="0 0 24 24">
          <use href="#check" />
        </svg>
        <label for="checkbox5">
          ${args.error
            ? html`<svg class="hap-icon" viewBox="0 0 24 24">
                <use href="#cicle-alert" />
              </svg>`
            : ""}
          ${args.label} default
        </label>
      </div>
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox2" checked />
        <svg class="hap-icon" viewBox="0 0 24 24">
          <use href="#check" />
        </svg>
        <label for="checkbox5">
          ${args.error
            ? html`<svg class="hap-icon" viewBox="0 0 24 24">
                <use href="#cicle-alert" />
              </svg>`
            : ""}
          ${args.label} checked
        </label>
      </div>
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox3" checked />
        <svg class="hap-icon" viewBox="0 0 24 24">
          <use href="#minus" />
        </svg>
        <label for="checkbox5">
          ${args.error
            ? html`<svg class="hap-icon" viewBox="0 0 24 24">
                <use href="#cicle-alert" />
              </svg>`
            : ""}
          ${args.label} indeterminate
        </label>
      </div>
      <div class="hap-checkbox ${args.error ? "hap-critical" : ""}">
        <input type="checkbox" id="checkbox4" checked disabled />
        <svg class="hap-icon" viewBox="0 0 24 24">
          <use href="#check" />
        </svg>
        <label for="checkbox5">
          ${args.error
            ? html`<svg class="hap-icon" viewBox="0 0 24 24">
                <use href="#cicle-alert" />
              </svg>`
            : ""}
          ${args.label} disabled
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
