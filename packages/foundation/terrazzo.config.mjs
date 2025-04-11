import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import { makeCSSVar } from "@terrazzo/token-tools/css";

export default defineConfig({
  tokens: ["./atomic-playfulness.tokens.json"],
  outDir: "./dist",
  plugins: [
    css({
      filename: "tokens.css",
      variableName: (token) => {
        let name = makeCSSVar(token.id, { prefix: "hap" });
        name = name.replace("hap-tokens", "hap");
        return name;
      },
      transform: (token) => {
        if (
          isPrimitiveTokenOfType(token, "font-family") &&
          !token.$value.includes(", sans-serif")
        ) {
          return `${token.$value}, sans-serif`;
        }

        return void 0;
      },
    }),
  ],
});

function isPrimitiveTokenOfType(token, type) {
  return (
    token.id.toLowerCase().includes("primitives") &&
    token.id.toLowerCase().includes(type)
  );
}
