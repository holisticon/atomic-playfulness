import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  renderIndicator,
  type IndicatorArgs,
} from "./indicator-story-helpers.js";

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
        ${renderIndicator(args.variant, args.number)}
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
