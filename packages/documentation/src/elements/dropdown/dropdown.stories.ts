import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { renderIcon } from "../icon/icon.stories.js";

interface DropdownArgs {
  label: string;
  description: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  round: boolean;
}

const meta: Meta<DropdownArgs> = {
  args: {
    label: "Dropdown",
    description: "Optional supporting text",
    placeholder: "Placeholder",
    disabled: false,
    readonly: false,
  },
  render: (args) => html`
    <div
      class=${classMap({
        "hap-textfield": true,
      })}
    >
      <label for="textfield">${args.label}</label>
      <div class="hap-textfield-input">
        <input
          id="textfield"
          aria-describedby="description"
          placeholder=${args.placeholder}
          ?disabled=${args.disabled}
          ?readonly=${args.readonly}
        />
        ${renderIcon("chevron-down")}
      </div>
      <span id="description">${args.description}</span>
    </div>
  `,
};

export default meta;
type Story = StoryObj<DropdownArgs>;

export const Default: Story = {};

export const Disabled: Story = { args: { disabled: true } };

export const Invalid: Story = {
  render: (args) => html`
    <div
      class=${classMap({
        "hap-textfield": true,
        "hap-feedback--invalid": true,
        "hap-textfield--brand": args.round,
      })}
    >
      <label for="textfield">
        ${renderIcon("circle-alert")} ${args.label}
      </label>
      <div class="hap-textfield-input">
        <input
          id="textfield"
          aria-describedby="description"
          placeholder=${args.placeholder}
          ?disabled=${args.disabled}
          ?readonly=${args.readonly}
        />
        ${renderIcon("chevron-down")}
      </div>
      <span id="description">${args.description}</span>
    </div>
  `,
};

export const WithTags: Story = {
  render: (args) => html`
    <div
      class=${classMap({
        "hap-textfield": true,
        "hap-textfield--brand": args.round,
      })}
    >
      <label for="textfield">
        ${renderIcon("circle-alert")} ${args.label}
      </label>
      <div class="hap-textfield-input">
        <div class="hap-textfield-input-tags">
          <span class="hap-tag"
            >Item 1
            <button class="hap-icon-button--xs">
              ${renderIcon("circle-x", "small")}
            </button></span
          >
          <span class="hap-tag"
            >Item 2
            <button class="hap-icon-button--xs">
              ${renderIcon("circle-x", "small")}
            </button></span
          >
        </div>
        ${renderIcon("chevron-down")}
      </div>
      <span id="description">${args.description}</span>
    </div>
  `,
};
