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
  decorators: (story, ctx) => {
    setTimeout(() => {
      // Toggles small icons before lucide is called. Doing it declaratively in
      // the icon render template does not work for some reason...
      const iconElements = document.querySelectorAll("[data-lucide]");
      for (const icon of Array.from(iconElements)) {
        icon.classList.toggle(
          "hap-icon--small",
          ctx.args["iconSize"] === "small",
        );
      }
      createIcons({ icons });
    }, 0);

    return story(ctx);
  },
};

export default preview;
