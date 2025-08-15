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
      class="hap-inline hap-gap--${args.gap} hap-align--${args.align} hap-justify--${args.justify}"
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

export const Alignment: Story = {
  render: () => html`
    <div class="hap-stack hap-gap--sm">
      <div class="hap-inline hap-gap--md hap-align--start">
        <div class="hap-placeholder" style="height: 120px"></div>
        <div class="hap-placeholder" style="height: 80px"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-inline hap-gap--md hap-align--center">
        <div class="hap-placeholder" style="height: 120px"></div>
        <div class="hap-placeholder" style="height: 80px"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-inline hap-gap--md hap-align--end">
        <div class="hap-placeholder" style="height: 120px"></div>
        <div class="hap-placeholder" style="height: 80px"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-inline hap-gap--md hap-align--stretch">
        <div class="hap-placeholder" style="height: 120px"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
    </div>
  `,
};

export const Positioning: Story = {
  render: () => html`
    <div class="hap-stack hap-gap--sm">
      <div class="hap-inline hap-gap--md hap-justify--start">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-inline hap-gap--md hap-justify--center">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-inline hap-gap--md hap-justify--end">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
      <hr class="hap-divider" />
      <div class="hap-inline hap-gap--md hap-justify--spaced">
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
        <div class="hap-placeholder"></div>
      </div>
    </div>
  `,
};

export const Wrap: Story = {
  render: () => html`
    <div class="hap-inline hap-inline--wrap hap-gap--md">
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
      <div class="hap-placeholder"></div>
    </div>
  `,
};
