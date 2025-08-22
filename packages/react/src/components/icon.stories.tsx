import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon.js";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    name: "House",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <Icon {...args} name="House" size="small" />
      <Icon {...args} name="House" size="medium" />
    </div>
  ),
};

export const CommonIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <Icon name="House" />
      <Icon name="User" />
      <Icon name="Settings" />
      <Icon name="Search" />
      <Icon name="ChevronDown" />
      <Icon name="Info" />
      <Icon name="CircleAlert" />
      <Icon name="Check" />
      <Icon name="X" />
      <Icon name="Plus" />
    </div>
  ),
};
