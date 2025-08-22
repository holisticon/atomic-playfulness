import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./divider.js";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <div style={{ height: "200px", display: "flex", alignItems: "center" }}>
      <Divider {...args} />
    </div>
  ),
};

export const Bold: Story = {
  args: {
    bold: true,
  },
};

export const Insets: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4>Default</h4>
        <Divider />
      </div>
      <div>
        <h4>Start Inset</h4>
        <Divider inset="start" />
      </div>
      <div>
        <h4>Both Insets</h4>
        <Divider inset="both" />
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h4>Horizontal (default)</h4>
        <Divider />
      </div>
      <div>
        <h4>Horizontal Bold</h4>
        <Divider bold />
      </div>
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <span>Vertical</span>
        <Divider orientation="vertical" />
        <span>Vertical Bold</span>
        <Divider orientation="vertical" bold />
      </div>
    </div>
  ),
};
