import { levels, setCurrentDevice } from "./configs/config.js";
import {
  generateBoard,
  generateMenu,
  removeBoard,
  removeMenu
} from "./utils/ui.js";

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

const matches = [];

export function flipCard() {
  this.classList.toggle("flip");

  this.classList.add("flipped"); // doesn't exists, but it's a helper

  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    // Check if it is a match
    const [elem1, elem2] = flippedCards;
    const elem1Name = elem1.getAttribute("name");
    const elem2Name = elem2.getAttribute("name");

    if (elem1Name === elem2Name) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });

      matches.push(elem1Name);

      if (matches.length === level.numberOfCards / 2) {
        removeBoard();
        setTimeout(generateMenu, 3000);
      }
    } else {
      flippedCards.forEach((card) =>
        setTimeout(() => {
          card.classList.remove("flipped");
          card.classList.toggle("flip");
        }, 900)
      );
    }
  }
}

function start() {
  // Generate the menu
  generateMenu();
}

start();
