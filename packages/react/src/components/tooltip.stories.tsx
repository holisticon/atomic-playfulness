import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button.js";
import { Tooltip } from "./tooltip.js";

const meta = {
  title: "Elements/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
    },
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

export const Top: Story = {
  args: {
    content: "Tooltip appears on top",
    side: "top",
    children: <Button>Top tooltip</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "Tooltip appears on right",
    side: "right",
    children: <Button>Right tooltip</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: "Tooltip appears on bottom",
    side: "bottom",
    children: <Button>Bottom tooltip</Button>,
  },
};

export const Left: Story = {
  args: {
    content: "Tooltip appears on left",
    side: "left",
    children: <Button>Left tooltip</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This is a longer tooltip message that demonstrates how the tooltip handles longer text content with proper wrapping and max-width constraints.",
    children: <Button>Long tooltip</Button>,
  },
};

export const CustomDelay: Story = {
  args: {
    content: "This tooltip has a custom delay",
    delayDuration: 1500,
    children: <Button>Custom delay</Button>,
  },
};

export const AlignStart: Story = {
  args: {
    content: "Aligned to start",
    align: "start",
    children: <Button>Start aligned</Button>,
  },
};

export const AlignEnd: Story = {
  args: {
    content: "Aligned to end",
    align: "end",
    children: <Button>End aligned</Button>,
  },
};
