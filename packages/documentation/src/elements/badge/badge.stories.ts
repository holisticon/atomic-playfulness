import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  feedback,
  feedbackArgType,
  type Feedback,
} from "../../common/feedback.js";
import { renderIcon, type IconType } from "../icon/icon.stories.js";

interface BadgeArgs {
  label: string;
  feedback: Feedback;
  icon?: IconType;
}

const meta: Meta<BadgeArgs> = {
  args: {
    label: "Badge",
    feedback: "default",
  },
  argTypes: {
    feedback: feedbackArgType,
  },
  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-badge ${feedback(args.feedback)}">
        <span>${args.label}</span>
        ${args.icon ? renderIcon(args.icon, "small") : ""}
      </div>
      <div class="hap-badge hap-badge--strong ${feedback(args.feedback)}">
        <span>${args.label}</span>
        ${args.icon ? renderIcon(args.icon, "small") : ""}
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Default: Story = {
  args: { feedback: "default", label: "Default", icon: "info" },
};

export const Positive: Story = {
  args: { feedback: "positive", label: "Positive", icon: "arrow-up-right" },
};

export const Caution: Story = {
  args: { feedback: "caution", label: "Caution", icon: "circle-alert" },
};

export const Critical: Story = {
  args: { feedback: "critical", label: "Critical", icon: "arrow-down" },
};

export const Neutral: Story = {
  args: { feedback: "neutral", label: "Neutral", icon: "check" },
};

export const New: Story = {
  args: { feedback: "new", label: "New", icon: "sparkles" },
};
