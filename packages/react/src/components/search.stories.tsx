import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./search.js";

const meta: Meta<typeof Search> = {
  component: Search,
  parameters: {
    layout: "padded",
  },
  args: {
    label: "Search",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
