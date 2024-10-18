import pluginCSS, { makeNameGenerator } from "@cobalt-ui/plugin-css";

/** @type {import("@cobalt-ui/core").Config} */
export default {
  tokens: "./atomic-playfulness.tokens.json",
  outDir: "./dist",
  plugins: [
    pluginCSS({
      generateName: makeNameGenerator(undefined, "hap"),
      transform: (token) => (token.$type === "string" ? token.value : void 0),
    }),
  ],
};
