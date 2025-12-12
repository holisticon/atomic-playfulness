// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
// import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import config from "../../eslint.config.mjs";

export default defineConfig(
  globalIgnores(["test-results", "playwright-report", "!.storybook"]),
  config,
);
