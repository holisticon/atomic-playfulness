import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  alignArgType,
  justifyArgType,
  spacingArgType,
  type Align,
  type Justify,
  type Spacing,
} from "../../common/layout.js";

interface InlineArgs {
  gap: Spacing;
  align: Align;
  justify: Justify;
}

const meta: Meta<InlineArgs> = {
  args: {
    gap: "md",
    align: "start",
    justify: "start",
  },
  argTypes: {
    gap: spacingArgType,
    align: alignArgType,
    justify: justifyArgType,
  },
  render: (args) => html`
    <div
      class="hap-inline hap-gap-${args.gap} hap-align-${args.align} hap-justify-${args.justify}"
    >
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<InlineArgs>;

export const Default: Story = {};
