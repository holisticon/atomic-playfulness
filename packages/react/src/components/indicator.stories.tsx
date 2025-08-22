import type { Meta, StoryObj } from "@storybook/react";
import { Indicator } from "./indicator.js";

const meta: Meta<typeof Indicator> = {
  title: "Components/Indicator",
  component: Indicator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "New",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    children: "5",
  },
};

export const Empty: Story = {
  args: {
    children: undefined,
  },
};

export const Examples: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <Indicator>New</Indicator>
      <Indicator>1</Indicator>
      <Indicator>99+</Indicator>
      <Indicator>Beta</Indicator>
      <Indicator /> {/* Empty indicator */}
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>Messages</span>
        <Indicator>3</Indicator>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>Notifications</span>
        <Indicator>12</Indicator>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span>Updates</span>
        <Indicator>New</Indicator>
      </div>
    </div>
  ),
};
