import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

interface SwitchArgs {
  size: "default" | "small";
  disabled?: boolean;
  checked?: boolean;
}

const meta: Meta<SwitchArgs> = {
  args: {
    size: "default",
    disabled: false,
    checked: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["default", "small"],
    },
  },
  render: (args) => html`
    <input
      name="some-setting"
      type="checkbox"
      class=${classMap({
        "hap-switch": args.size === "default",
        "hap-switch--sm": args.size === "small",
      })}
      ?disabled=${args.disabled}
      ?checked=${args.checked}
    />
  `,
};

export default meta;
type Story = StoryObj<SwitchArgs>;

export const Default: Story = {};

export const Small: Story = { args: { size: "small" } };

export const Disabled: Story = { args: { disabled: true } };
