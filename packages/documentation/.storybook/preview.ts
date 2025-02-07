import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/web-components";
import { createIcons, icons } from "lucide";
import { holisticonTheme } from "./theme.js";

const preview: Preview = {
  parameters: {
    docs: { theme: holisticonTheme },
    options: {
      storySort: {
        order: ["Introduction", "Foundation", "Design Tokens"],
      },
    },
  },
  decorators: [
    (storyFn) => {
      const story = storyFn(); // Render the story

      // Ensure icons are initialized after rendering
      setTimeout(() => {
        createIcons({
          icons,
          attrs: {
            "stroke-width": 1.5,
            "stroke-opacity": 0.8,
          },
        });
      }, 0);

      return story;
    },
  ],
};

export default preview;
