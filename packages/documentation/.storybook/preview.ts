import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/web-components";
import { holisticonTheme } from "./theme.js";

const preview: Preview = {
  parameters: { docs: { theme: holisticonTheme } },
};

export default preview;
