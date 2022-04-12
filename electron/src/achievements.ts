import greenworks from "../lib/greenworks";
import log from "electron-log";
import { GameBrowserWindow } from "./@types/global";

export async function enableAchievementsInterval(gameWindow: GameBrowserWindow): Promise<void> {
  // If the Steam API could not be initialized on game start, we'll abort this.
  if (global.greenworksError) return;

  // This is backward but the game fills in an array called `document.achievements` and we retrieve it from
  // here. Hey if it works it works.
  const steamAchievements = greenworks.getAchievementNames();
  log.silly(`All Steam achievements ${JSON.stringify(steamAchievements)}`);
  const playerAchieved = (await Promise.all(steamAchievements.map(checkSteamAchievement))).filter((name) => !!name);
  log.debug(`Player has Steam achievements ${JSON.stringify(playerAchieved)}`);
  const intervalID = window.setInterval(async () => {
    try {
      const playerAchievements = await gameWindow.webContents.executeJavaScript("document.achievements");
      for (const ach of playerAchievements) {
        if (!steamAchievements.includes(ach)) continue; // Don't try activating achievements that don't exist Steam-side
        if (playerAchieved.includes(ach)) continue; // Don't spam achievements that have already been recorded
        log.info(`Granting Steam achievement ${ach}`);
        greenworks.activateAchievement(ach, () => undefined);
        playerAchieved.push(ach);
      }
    } catch (error) {
      log.error(error);

      // The interval probably did not get cleared after a window kill
      log.warn("Clearing achievements timer");
      clearInterval(intervalID);
      return;
    }
  }, 1000);
  gameWindow.achievementsIntervalID = intervalID;
}

function checkSteamAchievement(name: string) {
  return new Promise((resolve) => {
    greenworks.getAchievement(
      name,
      (playerHas) => resolve(playerHas ? name : ""),
      (err) => {
        log.warn(`Failed to get Steam achievement ${name} status: ${err}`);
        resolve("");
      },
    );
  });
}

export function disableAchievementsInterval(window: GameBrowserWindow): void {
  if (window.achievementsIntervalID) {
    clearInterval(window.achievementsIntervalID);
  }
}
