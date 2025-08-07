import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderIcon, type IconType } from "../icon/icon.stories.js";

type AlertVariant =
  | "positive"
  | "caution"
  | "critical"
  | "informative"
  | "promoted";

interface AlertArgs {
  label: string;
  variant: AlertVariant;
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
    variant: {
      control: { type: "select" },
      options: ["positive", "caution", "critical", "informative", "promoted"],
    },
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-alert ${args.variant}">
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
