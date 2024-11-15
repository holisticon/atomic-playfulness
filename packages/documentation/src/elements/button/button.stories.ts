import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import {
  buttonArgs,
  buttonArgTypes,
  renderButtons,
  type ButtonArgs,
} from "./button-story-helpers.js";

const meta: Meta<ButtonArgs> = {
  argTypes: buttonArgTypes,

  render: (args) =>
    html`<div style="display:flex;gap:1rem">
      ${renderButtons(args, "light")}${renderButtons(args, "dark")}
    </div>`,
};

export default meta;

export type Story = StoryObj<ButtonArgs>;

export const ButtonPrimary: Story = { args: buttonArgs("primary") };
export const ButtonSecondary: Story = { args: buttonArgs("secondary") };
