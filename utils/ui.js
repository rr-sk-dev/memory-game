import { breakpoints, levels } from "../configs/config.js";
import { container, device, flipCard, level, onLevelSelect } from "../index.js";
import { getData } from "./data.js";

/** Main Menu **/
export function generateMenu() {
  // Generate the element
  const menuElem = document.createElement("div");
  menuElem.classList.add("menu");

  const availableLevels = Object.keys(levels);

  // Menu buttons
  for (let i = 0; i < availableLevels.length; i++) {
    // Create the button
    const buttonElem = document.createElement("button");
    buttonElem.innerText = availableLevels[i];

    // Setup event listener
    buttonElem.addEventListener("click", onLevelSelect);

    // Append it to the menu
    menuElem.appendChild(buttonElem);
  }

  container.appendChild(menuElem);
}

export function removeMenu() {
  const menuElem = document.querySelector(".menu");
  menuElem.classList.remove("menu");
  menuElem.style.display = "none";
}

export function removeBoard() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let child = card.lastElementChild;

    while (child) {
      card.removeChild(child);
      child = card.lastElementChild;
    }

    card.remove();
  });
}

/** Cards Board **/
export function generateBoard() {
  // Set container's width
  container.style["width"] = `calc((${breakpoints[device].width} + ${
    breakpoints[device].margin
  } * 2) * ${level.schema.split("x")[0]})`;

  const data = getData(level.numberOfCards / 2);

  data.forEach((item) => {
    // Create HTML Elements
    const cardElem = document.createElement("div");
    const frontElem = document.createElement("img");
    const backElem = document.createElement("div");

    // Add css classes
    cardElem.classList.add("card");
    frontElem.classList.add("front");
    backElem.classList.add("back");

    // Apply csss styles based on the current device
    cardElem.style.width = breakpoints[device].width;
    cardElem.style.height = breakpoints[device].height;
    cardElem.style["margin-bottom"] = breakpoints[device].margin;

    // Add event listener for card flip
    cardElem.addEventListener("click", flipCard);

    // Attach info to the cards
    cardElem.setAttribute("name", item.name);
    frontElem.src = item.imgSrc;

    // Append front and back to the card
    cardElem.appendChild(frontElem);
    cardElem.appendChild(backElem);

    // Append the card to the container
    container.appendChild(cardElem);
  });
}
