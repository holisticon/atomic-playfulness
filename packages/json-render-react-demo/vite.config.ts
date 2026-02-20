import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const spriteSvg = readFileSync(
  fileURLToPath(import.meta.resolve("lucide-static/sprite.svg")),
  "utf-8",
);

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  define: {
    __ICON_SPRITE__: JSON.stringify(spriteSvg),
  },
});
