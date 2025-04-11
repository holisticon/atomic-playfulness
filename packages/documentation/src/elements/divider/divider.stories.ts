import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
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
          gap: "0.5rem",
          width: args.orientation === "horizontal" ? "100%" : "auto",
          flexDirection: args.orientation === "horizontal" ? "column" : "row",
          padding: "2rem",
          height: args.orientation === "horizontal" ? "100px" : "200px", // arbitrary sizes
        })}
      >
        <!-- TODO we only need the class with orientation when using vertical divider -->
        <hr class="hap-divider hap-divider-${args.orientation}" />
        <hr
          class="hap-divider hap-divider-${args.orientation} hap-divider--inset"
        />
        <hr
          class="hap-divider hap-divider-${args.orientation} hap-divider--middle-inset"
        />
      </div>
      <div
        style=${styleMap({
          display: "flex",
          gap: "0.5rem",
          width: args.orientation === "horizontal" ? "100%" : "auto",
          flexDirection: args.orientation === "horizontal" ? "column" : "row",
          padding: "2rem",
          height: args.orientation === "horizontal" ? "100px" : "200px", // arbitrary sizes
        })}
      >
        <!-- TODO we only need the class with orientation when using vertical divider -->
        <hr
          class="hap-divider hap-divider-bold hap-divider-${args.orientation}"
        />
        <hr
          class="hap-divider hap-divider-bold hap-divider-${args.orientation} hap-divider--inset"
        />
        <hr
          class="hap-divider hap-divider-bold hap-divider-${args.orientation} hap-divider--middle-inset"
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
