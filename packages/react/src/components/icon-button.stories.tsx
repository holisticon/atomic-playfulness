import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button.js";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: "Heart",
    "aria-label": "Favorite",
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

export const ExtraSmall: Story = {
  args: {
    size: "extra-small",
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <IconButton
        {...args}
        icon="Heart"
        size="medium"
        aria-label="Medium favorite"
      />
      <IconButton
        {...args}
        icon="Heart"
        size="small"
        aria-label="Small favorite"
      />
      <IconButton
        {...args}
        icon="Heart"
        size="extra-small"
        aria-label="Extra small favorite"
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <IconButton icon="Heart" aria-label="Default" />
      <IconButton icon="Heart" selected aria-label="Selected" />
      <IconButton icon="Heart" disabled aria-label="Disabled" />
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
      <IconButton icon="Heart" aria-label="Favorite" />
      <IconButton icon="Bookmark" aria-label="Bookmark" />
      <IconButton icon="Share" aria-label="Share" />
      <IconButton icon="EllipsisVertical" aria-label="More options" />
      <IconButton icon="Settings" aria-label="Settings" />
      <IconButton icon="Search" aria-label="Search" />
      <IconButton icon="Bell" aria-label="Notifications" />
      <IconButton icon="User" aria-label="Profile" />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ margin: 0 }}>Card Title</h3>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <IconButton icon="Pencil" size="small" aria-label="Edit" />
          <IconButton icon="Trash2" size="small" aria-label="Delete" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <span>Song title - Artist name</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: "0.5rem" }}>
          <IconButton icon="Heart" aria-label="Like" />
          <IconButton icon="SkipBack" aria-label="Previous" />
          <IconButton icon="Play" aria-label="Play" />
          <IconButton icon="SkipForward" aria-label="Next" />
          <IconButton icon="Shuffle" aria-label="Shuffle" />
        </div>
      </div>
    </div>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.25rem",
        padding: "0.5rem",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        width: "fit-content",
      }}
    >
      <IconButton icon="Bold" size="small" aria-label="Bold" />
      <IconButton icon="Italic" size="small" aria-label="Italic" />
      <IconButton
        icon="Underline"
        size="small"
        selected
        aria-label="Underline"
      />
      <div
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "#e0e0e0",
          margin: "0 0.25rem",
        }}
      />
      <IconButton
        icon="AlignLeft"
        size="small"
        selected
        aria-label="Align left"
      />
      <IconButton icon="AlignCenter" size="small" aria-label="Align center" />
      <IconButton icon="AlignRight" size="small" aria-label="Align right" />
      <div
        style={{
          width: "1px",
          height: "20px",
          backgroundColor: "#e0e0e0",
          margin: "0 0.25rem",
        }}
      />
      <IconButton icon="Link" size="small" aria-label="Add link" />
      <IconButton icon="Image" size="small" aria-label="Add image" />
    </div>
  ),
};
