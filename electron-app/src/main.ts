import { app, BrowserWindow } from "electron";
import * as path from "node:path";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
    },
  });

  // win.loadFile("index.html");
  if (import.meta.env.MODE === "development") {
    win.loadURL(import.meta.env.VITE_PAGE_URL);
  } else {
    win.loadFile(import.meta.env.VITE_PAGE_URL);
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
