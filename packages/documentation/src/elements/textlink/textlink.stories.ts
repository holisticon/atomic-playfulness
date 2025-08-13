import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { renderIcon } from "../icon/icon.stories.js";

type TextlinkSize = "standard" | "small" | "footnote";

interface TextlinkArgs {
  label: string;
  size: TextlinkSize;
}

const meta: Meta<TextlinkArgs> = {
  args: {
    label: "Textlink",
    size: "standard",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["standard", "small", "footnote"],
    },
  },
  render: (args) => html`
    <div style="display:flex;gap:0.5rem;flex-direction:column;padding:2rem">
      <a
        href="#"
        class=${classMap({
          "hap-textlink": args.size === "standard",
          "hap-textlink-sm": args.size === "small",
          "hap-textlink-xs": args.size === "footnote",
        })}
        >${args.label} ${renderIcon("arrow-up-right", "small")}
      </a>
    </div>
  `,
};

export default meta;
type Story = StoryObj<TextlinkArgs>;

export const Standard: Story = {
  args: { size: "standard", label: "Standard" },
};
export const Small: Story = {
  args: { size: "small", label: "Small" },
};
export const Footnote: Story = {
  args: { size: "footnote", label: "Footnote" },
};
