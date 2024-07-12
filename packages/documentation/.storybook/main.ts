import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  core: { disableTelemetry: true },
  stories: ["../src/**/*.mdx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};

export default config;
