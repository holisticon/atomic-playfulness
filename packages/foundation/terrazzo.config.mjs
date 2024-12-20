import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import { makeCSSVar } from "@terrazzo/token-tools/css";

export default defineConfig({
  tokens: ["./atomic-playfulness.tokens.json"],
  outDir: "./dist",
  plugins: [
    css({
      filename: "tokens.css",
      variableName: (id) => {
        let name = makeCSSVar(id, { prefix: "hap" });
        name = name.replace("hap-tokens", "hap");
        return name;
      },
      transform: (token) => {
        if (token.$type === "string") {
          return token.$value;
        }

        // opacity values in figma range from 0 to 100
        if (
          token.$type === "dimension" &&
          token.id.toLowerCase().includes("opacity")
        ) {
          return `${token.$value.value / 100}`;
        }

        // letter-spacing values in figma are float decimals
        if (
          token.$type === "dimension" &&
          token.id.toLowerCase().includes("letter-spacing")
        ) {
          return Number(token.$value.value).toFixed(2);
        }

        return void 0;
      },
    }),
  ],
});
