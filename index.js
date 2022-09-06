import { levels, setCurrentDevice } from "./configs/config.js";
import { generateBoard, generateMenu, removeMenu } from "./utils/ui.js";

export let device = setCurrentDevice();

/** HTML Elements **/
export const container = document.getElementById("container");

export let level = null;

export function onLevelSelect(ev) {
  // Set the choosen level
  level = levels[ev.target.innerText];

  // Remove the menu
  removeMenu();

  // Setup the board based on the selected level
  generateBoard();
}

function start() {
  // Generate the menu
  generateMenu();
}

start();
