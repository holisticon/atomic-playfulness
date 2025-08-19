import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./badge.js";

const meta: Meta<typeof Badge> = {
  component: Badge,
  args: {
    children: "Badge Content",
    feedback: "critical",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
