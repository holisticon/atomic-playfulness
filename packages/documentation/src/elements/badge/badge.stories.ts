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
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "positive", "caution", "critical", "neutral", "new"],
    },
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-badge hap-${args.variant}">
        <span>${args.label}</span>
        ${args.icon
          ? html`<i class="hap-icon" data-lucide=${args.icon}></i>`
          : ""}
      </div>
      <div class="hap-badge hap-badge-bold hap-${args.variant}">
        <span>${args.label}</span>
        ${args.icon
          ? html`<i class="hap-icon" data-lucide=${args.icon}></i>`
          : ""}
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Default: Story = {
  args: { variant: "default", label: "Default", icon: "info" },
};

export const Positive: Story = {
  args: { variant: "positive", label: "Positive", icon: "arrow-up-right" },
};

export const Caution: Story = {
  args: { variant: "caution", label: "Caution", icon: "circle-alert" },
};

export const Critical: Story = {
  args: { variant: "critical", label: "Critical", icon: "arrow-down" },
};

export const Neutral: Story = {
  args: { variant: "neutral", label: "Neutral", icon: "check" },
};

export const New: Story = {
  args: { variant: "new", label: "New", icon: "sparkles" },
};
