import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/web-components-vite";
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
          "Elements",
          "Tailwind",
          "Examples",
        ],
      },
    },
  },
};

export default preview;
