const images = [
  { imgSrc: "./images/apple.jpg", name: "apple" },
  { imgSrc: "./images/avocato.jpg", name: "avocato" },
  { imgSrc: "./images/banana.jpg", name: "banana" },
  { imgSrc: "./images/blueberry.jpg", name: "blueberry" },
  { imgSrc: "./images/cherry.jpg", name: "cherry" },
  { imgSrc: "./images/dragonfruit.jpg", name: "dragonfruit" },
  { imgSrc: "./images/grapes.jpg", name: "grapes" },
  { imgSrc: "./images/lemon.jpg", name: "lemon" },
  { imgSrc: "./images/lime.jpg", name: "lime" },
  { imgSrc: "./images/orange.jpg", name: "orange" },
  { imgSrc: "./images/papaya.jpg", name: "papaya" },
  { imgSrc: "./images/peach.jpg", name: "peach" },
  { imgSrc: "./images/pear.jpg", name: "pear" },
  { imgSrc: "./images/pineapple.jpg", name: "pineapple" },
  { imgSrc: "./images/pomegranate.jpg", name: "pomegranate" },
  { imgSrc: "./images/raspberry.jpg", name: "raspberry" },
  { imgSrc: "./images/strawberry.jpg", name: "strawberry" },
  { imgSrc: "./images/watermelon.jpg", name: "watermelon" },
];

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomize(size, src = images) {
  const idxs = [];
  const data = [];

  while (data.length < size) {
    const idx = randomInteger(0, src.length - 1);

    if (idxs.includes(idx)) continue;

    idxs.push(idx);
    data.push(src[idx]);
  }

  return data;
}

export function getData(size) {
  let data = randomize(size);

  return [...data, ...randomize(size, data)];
}
