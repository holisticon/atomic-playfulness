import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

type AlertVariant =
  | "positive"
  | "caution"
  | "critical"
  | "informative"
  | "promoted";

interface AlertArgs {
  label: string;
  variant: AlertVariant;
  icon?: string;
  iconbutton?: string;
}

const meta: Meta<AlertArgs> = {
  args: {
    label: "Badge",
    icon: "info",
    iconbutton: "circle-x",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["positive", "caution", "critical", "informative", "promoted"],
    },
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-alert hap-feedback-${args.variant}">
        <div class="hap-alert-content">
          ${args.icon
            ? html`<svg class="hap-icon" viewBox="0 0 24 24">
                <use href="#${args.icon}" />
              </svg>`
            : ""}
          <span>${args.label}</span>
        </div>
        ${args.iconbutton
          ? html`<i class="hap-iconbutton" data-lucide=${args.iconbutton}></i>`
          : ""}
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const Positive: Story = {
  args: { variant: "positive", label: "This is a positive message." },
};

export const Caution: Story = {
  args: { variant: "caution", label: "This is a cautionary message." },
};

export const Critical: Story = {
  args: { variant: "critical", label: "This is a critical message." },
};

export const Neutral: Story = {
  args: { variant: "informative", label: "This is an informative message." },
};

export const New: Story = {
  args: { variant: "promoted", label: "This is a promoted message." },
};
