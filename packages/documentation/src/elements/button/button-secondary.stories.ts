import type { Meta } from "@storybook/web-components";
import { html } from "lit";
import {
  ActiveStory,
  buttonArgs,
  buttonArgTypes,
  DisabledStory,
  EnabledStory,
  FocusedStory,
  HoveredStory,
  renderButtons,
  type ButtonArgs,
  type Story,
} from "./button-story-helpers.js";

const meta: Meta<ButtonArgs> = {
  args: buttonArgs("secondary"),
  argTypes: buttonArgTypes,

  render: (args) =>
    html`<div style="display:flex;gap:1rem">
      ${renderButtons(args, "light")}${renderButtons(args, "dark")}
    </div>`,
};

export default meta;

// Enabled
export const Enabled: Story = EnabledStory;

// Hovered (Button Hovered)
export const Hovered: Story = HoveredStory;

// Focused
export const Focused: Story = FocusedStory;

// Active (Pressed)
export const Active: Story = ActiveStory;

// Disabled
export const Disabled: Story = DisabledStory;
