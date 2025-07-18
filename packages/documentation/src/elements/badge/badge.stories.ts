import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderIcon, type IconType } from "../icon/icon.stories.js";

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
  icon?: IconType;
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
      <div class="hap-badge regular ${args.variant}">
        <span>${args.label}</span>
        ${args.icon ? renderIcon(args.icon, "small") : ""}
      </div>
      <div class="hap-badge strong ${args.variant}">
        <span>${args.label}</span>
        ${args.icon ? renderIcon(args.icon, "small") : ""}
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
