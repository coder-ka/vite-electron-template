import { build } from "vite";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

process.env.VITE_PAGE_URL = "index.html";

Promise.all([
  build({
    root: `${__dirname}/../../page`,
    build: {
      outDir: `${__dirname}/../dist`,
    },
    base: "",
  }),
  build({
    root: `${__dirname}/..`,
  }),
]);
