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
    icon: "[Icon]",
    iconbutton: "[Iconbutton]",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["positive", "caution", "critical", "informative", "promoted"],
    },
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-alert ${args.variant}">
        <div class="hap-alert-content">
          <span class="icon">${args.icon}</span>
          <span>${args.label}</span>
        </div>
        <span class="iconbutton">${args.iconbutton}</span>
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

export const Informative: Story = {
  args: { variant: "informative", label: "This is an informative message." },
};

export const Promoted: Story = {
  args: { variant: "promoted", label: "This is a promoted message." },
};
