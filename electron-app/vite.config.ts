import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/main.ts"),
        resolve(__dirname, "src/preload.ts"),
        resolve(__dirname, ".electron-builder.config.ts"),
      ],
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron", "electron-builder", /node:.*/],
    },
  },
});
