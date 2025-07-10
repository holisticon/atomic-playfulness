import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { range } from "lit/directives/range.js";

interface ButtonGroupArgs {
  small: boolean;
}

const meta: Meta<ButtonGroupArgs> = {
  args: {
    small: false,
  },
  render: (args) => html`
    <div class="hap-toggle-button-group">
      ${Array.from(range(4)).map(
        () => html`
          <button
            role="radio"
            aria-checked="false"
            class=${classMap({
              "hap-toggle-button": true,
              "hap-toggle-button--small": args.small,
            })}
            @click=${(e: MouseEvent) => {
              const btn = e.currentTarget as HTMLButtonElement;
              const activeEle = btn.parentElement?.querySelector(
                'button[aria-checked="true"]',
              );

              if (activeEle && activeEle !== btn) {
                activeEle.ariaChecked = "false";
              }
              const isChecked = btn.ariaChecked === "true" ? true : false;
              btn.ariaChecked = (!isChecked).toString();
            }}
          >
            Button
          </button>
        `,
      )}
    </div>
  `,
};

export default meta;
type Story = StoryObj<ButtonGroupArgs>;

export const Default: Story = {};

export const Small: Story = { args: { small: true } };

export const MultiSelect: Story = {
  render: (args) => html`
    <div class="hap-toggle-button-group">
      ${Array.from(range(4)).map(
        () => html`
          <button
            aria-pressed="false"
            class=${classMap({
              "hap-toggle-button": true,
              "hap-toggle-button--small": args.small,
            })}
            @click=${(e: MouseEvent) => {
              const btn = e.currentTarget as HTMLButtonElement;
              const isPressed = btn.ariaPressed === "true" ? true : false;
              btn.ariaPressed = (!isPressed).toString();
            }}
          >
            Button
          </button>
        `,
      )}
    </div>
  `,
};
