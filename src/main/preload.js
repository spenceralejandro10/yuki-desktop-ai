const { contextBridge } = require("electron");
contextBridge.exposeInMainWorld("yukiDesktop", { platform: process.platform });
