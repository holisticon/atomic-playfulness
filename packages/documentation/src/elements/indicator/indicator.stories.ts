import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  renderIndicator,
  type IndicatorArgs,
} from "./indicator-story-helpers.js";

const meta: Meta<IndicatorArgs> = {
  args: {
    content: null,
  },
  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      ${renderIndicator(args.content)}
    </div>
  `,
};

export default meta;
type Story = StoryObj<IndicatorArgs>;

export const Default: Story = {
  args: { content: 123 },
};

export const Small: Story = {
  args: { content: null },
};
