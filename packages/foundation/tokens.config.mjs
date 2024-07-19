import pluginCSS, { makeNameGenerator } from "@cobalt-ui/plugin-css";
import pluginJS from "@cobalt-ui/plugin-js";

/** @type {import("@cobalt-ui/core").Config} */
export default {
  tokens: "./atomic-playfulness.tokens.json",
  outDir: "./dist",
  plugins: [
    pluginCSS({
      generateName: makeNameGenerator(undefined, "hap"),
    }),
    pluginJS({ meta: false }),
  ],
};
