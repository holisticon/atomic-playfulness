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
        // letter-spacing values in figma are float decimals
        if (
          token.$type === "dimension" &&
          isPrimitiveTokenOfType(token, "letter-spacing")
        ) {
          return Number(token.$value.value).toFixed(2);
        }

        if (
          isPrimitiveTokenOfType(token, "font-family") &&
          !token.$value.includes(", sans-serif")
        ) {
          return `${token.$value}, sans-serif`;
        }

        // opacity is wrongly exported as pixel values, e.g. 30px.
        if (
          token.$type === "dimension" &&
          isPrimitiveTokenOfType(token, "opacity")
        ) {
          return Number(token.$value.value / 100).toFixed(2);
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
