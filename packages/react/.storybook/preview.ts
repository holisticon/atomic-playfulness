import "@holisticon/hap-foundation/atomic-playfulness.css";
import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: { codePanel: true },
  },
};

export default preview;
