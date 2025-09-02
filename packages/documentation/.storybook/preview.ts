import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/web-components-vite";
import { html } from "lit";
import { holisticonTheme } from "./theme.js";

const preview: Preview = {
  parameters: {
    docs: { theme: holisticonTheme, codePanel: true },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundation",
          "Design Tokens",
          "layout",
          "elements",
          "Tailwind",
          "Examples",
        ],
      },
    },
  },
  decorators: [
    (Story) => {
      return html`<div style="color-scheme: light">${Story()}</div>`;
    },
  ],
};

export default preview;
