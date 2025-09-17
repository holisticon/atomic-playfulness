import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.js";
import { Tooltip } from "./tooltip.js";

const meta = {
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "This is a helpful tooltip",
    children: <Button>Hover me</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This is a longer tooltip message that demonstrates how the tooltip handles longer text content with proper wrapping and max-width constraints.",
    children: <Button>Long tooltip</Button>,
  },
};
