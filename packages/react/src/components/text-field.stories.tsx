import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./text-field.js";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    label: "Label",
    placeholder: "Placeholder text",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: "This is a description that provides additional context.",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    description: "This field is required and cannot be empty.",
  },
};

export const Brand: Story = {
  args: {
    brand: true,
    description: "Brand variant with rounded styling",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled value",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "Read-only value",
    description: "This field cannot be edited.",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Field without label",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "400px",
      }}
    >
      <TextField
        label="Default"
        placeholder="Enter text"
        description="Standard text field"
      />
      <TextField
        label="Required Field"
        placeholder="Enter required text"
        invalid
        description="This field is required"
      />
      <TextField
        label="Brand Style"
        placeholder="Brand text field"
        brand
        description="Rounded brand variant"
      />
      <TextField
        label="Disabled"
        placeholder="Disabled field"
        disabled
        value="Cannot edit"
      />
      <TextField
        label="Read Only"
        readOnly
        value="Read-only content"
        description="Cannot be modified"
      />
    </div>
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "400px",
      }}
    >
      <TextField type="text" label="Text" placeholder="Enter text" />
      <TextField type="email" label="Email" placeholder="Enter email address" />
      <TextField
        type="password"
        label="Password"
        placeholder="Enter password"
      />
      <TextField type="tel" label="Phone" placeholder="Enter phone number" />
      <TextField type="url" label="Website" placeholder="https://example.com" />
      <TextField type="search" label="Search" placeholder="Search..." />
    </div>
  ),
};
