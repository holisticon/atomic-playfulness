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
    }),
  ],
});
