import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  feedback,
  feedbackArgType,
  type Feedback,
} from "../../common/feedback.js";
import { type IconType } from "../icon/icon.stories.js";
import { renderIcon } from "../icon/renderIcon.ts";

interface AlertArgs {
  label: string;
  feedback: Feedback;
  icon?: IconType;
  iconbutton?: IconType;
}

const meta: Meta<AlertArgs> = {
  args: {
    label: "Badge",
    icon: "info",
    iconbutton: "circle-x",
  },
  argTypes: {
    feedback: feedbackArgType,
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-alert ${feedback(args.feedback)}">
        <div class="hap-alert-content">
          ${args.icon ? renderIcon(args.icon) : ""}
          <span>${args.label}</span>
        </div>
        ${args.iconbutton
          ? html`<button class="hap-icon-button--sm">
              ${renderIcon("circle-x", "small")}
            </button>`
          : ""}
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const Positive: Story = {
  args: { feedback: "positive", label: "This is a positive message." },
};

export const Caution: Story = {
  args: { feedback: "caution", label: "This is a cautionary message." },
};

export const Critical: Story = {
  args: { feedback: "critical", label: "This is a critical message." },
};

export const Neutral: Story = {
  args: { feedback: "neutral", label: "This is an neutral message." },
};

export const Promoted: Story = {
  args: { feedback: "new", label: "This is a promoted message." },
};
