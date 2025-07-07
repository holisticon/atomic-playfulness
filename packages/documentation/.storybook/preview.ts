import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/web-components-vite";
import { holisticonTheme } from "./theme.js";

const preview: Preview = {
  parameters: {
    docs: { theme: holisticonTheme },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundation",
          "Design Tokens",
          "Elements",
          "Tailwind",
        ],
      },
    },
  },
};

export default preview;
