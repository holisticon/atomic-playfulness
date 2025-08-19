import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch.js";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const SmallChecked: Story = {
  args: {
    size: "small",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Switch size="default" />
      <Switch size="small" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Switch />
      <Switch defaultChecked />
      <Switch size="small" />
      <Switch size="small" defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
      <Switch disabled size="small" />
      <Switch disabled size="small" defaultChecked />
    </div>
  ),
};
