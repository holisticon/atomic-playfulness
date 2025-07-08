import type { StorybookConfig } from "@storybook/web-components-vite";
import { readFileSync } from "fs";

const spriteSvg = readFileSync("../../node_modules/lucide-static/sprite.svg");

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  core: { disableTelemetry: true },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.ts"],
  addons: ["storybook-addon-pseudo-states", "@storybook/addon-docs"],
  previewBody: (body) => `${body}<svg style="display: none">${spriteSvg}</svg>`,
};

export default config;
