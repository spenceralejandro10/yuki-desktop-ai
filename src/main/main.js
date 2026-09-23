const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

let win;
function createWindow() {
  const area = screen.getPrimaryDisplay().workArea;
  win = new BrowserWindow({
    width: area.width,
    height: area.height,
    x: area.x,
    y: area.y,
    transparent: true,
    frame: false,
    resizable: false,
    hasShadow: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    webPreferences: { preload: path.join(__dirname, "preload.js"), contextIsolation: true }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, "../renderer/index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
