export const levels = {
  EASY: {
    numberOfCards: 12,
    schema: "4x3",
    sizes: {},
  },
  MEDIUM: {
    numberOfCards: 20,
    schema: "5x4",
    sizes: {},
  },
  HARD: {
    numberOfCards: 36,
    schema: "6x6",
    sizes: {},
  },
};

export const breakpoints = {
  small: {
    value: "280px",
    width: "40px",
    height: "70px",
    margin: "2px",
  },
  mobile: {
    value: "600px",
    width: "50px",
    height: "80px",
    margin: "3px",
  },
  laptop: {
    value: "992",
    width: "80px",
    height: "110px",
    margin: "5px",
  },
};

export function setCurrentDevice() {
  const keys = Object.keys(breakpoints);

  for (let i = 0; i < keys.length; i++) {
    const name = keys[i];
    const breakpoint = breakpoints[name];

    const maxWidthMediaQuery = window.matchMedia(
      `(max-width: ${breakpoint.value})`
    );

    if (maxWidthMediaQuery.matches) {
      return name;
    }
  }
}
