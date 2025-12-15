import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";

import { renderIcon } from "../icon/renderIcon.ts";

interface ToggleButtonArgs {
  label: string;
  small: boolean;
  subtle: boolean;
  pressed: boolean;
  withIcon?: boolean;
}

const meta = {
  args: {
    label: "Toggle",
    withIcon: false,
    small: false,
    subtle: false,
    pressed: false,
  },
  render: (args) => html`
    <button
      aria-pressed=${args.pressed}
      class=${classMap({
        "hap-toggle-button": !args.small,
        "hap-toggle-button--sm": args.small,
        "hap-toggle-button--subtle": args.subtle,
      })}
      @click=${(e: MouseEvent) => {
        const btn = e.currentTarget as HTMLButtonElement;
        const isPressed = btn.ariaPressed === "true" ? true : false;
        btn.ariaPressed = (!isPressed).toString();
      }}
    >
      ${when(args.withIcon, () =>
        renderIcon("check", args.small ? "small" : "default"),
      )}
      ${args.label}
    </button>
  `,
} satisfies Meta<ToggleButtonArgs>;

export default meta;
type Story = StoryObj<ToggleButtonArgs>;

export const Default: Story = {};

export const Pressed: Story = {
  args: { pressed: true },
};

export const WithIcon: Story = {
  args: { withIcon: true },
};

export const Small: Story = {
  args: { small: true },
};

export const Subtle: Story = {
  args: { subtle: true },
};
