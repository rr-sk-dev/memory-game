/** Settings **/
export const settings = {
  // Device
  mobile: {
    screen: { "max-width": "400px" },
  },
  laptop: {
    screen: { "max-width": "1000px" },
  },
};

export const LEVEL = {
  EASY: {
    cards: {
      total: 12,
      dimensions: {
        mobile: {
          width: "80",
          height: "100",
          margin: "3",
        },
        laptop: {
          width: "80",
          height: "100",
          margin: "3",
        },
      },
    },
    dimensions: "4x3",
  },
  MEDIUM: {
    cards: {
      total: 20,
      dimensions: {
        mobile: {
          width: "80",
          height: "100",
          margin: "3",
        },
        laptop: {
          width: "80",
          height: "100",
          margin: "3",
        },
      },
    },
    dimensions: "5x4",
  },
  HARD: {
    cards: {
      total: 30,
      dimensions: {
        mobile: {
          width: "50",
          height: "70",
          margin: "3",
        },
        laptop: {
          width: "80",
          height: "100",
          margin: "3",
        },
      },
    },
    dimensions: "6x5",
  },
};
