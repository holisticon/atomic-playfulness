import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert.js";

const meta = {
  component: Alert,
  args: {
    feedback: "informative",
    children: "Alert message.",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
