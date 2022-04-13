import { BrowserWindow } from "electron";

export type GameBrowserWindow = BrowserWindow & {
  unresponsiveHandler: () => void;
  achievementsIntervalID: number | undefined;
}

export type AppHandlersFunctions = {
  stopProcess: () => void;
  createWindow: () => void;
}

// It seems const or let do not work for globalThis
/* eslint-disable no-var */
declare global {
  var appHandlers: AppHandlersFunctions
  var greenworksError: string
}

export {};
