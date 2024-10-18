import type { Meta, StoryObj } from "@storybook/web-components";
import { renderButtons, type ButtonArgs } from "./button-story-helpers.js";

const meta: Meta<ButtonArgs> = {
  args: {
    variant: "primary",
    size: "default",
    disabled: false,
    hovered: false,
    active: false,
    focused: false,
    iconPosition: "left",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "destructive"],
    },
    size: {
      control: { type: "select" },
      options: ["default", "small"],
    },
  },

  render: (args) => renderButtons(args),
};

export default meta;
type Story = StoryObj<ButtonArgs>;

// Enabled
export const Enabled: Story = {
  args: {
    label: "Enabled Button",
  },
};

// Hovered (Button Hovered)
export const Hovered: Story = {
  args: {
    label: "Hovered Button",
    hovered: true,
  },
  parameters: { pseudo: { hover: true } },
};

// Focused
export const Focused: Story = {
  args: {
    label: "Focused Button",
    focused: true,
  },
  parameters: { pseudo: { focus: true } },
};

// Active (Pressed)
export const Active: Story = {
  args: {
    label: "Active Button",
    active: true,
  },
  parameters: { pseudo: { active: true } },
};

// Disabled
export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    disabled: true,
  },
};
