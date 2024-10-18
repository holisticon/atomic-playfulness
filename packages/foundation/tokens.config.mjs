import pluginCSS, {
  defaultNameGenerator,
  makeNameGenerator,
} from "@cobalt-ui/plugin-css";

const prefix = "hap";

/** @type {import("@cobalt-ui/core").Config} */
export default {
  tokens: "./atomic-playfulness.tokens.json",
  outDir: "./dist",
  plugins: [
    pluginCSS({
      generateName: makeNameGenerator((id) => {
        // Remove "Tokens" from variable names for better usage and to match Figma's inspector
        return defaultNameGenerator(id, prefix)
          .toLowerCase()
          .replace("hap-tokens", "hap");
      }, prefix),
      transform: (token) => (token.$type === "string" ? token.value : void 0),
    }),
  ],
};
