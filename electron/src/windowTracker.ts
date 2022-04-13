/* eslint-disable @typescript-eslint/no-var-requires */
import { screen } from "electron";
import log from "electron-log";
import debounce from "lodash/debounce";
import Config from "electron-store";
const config = new Config();

// https://stackoverflow.com/a/68627253
export const windowTracker = (windowName) => {
  let window, windowState;

  const setBounds = () => {
    // Restore from appConfig
    if (config.has(`window.${windowName}`)) {
      windowState = config.get(`window.${windowName}`);
      return;
    }

    const size = screen.getPrimaryDisplay().workAreaSize;

    // Default
    windowState = {
      x: undefined,
      y: undefined,
      width: size.width,
      height: size.height,
      isMaximized: true,
    };
  };

  const saveState = debounce(() => {
    if (!window || window.isDestroyed()) {
      log.silly(`Saving window state failed because window is not available`);
      return;
    }

    if (!windowState.isMaximized) {
      windowState = window.getBounds();
    }

    windowState.isMaximized = window.isMaximized();
    log.silly(`Saving window.${windowName} to configs`);
    config.set(`window.${windowName}`, windowState);
    log.silly(windowState);
  }, 1000);

  const track = (win) => {
    window = win;
    ["resize", "move", "close"].forEach((event) => {
      win.on(event, saveState);
    });
  };

  setBounds();

  return {
    state: {
      x: windowState.x,
      y: windowState.y,
      width: windowState.width,
      height: windowState.height,
      isMaximized: windowState.isMaximized,
    },
    track,
  };
};
