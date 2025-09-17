import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./divider.js";

const meta = {
  component: Divider,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div style={{ height: "200px", display: "flex", alignItems: "stretch" }}>
      <Divider {...args} />
    </div>
  ),
};
