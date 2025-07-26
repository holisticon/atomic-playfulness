import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

type DividerOrientation = "horizontal" | "vertical";

interface DividerArgs {
  orientation?: DividerOrientation;
}

const meta: Meta<DividerArgs> = {
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },

  render: (args) => html`
    <div
      style=${styleMap({
        display: "flex",
        gap: "0.5rem",
        flexDirection: "row",
        flexWrap: "wrap",
      })}
    >
      <div
        style=${styleMap({
          display: "flex",
          gap: "1rem",
          width: args.orientation === "horizontal" ? "100%" : "auto",
          flexDirection: args.orientation === "horizontal" ? "column" : "row",
          alignItems: "stretch",
          padding: "2rem",
          height: args.orientation === "horizontal" ? "100px" : "200px", // arbitrary sizes
        })}
      >
        <hr
          class="hap-divider ${classMap({
            "hap-divider-vertical": args.orientation === "vertical",
          })}"
        />
        <hr
          class="hap-divider hap-divider--inset ${classMap({
            "hap-divider-vertical": args.orientation === "vertical",
          })}"
        />
        <hr
          class="hap-divider hap-divider--middle-inset ${classMap({
            "hap-divider-vertical": args.orientation === "vertical",
          })}"
        />
      </div>
      <div
        style=${styleMap({
          display: "flex",
          gap: "1rem",
          width: args.orientation === "horizontal" ? "100%" : "auto",
          flexDirection: args.orientation === "horizontal" ? "column" : "row",
          padding: "2rem",
          height: args.orientation === "horizontal" ? "100px" : "200px", // arbitrary sizes
        })}
      >
        <hr
          class="hap-divider hap-divider-bold ${classMap({
            "hap-divider-vertical": args.orientation === "vertical",
          })}"
        />
        <hr
          class="hap-divider hap-divider-bold hap-divider--inset ${classMap({
            "hap-divider-vertical": args.orientation === "vertical",
          })}"
        />
        <hr
          class="hap-divider hap-divider-bold hap-divider--middle-inset ${classMap(
            {
              "hap-divider-vertical": args.orientation === "vertical",
            },
          )}"
        />
      </div>
    </div>
  `,
};

export default meta;
type Story = StoryObj<DividerArgs>;

export const Default: Story = {
  args: { orientation: "horizontal" },
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
};
