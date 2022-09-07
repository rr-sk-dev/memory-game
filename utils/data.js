const images = [
  { name: "apple.jpg", count: 0 },
  { name: "avocato.jpg", count: 0 },
  { name: "banana.jpg", count: 0 },
  { name: "blueberry.jpg", count: 0 },
  { name: "cherry.jpg", count: 0 },
  { name: "dragonfruit.jpg", count: 0 },
  { name: "grapes.jpg", count: 0 },
  { name: "lemon.jpg", count: 0 },
  { name: "lime.jpg", count: 0 },
  { name: "orange.jpg", count: 0 },
  { name: "papaya.jpg", count: 0 },
  { name: "peach.jpg", count: 0 },
  { name: "pear.jpg", count: 0 },
  { name: "pineapple.jpg", count: 0 },
  { name: "pomegranate.jpg", count: 0 },
  { name: "raspberry.jpg", count: 0 },
  { name: "strawberry.jpg", count: 0 },
  { name: "watermelon.jpg", count: 0 },
];

export function getRandomElementFromList(list) {
  if (!Array.isArray(list) || !list?.length) {
    throw "Invalid List";
  }

  return list[Math.floor(Math.random() * list.length)];
}

export function getRandomImage() {
  const image = getRandomElementFromList(images);

  image.count += 1;

  if (image.count > 1) {
    return getRandomImage();
  }

  return image.name;
}

export function getRandomImagesList(size) {
  const list = [];

  for (let i = 0; i < size; i++) {
    list.push(getRandomImage());
  }

  return [...list, ...list];
}
