import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

type BadgeVariant =
  | "default"
  | "positive"
  | "caution"
  | "critical"
  | "neutral"
  | "new";

interface BadgeArgs {
  label: string;
  variant: BadgeVariant;
  icon?: string;
}

const meta: Meta<BadgeArgs> = {
  args: {
    label: "Badge",
    variant: "default",
    icon: "[Icon]",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "positive", "caution", "critical", "neutral", "new"],
    },
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-badge regular ${args.variant}">
        <span>${args.label}</span>
        <span class="icon">${args.icon}</span>
      </div>
      <div class="hap-badge bold ${args.variant}">
        <span>${args.label}</span>
        <span class="icon">${args.icon}</span>
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Default: Story = {
  args: { variant: "default", label: "Default" },
};

export const Positive: Story = {
  args: { variant: "positive", label: "Positive" },
};

export const Caution: Story = {
  args: { variant: "caution", label: "Caution" },
};

export const Critical: Story = {
  args: { variant: "critical", label: "Critical" },
};

export const Neutral: Story = {
  args: { variant: "neutral", label: "Neutral" },
};

export const New: Story = { args: { variant: "new", label: "New" } };
