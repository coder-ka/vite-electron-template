import type { Configuration } from "electron-builder";
import { version } from "./public/package.json";

export default async function (): Promise<Configuration> {
  return {
    directories: {
      output: "dist",
      buildResources: "buildResources",
    },
    extraMetadata: {
      version,
    },

    // Specify linux target just for disabling snap compilation
    linux: {
      target: "deb",
    },

    mac: {
      category: "public.app-category.developer-tools",
    },
  };
}
