import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderIcon } from "../icon/icon.stories.js";

interface TextareaArgs {
  label: string;
  description: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
}

const meta: Meta<TextareaArgs> = {
  args: {
    label: "Textarea",
    description: "Optional supporting text",
    placeholder: "Placeholder",
    disabled: false,
    readonly: false,
  },
  render: (args) => html`
    <div class="hap-textarea">
      <label for="textarea">${args.label}</label>
      <textarea
        id="textarea"
        aria-describedby="description"
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
      ></textarea>
      <span id="description">${args.description}</span>
    </div>
  `,
};

export default meta;
type Story = StoryObj<TextareaArgs>;

export const Default: Story = {};

export const Readonly: Story = { args: { readonly: true } };

export const Disabled: Story = { args: { disabled: true } };

export const Invalid: Story = {
  render: (args) => html`
    <div class="hap-textarea hap-feedback-invalid">
      <label for="textarea">
        ${renderIcon("circle-alert")} ${args.label}
      </label>
      <textarea
        id="textarea"
        aria-describedby="description"
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
      ></textarea>
      <span id="description">${args.description}</span>
    </div>
  `,
};

export const Granular: Story = {
  render: (args) => html`
    <div style="display: flex; flex-direction: column;">
      <label class="hap-textarea-label" for="textarea">${args.label}</label>
      <textarea
        class="hap-textarea-input"
        id="textarea"
        aria-describedby="description"
        placeholder=${args.placeholder}
        ?disabled=${args.disabled}
        ?readonly=${args.readonly}
      ></textarea>
      <span class="hap-textarea-description" id="description">
        ${args.description}
      </span>
    </div>
  `,
};
