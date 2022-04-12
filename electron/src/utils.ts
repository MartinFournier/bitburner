/* eslint-disable @typescript-eslint/no-var-requires */
import { app, dialog, shell, BrowserWindow } from "electron";
import log from "electron-log";

import * as achievements from "./achievements";
import * as api from "./apiServer";

import Config from "electron-store";
const config = new Config();

export function reloadAndKill(window: BrowserWindow, killScripts: boolean): void {
  const setStopProcessHandler = global.appHandlers.stopProcess;
  const createWindowHandler = global.appHandlers.createWindow;

  log.info("Reloading & Killing all scripts...");
  setStopProcessHandler(app, window, false);

  achievements.disableAchievementsInterval(window);
  api.disable();

  window.webContents.forcefullyCrashRenderer();
  window.on("closed", () => {
    // Wait for window to be closed before opening the new one to prevent race conditions
    log.debug("Opening new window");
    createWindowHandler(killScripts);
  });

  window.close();
}

export function promptForReload(window: BrowserWindow): void {
  detachUnresponsiveAppHandler(window);
  dialog
    .showMessageBox({
      type: "error",
      title: "Bitburner > Application Unresponsive",
      message: "The application is unresponsive, possibly due to an infinite loop in your scripts.",
      detail:
        " Did you forget a ns.sleep(x)?\n\n" +
        "The application will be restarted for you, do you want to kill all running scripts?",
      buttons: ["Restart", "Cancel"],
      defaultId: 0,
      checkboxLabel: "Kill all running scripts",
      checkboxChecked: true,
      noLink: true,
    })
    .then(({ response, checkboxChecked }) => {
      if (response === 0) {
        reloadAndKill(window, checkboxChecked);
      } else {
        attachUnresponsiveAppHandler(window);
      }
    });
}

export function attachUnresponsiveAppHandler(window: GameBrowserWindow) : void{
  window.unresponsiveHandler = () => promptForReload(window);
  window.on("unresponsive", window.unresponsiveHandler);
}

export function detachUnresponsiveAppHandler(window: BrowserWindow): void {
  window.off("unresponsive", window.unresponsiveHandler);
}

export function showErrorBox(title: string, error: Error): void {
  dialog.showErrorBox(title, `${error.name}\n\n${error.message}`);
}

export function exportSaveFromIndexedDb(): Promise<void> {
  return new Promise((resolve) => {
    const dbRequest = indexedDB.open("bitburnerSave");
    dbRequest.onsuccess = () => {
      const db = dbRequest.result;
      const transaction = db.transaction(["savestring"], "readonly");
      const store = transaction.objectStore("savestring");
      const request = store.get("save");
      request.onsuccess = () => {
        const file = new Blob([request.result], { type: "text/plain" });
        const a = document.createElement("a");
        const url = URL.createObjectURL(file);
        a.href = url;
        a.download = "save.json";
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          resolve();
        }, 0);
      };
    };
  });
}

export async function exportSave(window: BrowserWindow): Promise<void> {
  await window.webContents.executeJavaScript(`${exportSaveFromIndexedDb.toString()}; exportSaveFromIndexedDb();`, true);
}

export async function writeTerminal(window: BrowserWindow, message: string, type = null) : Promise<void>{
  await window.webContents.executeJavaScript(`window.appNotifier.terminal("${message}", "${type}");`, true);
}

export async function writeToast(window: BrowserWindow, message: string, type = "info", duration = 2000): Promise<void> {
  await window.webContents.executeJavaScript(`window.appNotifier.toast("${message}", "${type}", ${duration});`, true);
}

export function openExternal(url: string): void {
  shell.openExternal(url);
  global.app_playerOpenedExternalLink = true;
}

export function getZoomFactor(): number {
  const configZoom = config.get("zoom", 1);
  return configZoom;
}

export function setZoomFactor(window: BrowserWindow, zoom?: number): void{
  if (!zoom) {
    zoom = 1;
  } else {
    config.set("zoom", zoom);
  }
  window.webContents.setZoomFactor(zoom);
}
