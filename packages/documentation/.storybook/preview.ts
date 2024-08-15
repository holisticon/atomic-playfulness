import "@holisticon/atomic-playfulness-foundation/es-klarheit.css";
import "@holisticon/atomic-playfulness-foundation/tokens.css";
import "@holisticon/atomic-playfulness-foundation/typography.css";
import type { Preview } from "@storybook/web-components";
import { holisticonTheme } from "./theme.js";

const preview: Preview = {
  parameters: { docs: { theme: holisticonTheme } },
};

export default preview;
