import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import {
  buttonArgTypes,
  iconButtonArgs,
  renderButtons,
  type IconButtonArgs,
} from "./icon-button-story-helpers.js";

const meta: Meta<IconButtonArgs> = {
  argTypes: buttonArgTypes,

  render: (args) =>
    html`<div style="display:flex;gap:1rem">
      ${renderButtons(args, "light")}${renderButtons(args, "dark")}
    </div>`,
};

export default meta;

export type Story = StoryObj<IconButtonArgs>;

export const IconButton: Story = { args: iconButtonArgs() };
