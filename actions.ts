import type { ActionSpaceDefinition } from "./game";

export const ALL_ACTIONDEFS: ActionSpaceDefinition[] = [
  {
    name: "Building",
    starting: true,
    cost: [
      {
        resource: "Wood",
        amount: 2
      },
      {
        resource: "Grain",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Builds",
        amount: 1
      }
    ]
  },
  {
    name: "Woodcutting",
    starting: true,
    cost: [],
    gain: [
      {
        resource: "Wood",
        amount: 2
      }
    ]
  },
  {
    name: "Planting",
    starting: true,
    cost: [],
    gain: [
      {
        resource: "Grain",
        amount: 1
      }
    ]
  },
  {
    name: "Farming",
    cost: [
      {
        resource: "Wood",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Grain",
        amount: 2
      }
    ]
  },
  {
    name: "Digging",
    cost: [],
    gain: [
      {
        resource: "Stone",
        amount: 1
      }
    ]
  },
  {
    name: "Foraging",
    cost: [],
    gain: [],
    randomGain: [
      {
        resource: "Wood",
        amount: 2
      },
      {
        resource: "Grain",
        amount: 2
      },
      {
        resource: "Stone",
        amount: 2
      }
    ]
  },
  {
    name: "Stonework",
    cost: [
      {
        resource: "Stone",
        amount: 2
      }
    ],
    gain: [
      {
        resource: "Builds",
        amount: 1
      }
    ]
  },
  {
    name: "Carving",
    cost: [
      {
        resource: "Stone",
        amount: 2
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 1
      }
    ]
  },
  {
    name: "Fishing",
    cost: [
      {
        resource: "Wood",
        amount: 1
      }
    ],
    gain: [],
    randomGain: [
      {
        resource: "Fish",
        amount: 1
      },
      {
        resource: "Fish",
        amount: 2
      },
      {
        resource: "Fish",
        amount: 3
      }
    ]
  },
  {
    name: "Cooking",
    cost: [
      {
        resource: "Fish",
        amount: 1
      },
      {
        resource: "Grain",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 2
      }
    ]
  },
  {
    name: "Pond",
    cost: [
      {
        resource: "Fish",
        amount: 4
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 2
      }
    ]
  },
  {
    name: "Stew",
    cost: [
      {
        resource: "Fish",
        amount: 2
      },
      {
        resource: "Mushroom",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 4
      }
    ]
  },
  {
    name: "Rose Picking",
    cost: [],
    gain: [],
    randomGain: [
      {
        resource: "Rose",
        amount: 0
      },
      {
        resource: "Rose",
        amount: 1
      }
    ]
  },
  {
    name: "Rose Viewing",
    cost: [
      {
        resource: "Rose",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 2
      }
    ]
  },
  {
    name: "'Shrooms",
    cost: [
      {
        resource: "Mushroom",
        amount: 1
      }
    ],
    gain: [],
    randomGain: [
      {
        resource: "Points",
        amount: -1
      },
      {
        resource: "Points",
        amount: 3
      }
    ]
  },
  {
    name: "Composting",
    cost: [
      {
        resource: "Wood",
        amount: 3
      }
    ],
    gain: [
      {
        resource: "Mushroom",
        amount: 1
      }
    ]
  },
  {
    name: "Breadmaking",
    cost: [
      {
        resource: "Grain",
        amount: 3
      }
    ],
    gain: [
      {
        resource: "Builds",
        amount: 1
      },
      {
        resource: "Points",
        amount: 2
      }
    ]
  },
  {
    name: "Irrigation",
    cost: [
      {
        resource: "Grain",
        amount: 1
      },
      {
        resource: "Stone",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Grain",
        amount: 3
      }
    ]
  },
  {
    name: "Forestry",
    cost: [
      {
        resource: "Stone",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Wood",
        amount: 3
      }
    ]
  },
  {
    name: "Cookies",
    cost: [
      {
        resource: "Wood",
        amount: 1
      },
      {
        resource: "Grain",
        amount: 1
      },
      {
        resource: "Stone",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Cookie",
        amount: 2
      }
    ]
  },
  {
    name: "Cookie Market",
    cost: [
      {
        resource: "Cookie",
        amount: 1
      }
    ],
    randomGain: [
      {
        resource: "Rose",
        amount: 1
      },
      {
        resource: "Fish",
        amount: 2
      },
      {
        resource: "Mushroom",
        amount: 1
      }
    ],
    gain: []
  },
  {
    name: "Cookie Industry",
    cost: [
      {
        resource: "Cookie",
        amount: 3
      }
    ],
    randomGain: [
      {
        resource: "Points",
        amount: 3
      },
      {
        resource: "Builds",
        amount: 2
      },
      {
        resource: "Time",
        amount: 1
      }
    ],
    gain: []
  },
  {
    name: "Nature Appreciation",
    cost: [
      {
        resource: "Wood",
        amount: 10
      },
      {
        resource: "Stone",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 5
      },
      {
        resource: "Time",
        amount: 1
      }
    ]
  },
  {
    name: "Feast",
    cost: [
      {
        resource: "Fish",
        amount: 3
      },
      {
        resource: "Mushroom",
        amount: 2
      },
      {
        resource: "Cookie",
        amount: 1
      }
    ],
    gain: [
      {
        resource: "Points",
        amount: 12
      }
    ]
  }
] as const;