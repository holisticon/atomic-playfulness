import type { StorybookConfig } from "@storybook/web-components-vite";
import { readFileSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

function getFilePath(file: string): string {
  return fileURLToPath(import.meta.resolve(file));
}

function getPackagePath(packageName: string): string {
  return dirname(getFilePath(packageName + "/package.json"));
}

const spriteSvg = readFileSync(getFilePath("lucide-static/sprite.svg"));

const config: StorybookConfig = {
  framework: getPackagePath("@storybook/web-components-vite"),
  core: { disableTelemetry: true },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.ts"],
  addons: [
    getPackagePath("storybook-addon-pseudo-states"),
    getPackagePath("@storybook/addon-docs"),
  ],
  previewBody: (body) => `${body}<svg style="display: none">${spriteSvg}</svg>`,
};

export default config;
