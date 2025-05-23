import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

interface AlertArgs {
  progress: number;
}

const meta: Meta<AlertArgs> = {
  args: {},
  argTypes: {},

  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <div
        role="progressbar"
        aria-label="Loading ${args.progress}%"
        class="hap-progress-indicator"
        style="--progress: ${args.progress}%;"
      ></div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const Default: Story = {
  args: { progress: 50 },
};
