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
      createIcons({ icons });
    }, 0);

    return story(ctx);
  },
};

export default preview;
