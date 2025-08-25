import { defineConfig, globalIgnores } from "eslint/config";
import config from "../../eslint.config.mjs";

export default defineConfig(
  globalIgnores(["test-results", "playwright-report"]),
  config,
);
