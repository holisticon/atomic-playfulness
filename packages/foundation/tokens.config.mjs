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
      transform: (token) => {
        if (token.$type === "string") {
          return token.value;
        }

        // opacity values in figma range from 0 to 100
        if (
          token.$type === "dimension" &&
          token.id.toLowerCase().includes("opacity")
        ) {
          const sanitizedOpacity = Number(
            token.$value.replace(/[^\d,.]+/g, ""),
          ).toFixed(2);

          return Number(sanitizedOpacity) / 100;
        }

        // letter-spacing values in figma are decimals
        if (
          token.$type === "dimension" &&
          token.id.toLowerCase().includes("letter-spacing")
        ) {
          const sanitizedLetterSpacing = Number(
            token.$value.replace(/[^\d,.]+/g, ""),
          ).toFixed(2);

          return Number(sanitizedLetterSpacing);
        }

        return void 0;
      },
    }),
  ],
};
