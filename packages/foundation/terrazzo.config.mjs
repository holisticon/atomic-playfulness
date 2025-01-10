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
      modeSelectors: [
        {
          mode: "Light",
          selectors: [
            "@media (prefers-color-scheme: light)",
            '[data-mode="light"]',
          ],
        },
        {
          mode: "Dark",
          selectors: [
            "@media (prefers-color-scheme: dark)",
            '[data-mode="dark"]',
          ],
        },
      ],
      transform: (token) => {
        // letter-spacing values in figma are float decimals
        if (
          token.$type === "dimension" &&
          token.id.toLowerCase().includes("primitives") &&
          token.id.toLowerCase().includes("letter-spacing")
        ) {
          return Number(token.$value.value).toFixed(2);
        }

        return void 0;
      },
    }),
  ],
});
