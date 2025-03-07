import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

type TextlinkType = "standard" | "small" | "footnote";

interface TextlinkArgs {
  label: string;
  type: TextlinkType;
}

const meta: Meta<TextlinkArgs> = {
  args: {
    label: "Textlink",
    type: "standard",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["standard", "small", "footnote"],
    },
  },
  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <a
        href="#"
        class="hap-textlink${args.type !== "standard"
          ? ` hap-textlink--${args.type}`
          : ""}"
        >${args.label}</a
      >
    </div>
  `,
};

export default meta;
type Story = StoryObj<TextlinkArgs>;

export const Standard: Story = {
  args: { type: "standard", label: "Standard" },
};
export const Small: Story = {
  args: { type: "small", label: "Small" },
};
export const Footnote: Story = {
  args: { type: "footnote", label: "Footnote" },
};
