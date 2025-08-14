import { Indicator } from "@holisticon/hap-react";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import React from "react";
import { createRoot } from "react-dom/client";

interface IndicatorArgs {
  variant?: "default" | "small";
  number?: string;
  className?: string;
}

// Helper function to render React component in a Web Components story
const renderReact = () => {
  return html`<div class="react-container"></div>`;
};

const meta: Meta<IndicatorArgs> = {
  title: "Elements/Indicator/React",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "small"],
    },
    number: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
  },
  decorators: [
    (story, context) => {
      const template = story();

      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        const container = document.querySelector(".react-container");
        if (container && !container.hasChildNodes()) {
          const root = createRoot(container);
          const {
            variant = "default",
            number = "",
            className = "",
          } = context.args;

          root.render(
            React.createElement(
              "div",
              { style: { padding: "2rem" } },
              React.createElement(Indicator, { variant, number, className }),
            ),
          );
        }
      }, 0);

      return template;
    },
  ],
};

export default meta;
type Story = StoryObj<IndicatorArgs>;

export const Default: Story = {
  args: {
    variant: "default",
    number: "123",
  },
  render: () => renderReact(),
};

export const Small: Story = {
  args: {
    variant: "small",
  },
  render: () => renderReact(),
};

export const WithCustomNumber: Story = {
  args: {
    variant: "default",
    number: "99+",
  },
  render: () => renderReact(),
};
