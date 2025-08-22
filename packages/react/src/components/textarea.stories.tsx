import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea.js";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    label: "Message",
    placeholder: "Enter your message here...",
    rows: 4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description: "Please provide detailed feedback or comments.",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    description: "This field is required and cannot be empty.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "This textarea is disabled and cannot be edited.",
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    value: "This content is read-only and cannot be modified.",
    description: "This field cannot be edited.",
  },
};

export const WithValue: Story = {
  args: {
    value: "This is some pre-filled content in the textarea.",
    description: "Pre-filled with example content",
  },
};

export const LargeTextarea: Story = {
  args: {
    rows: 8,
    label: "Long Message",
    description: "For longer form content",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "500px",
      }}
    >
      <Textarea
        label="Default"
        placeholder="Enter your message"
        rows={3}
        description="Standard textarea"
      />
      <Textarea
        label="Required Field"
        placeholder="This field is required"
        rows={3}
        invalid
        description="This field cannot be empty"
      />
      <Textarea
        label="Disabled"
        disabled
        value="This textarea is disabled"
        rows={3}
      />
      <Textarea
        label="Read Only"
        readOnly
        value="This content cannot be edited"
        rows={3}
        description="Read-only textarea"
      />
      <Textarea
        label="Large Textarea"
        placeholder="Enter detailed feedback"
        rows={6}
        description="For longer content"
      />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form style={{ maxWidth: "500px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Textarea
          label="Feedback"
          placeholder="Tell us about your experience..."
          rows={4}
          description="Your feedback helps us improve our service"
          required
        />
        <Textarea
          label="Additional Comments"
          placeholder="Any additional thoughts? (optional)"
          rows={3}
        />
        <button type="submit" style={{ alignSelf: "flex-start" }}>
          Submit Feedback
        </button>
      </div>
    </form>
  ),
};
