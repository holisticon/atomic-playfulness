import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

interface TextfieldArgs {
  label: string;
  description: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  round: boolean;
}

const meta: Meta<TextfieldArgs> = {
  args: {
    label: "Textfield",
    description: "Optional supporting text",
    placeholder: "Placeholder",
    disabled: false,
    readonly: false,
    round: false,
  },
  render: (args) => html`
    <div
      class=${classMap({
        "hap-textfield": true,
        "hap-textfield--brand": args.round,
      })}
    >
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

export const Round: Story = { args: { round: true } };

export const Readonly: Story = { args: { readonly: true } };

export const Disabled: Story = { args: { disabled: true } };

export const Invalid: Story = {
  render: (args) => html`
    <div
      class=${classMap({
        "hap-textfield": true,
        "hap-feedback-invalid": true,
        "hap-textfield--brand": args.round,
      })}
    >
      <label for="textfield">
        <svg class="hap-icon" viewBox="0 0 24 24">
          <use href="#circle-alert" />
        </svg>
        ${args.label}
      </label>
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

export const Granular: Story = {
  render: (args) => html`
    <label class="hap-textfield-label" for="textfield">${args.label}</label>
    <input
      class=${classMap({
        "hap-textfield-input": true,
        "hap-textfield-input--brand": args.round,
      })}
      id="textfield"
      aria-describedby="description"
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
      ?readonly=${args.readonly}
    />
    <span class="hap-textfield-description" id="description"
      >${args.description}</span
    >
  `,
};
