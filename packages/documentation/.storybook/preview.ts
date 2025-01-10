import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/web-components";
import { html } from "lit";
import { holisticonTheme } from "./theme.js";

const preview: Preview = {
  parameters: {
    docs: { theme: holisticonTheme },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: ["Introduction", "Foundation", "Design Tokens"],
      },
    },
  },
  globalTypes: {
    mode: {
      description: "Theme mode to apply to the canvas.",
      toolbar: {
        title: "Mode",
        icon: "photo",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: (story, context) => {
    const mode = context.globals["mode"] ?? "light";
    document.documentElement.setAttribute("data-mode", mode);
    return html`
      <style>
        body {
          background-color: var(--hap-color-background-neutral);
        }
      </style>
      ${story()}
    `;
  },
};

export default preview;
