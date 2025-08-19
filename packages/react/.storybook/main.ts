import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "node:path";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  framework: getAbsolutePath("@storybook/react-vite"),
  typescript: {
    // Better control inference for string literals.
    reactDocgen: "react-docgen-typescript",
  },
  core: { disableTelemetry: true },
  stories: ["../src/**/*.stories.tsx"],
};
export default config;
