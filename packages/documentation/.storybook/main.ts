import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  core: { disableTelemetry: true },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.ts"],
  addons: ["@storybook/addon-essentials"],
};

export default config;
