import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import {
  alignArgType,
  spacingArgType,
  type Align,
  type Spacing,
} from "../../common/layout.js";

interface StackArgs {
  gap: Spacing;
  align: Align;
}

const meta: Meta<StackArgs> = {
  args: {
    gap: "md",
    align: "start",
  },
  argTypes: {
    gap: spacingArgType,
    align: alignArgType,
  },
  render: (args) => html`
    <div class="hap-stack hap-gap--${args.gap} hap-align--${args.align} ">
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<StackArgs>;

export const Default: Story = {};

export const Alignment: Story = {
  render: () => html`
    <div class="hap-stack hap-gap--sm">
      <div class="hap-stack hap-gap--md hap-align--start">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-stack hap-gap--md hap-align--center">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-stack hap-gap--md hap-align--end">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-stack hap-gap--md hap-align--stretch">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
    </div>
  `,
};
