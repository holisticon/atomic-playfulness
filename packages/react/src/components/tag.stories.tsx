import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./tag.js";

const meta = {
  component: Tag,
  args: {
    children: "Tag Label",
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Closable: Story = {
  args: {
    closable: true,
  },
};
