import { createServer, build } from "vite";
import { spawn, ChildProcess } from "node:child_process";
import { fileURLToPath } from "url";
import electronPath from "electron";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

let electronApp: ChildProcess | null = null;

createServer({
  root: `${__dirname}/../../page`,
}).then(async (server) => {
  await server.listen();

  if (server.resolvedUrls?.local) {
    const pageURL = server.resolvedUrls.local[0];

    process.env.VITE_PAGE_URL = pageURL;

    build({
      root: `${__dirname}/..`,
      build: {
        watch: {},
      },
      mode: "development",
      plugins: [
        {
          name: "restart-electron",
          closeBundle() {
            /** Kill electron if process already exist */
            if (electronApp !== null) {
              electronApp.removeListener("exit", process.exit);
              electronApp.kill("SIGINT");
              electronApp = null;
            }

            /** Spawn new electron process */
            electronApp = spawn(
              String(electronPath),
              ["--inspect", `${__dirname}/../dist/main.cjs`],
              {
                stdio: "inherit",
              }
            );

            /** Stops the watch script when the application has been quit */
            electronApp.addListener("exit", process.exit);
          },
        },
      ],
    });
  }
});
