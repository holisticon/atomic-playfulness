import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox.js";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    children: "Checked Checkbox",
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: "Indeterminate Checkbox",
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: "Disabled Checked Checkbox",
    disabled: true,
    defaultChecked: true,
  },
};

export const Invalid: Story = {
  args: {
    children: "Invalid Checkbox",
    invalid: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox indeterminate>Indeterminate</Checkbox>
      <Checkbox invalid>Invalid</Checkbox>
      <Checkbox disabled>Disabled Unchecked</Checkbox>
      <Checkbox disabled defaultChecked>
        Disabled Checked
      </Checkbox>
      <Checkbox disabled indeterminate>
        Disabled Indeterminate
      </Checkbox>
    </div>
  ),
};
