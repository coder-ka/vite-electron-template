import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/main.ts"),
        resolve(__dirname, "src/preload.ts"),
      ],
      formats: ["cjs"],
    },
    rollupOptions: {
      external: ["electron", /node:.*/],
    },
  },
});
