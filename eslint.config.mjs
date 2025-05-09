import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";

export default tsEslint.config(
  {
    ignores: ["**/dist", "packages/foundation/atomic-playfulness.tokens.json"],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        // Often types are computed and expanded in editor previews,
        // which can lead to verbose and hard-to-understand type signatures.
        // Interfaces keep their name in previews, which can be used to clarify
        // previews by using interfaces that only extend a type.
        { allowInterfaces: "with-single-extends" },
      ],
    },
  },
);
