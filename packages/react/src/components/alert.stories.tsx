import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert.js";

const meta = {
  component: Alert,
  args: {
    title: "Alert title",
    children: "Additional context for the alert.",
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Positive: Story = {
  args: {
    feedback: "positive",
  },
};

export const Critical: Story = {
  args: {
    feedback: "critical",
  },
};

export const Caution: Story = {
  args: {
    feedback: "caution",
  },
};

export const Informative: Story = {
  args: {
    feedback: "informative",
  },
};
