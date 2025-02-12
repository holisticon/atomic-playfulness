import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

type IndicatorVariant = "default" | "small";

interface IndicatorArgs {
  number: string;
  variant: IndicatorVariant;
}

const meta: Meta<IndicatorArgs> = {
  args: {
    number: "",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "hap-indicator-small"],
    },
  },

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div class="hap-indicator ${args.variant}">
        <span class="hap-indicator-number">${args.number}</span>
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<IndicatorArgs>;

export const Default: Story = {
  args: { variant: "default", number: "123" },
};

export const Small: Story = {
  args: { variant: "small", number: "" },
};
