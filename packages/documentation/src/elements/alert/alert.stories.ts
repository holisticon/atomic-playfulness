import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  feedback,
  feedbackArgType,
  type Feedback,
} from "../../common/feedback.js";
import { renderIcon, type IconType } from "../icon/icon.stories.js";

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
    <div class="hap-alert ${feedback(args.feedback)}">
      <div class="hap-alert-content">
        ${args.icon ? renderIcon(args.icon) : ""}
        <span>${args.label}</span>
      </div>
      ${args.iconbutton
        ? html`<i class="hap-iconbutton" data-lucide=${args.iconbutton}></i>`
        : ""}
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

export const Informative: Story = {
  args: { feedback: "neutral", label: "This is an informative message." },
};

export const Promoted: Story = {
  args: { feedback: "new", label: "This is a promoted message." },
};
