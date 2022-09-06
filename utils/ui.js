import { breakpoints, levels } from "../configs/config.js";
import { container, device, flipCard, level, onLevelSelect } from "../index.js";

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

/** Cards Board **/
export function generateBoard() {
  // Set container's width
  container.style["width"] = `calc((${breakpoints[device].width} + ${
    breakpoints[device].margin
  } * 2) * ${level.schema.split("x")[0]})`;

  // Generate cards
  for (let i = 0; i < level.numberOfCards; i++) {
    const cardElem = document.createElement("div");
    cardElem.classList.add("card");

    cardElem.style.width = breakpoints[device].width;
    cardElem.style.height = breakpoints[device].height;
    cardElem.style["margin-bottom"] = breakpoints[device].margin;

    cardElem.addEventListener("click", flipCard);

    const frontElem = document.createElement("img");
    frontElem.src = "../images/cover.jpg";
    frontElem.classList.add("front");

    const backElem = document.createElement("img");
    backElem.src = "../images/orange.jpg";
    backElem.classList.add("back");

    cardElem.appendChild(frontElem);
    cardElem.appendChild(backElem);

    container.appendChild(cardElem);
  }
}
