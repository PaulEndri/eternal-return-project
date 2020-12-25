import { IBasicItem } from '../sdk/src/interfaces/IBasicItem';

export const Items: Record<string, IBasicItem<string>> = {
  "Baseball": {
    "name": "Baseball",
    "href": "/Baseball",
    "requirements": [],
    "buildsInto": {},
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 12"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "1"
  },
  "Piano Wire": {
    "name": "Piano Wire",
    "href": "/Piano Wire",
    "requirements": [],
    "buildsInto": {
      "Electronic Parts": {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": null
      },
      "Dynamite": {
        "name": "Dynamite",
        "href": "/Dynamite",
        "image": null
      },
      "Mithril String": {
        "name": "Mithril String",
        "href": "/Mithril_String",
        "image": null
      },
      "Throwing Stars": {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": null
      },
      "Wooden Bow": {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      "Long Crossbow": {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": null
      },
      "AK-47": {
        "name": "AK-47",
        "href": "/AK-47",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Where did you find a piano?",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Stone": {
    "name": "Stone",
    "href": "/Stone",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Safety Helmet": {
        "name": "Safety Helmet",
        "href": "/Safety_Helmet",
        "image": null
      },
      "Glass Pieces": {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": null
      },
      "Powder of Life": {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": null
      },
      "White Powder": {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": null
      },
      "Heated Stone": {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": null
      },
      "Moonstone": {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": null
      },
      "Satisfaction": {
        "name": "Satisfaction",
        "href": "/Satisfaction",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "A stone that can be thrown or be used to make something.",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "Glass Bottle": {
    "name": "Glass Bottle",
    "href": "/Glass_Bottle",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Molotov Cocktail": {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": null
      },
      "Glass Pieces": {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": null
      },
      "Water Bottle": {
        "name": "Water Bottle",
        "href": "/Water_Bottle",
        "image": null
      },
      "Healing Potion": {
        "name": "Healing Potion",
        "href": "/Healing_Potion",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "A glass bottle that is good for throwing.",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "Starter Guitar": {
    "name": "Starter Guitar",
    "href": "/Starter_Guitar",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/",
    "requirements": [],
    "buildsInto": {
      "Golden Bridge": {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": null
      },
      "Single Coil Pickup": {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +5"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Single Coil Pickup": {
    "name": "Single Coil Pickup",
    "href": "/Single_Coil_Pickup",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/",
    "requirements": [
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Nocaster": {
        "name": "Nocaster",
        "href": "/Nocaster",
        "image": null
      },
      "Superstrat": {
        "name": "Superstrat",
        "href": "/Superstrat",
        "image": null
      },
      "Wild Horse": {
        "name": "Wild Horse",
        "href": "/Wild_Horse",
        "image": null
      },
      "Ruby Special": {
        "name": "Ruby Special",
        "href": "/Ruby_Special",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +8",
      "Attack Speed (%) +20%",
      "Extra Damage to Normal Attacks +2"
    ],
    "description": "Single coil guitars generally have a brighter, crisper output, and sound clearer.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Ruby Special": {
    "name": "Ruby Special",
    "href": "/Ruby_Special",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Ruby_Special.png/",
    "requirements": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Bohemian": {
        "name": "Bohemian",
        "href": "/Bohemian",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 20",
      "Max HP + 300",
      "Attack Speed (%) + 20%",
      "Extra Normal Attack Damage + 2"
    ],
    "description": "A unique guitar that is as red as a ruby.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Humbucker Pickup": {
    "name": "Humbucker Pickup",
    "href": "/Humbucker_Pickup",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9c/Humbucker_Pickup.png/",
    "requirements": [
      {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/"
      },
      {
        "name": "Sniping Scope",
        "href": "/Sniping_Scope",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Sniping_Scope.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Stairway to Heaven": {
        "name": "Stairway to Heaven",
        "href": "/Stairway_to_Heaven",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/"
      },
      {
        "name": "Sniping Scope",
        "href": "/Sniping_Scope",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Sniping_Scope.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +25",
      "Skill Amplification +15%",
      "Vision Range + 3"
    ],
    "description": "A guitar with dual coil pickups. It has a darker output.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "King-V": {
    "name": "King-V",
    "href": "/King-V",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/King-V.png/",
    "requirements": [
      {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Purple Haze": {
        "name": "Purple Haze",
        "href": "/Purple_Haze",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +13",
      "Skill Damage Increase +16%"
    ],
    "description": "This guitar has an unconventional V shape. Although it was sensational at release, it didn't see huge popularity.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Nocaster": {
    "name": "Nocaster",
    "href": "/Nocaster",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Nocaster.png/",
    "requirements": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Satisfaction": {
        "name": "Satisfaction",
        "href": "/Satisfaction",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +15",
      "Attack Speed (%) +20%",
      "Life Steal + 10%",
      "Extra Damage to Normal Attacks +15"
    ],
    "description": "The most used title in art is \"Untitled\". Isn't there an unsaid rule that says not to do that with guitar names?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Superstrat": {
    "name": "Superstrat",
    "href": "/Superstrat",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Superstrat.png/",
    "requirements": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Wonderful Tonight": {
        "name": "Wonderful Tonight",
        "href": "/Wonderful_Tonight",
        "image": null
      },
      "The Wall": {
        "name": "The Wall",
        "href": "/The_Wall",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +19",
      "Extra Damage to Normal Attacks +2",
      "Attack Speed (%) +15%"
    ],
    "description": "Collectively refers to the most famous types of guitars in the world.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Wild Horse": {
    "name": "Wild Horse",
    "href": "/Wild_Horse",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Wild_Horse.png/",
    "requirements": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Teen Spirit": {
        "name": "Teen Spirit",
        "href": "/Teen_Spirit",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +9",
      "Extra Damage to Normal Attacks + 6",
      "Attack Speed (%) +25%"
    ],
    "description": "If it follows in the footsteps of the performance it takes its name from, you can probably expect to be in front of a large audience with this one.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bohemian": {
    "name": "Bohemian",
    "href": "/Bohemian",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Bohemian.png/",
    "requirements": [
      {
        "name": "Ruby Special",
        "href": "/Ruby_Special",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Ruby_Special.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ruby Special",
        "href": "/Ruby_Special",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Ruby_Special.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 50",
      "Max HP + 380",
      "Attack Speed (%) + 20%",
      "Critical Strike Chance + 20%",
      "Extra Normal Attack Damage + 2"
    ],
    "description": "\"Bohemian\" was first used to describe a part of the Czech population, but it is now used to represent free spirits.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Stairway to Heaven": {
    "name": "Stairway to Heaven",
    "href": "/Stairway_to_Heaven",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Stairway_to_Heaven.png/",
    "requirements": [
      {
        "name": "Humbucker Pickup",
        "href": "/Humbucker_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9c/Humbucker_Pickup.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      },
      {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/"
      },
      {
        "name": "Sniper Scope",
        "href": "/Sniper_Scope",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Sniping_Scope.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Humbucker Pickup",
        "href": "/Humbucker_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9c/Humbucker_Pickup.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 52",
      "HP Regen (%) + 200%",
      "Skill Amplification + 20%",
      "Vision Range + 4"
    ],
    "description": "Heaven might be all bright and shiny, but we can't say the same for the stairway leading up to it. It might be covered in lead...",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Purple Haze": {
    "name": "Purple Haze",
    "href": "/Purple_Haze",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Purple_Haze.png/",
    "requirements": [
      {
        "name": "King-V",
        "href": "/King-V",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/King-V.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "King-V",
        "href": "/King-V",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/King-V.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 85",
      "Skill Damage Increase + 22%"
    ],
    "description": "Whether tomorrow is waiting for you, or if it's really the end of time... this island doesn't have the answer.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Satisfaction": {
    "name": "Satisfaction",
    "href": "/Satisfaction",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Satisfaction.png/",
    "requirements": [
      {
        "name": "Nocaster",
        "href": "/Nocaster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Nocaster.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Nocaster",
        "href": "/Nocaster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Nocaster.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power +30",
      "Attack Speed (%) +30%",
      "Life Steal + 10%",
      "Extra Damage to Normal Attacks + 12"
    ],
    "description": "The human nature of not being satisfied is what drives development. Humanity always blindly trusts evolution.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Wonderful Tonight": {
    "name": "Wonderful Tonight",
    "href": "/Wonderful_Tonight",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Wonderful_Tonight.png/",
    "requirements": [
      {
        "name": "Superstrat",
        "href": "/Superstrat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Superstrat.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Superstrat",
        "href": "/Superstrat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Superstrat.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 100",
      "Attack Speed (%) + 45%",
      "Extra Normal Attack Damage + 2"
    ],
    "description": "If it's late in the evening, and you're wondering what item to craft, try this one!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "The Wall": {
    "name": "The Wall",
    "href": "/The_Wall",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8a/The_Wall.png/",
    "requirements": [
      {
        "name": "Superstrat",
        "href": "/Superstrat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Superstrat.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Superstrat",
        "href": "/Superstrat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Superstrat.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 70",
      "Attack Speed (%) + 18%",
      "Extra Damage to Normal Attacks + 2"
    ],
    "description": "The test subjects on this island might as well just be, all in all, bricks in a wall.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Teen Spirit": {
    "name": "Teen Spirit",
    "href": "/Teen_Spirit",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Teen_Spirit.png/",
    "requirements": [
      {
        "name": "Wild Horse",
        "href": "/Wild_Horse",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Wild_Horse.png/"
      },
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      },
      {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Single_Coil_Pickup.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Wild Horse",
        "href": "/Wild_Horse",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Wild_Horse.png/"
      },
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power +10",
      "Attack Speed (%) +25%",
      "Extra Normal Attack Damage + 20"
    ],
    "description": "Humans shine the most as teens. This shining aura fades slowly, but inevitably, as times passes by.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Golden Bridge": {
    "name": "Golden Bridge",
    "href": "/Golden_Bridge",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Golden_Bridge.png/",
    "requirements": [
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Humbucker Pickup": {
        "name": "Humbucker Pickup",
        "href": "/Humbucker_Pickup",
        "image": null
      },
      "King-V": {
        "name": "King-V",
        "href": "/King-V",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Starter Guitar",
        "href": "/Starter_Guitar",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Starter_Guitar.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +8",
      "Skill Damage Increase +18%"
    ],
    "description": "Some people think that the more expensive it is, the better it sounds.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Nail": {
    "name": "Nail",
    "href": "/Nail",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Divine Dual Swords": {
        "name": "Divine Dual Swords",
        "href": "/Divine_Dual_Swords",
        "image": null
      },
      "Sword Stopper": {
        "name": "Sword Stopper",
        "href": "/Sword_Stopper",
        "image": null
      },
      "White Rhinos": {
        "name": "White Rhinos",
        "href": "/White_Rhinos",
        "image": null
      },
      "Gilded Quill Fan": {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": null
      },
      "Spiked Plank": {
        "name": "Spiked Plank",
        "href": "/Spiked_Plank",
        "image": null
      },
      "Goblin Bat": {
        "name": "Goblin Bat",
        "href": "/Goblin_Bat",
        "image": null
      },
      "Spiky Bouncy Ball": {
        "name": "Spiky Bouncy Ball",
        "href": "/Spiky_Bouncy_Ball",
        "image": null
      },
      "Composite Bow": {
        "name": "Composite Bow",
        "href": "/Composite_Bow",
        "image": null
      },
      "Sharper": {
        "name": "Sharper",
        "href": "/Sharper",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Try hammering some of these into a baseball bat and take out a monster.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Leather": {
    "name": "Leather",
    "href": "/Leather",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Leather Glove": {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": null
      },
      "Leather Armor": {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": null
      },
      "Leather Jacket": {
        "name": "Leather Jacket",
        "href": "/Leather_Jacket",
        "image": null
      },
      "Leather Shield": {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": null
      },
      "Bracer": {
        "name": "Bracer",
        "href": "/Bracer",
        "image": null
      },
      "Beretta M92F": {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": null
      },
      "Knee Pads": {
        "name": "Knee Pads",
        "href": "/Knee_Pads",
        "image": null
      },
      "Quiver": {
        "name": "Quiver",
        "href": "/Quiver",
        "image": null
      },
      "Black Stag Hammer": {
        "name": "Black Stag Hammer",
        "href": "/Black_Stag_Hammer",
        "image": null
      },
      "Sheath": {
        "name": "Sheath",
        "href": "/Sheath",
        "image": null
      },
      "M16A1": {
        "name": "M16A1",
        "href": "/M16A1",
        "image": null
      },
      "Combat Boots": {
        "name": "Combat Boots",
        "href": "/Combat_Boots",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Are there any beasts around? Leather is versitile and can be used in tons of different ways.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Turtle Shell": {
    "name": "Turtle Shell",
    "href": "/Turtle_Shell",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Bone Gauntlet": {
        "name": "Bone Gauntlet",
        "href": "/Bone_Gauntlet",
        "image": null
      },
      "Turtle Dobok": {
        "name": "Turtle Dobok",
        "href": "/Turtle_Dobok",
        "image": null
      },
      "Leather Shield": {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": null
      },
      "Herbal Medicine": {
        "name": "Herbal Medicine",
        "href": "/Herbal_Medicine",
        "image": null
      },
      "Thuan Thien": {
        "name": "Thuan Thien",
        "href": "/Thuan_Thien",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Reminds me of a sandbox I had as a kid.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Rubber": {
    "name": "Rubber",
    "href": "/Rubber",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Helm of Banneret": {
        "name": "Helm of Banneret",
        "href": "/Helm_of_Banneret",
        "image": null
      },
      "Diving Suit": {
        "name": "Diving Suit",
        "href": "/Diving_Suit",
        "image": null
      },
      "Sling": {
        "name": "Sling",
        "href": "/Sling",
        "image": null
      },
      "Flubber": {
        "name": "Flubber",
        "href": "/Flubber",
        "image": null
      },
      "Longbow": {
        "name": "Longbow",
        "href": "/Longbow",
        "image": null
      },
      "Power Crossbow": {
        "name": "Power Crossbow",
        "href": "/Power_Crossbow",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "A material that is always elastic. Unlike your cheeks, which lose elasticity day by day.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Scrap Metal": {
    "name": "Scrap Metal",
    "href": "/Scrap_Metal",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "High Heels": {
        "name": "High Heels",
        "href": "/High_Heels",
        "image": null
      },
      "Steel": {
        "name": "Steel",
        "href": "/Steel",
        "image": null
      },
      "Iron Sheet": {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": null
      },
      "Motor": {
        "name": "Motor",
        "href": "/Motor",
        "image": null
      },
      "RDX": {
        "name": "RDX",
        "href": "/RDX",
        "image": null
      },
      "Nunchaku": {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Very old, beat up metal. Can you craft a weapon out of this?",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Lighter": {
    "name": "Lighter",
    "href": "/Lighter",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "True Samadhi Fire": {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": null
      },
      "Boiling Water": {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": null
      },
      "Baijiu": {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": null
      },
      "Kaoliang Liquor": {
        "name": "Kaoliang Liquor",
        "href": "/Kaoliang_Liquor",
        "image": null
      },
      "Heated Oil": {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": null
      },
      "Ash": {
        "name": "Ash",
        "href": "/Ash",
        "image": null
      },
      "Heated Stone": {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": null
      },
      "Shamshir": {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": null
      },
      "Scorchbow": {
        "name": "Scorchbow",
        "href": "/Scorchbow",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "The ability to make fire is key.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Laser Pointer": {
    "name": "Laser Pointer",
    "href": "/Laser_Pointer",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Plasma Tonfa": {
        "name": "Plasma Tonfa",
        "href": "/Plasma_Tonfa",
        "image": null
      },
      "Sniping Scope": {
        "name": "Sniping Scope",
        "href": "/Sniping_Scope",
        "image": null
      },
      "Plasma Sword": {
        "name": "Plasma Sword",
        "href": "/Plasma_Sword",
        "image": null
      },
      "Beam Axe": {
        "name": "Beam Axe",
        "href": "/Beam_Axe",
        "image": null
      },
      "Plasma Whip": {
        "name": "Plasma Whip",
        "href": "/Plasma_Whip",
        "image": null
      },
      "Sniper Bow": {
        "name": "Sniper Bow",
        "href": "/Sniper_Bow",
        "image": null
      },
      "FN57": {
        "name": "FN57",
        "href": "/FN57",
        "image": null
      },
      "Springfield": {
        "name": "Springfield",
        "href": "/Springfield",
        "image": null
      },
      "Durendal mk2": {
        "name": "Durendal mk2",
        "href": "/Durendal_mk2",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "A useful addition when aiming weapons or pointing at the whiteboard. Made from a cell phone battery and a laser.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Stallion Medal": {
    "name": "Stallion Medal",
    "href": "/Stallion_Medal",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Tiara": {
        "name": "Tiara",
        "href": "/Tiara",
        "image": null
      },
      "Police Baton": {
        "name": "Police Baton",
        "href": "/Police_Baton",
        "image": null
      },
      "Covert Agent Uniform": {
        "name": "Covert Agent Uniform",
        "href": "/Covert_Agent_Uniform",
        "image": null
      },
      "Rope Cuffs": {
        "name": "Rope Cuffs",
        "href": "/Rope_Cuffs",
        "image": null
      },
      "Chakram": {
        "name": "Chakram",
        "href": "/Chakram",
        "image": null
      },
      "Stallion Bow": {
        "name": "Stallion Bow",
        "href": "/Stallion_Bow",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "A form of identification that verifies the recognition of the royal order. There have been many cases where royalty have used this for inspection purposes.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Battery": {
    "name": "Battery",
    "href": "/Battery",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Dead Battery": {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": null
      },
      "Electronic Parts": {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Would be good for a flashlight, remote control, or your beeping smoke detector.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Alcohol": {
    "name": "Alcohol",
    "href": "/Alcohol",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Baijiu": {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": null
      },
      "Soju": {
        "name": "Soju",
        "href": "/Soju",
        "image": null
      },
      "Coffee Liqueur": {
        "name": "Coffee Liqueur",
        "href": "/Coffee_Liqueur",
        "image": null
      },
      "Disinfectant": {
        "name": "Disinfectant",
        "href": "/Disinfectant",
        "image": null
      },
      "Acupuncture": {
        "name": "Acupuncture",
        "href": "/Acupuncture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Acupuncture.png/"
      },
      "Acupuncture Needle": {
        "name": "Acupuncture Needle",
        "href": "/Acupuncture_Needle",
        "image": null
      },
      "Fuhma Shuriken": {
        "name": "Fuhma Shuriken",
        "href": "/Fuhma_Shuriken",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Whenever you smell this, either a laboratory or a hospital might come to mind.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Oil": {
    "name": "Oil",
    "href": "/Oil",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Oilcloth": {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": null
      },
      "Heated Oil": {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": null
      },
      "Masamune": {
        "name": "Masamune",
        "href": "/Masamune",
        "image": null
      },
      "Molotov Cocktail": {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": null
      },
      "Strong Bow": {
        "name": "Strong Bow",
        "href": "/Strong_Bow",
        "image": null
      },
      "Magnum-Python": {
        "name": "Magnum-Python",
        "href": "/Magnum-Python",
        "image": null
      },
      "Gatling Gun": {
        "name": "Gatling Gun",
        "href": "/Gatling_Gun",
        "image": null
      },
      "Wild Horse": {
        "name": "Wild Horse",
        "href": "/Wild_Horse",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "At room temperature, this fatty component exists in liquid form.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Cloth": {
    "name": "Cloth",
    "href": "/Cloth",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Dress": {
        "name": "Dress",
        "href": "/Dress",
        "image": null
      },
      "Doll": {
        "name": "Doll",
        "href": "/Doll",
        "image": null
      },
      "Repaired Slippers": {
        "name": "Repaired Slippers",
        "href": "/Repaired_Slippers",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Made by weaving fibers. Different thread types make different fabrics.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Gemstone": {
    "name": "Gemstone",
    "href": "/Gemstone",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Ruby": {
        "name": "Ruby",
        "href": "/Ruby",
        "image": null
      },
      "Gold": {
        "name": "Gold",
        "href": "/Gold",
        "image": null
      },
      "Muramasa": {
        "name": "Muramasa",
        "href": "/Muramasa",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "An unrefined gemstone. Could be worth something in the right hands.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Glue": {
    "name": "Glue",
    "href": "/Glue",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Glass Panel": {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": null
      },
      "Booby Trap": {
        "name": "Booby Trap",
        "href": "/Booby_Trap",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Why doesn't it stick to itself in the bottle?",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Paper": {
    "name": "Paper",
    "href": "/Paper",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Ash": {
        "name": "Ash",
        "href": "/Ash",
        "image": null
      },
      "Blueprint": {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Iron Ore": {
    "name": "Iron Ore",
    "href": "/Iron_Ore",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Iron Knuckles": {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": null
      },
      "Steel": {
        "name": "Steel",
        "href": "/Steel",
        "image": null
      },
      "Enhanced Mouse Trap": {
        "name": "Enhanced Mouse Trap",
        "href": "/Enhanced_Mouse_Trap",
        "image": null
      },
      "Rapier": {
        "name": "Rapier",
        "href": "/Rapier",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Just the ore. Extract the iron to make it useful!",
    "maxStacks": "3",
    "foundQuantity": "3"
  },
  "Can": {
    "name": "Can",
    "href": "/Can",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Can of Cola": {
        "name": "Can of Cola",
        "href": "/Can_of_Cola",
        "image": null
      },
      "Canned Cod Liver": {
        "name": "Canned Cod Liver",
        "href": "/Canned_Cod_Liver",
        "image": null
      },
      "Clang Clatter": {
        "name": "Clang Clatter",
        "href": "/Clang_Clatter",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "You can throw the can.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Gunpowder": {
    "name": "Gunpowder",
    "href": "/Gunpowder",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Dynamite": {
        "name": "Dynamite",
        "href": "/Dynamite",
        "image": null
      },
      "Mine": {
        "name": "Mine",
        "href": "/Mine",
        "image": null
      },
      "Explosive Trap": {
        "name": "Explosive Trap",
        "href": "/Explosive_Trap",
        "image": null
      },
      "Shatter Shell Gauntlet": {
        "name": "Shatter Shell Gauntlet",
        "href": "/Shatter_Shell_Gauntlet",
        "image": null
      },
      "Grenade": {
        "name": "Grenade",
        "href": "/Grenade",
        "image": null
      },
      "Mighty Bow": {
        "name": "Mighty Bow",
        "href": "/Mighty_Bow",
        "image": null
      },
      "STG44": {
        "name": "STG44",
        "href": "/STG44",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [],
    "description": "Explosive powder. It goes in guns. Boom.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Steel": {
    "name": "Steel",
    "href": "/Steel",
    "image": null,
    "requirements": [
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Bastard Sword": {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": null
      },
      "Gigantic Axe": {
        "name": "Gigantic Axe",
        "href": "/Gigantic_Axe",
        "image": null
      },
      "Sheet Metal Armor": {
        "name": "Sheet Metal Armor",
        "href": "/Sheet_Metal_Armor",
        "image": null
      },
      "Steel Shield": {
        "name": "Steel Shield",
        "href": "/Steel_Shield",
        "image": null
      },
      "Steel Knee Pads": {
        "name": "Steel Knee Pads",
        "href": "/Steel_Knee_Pads",
        "image": null
      },
      "Pike": {
        "name": "Pike",
        "href": "/Pike",
        "image": null
      },
      "Heavy Crossbow": {
        "name": "Heavy Crossbow",
        "href": "/Heavy_Crossbow",
        "image": null
      },
      "Gauntlet": {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": null
      },
      "Plumbata": {
        "name": "Plumbata",
        "href": "/Plumbata",
        "image": null
      },
      "Magnum-Boa": {
        "name": "Magnum-Boa",
        "href": "/Magnum-Boa",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Just some strong steel. They could name a football team after this.",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "Oilcloth": {
    "name": "Oilcloth",
    "href": "/Oilcloth",
    "image": null,
    "requirements": [
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "Boots": {
        "name": "Boots",
        "href": "/Boots",
        "image": null
      },
      "Fire Trap": {
        "name": "Fire Trap",
        "href": "/Fire_Trap",
        "image": null
      },
      "Torch": {
        "name": "Torch",
        "href": "/Torch",
        "image": null
      },
      "Brasil Gauntlet": {
        "name": "Brasil Gauntlet",
        "href": "/Brasil_Gauntlet",
        "image": null
      },
      "The Legend of the General": {
        "name": "The Legend of the General",
        "href": "/The_Legend_of_the_General",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Oiled cloth. May be needed for something involving fire.",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "Heated Oil": {
    "name": "Heated Oil",
    "href": "/Heated_Oil",
    "image": null,
    "requirements": [
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "French Fries": {
        "name": "French Fries",
        "href": "/French_Fries",
        "image": null
      },
      "Scrambled Eggs": {
        "name": "Scrambled Eggs",
        "href": "/Scrambled_Eggs",
        "image": null
      },
      "Fried Chicken": {
        "name": "Fried Chicken",
        "href": "/Fried_Chicken",
        "image": null
      },
      "Curry Croquette": {
        "name": "Curry Croquette",
        "href": "/Curry_Croquette",
        "image": null
      },
      "Fish Cutlet": {
        "name": "Fish Cutlet",
        "href": "/Fish_Cutlet",
        "image": null
      },
      "Stir Fried Ramen": {
        "name": "Stir Fried Ramen",
        "href": "/Stir_Fried_Ramen",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Heated oil. It was sometimes used as a thermal weapon in the past, but now mostly used for cooking.",
    "maxStacks": "3",
    "foundQuantity": "3"
  },
  "Ruby": {
    "name": "Ruby",
    "href": "/Ruby",
    "image": null,
    "requirements": [
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Jewel Sword": {
        "name": "Jewel Sword",
        "href": "/Jewel_Sword",
        "image": null
      },
      "Santa Muerte": {
        "name": "Santa Muerte",
        "href": "/Santa_Muerte",
        "image": null
      },
      "Imperial Crown": {
        "name": "Imperial Crown",
        "href": "/Imperial_Crown",
        "image": null
      },
      "Sunset Armor": {
        "name": "Sunset Armor",
        "href": "/Sunset_Armor",
        "image": null
      },
      "Crimson Bracelet": {
        "name": "Crimson Bracelet",
        "href": "/Crimson_Bracelet",
        "image": null
      },
      "Bloodwing Knuckles": {
        "name": "Bloodwing Knuckles",
        "href": "/Bloodwing_Knuckles",
        "image": null
      },
      "Sword of Shah Jahan": {
        "name": "Sword of Shah Jahan",
        "href": "/Sword_of_Shah_Jahan",
        "image": null
      },
      "Ruby Special": {
        "name": "Ruby Special",
        "href": "/Ruby_Special",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Rubies and sapphires actually have the same chemical composition and mineral structure! However, rubies have a small amount of chromium that makes them appear red.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Dead Battery": {
    "name": "Dead Battery",
    "href": "/Dead_Battery",
    "image": null,
    "requirements": [
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Ion Battery": {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": null
      },
      "Lightning Whip": {
        "name": "Lightning Whip",
        "href": "/Lightning_Whip",
        "image": null
      },
      "Ball Lightning": {
        "name": "Ball Lightning",
        "href": "/Ball_Lightning",
        "image": null
      },
      "Single Coil Pickup": {
        "name": "Single Coil Pickup",
        "href": "/Single_Coil_Pickup",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Is a dead battery still a battery? Just throw it at someone!",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "White Powder": {
    "name": "White Powder",
    "href": "/White_Powder",
    "image": null,
    "requirements": [
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "C-4": {
        "name": "C-4",
        "href": "/C-4",
        "image": null
      },
      "Gentian Silver Gun": {
        "name": "Gentian Silver Gun",
        "href": "/Gentian_Silver_Gun",
        "image": null
      },
      "White Claw Punch": {
        "name": "White Claw Punch",
        "href": "/White_Claw_Punch",
        "image": null
      },
      "Ryukyu Tonfa": {
        "name": "Ryukyu Tonfa",
        "href": "/Ryukyu_Tonfa",
        "image": null
      },
      "Flour Bomb": {
        "name": "Flour Bomb",
        "href": "/Flour_Bomb",
        "image": null
      },
      "Flechette": {
        "name": "Flechette",
        "href": "/Flechette",
        "image": null
      },
      "Polaris": {
        "name": "Polaris",
        "href": "/Polaris",
        "image": null
      },
      "The Wall": {
        "name": "The Wall",
        "href": "/The_Wall",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Unidentifiable white powder. Probably from chalk...",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Heated Stone": {
    "name": "Heated Stone",
    "href": "/Heated_Stone",
    "image": null,
    "requirements": [
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Baked Potato": {
        "name": "Baked Potato",
        "href": "/Baked_Potato",
        "image": null
      },
      "Baked Carp": {
        "name": "Baked Carp",
        "href": "/Baked_Carp",
        "image": null
      },
      "Grilled Chilean Sea Bass": {
        "name": "Grilled Chilean Sea Bass",
        "href": "/Grilled_Chilean_Sea_Bass",
        "image": null
      },
      "Steak": {
        "name": "Steak",
        "href": "/Steak",
        "image": null
      },
      "Fang Mace": {
        "name": "Fang Mace",
        "href": "/Fang_Mace",
        "image": null
      },
      "Pellet Bow": {
        "name": "Pellet Bow",
        "href": "/Pellet_Bow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "",
    "maxStacks": "3",
    "foundQuantity": "3"
  },
  "Meteorite": {
    "name": "Meteorite",
    "href": "/Meteorite",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Meteor Claymore": {
        "name": "Meteor Claymore",
        "href": "/Meteor_Claymore",
        "image": null
      },
      "Kabana": {
        "name": "Kabana",
        "href": "/Kabana",
        "image": null
      },
      "Moonstone": {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": null
      },
      "Force Core": {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": null
      },
      "Wonderful Tonight": {
        "name": "Wonderful Tonight",
        "href": "/Wonderful_Tonight",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "A stone containing traces of alien vital force. It has mystical effects.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Ash": {
    "name": "Ash",
    "href": "/Ash",
    "image": null,
    "requirements": [
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Poison": {
        "name": "Poison",
        "href": "/Poison",
        "image": null
      },
      "Mount Slicer": {
        "name": "Mount Slicer",
        "href": "/Mount_Slicer",
        "image": null
      },
      "Phoenix Gloves": {
        "name": "Phoenix Gloves",
        "href": "/Phoenix_Gloves",
        "image": null
      },
      "Mystic Jade Charm": {
        "name": "Mystic Jade Charm",
        "href": "/Mystic_Jade_Charm",
        "image": null
      },
      "Devil's Marksman": {
        "name": "Devil's Marksman",
        "href": "/Devil%27s_Marksman",
        "image": null
      },
      "The Smiting Dragon": {
        "name": "The Smiting Dragon",
        "href": "/The_Smiting_Dragon",
        "image": null
      },
      "Purple Haze": {
        "name": "Purple Haze",
        "href": "/Purple_Haze",
        "image": null
      },
      "Straitjacket Sneakers": {
        "name": "Straitjacket Sneakers",
        "href": "/Straitjacket_Sneakers",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "The remains of something burning.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Electronic Parts": {
    "name": "Electronic Parts",
    "href": "/Electronic_Parts",
    "image": null,
    "requirements": [
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Tactical OPS Helmet": {
        "name": "Tactical OPS Helmet",
        "href": "/Tactical_OPS_Helmet",
        "image": null
      },
      "Maverick Runner": {
        "name": "Maverick Runner",
        "href": "/Maverick_Runner",
        "image": null
      },
      "Motor": {
        "name": "Motor",
        "href": "/Motor",
        "image": null
      },
      "Cell Phone": {
        "name": "Cell Phone",
        "href": "/Cell_Phone",
        "image": null
      },
      "Railgun": {
        "name": "Railgun",
        "href": "/Railgun",
        "image": null
      },
      "Volticletto": {
        "name": "Volticletto",
        "href": "/Volticletto",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "You can likely craft something out of this.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Blueprint": {
    "name": "Blueprint",
    "href": "/Blueprint",
    "image": null,
    "requirements": [
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      }
    ],
    "buildsInto": {
      "Monohoshizao": {
        "name": "Monohoshizao",
        "href": "/Monohoshizao",
        "image": null
      },
      "Florentine": {
        "name": "Florentine",
        "href": "/Florentine",
        "image": null
      },
      "Cell Phone": {
        "name": "Cell Phone",
        "href": "/Cell_Phone",
        "image": null
      },
      "Tactical Tonfa": {
        "name": "Tactical Tonfa",
        "href": "/Tactical_Tonfa.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Tactical_Tonfa.png/"
      },
      "Magnum-Anaconda": {
        "name": "Magnum-Anaconda",
        "href": "/Magnum-Anaconda",
        "image": null
      },
      "Tac-50": {
        "name": "Tac-50",
        "href": "/Tac-50",
        "image": null
      },
      "Nocaster": {
        "name": "Nocaster",
        "href": "/Nocaster",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "An elaborate blueprint. What on earth do all the lines and numbers mean?",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Iron Sheet": {
    "name": "Iron Sheet",
    "href": "/Iron_Sheet",
    "image": null,
    "requirements": [
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Katana": {
        "name": "Katana",
        "href": "/Katana",
        "image": null
      },
      "Dragon Guandao": {
        "name": "Dragon Guandao",
        "href": "/Dragon_Guandao",
        "image": null
      },
      "Bulletproof Vest": {
        "name": "Bulletproof Vest",
        "href": "/Bulletproof_Vest",
        "image": null
      },
      "Sheath": {
        "name": "Sheath",
        "href": "/Sheath",
        "image": null
      },
      "Bazuband": {
        "name": "Bazuband",
        "href": "/Bazuband",
        "image": null
      },
      "Magazine": {
        "name": "Magazine",
        "href": "/Magazine",
        "image": null
      },
      "Steel Bow": {
        "name": "Steel Bow",
        "href": "/Steel_Bow",
        "image": null
      },
      "NTW-20": {
        "name": "NTW-20",
        "href": "/NTW-20",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "This will give you goosebumps if you scrape your fingernails across it.",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "Gold": {
    "name": "Gold",
    "href": "/Gold",
    "image": null,
    "requirements": [
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Scythe": {
        "name": "Scythe",
        "href": "/Scythe",
        "image": null
      },
      "Crown": {
        "name": "Crown",
        "href": "/Crown",
        "image": null
      },
      "Imperial Burgonet": {
        "name": "Imperial Burgonet",
        "href": "/Imperial_Burgonet",
        "image": null
      },
      "Commander's Armor": {
        "name": "Commander's Armor",
        "href": "/Commander%27s_Armor",
        "image": null
      },
      "Golden Bracelet": {
        "name": "Golden Bracelet",
        "href": "/Golden_Bracelet",
        "image": null
      },
      "Thunder Whip": {
        "name": "Thunder Whip",
        "href": "/Thunder_Whip.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/07/Thunder_Whip.png/"
      },

      "Ruthenium Marble": {
        "name": "Ruthenium Marble",
        "href": "/Ruthenium_Marble.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Ruthenium_Marble.png/"
      },

      "Golden-Ratio Bow": {
        "name": "Golden-Ratio Bow",
        "href": "/Golden-Ratio_Bow",
        "image": null
      },
      "Golden Rifle": {
        "name": "Golden Rifle",
        "href": "/Golden_Rifle",
        "image": null
      },
      "Golden Bridge": {
        "name": "Golden Bridge",
        "href": "/Golden_Bridge",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [],
    "description": "Soft, valuable, and gorgeous. A must have for any piece of jewelery.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Tree of Life": {
    "name": "Tree of Life",
    "href": "/Tree_of_Life",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Powder of Life": {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": null
      },
      "Death Rune": {
        "name": "Death Rune",
        "href": "/Death_Rune",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "A tree that accumulated a lot of vital force over a long time. Also known as the World Tree, it symbolizes the origin of the universe and the root of life.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Moon Stone": {
    "name": "Moon Stone",
    "href": "/Moon_Stone",
    "image": null,
    "requirements": [
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Starsteel Twin Swords": {
        "name": "Starsteel Twin Swords",
        "href": "/Starsteel_Twin_Swords",
        "image": null
      },
      "Cube Watch": {
        "name": "Cube Watch",
        "href": "/Cube_Watch",
        "image": null
      },
      "Moonlight Pendant": {
        "name": "Moonlight Pendant",
        "href": "/Moonlight_Pendant",
        "image": null
      },
      "Hammer of Thor": {
        "name": "Hammer of Thor",
        "href": "/Hammer_of_Thor",
        "image": null
      },
      "The Deadly Ray": {
        "name": "The Deadly Ray",
        "href": "/The_Deadly_Ray",
        "image": null
      },
      "Cosmic Bident": {
        "name": "Cosmic Bident",
        "href": "/Cosmic_Bident",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "A jewel with a subdued shine.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Poison": {
    "name": "Poison",
    "href": "/Poison",
    "image": null,
    "requirements": [
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Schrodinger's Box": {
        "name": "Schrodinger's Box",
        "href": "/Schrodinger%27s_Box",
        "image": null
      },
      "Spy Umbrella": {
        "name": "Spy Umbrella",
        "href": "/Spy_Umbrella",
        "image": null
      },
      "Venom Dart": {
        "name": "Venom Dart",
        "href": "/Venom_Dart",
        "image": null
      },
      "Azure Dagger": {
        "name": "Azure Dagger",
        "href": "/Azure_Dagger",
        "image": null
      },
      "Lloigor & Zahr": {
        "name": "Lloigor & Zahr",
        "href": "/Lloigor_%26_Zahr",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "DO NOT DRINK.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Motor": {
    "name": "Motor",
    "href": "/Motor",
    "image": null,
    "requirements": [
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Vibroblade": {
        "name": "Vibroblade",
        "href": "/Vibroblade",
        "image": null
      },
      "Mallet": {
        "name": "Mallet",
        "href": "/Mallet",
        "image": null
      },
      "Machine Gun": {
        "name": "Machine Gun",
        "href": "/Machine_Gun",
        "image": null
      },
      "Vibro Nunchaku": {
        "name": "Vibro Nunchaku",
        "href": "/Vibro_Nunchaku",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "A motor itself is useless, but you can probably turn it into something great.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Mithril": {
    "name": "Mithril",
    "href": "/Mithril",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Mithril Helm": {
        "name": "Mithril Helm",
        "href": "/Mithril_Helm",
        "image": null
      },
      "Mithril Armor": {
        "name": "Mithril Armor",
        "href": "/Mithril_Armor",
        "image": null
      },
      "Mithril Shield": {
        "name": "Mithril Shield",
        "href": "/Mithril_Shield",
        "image": null
      },
      "Mithril Boots": {
        "name": "Mithril Boots",
        "href": "/Mithril_Boots",
        "image": null
      },
      "Mithril String": {
        "name": "Mithril String",
        "href": "/Mithril_String",
        "image": null
      },
      "Joyeuse": {
        "name": "Joyeuse",
        "href": "/Joyeuse.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Joyeuse.png/"
      },

    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "This silver metal has the best reaction to vital force. It was strengthened due to its long exposure to VF. Light as a feather, but stronger than steel.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Glass Panel": {
    "name": "Glass Panel",
    "href": "/Glass_Panel",
    "image": null,
    "requirements": [
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Glue",
        "href": "/Glue",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Glue.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Optical Camouflage Suit": {
        "name": "Optical Camouflage Suit",
        "href": "/Optical_Camouflage_Suit",
        "image": null
      },
      "Radar": {
        "name": "Radar",
        "href": "/Radar",
        "image": null
      },
      "AK-12": {
        "name": "AK-12",
        "href": "/AK-12",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Glue",
        "href": "/Glue",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Glue.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "A glass panel used for a display. If you break the one on your TV, you gotta replace it with a new panel. At that point, you might as well just get a new TV.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Ion Battery": {
    "name": "Ion Battery",
    "href": "/Ion_Battery",
    "image": null,
    "requirements": [
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Dioscuri": {
        "name": "Dioscuri",
        "href": "/Dioscuri",
        "image": null
      },
      "Hammer of Thor": {
        "name": "Hammer of Thor",
        "href": "/Hammer_of_Thor",
        "image": null
      },
      "Eighteen Foot Spear": {
        "name": "Eighteen Foot Spear",
        "href": "/Eighteen_Foot_Spear",
        "image": null
      },
      "Cards of Tyranny": {
        "name": "Cards of Tyranny",
        "href": "/Cards_of_Tyranny",
        "image": null
      },
      "Electron Blaster": {
        "name": "Electron Blaster",
        "href": "/Electron_Blaster",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "A high capacity battery made of lithium ion that can be recharged many times.",
    "maxStacks": "3",
    "foundQuantity": "2"
  },
  "VF Blood Sample": {
    "name": "VF Blood Sample",
    "href": "/VF_Blood_Sample",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Dainsleif": {
        "name": "Dainsleif",
        "href": "/Dainsleif",
        "image": null
      },
      "Chinese Opera Mask": {
        "name": "Chinese Opera Mask",
        "href": "/Chinese_Opera_Mask",
        "image": null
      },
      "Queen of Hearts": {
        "name": "Queen of Hearts",
        "href": "/Queen_of_Hearts",
        "image": null
      },
      "Red Shoes": {
        "name": "Red Shoes",
        "href": "/Red_Shoes",
        "image": null
      },
      "Spear of Longinus": {
        "name": "Spear of Longinus",
        "href": "/Spear_of_Longinus",
        "image": null
      },
      "Whip of Nine Bloody Tails": {
        "name": "Whip of Nine Bloody Tails",
        "href": "/Whip_of_Nine_Bloody_Tails",
        "image": null
      },
      "Failnaught": {
        "name": "Failnaught",
        "href": "/Failnaught",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "Only the strongest can get this blood sample.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Cell Phone": {
    "name": "Cell Phone",
    "href": "/Cell_Phone",
    "image": null,
    "requirements": [
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Vital Sign Sensor": {
        "name": "Vital Sign Sensor",
        "href": "/Vital_Sign_Sensor",
        "image": null
      },
      "Smart Bomb": {
        "name": "Smart Bomb",
        "href": "/Smart_Bomb",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [],
    "description": "I'm not getting any bars here...",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Force Core": {
    "name": "Force Core",
    "href": "/Force_Core",
    "image": null,
    "requirements": [
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Fragarach": {
        "name": "Fragarach",
        "href": "/Fragarach",
        "image": null
      },
      "Auto-arms": {
        "name": "Auto-arms",
        "href": "/Auto-arms",
        "image": null
      },
      "Boots of Hermes": {
        "name": "Boots of Hermes",
        "href": "/Boots_of_Hermes",
        "image": null
      },
      "Emerald Tablet": {
        "name": "Emerald Tablet",
        "href": "/Emerald_Tablet",
        "image": null
      },
      "Remote Mine": {
        "name": "Remote Mine",
        "href": "/Remote_Mine",
        "image": null
      },
      "Monkey King Bar": {
        "name": "Monkey King Bar",
        "href": "/Monkey_King_Bar.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Monkey_King_Bar.png/"
      },

      "Sudarsana": {
        "name": "Sudarsana",
        "href": "/Sudarsana.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e7/Sudarsana.png/"
      },

      "Sharanga": {
        "name": "Sharanga",
        "href": "/Sharanga",
        "image": null
      },
      "Kelte": {
        "name": "Kelte",
        "href": "/Kelte",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [],
    "description": "This seems to hold untapped power.",
    "maxStacks": "3",
    "foundQuantity": "1"
  },
  "Honey": {
    "name": "Honey",
    "href": "/Honey",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Cola": {
        "name": "Cola",
        "href": "/Cola",
        "image": null
      },
      "Honey Milk": {
        "name": "Honey Milk",
        "href": "/Honey_Milk",
        "image": null
      },
      "Honey Water": {
        "name": "Honey Water",
        "href": "/Honey_Water",
        "image": null
      },
      "Hot Honey Water": {
        "name": "Hot Honey Water",
        "href": "/Hot_Honey_Water",
        "image": null
      },
      "Honey Cod Steak": {
        "name": "Honey Cod Steak",
        "href": "/Honey_Cod_Steak",
        "image": null
      },
      "Honey Garlic Pickle": {
        "name": "Honey Garlic Pickle",
        "href": "/Honey_Garlic_Pickle",
        "image": null
      },
      "Honey Butter": {
        "name": "Honey Butter",
        "href": "/Honey_Butter",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 250"
    ],
    "description": "Sweet and sticky. A natural ingredient that is good for cooking or just eating raw!",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Water": {
    "name": "Water",
    "href": "/Water",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Fire Helmet": {
        "name": "Fire Helmet",
        "href": "/Fire_Helmet",
        "image": null
      },
      "Boiling Water": {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": null
      },
      "Water Bottle": {
        "name": "Water Bottle",
        "href": "/Water_Bottle",
        "image": null
      },
      "Soju": {
        "name": "Soju",
        "href": "/Soju",
        "image": null
      },
      "Honey Water": {
        "name": "Honey Water",
        "href": "/Honey_Water",
        "image": null
      },
      "Ice Water": {
        "name": "Ice Water",
        "href": "/Ice_Water",
        "image": null
      },
      "Dead Battery": {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": null
      },
      "Poison": {
        "name": "Poison",
        "href": "/Poison",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 100"
    ],
    "description": "You can't live without it.",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Ice": {
    "name": "Ice",
    "href": "/Ice",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Glacial Ice": {
        "name": "Glacial Ice",
        "href": "/Glacial_Ice",
        "image": null
      },
      "Ice Coffee": {
        "name": "Ice Coffee",
        "href": "/Ice_Coffee",
        "image": null
      },
      "Ice Water": {
        "name": "Ice Water",
        "href": "/Ice_Water",
        "image": null
      },
      "On The Rocks": {
        "name": "On The Rocks",
        "href": "/On_The_Rocks",
        "image": null
      },
      "Purified Water": {
        "name": "Purified Water",
        "href": "/Purified_Water",
        "image": null
      },
      "Choco Ice Cream": {
        "name": "Choco Ice Cream",
        "href": "/Choco_Ice_Cream",
        "image": null
      },
      "Frost Petal Hand": {
        "name": "Frost Petal Hand",
        "href": "/Frost_Petal_Hand",
        "image": null
      },
      "Frost Venom Dart": {
        "name": "Frost Venom Dart",
        "href": "/Frost_Venom_Dart",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 200"
    ],
    "description": "Without teeth, use gums! Without water, use ice!",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Whiskey": {
    "name": "Whiskey",
    "href": "/Whiskey",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Cocktail": {
        "name": "Cocktail",
        "href": "/Cocktail",
        "image": null
      },
      "Highball": {
        "name": "Highball",
        "href": "/Highball",
        "image": null
      },
      "On The Rocks": {
        "name": "On The Rocks",
        "href": "/On_The_Rocks",
        "image": null
      },
      "Cowboy": {
        "name": "Cowboy",
        "href": "/Cowboy",
        "image": null
      },
      "Whiskey Cocktail": {
        "name": "Whiskey Cocktail",
        "href": "/Whiskey_Cocktail",
        "image": null
      },
      "Whiskey Bonbon": {
        "name": "Whiskey Bonbon",
        "href": "/Whiskey_Bonbon",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 450"
    ],
    "description": "A classic liquor made by distilling grain. Used as the main ingredient in many cocktails, but popular just by itself.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Coffee": {
    "name": "Coffee",
    "href": "/Coffee",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Ice Coffee": {
        "name": "Ice Coffee",
        "href": "/Ice_Coffee",
        "image": null
      },
      "Coffee Liqueur": {
        "name": "Coffee Liqueur",
        "href": "/Coffee_Liqueur",
        "image": null
      },
      "Latte": {
        "name": "Latte",
        "href": "/Latte",
        "image": null
      },
      "Americano": {
        "name": "Americano",
        "href": "/Americano",
        "image": null
      },
      "Bun": {
        "name": "Bun",
        "href": "/Bun",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 380"
    ],
    "description": "Don't talk to me until I've had my fourth morning coffee.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Carbonated Water": {
    "name": "Carbonated Water",
    "href": "/Carbonated_Water",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Lemonade": {
        "name": "Lemonade",
        "href": "/Lemonade",
        "image": null
      },
      "Cola": {
        "name": "Cola",
        "href": "/Cola",
        "image": null
      },
      "Highball": {
        "name": "Highball",
        "href": "/Highball",
        "image": null
      },
      "Ion Battery": {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 380"
    ],
    "description": "It would probably be tasty if you made juice with this.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Milk": {
    "name": "Milk",
    "href": "/Milk",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Latte": {
        "name": "Latte",
        "href": "/Latte",
        "image": null
      },
      "Honey Milk": {
        "name": "Honey Milk",
        "href": "/Honey_Milk",
        "image": null
      },
      "Chocolate Milk": {
        "name": "Chocolate Milk",
        "href": "/Chocolate_Milk",
        "image": null
      },
      "Cowboy": {
        "name": "Cowboy",
        "href": "/Cowboy",
        "image": null
      },
      "White Russian": {
        "name": "White Russian",
        "href": "/White_Russian",
        "image": null
      },
      "Butter": {
        "name": "Butter",
        "href": "/Butter",
        "image": null
      },
      "Potato Soup": {
        "name": "Potato Soup",
        "href": "/Potato_Soup",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 200"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Boiling Water": {
    "name": "Boiling Water",
    "href": "/Boiling_Water",
    "image": null,
    "requirements": [
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Hot Honey Water": {
        "name": "Hot Honey Water",
        "href": "/Hot_Honey_Water",
        "image": null
      },
      "Americano": {
        "name": "Americano",
        "href": "/Americano",
        "image": null
      },
      "Purified Water": {
        "name": "Purified Water",
        "href": "/Purified_Water",
        "image": null
      },
      "Hot Chocolate": {
        "name": "Hot Chocolate",
        "href": "/Hot_Chocolate",
        "image": null
      },
      "Spicy Fish Stew": {
        "name": "Spicy Fish Stew",
        "href": "/Spicy_Fish_Stew",
        "image": null
      },
      "Hot Ramen": {
        "name": "Hot Ramen",
        "href": "/Hot_Ramen",
        "image": null
      },
      "Curry": {
        "name": "Curry",
        "href": "/Curry",
        "image": null
      },
      "Oriental Concoction": {
        "name": "Oriental Concoction",
        "href": "/Oriental_Concoction",
        "image": null
      },
      "Hard-Boiled Egg": {
        "name": "Hard-Boiled Egg",
        "href": "/Hard-Boiled_Egg",
        "image": null
      },
      "Flubber": {
        "name": "Flubber",
        "href": "/Flubber",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 200"
    ],
    "description": "Put something in it before it cools down.",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Lemonade": {
    "name": "Lemonade",
    "href": "/Lemonade",
    "image": null,
    "requirements": [
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 300"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "4"
  },
  "Water Bottle": {
    "name": "Water Bottle",
    "href": "/Water_Bottle",
    "image": null,
    "requirements": [
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 350"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Baijiu": {
    "name": "Baijiu",
    "href": "/Baijiu",
    "image": null,
    "requirements": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Kaoliang Liquor": {
        "name": "Kaoliang Liquor",
        "href": "/Kaoliang_Liquor",
        "image": null
      },
      "Flower Liquor": {
        "name": "Flower Liquor",
        "href": "/Flower_Liquor",
        "image": null
      },
      "Herbal Liquor": {
        "name": "Herbal Liquor",
        "href": "/Herbal_Liquor",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 1000"
    ],
    "description": "A traditional Chinese liquor. Typically made from Sorghum. Often regarded as the best selling spirit in the world, due to China's affection for it.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Soju": {
    "name": "Soju",
    "href": "/Soju",
    "image": null,
    "requirements": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 350"
    ],
    "description": "Although this hard liquor might smell like disinfectant, it's loved by Koreans and can be found at every single social gathering.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Ice Coffee": {
    "name": "Ice Coffee",
    "href": "/Ice_Coffee",
    "image": null,
    "requirements": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "You take it with cream and sugar?",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Cocktail": {
    "name": "Cocktail",
    "href": "/Cocktail",
    "image": null,
    "requirements": [
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 300"
    ],
    "description": "The origin of cocktails is actually unclear. It's also unclear how they come up with the names for some of them..",
    "maxStacks": "5",
    "foundQuantity": "4"
  },
  "Coffee Liqueur": {
    "name": "Coffee Liqueur",
    "href": "/Coffee_Liqueur",
    "image": null,
    "requirements": [
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      }
    ],
    "buildsInto": {
      "White Russian": {
        "name": "White Russian",
        "href": "/White_Russian",
        "image": null
      },
      "Mocha Bread": {
        "name": "Mocha Bread",
        "href": "/Mocha_Bread",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "A very popular liqueur. It goes well with milk...or vodka.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Cola": {
    "name": "Cola",
    "href": "/Cola",
    "image": null,
    "requirements": [
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "buildsInto": {
      "Whiskey Cocktail": {
        "name": "Whiskey Cocktail",
        "href": "/Whiskey_Cocktail",
        "image": null
      },
      "Can of Cola": {
        "name": "Can of Cola",
        "href": "/Can_of_Cola",
        "image": null
      },
      "Smoke Bomb": {
        "name": "Smoke Bomb",
        "href": "/Smoke_Bomb",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 400"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Latte": {
    "name": "Latte",
    "href": "/Latte",
    "image": null,
    "requirements": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Honey Milk": {
    "name": "Honey Milk",
    "href": "/Honey_Milk",
    "image": null,
    "requirements": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Highball": {
    "name": "Highball",
    "href": "/Highball",
    "image": null,
    "requirements": [
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Chocolate Milk": {
    "name": "Chocolate Milk",
    "href": "/Chocolate_Milk",
    "image": null,
    "requirements": [
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 400"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Honey Water": {
    "name": "Honey Water",
    "href": "/Honey_Water",
    "image": null,
    "requirements": [
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 400"
    ],
    "description": "It is good for recovering stamina or if you have a sore throat.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Ice Water": {
    "name": "Ice Water",
    "href": "/Ice_Water",
    "image": null,
    "requirements": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Cold Noodles": {
        "name": "Cold Noodles",
        "href": "/Cold_Noodles",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 350"
    ],
    "description": "You can even chew on the leftover ice after you drink it.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "On The Rocks": {
    "name": "On The Rocks",
    "href": "/On_The_Rocks",
    "image": null,
    "requirements": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Cowboy": {
    "name": "Cowboy",
    "href": "/Cowboy",
    "image": null,
    "requirements": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 530"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Kaoliang Liquor": {
    "name": "Kaoliang Liquor",
    "href": "/Kaoliang_Liquor",
    "image": null,
    "requirements": [
      {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Sorghum_Wine.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Sorghum_Wine.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 1080"
    ],
    "description": "A very strong 100-120 proof alcohol. It has a clean, soft taste and delicate scent.",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Hot Honey Water": {
    "name": "Hot Honey Water",
    "href": "/Hot_Honey_Water",
    "image": null,
    "requirements": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 1080"
    ],
    "description": "Did you ever hear that lukewarm honey is a cure for hangovers?",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Flower Liquor": {
    "name": "Flower Liquor",
    "href": "/Flower_Liquor",
    "image": null,
    "requirements": [
      {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Sorghum_Wine.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Sorghum_Wine.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 500"
    ],
    "description": "Made with real flowers for a unique taste!",
    "maxStacks": "5",
    "foundQuantity": "5"
  },
  "Americano": {
    "name": "Americano",
    "href": "/Americano",
    "image": null,
    "requirements": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 1080"
    ],
    "description": "For those who don't drink coffee, this takes like bitter water.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Herbal Liquor": {
    "name": "Herbal Liquor",
    "href": "/Herbal_Liquor",
    "image": null,
    "requirements": [
      {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Sorghum_Wine.png/"
      },
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Baijiu",
        "href": "/Baijiu",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Sorghum_Wine.png/"
      },
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 500"
    ],
    "description": "It's sometimes consumed for its medicinal properties as it is made from medicinal herbs.",
    "maxStacks": "5",
    "foundQuantity": "5"
  },
  "Whiskey Cocktail": {
    "name": "Whiskey Cocktail",
    "href": "/Whiskey_Cocktail",
    "image": null,
    "requirements": [
      {
        "name": "Cola",
        "href": "/Cola",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Coke.png/"
      },
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Cola",
        "href": "/Cola",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Coke.png/"
      },
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 500"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "5"
  },
  "Purified Water": {
    "name": "Purified Water",
    "href": "/Purified_Water",
    "image": null,
    "requirements": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 1080"
    ],
    "description": "Clean water fetched from the well early in the morning. It can be used for medicine or to drink while praying for victory.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Can of Cola": {
    "name": "Can of Cola",
    "href": "/Can_of_Cola",
    "image": null,
    "requirements": [
      {
        "name": "Cola",
        "href": "/Cola",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Coke.png/"
      },
      {
        "name": "Can",
        "href": "/Can",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Can.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Cola",
        "href": "/Cola",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Coke.png/"
      },
      {
        "name": "Can",
        "href": "/Can",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Can.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 1400"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Hot Chocolate": {
    "name": "Hot Chocolate",
    "href": "/Hot_Chocolate",
    "image": null,
    "requirements": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 450"
    ],
    "description": "A sweet, warm drink with cocoa powder and milk. Try it with marshmallows!",
    "maxStacks": "5",
    "foundQuantity": "4"
  },
  "White Russian": {
    "name": "White Russian",
    "href": "/White_Russian",
    "image": null,
    "requirements": [
      {
        "name": "Coffee Liqueur",
        "href": "/Coffee_Liqueur",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Coffee_Liqueur.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Coffee Liqueur",
        "href": "/Coffee_Liqueur",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Coffee_Liqueur.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 660"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "4"
  },
  "Potato": {
    "name": "Potato",
    "href": "/Potato",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Potato Bread": {
        "name": "Potato Bread",
        "href": "/Potato_Bread",
        "image": null
      },
      "Potato Soup": {
        "name": "Potato Soup",
        "href": "/Potato_Soup",
        "image": null
      },
      "French Fries": {
        "name": "French Fries",
        "href": "/French_Fries",
        "image": null
      },
      "Baked Potato": {
        "name": "Baked Potato",
        "href": "/Baked_Potato",
        "image": null
      },
      "Butter-Fried Potatoes": {
        "name": "Butter-Fried Potatoes",
        "href": "/Butter-Fried_Potatoes",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 130"
    ],
    "description": "Boil them, mash them, or stick them in a stew. They're also delicious eaten raw. Potatoes are magic.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Cod": {
    "name": "Cod",
    "href": "/Cod",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Honey Cod Steak": {
        "name": "Honey Cod Steak",
        "href": "/Honey_Cod_Steak",
        "image": null
      },
      "Canned Cod Liver": {
        "name": "Canned Cod Liver",
        "href": "/Canned_Cod_Liver",
        "image": null
      },
      "Fish Fillet with Egg": {
        "name": "Fish Fillet with Egg",
        "href": "/Fish_Fillet_with_Egg",
        "image": null
      },
      "Grilled Chilean Sea Bass": {
        "name": "Grilled Chilean Sea Bass",
        "href": "/Grilled_Chilean_Sea_Bass",
        "image": null
      },
      "Fish Cutlet": {
        "name": "Fish Cutlet",
        "href": "/Fish_Cutlet",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 130"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Lemon": {
    "name": "Lemon",
    "href": "/Lemon",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Lemonade": {
        "name": "Lemonade",
        "href": "/Lemonade",
        "image": null
      },
      "Cocktail": {
        "name": "Cocktail",
        "href": "/Cocktail",
        "image": null
      },
      "Citrus Cake": {
        "name": "Citrus Cake",
        "href": "/Citrus_Cake",
        "image": null
      },
      "Lemon Ice Cream": {
        "name": "Lemon Ice Cream",
        "href": "/Lemon_Ice_Cream",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 100"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Garlic": {
    "name": "Garlic",
    "href": "/Garlic",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Garlic Bread": {
        "name": "Garlic Bread",
        "href": "/Garlic_Bread",
        "image": null
      },
      "Bacon and Garlic Sticks": {
        "name": "Bacon and Garlic Sticks",
        "href": "/Bacon_and_Garlic_Sticks",
        "image": null
      },
      "Honey Garlic Pickle": {
        "name": "Honey Garlic Pickle",
        "href": "/Honey_Garlic_Pickle",
        "image": null
      },
      "Garlic Ramen": {
        "name": "Garlic Ramen",
        "href": "/Garlic_Ramen",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "A delicious addition to many dishes. Also great for keeping away vampires.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Adhesive Bandage": {
    "name": "Adhesive Bandage",
    "href": "/Adhesive_Bandage",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Disinfectant": {
        "name": "Disinfectant",
        "href": "/Disinfectant",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "Useful because it sticks to skin well and doesn't fall off easily. Just don't keep it on for too long.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Carp": {
    "name": "Carp",
    "href": "/Carp",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Carp Bread": {
        "name": "Carp Bread",
        "href": "/Carp_Bread",
        "image": null
      },
      "Spicy Fish Stew": {
        "name": "Spicy Fish Stew",
        "href": "/Spicy_Fish_Stew",
        "image": null
      },
      "Baked Carp": {
        "name": "Baked Carp",
        "href": "/Baked_Carp",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 130"
    ],
    "description": "A carp is actually good for throwing. I don't think the carp likes it though.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Bread": {
    "name": "Bread",
    "href": "/Bread",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Garlic Bread": {
        "name": "Garlic Bread",
        "href": "/Garlic_Bread",
        "image": null
      },
      "Carp Bread": {
        "name": "Carp Bread",
        "href": "/Carp_Bread",
        "image": null
      },
      "Choco Pie": {
        "name": "Choco Pie",
        "href": "/Choco_Pie",
        "image": null
      },
      "Bun": {
        "name": "Bun",
        "href": "/Bun",
        "image": null
      },
      "Hamburger": {
        "name": "Hamburger",
        "href": "/Hamburger",
        "image": null
      },
      "Potato Bread": {
        "name": "Potato Bread",
        "href": "/Potato_Bread",
        "image": null
      },
      "Citrus Cake": {
        "name": "Citrus Cake",
        "href": "/Citrus_Cake",
        "image": null
      },
      "Egg Bun": {
        "name": "Egg Bun",
        "href": "/Egg_Bun",
        "image": null
      },
      "Curry Bun": {
        "name": "Curry Bun",
        "href": "/Curry_Bun",
        "image": null
      },
      "Mocha Bread": {
        "name": "Mocha Bread",
        "href": "/Mocha_Bread",
        "image": null
      },
      "Pound Cake": {
        "name": "Pound Cake",
        "href": "/Pound_Cake",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "A staple food. You can also staple it to trees.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Meat": {
    "name": "Meat",
    "href": "/Meat",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Tandoori Chicken": {
        "name": "Tandoori Chicken",
        "href": "/Tandoori_Chicken",
        "image": null
      },
      "Bacon and Garlic Sticks": {
        "name": "Bacon and Garlic Sticks",
        "href": "/Bacon_and_Garlic_Sticks",
        "image": null
      },
      "Hamburger": {
        "name": "Hamburger",
        "href": "/Hamburger",
        "image": null
      },
      "Fried Chicken": {
        "name": "Fried Chicken",
        "href": "/Fried_Chicken",
        "image": null
      },
      "Steak": {
        "name": "Steak",
        "href": "/Steak",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Egg": {
    "name": "Egg",
    "href": "/Egg",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Fish Fillet with Egg": {
        "name": "Fish Fillet with Egg",
        "href": "/Fish_Fillet_with_Egg",
        "image": null
      },
      "Lemon Ice Cream": {
        "name": "Lemon Ice Cream",
        "href": "/Lemon_Ice_Cream",
        "image": null
      },
      "Egg Bun": {
        "name": "Egg Bun",
        "href": "/Egg_Bun",
        "image": null
      },
      "Easter Egg": {
        "name": "Easter Egg",
        "href": "/Easter_Egg",
        "image": null
      },
      "Scrambled Eggs": {
        "name": "Scrambled Eggs",
        "href": "/Scrambled_Eggs",
        "image": null
      },
      "Hard-Boiled Egg": {
        "name": "Hard-Boiled Egg",
        "href": "/Hard-Boiled_Egg",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Ramen": {
    "name": "Ramen",
    "href": "/Ramen",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Hot Ramen": {
        "name": "Hot Ramen",
        "href": "/Hot_Ramen",
        "image": null
      },
      "Stir Fried Ramen": {
        "name": "Stir Fried Ramen",
        "href": "/Stir_Fried_Ramen",
        "image": null
      },
      "Cold Noodles": {
        "name": "Cold Noodles",
        "href": "/Cold_Noodles",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "Put it in a bag, smash it into pieces, add some spices, shake it up, and eat.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Oriental Herb": {
    "name": "Oriental Herb",
    "href": "/Oriental_Herb",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Herbal Liquor": {
        "name": "Herbal Liquor",
        "href": "/Herbal_Liquor",
        "image": null
      },
      "Herbal Medicine": {
        "name": "Herbal Medicine",
        "href": "/Herbal_Medicine",
        "image": null
      },
      "Orchid": {
        "name": "Orchid",
        "href": "/Orchid",
        "image": null
      },
      "Oriental Concoction": {
        "name": "Oriental Concoction",
        "href": "/Oriental_Concoction",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "An herb used in traditional medicine.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Chocolate": {
    "name": "Chocolate",
    "href": "/Chocolate",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Chocolate Milk": {
        "name": "Chocolate Milk",
        "href": "/Chocolate_Milk",
        "image": null
      },
      "Hot Chocolate": {
        "name": "Hot Chocolate",
        "href": "/Hot_Chocolate",
        "image": null
      },
      "Choco Pie": {
        "name": "Choco Pie",
        "href": "/Choco_Pie",
        "image": null
      },
      "Easter Egg": {
        "name": "Easter Egg",
        "href": "/Easter_Egg",
        "image": null
      },
      "Whiskey Bonbon": {
        "name": "Whiskey Bonbon",
        "href": "/Whiskey_Bonbon",
        "image": null
      },
      "Choco Ice Cream": {
        "name": "Choco Ice Cream",
        "href": "/Choco_Ice_Cream",
        "image": null
      },
      "Chocolate Chip Cookies": {
        "name": "Chocolate Chip Cookies",
        "href": "/Chocolate_Chip_Cookies",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "When you're low on sugar, eating this makes you feel strong and happy.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Curry Powder": {
    "name": "Curry Powder",
    "href": "/Curry_Powder",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Tandoori Chicken": {
        "name": "Tandoori Chicken",
        "href": "/Tandoori_Chicken",
        "image": null
      },
      "Curry Bun": {
        "name": "Curry Bun",
        "href": "/Curry_Bun",
        "image": null
      },
      "Curry": {
        "name": "Curry",
        "href": "/Curry",
        "image": null
      },
      "Curry Croquette": {
        "name": "Curry Croquette",
        "href": "/Curry_Croquette",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 200"
    ],
    "description": "Would taste great if it were cooked with hot water.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Honey Cod Steak": {
    "name": "Honey Cod Steak",
    "href": "/Honey_Cod_Steak",
    "image": null,
    "requirements": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "buildsInto": {
      "Gleipnir": {
        "name": "Gleipnir",
        "href": "/Gleipnir",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 700"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Canned Cod Liver": {
    "name": "Canned Cod Liver",
    "href": "/Canned_Cod_Liver",
    "image": null,
    "requirements": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Can",
        "href": "/Can",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Can.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Can",
        "href": "/Can",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Can.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 650"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Garlic Bread": {
    "name": "Garlic Bread",
    "href": "/Garlic_Bread",
    "image": null,
    "requirements": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 500"
    ],
    "description": "One of the most delicious substances known to man.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Butter": {
    "name": "Butter",
    "href": "/Butter",
    "image": null,
    "requirements": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Chocolate Chip Cookies": {
        "name": "Chocolate Chip Cookies",
        "href": "/Chocolate_Chip_Cookies",
        "image": null
      },
      "Honey Butter": {
        "name": "Honey Butter",
        "href": "/Honey_Butter",
        "image": null
      },
      "Pound Cake": {
        "name": "Pound Cake",
        "href": "/Pound_Cake",
        "image": null
      },
      "Butter-Fried Potatoes": {
        "name": "Butter-Fried Potatoes",
        "href": "/Butter-Fried_Potatoes",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 450"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Herb Medicine": {
    "name": "Herb Medicine",
    "href": "/Herb_Medicine",
    "image": null,
    "requirements": [
      {
        "name": "Herbal Medicine",
        "href": "/Herbal_Medicine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Herb_Medicine.png/"
      },
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 650"
    ],
    "description": "As effective as it is bitter.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Bungeoppang": {
    "name": "Bungeoppang",
    "href": "/Bungeoppang",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Bungeoppang.png/",
    "requirements": [
      {
        "name": "Carp Bread",
        "href": "/Carp_Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Bungeoppang.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 400"
    ],
    "description": "Carefully contemplate where to take your first bite.. the head or the tail?",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Carp Bread": {
    "name": "Carp Bread",
    "href": "/Carp_Bread",
    "image": null,
    "requirements": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 400"
    ],
    "description": "Carefully contemplate where to take your first bite.. the head or the tail?",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Holy Water": {
    "name": "Holy Water",
    "href": "/Holy_Water",
    "image": null,
    "requirements": [],
    "buildsInto": {},
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "Holy water. Good for body and spirit.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Disinfectant": {
    "name": "Disinfectant",
    "href": "/Disinfectant",
    "image": null,
    "requirements": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Adhesive Bandage",
        "href": "/Adhesive_Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Band-Aid.png/"
      }
    ],
    "buildsInto": {
      "First Aid Kit": {
        "name": "First Aid Kit",
        "href": "/First_Aid_Kit",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Adhesive Bandage",
        "href": "/Adhesive_Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Band-Aid.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Choco Pie": {
    "name": "Choco Pie",
    "href": "/Choco_Pie",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Choco Pie Box": {
        "name": "Choco Pie Box",
        "href": "/Choco_Pie_Box",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": null,
        "href": "/Bread.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": null,
        "href": "/Chocolate.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "Delicious frozen or in the microwave.  You can even just eat the marshmallow in between",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Acupuncture Needle": {
    "name": "Acupuncture Needle",
    "href": "/Acupuncture_Needle",
    "image": null,
    "requirements": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 800"
    ],
    "description": "It stings.. but only just a little.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Orchid": {
    "name": "Orchid",
    "href": "/Orchid",
    "image": null,
    "requirements": [
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "buildsInto": {
      "Healing Potion": {
        "name": "Healing Potion",
        "href": "/Healing_Potion",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 500"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Tandoori Chicken": {
    "name": "Tandoori Chicken",
    "href": "/Tandoori_Chicken",
    "image": null,
    "requirements": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Bacon and Garlic Sticks": {
    "name": "Bacon and Garlic Sticks",
    "href": "/Bacon_and_Garlic_Sticks",
    "image": null,
    "requirements": [
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      },
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      },
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 650"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Bun": {
    "name": "Bun",
    "href": "/Bun",
    "image": null,
    "requirements": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Hamburger": {
    "name": "Hamburger",
    "href": "/Hamburger",
    "image": null,
    "requirements": [
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Potato Bread": {
    "name": "Potato Bread",
    "href": "/Potato_Bread",
    "image": null,
    "requirements": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 360"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Potato Soup": {
    "name": "Potato Soup",
    "href": "/Potato_Soup",
    "image": null,
    "requirements": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Fish Fillet with Egg": {
    "name": "Fish Fillet with Egg",
    "href": "/Fish_Fillet_with_Egg",
    "image": null,
    "requirements": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 700"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Citrus Cake": {
    "name": "Citrus Cake",
    "href": "/Citrus_Cake",
    "image": null,
    "requirements": [
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 360"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Lemon Ice Cream": {
    "name": "Lemon Ice Cream",
    "href": "/Lemon_Ice_Cream",
    "image": null,
    "requirements": [
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      },
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Lemon",
        "href": "/Lemon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Lemon.png/"
      },
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 500"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Honey Garlic Pickle": {
    "name": "Honey Garlic Pickle",
    "href": "/Honey_Garlic_Pickle",
    "image": null,
    "requirements": [
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 480"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Egg Bun": {
    "name": "Egg Bun",
    "href": "/Egg_Bun",
    "image": null,
    "requirements": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 400"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Easter Egg": {
    "name": "Easter Egg",
    "href": "/Easter_Egg",
    "image": null,
    "requirements": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Whiskey Bonbon": {
    "name": "Whiskey Bonbon",
    "href": "/Whiskey_Bonbon",
    "image": null,
    "requirements": [
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Whiskey",
        "href": "/Whiskey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/48/Whiskey.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 400"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Choco Ice Cream": {
    "name": "Choco Ice Cream",
    "href": "/Choco_Ice_Cream",
    "image": null,
    "requirements": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 550"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Curry Bun": {
    "name": "Curry Bun",
    "href": "/Curry_Bun",
    "image": null,
    "requirements": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 360"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "French Fries": {
    "name": "French Fries",
    "href": "/French_Fries",
    "image": null,
    "requirements": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Fish and Chips": {
        "name": "Fish and Chips",
        "href": "/Fish_and_Chips",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "This is undoubtedly the ultimate form of potato. Don't deny it.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Baked Potato": {
    "name": "Baked Potato",
    "href": "/Baked_Potato",
    "image": null,
    "requirements": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "Just add butter and salt for an fantastic side dish!",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Baked Carp": {
    "name": "Baked Carp",
    "href": "/Baked_Carp",
    "image": null,
    "requirements": [
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "Fish is actually one of the most common foods to choke on.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Grilled Chilean Sea Bass": {
    "name": "Grilled Chilean Sea Bass",
    "href": "/Grilled_Chilean_Sea_Bass",
    "image": null,
    "requirements": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 480"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Hot Ramen": {
    "name": "Hot Ramen",
    "href": "/Hot_Ramen",
    "image": null,
    "requirements": [
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Garlic Ramen": {
        "name": "Garlic Ramen",
        "href": "/Garlic_Ramen",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 550"
    ],
    "description": "With chopped onions and egg it tastes heavenly. You probably can't stop yourself from slurping it up when you eat.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Mocha Bread": {
    "name": "Mocha Bread",
    "href": "/Mocha_Bread",
    "image": null,
    "requirements": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Coffee Liqueur",
        "href": "/Coffee_Liqueur",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Coffee_Liqueur.png/"
      },
      {
        "name": "Coffee",
        "href": "/Coffee",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Coffee.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Coffee Liqueur",
        "href": "/Coffee_Liqueur",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Coffee_Liqueur.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 700"
    ],
    "description": "Bread with a slight coffee flavor. Both the cream and raisin varieties are popular in Korea.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Scrambled Eggs": {
    "name": "Scrambled Eggs",
    "href": "/Scrambled_Eggs",
    "image": null,
    "requirements": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 550"
    ],
    "description": "A common egg variety, competing with sunny-side-up. When you have no butter or milk, why not scramble an egg?",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Chocolate Chip Cookies": {
    "name": "Chocolate Chip Cookies",
    "href": "/Chocolate_Chip_Cookies",
    "image": null,
    "requirements": [
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      },
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      },
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 733"
    ],
    "description": "A timeless classic, the chocolate chip cookie is the king of snacks.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Choco Pie Box": {
    "name": "Choco Pie Box",
    "href": "/Choco_Pie_Box",
    "image": null,
    "requirements": [
      {
        "name": "Choco Pie",
        "href": "/Choco_Pie",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Chocolate_Pie.png/"
      },
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Chocolate",
        "href": "/Chocolate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/Chocolate.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Choco Pie",
        "href": "/Choco_Pie",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Chocolate_Pie.png/"
      },
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 733"
    ],
    "description": "A box of choco pies are like a first-aid kit for your soul.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Curry": {
    "name": "Curry",
    "href": "/Curry",
    "image": null,
    "requirements": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 480"
    ],
    "description": "Curry is a dish made by mixing many different kinds of spices. One of the main ingredients is turmeric, which may help prevent Alzheimer's disease.",
    "maxStacks": "5",
    "foundQuantity": "3"
  },
  "Oriental Concoction": {
    "name": "Oriental Concoction",
    "href": "/Oriental_Concoction",
    "image": null,
    "requirements": [
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "A concoction prepared by brewing medicial herbs. Revitalizes the body.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Honey Butter": {
    "name": "Honey Butter",
    "href": "/Honey_Butter",
    "image": null,
    "requirements": [
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 650"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Fried Chicken": {
    "name": "Fried Chicken",
    "href": "/Fried_Chicken",
    "image": null,
    "requirements": [
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 510"
    ],
    "description": "If it can fly and has wings and a beak, it's definitely a chicken. It could actually be a crow, pigeon, or whatever, but once you fry it, it will still be Fried Chicken.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Healing Potion": {
    "name": "Healing Potion",
    "href": "/Healing_Potion",
    "image": null,
    "requirements": [
      {
        "name": "Orchid",
        "href": "/Orchid",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3f/Orchid.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Orchid",
        "href": "/Orchid",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3f/Orchid.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 700"
    ],
    "description": "Also known as modern medicine.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Boiled Egg": {
    "name": "Boiled Egg",
    "href": "/Boiled_Egg",
    "image": null,
    "requirements": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Egg",
        "href": "/Egg",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/26/Egg.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Pound Cake": {
    "name": "Pound Cake",
    "href": "/Pound_Cake",
    "image": null,
    "requirements": [
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      },
      {
        "name": "Bread",
        "href": "/Bread",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e1/Bread.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 600"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Curry Croquette": {
    "name": "Curry Croquette",
    "href": "/Curry_Croquette",
    "image": null,
    "requirements": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Curry Powder",
        "href": "/Curry_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9a/Curry_Powder.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 550"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Steak": {
    "name": "Steak",
    "href": "/Steak",
    "image": null,
    "requirements": [
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Meat",
        "href": "/Meat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Meat.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 420"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "4"
  },
  "First Aid Kit": {
    "name": "First Aid Kit",
    "href": "/First_Aid_Kit",
    "image": null,
    "requirements": [
      {
        "name": "Styptic",
        "href": "/Styptic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Styptic.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Adhesive Bandage",
        "href": "/Adhesive_Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Band-Aid.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Styptic",
        "href": "/Styptic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Styptic.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 950"
    ],
    "description": "The best bet for treating injuries. If you're in a hurt, this looks more like a treasure chest.",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Butter-Fried Potatoes": {
    "name": "Butter-Fried Potatoes",
    "href": "/Butter-Fried_Potatoes",
    "image": null,
    "requirements": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      },
      {
        "name": "Milk",
        "href": "/Milk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Milk.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Butter",
        "href": "/Butter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Butter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 650"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Fish Cutlet": {
    "name": "Fish Cutlet",
    "href": "/Fish_Cutlet",
    "image": null,
    "requirements": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Fish and Chips": {
        "name": "Fish and Chips",
        "href": "/Fish_and_Chips",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 700"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "1"
  },
  "Stir Fried Ramen": {
    "name": "Stir Fried Ramen",
    "href": "/Stir_Fried_Ramen",
    "image": null,
    "requirements": [
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 550"
    ],
    "description": "Are there.. too many different ways to eat ramen?",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Cold Noodles": {
    "name": "Cold Noodles",
    "href": "/Cold_Noodles",
    "image": null,
    "requirements": [
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Ice Water",
        "href": "/Ice_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Ice_Water.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Ice Water",
        "href": "/Ice_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Ice_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 650"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Garlic Ramen": {
    "name": "Garlic Ramen",
    "href": "/Garlic_Ramen",
    "image": null,
    "requirements": [
      {
        "name": "Hot Ramen",
        "href": "/Hot_Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/23/Hot_Ramen.png/"
      },
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      },
      {
        "name": "Ramen",
        "href": "/Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Ramen.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Hot Ramen",
        "href": "/Hot_Ramen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/23/Hot_Ramen.png/"
      },
      {
        "name": "Garlic",
        "href": "/Garlic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Garlic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 700"
    ],
    "description": "You can't compete with expertly cooked ramen.",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Spicy Fish Stew": {
    "name": "Spicy Fish Stew",
    "href": "/Spicy_Fish_Stew",
    "image": null,
    "requirements": [
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Carp",
        "href": "/Carp",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Carp.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 550"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Zen Vitality": {
    "name": "Zen Vitality",
    "href": "/Zen_Vitality",
    "image": null,
    "requirements": [
      {
        "name": "Acupuncture Needle",
        "href": "/Acupuncture_Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Acupuncture.png/"
      },
      {
        "name": "Herbal Medicine",
        "href": "/Herbal_Medicine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Herb_Medicine.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Oriental Herb",
        "href": "/Oriental_Herb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Oriental_Herb.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Acupuncture Needle",
        "href": "/Acupuncture_Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Acupuncture.png/"
      },
      {
        "name": "Herbal Medicine",
        "href": "/Herbal_Medicine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Herb_Medicine.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP recovery +850"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Fish and Chips": {
    "name": "Fish and Chips",
    "href": "/Fish_and_Chips",
    "image": null,
    "requirements": [
      {
        "name": "Fish Cutlet",
        "href": "/Fish_Cutlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Fish_Cutlet.png/"
      },
      {
        "name": "French Fries",
        "href": "/French_Fries",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/French_Fries.png/"
      },
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Potato",
        "href": "/Potato",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Potato.png/"
      },
      {
        "name": "Heated Oil",
        "href": "/Heated_Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Heated_Oil.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Fish Cutlet",
        "href": "/Fish_Cutlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Fish_Cutlet.png/"
      },
      {
        "name": "French Fries",
        "href": "/French_Fries",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/French_Fries.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "HP Regen + 900"
    ],
    "description": "",
    "maxStacks": "5",
    "foundQuantity": "2"
  },
  "Hairband": {
    "name": "Hairband",
    "href": "/Hairband",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Mask": {
        "name": "Mask",
        "href": "/Mask",
        "image": null
      },
      "Circlet": {
        "name": "Circlet",
        "href": "/Circlet",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Defense + 4",
      "Max SP + 130"
    ],
    "description": "If you use a cheap one, the glue might stick to your hair or ears.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Hat": {
    "name": "Hat",
    "href": "/Hat",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Beret": {
        "name": "Beret",
        "href": "/Beret",
        "image": null
      },
      "Chain Coif": {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Defense + 4",
      "Cooldown Reduction + 5%"
    ],
    "description": "Nothing beats than a simple cap when it's sunny, raining, or snowing.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bike Helmet": {
    "name": "Bike Helmet",
    "href": "/Bike_Helmet",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Safety Helmet": {
        "name": "Safety Helmet",
        "href": "/Safety_Helmet",
        "image": null
      },
      "Ballistic Helmet": {
        "name": "Ballistic Helmet",
        "href": "/Ballistic_Helmet",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Max HP + 90"
    ],
    "description": "A shabby and cheap looking helmet for when you take your bike for a spin.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mask": {
    "name": "Mask",
    "href": "/Mask",
    "image": null,
    "requirements": [
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {
      "Close Helm": {
        "name": "Close Helm",
        "href": "/Close_Helm",
        "image": null
      },
      "Chinese Opera Mask": {
        "name": "Chinese Opera Mask",
        "href": "/Chinese_Opera_Mask",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 10",
      "Movement Speed + 0.08",
      "Max SP + 130"
    ],
    "description": "If you can escape from Lumia Island, try visiting the Carnival of Venice. It's one of the most popular festivals in the world, but you can visit only if you manage to get out of here alive.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Circlet": {
    "name": "Circlet",
    "href": "/Circlet",
    "image": null,
    "requirements": [
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Tiara": {
        "name": "Tiara",
        "href": "/Tiara",
        "image": null
      },
      "Crown": {
        "name": "Crown",
        "href": "/Crown",
        "image": null
      },
      "Laurel Wreath": {
        "name": "Laurel Wreath",
        "href": "/Laurel_Wreath",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 14",
      "Max SP + 270"
    ],
    "description": "A simple accessory worn on the head. It looks rather plain.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Beret": {
    "name": "Beret",
    "href": "/Beret",
    "image": null,
    "requirements": [
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {
      "Ballistic Helmet": {
        "name": "Ballistic Helmet",
        "href": "/Ballistic_Helmet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 5",
      "Max HP +50",
      "Cooldown Reduction + 13%"
    ],
    "description": "The trademark hat of painters and soldiers. It gets sweaty inside easily and it doesn't block the sun, but at least it looks cool.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Chain Coif": {
    "name": "Chain Coif",
    "href": "/Chain_Coif",
    "image": null,
    "requirements": [
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {
      "Close Helm": {
        "name": "Close Helm",
        "href": "/Close_Helm",
        "image": null
      },
      "Mithril Helm": {
        "name": "Mithril Helm",
        "href": "/Mithril_Helm",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 14",
      "Cooldown Reduction + 10%"
    ],
    "description": "A piece of defensive equipment that was commonly used in Medieval Europe. It's quite heavy, but has good defensive capabilities.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Safety Helmet": {
    "name": "Safety Helmet",
    "href": "/Safety_Helmet",
    "image": null,
    "requirements": [
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Fire Helmet": {
        "name": "Fire Helmet",
        "href": "/Fire_Helmet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Max HP + 210"
    ],
    "description": "Please wear your personal protective equipment in all construction areas.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Ballistic Helmet": {
    "name": "Ballistic Helmet",
    "href": "/Ballistic_Helmet",
    "image": null,
    "requirements": [
      {
        "name": "Beret",
        "href": "/Beret",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/43/Beret.png/"
      },
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      },
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {
      "Tactical OPS Helmet": {
        "name": "Tactical OPS Helmet",
        "href": "/Tactical_OPS_Helmet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Beret",
        "href": "/Beret",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/43/Beret.png/"
      },
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 10",
      "Max HP + 90",
      "Cooldown Reduction + 13%"
    ],
    "description": "Battered and tattered Ballistic Helmet. Initials marked inside the helmet scratched out and written over. Seems it's been passed around plenty of times.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fire Helmet": {
    "name": "Fire Helmet",
    "href": "/Fire_Helmet",
    "image": null,
    "requirements": [
      {
        "name": "Safety Helmet",
        "href": "/Safety_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/12/Safety_Helmet.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Motorcycle Helmet": {
        "name": "Motorcycle Helmet",
        "href": "/Motorcycle_Helmet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Safety Helmet",
        "href": "/Safety_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/12/Safety_Helmet.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Max HP + 280"
    ],
    "description": "Head protection for firefighters. Strong resistance to flames and heat. Also equipped with a flashlight!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Tiara": {
    "name": "Tiara",
    "href": "/Tiara",
    "image": null,
    "requirements": [
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Crystal Tiara": {
        "name": "Crystal Tiara",
        "href": "/Crystal_Tiara",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 14",
      "Max SP + 460"
    ],
    "description": "A crown-like accessory for the head. Worn by both princesses and beauty pagent winners.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Crown": {
    "name": "Crown",
    "href": "/Crown",
    "image": null,
    "requirements": [
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Imperial Crown": {
        "name": "Imperial Crown",
        "href": "/Imperial_Crown",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 16",
      "Max SP + 360",
      "Skill Damage Increase + 11%"
    ],
    "description": "The one  to wear the crown must bear its weight.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Close Helm": {
    "name": "Close Helm",
    "href": "/Close_Helm",
    "image": null,
    "requirements": [
      {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f0/Chain_Coif.png/"
      },
      {
        "name": "Mask",
        "href": "/Mask",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/Mask.png/"
      },
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {
      "Helm of Banneret": {
        "name": "Helm of Banneret",
        "href": "/Helm_of_Banneret",
        "image": null
      },
      "Imperial Burgonet": {
        "name": "Imperial Burgonet",
        "href": "/Imperial_Burgonet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f0/Chain_Coif.png/"
      },
      {
        "name": "Mask",
        "href": "/Mask",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/Mask.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 20",
      "Max SP + 130",
      "Movement Speed + 0.1",
      "Cooldown Reduction + 10%"
    ],
    "description": "A helmet made out of steel to protect the head of its wearer. It's heavy, but it makes you feel safe.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Motorcycle Helmet": {
    "name": "Motorcycle Helmet",
    "href": "/Motorcycle_Helmet",
    "image": null,
    "requirements": [
      {
        "name": "Fire Helmet",
        "href": "/Fire_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Fire_Helmet.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      },
      {
        "name": "Safety Helmet",
        "href": "/Safety_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/12/Safety_Helmet.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Fire Helmet",
        "href": "/Fire_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Fire_Helmet.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 10",
      "Max HP + 300",
      "Vision Range + 2.5"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Crystal Tiara": {
    "name": "Crystal Tiara",
    "href": "/Crystal_Tiara",
    "image": null,
    "requirements": [
      {
        "name": "Tiara",
        "href": "/Tiara",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Tiara.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Tiara",
        "href": "/Tiara",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Tiara.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 14",
      "Max SP + 700",
      "Critical Strike Chance + 22%"
    ],
    "description": "A tiara made of crystals. The intricacies are impressive.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mithril Helm": {
    "name": "Mithril Helm",
    "href": "/Mithril_Helm",
    "image": null,
    "requirements": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f0/Chain_Coif.png/"
      },
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f0/Chain_Coif.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 38",
      "Attack Speed (%) + 12%",
      "Movement Speed + 0.2",
      "Cooldown Reduction + 15%"
    ],
    "description": "A helm made of mithril that's been reforged through generations. Delicate reliefs carved into the surface hint at the craftsmanship invested into it.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Tactical OPS Helmet": {
    "name": "Tactical OPS Helmet",
    "href": "/Tactical_OPS_Helmet",
    "image": null,
    "requirements": [
      {
        "name": "Ballistic Helmet",
        "href": "/Ballistic_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7e/Ballistic_Helmet.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Beret",
        "href": "/Beret",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/43/Beret.png/"
      },
      {
        "name": "Bike Helmet",
        "href": "/Bike_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f1/Bike_Helmet.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ballistic Helmet",
        "href": "/Ballistic_Helmet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7e/Ballistic_Helmet.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 15",
      "Max HP + 120",
      "Attack Speed (%) + 20%",
      "Cooldown Reduction + 15%"
    ],
    "description": "A tactical helmet used by special forces. Military grade communication technology is built-in.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Helm of Banneret": {
    "name": "Helm of Banneret",
    "href": "/Helm_of_Banneret",
    "image": null,
    "requirements": [
      {
        "name": "Close Helm",
        "href": "/Close_Helm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Close_Helm.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f0/Chain_Coif.png/"
      },
      {
        "name": "Mask",
        "href": "/Mask",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/Mask.png/"
      },
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Close Helm",
        "href": "/Close_Helm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Close_Helm.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 20",
      "Max SP + 200",
      "Skill Damage Reduction + 11%",
      "Cooldown Reduction + 10%",
      "Movement Speed + 0.1"
    ],
    "description": "The war has begun and the righteous knight stands at the vanguard. May the blessings of victory be upon him.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Chinese Opera Mask": {
    "name": "Chinese Opera Mask",
    "href": "/Chinese_Opera_Mask",
    "image": null,
    "requirements": [
      {
        "name": "Mask",
        "href": "/Mask",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/Mask.png/"
      },
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Mask",
        "href": "/Mask",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/Mask.png/"
      },
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 16",
      "Max SP + 300",
      "Life Steal + 22%",
      "Movement Speed + 0.1",
      "Out of Combat Movement Speed + 0.4"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Imperial Crown": {
    "name": "Imperial Crown",
    "href": "/Imperial_Crown",
    "image": null,
    "requirements": [
      {
        "name": "Crown",
        "href": "/Crown",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Crown.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Crown",
        "href": "/Crown",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Crown.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 18",
      "Max HP + 300",
      "Max SP + 500",
      "Skill Damage Increase + 10%"
    ],
    "description": "A crown built for the first and only monarch of the Kingdom of Finland, Friedrich Karl. However, due to the adoption of the republican constitution before the coronation, the crown has never been used since.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Imperial Burgonet": {
    "name": "Imperial Burgonet",
    "href": "/Imperial_Burgonet",
    "image": null,
    "requirements": [
      {
        "name": "Close Helm",
        "href": "/Close_Helm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Close_Helm.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f0/Chain_Coif.png/"
      },
      {
        "name": "Mask",
        "href": "/Mask",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/Mask.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Hat",
        "href": "/Hat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hat.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Close Helm",
        "href": "/Close_Helm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Close_Helm.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 10",
      "Max SP + 200",
      "Movement Speed + 0.1",
      "Cooldown Reduction + 10%",
      "Skill Damage Increase + 14%"
    ],
    "description": "An extravagant burgonet used by the imperial family. Unlike a basic helmet, it is lavishly decorated",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Laurel Wreath": {
    "name": "Laurel Wreath",
    "href": "/Laurel_Wreath",
    "image": null,
    "requirements": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Hairband",
        "href": "/Hairband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Hairband.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Circlet",
        "href": "/Circlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/50/Circlet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 18",
      "Max SP + 580",
      "HP Regen + 1.5",
      "SP Regen + 2",
      "Extra Damage to Normal Attacks + 15"
    ],
    "description": "A crown made of branches of a laurel tree, which is a symbol of Apollo. Crowns symbolize wealth, but a laurel crown symbolizes honor.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Windbreaker": {
    "name": "Windbreaker",
    "href": "/Windbreaker",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Leather Jacket": {
        "name": "Leather Jacket",
        "href": "/Leather_Jacket",
        "image": null
      },
      "Military Suit": {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Max HP + 50",
      "Normal Attack Damage Taken Reduction + 3"
    ],
    "description": "A jumper that keeps you warm by blocking out the wind. It works best when it blocks the wind completely, so make sure to wear it properly!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Monk's Robe": {
    "name": "Monk's Robe",
    "href": "/Monk%27s_Robe",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Turtle Dobok": {
        "name": "Turtle Dobok",
        "href": "/Turtle_Dobok",
        "image": null
      },
      "Patched Robe": {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": null
      },
      "Buddha Sarira": {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Defense + 5",
      "Cooldown Reduction + 5%"
    ],
    "description": "Clothing for monks. The arm of each side is divided into four parts, representing Manjushri, Samantabhadra, Guanyin, and Ksitigarbha",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Wetsuit": {
    "name": "Wetsuit",
    "href": "/Wetsuit",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Bikini": {
        "name": "Bikini",
        "href": "/Bikini",
        "image": null
      },
      "Diving Suit": {
        "name": "Diving Suit",
        "href": "/Diving_Suit",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Defense + 1",
      "Skill Damage Reduction + 5%"
    ],
    "description": "A kind of swimsuit that covers parts of the legs and arms or the whole body from neck down. Aka a wet suit!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fabric Armor": {
    "name": "Fabric Armor",
    "href": "/Fabric_Armor",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Leather Armor": {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": null
      },
      "Sheet Metal Armor": {
        "name": "Sheet Metal Armor",
        "href": "/Sheet_Metal_Armor",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Defense + 11"
    ],
    "description": "Armor made from fabric. It doesn't seem to protect you from much. Good luck.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Leather Armor": {
    "name": "Leather Armor",
    "href": "/Leather_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Chain Armor": {
        "name": "Chain Armor",
        "href": "/Chain_Armor",
        "image": null
      },
      "Sunset Armor": {
        "name": "Sunset Armor",
        "href": "/Sunset_Armor",
        "image": null
      },
      "Mithril Armor": {
        "name": "Mithril Armor",
        "href": "/Mithril_Armor",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 22"
    ],
    "description": "Armor made from leather. Stronger than armor made from just fabric!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Leather Jacket": {
    "name": "Leather Jacket",
    "href": "/Leather_Jacket",
    "image": null,
    "requirements": [
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Rider Jacket": {
        "name": "Rider Jacket",
        "href": "/Rider_Jacket",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 8",
      "Max HP + 70",
      "Normal Attack Damage Taken Reduction + 6"
    ],
    "description": "A reliable jacket that doesn't tear easily. Useful in most weather conditions.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Turtle Dobok": {
    "name": "Turtle Dobok",
    "href": "/Turtle_Dobok",
    "image": null,
    "requirements": [
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "buildsInto": {
      "Dragon Dobok": {
        "name": "Dragon Dobok",
        "href": "/Dragon_Dobok",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 10",
      "Cooldown Reduction + 10%"
    ],
    "description": "A martial arts uniform worn by ninja turtles. They're obviously giant turtles, why do they need masks?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Military Suit": {
    "name": "Military Suit",
    "href": "/Military_Suit",
    "image": null,
    "requirements": [
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Suit": {
        "name": "Suit",
        "href": "/Suit",
        "image": null
      },
      "Bulletproof Vest": {
        "name": "Bulletproof Vest",
        "href": "/Bulletproof_Vest",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Max HP + 50",
      "Normal Attack Damage Taken Reduction + 10"
    ],
    "description": "Like a school uniform, these military uniforms get some people excited! But when you actually see them out in the street...meh.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bikini": {
    "name": "Bikini",
    "href": "/Bikini",
    "image": null,
    "requirements": [
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {
      "Amazoness Armor": {
        "name": "Amazoness Armor",
        "href": "/Amazoness_Armor",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 4",
      "Skill Damage Reduction + 11%"
    ],
    "description": "It's a bikini made of a thin fabric. You might wanna suck in your stomach when you're wearing it. It's so versatile, men can wear it, too.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Patched Robe": {
    "name": "Patched Robe",
    "href": "/Patched_Robe",
    "image": null,
    "requirements": [
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "EOD Suit": {
        "name": "EOD Suit",
        "href": "/EOD_Suit",
        "image": null
      },
      "Hanbok": {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 5",
      "Cooldown Reduction + 7%",
      "HP Regen + 1"
    ],
    "description": "Made by patching together various robes. Might be more reliable than a regular robe.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Dress": {
    "name": "Dress",
    "href": "/Dress",
    "image": null,
    "requirements": [
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {
      "Qipao": {
        "name": "Qipao",
        "href": "/Qipao",
        "image": null
      },
      "Blazing Dress": {
        "name": "Blazing Dress",
        "href": "/Blazing_Dress",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 8",
      "Attack Power + 8",
      "SP Regen (%) + 100%"
    ],
    "description": "Historically, not only women wore dresses as casual attire. In fact, it's only been about 600 years since men started wearing pants.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Diving Suit": {
    "name": "Diving Suit",
    "href": "/Diving_Suit",
    "image": null,
    "requirements": [
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {
      "Optical Camouflage Suit": {
        "name": "Optical Camouflage Suit",
        "href": "/Optical_Camouflage_Suit",
        "image": null
      },
      "Battle Suit": {
        "name": "Battle Suit",
        "href": "/Battle_Suit",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 9",
      "Skill Damage Reduction + 10%"
    ],
    "description": "A diving suit with filler between the inner and outer skin. It excels at maintaining body temperature and enduring higher pressure.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Rider Jacket": {
    "name": "Rider Jacket",
    "href": "/Rider_Jacket",
    "image": null,
    "requirements": [
      {
        "name": "Leather Jacket",
        "href": "/Leather_Jacket",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/de/Leather_Jacker.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Rocker's Jacket": {
        "name": "Rocker's Jacket",
        "href": "/Rocker%27s_Jacket",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Leather Jacket",
        "href": "/Leather_Jacket",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/de/Leather_Jacker.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 11",
      "Max HP + 70",
      "Normal Attack Damage Taken Reduction + 9"
    ],
    "description": "Worn more often as a fashion statement than for actual riding.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sunset Armor": {
    "name": "Sunset Armor",
    "href": "/Sunset_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 28",
      "Max HP + 450"
    ],
    "description": "Made of leather, it features a ruby that shines like a bright, red sun",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Covert Agent Uniform": {
    "name": "Covert Agent Uniform",
    "href": "/Covert_Agent_Uniform",
    "image": null,
    "requirements": [
      {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Hanbok.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "Sword of Justice": {
        "name": "Sword of Justice",
        "href": "/Sword_of_Justice",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Hanbok.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 23",
      "HP Regen + 2.5",
      "Cooldown Reduction + 15%"
    ],
    "description": "The uniform worn by agents that performed special missions for the King. Secretly.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Chain Armor": {
    "name": "Chain Armor",
    "href": "/Chain_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Commander's Armor": {
        "name": "Commander's Armor",
        "href": "/Commander%27s_Armor",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 30"
    ],
    "description": "Armor used in both Asia and Europe in the past. Made out of interconnecting metal links.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Suit": {
    "name": "Suit",
    "href": "/Suit",
    "image": null,
    "requirements": [
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Butler's Suit": {
        "name": "Butler's Suit",
        "href": "/Butler%27s_Suit",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Normal Attack Damage Taken Reduction + 12",
      "Life Steal + 5%"
    ],
    "description": "A sharp outfit that can be worn for any special event! Or if your office has a dress code!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Qipao": {
    "name": "Qipao",
    "href": "/Qipao",
    "image": null,
    "requirements": [
      {
        "name": "Dress",
        "href": "/Dress",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/49/Dress.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {
      "Dragon Dobok": {
        "name": "Dragon Dobok",
        "href": "/Dragon_Dobok",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Dress",
        "href": "/Dress",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/49/Dress.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 10",
      "Attack Power + 10",
      "SP Regen (%) + 150%"
    ],
    "description": "A traditional Chinese dress. They vary in style from simple cotton dresses to silk ones with elaborate fine details.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sheet Metal Armor": {
    "name": "Sheet Metal Armor",
    "href": "/Sheet_Metal_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Crusader Armor": {
        "name": "Crusader Armor",
        "href": "/Crusader_Armor",
        "image": null
      },
      "Amazoness Armor": {
        "name": "Amazoness Armor",
        "href": "/Amazoness_Armor",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 38",
      "Max HP + 100",
      "Movement Speed - 0.1"
    ],
    "description": "Armor comprised of several layers of metal plates. Sheet Metal Armor is effective at withstanding slashing and striking attacks, but is weaker against long-range weapons.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Hanbok": {
    "name": "Hanbok",
    "href": "/Hanbok",
    "image": null,
    "requirements": [
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "Covert Agent Uniform": {
        "name": "Covert Agent Uniform",
        "href": "/Covert_Agent_Uniform",
        "image": null
      },
      "Queen of Hearts": {
        "name": "Queen of Hearts",
        "href": "/Queen_of_Hearts",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 5",
      "HP Regen + 1",
      "Cooldown Reduction + 15%"
    ],
    "description": "A traditional Korean dress. The diverse range of colors and elegant embroidery enhances the harmony of curves and straight lines.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bulletproof Vest": {
    "name": "Bulletproof Vest",
    "href": "/Bulletproof_Vest",
    "image": null,
    "requirements": [
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Battle Suit": {
        "name": "Battle Suit",
        "href": "/Battle_Suit",
        "image": null
      },
      "EOD Suit": {
        "name": "EOD Suit",
        "href": "/EOD_Suit",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 10",
      "Max HP + 130",
      "Normal Attack Damage Taken Reduction + 10"
    ],
    "description": "A vest used to protect your torso from bullets. The rest of the body is still vulnerable, though",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Optical Camouflage Suit": {
    "name": "Optical Camouflage Suit",
    "href": "/Optical_Camouflage_Suit",
    "image": null,
    "requirements": [
      {
        "name": "Diving Suit",
        "href": "/Diving_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7f/Diving_Suit.png/"
      },
      {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/37/Glass_Panel.png/"
      },
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Glue",
        "href": "/Glue",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Glue.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Diving Suit",
        "href": "/Diving_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7f/Diving_Suit.png/"
      },
      {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/37/Glass_Panel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 10",
      "Defense + 20",
      "Critical Strike Chance + 22%",
      "Skill Damage Reduction + 10%"
    ],
    "description": "In the right environment, body parts covered by the suit become invisible.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "EOD Suit": {
    "name": "EOD Suit",
    "href": "/EOD_Suit",
    "image": null,
    "requirements": [
      {
        "name": "Bulletproof Vest",
        "href": "/Bulletproof_Vest",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ac/Bulletproof_Vest.png/"
      },
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bulletproof Vest",
        "href": "/Bulletproof_Vest",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ac/Bulletproof_Vest.png/"
      },
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 15",
      "Max HP + 300",
      "Normal Attack Damage Taken Reduction + 10",
      "HP Regen + 1",
      "Cooldown Reduction + 10%"
    ],
    "description": "Originally developed as a bulletproof vest, often used at bomb disposal sites due to its protection.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Butler's Suit": {
    "name": "Butler's Suit",
    "href": "/Butler%27s_Suit",
    "image": null,
    "requirements": [
      {
        "name": "Suit",
        "href": "/Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Suit.png/"
      },
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      },
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Suit",
        "href": "/Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Suit.png/"
      },
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 30",
      "Defense from Normal Attacks + 10",
      "Movement Speed + 0.1",
      "Life Steal + 20%"
    ],
    "description": "A graceful and courteous attitude, a soft tone, and a swallow-tailed black coat are the essentials of a butler. We can get a taste of high society by looking at them.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Rocker's Jacket": {
    "name": "Rocker's Jacket",
    "href": "/Rocker%27s_Jacket",
    "image": null,
    "requirements": [
      {
        "name": "Rider Jacket",
        "href": "/Rider_Jacket",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Rider_Jacket.png/"
      },
      {
        "name": "Clang Clatter",
        "href": "/Clang_Clatter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Clang_Clatter.png/"
      },
      {
        "name": "Leather Jacket",
        "href": "/Leather_Jacket",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/de/Leather_Jacker.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Can",
        "href": "/Can",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Can.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Rider Jacket",
        "href": "/Rider_Jacket",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Rider_Jacket.png/"
      },
      {
        "name": "Clang Clatter",
        "href": "/Clang_Clatter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Clang_Clatter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 30",
      "Defense + 11",
      "Normal Attack Damage Taken Reduction + 15",
      "Movement Speed while out of Combat + 0.3",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "There's something burning in my HEART. Today, I can do anything.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mithril Armor": {
    "name": "Mithril Armor",
    "href": "/Mithril_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 65",
      "Attack Speed (%) + 12%",
      "Movement Speed + 0.2"
    ],
    "description": "Normal chain armor cannot completely protect its wearer from external impact, but the Mithril material on this armor defies the normality of chain armor.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Crusader Armor": {
    "name": "Crusader Armor",
    "href": "/Crusader_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Sheet Metal Armor",
        "href": "/Sheet_Metal_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Sheet_Metal_Armor.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sheet Metal Armor",
        "href": "/Sheet_Metal_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Sheet_Metal_Armor.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 30",
      "HP Regen (%) + 200%",
      "Extra Damage to Normal Attacks + 20",
      "Movement Speed - 0.1"
    ],
    "description": "Some say that this armor provides special protection from the undead. It's a shame there's no zombies around here.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Amazoness Armor": {
    "name": "Amazoness Armor",
    "href": "/Amazoness_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Sheet Metal Armor",
        "href": "/Sheet_Metal_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Sheet_Metal_Armor.png/"
      },
      {
        "name": "Bikini",
        "href": "/Bikini",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Bikini.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sheet Metal Armor",
        "href": "/Sheet_Metal_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Sheet_Metal_Armor.png/"
      },
      {
        "name": "Bikini",
        "href": "/Bikini",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Bikini.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 28",
      "Max HP + 120",
      "Skill Damage Reduction + 20%"
    ],
    "description": "Armor bestowed upon female warriors with outstanding archery ability and agility. Allows for flexibilty and protection.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Dragon Dobok": {
    "name": "Dragon Dobok",
    "href": "/Dragon_Dobok",
    "image": null,
    "requirements": [
      {
        "name": "Qipao",
        "href": "/Qipao",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/89/Qipao.png/"
      },
      {
        "name": "Turtle Dobok",
        "href": "/Turtle_Dobok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6f/Turtle_Dobok.png/"
      },
      {
        "name": "Dress",
        "href": "/Dress",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/49/Dress.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Qipao",
        "href": "/Qipao",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/89/Qipao.png/"
      },
      {
        "name": "Turtle Dobok",
        "href": "/Turtle_Dobok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6f/Turtle_Dobok.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 10",
      "Attack Power + 11",
      "SP Regen (%) + 150%",
      "Cooldown Reduction + 10%",
      "Attack Range + 1m"
    ],
    "description": "A martial arts uniform designed for mental and physical training. You only qualify to wear this if you fulfill a particular set of prerequisites.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Commander's Armor": {
    "name": "Commander's Armor",
    "href": "/Commander%27s_Armor",
    "image": null,
    "requirements": [
      {
        "name": "Chain Armor",
        "href": "/Chain_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Chain_Armor.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Kabana": {
        "name": "Kabana",
        "href": "/Kabana",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Chain Armor",
        "href": "/Chain_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Chain_Armor.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 20",
      "Skill Damage Increase + 16%"
    ],
    "description": "It's the General's armor, so it gotta be the strongest armor in town.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Battle Suit": {
    "name": "Battle Suit",
    "href": "/Battle_Suit",
    "image": null,
    "requirements": [
      {
        "name": "Bulletproof Vest",
        "href": "/Bulletproof_Vest",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ac/Bulletproof_Vest.png/"
      },
      {
        "name": "Diving Suit",
        "href": "/Diving_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7f/Diving_Suit.png/"
      },
      {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Military_Suit.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Wetsuit",
        "href": "/Wetsuit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d9/Full_Body_Swimsuit.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Windbreaker",
        "href": "/Windbreaker",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b8/Windbreaker.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bulletproof Vest",
        "href": "/Bulletproof_Vest",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ac/Bulletproof_Vest.png/"
      },
      {
        "name": "Diving Suit",
        "href": "/Diving_Suit",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7f/Diving_Suit.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 25",
      "Max HP + 140",
      "Normal Attack Damage Taken Reduction + 12",
      "Skill Damage Reduction + 12%"
    ],
    "description": "A futuristic combat suit. It's made with bulletproof material that makes it great armor. However, when worn in hot areas, you might die of dehydration before encountering a single foe.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Kabana": {
    "name": "Kabana",
    "href": "/Kabana",
    "image": null,
    "requirements": [
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Commander's Armor",
        "href": "/Commander%27s_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Commander%27s_Armor.png/"
      },
      {
        "name": "Chain Armor",
        "href": "/Chain_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Chain_Armor.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Leather Armor",
        "href": "/Leather_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Leather_Armor.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Fabric Armor",
        "href": "/Fabric_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Fabric_Armor.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Commander's Armor",
        "href": "/Commander%27s_Armor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Commander%27s_Armor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 36",
      "Skill Damage Increase + 18%"
    ],
    "description": "The armor of Karna, hero of the epic, Mahabharata. The armor becomes one with the body.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Queen of Hearts": {
    "name": "Queen of Hearts",
    "href": "/Queen_of_Hearts",
    "image": null,
    "requirements": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Hanbok.png/"
      },
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Hanbok.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 45",
      "HP Regen + 3",
      "Cooldown Reduction + 25%"
    ],
    "description": "A magical cloak that only a true queen can wear. The magic from the cloak protected the Queen, but its power hasn't been used for a while...",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Blazing Dress": {
    "name": "Blazing Dress",
    "href": "/Blazing_Dress",
    "image": null,
    "requirements": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Dress",
        "href": "/Dress",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/49/Dress.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Scissors",
        "href": "/Scissors",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Dress",
        "href": "/Dress",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/49/Dress.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 25",
      "SP Regen (%) + 75%",
      "SP Regen + 3",
      "HP Regen + 2.5",
      "Extra Normal Attack Damage + 22"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Watch": {
    "name": "Watch",
    "href": "/Watch",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Vital Sign Sensor": {
        "name": "Vital Sign Sensor",
        "href": "/Vital_Sign_Sensor",
        "image": null
      },
      "Cube Watch": {
        "name": "Cube Watch",
        "href": "/Cube_Watch",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Speed (%) + 10%"
    ],
    "description": "It's right twice a day.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bandage": {
    "name": "Bandage",
    "href": "/Bandage",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Patched Robe": {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": null
      },
      "Squad Leader Armband": {
        "name": "Squad Leader Armband",
        "href": "/Squad_Leader_Armband",
        "image": null
      },
      "Bracer": {
        "name": "Bracer",
        "href": "/Bracer",
        "image": null
      },
      "First Aid Kit": {
        "name": "First Aid Kit",
        "href": "/First_Aid_Kit",
        "image": null
      },
      "Oilcloth": {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen + 0.8"
    ],
    "description": "A patch that's pretty stretchy. It's good for covering injuries.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bracelet": {
    "name": "Bracelet",
    "href": "/Bracelet",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Golden Bracelet": {
        "name": "Golden Bracelet",
        "href": "/Golden_Bracelet",
        "image": null
      },
      "Crimson Bracelet": {
        "name": "Crimson Bracelet",
        "href": "/Crimson_Bracelet",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Max SP + 220"
    ],
    "description": "A metal bracelet. It feels tight. Maybe you're just nervous.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Squad Leader Armband": {
    "name": "Squad Leader Armband",
    "href": "/Squad_Leader_Armband",
    "image": null,
    "requirements": [
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      }
    ],
    "buildsInto": {
      "Creed of the Knight": {
        "name": "Creed of the Knight",
        "href": "/Creed_of_the_Knight",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen + 1.5",
      "Critical Strike Damage + 15%"
    ],
    "description": "An armband normally worn by a squad commander. How did you get this?!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Leather Shield": {
    "name": "Leather Shield",
    "href": "/Leather_Shield",
    "image": null,
    "requirements": [
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Steel Shield": {
        "name": "Steel Shield",
        "href": "/Steel_Shield",
        "image": null
      },
      "Mithril Shield": {
        "name": "Mithril Shield",
        "href": "/Mithril_Shield",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 10",
      "Defense + 10"
    ],
    "description": "Strong, but flexible. Not the best for blocking sharp attacks, but it's better than nothing.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bracer": {
    "name": "Bracer",
    "href": "/Bracer",
    "image": null,
    "requirements": [
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Bazuband": {
        "name": "Bazuband",
        "href": "/Bazuband",
        "image": null
      },
      "Draupnir": {
        "name": "Draupnir",
        "href": "/Draupnir",
        "image": null
      },
      "Auto-arms": {
        "name": "Auto-arms",
        "href": "/Auto-arms",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 13",
      "HP Regen + 1"
    ],
    "description": "Throw this on your wrist to protect you from the bow string.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sheath": {
    "name": "Sheath",
    "href": "/Sheath",
    "image": null,
    "requirements": [
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Sword of Shah Jahan": {
        "name": "Sword of Shah Jahan",
        "href": "/Sword_of_Shah_Jahan",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 18",
      "Normal Attack Damage Taken Reduction + 2"
    ],
    "description": "Used to keep your blade sharp. Often decorated with jewels.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Cube Watch": {
    "name": "Cube Watch",
    "href": "/Cube_Watch",
    "image": null,
    "requirements": [
      {
        "name": "Watch",
        "href": "/Watch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Watch.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Watch",
        "href": "/Watch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Watch.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 27",
      "Attack Speed (%) + 50%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Golden Bracelet": {
    "name": "Golden Bracelet",
    "href": "/Golden_Bracelet",
    "image": null,
    "requirements": [
      {
        "name": "Bracelet",
        "href": "/Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Bracelet.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Draupnir": {
        "name": "Draupnir",
        "href": "/Draupnir",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bracelet",
        "href": "/Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Bracelet.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Max SP + 220",
      "Skill Damage Increase + 12%"
    ],
    "description": "Most gold accessories are actually gold alloys. True gold is too soft. This golden bracelet would have been worth far more if it were 100% gold.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bazuband": {
    "name": "Bazuband",
    "href": "/Bazuband",
    "image": null,
    "requirements": [
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Sword Stopper": {
        "name": "Sword Stopper",
        "href": "/Sword_Stopper",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 25",
      "Normal Attack Damage Taken Reduction + 8"
    ],
    "description": "Older styled forearm protectors to protect your, well, forearms.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Crimson Bracelet": {
    "name": "Crimson Bracelet",
    "href": "/Crimson_Bracelet",
    "image": null,
    "requirements": [
      {
        "name": "Bracelet",
        "href": "/Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Bracelet.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Bracelet of Skadi": {
        "name": "Bracelet of Skadi",
        "href": "/Bracelet_of_Skadi",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bracelet",
        "href": "/Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Bracelet.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Max HP + 200",
      "Max SP + 250"
    ],
    "description": "A bracelet lavish with white and red gemstones. However, the large size of the beads may be somewhat annoying the wearer.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Steel Shield": {
    "name": "Steel Shield",
    "href": "/Steel_Shield",
    "image": null,
    "requirements": [
      {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Leather_Shield.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Creed of the Knight": {
        "name": "Creed of the Knight",
        "href": "/Creed_of_the_Knight",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Leather_Shield.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 23",
      "Defense + 25",
      "Movement Speed - 0.1"
    ],
    "description": "A durable shield made of metal and leather.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sword Stopper": {
    "name": "Sword Stopper",
    "href": "/Sword_Stopper",
    "image": null,
    "requirements": [
      {
        "name": "Bazuband",
        "href": "/Bazuband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Bazuband.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bazuband",
        "href": "/Bazuband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Bazuband.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 26",
      "Normal Attack Damage Taken Reduction + 11",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "It is, quite literally, armor that protects from swords. The hooks on it catch and entangle blades",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mithril Shield": {
    "name": "Mithril Shield",
    "href": "/Mithril_Shield",
    "image": null,
    "requirements": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Leather_Shield.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Leather_Shield.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 30",
      "Defense + 30",
      "Attack Speed (%) + 12%",
      "Movement Speed + 0.1"
    ],
    "description": "A shield made with Mithril. It's light, but the strength is beyond imagination.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Vital Sign Sensor": {
    "name": "Vital Sign Sensor",
    "href": "/Vital_Sign_Sensor",
    "image": null,
    "requirements": [
      {
        "name": "Watch",
        "href": "/Watch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Watch.png/"
      },
      {
        "name": "Cell Phone",
        "href": "/Cell_Phone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/03/Cell_Phone.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Radar": {
        "name": "Radar",
        "href": "/Radar",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Watch",
        "href": "/Watch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Watch.png/"
      },
      {
        "name": "Cell Phone",
        "href": "/Cell_Phone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/03/Cell_Phone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 15",
      "Attack Speed (%) + 30%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Draupnir": {
    "name": "Draupnir",
    "href": "/Draupnir",
    "image": null,
    "requirements": [
      {
        "name": "Golden Bracelet",
        "href": "/Golden_Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Golden_Bracelet.png/"
      },
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      },
      {
        "name": "Bracelet",
        "href": "/Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Bracelet.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Golden Bracelet",
        "href": "/Golden_Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6c/Golden_Bracelet.png/"
      },
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 10",
      "Max SP + 240",
      "HP Regen + 1",
      "Skill Amplification + 15%"
    ],
    "description": "The magical golden bracelet of the Norse God, Odin. It has the power to provide unthinkable riches... and a full stomach",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Creed of the Knight": {
    "name": "Creed of the Knight",
    "href": "/Creed_of_the_Knight",
    "image": null,
    "requirements": [
      {
        "name": "Steel Shield",
        "href": "/Steel_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/21/Steel_Shield.png/"
      },
      {
        "name": "Squad Leader Armband",
        "href": "/Squad_Leader_Armband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d1/Squad_Leader_Armband.png/"
      },
      {
        "name": "Leather Shield",
        "href": "/Leather_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Leather_Shield.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Steel Shield",
        "href": "/Steel_Shield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/21/Steel_Shield.png/"
      },
      {
        "name": "Squad Leader Armband",
        "href": "/Squad_Leader_Armband",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d1/Squad_Leader_Armband.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 30",
      "Defense + 25",
      "HP Regen + 1.5",
      "Critical Strike Damage + 20%",
      "Movement Speed - 0.1"
    ],
    "description": "Shielding is not just a skill that must be mastered by a knight, but also symbolizes a knight's creed to protect the weak.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sword of Shah Jahan": {
    "name": "Sword of Shah Jahan",
    "href": "/Sword_of_Shah_Jahan",
    "image": null,
    "requirements": [
      {
        "name": "Sheath",
        "href": "/Sheath",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sheath.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sheath",
        "href": "/Sheath",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sheath.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 28",
      "Max HP + 350",
      "Normal Attack Damage Taken Reduction + 2"
    ],
    "description": "A sword used by the emperor of India's great Mughal Empire. Due to the jewels around the sword, historians doubt its use in battle.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bracelet of Skadi": {
    "name": "Bracelet of Skadi",
    "href": "/Bracelet_of_Skadi",
    "image": null,
    "requirements": [
      {
        "name": "Glacial Ice",
        "href": "/Glacial_Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Glacial_Ice.png/"
      },
      {
        "name": "Crimson Bracelet",
        "href": "/Crimson_Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Crimson_Bracelet.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Bracelet",
        "href": "/Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Bracelet.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Glacial Ice",
        "href": "/Glacial_Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Glacial_Ice.png/"
      },
      {
        "name": "Crimson Bracelet",
        "href": "/Crimson_Bracelet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Crimson_Bracelet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Max HP + 200",
      "Max SP + 250",
      "SP Regen + 2",
      "HP Regen + 2",
      "Skill Damage Increase + 20"
    ],
    "description": "A bracelet worn by Skadi, a Norse Goddess associated with winter. Do you feel a chill?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Auto-arms": {
    "name": "Auto-arms",
    "href": "/Auto-arms",
    "image": null,
    "requirements": [
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      },
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bracer",
        "href": "/Bracer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Bracer.png/"
      },
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 40",
      "Defense + 35",
      "HP Regen + 1.5"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Radar": {
    "name": "Radar",
    "href": "/Radar",
    "image": null,
    "requirements": [
      {
        "name": "Vital Sign Sensor",
        "href": "/Vital_Sign_Sensor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Vital_Sign_Sensor.png/"
      },
      {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/37/Glass_Panel.png/"
      },
      {
        "name": "Watch",
        "href": "/Watch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Watch.png/"
      },
      {
        "name": "Cell Phone",
        "href": "/Cell_Phone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/03/Cell_Phone.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Glue",
        "href": "/Glue",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Glue.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Vital Sign Sensor",
        "href": "/Vital_Sign_Sensor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Vital_Sign_Sensor.png/"
      },
      {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/37/Glass_Panel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 15",
      "Critical Strike Chance + 20%",
      "Attack Speed (%) + 35%"
    ],
    "description": "If you can get it working properly, it might help you find the location of anyone in the world.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Slippers": {
    "name": "Slippers",
    "href": "/Slippers",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "High Heels": {
        "name": "High Heels",
        "href": "/High_Heels",
        "image": null
      },
      "Repaired Slippers": {
        "name": "Repaired Slippers",
        "href": "/Repaired_Slippers",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "SP Regen + 0.5",
      "Movement Speed + 0.04"
    ],
    "description": "A slipper soaked in sweat. The stench alone makes it a serious contender as a lethal weapon.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Running Shoes": {
    "name": "Running Shoes",
    "href": "/Running_Shoes",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Heelys": {
        "name": "Heelys",
        "href": "/Heelys",
        "image": null
      },
      "Boots": {
        "name": "Boots",
        "href": "/Boots",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Movement Speed + 0.08"
    ],
    "description": "Everyone likes running shoes. You can walk in them, too y'know.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Tights": {
    "name": "Tights",
    "href": "/Tights",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Knee Pads": {
        "name": "Knee Pads",
        "href": "/Knee_Pads",
        "image": null
      },
      "Chain Leggings": {
        "name": "Chain Leggings",
        "href": "/Chain_Leggings",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Defense + 5",
      "Movement Speed + 0.04"
    ],
    "description": "It's thin and tight. You can wear them on your legs or over your head if you're going to rob a bank.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Knee Pads": {
    "name": "Knee Pads",
    "href": "/Knee_Pads",
    "image": null,
    "requirements": [
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Steel Knee Pads": {
        "name": "Steel Knee Pads",
        "href": "/Steel_Knee_Pads",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 8",
      "Movement Speed + 0.16"
    ],
    "description": "Learning to ride a bike? Put these on.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Chain Leggings": {
    "name": "Chain Leggings",
    "href": "/Chain_Leggings",
    "image": null,
    "requirements": [
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {
      "Mithril Boots": {
        "name": "Mithril Boots",
        "href": "/Mithril_Boots",
        "image": null
      },
      "Bucephalus": {
        "name": "Bucephalus",
        "href": "/Bucephalus",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Defense + 10",
      "Movement Speed + 0.14"
    ],
    "description": "Protective leg equipment. Very effective and easily made.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "High Heels": {
    "name": "High Heels",
    "href": "/High_Heels",
    "image": null,
    "requirements": [
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "buildsInto": {
      "Killer Heels": {
        "name": "Killer Heels",
        "href": "/Killer_Heels",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Movement Speed + 0.17",
      "SP Regen + 0.8"
    ],
    "description": "Makes you a bit taller. Maybe the air is fresher up there.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Heelys": {
    "name": "Heelys",
    "href": "/Heelys",
    "image": null,
    "requirements": [
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      }
    ],
    "buildsInto": {
      "Maverick Runner": {
        "name": "Maverick Runner",
        "href": "/Maverick_Runner",
        "image": null
      },
      "Boots of Hermes": {
        "name": "Boots of Hermes",
        "href": "/Boots_of_Hermes",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Movement Speed + 0.12",
      "Movement Speed While out of Combat + 0.2"
    ],
    "description": "They look like regular shoes, but you can ride them like rollerblades because of the wheels mounted in the heels. That's just the way I roll.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Repaired Slippers": {
    "name": "Repaired Slippers",
    "href": "/Repaired_Slippers",
    "image": null,
    "requirements": [
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      }
    ],
    "buildsInto": {
      "Straitjacket Sneakers": {
        "name": "Straitjacket Sneakers",
        "href": "/Straitjacket_Sneakers",
        "image": null
      },
      "Glacial Shoes": {
        "name": "Glacial Shoes",
        "href": "/Glacial_Shoes",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen + 0.5",
      "SP Regen (%) + 30%",
      "Movement Speed + 0.16"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Boots": {
    "name": "Boots",
    "href": "/Boots",
    "image": null,
    "requirements": [
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "Combat Boots": {
        "name": "Combat Boots",
        "href": "/Combat_Boots",
        "image": null
      },
      "EOD Boots": {
        "name": "EOD Boots",
        "href": "/EOD_Boots",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 0.6",
      "Attack Speed (%) + 2%",
      "Movement Speed + 0.22"
    ],
    "description": "Protects your feet and calves. Don't wear them too tight -- it might restrict your bloodflow.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Steel Knee Pads": {
    "name": "Steel Knee Pads",
    "href": "/Steel_Knee_Pads",
    "image": null,
    "requirements": [
      {
        "name": "Knee Pads",
        "href": "/Knee_Pads",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Knee_Pads.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "EOD Boots": {
        "name": "EOD Boots",
        "href": "/EOD_Boots",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Knee Pads",
        "href": "/Knee_Pads",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Knee_Pads.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Defense + 20",
      "Movement Speed + 0.24"
    ],
    "description": "A kick to the shin is a favorite among angry girlfriends. Keep your shins protected.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Straitjacket Sneakers": {
    "name": "Straitjacket Sneakers",
    "href": "/Straitjacket_Sneakers",
    "image": null,
    "requirements": [
      {
        "name": "Straitjacker Sneakers",
        "href": "/Straitjacker_Sneakers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Straitjacket_Sneakers.png/"
      },
      {
        "name": "Repaired Slippers",
        "href": "/Repaired_Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Repaired_Slippers.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Repaired Slippers",
        "href": "/Repaired_Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Repaired_Slippers.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen + 0.7",
      "SP Regen (%) + 50%",
      "Movement Speed + 0.35",
      "Skill Damage Increase + 10"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Maverick Runner": {
    "name": "Maverick Runner",
    "href": "/Maverick_Runner",
    "image": null,
    "requirements": [
      {
        "name": "Heelys",
        "href": "/Heelys",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Heelys.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Heelys",
        "href": "/Heelys",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Heelys.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Movement Speed + 0.25",
      "Movement Speed While out of Combat + 0.5",
      "Attack Speed + 15%"
    ],
    "description": "Heelys designed using futuristic concepts by the world renowned fashion company, Soberef. The parts are even certified by the Federal Aviation Administration. They are driven by linear motors that can get propulsion even when stopped, and there are eight compressed gas injection devices on the front allowing for limited three-dimensional operation. Also, they're LOUD.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Combat Boots": {
    "name": "Combat Boots",
    "href": "/Combat_Boots",
    "image": null,
    "requirements": [
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "Feather Boots": {
        "name": "Feather Boots",
        "href": "/Feather_Boots",
        "image": null
      },
      "White Rhinos": {
        "name": "White Rhinos",
        "href": "/White_Rhinos",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 0.6",
      "Attack Speed (%) + 7%",
      "Movement Speed + 0.27"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Killer Heels": {
    "name": "Killer Heels",
    "href": "/Killer_Heels",
    "image": null,
    "requirements": [
      {
        "name": "High Heels",
        "href": "/High_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/High_Heels.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Bucephalus": {
        "name": "Bucephalus",
        "href": "/Bucephalus",
        "image": null
      },
      "Red Shoes": {
        "name": "Red Shoes",
        "href": "/Red_Shoes",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "High Heels",
        "href": "/High_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/High_Heels.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 5",
      "Movement Speed + 0.16",
      "SP Regen + 0.8",
      "Critical Strike Chance + 10%"
    ],
    "description": "Heels sharp enough to be used as weapons themselves.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Feather Boots": {
    "name": "Feather Boots",
    "href": "/Feather_Boots",
    "image": null,
    "requirements": [
      {
        "name": "Combat Boots",
        "href": "/Combat_Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Combat_Boots.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "HP Regen + 1",
      "Attack Speed (%) + 30%",
      "Movement Speed + 0.4"
    ],
    "description": "They feel as light as a feather! Maybe because that's what they're made of!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mithril Boots": {
    "name": "Mithril Boots",
    "href": "/Mithril_Boots",
    "image": null,
    "requirements": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Chain Leggings",
        "href": "/Chain_Leggings",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Chain_Leggings.png/"
      },
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Chain Leggings",
        "href": "/Chain_Leggings",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Chain_Leggings.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Defense + 22",
      "Attack Speed (%) + 12%",
      "Movement Speed + 0.45"
    ],
    "description": "Boots made out of mithril. Stronger than steel and fireproof, too!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bucephalus": {
    "name": "Bucephalus",
    "href": "/Bucephalus",
    "image": null,
    "requirements": [
      {
        "name": "Killer Heels",
        "href": "/Killer_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Killer_Heels.png/"
      },
      {
        "name": "Chain Leggings",
        "href": "/Chain_Leggings",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Chain_Leggings.png/"
      },
      {
        "name": "High Heels",
        "href": "/High_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/High_Heels.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Killer Heels",
        "href": "/Killer_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Killer_Heels.png/"
      },
      {
        "name": "Chain Leggings",
        "href": "/Chain_Leggings",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Chain_Leggings.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 5",
      "Defense + 5",
      "Critical Strike Chance + 17%",
      "Movement Speed + 0.33",
      "SP Regen + 1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "White Rhinos": {
    "name": "White Rhinos",
    "href": "/White_Rhinos",
    "image": null,
    "requirements": [
      {
        "name": "Combat Boots",
        "href": "/Combat_Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Combat_Boots.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Combat Boots",
        "href": "/Combat_Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Combat_Boots.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Speed (%) + 15%",
      "Movement Speed + 0.35",
      "HP Regen + 0.7",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "What kind of rhino wears boots..?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "EOD Boots": {
    "name": "EOD Boots",
    "href": "/EOD_Boots",
    "image": null,
    "requirements": [
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Steel Knee Pads",
        "href": "/Steel_Knee_Pads",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Steel_Knee_Pads.png/"
      },
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Knee Pads",
        "href": "/Knee_Pads",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Knee_Pads.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Tights",
        "href": "/Tights",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Tights.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Boots",
        "href": "/Boots",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/59/Boots.png/"
      },
      {
        "name": "Steel Knee Pads",
        "href": "/Steel_Knee_Pads",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Steel_Knee_Pads.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 23",
      "Movement Speed + 0.33",
      "HP Regen + 1"
    ],
    "description": "Boots worn by explosives disposal teams. They protect the wearer's legs from shrapnel if something goes wrong.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Red Shoes": {
    "name": "Red Shoes",
    "href": "/Red_Shoes",
    "image": null,
    "requirements": [
      {
        "name": "Killer Heels",
        "href": "/Killer_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Killer_Heels.png/"
      },
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "High Heels",
        "href": "/High_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/High_Heels.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Killer Heels",
        "href": "/Killer_Heels",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Killer_Heels.png/"
      },
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 5",
      "SP Regen + 1",
      "Critical Strike Chance + 10%",
      "Movement Speed + 0.4",
      "Life Steal + 15%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Glacial Shoes": {
    "name": "Glacial Shoes",
    "href": "/Glacial_Shoes",
    "image": null,
    "requirements": [
      {
        "name": "Repaired Slippers",
        "href": "/Repaired_Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Repaired_Slippers.png/"
      },
      {
        "name": "Slippers",
        "href": "/Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Slippers.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Repaired Slippers",
        "href": "/Repaired_Slippers",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Repaired_Slippers.png/"
      },
      {
        "name": "Glacial Shoes",
        "href": "/Glacial_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Glacial_Ice.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "HP Regen + 2",
      "SP Regen + 2",
      "SP Regen (%) + 60%",
      "Movement Speed + 0.15",
      "Out of Combat Movement Speed + 0.5",
      "Skill Damage Increase + 13"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Boots of Hermes": {
    "name": "Boots of Hermes",
    "href": "/Boots_of_Hermes",
    "image": null,
    "requirements": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Heelys",
        "href": "/Heelys",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Heelys.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Running Shoes",
        "href": "/Running_Shoes",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Running_Shoes.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Heelys",
        "href": "/Heelys",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a8/Heelys.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Defense + 40",
      "Movement Speed + 0.4",
      "Movement Speed While out of Combat + 0.2"
    ],
    "description": "Shoes worn by Hermes, the Greek God of Travellers. Try them on, you'll feel like you're floating.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Feather": {
    "name": "Feather",
    "href": "/Feather",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Light Hatchet": {
        "name": "Light Hatchet",
        "href": "/Light_Hatchet",
        "image": null
      },
      "Mask": {
        "name": "Mask",
        "href": "/Mask",
        "image": null
      },
      "Feather Boots": {
        "name": "Feather Boots",
        "href": "/Feather_Boots",
        "image": null
      },
      "White Crane Fan": {
        "name": "White Crane Fan",
        "href": "/White_Crane_Fan",
        "image": null
      },
      "Sharpened Spear": {
        "name": "Sharpened Spear",
        "href": "/Sharpened_Spear",
        "image": null
      },
      "Feather Duster": {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": null
      },
      "Wing Knuckles": {
        "name": "Wing Knuckles",
        "href": "/Wing_Knuckles",
        "image": null
      },
      "Dart": {
        "name": "Dart",
        "href": "/Dart",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Movement Speed + 0.08"
    ],
    "description": "Great for heat preservation or just for decoration!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Flower": {
    "name": "Flower",
    "href": "/Flower",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Rose Knife": {
        "name": "Rose Knife",
        "href": "/Rose_Knife",
        "image": null
      },
      "Hanbok": {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": null
      },
      "Flower of Fate": {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": null
      },
      "Flower Liquor": {
        "name": "Flower Liquor",
        "href": "/Flower_Liquor",
        "image": null
      },
      "Orchid": {
        "name": "Orchid",
        "href": "/Orchid",
        "image": null
      },
      "Apricot Flower Tag": {
        "name": "Apricot Flower Tag",
        "href": "/Apricot_Flower_Tag",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Cooldown Reduction + 9%"
    ],
    "description": "Roses are red, violets are blue, this flower makes good items, try crafting them too.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Ribbon": {
    "name": "Ribbon",
    "href": "/Ribbon",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Suit": {
        "name": "Suit",
        "href": "/Suit",
        "image": null
      },
      "Doll": {
        "name": "Doll",
        "href": "/Doll",
        "image": null
      },
      "Moonlight Pendant": {
        "name": "Moonlight Pendant",
        "href": "/Moonlight_Pendant",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Life Steal + 5%"
    ],
    "description": "It'll be pretty if you put it in your hair.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fan": {
    "name": "Fan",
    "href": "/Fan",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Gilded Quill Fan": {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": null
      },
      "Uchiwa": {
        "name": "Uchiwa",
        "href": "/Uchiwa",
        "image": null
      },
      "Umbrella": {
        "name": "Umbrella",
        "href": "/Umbrella",
        "image": null
      },
      "Wind Whip": {
        "name": "Wind Whip",
        "href": "/Wind_Whip",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Skill Damage Increase + 11"
    ],
    "description": "Sure, it's a bit old, but the wind from this fan isn't.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Buddhist Scripture": {
    "name": "Buddhist Scripture",
    "href": "/Buddhist_Scripture",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Buddha Sarira": {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": null
      },
      "Charm": {
        "name": "Charm",
        "href": "/Charm",
        "image": null
      },
      "Dharma Chakram": {
        "name": "Dharma Chakram",
        "href": "/Dharma_Chakram",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Skill Damage Increase + 7%"
    ],
    "description": "Smells like incense. No idea what it says, though.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Box": {
    "name": "Box",
    "href": "/Box",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Magazine": {
        "name": "Magazine",
        "href": "/Magazine",
        "image": null
      },
      "Schrodinger's Box": {
        "name": "Schrodinger's Box",
        "href": "/Schrodinger%27s_Box",
        "image": null
      },
      "Choco Pie Box": {
        "name": "Choco Pie Box",
        "href": "/Choco_Pie_Box",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Max HP + 90"
    ],
    "description": "...It's an empty box.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Holy Grail": {
    "name": "Holy Grail",
    "href": "/Holy_Grail",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Excalibur": {
        "name": "Excalibur",
        "href": "/Excalibur",
        "image": null
      },
      "Saint's Relic": {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": null
      },
      "Stairway to Heaven": {
        "name": "Stairway to Heaven",
        "href": "/Stairway_to_Heaven",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "HP Regen (%) + 120%"
    ],
    "description": "A relic that has materializes through various trials and adventures in Medieval myths. Many knights endured the trials, yet none ended up with a happy ending.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Cross": {
    "name": "Cross",
    "href": "/Cross",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Arondight": {
        "name": "Arondight",
        "href": "/Arondight",
        "image": null
      },
      "Saint's Relic": {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": null
      },
      "Divine Fist": {
        "name": "Divine Fist",
        "href": "/Divine_Fist",
        "image": null
      },
      "Grenade of Antioch": {
        "name": "Grenade of Antioch",
        "href": "/Grenade_of_Antioch",
        "image": null
      },
      "Onyx Dagger": {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Extra Damage to Normal Attacks + 7"
    ],
    "description": "Feeling...holy?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Binoculars": {
    "name": "Binoculars",
    "href": "/Binoculars",
    "image": null,
    "requirements": [],
    "buildsInto": {
      "Motorcycle Helmet": {
        "name": "Motorcycle Helmet",
        "href": "/Motorcycle_Helmet",
        "image": null
      },
      "Sniping Scope": {
        "name": "Sniping Scope",
        "href": "/Sniping_Scope",
        "image": null
      },
      "Telephoto Camera": {
        "name": "Telephoto Camera",
        "href": "/Telephoto_Camera",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 2",
      "Vision Range + 1.5"
    ],
    "description": "These don't seem to zoom in much. Perhaps it's because they're homemade.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Gilded Quill Fan": {
    "name": "Gilded Quill Fan",
    "href": "/Gilded_Quill_Fan",
    "image": null,
    "requirements": [
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "buildsInto": {
      "White Crane Fan": {
        "name": "White Crane Fan",
        "href": "/White_Crane_Fan",
        "image": null
      },
      "Fangtian Huaji": {
        "name": "Fangtian Huaji",
        "href": "/Fangtian_Huaji",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Skill Damage Increase +14",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "If you fan your face with this, try not to scratch yourself.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Saint's Relic": {
    "name": "Saint's Relic",
    "href": "/Saint%27s_Relic",
    "image": null,
    "requirements": [
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      }
    ],
    "buildsInto": {
      "Carnwennan": {
        "name": "Carnwennan",
        "href": "/Carnwennan",
        "image": null
      },
      "Crusader Armor": {
        "name": "Crusader Armor",
        "href": "/Crusader_Armor",
        "image": null
      },
      "Veritas Lux Mea": {
        "name": "Veritas Lux Mea",
        "href": "/Veritas_Lux_Mea",
        "image": null
      },
      "Hammer of Dagda": {
        "name": "Hammer of Dagda",
        "href": "/Hammer_of_Dagda",
        "image": null
      },
      "David's Sling": {
        "name": "David's Sling",
        "href": "/David%27s_Sling",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "HP Regen (%) + 150%",
      "Extra Damage to Normal Attacks + 8"
    ],
    "description": "The last relic of one who fought to save those who have fallen, despite being betrayed, tortured, and crucified.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Flower of Fate": {
    "name": "Flower of Fate",
    "href": "/Flower_of_Fate",
    "image": null,
    "requirements": [
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "buildsInto": {
      "Emerald Tablet": {
        "name": "Emerald Tablet",
        "href": "/Emerald_Tablet",
        "image": null
      },
      "Apricot Sword": {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Critical Strike Chance + 15%",
      "Cooldown Reduction + 10%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Glass Pieces": {
    "name": "Glass Pieces",
    "href": "/Glass_Pieces",
    "image": null,
    "requirements": [
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Hovud": {
        "name": "Hovud",
        "href": "/Hovud",
        "image": null
      },
      "Crystal Tiara": {
        "name": "Crystal Tiara",
        "href": "/Crystal_Tiara",
        "image": null
      },
      "Killer Heels": {
        "name": "Killer Heels",
        "href": "/Killer_Heels",
        "image": null
      },
      "Glass Panel": {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": null
      },
      "Glass Knuckles": {
        "name": "Glass Knuckles",
        "href": "/Glass_Knuckles",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Critical Strike Chance + 13%"
    ],
    "description": "Be careful not to cut yourself on the sharp edges.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Doll": {
    "name": "Doll",
    "href": "/Doll",
    "image": null,
    "requirements": [
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      }
    ],
    "buildsInto": {
      "Uchiwa": {
        "name": "Uchiwa",
        "href": "/Uchiwa",
        "image": null
      },
      "Statue of Soteria": {
        "name": "Statue of Soteria",
        "href": "/Statue_of_Soteria",
        "image": null
      },
      "One Inch Punch": {
        "name": "One Inch Punch",
        "href": "/One_Inch_Punch",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "SP Regen (%) + 100%",
      "Life Steal + 11%"
    ],
    "description": "Aren't you a little old to be playing with dolls?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sniping Scope": {
    "name": "Sniping Scope",
    "href": "/Sniping_Scope",
    "image": null,
    "requirements": [
      {
        "name": "Sniper Scope",
        "href": "/Sniper_Scope",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Sniping_Scope.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      }
    ],
    "buildsInto": {
      "Sniper Crossbow": {
        "name": "Sniper Crossbow",
        "href": "/Sniper_Crossbow",
        "image": null
      },
      "Humbucker Pickup": {
        "name": "Humbucker Pickup",
        "href": "/Humbucker_Pickup",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 6",
      "Vision Range + 4"
    ],
    "description": "You might be able to improve your accuracy with this on a rifle or other firearm.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Buddha Sarira": {
    "name": "Buddha Sarira",
    "href": "/Buddha_Sarira",
    "image": null,
    "requirements": [
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      }
    ],
    "buildsInto": {
      "Parashu": {
        "name": "Parashu",
        "href": "/Parashu",
        "image": null
      },
      "Veritas Lux Mea": {
        "name": "Veritas Lux Mea",
        "href": "/Veritas_Lux_Mea",
        "image": null
      },
      "Buddha's Palm": {
        "name": "Buddha's Palm",
        "href": "/Buddha%27s_Palm",
        "image": null
      },
      "Teen Spirit": {
        "name": "Teen Spirit",
        "href": "/Teen_Spirit",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Cooldown Reduction + 10%",
      "Skill Damage Increase + 7%"
    ],
    "description": "A relic found in the ashes from the body of Buddha. It smells vaguely of incense.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Quiver": {
    "name": "Quiver",
    "href": "/Quiver",
    "image": null,
    "requirements": [
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Speed + 22%"
    ],
    "description": "Rather pointless by itself. On the otherhand, if you stash some arrows in it...",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Feather Duster": {
    "name": "Feather Duster",
    "href": "/Feather_Duster",
    "image": null,
    "requirements": [
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {
      "Torch": {
        "name": "Torch",
        "href": "/Torch",
        "image": null
      },
      "Butler's Suit": {
        "name": "Butler's Suit",
        "href": "/Butler%27s_Suit",
        "image": null
      },
      "Elegance": {
        "name": "Elegance",
        "href": "/Elegance",
        "image": null
      },
      "Laced Quiver": {
        "name": "Laced Quiver",
        "href": "/Laced_Quiver",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 9",
      "Movement Speed + 0.1"
    ],
    "description": "Dust sticks to this thing like iron to a magnet. Feather dusters...how do they work?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Powder of Life": {
    "name": "Powder of Life",
    "href": "/Powder_of_Life",
    "image": null,
    "requirements": [
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Glacial Ice": {
        "name": "Glacial Ice",
        "href": "/Glacial_Ice",
        "image": null
      },
      "True Samadhi Fire": {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": null
      },
      "Force Core": {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen + 1.5",
      "SP Regen + 1.5"
    ],
    "description": "A powder that summons the spirits. Better combined with other items to make something mystical.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Uchiwa": {
    "name": "Uchiwa",
    "href": "/Uchiwa",
    "image": null,
    "requirements": [
      {
        "name": "Doll",
        "href": "/Doll",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Doll.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Doll",
        "href": "/Doll",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Doll.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "SP Regen (%) + 100%",
      "Life Steal + 15%",
      "Skill Damage Increase + 21"
    ],
    "description": "A fan with your favorite celebrity's face printed on it. It might block the view of the person behind you, so keep it at home during the concert.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Magazine": {
    "name": "Magazine",
    "href": "/Magazine",
    "image": null,
    "requirements": [
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "XCR": {
        "name": "XCR",
        "href": "/XCR",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Max HP + 350",
      "Normal Attack Damage Reduction + 6"
    ],
    "description": "You can't fire a gun with nothing in the magazine.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Moonlight Pendant": {
    "name": "Moonlight Pendant",
    "href": "/Moonlight_Pendant",
    "image": null,
    "requirements": [
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Magic Stick": {
        "name": "Magic Stick",
        "href": "/Magic_Stick",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 20",
      "Life Steal + 20%"
    ],
    "description": "It is not just a simple pendant. Magical powers are unleashed when shining a particular light through it.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Schrodinger's Box": {
    "name": "Schrodinger's Box",
    "href": "/Schrodinger%27s_Box",
    "image": null,
    "requirements": [
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Max HP + 420",
      "Skill Damage Increase + 7"
    ],
    "description": "The cat inside the box is both alive and dead at the same time. Use it to show off your knowledge of quantum physics.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Veritas Lux Mea": {
    "name": "Veritas Lux Mea",
    "href": "/Veritas_Lux_Mea",
    "image": null,
    "requirements": [
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "HP Regen (%) + 150%",
      "Cooldown Reduction + 10%",
      "Extra Normal Attack Damage + 12",
      "Skill Damage Increase + 8%"
    ],
    "description": "Truth is my light.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "White Crane Fan": {
    "name": "White Crane Fan",
    "href": "/White_Crane_Fan",
    "image": null,
    "requirements": [
      {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Gilded_Quill_Fan.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "buildsInto": {
      "Harpe": {
        "name": "Harpe",
        "href": "/Harpe",
        "image": null
      },
      "Elemental Bow": {
        "name": "Elemental Bow",
        "href": "/Elemental_Bow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Gilded_Quill_Fan.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Movement Speed + 0.1",
      "Skill Damage Increase + 16",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "Though a person may make plans in life, it is the heavens that will bring them to fruition.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Glacial Ice": {
    "name": "Glacial Ice",
    "href": "/Glacial_Ice",
    "image": null,
    "requirements": [
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Bracelet of Skadi": {
        "name": "Bracelet of Skadi",
        "href": "/Bracelet_of_Skadi",
        "image": null
      },
      "Glacial Shoes": {
        "name": "Glacial Shoes",
        "href": "/Glacial_Shoes",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "HP Regen + 1.5",
      "SP Regen + 1.5",
      "Skill Damage Increase + 18"
    ],
    "description": "It seems different from normal ice. It practically burns me to the bone by just looking at it. Keep it out of your lemonade.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "True Samadhi Fire": {
    "name": "True Samadhi Fire",
    "href": "/True_Samadhi_Fire",
    "image": null,
    "requirements": [
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Laevateinn": {
        "name": "Laevateinn",
        "href": "/Laevateinn",
        "image": null
      },
      "Laurel Wreath": {
        "name": "Laurel Wreath",
        "href": "/Laurel_Wreath",
        "image": null
      },
      "Blazing Dress": {
        "name": "Blazing Dress",
        "href": "/Blazing_Dress",
        "image": null
      },
      "Blazing Lance": {
        "name": "Blazing Lance",
        "href": "/Blazing_Lance",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "HP Regen + 1.5",
      "SP Regen + 1.5",
      "Extra Normal Attack Damage + 13"
    ],
    "description": "Flames captured in a delicate glass sphere. Ascetics used it to escape.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Emerald Tablet": {
    "name": "Emerald Tablet",
    "href": "/Emerald_Tablet",
    "image": null,
    "requirements": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 10",
      "Defense + 10",
      "Critical Strike Chance + 15%",
      "Cooldown Reduction + 10%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Scissors": {
    "name": "Scissors",
    "href": "/Scissors",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Scissors.png/",
    "requirements": [],
    "buildsInto": {
      "Beret": {
        "name": "Beret",
        "href": "/Beret",
        "image": null
      },
      "Dress Shirt": {
        "name": "Dress Shirt",
        "href": "/Dress_Shirt",
        "image": null
      },
      "Bikini": {
        "name": "Bikini",
        "href": "/Bikini",
        "image": null
      },
      "King-V": {
        "name": "King-V",
        "href": "/King-V",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +5"
    ],
    "description": "A basic pair of scissors. Snip snip.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fountain Pen": {
    "name": "Fountain Pen",
    "href": "/Fountain_Pen",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/",
    "requirements": [],
    "buildsInto": {
      "Blueprint": {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": null
      },
      "Signed Ball": {
        "name": "Signed Ball",
        "href": "/Signed_Ball",
        "image": null
      },
      "Vintage Cards": {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +5"
    ],
    "description": "A kind of pen for writing. The ink inside the pen holder flows out through the nib, allowing it to be used for a long time - though your hand will be covered in ink if not used correctly. Or if you are a lefty.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Kitchen Knife": {
    "name": "Kitchen Knife",
    "href": "/Kitchen_Knife",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/",
    "requirements": [],
    "buildsInto": {
      "Army Knife": {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": null
      },
      "Twin Swords": {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": null
      },
      "Jungle Guillotine": {
        "name": "Jungle Guillotine",
        "href": "/Jungle_Guillotine",
        "image": null
      },
      "Bident": {
        "name": "Bident",
        "href": "/Bident",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +4",
      "Movement Speed + 0.05"
    ],
    "description": "A knife used in the kitchen. It can be a deadly weapon in the hands of an expert.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Army Knife": {
    "name": "Army Knife",
    "href": "/Army_Knife",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/",
    "requirements": [
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Rose Knife": {
        "name": "Rose Knife",
        "href": "/Rose_Knife",
        "image": null
      },
      "Vibroblade": {
        "name": "Vibroblade",
        "href": "/Vibroblade",
        "image": null
      },
      "Fragarach": {
        "name": "Fragarach",
        "href": "/Fragarach",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +14",
      "Movement Speed + 0.08"
    ],
    "description": "Very threatening yet easy to carry. It faithfully performs its duties, such as cutting and stabbing.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Rose Knife": {
    "name": "Rose Knife",
    "href": "/Rose_Knife",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Rose_Knife.png/",
    "requirements": [
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Carnwennan": {
        "name": "Carnwennan",
        "href": "/Carnwennan",
        "image": null
      },
      "Mount Slicer": {
        "name": "Mount Slicer",
        "href": "/Mount_Slicer",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 20",
      "Movement Speed + 0.1",
      "Cooldown Reduction + 10%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Carnwennan": {
    "name": "Carnwennan",
    "href": "/Carnwennan",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/99/Carnwennan.png/",
    "requirements": [
      {
        "name": "Rose Knife",
        "href": "/Rose_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Rose_Knife.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      },
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Rose Knife",
        "href": "/Rose_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Rose_Knife.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 26",
      "HP Regen + 1.5",
      "Movement Speed + 0.1",
      "Extra Normal Attack Damage + 29",
      "Cooldown Reduction + 10%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mount Slicer": {
    "name": "Mount Slicer",
    "href": "/Mount_Slicer",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/db/Mount_Slicer.png/",
    "requirements": [
      {
        "name": "Rose Knife",
        "href": "/Rose_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Rose_Knife.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Rose Knife",
        "href": "/Rose_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Rose_Knife.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 33",
      "Movement Speed + 0.1",
      "Cooldown Reduction + 10%",
      "Skill Amplification + 35"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Vibroblade": {
    "name": "Vibroblade",
    "href": "/Vibroblade",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/96/Vibroblade.png/",
    "requirements": [
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 53",
      "Attack Speed (%) + 30%",
      "Movement Speed + 0.1"
    ],
    "description": "This high-frequency vibrating blade will cleave the matter of its target at a molecular level. The knife vibrates at a frequency beyond human imagination.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fragarach": {
    "name": "Fragarach",
    "href": "/Fragarach",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c5/Fragarach.png/",
    "requirements": [
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Army_Knife.png/"
      },
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "",
    "stats": [
      "Attack Power +75",
      "Movement Speed + 0.2"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Rusty Sword": {
    "name": "Rusty Sword",
    "href": "/Rusty_Sword",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/",
    "requirements": [],
    "buildsInto": {
      "Shamshir": {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": null
      },
      "Katana": {
        "name": "Katana",
        "href": "/Katana",
        "image": null
      },
      "Bastard Sword": {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": null
      },
      "Twin Swords": {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +11"
    ],
    "description": "Every swordsman must train with this common longsword.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Shamshir": {
    "name": "Shamshir",
    "href": "/Shamshir",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/",
    "requirements": [
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Bastard Sword": {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": null
      },
      "Laevateinn": {
        "name": "Laevateinn",
        "href": "/Laevateinn",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +27"
    ],
    "description": "The name translates into \"The Tail of the Lion.\" A symbolic sword of Persia, it's also known to be the origin of the sabre.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Katana": {
    "name": "Katana",
    "href": "/Katana",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/",
    "requirements": [
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Masamune": {
        "name": "Masamune",
        "href": "/Masamune",
        "image": null
      },
      "Muramasa": {
        "name": "Muramasa",
        "href": "/Muramasa",
        "image": null
      },
      "Dainsleif": {
        "name": "Dainsleif",
        "href": "/Dainsleif",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +35"
    ],
    "description": "I can't believe that I'm actually holding a Japanese sword that I saw in the movies!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Masamune": {
    "name": "Masamune",
    "href": "/Masamune",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1b/Masamune.png/",
    "requirements": [
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Arondight": {
        "name": "Arondight",
        "href": "/Arondight",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +40",
      "Attack Speed (%) + 15%"
    ],
    "description": "A sword made by Masamune, the greatest sword maker in the history of Japan. It stands as one of the strongest and sharpest swords of Japan.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Muramasa": {
    "name": "Muramasa",
    "href": "/Muramasa",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Muramasa.png/",
    "requirements": [
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "Monohoshizao": {
        "name": "Monohoshizao",
        "href": "/Monohoshizao",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +50"
    ],
    "description": "A sword cursing the Tokugawa family, who were the founders of Japan's Tokugawa shogunate. Tokugawa Leyasu's grandfather, father, and son were all killed or wounded by this sword, and Leyasu himself also had his finger cut off.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bastard Sword": {
    "name": "Bastard Sword",
    "href": "/Bastard_Sword",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Bastard_Sword.png/",
    "requirements": [
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      }
    ],
    "buildsInto": {
      "Thuan Thien": {
        "name": "Thuan Thien",
        "href": "/Thuan_Thien",
        "image": null
      },
      "Plasma Sword": {
        "name": "Plasma Sword",
        "href": "/Plasma_Sword",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": null,
        "href": "/Steel.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +45",
      "Movement Speed - 0.1"
    ],
    "description": "In the Middle Ages, the Bastard Sword was the only weapon with the characteristics of both a double-handed sword and a single-handed sword, so it was named Bastard, meaning mixed breed.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Jewel Sword": {
    "name": "Jewel Sword",
    "href": "/Jewel_Sword",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Jewel_Sword.png/",
    "requirements": [
      {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "Excalibur": {
        "name": "Excalibur",
        "href": "/Excalibur",
        "image": null
      },
      "Hovud": {
        "name": "Hovud",
        "href": "/Hovud",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +35",
      "Max HP + 200"
    ],
    "description": "Valuable by its very existence. Often is the case of such swords that were made with precious materials or used by a famous hero.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Thuan Thien": {
    "name": "Thuan Thien",
    "href": "/Thuan_Thien",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Thuan_Thien.png/",
    "requirements": [
      {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Bastard_Sword.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Bastard_Sword.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 77",
      "Defense + 25",
      "Movement Speed -0.1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Plasma Sword": {
    "name": "Plasma Sword",
    "href": "/Plasma_Sword",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ed/Plasma_Sword.png/",
    "requirements": [
      {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Bastard_Sword.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bastard Sword",
        "href": "/Bastard_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Bastard_Sword.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 75",
      "Vision Range + 3"
    ],
    "description": "A sword made from the combination of ion nuclei and free electrons kept at an ultra-high temperature, also known as plasma. Due to its explosive nature, it's hard to handle, but it could be the start of an era of future weaponry. The plasma sword is the first of its kind.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Excalibur": {
    "name": "Excalibur",
    "href": "/Excalibur",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Excalibur.png/",
    "requirements": [
      {
        "name": "Jewel Sword",
        "href": "/Jewel_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Jewel_Sword.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      },
      {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Jewel Sword",
        "href": "/Jewel_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Jewel_Sword.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 60",
      "Max HP + 400",
      "HP Regen (%) + 200%"
    ],
    "description": "A noted sword produced in Avalon, the nation of fairies. King  Arthur received this sword from the beautiful Lady of the Lake and returned it after the final battle against Prince Mordred.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Arondight": {
    "name": "Arondight",
    "href": "/Arondight",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Arondight.png/",
    "requirements": [
      {
        "name": "Masamune",
        "href": "/Masamune",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1b/Masamune.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Masamune",
        "href": "/Masamune",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1b/Masamune.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 50",
      "Extra Damage to Normal Attacks + 25",
      "Attack Speed + 25%"
    ],
    "description": "The sword of Sir Lancelot, who was a dragon slayer that cut down the fire drake during the rescue of princess Elaine of Corbenic.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Hovud": {
    "name": "Hovud",
    "href": "/Hovud",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3f/Hovud.png/",
    "requirements": [
      {
        "name": "Jewel Sword",
        "href": "/Jewel_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Jewel_Sword.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Jewel Sword",
        "href": "/Jewel_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Jewel_Sword.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 45",
      "Max HP + 300",
      "Critical Strike Chance + 20%"
    ],
    "description": "It is said that this blade, as mentioned briefly in \"Prose Edda\", was used by the Nordic mythical god Heimdallr and was made out of broken pieces of the rainbow bridge, Bifröst. The entire blade emits a dark blue aura, which makes the sword difficult to approach. Some people believe this blade's name means \"head\".",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Monohoshizao": {
    "name": "Monohoshizao",
    "href": "/Monohoshizao",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Monohoshizao.png/",
    "requirements": [
      {
        "name": "Muramasa",
        "href": "/Muramasa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Muramasa.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Muramasa",
        "href": "/Muramasa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Muramasa.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 70",
      "Life Steal + 18%"
    ],
    "description": "A sword with a long blade. Legend says Kojiro Sasaki cut a flying swallow with this sword. A technique known as \"Upward Cutting\" is commonly used after an opponent dodges the first attack.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Laevateinn": {
    "name": "Laevateinn",
    "href": "/Laevateinn",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Laevateinn.png/",
    "requirements": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Shamshir",
        "href": "/Shamshir",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Shamshir.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "",
    "stats": [
      "Attack Power + 75",
      "HP Regen +1.5",
      "SP Regen +1.5",
      "Extra Damage to Normal Attacks + 20"
    ],
    "description": "In Norse mythology, Laevateinn is a sword that was made by Loki by carving runes into it. In mythology, it is used to kill the invincible rooster, Vidofnir.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Dainsleif": {
    "name": "Dainsleif",
    "href": "/Dainsleif",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Dainsleif.png/",
    "requirements": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Katana",
        "href": "/Katana",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Katana.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "",
    "stats": [
      "Attack Power + 70",
      "Life Steal + 20%"
    ],
    "description": "A legendary longsword that can inflict enormous damage with one slash and produces a deafening roar that sounds like the sky and the earth are being ripped apart.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Pickaxe": {
    "name": "Pickaxe",
    "href": "/Pickaxe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/",
    "requirements": [],
    "buildsInto": {
      "Chain Scythe": {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": null
      },
      "Gold": {
        "name": "Gold",
        "href": "/Gold",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +15"
    ],
    "description": "Can we consider it a blade attack if you swing the pickaxe and attack your opponent..?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Hatchet": {
    "name": "Hatchet",
    "href": "/Hatchet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/",
    "requirements": [],
    "buildsInto": {
      "Battle Axe": {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": null
      },
      "Pendulum Axe": {
        "name": "Pendulum Axe",
        "href": "/Pendulum_Axe",
        "image": null
      },
      "Halberd Axe": {
        "name": "Halberd Axe",
        "href": "/Halberd_Axe",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +25"
    ],
    "description": "It looks heavy, so attack with it by slicing downward.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Chain Scythe": {
    "name": "Chain Scythe",
    "href": "/Chain_Scythe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Chain_Scythe.png/",
    "requirements": [
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {
      "Reaper's Scythe": {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 50",
      "Attack Range + 0.2"
    ],
    "description": "A weapon of the Grim Reaper that has a sharp scythe at one end of a steel chain.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Battle Axe": {
    "name": "Battle Axe",
    "href": "/Battle_Axe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/",
    "requirements": [
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Light Hatchet": {
        "name": "Light Hatchet",
        "href": "/Light_Hatchet",
        "image": null
      },
      "Gigantic Axe": {
        "name": "Gigantic Axe",
        "href": "/Gigantic_Axe",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 47"
    ],
    "description": "Although it started as a tool for men, it proved itself useful in the battlefield. It's designed to rip flesh and cut bones, so it has a thinner and lighter blade than a usual ax.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Light Hatchet": {
    "name": "Light Hatchet",
    "href": "/Light_Hatchet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Light_Hatchet.png/",
    "requirements": [
      {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Parashu": {
        "name": "Parashu",
        "href": "/Parashu",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 61",
      "Movement Speed + 0.1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Reaper's Scythe": {
    "name": "Reaper's Scythe",
    "href": "/Reaper%27s_Scythe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/",
    "requirements": [
      {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Chain_Scythe.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {
      "Santa Muerte": {
        "name": "Santa Muerte",
        "href": "/Santa_Muerte",
        "image": null
      },
      "Scythe": {
        "name": "Scythe",
        "href": "/Scythe",
        "image": null
      },
      "Harpe": {
        "name": "Harpe",
        "href": "/Harpe",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Chain_Scythe.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 80",
      "Attack Range + 0.5"
    ],
    "description": "A weapon that the Grim Reaper carries. If the scythe claims someone, that soul will vanish.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Gigantic Axe": {
    "name": "Gigantic Axe",
    "href": "/Gigantic_Axe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Gigantic_Axe.png/",
    "requirements": [
      {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Beam Axe": {
        "name": "Beam Axe",
        "href": "/Beam_Axe",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 110",
      "Movement Speed - 0.1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Beam Axe": {
    "name": "Beam Axe",
    "href": "/Beam_Axe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Beam_Axe.png/",
    "requirements": [
      {
        "name": "Gigantic Axe",
        "href": "/Gigantic_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Gigantic_Axe.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Gigantic Axe",
        "href": "/Gigantic_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Gigantic_Axe.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power +137",
      "Vision Range + 4",
      "Movement Speed - 0.1"
    ],
    "description": "Widely used since the Old Stone Age, it became a masterpiece when fused with modern technology.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Santa Muerte": {
    "name": "Santa Muerte",
    "href": "/Santa_Muerte",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cb/Santa_Muerte.png/",
    "requirements": [
      {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Chain_Scythe.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 100",
      "Life Steal + 15%",
      "Max HP + 450",
      "Attack Range + 0.5"
    ],
    "description": "Santa Muerte, the Mexican goddess of death, cuts off all negative energies with her long-handled scythe.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Scythe": {
    "name": "Scythe",
    "href": "/Scythe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cd/Scythe.png/",
    "requirements": [
      {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Chain_Scythe.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 130",
      "Skill Damage Increase + 18%",
      "Attack Range + 1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Parashu": {
    "name": "Parashu",
    "href": "/Parashu",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Parashu.png/",
    "requirements": [
      {
        "name": "Light Hatchet",
        "href": "/Light_Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Light_Hatchet.png/"
      },
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      },
      {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Battle_Axe.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Light Hatchet",
        "href": "/Light_Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Light_Hatchet.png/"
      },
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 115",
      "Cooldown Reduction + 10%",
      "Movement Speed + 0.2"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Harpe": {
    "name": "Harpe",
    "href": "/Harpe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/ff/Harpe.png/",
    "requirements": [
      {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/"
      },
      {
        "name": "White Crane Fan",
        "href": "/White_Crane_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/White_Crane_Fan.png/"
      },
      {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Chain_Scythe.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Gilded_Quill_Fan.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Reaper%27s_Scythe.png/"
      },
      {
        "name": "White Crane Fan",
        "href": "/White_Crane_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/White_Crane_Fan.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 125",
      "Attack Range + 0.5",
      "Movement Speed + 0.1",
      "Skill Amplification + 42",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "The sword given to Perseus by Hermes, the God of Thieves. He used this to cut off Medusa's head and to rescue Andromeda from a sea monster.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Twin Swords": {
    "name": "Twin Swords",
    "href": "/Twin_Swords",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/",
    "requirements": [
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      }
    ],
    "buildsInto": {
      "Florentine": {
        "name": "Florentine",
        "href": "/Florentine",
        "image": null
      },
      "Starsteel Twin Swords": {
        "name": "Starsteel Twin Swords",
        "href": "/Starsteel_Twin_Swords",
        "image": null
      },
      "Dioscuri": {
        "name": "Dioscuri",
        "href": "/Dioscuri",
        "image": null
      },
      "Lloigor & Zahr": {
        "name": "Lloigor & Zahr",
        "href": "/Lloigor_%26_Zahr",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 14",
      "Attack Speed (%) + 10%"
    ],
    "description": "Double the sword, double the offense!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Florentine": {
    "name": "Florentine",
    "href": "/Florentine",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cd/Florentine.png/",
    "requirements": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      }
    ],
    "buildsInto": {
      "Divine Dual Swords": {
        "name": "Divine Dual Swords",
        "href": "/Divine_Dual_Swords",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 23",
      "Attack Speed (%) +10%",
      "Life Steal +10%"
    ],
    "description": "The master of these swords from Florence says you can't use them seperately. One in each hand at all times.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Divine Dual Swords": {
    "name": "Divine Dual Swords",
    "href": "/Divine_Dual_Swords",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Divine_Dual_Swords.png/",
    "requirements": [
      {
        "name": "Florentine",
        "href": "/Florentine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cd/Florentine.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Florentine",
        "href": "/Florentine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cd/Florentine.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 38",
      "Attack Speed (%) + 10%",
      "Life Steal + 18%",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "A swordsmanship technique created and refined by Miyamoto Musashi. It involves using two swords, a shortsword in one hand and a longsword in the other.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Starsteel Twin Swords": {
    "name": "Starsteel Twin Swords",
    "href": "/Starsteel_Twin_Swords",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Starsteel_Twin_Swords.png/",
    "requirements": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 55",
      "Attack Speed (%) + 50%"
    ],
    "description": "A pair of swords that Liu Bei used in \"Romance of the Three Kingdoms\".",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Dioscuri": {
    "name": "Dioscuri",
    "href": "/Dioscuri",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/45/Dioscuri.png/",
    "requirements": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 38",
      "Attack Speed (%) + 50%"
    ],
    "description": "Named after the Greek mythological twin brothers, Castor and Pollux. Twins but with different dads!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Lloigor & Zahr": {
    "name": "Lloigor & Zahr",
    "href": "/Lloigor_%26_Zahr",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/ba/Lloigor_%26_Zahr.png/",
    "requirements": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Rusty Sword",
        "href": "/Rusty_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Rusty_Sword.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Twin Swords",
        "href": "/Twin_Swords",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Twin_Sword.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 30",
      "Attack Speed (%) + 20%",
      "Skill Amplification + 36"
    ],
    "description": "You'll love crafting these twin swords, just be careful if you feel wind but the weather isn't windy. Lloigor might be watching.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Walther PPK": {
    "name": "Walther PPK",
    "href": "/Walther_PPK",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/",
    "requirements": [],
    "buildsInto": {
      "Magnum-Python": {
        "name": "Magnum-Python",
        "href": "/Magnum-Python",
        "image": null
      },
      "Beretta M92F": {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +8",
      "Movement Speed +0.1",
      "Max Ammo: 6"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Magnum-Python": {
    "name": "Magnum-Python",
    "href": "/Magnum-Python",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/",
    "requirements": [
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "buildsInto": {
      "Double Revolver SP": {
        "name": "Double Revolver SP",
        "href": "/Double_Revolver_SP",
        "image": null
      },
      "Magnum-Anaconda": {
        "name": "Magnum-Anaconda",
        "href": "/Magnum-Anaconda",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +15",
      "Attack Speed (%) + 10%",
      "Movement Speed +0.1",
      "Max Ammo: 6"
    ],
    "description": "If you research revolvers that use Magnum cartridges, you'll find that some of them use scientific names for snakes. This one is the  Pythonidae, also known as Python.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Beretta M92F": {
    "name": "Beretta M92F",
    "href": "/Beretta_M92F",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/",
    "requirements": [
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "FN57": {
        "name": "FN57",
        "href": "/FN57",
        "image": null
      },
      "Double Revolver SP": {
        "name": "Double Revolver SP",
        "href": "/Double_Revolver_SP",
        "image": null
      },
      "Electron Blaster": {
        "name": "Electron Blaster",
        "href": "/Electron_Blaster",
        "image": null
      },
      "Kelte": {
        "name": "Kelte",
        "href": "/Kelte",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +23",
      "Movement Speed +0.1",
      "Max Ammo: 6"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "FN57": {
    "name": "FN57",
    "href": "/FN57",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/FN57.png/",
    "requirements": [
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Elegance": {
        "name": "Elegance",
        "href": "/Elegance",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +29",
      "Vision Range: +2.5",
      "Movement Speed +0.1",
      "Max Ammo: 6"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Double Revolver SP": {
    "name": "Double Revolver SP",
    "href": "/Double_Revolver_SP",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Double_Revolver_SP.png/",
    "requirements": [
      {
        "name": "Magnum Python",
        "href": "/Magnum_Python",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/"
      },
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Devil's Marksman": {
        "name": "Devil's Marksman",
        "href": "/Devil%27s_Marksman",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Magnum Python",
        "href": "/Magnum_Python",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/"
      },
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +40",
      "Attack Speed(%) + 10%",
      "Movement Speed +0.1",
      "Max Ammo: 6"
    ],
    "description": "This isn't two revolvers -- it's one double revolver.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Magnum-Anaconda": {
    "name": "Magnum-Anaconda",
    "href": "/Magnum-Anaconda",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Magnum-Anaconda.png/",
    "requirements": [
      {
        "name": "Magnum-Python",
        "href": "/Magnum-Python",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      }
    ],
    "buildsInto": {
      "Magnum-Boa": {
        "name": "Magnum-Boa",
        "href": "/Magnum-Boa",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Magnum-Python",
        "href": "/Magnum-Python",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +43",
      "Attack Speed(%) + 10%",
      "Movement Speed +0.1",
      "Life Steal: +10%",
      "Max Ammo: 6"
    ],
    "description": "Named after the Anaconda, which is larger than a Python, it uses a larger caliber Magnum cartridge.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Devil's Marksman": {
    "name": "Devil's Marksman",
    "href": "/Devil%27s_Marksman",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/15/Devil%27s_Marksman.png/",
    "requirements": [
      {
        "name": "Double Revolver SP",
        "href": "/Double_Revolver_SP",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Double_Revolver_SP.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Magnum-Python",
        "href": "/Magnum-Python",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/"
      },
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Double Revolver SP",
        "href": "/Double_Revolver_SP",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Double_Revolver_SP.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power +30",
      "Attack Speed (%) + 10%",
      "Movement Speed +0.1",
      "Skill Damage Increase + 40",
      "Max Ammo: 7"
    ],
    "description": "You can perfect your marksmanship by selling your soul to the devil. What could possibly go wrong?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Elegance": {
    "name": "Elegance",
    "href": "/Elegance",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/ff/Elegance.png/",
    "requirements": [
      {
        "name": "FN57",
        "href": "/FN57",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/FN57.png/"
      },
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      },
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "FN57",
        "href": "/FN57",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/FN57.png/"
      },
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 90",
      "Vision Range + 5",
      "Movement Speed + 0.2",
      "Max Ammo: 6"
    ],
    "description": "Though it looks like an old gun, it is actually a smaller version of the railgun pistol. Up to 6 bullets are loaded from a clip. At first glance, it looks like a decoration, but it is just as effective as the real, full-size version.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Electron Blaster": {
    "name": "Electron Blaster",
    "href": "/Electron_Blaster",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/66/Electron_Blaster.png/",
    "requirements": [
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 65",
      "Attack Speed (%) + 50%",
      "Movement Speed + 0.1",
      "Extra Normal Attack Damage + 28",
      "Max Ammo: 10"
    ],
    "description": "It's not as strong as the laser guns used on the other side of the cosmos, but it's still pretty powerful.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Magnum-Boa": {
    "name": "Magnum-Boa",
    "href": "/Magnum-Boa",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Magnum-Boa.png/",
    "requirements": [
      {
        "name": "Magnum-Anaconda",
        "href": "/Magnum-Anaconda",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Magnum-Anaconda.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Magnum-Python",
        "href": "/Magnum-Python",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Magnum-Python.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Magnum-Anaconda",
        "href": "/Magnum-Anaconda",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Magnum-Anaconda.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 90",
      "Attack Speed (%) + 25%",
      "Movement Speed + 0.1",
      "Vision Range + 3.5",
      "Life Steal + 20%",
      "Max Ammo: 6"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Kelte": {
    "name": "Kelte",
    "href": "/Kelte",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0d/Kelte.png/",
    "requirements": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Walther PPK",
        "href": "/Walther_PPK",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/27/Walter_PPK.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Beretta M92F",
        "href": "/Beretta_M92F",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Beretta_M92F.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "",
    "stats": [
      "Attack Power + 120",
      "Movement Speed + 0.2",
      "Max Ammo: 10"
    ],
    "description": "The gun of Manas, a hero of Kyrgyzstan. The gun’s barrel was formed from Damascus steel and fires death in bullet form.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fedorova": {
    "name": "Fedorova",
    "href": "/Fedorova",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/",
    "requirements": [],
    "buildsInto": {
      "STG44": {
        "name": "STG44",
        "href": "/STG44",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +11",
      "Max Ammo: 30"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "STG44": {
    "name": "STG44",
    "href": "/STG44",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/",
    "requirements": [
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {
      "AK-47": {
        "name": "AK-47",
        "href": "/AK-47",
        "image": null
      },
      "M16A1": {
        "name": "M16A1",
        "href": "/M16A1",
        "image": null
      },
      "Machine Gun": {
        "name": "Machine Gun",
        "href": "/Machine_Gun",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power +18",
      "Vision Range +1.5",
      "Extra Normal Attack Damage + 2",
      "Max Ammo: 30"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "AK-47": {
    "name": "AK-47",
    "href": "/AK-47",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/AK-47.png/",
    "requirements": [
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {
      "AK-12": {
        "name": "AK-12",
        "href": "/AK-12",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 29",
      "Vision Range + 1.5",
      "Extra Normal Attack Damage + 2",
      "Max Ammo: 30"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "M16A1": {
    "name": "M16A1",
    "href": "/M16A1",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/M16A1.png/",
    "requirements": [
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {
      "XCR": {
        "name": "XCR",
        "href": "/XCR",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +25",
      "Vision Range +1.5",
      "Extra Normal Attack Damage +4",
      "Max Ammo: 30"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Machine Gun": {
    "name": "Machine Gun",
    "href": "/Machine_Gun",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e0/Machine_Gun.png/",
    "requirements": [
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      },
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Gatling Gun": {
        "name": "Gatling Gun",
        "href": "/Gatling_Gun",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 20",
      "Attack Speed (%) +10%",
      "Vision Range +1.5",
      "Extra Normal Attack Damage + 11",
      "Max Ammo: 30"
    ],
    "description": "A gun that continuously fires bullets when the trigger is held down.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Gatling Gun": {
    "name": "Gatling Gun",
    "href": "/Gatling_Gun",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Gatling_Gun.png/",
    "requirements": [
      {
        "name": "Machine Gun",
        "href": "/Machine_Gun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e0/Machine_Gun.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      },
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Machine Gun",
        "href": "/Machine_Gun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e0/Machine_Gun.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 50",
      "Extra Normal Attack Damage + 12",
      "Attack Speed (%) + 15%",
      "Vision Range + 1.5",
      "Max Ammo: 30"
    ],
    "description": "The world's first machine gun, it fires through several barrels joined together. Can cause catastrophic damage to the enemy in a short period of time.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "AK-12": {
    "name": "AK-12",
    "href": "/AK-12",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/AK-12.png/",
    "requirements": [
      {
        "name": "AK-47",
        "href": "/AK-47",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/AK-47.png/"
      },
      {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/37/Glass_Panel.png/"
      },
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Glue",
        "href": "/Glue",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Glue.png/"
      },
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "AK-47",
        "href": "/AK-47",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/AK-47.png/"
      },
      {
        "name": "Glass Panel",
        "href": "/Glass_Panel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/37/Glass_Panel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 94",
      "Vision Range + 1.5",
      "Critical Strike Chance + 25%",
      "Extra Normal Attack Damage + 2",
      "Max Ammo: 30"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "XCR": {
    "name": "XCR",
    "href": "/XCR",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/XCR.png/",
    "requirements": [
      {
        "name": "M16A1",
        "href": "/M16A1",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/M16A1.png/"
      },
      {
        "name": "Magazine",
        "href": "/Magazine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Magazine.png/"
      },
      {
        "name": "STG44",
        "href": "/STG44",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6a/STG44.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Box",
        "href": "/Box",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Box.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Fedorova",
        "href": "/Fedorova",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Fedorova.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "M16A1",
        "href": "/M16A1",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/M16A1.png/"
      },
      {
        "name": "Magazine",
        "href": "/Magazine",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Magazine.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 60",
      "Extra Normal Attack Damage + 10",
      "Max HP +420",
      "Vision Range + 1.5",
      "Max Ammo: 30"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Long Rifle": {
    "name": "Long Rifle",
    "href": "/Long_Rifle",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/",
    "requirements": [],
    "buildsInto": {
      "Springfield": {
        "name": "Springfield",
        "href": "/Springfield",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 34",
      "Movement Speed - 0.1",
      "Max Ammo: 1"
    ],
    "description": "An old type of gun that isn't frequently used these days. Requires lighting a fuse to shoot.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Springfield": {
    "name": "Springfield",
    "href": "/Springfield",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/",
    "requirements": [
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "buildsInto": {
      "Harpoon Gun": {
        "name": "Harpoon Gun",
        "href": "/Harpoon_Gun",
        "image": null
      },
      "Golden Rifle": {
        "name": "Golden Rifle",
        "href": "/Golden_Rifle",
        "image": null
      },
      "Railgun": {
        "name": "Railgun",
        "href": "/Railgun",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 50",
      "Movement Speed - 0.1",
      "Vision Range + 1.5",
      "Max Ammo: 1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Harpoon Gun": {
    "name": "Harpoon Gun",
    "href": "/Harpoon_Gun",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Harpoon_Gun.png/",
    "requirements": [
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "buildsInto": {
      "Tac-50": {
        "name": "Tac-50",
        "href": "/Tac-50",
        "image": null
      },
      "Intervention": {
        "name": "Intervention",
        "href": "/Intervention",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 64",
      "Movement Speed - 0.1",
      "Vision Range + 2",
      "Max Ammo: 2"
    ],
    "description": "A powerful gun that fires harpoons. Thar she blows!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Golden Rifle": {
    "name": "Golden Rifle",
    "href": "/Golden_Rifle",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/Golden_Rifle.png/",
    "requirements": [
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {
      "NTW-20": {
        "name": "NTW-20",
        "href": "/NTW-20",
        "image": null
      },
      "The Deadly Ray": {
        "name": "The Deadly Ray",
        "href": "/The_Deadly_Ray",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 56",
      "Skill Damage Increase + 18%",
      "Movement Speed - 0.15",
      "Vision Range + 2.5",
      "Max Ammo: 1"
    ],
    "description": "A rifle accented with gold. High in both accuracy, destructive power, and flashiness.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Railgun": {
    "name": "Railgun",
    "href": "/Railgun",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Railgun.png/",
    "requirements": [
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Polaris": {
        "name": "Polaris",
        "href": "/Polaris",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power +78",
      "Attack Speed (%) + 20%",
      "Movement Speed - 0.15",
      "Vision Range + 2",
      "Max Ammo: 3"
    ],
    "description": "Uses electromagnets to rapidly accelerate and launch a metal projectile.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Tac-50": {
    "name": "Tac-50",
    "href": "/Tac-50",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/28/Tac-50.png/",
    "requirements": [
      {
        "name": "Harpoon Gun",
        "href": "/Harpoon_Gun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Harpoon_Gun.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Harpoon Gun",
        "href": "/Harpoon_Gun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Harpoon_Gun.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 140",
      "Life Steal + 20%",
      "Movement Speed - 0.03",
      "Vision Range + 2.5",
      "Max Ammo: 2"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Intervention": {
    "name": "Intervention",
    "href": "/Intervention",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3f/Intervention.png/",
    "requirements": [
      {
        "name": "Harpoon Gun",
        "href": "/Harpoon_Gun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Harpoon_Gun.png/"
      },
      {
        "name": "Telephoto Camera",
        "href": "/Telephoto_Camera",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/ba/Telephoto_Camera.png/"
      },
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Surveillance Camera",
        "href": "/Surveillance_Camera",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Surveillance_Camera.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Harpoon Gun",
        "href": "/Harpoon_Gun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Harpoon_Gun.png/"
      },
      {
        "name": "Telephoto Camera",
        "href": "/Telephoto_Camera",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/ba/Telephoto_Camera.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 110",
      "Vision Range + 4.5",
      "Attack Range + 1",
      "Max Ammo: 2"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "NTW-20": {
    "name": "NTW-20",
    "href": "/NTW-20",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/NTW-20.png/",
    "requirements": [
      {
        "name": "Golden Rifle",
        "href": "/Golden_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/Golden_Rifle.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Golden Rifle",
        "href": "/Golden_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/Golden_Rifle.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 95",
      "Skill Damage Increase + 22%",
      "Movement Speed - 0.1",
      "Vision Range + 2.5",
      "Max Ammo: 1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Polaris": {
    "name": "Polaris",
    "href": "/Polaris",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a2/Polaris.png/",
    "requirements": [
      {
        "name": "Railgun",
        "href": "/Railgun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Railgun.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Railgun",
        "href": "/Railgun",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Railgun.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 135",
      "Attack Speed (%) + 40%",
      "Movement Speed - 0.07",
      "Vision Range + 2",
      "Max Ammo: 3"
    ],
    "description": "When a person dies, their soul will heads to the afterlife world. However, dying from this weapon appears to banish their soul even further. Perhaps to the North Star?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "The Deadly Ray": {
    "name": "The Deadly Ray",
    "href": "/The_Deadly_Ray",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/The_Deadly_Ray.png/",
    "requirements": [
      {
        "name": "Moon Stone",
        "href": "/Moon_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Golden Rifle",
        "href": "/Golden_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/Golden_Rifle.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Springfield",
        "href": "/Springfield",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Springfield.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Long Rifle",
        "href": "/Long_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cf/Long_Rifle.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Moon Stone",
        "href": "/Moon_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Golden Rifle",
        "href": "/Golden_Rifle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/Golden_Rifle.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "",
    "stats": [
      "Attack Power + 95",
      "Skill Damage Increase + 30%",
      "Movement Speed - 0.1",
      "Vision Range + 2.5",
      "Max Ammo: 1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Needle": {
    "name": "Needle",
    "href": "/Needle",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/",
    "requirements": [],
    "buildsInto": {
      "Rapier": {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      "Fencing Rapier": {
        "name": "Fencing Rapier",
        "href": "/Fencing_Rapier",
        "image": null
      },
      "Squad Leader Armband": {
        "name": "Squad Leader Armband",
        "href": "/Squad_Leader_Armband",
        "image": null
      },
      "Acupuncture": {
        "name": "Acupuncture",
        "href": "/Acupuncture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a3/Acupuncture.png/"
      },
      "Acupuncture Needle": {
        "name": "Acupuncture Needle",
        "href": "/Acupuncture_Needle",
        "image": null
      },
      "Dart": {
        "name": "Dart",
        "href": "/Dart",
        "image": null
      },
      "Venom Dart": {
        "name": "Venom Dart",
        "href": "/Venom_Dart",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 3",
      "Critical Strike Damage + 25%"
    ],
    "description": "An item with multiple uses; limited only by your imagination.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Rapier": {
    "name": "Rapier",
    "href": "/Rapier",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/",
    "requirements": [
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Apricot Sword": {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": null
      },
      "Sword of Justice": {
        "name": "Sword of Justice",
        "href": "/Sword_of_Justice",
        "image": null
      },
      "Joyeuse": {
        "name": "Joyeuse",
        "href": "/Joyeuse",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 16",
      "Critical Strike Damage + 25%"
    ],
    "description": "A one-handed sword for personal combat with a long, thin blade ideal for stabbing. Used mostly in the 16th and 17th centuries.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Apricot Sword": {
    "name": "Apricot Sword",
    "href": "/Apricot_Sword",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/",
    "requirements": [
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "buildsInto": {
      "Durendal mk2": {
        "name": "Durendal mk2",
        "href": "/Durendal_mk2",
        "image": null
      },
      "Volticletto": {
        "name": "Volticletto",
        "href": "/Volticletto",
        "image": null
      },
      "Meteor Claymore": {
        "name": "Meteor Claymore",
        "href": "/Meteor_Claymore",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 21",
      "Cooldown Reduction + 10%",
      "Critical Strike Damage + 25%",
      "Critical Strike Chance + 10%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sword of Justice": {
    "name": "Sword of Justice",
    "href": "/Sword_of_Justice",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Sword_of_Justice.png/",
    "requirements": [
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Covert Agent Uniform",
        "href": "/Covert_Agent_Uniform",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6f/Covert_Agent_Uniform.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Hanbok.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      }
    ],
    "buildsInto": {
      "Mistilteinn": {
        "name": "Mistilteinn",
        "href": "/Mistilteinn",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Covert Agent Uniform",
        "href": "/Covert_Agent_Uniform",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6f/Covert_Agent_Uniform.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 30",
      "Critical Strike Damage + 25%",
      "SP Regen (%) + 200%",
      "HP Regen  + 1.5",
      "Cooldown Reduction + 12%"
    ],
    "description": "Historical texts state that Hong Gil-dong, the Robin Hood of ancient Korea, used it.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Durendal mk2": {
    "name": "Durendal mk2",
    "href": "/Durendal_mk2",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Durendal_mk2.png/",
    "requirements": [
      {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 51",
      "Critical Strike Damage + 25%",
      "Critical Strike Chance + 10%",
      "Vision Range + 3",
      "Cooldown Reduction + 10%"
    ],
    "description": "This sword appeared the epic French poem \"The Song of Roland\". The original sword was broken into fragments after the death of Roland, but the fragments that have been found hold an ancient and mysterious power and have been reunited in the modern version.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Volticletto": {
    "name": "Volticletto",
    "href": "/Volticletto",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Volticletto.png/",
    "requirements": [
      {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 47",
      "Attack Speed (%) + 35%",
      "Critical Strike Damage + 25%",
      "Critical Strike Chance + 10%",
      "Cooldown Reduction + 10%"
    ],
    "description": "The word \"Volticletto\" is a portmanteau of 'voltaic,' meaning related to electric current, and the Italian 'Stiletto knife'. Punctures from this weapon cause double the pain.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Meteor Claymore": {
    "name": "Meteor Claymore",
    "href": "/Meteor_Claymore",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5c/Meteor_Claymore.png/",
    "requirements": [
      {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Flower_of_Fate.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Apricot Sword",
        "href": "/Apricot_Sword",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Apricot_Sword.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 75",
      "Critical Strike Damage + 30%",
      "Cooldown Reduction + 10%"
    ],
    "description": "The silver-grey colored metals found in Meteorsteel can be used to make a great sword with great strength. However, manufacturing it is no easy task.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Joyeuse": {
    "name": "Joyeuse",
    "href": "/Joyeuse",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Joyeuse.png/",
    "requirements": [
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 75",
      "Critical Strike Damage + 30%",
      "Movement Speed + 0.2"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mistilteinn": {
    "name": "Mistilteinn",
    "href": "/Mistilteinn",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Mistilteinn.png/",
    "requirements": [
      {
        "name": "Sword of Justice",
        "href": "/Sword_of_Justice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Sword_of_Justice.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Rapier",
        "href": "/Rapier",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Rapier.png/"
      },
      {
        "name": "Covert Agent Uniform",
        "href": "/Covert_Agent_Uniform",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6f/Covert_Agent_Uniform.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Hanbok",
        "href": "/Hanbok",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Hanbok.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Patched Robe",
        "href": "/Patched_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Patched_Robe.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sword of Justice",
        "href": "/Sword_of_Justice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Sword_of_Justice.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 30",
      "HP Regen + 1.5",
      "SP Regen (%) + 200%",
      "Critical Strike Damage + 25%",
      "Cooldown Reduction + 12%",
      "Skill Amplification + 17%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Short Spear": {
    "name": "Short Spear",
    "href": "/Short_Spear",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/",
    "requirements": [],
    "buildsInto": {
      "Bamboo Spear": {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": null
      },
      "Pike": {
        "name": "Pike",
        "href": "/Pike",
        "image": null
      },
      "Ballista": {
        "name": "Ballista",
        "href": "/Ballista",
        "image": null
      },
      "Harpoon Gun": {
        "name": "Harpoon Gun",
        "href": "/Harpoon_Gun",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 15"
    ],
    "description": "A spear with a short shaft - about half the size of a long spear. Learn how to move freely during battle while wielding this weapon and attack with a fearless combat posture.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bamboo Spear": {
    "name": "Bamboo Spear",
    "href": "/Bamboo_Spear",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/",
    "requirements": [
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Bident": {
        "name": "Bident",
        "href": "/Bident",
        "image": null
      },
      "Sharpened Spear": {
        "name": "Sharpened Spear",
        "href": "/Sharpened_Spear",
        "image": null
      },
      "Blazing Lance": {
        "name": "Blazing Lance",
        "href": "/Blazing_Lance",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 37"
    ],
    "description": "A spear made out of bamboo. Yup.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bident": {
    "name": "Bident",
    "href": "/Bident",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Bident.png/",
    "requirements": [],
    "buildsInto": {
      "Cosmic Bident": {
        "name": "Cosmic Bident",
        "href": "/Cosmic_Bident",
        "image": null
      },
      "Lance of Poseidon": {
        "name": "Lance of Poseidon",
        "href": "/Lance_of_Poseidon",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": null,
        "href": "/Bamboo_Spear.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": null,
        "href": "/Kitchen_Knife.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 52"
    ],
    "description": "The weapon of Hades, the Greek god of the underworld.  It's a two-pronged spear and one of the known treasures of Hades, along with his cornucopia and helmet.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Pike": {
    "name": "Pike",
    "href": "/Pike",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/",
    "requirements": [
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Halberd Axe": {
        "name": "Halberd Axe",
        "href": "/Halberd_Axe",
        "image": null
      },
      "Lance of Poseidon": {
        "name": "Lance of Poseidon",
        "href": "/Lance_of_Poseidon",
        "image": null
      },
      "Spear of Longinus": {
        "name": "Spear of Longinus",
        "href": "/Spear_of_Longinus",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 67",
      "Movement Speed - 0.1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Halberd Axe": {
    "name": "Halberd Axe",
    "href": "/Halberd_Axe",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Halberd_Axe.png/",
    "requirements": [
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Fangtian Huaji": {
        "name": "Fangtian Huaji",
        "href": "/Fangtian_Huaji",
        "image": null
      },
      "Dragon Guandao": {
        "name": "Dragon Guandao",
        "href": "/Dragon_Guandao",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 90",
      "Movement Speed - 0.1"
    ],
    "description": "On one end there's an ax blade and on the other end there's a stabbing blade.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sharpened Spear": {
    "name": "Sharpened Spear",
    "href": "/Sharpened_Spear",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sharpened_Spear.png/",
    "requirements": [
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Gentian Silver Gun": {
        "name": "Gentian Silver Gun",
        "href": "/Gentian_Silver_Gun",
        "image": null
      },
      "Eighteen Foot Spear": {
        "name": "Eighteen Foot Spear",
        "href": "/Eighteen_Foot_Spear",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 40",
      "Movement Speed + 0.1"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Gentian Silver Gun": {
    "name": "Gentian Silver Gun",
    "href": "/Gentian_Silver_Gun",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/03/Gentian_Silver_Gun.png/",
    "requirements": [
      {
        "name": "Sharpened Spear",
        "href": "/Sharpened_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sharpened_Spear.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sharpened Spear",
        "href": "/Sharpened_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sharpened_Spear.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 105",
      "Movement Speed + 0.2"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Eighteen Foot Spear": {
    "name": "Eighteen Foot Spear",
    "href": "/Eighteen_Foot_Spear",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Eighteen_foot_spear.png/",
    "requirements": [
      {
        "name": "Sharpened Spear",
        "href": "/Sharpened_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sharpened_Spear.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      },
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sharpened Spear",
        "href": "/Sharpened_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/61/Sharpened_Spear.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 100",
      "Attack Speed (%) + 40%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Cosmic Bident": {
    "name": "Cosmic Bident",
    "href": "/Cosmic_Bident",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/54/Cosmic_Bident.png/",
    "requirements": [
      {
        "name": "Bident",
        "href": "/Bident",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Bident.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bident",
        "href": "/Bident",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Bident.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 150"
    ],
    "description": "A futuristic version of the spear of Hades, the Greek god of the underworld.  Snuff out the future of your enemy with this futuristic technology.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Lance of Poseidon": {
    "name": "Lance of Poseidon",
    "href": "/Lance_of_Poseidon",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1b/Lance_of_Poseidon.png/",
    "requirements": [
      {
        "name": "Bident",
        "href": "/Bident",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Bident.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      },
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Kitchen Knife",
        "href": "/Kitchen_Knife",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Kitchen_Knife.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bident",
        "href": "/Bident",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Bident.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 120",
      "Movement Speed - 0.05"
    ],
    "description": "A powerful spear that can bring forth waves. It's said to have once been used by Poseidon.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Fangtian Huaji": {
    "name": "Fangtian Huaji",
    "href": "/Fangtian_Huaji",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4b/Fangtian_Huaji.png/",
    "requirements": [
      {
        "name": "Halberd Axe",
        "href": "/Halberd_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Halberd_Axe.png/"
      },
      {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Gilded_Quill_Fan.png/"
      },
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Halberd Axe",
        "href": "/Halberd_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Halberd_Axe.png/"
      },
      {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Gilded_Quill_Fan.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 88",
      "Skill Amplification + 37",
      "Movement Speed - 0.1",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Dragon Guandao": {
    "name": "Dragon Guandao",
    "href": "/Dragon_Guandao",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5c/Dragon_Guandao.png/",
    "requirements": [
      {
        "name": "Halberd Axe",
        "href": "/Halberd_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Halberd_Axe.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Hatchet",
        "href": "/Hatchet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Hatchet.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Halberd Axe",
        "href": "/Halberd_Axe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Halberd_Axe.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 130",
      "Movement Speed - 0.1"
    ],
    "description": "Made of 49 kg of iron during the Three Kingdoms period. It was thought to be used by Guan Yu.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Blazing Lance": {
    "name": "Blazing Lance",
    "href": "/Blazing_Lance",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/01/Blazing_Lance.png/",
    "requirements": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "True Samadhi Fire",
        "href": "/True_Samadhi_Fire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/True_Samadhi_Fire.png/"
      },
      {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2b/Bamboo_Spear.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 110",
      "HP Regen + 1.5",
      "SP Regen + 1.5",
      "Extra Normal Attack Damage + 30"
    ],
    "description": "The length stretches freely, and flames spurt from the end of the spear; a treasure that appeared in \"Fengshen Yanyi.\"",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Spear of Longinus": {
    "name": "Spear of Longinus",
    "href": "/Spear_of_Longinus",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Spear_of_Longinus.png/",
    "requirements": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Pike",
        "href": "/Pike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Pike.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 140",
      "Life Steal + 20%"
    ],
    "description": "Though its origins may be unclear, this spear is said to have been involved in mythical holiness. Texts say that this spear has the ability to heal its owner under certain conditions.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Hammer": {
    "name": "Hammer",
    "href": "/Hammer",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/",
    "requirements": [],
    "buildsInto": {
      "Warhammer": {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": null
      },
      "Ruby": {
        "name": "Ruby",
        "href": "/Ruby",
        "image": null
      },
      "Iron Sheet": {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 16"
    ],
    "description": "Try not to hammer your finger instead of the nail...",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Warhammer": {
    "name": "Warhammer",
    "href": "/Warhammer",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/",
    "requirements": [
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "buildsInto": {
      "Morning Star": {
        "name": "Morning Star",
        "href": "/Morning_Star",
        "image": null
      },
      "Black Stag Hammer": {
        "name": "Black Stag Hammer",
        "href": "/Black_Stag_Hammer",
        "image": null
      },
      "Magic Stick": {
        "name": "Magic Stick",
        "href": "/Magic_Stick",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 40"
    ],
    "description": "It's like a gift set of close combat weapons! Includes a hammer for striking, a spear for piercing, and a sword for slashing.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Morning Star": {
    "name": "Morning Star",
    "href": "/Morning_Star",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/Morning_Star.png/",
    "requirements": [
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "buildsInto": {
      "Fang Mace": {
        "name": "Fang Mace",
        "href": "/Fang_Mace",
        "image": null
      },
      "Evening Star": {
        "name": "Evening Star",
        "href": "/Evening_Star",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 55"
    ],
    "description": "A blunt weapon you use with both hands. It was used by infantry against knights on horseback. The head of the weapon can be changed according to the user's style.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Black Stag Hammer": {
    "name": "Black Stag Hammer",
    "href": "/Black_Stag_Hammer",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Black_Stag_Hammer.png/",
    "requirements": [
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "buildsInto": {
      "Hammer of Dagda": {
        "name": "Hammer of Dagda",
        "href": "/Hammer_of_Dagda",
        "image": null
      },
      "Hammer of Thor": {
        "name": "Hammer of Thor",
        "href": "/Hammer_of_Thor",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 56"
    ],
    "description": "",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Fang Mace": {
    "name": "Fang Mace",
    "href": "/Fang_Mace",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2f/Fang_Mace.png/",
    "requirements": [
      {
        "name": "Morning Star",
        "href": "/Morning_Star",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/Morning_Star.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Morning Star",
        "href": "/Morning_Star",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/Morning_Star.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 55",
      "Skill Damage Increase + 31"
    ],
    "description": "",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Hammer of Dagda": {
    "name": "Hammer of Dagda",
    "href": "/Hammer_of_Dagda",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Hammer_of_Dagda.png/",
    "requirements": [
      {
        "name": "Black Stag Hammer",
        "href": "/Black_Stag_Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Black_Stag_Hammer.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      },
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Black Stag Hammer",
        "href": "/Black_Stag_Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Black_Stag_Hammer.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 95",
      "HP Regen (%) + 250%"
    ],
    "description": "",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Hammer of Thor": {
    "name": "Hammer of Thor",
    "href": "/Hammer_of_Thor",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Hammer_of_Thor.png/",
    "requirements": [
      {
        "name": "Black Stag Hammer",
        "href": "/Black_Stag_Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Black_Stag_Hammer.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      },
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Black Stag Hammer",
        "href": "/Black_Stag_Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Black_Stag_Hammer.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 120",
      "Attack Speed (%) + 40%"
    ],
    "description": "The hammer that Thor, the God of Thunder, used. Also called Mjolnir, meaning \"The Destroyer.\"",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Evening Star": {
    "name": "Evening Star",
    "href": "/Evening_Star",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Evening_Star.png/",
    "requirements": [
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Morning Star",
        "href": "/Morning_Star",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/Morning_Star.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Morning Star",
        "href": "/Morning_Star",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bc/Morning_Star.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 150"
    ],
    "description": "",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Magic Stick": {
    "name": "Magic Stick",
    "href": "/Magic_Stick",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Magic_Stick.png/",
    "requirements": [
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Moonlight Pendant",
        "href": "/Moonlight_Pendant",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d1/Moonlight_Pendant.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Moonstone",
        "href": "/Moonstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Moon_Stone.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a5/Warhammer.png/"
      },
      {
        "name": "Moonlight Pendant",
        "href": "/Moonlight_Pendant",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d1/Moonlight_Pendant.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 65",
      "Life Steal + 30%",
      "Skill Damage Increase + 27%"
    ],
    "description": "The stick often carried by the main characters of Shoujo comics. The moral of the Shoujo genre is that peace must be maintained through greater power.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Branch": {
    "name": "Branch",
    "href": "/Branch",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/",
    "requirements": [],
    "buildsInto": {
      "Circlet": {
        "name": "Circlet",
        "href": "/Circlet",
        "image": null
      },
      "Military Suit": {
        "name": "Military Suit",
        "href": "/Military_Suit",
        "image": null
      },
      "Butter": {
        "name": "Butter",
        "href": "/Butter",
        "image": null
      },
      "Army Knife": {
        "name": "Army Knife",
        "href": "/Army_Knife",
        "image": null
      },
      "Tonfa": {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": null
      },
      "Willow Leaf Spike": {
        "name": "Willow Leaf Spike",
        "href": "/Willow_Leaf_Spike",
        "image": null
      },
      "Wooden Bow": {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": null
      },
      "Mistilteinn": {
        "name": "Mistilteinn",
        "href": "/Mistilteinn",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 5"
    ],
    "description": "Now's not the time to protect the environment. Now is the time to protect yourself.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Short Rod": {
    "name": "Short Rod",
    "href": "/Short_Rod",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/",
    "requirements": [],
    "buildsInto": {
      "Warhammer": {
        "name": "Warhammer",
        "href": "/Warhammer",
        "image": null
      },
      "Long Rod": {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": null
      },
      "Feather Duster": {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": null
      },
      "Reaper's Scythe": {
        "name": "Reaper's Scythe",
        "href": "/Reaper%27s_Scythe",
        "image": null
      },
      "Mai Sok": {
        "name": "Mai Sok",
        "href": "/Mai_Sok",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 15"
    ],
    "description": "Fine to carry and suitable for offense.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Long Rod": {
    "name": "Long Rod",
    "href": "/Long_Rod",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/",
    "requirements": [
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Goblin Bat": {
        "name": "Goblin Bat",
        "href": "/Goblin_Bat",
        "image": null
      },
      "Umbrella": {
        "name": "Umbrella",
        "href": "/Umbrella",
        "image": null
      },
      "Monkey King Bar": {
        "name": "Monkey King Bar",
        "href": "/Monkey_King_Bar",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 25"
    ],
    "description": "You can keep more distance than when using a short rod, but you still have to be careful.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Goblin Bat": {
    "name": "Goblin Bat",
    "href": "/Goblin_Bat",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Goblin_Bat.png/",
    "requirements": [],
    "buildsInto": {
      "Mallet": {
        "name": "Mallet",
        "href": "/Mallet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": null,
        "href": "/Long_Rod.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      },
      {
        "name": null,
        "href": "/Nail.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 30",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "A supernatural demon from the East that is said to be playful with humans. Westerns may identify them as an \"Imp.\"",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Torch": {
    "name": "Torch",
    "href": "/Torch",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Torch.png/",
    "requirements": [
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {
      "Statue of Soteria": {
        "name": "Statue of Soteria",
        "href": "/Statue_of_Soteria",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 40",
      "HP Regen + 0.8",
      "Attack Speed (%) + 10%",
      "Movement Speed + 0.1"
    ],
    "description": "The torch that lights your way might help you keep your own life from being extinguished. If you see an enemy, don't hesitate to swing.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Umbrella": {
    "name": "Umbrella",
    "href": "/Umbrella",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Umbrella.png/",
    "requirements": [
      {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Spy Umbrella": {
        "name": "Spy Umbrella",
        "href": "/Spy_Umbrella",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 30",
      "Skill Damage Increase + 14"
    ],
    "description": "You might wonder how this became a weapon, but it is often used as a murder weapon in mystery stories.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Statue of Soteria": {
    "name": "Statue of Soteria",
    "href": "/Statue_of_Soteria",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Statue_of_Soteria.png/",
    "requirements": [
      {
        "name": "Torch",
        "href": "/Torch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Torch.png/"
      },
      {
        "name": "Doll",
        "href": "/Doll",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Doll.png/"
      },
      {
        "name": "Feather Duster",
        "href": "/Feather_Duster",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0e/Feather_Duster.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Torch",
        "href": "/Torch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Torch.png/"
      },
      {
        "name": "Doll",
        "href": "/Doll",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Doll.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 90",
      "HP Regen + 1.2",
      "SP Regen (%) + 60%",
      "Attack Speed (%) + 15%",
      "Movement Speed + 0.15",
      "Life Steal (%) + 10%"
    ],
    "description": "Give me your tired, your poor, your huddled masses yearning to breathe free, the wretched refuse of your teeming shore. Send these, the homeless, tempest-tossed to me. I lift my lamp beside the golden door.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Spy Umbrella": {
    "name": "Spy Umbrella",
    "href": "/Spy_Umbrella",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/13/Spy_Umbrella.png/",
    "requirements": [
      {
        "name": "Umbrella",
        "href": "/Umbrella",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Umbrella.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Umbrella",
        "href": "/Umbrella",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Umbrella.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 60",
      "Skill Amplification + 25"
    ],
    "description": "There is a poisoned needle concealed at the tip of the umbrella. You can make use of it when the timing is right. Pretend to accidentally stab your target's foot with the tip while carrying it on a rainy day.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Mallet": {
    "name": "Mallet",
    "href": "/Mallet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Mallet.png/",
    "requirements": [
      {
        "name": "Goblin Bat",
        "href": "/Goblin_Bat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Goblin_Bat.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      },
      {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Goblin Bat",
        "href": "/Goblin_Bat",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Goblin_Bat.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 80",
      "Attack Speed (%) + 50%",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Monkey King Bar": {
    "name": "Monkey King Bar",
    "href": "/Monkey_King_Bar",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Monkey_King_Bar.png/",
    "requirements": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Long_Rod.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 150"
    ],
    "description": "A tool, made by Daode Tianzun, used for measuring the depth of the river and sea. The Dragon King of the East Sea kept it in his palace storage, but Sun Wukong stole it and used it as a weapon.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Iron Ball": {
    "name": "Iron Ball",
    "href": "/Iron_Ball",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/",
    "requirements": [],
    "buildsInto": {
      "Grenade": {
        "name": "Grenade",
        "href": "/Grenade",
        "image": null
      },
      "Ball Lightning": {
        "name": "Ball Lightning",
        "href": "/Ball_Lightning",
        "image": null
      },
      "Heelys": {
        "name": "Heelys",
        "href": "/Heelys",
        "image": null
      },
      "Clang Clatter": {
        "name": "Clang Clatter",
        "href": "/Clang_Clatter",
        "image": null
      },
      "Morning Star": {
        "name": "Morning Star",
        "href": "/Morning_Star",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 12"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "1"
  },
  "Grenade": {
    "name": "Grenade",
    "href": "/Grenade",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Grenade.png/",
    "requirements": [
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {
      "High Explosive Grenade": {
        "name": "High Explosive Grenade",
        "href": "/High_Explosive_Grenade",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 25",
      "Extra Damage to Normal Attacks + 20"
    ],
    "description": "Be careful! The moment you relax and forget you're carrying a grenade is the moment that you become a victim. Boom.",
    "maxStacks": "200",
    "foundQuantity": "8"
  },
  "Molotov Cocktail": {
    "name": "Molotov Cocktail",
    "href": "/Molotov_Cocktail",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Molotov_Cocktail.png/",
    "requirements": [
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "buildsInto": {
      "Flour Bomb": {
        "name": "Flour Bomb",
        "href": "/Flour_Bomb",
        "image": null
      },
      "Incendiary Bomb": {
        "name": "Incendiary Bomb",
        "href": "/Incendiary_Bomb",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 22",
      "Attack Speed (%) + 15%"
    ],
    "description": "Make a mistake and drop it, you'll become your own worst enemy.",
    "maxStacks": "200",
    "foundQuantity": "20"
  },
  "Signed Ball": {
    "name": "Signed Ball",
    "href": "/Signed_Ball",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Signed_Ball.png/",
    "requirements": [
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 30"
    ],
    "description": "",
    "maxStacks": "80",
    "foundQuantity": "50"
  },
  "Sling": {
    "name": "Sling",
    "href": "/Sling",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Sling.png/",
    "requirements": [],
    "buildsInto": {
      "David's Sling": {
        "name": "David's Sling",
        "href": "/David%27s_Sling",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": null,
        "href": "/Signed_Ball.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Signed_Ball.png/"
      },
      {
        "name": null,
        "href": "/Rubber.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 42"
    ],
    "description": "",
    "maxStacks": "80",
    "foundQuantity": "50"
  },
  "Flour Bomb": {
    "name": "Flour Bomb",
    "href": "/Flour_Bomb",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Flour_Bomb.png/",
    "requirements": [
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Molotov_Cocktail.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "buildsInto": {
      "Smoke Bomb": {
        "name": "Smoke Bomb",
        "href": "/Smoke_Bomb",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Molotov_Cocktail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 58",
      "Attack Speed (%) +15%"
    ],
    "description": "By combining a flour bomb and some gunpowder, you can make a smoke bomb. Let's see if there's any gunpowder around here...",
    "maxStacks": "200",
    "foundQuantity": "20"
  },
  "Ball Lightning": {
    "name": "Ball Lightning",
    "href": "/Ball_Lightning",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Ball_Lightning.png/",
    "requirements": [
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 24",
      "Attack Speed (%) + 20%"
    ],
    "description": "You can knock out your enemies by throwing the hammer, but it's your choice to run or keep fighting.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Flubber": {
    "name": "Flubber",
    "href": "/Flubber",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Flubber.png/",
    "requirements": [
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Spiky Bouncy Ball": {
        "name": "Spiky Bouncy Ball",
        "href": "/Spiky_Bouncy_Ball",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 42"
    ],
    "description": "It feels like the innocence of childhood. If you drop it, it'll lose its viscosity and become stiff, so take care of it.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Spiky Bouncy Ball": {
    "name": "Spiky Bouncy Ball",
    "href": "/Spiky_Bouncy_Ball",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Spiky_Bouncy_Ball.png/",
    "requirements": [
      {
        "name": "Flubber",
        "href": "/Flubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Flubber.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Ruthenium Marble": {
        "name": "Ruthenium Marble",
        "href": "/Ruthenium_Marble",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Flubber",
        "href": "/Flubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Flubber.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 36",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "A rubber ball with sharp fragments on the surface. It hurts. Also, don't underestimate its bouncing capability!",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Incendiary Bomb": {
    "name": "Incendiary Bomb",
    "href": "/Incendiary_Bomb",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/cc/Incendiary_Bomb.png/",
    "requirements": [
      {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Molotov_Cocktail.png/"
      },
      {
        "name": "Ball Lightning",
        "href": "/Ball_Lightning",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Ball_Lightning.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Molotov_Cocktail.png/"
      },
      {
        "name": "Ball Lightning",
        "href": "/Ball_Lightning",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Ball_Lightning.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 70",
      "Attack Speed (%) + 50%"
    ],
    "description": "Inflict damage by quickly spreading fire to an area. It'll be hard to extinguish.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Grenade of Antioch": {
    "name": "Grenade of Antioch",
    "href": "/Grenade_of_Antioch",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Grenade_of_Antioch.png/",
    "requirements": [
      {
        "name": "High Explosive Grenade",
        "href": "/High_Explosive_Grenade",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/High_Explosive_Grenade.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Grenade",
        "href": "/Grenade",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Grenade.png/"
      },
      {
        "name": "RDX",
        "href": "/RDX",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/RDX.png/"
      },
      {
        "name": "link:Iron Ball",
        "href": "/Iron_Ball.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "link:Gunpowder",
        "href": "/Gunpowder.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "link:Dynamite",
        "href": "/Dynamite.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Dynamite.png/"
      },
      {
        "name": "link:Scrap Metal",
        "href": "/Scrap_Metal.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "link:Piano Wire",
        "href": "/Piano_Wire.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "link:Gunpowder",
        "href": "/Gunpowder.png",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "High Explosive Grenade",
        "href": "/High_Explosive_Grenade",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/High_Explosive_Grenade.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 85",
      "Extra Normal Attack Damage + 80"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "8"
  },
  "David's Sling": {
    "name": "David's Sling",
    "href": "/David%27s_Sling",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/David%27s_Sling.png/",
    "requirements": [
      {
        "name": "Sling",
        "href": "/Sling",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Sling.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      },
      {
        "name": "Signed Ball",
        "href": "/Signed_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/af/Signed_Ball.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Holy Grail",
        "href": "/Holy_Grail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/56/Holy_Grail.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sling",
        "href": "/Sling",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Sling.png/"
      },
      {
        "name": "Saint's Relic",
        "href": "/Saint%27s_Relic",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Saint%27s_Relic.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 80",
      "HP Regen (%) + 150%",
      "Extra Normal Attack Damage + 30"
    ],
    "description": "David's legendary stone that killed Goliath, the giant of Philistine.",
    "maxStacks": "80",
    "foundQuantity": "50"
  },
  "Smoke Bomb": {
    "name": "Smoke Bomb",
    "href": "/Smoke_Bomb",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/eb/Smoke_Bomb.png/",
    "requirements": [
      {
        "name": "Flour Bomb",
        "href": "/Flour_Bomb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Flour_Bomb.png/"
      },
      {
        "name": "Cola",
        "href": "/Cola",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Coke.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Molotov Cocktail",
        "href": "/Molotov_Cocktail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fa/Molotov_Cocktail.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Flour Bomb",
        "href": "/Flour_Bomb",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/14/Flour_Bomb.png/"
      },
      {
        "name": "Cola",
        "href": "/Cola",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/90/Coke.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 90",
      "Attack Speed (%) +40%"
    ],
    "description": "Inflicts immense damage by emitting a poisonous gas. It is made from gunpowder and a special barrel.",
    "maxStacks": "200",
    "foundQuantity": "20"
  },
  "High Explosive Grenade": {
    "name": "High Explosive Grenade",
    "href": "/High_Explosive_Grenade",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/df/High_Explosive_Grenade.png/",
    "requirements": [
      {
        "name": "Grenade",
        "href": "/Grenade",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Grenade.png/"
      },
      {
        "name": "RDX",
        "href": "/RDX",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/RDX.png/"
      },
      {
        "name": "Iron Ball",
        "href": "/Iron_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Iron_Ball.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Dynamite",
        "href": "/Dynamite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Dynamite.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Grenade",
        "href": "/Grenade",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Grenade.png/"
      },
      {
        "name": "RDX",
        "href": "/RDX",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/RDX.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 56",
      "Extra Normal Attack Damage + 60"
    ],
    "description": "It hurts when you touch it, but it even hurts more when it explodes next to you.",
    "maxStacks": "200",
    "foundQuantity": "8"
  },
  "Ruthenium Marble": {
    "name": "Ruthenium Marble",
    "href": "/Ruthenium_Marble",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Ruthenium_Marble.png/",
    "requirements": [
      {
        "name": "Spiky Bouncy Ball",
        "href": "/Spiky_Bouncy_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Spiky_Bouncy_Ball.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Flubber",
        "href": "/Flubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d7/Flubber.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Boiling Water",
        "href": "/Boiling_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/85/Boiling_Water.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Spiky Bouncy Ball",
        "href": "/Spiky_Bouncy_Ball",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Spiky_Bouncy_Ball.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 80",
      "Skill Amplification + 20%",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "Made out of Ruthenium, which is the hardest element among the platinum metals. It also has applications as a superconductor.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Razor": {
    "name": "Razor",
    "href": "/Razor",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/",
    "requirements": [],
    "buildsInto": {
      "Throwing Stars": {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": null
      },
      "Onyx Dagger": {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": null
      },
      "Bullwhip": {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": null
      },
      "Bleeder": {
        "name": "Bleeder",
        "href": "/Bleeder",
        "image": null
      },
      "Qipao": {
        "name": "Qipao",
        "href": "/Qipao",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 11"
    ],
    "description": "Check for these in your Halloween candy before you eat it!",
    "maxStacks": "200",
    "foundQuantity": ""
  },
  "Playing Cards": {
    "name": "Playing Cards",
    "href": "/Playing_Cards",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/",
    "requirements": [],
    "buildsInto": {
      "Vintage Cards": {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": null
      },
      "Flower of Fate": {
        "name": "Flower of Fate",
        "href": "/Flower_of_Fate",
        "image": null
      },
      "Bohemian": {
        "name": "Bohemian",
        "href": "/Bohemian",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 4",
      "Critical Strike Chance + 5%"
    ],
    "description": "It's exhilarating to have a lucky win streak.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Chalk": {
    "name": "Chalk",
    "href": "/Chalk",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/",
    "requirements": [],
    "buildsInto": {
      "White Powder": {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 12"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Dart": {
    "name": "Dart",
    "href": "/Dart",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Dart.png/",
    "requirements": [
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "buildsInto": {
      "Plumbata": {
        "name": "Plumbata",
        "href": "/Plumbata",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 16",
      "Critical Strike Damage + 20%",
      "Movement Speed + 0.1"
    ],
    "description": "It's cute, but it can be deadly if it hits the right spot.",
    "maxStacks": "200",
    "foundQuantity": "20"
  },
  "Vintage Cards": {
    "name": "Vintage Cards",
    "href": "/Vintage_Cards",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/",
    "requirements": [
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "buildsInto": {
      "Charm": {
        "name": "Charm",
        "href": "/Charm",
        "image": null
      },
      "Cards of Tyranny": {
        "name": "Cards of Tyranny",
        "href": "/Cards_of_Tyranny",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 15",
      "Critical Strike Damage + 10%"
    ],
    "description": "A shabby looking deck of cards. Probably used to gamble in a sketchy alley.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Onyx Dagger": {
    "name": "Onyx Dagger",
    "href": "/Onyx_Dagger",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/",
    "requirements": [
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "buildsInto": {
      "Willow Leaf Spike": {
        "name": "Willow Leaf Spike",
        "href": "/Willow_Leaf_Spike",
        "image": null
      },
      "Azure Dagger": {
        "name": "Azure Dagger",
        "href": "/Azure_Dagger",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 17",
      "Extra Damage to Normal Attacks + 10"
    ],
    "description": "Made out of a throwing dagger and a cross. It practically jumps from the tips of your fingers to fly into the heart of your enemy",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Throwing Stars": {
    "name": "Throwing Stars",
    "href": "/Throwing_Stars",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/",
    "requirements": [
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Chakram": {
        "name": "Chakram",
        "href": "/Chakram",
        "image": null
      },
      "Sudarsana": {
        "name": "Sudarsana",
        "href": "/Sudarsana",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 27"
    ],
    "description": "It's convenient, but be careful when using it. It doesn't come back to you like a boomerang.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Charm": {
    "name": "Charm",
    "href": "/Charm",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Charm.png/",
    "requirements": [
      {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "buildsInto": {
      "Mystic Jade Charm": {
        "name": "Mystic Jade Charm",
        "href": "/Mystic_Jade_Charm",
        "image": null
      },
      "Death Rune": {
        "name": "Death Rune",
        "href": "/Death_Rune",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 40",
      "Skill Damage increase + 10%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "10"
  },
  "Willow Leaf Spike": {
    "name": "Willow Leaf Spike",
    "href": "/Willow_Leaf_Spike",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Willow_Leaf_Spike.png/",
    "requirements": [
      {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "buildsInto": {
      "Apricot Flower Tag": {
        "name": "Apricot Flower Tag",
        "href": "/Apricot_Flower_Tag",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 17",
      "Extra Normal Attack Damage + 20"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Chakram": {
    "name": "Chakram",
    "href": "/Chakram",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Chakram.png/",
    "requirements": [
      {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Dharma Chakram": {
        "name": "Dharma Chakram",
        "href": "/Dharma_Chakram",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 38"
    ],
    "description": "The chakram is basically a throwing weapon, but in some cases, it also can be used to slash enemies like a melee weapon. Its circular shape has sharp blades around it, making it even more deadly.",
    "maxStacks": "80",
    "foundQuantity": "50"
  },
  "Apricot Flower Tag": {
    "name": "Apricot Flower Tag",
    "href": "/Apricot_Flower_Tag",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Apricot_Flower_Tag.png/",
    "requirements": [
      {
        "name": "Willow Leaf Spike",
        "href": "/Willow_Leaf_Spike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Willow_Leaf_Spike.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Willow Leaf Spike",
        "href": "/Willow_Leaf_Spike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Willow_Leaf_Spike.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 14",
      "Cooldown Reduction + 10%",
      "Extra Normal Attack Damage +30"
    ],
    "description": "A brazen claim by some say they used to be fighters, but nobody has ever actually seen them fight.",
    "maxStacks": "80",
    "foundQuantity": "50"
  },
  "Venom Dart": {
    "name": "Venom Dart",
    "href": "/Venom_Dart",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e3/Venom_Dart.png/",
    "requirements": [
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Frost Venom Dart": {
        "name": "Frost Venom Dart",
        "href": "/Frost_Venom_Dart",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 55",
      "Critical Strike Damage + 20%",
      "Skill Damage Increase + 15"
    ],
    "description": "This deadly poison can kill an elephant within 3 seconds. Use it carefully.",
    "maxStacks": "200",
    "foundQuantity": "3"
  },
  "Dharma Chakram": {
    "name": "Dharma Chakram",
    "href": "/Dharma_Chakram",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Dharma_Chakram.png/",
    "requirements": [
      {
        "name": "Chakram",
        "href": "/Chakram",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Chakram.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Wind and Fire Wheels": {
        "name": "Wind and Fire Wheels",
        "href": "/Wind_and_Fire_Wheels",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Chakram",
        "href": "/Chakram",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Chakram.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 34",
      "Skill Damage Increase + 15%"
    ],
    "description": "A legendary weapon Buddha used to exorcise a demon. It causes damage with the sharp blades that rotate around its perimeter.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Plumbata": {
    "name": "Plumbata",
    "href": "/Plumbata",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/23/Plumbata.png/",
    "requirements": [
      {
        "name": "Dart",
        "href": "/Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Dart.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Flechette": {
        "name": "Flechette",
        "href": "/Flechette",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Dart",
        "href": "/Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Dart.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 48",
      "Movement Speed + 0.1",
      "Critical Strike Damage + 25%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "20"
  },
  "Cards of Tyranny": {
    "name": "Cards of Tyranny",
    "href": "/Cards_of_Tyranny",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Cards_of_Tyranny.png/",
    "requirements": [
      {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Carbonated Water",
        "href": "/Carbonated_Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Carbonated_Water.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/"
      },
      {
        "name": "Ion Battery",
        "href": "/Ion_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Ion_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 49",
      "Attack Speed (%) + 30%",
      "Critical Strike Chance +20%"
    ],
    "description": "A brazen claim by some say they used to be fighters, but nobody has ever actually seen them fight.",
    "maxStacks": "200",
    "foundQuantity": "52"
  },
  "Mystic Jade Charm": {
    "name": "Mystic Jade Charm",
    "href": "/Mystic_Jade_Charm",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Mystic_Jade_Charm.png/",
    "requirements": [
      {
        "name": "Charm",
        "href": "/Charm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Charm.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Charm",
        "href": "/Charm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Charm.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 60",
      "Skill Damage Increase + 12",
      "Skill Damage Increase + 12%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "10"
  },
  "Fuhma Shuriken": {
    "name": "Fuhma Shuriken",
    "href": "/Fuhma_Shuriken",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Fuhma_Shuriken.png/",
    "requirements": [
      {
        "name": "Apricot Flower Tag",
        "href": "/Apricot_Flower_Tag",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Apricot_Flower_Tag.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      },
      {
        "name": "Willow Leaf Spike",
        "href": "/Willow_Leaf_Spike",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Willow_Leaf_Spike.png/"
      },
      {
        "name": "Flower",
        "href": "/Flower",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/dd/Flower.png/"
      },
      {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Apricot Flower Tag",
        "href": "/Apricot_Flower_Tag",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Apricot_Flower_Tag.png/"
      },
      {
        "name": "Alcohol",
        "href": "/Alcohol",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/02/Alcohol.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 44",
      "Cooldown Reduction +15%",
      "Extra Normal Attack Damage +36"
    ],
    "description": "A ninja star originally used by Humma, a band of ninja that were active during the Sengoku period.",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Wind and Fire Wheels": {
    "name": "Wind and Fire Wheels",
    "href": "/Wind_and_Fire_Wheels",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0b/Wind_and_Fire_Wheels.png/",
    "requirements": [
      {
        "name": "Dharma Chakram",
        "href": "/Dharma_Chakram",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Dharma_Chakram.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Chakram",
        "href": "/Chakram",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Chakram.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Dharma Chakram",
        "href": "/Dharma_Chakram",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/42/Dharma_Chakram.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 55",
      "Skill Amplification (%) +17%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Azure Dagger": {
    "name": "Azure Dagger",
    "href": "/Azure_Dagger",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8d/Azure_Dagger.png/",
    "requirements": [
      {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Onyx Dagger",
        "href": "/Onyx_Dagger",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/19/Onyx_Dagger.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 20",
      "Extra Normal Attack Damage + 29",
      "Skill Damage Increase + 24"
    ],
    "description": "Blue weapons aren't always associated with ice or water...",
    "maxStacks": "200",
    "foundQuantity": "50"
  },
  "Flechette": {
    "name": "Flechette",
    "href": "/Flechette",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Flechette.png/",
    "requirements": [
      {
        "name": "Plumbata",
        "href": "/Plumbata",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/23/Plumbata.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Dart",
        "href": "/Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/29/Dart.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Plumbata",
        "href": "/Plumbata",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/23/Plumbata.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 85",
      "Movement Speed + 0.2",
      "Critical Strike Damage + 40%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "20"
  },
  "Frost Venom Dart": {
    "name": "Frost Venom Dart",
    "href": "/Frost_Venom_Dart",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Frost_Venom_Dart.png/",
    "requirements": [
      {
        "name": "Venom Dart",
        "href": "/Venom_Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e3/Venom_Dart.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Petal Torrent": {
        "name": "Petal Torrent",
        "href": "/Petal_Torrent",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Venom Dart",
        "href": "/Venom_Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e3/Venom_Dart.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 80",
      "Skill Damage Increase + 20",
      "Critical Strike Damage + 50%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "3"
  },
  "Death Rune": {
    "name": "Death Rune",
    "href": "/Death_Rune",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/67/Death_Rune.png/",
    "requirements": [
      {
        "name": "Charm",
        "href": "/Charm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Charm.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Vintage Cards",
        "href": "/Vintage_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Vintage_Card.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Playing Cards",
        "href": "/Playing_Cards",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e2/Playing_Cards.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Charm",
        "href": "/Charm",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Charm.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 80",
      "Skill Amplification + 20%"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "10"
  },
  "Sudarsana": {
    "name": "Sudarsana",
    "href": "/Sudarsana",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e7/Sudarsana.png/",
    "requirements": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Throwing Stars",
        "href": "/Throwing_Stars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/60/Throwing_Stars.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 125"
    ],
    "description": "A weapon of Vishnu, one of the three main Hindu Gods. It was used to destroy air fortresses.",
    "maxStacks": "80",
    "foundQuantity": "50"
  },
  "Petal Torrent": {
    "name": "Petal Torrent",
    "href": "/Petal_Torrent",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/28/Petal_Torrent.png/",
    "requirements": [
      {
        "name": "Frost Venom Dart",
        "href": "/Frost_Venom_Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Frost_Venom_Dart.png/"
      },
      {
        "name": "Stingburst",
        "href": "/Stingburst",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2f/Stingburst.png/"
      },
      {
        "name": "Venom Dart",
        "href": "/Venom_Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e3/Venom_Dart.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "RDX",
        "href": "/RDX",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/RDX.png/"
      },
      {
        "name": "Spiked Plank",
        "href": "/Spiked_Plank",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c5/Spiked_Plank.png/"
      },
      {
        "name": "Needle",
        "href": "/Needle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c3/Needle.png/"
      },
      {
        "name": "Poison",
        "href": "/Poison",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/05/Poison.png/"
      },
      {
        "name": "Dynamite",
        "href": "/Dynamite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Dynamite.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Mouse Trap",
        "href": "/Mouse_Trap",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/68/Mouse_Trap.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Frost Venom Dart",
        "href": "/Frost_Venom_Dart",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/aa/Frost_Venom_Dart.png/"
      },
      {
        "name": "Stingburst",
        "href": "/Stingburst",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2f/Stingburst.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 80",
      "Critical Strike Damage + 50%",
      "Extra Normal Attack Damage + 130",
      "Skill Damage Increase + 25"
    ],
    "description": "",
    "maxStacks": "200",
    "foundQuantity": "3"
  },
  "Bow": {
    "name": "Bow",
    "href": "/Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/",
    "requirements": [],
    "buildsInto": {
      "Longbow": {
        "name": "Longbow",
        "href": "/Longbow",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 11"
    ],
    "description": "Try not to cry if the bowstring hits your face.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Wooden Bow": {
    "name": "Wooden Bow",
    "href": "/Wooden_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/",
    "requirements": [
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Strong Bow": {
        "name": "Strong Bow",
        "href": "/Strong_Bow",
        "image": null
      },
      "Pellet Bow": {
        "name": "Pellet Bow",
        "href": "/Pellet_Bow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 26"
    ],
    "description": "A wooden bow. As plain as it seems, you need choice timber to make a usable wooden bow. Plywood is a no go.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Longbow": {
    "name": "Longbow",
    "href": "/Longbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/",
    "requirements": [
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {
      "Composite Bow": {
        "name": "Composite Bow",
        "href": "/Composite_Bow",
        "image": null
      },
      "Mighty Bow": {
        "name": "Mighty Bow",
        "href": "/Mighty_Bow",
        "image": null
      },
      "Scorchbow": {
        "name": "Scorchbow",
        "href": "/Scorchbow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 25"
    ],
    "description": "A unique Korean bow incorporating a horn in its designs. Anyone can use the bow, as it will adapt to the user.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Composite Bow": {
    "name": "Composite Bow",
    "href": "/Composite_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Composite_Bow.png/",
    "requirements": [
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {
      "Twinbow": {
        "name": "Twinbow",
        "href": "/Twinbow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 16",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "A high quality composite bow that was used in the East. There is a record of a man shooting over 440 meters during the England Archery Competition of 1795.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Strong Bow": {
    "name": "Strong Bow",
    "href": "/Strong_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Strong_Bow.png/",
    "requirements": [
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Twinbow": {
        "name": "Twinbow",
        "href": "/Twinbow",
        "image": null
      },
      "Failnaught": {
        "name": "Failnaught",
        "href": "/Failnaught",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 26",
      "Attack Speed (%) + 15%"
    ],
    "description": "A bow with strong elasticity, the bow string is made of 240 strands of three-ply thread.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Stallion Bow": {
    "name": "Stallion Bow",
    "href": "/Stallion_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Stallion_Bow.png/",
    "requirements": [
      {
        "name": "Mighty Bow",
        "href": "/Mighty_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/76/Mighty_Bow.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {
      "Ancient Bolt": {
        "name": "Ancient Bolt",
        "href": "/Ancient_Bolt",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Mighty Bow",
        "href": "/Mighty_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/76/Mighty_Bow.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 20",
      "Extra Normal Attack Damage + 25"
    ],
    "description": "A traditional Korean bow that can kill a tiger with a single arrow.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mighty Bow": {
    "name": "Mighty Bow",
    "href": "/Mighty_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/76/Mighty_Bow.png/",
    "requirements": [
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {
      "Stallion Bow": {
        "name": "Stallion Bow",
        "href": "/Stallion_Bow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 20",
      "Extra Normal Attack Damage + 11"
    ],
    "description": "A bow that can be made by combining a bow and gunpowder. While hiding in darkness, you must draw the bow quietly, but quickly.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Pellet Bow": {
    "name": "Pellet Bow",
    "href": "/Pellet_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/80/Pellet_Bow.png/",
    "requirements": [
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Golden-Ratio Bow": {
        "name": "Golden-Ratio Bow",
        "href": "/Golden-Ratio_Bow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 55"
    ],
    "description": "Can fire bullets instead of arrows. It'd be a good idea to check to see if there are more bullets around.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Scorchbow": {
    "name": "Scorchbow",
    "href": "/Scorchbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Scorchbow.png/",
    "requirements": [
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {
      "Elemental Bow": {
        "name": "Elemental Bow",
        "href": "/Elemental_Bow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 24",
      "Skill Damage Increase + 18"
    ],
    "description": "A fiery arrow will burn your enemy.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Ancient Bolt": {
    "name": "Ancient Bolt",
    "href": "/Ancient_Bolt",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/93/Ancient_Bolt.png/",
    "requirements": [
      {
        "name": "Stallion Bow",
        "href": "/Stallion_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Stallion_Bow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Mighty Bow",
        "href": "/Mighty_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/76/Mighty_Bow.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Stallion Bow",
        "href": "/Stallion_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Stallion_Bow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 55",
      "Extra Normal Attack Damage + 40"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Golden-Ratio Bow": {
    "name": "Golden-Ratio Bow",
    "href": "/Golden-Ratio_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Golden-Ratio_Bow.png/",
    "requirements": [
      {
        "name": "Pellet Bow",
        "href": "/Pellet_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/80/Pellet_Bow.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Heated Stone",
        "href": "/Heated_Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Heated_Stone.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Pellet Bow",
        "href": "/Pellet_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/80/Pellet_Bow.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 68",
      "Skill Amplification + 20%"
    ],
    "description": "A composite bow and arrow designed according to the golden ratio. It boasts extraordinary precision.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Twinbow": {
    "name": "Twinbow",
    "href": "/Twinbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/18/Twinbow.png/",
    "requirements": [
      {
        "name": "Strong Bow",
        "href": "/Strong_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Strong_Bow.png/"
      },
      {
        "name": "Composite Bow",
        "href": "/Composite_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Composite_Bow.png/"
      },
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Strong Bow",
        "href": "/Strong_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Strong_Bow.png/"
      },
      {
        "name": "Composite Bow",
        "href": "/Composite_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4c/Composite_Bow.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 70",
      "Attack Speed (%) + 50%",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "A bow modified to fire arrows with more power by crossing the bowstrings.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Elemental Bow": {
    "name": "Elemental Bow",
    "href": "/Elemental_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Elemental_Bow.png/",
    "requirements": [
      {
        "name": "Scorchbow",
        "href": "/Scorchbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Scorchbow.png/"
      },
      {
        "name": "White Crane Fan",
        "href": "/White_Crane_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/White_Crane_Fan.png/"
      },
      {
        "name": "Longbow",
        "href": "/Longbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e4/Longbow.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Gilded Quill Fan",
        "href": "/Gilded_Quill_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Gilded_Quill_Fan.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Bow",
        "href": "/Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/65/Bow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Scorchbow",
        "href": "/Scorchbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d8/Scorchbow.png/"
      },
      {
        "name": "White Crane Fan",
        "href": "/White_Crane_Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/White_Crane_Fan.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 60",
      "Movement Speed + 0.1",
      "Skill Damage Increase + 45",
      "Healing Reduction (Skills) -40%"
    ],
    "description": "A bow with the elemental powers of nature, such as fire or electricity. Similar to the four elements of Aristotle.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Failnaught": {
    "name": "Failnaught",
    "href": "/Failnaught",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/53/Failnaught.png/",
    "requirements": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Strong Bow",
        "href": "/Strong_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Strong_Bow.png/"
      },
      {
        "name": "Wooden Bow",
        "href": "/Wooden_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Wooden_Bow.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Strong Bow",
        "href": "/Strong_Bow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/35/Strong_Bow.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 80",
      "Attack Speed (%) + 15%",
      "Life Steal + 15%"
    ],
    "description": "The arrows of Tristan, one of the Knights of the Round Table. Known as the arrows that never miss, so it will fail you not.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Short Crossbow": {
    "name": "Short Crossbow",
    "href": "/Short_Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/",
    "requirements": [],
    "buildsInto": {
      "Long Crossbow": {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": null
      },
      "Crossbow": {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 12"
    ],
    "description": "This is a mechanical bow, so take aim and shoot at will.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Long Crossbow": {
    "name": "Long Crossbow",
    "href": "/Long_Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/",
    "requirements": [
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "Power Crossbow": {
        "name": "Power Crossbow",
        "href": "/Power_Crossbow",
        "image": null
      },
      "Heavy Crossbow": {
        "name": "Heavy Crossbow",
        "href": "/Heavy_Crossbow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 30"
    ],
    "description": "A long range weapon that can shoot further than a standard bow. During the Chosun Period, there are records of shots landing from as far as 600 steps away.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Crossbow": {
    "name": "Crossbow",
    "href": "/Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/",
    "requirements": [
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Laser Crossbow": {
        "name": "Laser Crossbow",
        "href": "/Laser_Crossbow",
        "image": null
      },
      "Steel Bow": {
        "name": "Steel Bow",
        "href": "/Steel_Bow",
        "image": null
      },
      "Sharanga": {
        "name": "Sharanga",
        "href": "/Sharanga",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 30"
    ],
    "description": "A mechanical bow that requires little human strength, but reloading takes a little longer than an ordinary bow.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Power Crossbow": {
    "name": "Power Crossbow",
    "href": "/Power_Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ed/Power_Crossbow.png/",
    "requirements": [
      {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {
      "The Golden Ghost": {
        "name": "The Golden Ghost",
        "href": "/The_Golden_Ghost",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 42"
    ],
    "description": "A good weapon, but it's paramount that you keep good track of your arrows.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Laser Crossbow": {
    "name": "Laser Crossbow",
    "href": "/Laser_Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Sniper_Bow.png/",
    "requirements": [
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {
      "Sniper Crossbow": {
        "name": "Sniper Crossbow",
        "href": "/Sniper_Crossbow",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 30",
      "Vision Range + 2.5"
    ],
    "description": "A bow specialized for sniping. As always, aim is important.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Heavy Crossbow": {
    "name": "Heavy Crossbow",
    "href": "/Heavy_Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Heavy_Crossbow.png/",
    "requirements": [
      {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Ballista": {
        "name": "Ballista",
        "href": "/Ballista",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 72",
      "Movement Speed - 0.1"
    ],
    "description": "Heavier than a standard crossbow, but also that much stronger. It was a popular weapon in Medieval Europe as it was easy to learn and use.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Steel Bow": {
    "name": "Steel Bow",
    "href": "/Steel_Bow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Steel_Bow.png/",
    "requirements": [
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {
      "The Legend of the General": {
        "name": "The Legend of the General",
        "href": "/The_Legend_of_the_General",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 60"
    ],
    "description": "A bow made out of steel. It might be heavy to some.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "The Legend of The General": {
    "name": "The Legend of The General",
    "href": "/The_Legend_of_The_General",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/The_Legend_of_the_General.png/",
    "requirements": [
      {
        "name": "The Legend of the General",
        "href": "/The_Legend_of_the_General",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/The_Legend_of_the_General.png/"
      },
      {
        "name": "Steel Crossbow",
        "href": "/Steel_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Steel_Bow.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Iron Sheet",
        "href": "/Iron_Sheet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Iron_Sheet.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Steel Crossbow",
        "href": "/Steel_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7c/Steel_Bow.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 75",
      "HP Regen + 2",
      "Attack Speed (%) + 50%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Ballista": {
    "name": "Ballista",
    "href": "/Ballista",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d5/Ballista.png/",
    "requirements": [
      {
        "name": "Heavy Crossbow",
        "href": "/Heavy_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Heavy_Crossbow.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      },
      {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Heavy Crossbow",
        "href": "/Heavy_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/63/Heavy_Crossbow.png/"
      },
      {
        "name": "Short Spear",
        "href": "/Short_Spear",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2e/Short_Spear.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 115",
      "Attack Speed (%) - 5%"
    ],
    "description": "A smaller bow originally designed for siege warfare. It boasts incredible power.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sniper Crossbow": {
    "name": "Sniper Crossbow",
    "href": "/Sniper_Crossbow",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f8/Sniper_Crossbow.png/",
    "requirements": [
      {
        "name": "Laser Crossbow",
        "href": "/Laser_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Sniper_Bow.png/"
      },
      {
        "name": "Sniping Scope",
        "href": "/Sniping_Scope",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Sniping_Scope.png/"
      },
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Binoculars",
        "href": "/Binoculars",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/74/Binoculars.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Laser Crossbow",
        "href": "/Laser_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/72/Sniper_Bow.png/"
      },
      {
        "name": "Sniping Scope",
        "href": "/Sniping_Scope",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Sniping_Scope.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 85",
      "Vision Range + 5",
      "Attack Range + 1"
    ],
    "description": "A new type of bow with remarkably high accuracy. It's equipped with a laser sight, similar to modern sniper rifles.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "The Golden Ghost": {
    "name": "The Golden Ghost",
    "href": "/The_Golden_Ghost",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/The_Golden_Ghost.png/",
    "requirements": [
      {
        "name": "Power Crossbow",
        "href": "/Power_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ed/Power_Crossbow.png/"
      },
      {
        "name": "RDX",
        "href": "/RDX",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/RDX.png/"
      },
      {
        "name": "Long Crossbow",
        "href": "/Long_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/94/Long_Crossbow.png/"
      },
      {
        "name": "Rubber",
        "href": "/Rubber",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8e/Rubber.png/"
      },
      {
        "name": "Dynamite",
        "href": "/Dynamite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fc/Dynamite.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Power Crossbow",
        "href": "/Power_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ed/Power_Crossbow.png/"
      },
      {
        "name": "RDX",
        "href": "/RDX",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/RDX.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 70",
      "Extra Normal Attack Damage + 37"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sharanga": {
    "name": "Sharanga",
    "href": "/Sharanga",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Sharanga.png/",
    "requirements": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      },
      {
        "name": "Powder of Life",
        "href": "/Powder_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Powder_of_Life.png/"
      },
      {
        "name": "Meteorite",
        "href": "/Meteorite",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9e/Meteorite.png/"
      },
      {
        "name": "Short Crossbow",
        "href": "/Short_Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Short_Crossbow.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Tree of Life",
        "href": "/Tree_of_Life",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/1c/Tree_of_Life.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Force Core",
        "href": "/Force_Core",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Force_Core.png/"
      },
      {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/79/Crossbow.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 140"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bamboo": {
    "name": "Bamboo",
    "href": "/Bamboo",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/",
    "requirements": [],
    "buildsInto": {
      "Tonfa": {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": null
      },
      "Quiver": {
        "name": "Quiver",
        "href": "/Quiver",
        "image": null
      },
      "Bamboo Trap": {
        "name": "Bamboo Trap",
        "href": "/Bamboo_Trap",
        "image": null
      },
      "Battle Axe": {
        "name": "Battle Axe",
        "href": "/Battle_Axe",
        "image": null
      },
      "Bamboo Spear": {
        "name": "Bamboo Spear",
        "href": "/Bamboo_Spear",
        "image": null
      },
      "Long Rod": {
        "name": "Long Rod",
        "href": "/Long_Rod",
        "image": null
      },
      "Wind and Fire Wheels": {
        "name": "Wind and Fire Wheels",
        "href": "/Wind_and_Fire_Wheels",
        "image": null
      },
      "Ancient Bolt": {
        "name": "Ancient Bolt",
        "href": "/Ancient_Bolt",
        "image": null
      },
      "Crossbow": {
        "name": "Crossbow",
        "href": "/Crossbow",
        "image": null
      },
      "Superstrat": {
        "name": "Superstrat",
        "href": "/Superstrat",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 12"
    ],
    "description": "It doesn't thicken as it grows, and dies after blooming. We make baskets out of it because of its flexibility.",
    "maxStacks": "",
    "foundQuantity": "1"
  },
  "Tonfa": {
    "name": "Tonfa",
    "href": "/Tonfa",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/",
    "requirements": [
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Police Baton": {
        "name": "Police Baton",
        "href": "/Police_Baton",
        "image": null
      },
      "Ryukyu Tonfa": {
        "name": "Ryukyu Tonfa",
        "href": "/Ryukyu_Tonfa",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 23",
      "Defense + 8"
    ],
    "description": "A weapon that is modified and widely used in Okinawa. Tonfa-based martial arts shares many similarities with bare-handed martial arts.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Police Baton": {
    "name": "Police Baton",
    "href": "/Police_Baton",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Police_Baton.png/",
    "requirements": [
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {
      "Tactical Tonfa": {
        "name": "Tactical Tonfa",
        "href": "/Tactical_Tonfa",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 35",
      "Defense + 8"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Ryukyu Tonfa": {
    "name": "Ryukyu Tonfa",
    "href": "/Ryukyu_Tonfa",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Ryukyu_Tonfa.png/",
    "requirements": [
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "Mai Sok": {
        "name": "Mai Sok",
        "href": "/Mai_Sok",
        "image": null
      },
      "Plasma Tonfa": {
        "name": "Plasma Tonfa",
        "href": "/Plasma_Tonfa",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 38",
      "Defense + 18"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Tactical Tonfa": {
    "name": "Tactical Tonfa",
    "href": "/Tactical_Tonfa",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Tactical_Tonfa.png/",
    "requirements": [
      {
        "name": "Police Baton",
        "href": "/Police_Baton",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Police_Baton.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      },
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      },
      {
        "name": "Fountain Pen",
        "href": "/Fountain_Pen",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Fountain_Pen.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Police Baton",
        "href": "/Police_Baton",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ca/Police_Baton.png/"
      },
      {
        "name": "Blueprint",
        "href": "/Blueprint",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/98/Blueprint.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 70",
      "Defense + 10",
      "Life Steal + 25%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Mai Sok": {
    "name": "Mai Sok",
    "href": "/Mai_Sok",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2c/Mai_Sok.png/",
    "requirements": [
      {
        "name": "Ryukyu Tonfa",
        "href": "/Ryukyu_Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Ryukyu_Tonfa.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      },
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ryukyu Tonfa",
        "href": "/Ryukyu_Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Ryukyu_Tonfa.png/"
      },
      {
        "name": "Short Rod",
        "href": "/Short_Rod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Short_Rod.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 45",
      "Defense + 20",
      "HP Regen (%) + 100%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Plasma Tonfa": {
    "name": "Plasma Tonfa",
    "href": "/Plasma_Tonfa",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ec/Plasma_Tonfa.png/",
    "requirements": [
      {
        "name": "Ryukyu Tonfa",
        "href": "/Ryukyu_Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Ryukyu_Tonfa.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Tonfa",
        "href": "/Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ef/Tonfa.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Bamboo",
        "href": "/Bamboo",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Bamboo.png/"
      },
      {
        "name": "Branch",
        "href": "/Branch",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ea/Branch.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Ryukyu Tonfa",
        "href": "/Ryukyu_Tonfa",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/Ryukyu_Tonfa.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 65",
      "Defense + 18",
      "Vision Range + 2.5"
    ],
    "description": "A tonfa-shaped weapon made out of plasma. It uses a chip that registers its owner's information, so it won't harm its owner and will be safe to use.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Brass Knuckles": {
    "name": "Brass Knuckles",
    "href": "/Brass_Knuckles",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/",
    "requirements": [],
    "buildsInto": {
      "Iron Knuckles": {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 10"
    ],
    "description": "These are actually illegal in a lot of countries.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Cotton Glove": {
    "name": "Cotton Glove",
    "href": "/Cotton_Glove",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/",
    "requirements": [],
    "buildsInto": {
      "Leather Glove": {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": null
      },
      "Gauntlet": {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 7"
    ],
    "description": "A red-palmed glove. It can be used to work, to play tug-of-war, or even to cheer for the home team.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Leather Glove": {
    "name": "Leather Glove",
    "href": "/Leather_Glove",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/",
    "requirements": [
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {
      "Phoenix Gloves": {
        "name": "Phoenix Gloves",
        "href": "/Phoenix_Gloves",
        "image": null
      },
      "Imperial Silk Glove": {
        "name": "Imperial Silk Glove",
        "href": "/Imperial_Silk_Glove",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 18"
    ],
    "description": "Its deadliness is dependent upon the fist and strength of the person wearing it.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Iron Knuckles": {
    "name": "Iron Knuckles",
    "href": "/Iron_Knuckles",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/",
    "requirements": [
      {
        "name": "Brass Knuckles",
        "href": "/Brass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Wing Knuckles": {
        "name": "Wing Knuckles",
        "href": "/Wing_Knuckles",
        "image": null
      },
      "Glass Knuckles": {
        "name": "Glass Knuckles",
        "href": "/Glass_Knuckles",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Brass Knuckles",
        "href": "/Brass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 20"
    ],
    "description": "Though it may look like ordinary knuckles, but it's made with a much sturdier iron, so it hits much harder.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Gauntlet": {
    "name": "Gauntlet",
    "href": "/Gauntlet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/",
    "requirements": [
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Bone Gauntlet": {
        "name": "Bone Gauntlet",
        "href": "/Bone_Gauntlet",
        "image": null
      },
      "Shatter Shell Gauntlet": {
        "name": "Shatter Shell Gauntlet",
        "href": "/Shatter_Shell_Gauntlet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 32",
      "Movement Speed - 0.1"
    ],
    "description": "Gloves that knights wore to protect their hands.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Wing Knuckles": {
    "name": "Wing Knuckles",
    "href": "/Wing_Knuckles",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Wing_Knuckle.png/",
    "requirements": [
      {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Brass Knuckles",
        "href": "/Brass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Bloodwing Knuckles": {
        "name": "Bloodwing Knuckles",
        "href": "/Bloodwing_Knuckles",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 20",
      "Movement Speed + 0.1"
    ],
    "description": "Free your burdened soul with these masterfully created wings. But there exists no sky for you to spread your wings...",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bone Gauntlet": {
    "name": "Bone Gauntlet",
    "href": "/Bone_Gauntlet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Bone_Gauntlet.png/",
    "requirements": [
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "One Inch Punch": {
        "name": "One Inch Punch",
        "href": "/One_Inch_Punch",
        "image": null
      },
      "Brasil Gauntlet": {
        "name": "Brasil Gauntlet",
        "href": "/Brasil_Gauntlet",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 35",
      "Defense + 13",
      "Movement Speed - 0.1"
    ],
    "description": "Armored gloves made from a turtle shell.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Shatter Shell Gauntlet": {
    "name": "Shatter Shell Gauntlet",
    "href": "/Shatter_Shell_Gauntlet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b0/Shatter_Shell_Gauntlet.png/",
    "requirements": [
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {
      "Divine Fist": {
        "name": "Divine Fist",
        "href": "/Divine_Fist",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 32",
      "Extra Normal Attack Damage + 15",
      "Movement Speed - 0.1"
    ],
    "description": "A glove that adds explosive force behind each punch.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Glass Knuckles": {
    "name": "Glass Knuckles",
    "href": "/Glass_Knuckles",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/15/Glass_Knuckle.png/",
    "requirements": [
      {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Brass Knuckles",
        "href": "/Brass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {
      "White Claw Punch": {
        "name": "White Claw Punch",
        "href": "/White_Claw_Punch",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 28",
      "Critical Strike Chance + 10%"
    ],
    "description": "Knuckles coated with glass fragments. They're not entirely made of glass!",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Phoenix Gloves": {
    "name": "Phoenix Gloves",
    "href": "/Phoenix_Gloves",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Phoenix_Gloves.png/",
    "requirements": [
      {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {
      "Frost Petal Hand": {
        "name": "Frost Petal Hand",
        "href": "/Frost_Petal_Hand",
        "image": null
      },
      "Buddha's Palm": {
        "name": "Buddha's Palm",
        "href": "/Buddha%27s_Palm",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 27",
      "Skill Damage Increase + 30"
    ],
    "description": "You cannot reach the point of Nirvana to separate your body and soul, but you can remove others' souls from their bodies with this glove.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "One Inch Punch": {
    "name": "One Inch Punch",
    "href": "/One_Inch_Punch",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/53/One_Inch_Punch.png/",
    "requirements": [
      {
        "name": "Bone Gauntlet",
        "href": "/Bone_Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Bone_Gauntlet.png/"
      },
      {
        "name": "Doll",
        "href": "/Doll",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Doll.png/"
      },
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Ribbon",
        "href": "/Ribbon",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Ribbon.png/"
      },
      {
        "name": "Cloth",
        "href": "/Cloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/51/Cloth.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bone Gauntlet",
        "href": "/Bone_Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Bone_Gauntlet.png/"
      },
      {
        "name": "Doll",
        "href": "/Doll",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/fb/Doll.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 50",
      "Defense + 25",
      "SP Regen (%) + 50%",
      "Life Steal + 10%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Divine Fist": {
    "name": "Divine Fist",
    "href": "/Divine_Fist",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Divine_Fist.png/",
    "requirements": [
      {
        "name": "Shatter Shell Gauntlet",
        "href": "/Shatter_Shell_Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b0/Shatter_Shell_Gauntlet.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      },
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Gunpowder",
        "href": "/Gunpowder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ae/Gunpowder.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Shatter Shell Gauntlet",
        "href": "/Shatter_Shell_Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b0/Shatter_Shell_Gauntlet.png/"
      },
      {
        "name": "Cross",
        "href": "/Cross",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Cross.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 42",
      "Extra Normal Attack Damage + 33",
      "Movement Speed - 0.05"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bloodwing Knuckles": {
    "name": "Bloodwing Knuckles",
    "href": "/Bloodwing_Knuckles",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/Bloodwing_Knuckle.png/",
    "requirements": [
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      },
      {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/"
      },
      {
        "name": "Feather",
        "href": "/Feather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/33/Feather.png/"
      },
      {
        "name": "Hammer",
        "href": "/Hammer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/81/Hammer.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      },
      {
        "name": "Brass Knuckles",
        "href": "/Brass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bloodwing Knuckles",
        "href": "/Bloodwing_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c1/Wing_Knuckle.png/"
      },
      {
        "name": "Ruby",
        "href": "/Ruby",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a9/Ruby.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 53",
      "Max HP + 300",
      "Movement Speed + 0.1"
    ],
    "description": "Knuckles that seemingly fit the Dark Angel. How can you return when your wings are covered in crimson blood..?",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Frost Petal Hand": {
    "name": "Frost Petal Hand",
    "href": "/Frost_Petal_Hand",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/92/Frost_Petal_Hand.png/",
    "requirements": [
      {
        "name": "Phoenix Gloves",
        "href": "/Phoenix_Gloves",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Phoenix_Gloves.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      },
      {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Phoenix Gloves",
        "href": "/Phoenix_Gloves",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Phoenix_Gloves.png/"
      },
      {
        "name": "Ice",
        "href": "/Ice",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/77/Ice.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 27",
      "Cooldown Reduction + 15%",
      "Skill Damage Increase + 38"
    ],
    "description": "A guardian spirit that was passed down through generations of the North Polar Sea kingdom's bloodline. Petal-shaped ice flakes form along its surface to protect its user from harm.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Buddha's Palm": {
    "name": "Buddha's Palm",
    "href": "/Buddha%27s_Palm",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6b/Buddha%27s_Palm.png/",
    "requirements": [
      {
        "name": "Phoenix Gloves",
        "href": "/Phoenix_Gloves",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Phoenix_Gloves.png/"
      },
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      },
      {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Buddhist Scripture",
        "href": "/Buddhist_Scripture",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/78/Buddhist_Scripture.png/"
      },
      {
        "name": "Monk's Robe",
        "href": "/Monk%27s_Robe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/91/Monk%27s_Robe.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Phoenix Gloves",
        "href": "/Phoenix_Gloves",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Phoenix_Gloves.png/"
      },
      {
        "name": "Buddha Sarira",
        "href": "/Buddha_Sarira",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/ce/Buddha_Sarira.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 33",
      "Cooldown Reduction + 10%",
      "Skill Damage Increase + 18%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Brasil Gauntlet": {
    "name": "Brasil Gauntlet",
    "href": "/Brasil_Gauntlet",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Brasil_Gauntlet.png/",
    "requirements": [
      {
        "name": "Bone Gauntlet",
        "href": "/Bone_Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Bone_Gauntlet.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      },
      {
        "name": "Gauntlet",
        "href": "/Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Gauntlet.png/"
      },
      {
        "name": "Turtle Shell",
        "href": "/Turtle_Shell",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/5e/Turtle_Shell.png/"
      },
      {
        "name": "Oil",
        "href": "/Oil",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/06/Oil.png/"
      },
      {
        "name": "Bandage",
        "href": "/Bandage",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0c/Bandage.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Steel",
        "href": "/Steel",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c9/Steel.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bone Gauntlet",
        "href": "/Bone_Gauntlet",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/ab/Bone_Gauntlet.png/"
      },
      {
        "name": "Oilcloth",
        "href": "/Oilcloth",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f5/Oilcloth.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 48",
      "Defense + 13",
      "HP Regen + 1",
      "Attack Speed (%) + 30%",
      "Movement Speed - 0.05"
    ],
    "description": "A combat glove used on the mystical island Brasil, which is located  west side of Ireland. This island can only be seen once every seven years. (Not to be confused with the country Brazil)",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "White Claw Punch": {
    "name": "White Claw Punch",
    "href": "/White_Claw_Punch",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/White_Claw_Punch.png/",
    "requirements": [
      {
        "name": "Glass Knuckles",
        "href": "/Glass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/15/Glass_Knuckle.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      },
      {
        "name": "Iron Knuckles",
        "href": "/Iron_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/04/Iron_Knuckle.png/"
      },
      {
        "name": "Glass Pieces",
        "href": "/Glass_Pieces",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/e9/Glass_Pieces.png/"
      },
      {
        "name": "Chalk",
        "href": "/Chalk",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Chalk.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      },
      {
        "name": "Brass Knuckles",
        "href": "/Brass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b4/Knuckle.png/"
      },
      {
        "name": "Iron Ore",
        "href": "/Iron_Ore",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/87/Iron_Ore.png/"
      },
      {
        "name": "Glass Bottle",
        "href": "/Glass_Bottle",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/88/Glass_Bottle.png/"
      },
      {
        "name": "Stone",
        "href": "/Stone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d4/Stone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Glass Knuckles",
        "href": "/Glass_Knuckles",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/15/Glass_Knuckle.png/"
      },
      {
        "name": "White Powder",
        "href": "/White_Powder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/d/d0/White_Powder.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 55",
      "Critical Strike Chance + 20%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Imperial Silk Glove": {
    "name": "Imperial Silk Glove",
    "href": "/Imperial_Silk_Glove",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/8c/Imperial_Silk_Glove.png/",
    "requirements": [
      {
        "name": "Mithril String",
        "href": "/Mithril_String",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9c/Mithril_String.png/"
      },
      {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/"
      },
      {
        "name": "Mithril",
        "href": "/Mithril",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/bf/Mithril.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      },
      {
        "name": "Cotton Glove",
        "href": "/Cotton_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cotton_Work_Glove.png/"
      },
      {
        "name": "Leather",
        "href": "/Leather",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3d/Leather.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Mithril String",
        "href": "/Mithril_String",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9c/Mithril_String.png/"
      },
      {
        "name": "Leather Glove",
        "href": "/Leather_Glove",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/32/Leather_Glove.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 85",
      "Movement Speed + 0.2"
    ],
    "description": "Made from silk from the cocoons of the Emperor Moth, which are imbued with spiritual energy. Humans cannot cut it using their own strength.",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Steel Chain": {
    "name": "Steel Chain",
    "href": "/Steel_Chain",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/",
    "requirements": [],
    "buildsInto": {
      "Nunchaku": {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": null
      },
      "Chain Coif": {
        "name": "Chain Coif",
        "href": "/Chain_Coif",
        "image": null
      },
      "Rider Jacket": {
        "name": "Rider Jacket",
        "href": "/Rider_Jacket",
        "image": null
      },
      "Chain Armor": {
        "name": "Chain Armor",
        "href": "/Chain_Armor",
        "image": null
      },
      "Chain Leggings": {
        "name": "Chain Leggings",
        "href": "/Chain_Leggings",
        "image": null
      },
      "Chain Scythe": {
        "name": "Chain Scythe",
        "href": "/Chain_Scythe",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power +11"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Nunchaku": {
    "name": "Nunchaku",
    "href": "/Nunchaku",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/",
    "requirements": [
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "buildsInto": {
      "Sharper": {
        "name": "Sharper",
        "href": "/Sharper",
        "image": null
      },
      "Bleeder": {
        "name": "Bleeder",
        "href": "/Bleeder",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 27"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Sharper": {
    "name": "Sharper",
    "href": "/Sharper",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Sharper.png/",
    "requirements": [
      {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "buildsInto": {
      "The Smiting Dragon": {
        "name": "The Smiting Dragon",
        "href": "/The_Smiting_Dragon",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 19",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bleeder": {
    "name": "Bleeder",
    "href": "/Bleeder",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Bleeder.png/",
    "requirements": [
      {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "buildsInto": {
      "Vibro Nunchaku": {
        "name": "Vibro Nunchaku",
        "href": "/Vibro_Nunchaku",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 38"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "The Smiting Dragon": {
    "name": "The Smiting Dragon",
    "href": "/The_Smiting_Dragon",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/38/The_Smiting_Dragon.png/",
    "requirements": [
      {
        "name": "Sharper",
        "href": "/Sharper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Sharper.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      },
      {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/"
      },
      {
        "name": "Nail",
        "href": "/Nail",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/40/Nail.png/"
      },
      {
        "name": "Paper",
        "href": "/Paper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Paper.png/"
      },
      {
        "name": "Lighter",
        "href": "/Lighter",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c4/Lighter.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Sharper",
        "href": "/Sharper",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/36/Sharper.png/"
      },
      {
        "name": "Ash",
        "href": "/Ash",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b1/Ash.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 50",
      "Skill Amplification + 14",
      "Healing Reduction (Normal Attacks) -40%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Vibro Nunchaku": {
    "name": "Vibro Nunchaku",
    "href": "/Vibro_Nunchaku",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/2/2a/Vibro_Nunchaku.png/",
    "requirements": [
      {
        "name": "Bleeder",
        "href": "/Bleeder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Bleeder.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      },
      {
        "name": "Nunchaku",
        "href": "/Nunchaku",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Nunchaku.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Electronic Parts",
        "href": "/Electronic_Parts",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/f/f3/Electronic_Parts.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Steel Chain",
        "href": "/Steel_Chain",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c2/Steel_Chain.png/"
      },
      {
        "name": "Scrap Metal",
        "href": "/Scrap_Metal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/8/82/Scrap_Metal.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Piano Wire",
        "href": "/Piano_Wire",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/58/Piano_Wire.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bleeder",
        "href": "/Bleeder",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/4e/Bleeder.png/"
      },
      {
        "name": "Motor",
        "href": "/Motor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0f/Motor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 65",
      "Attack Speed + 50%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Whip": {
    "name": "Whip",
    "href": "/Whip",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/",
    "requirements": [],
    "buildsInto": {
      "Rope Cuffs": {
        "name": "Rope Cuffs",
        "href": "/Rope_Cuffs",
        "image": null
      },
      "Bullwhip": {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": null
      }
    },
    "buildsFrom": [],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Common",
    "stats": [
      "Attack Power + 9"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Rope Cuffs": {
    "name": "Rope Cuffs",
    "href": "/Rope_Cuffs",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c8/Rope_Cuffs.png/",
    "requirements": [
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "buildsInto": {
      "Wind Whip": {
        "name": "Wind Whip",
        "href": "/Wind_Whip",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 19"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Bullwhip": {
    "name": "Bullwhip",
    "href": "/Bullwhip",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Bullwhip.png/",
    "requirements": [
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      }
    ],
    "buildsInto": {
      "Thunder Whip": {
        "name": "Thunder Whip",
        "href": "/Thunder_Whip",
        "image": null
      },
      "Lightning Whip": {
        "name": "Lightning Whip",
        "href": "/Lightning_Whip",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Uncommon",
    "stats": [
      "Attack Power + 19"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Wind Whip": {
    "name": "Wind Whip",
    "href": "/Wind_Whip",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Wind_Whip.png/",
    "requirements": [
      {
        "name": "Rope Cuffs",
        "href": "/Rope_Cuffs",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c8/Rope_Cuffs.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "buildsInto": {
      "Gleipnir": {
        "name": "Gleipnir",
        "href": "/Gleipnir",
        "image": null
      },
      "Whip of Nine Bloody Tails": {
        "name": "Whip of Nine Bloody Tails",
        "href": "/Whip_of_Nine_Bloody_Tails",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Rope Cuffs",
        "href": "/Rope_Cuffs",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c8/Rope_Cuffs.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 25",
      "Skill Damage Increase + 20"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Thunder Whip": {
    "name": "Thunder Whip",
    "href": "/Thunder_Whip",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/07/Thunder_Whip.png/",
    "requirements": [
      {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Bullwhip.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      },
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Pickaxe",
        "href": "/Pickaxe",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b7/Pickaxe.png/"
      },
      {
        "name": "Gemstone",
        "href": "/Gemstone",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/0/0a/Gemstone.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Bullwhip.png/"
      },
      {
        "name": "Gold",
        "href": "/Gold",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/1/10/Gold.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 55",
      "Skill Damage Increase + 18%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Lightning Whip": {
    "name": "Lightning Whip",
    "href": "/Lightning_Whip",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Lightning_Whip.png/",
    "requirements": [
      {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Bullwhip.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {
      "Plasma Whip": {
        "name": "Plasma Whip",
        "href": "/Plasma_Whip",
        "image": null
      }
    },
    "buildsFrom": [
      {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Bullwhip.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Rare",
    "stats": [
      "Attack Power + 41",
      "Attack Speed + 20%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Gleipnir": {
    "name": "Gleipnir",
    "href": "/Gleipnir",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6e/Gleipnir.png/",
    "requirements": [
      {
        "name": "Wind Whip",
        "href": "/Wind_Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Wind_Whip.png/"
      },
      {
        "name": "Honey Cod Steak",
        "href": "/Honey_Cod_Steak",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Honey_Cod_Steak.png/"
      },
      {
        "name": "Rope Cuffs",
        "href": "/Rope_Cuffs",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c8/Rope_Cuffs.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Cod",
        "href": "/Cod",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/41/Cod.png/"
      },
      {
        "name": "Honey",
        "href": "/Honey",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c6/Honey.png/"
      },
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Wind Whip",
        "href": "/Wind_Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Wind_Whip.png/"
      },
      {
        "name": "Honey Cod Steak",
        "href": "/Honey_Cod_Steak",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b2/Honey_Cod_Steak.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 54",
      "Attack Speed + 30%"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Plasma Whip": {
    "name": "Plasma Whip",
    "href": "/Plasma_Whip",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/e/ee/Plasma_Whip.png/",
    "requirements": [
      {
        "name": "Lightning Whip",
        "href": "/Lightning_Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Lightning_Whip.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      },
      {
        "name": "Bullwhip",
        "href": "/Bullwhip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/4/44/Bullwhip.png/"
      },
      {
        "name": "Dead Battery",
        "href": "/Dead_Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/5/52/Dead_Battery.png/"
      },
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Razor",
        "href": "/Razor",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a0/Razor.png/"
      },
      {
        "name": "Battery",
        "href": "/Battery",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/6d/Battery.png/"
      },
      {
        "name": "Water",
        "href": "/Water",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/9/9d/Water.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "Lightning Whip",
        "href": "/Lightning_Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/6/64/Lightning_Whip.png/"
      },
      {
        "name": "Laser Pointer",
        "href": "/Laser_Pointer",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7d/Laser_Pointer.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Epic",
    "stats": [
      "Attack Power + 49",
      "Attack Speed + 20%",
      "Vision Range + 2.3"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  },
  "Whip of Nine Bloody Tails": {
    "name": "Whip of Nine Bloody Tails",
    "href": "/Whip_of_Nine_Bloody_Tails",
    "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/3c/Whip_of_Nine_Bloody_Tails.png/",
    "requirements": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Wind Whip",
        "href": "/Wind_Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Wind_Whip.png/"
      },
      {
        "name": "Rope Cuffs",
        "href": "/Rope_Cuffs",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/c/c8/Rope_Cuffs.png/"
      },
      {
        "name": "Fan",
        "href": "/Fan",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/b/b9/Fan.png/"
      },
      {
        "name": "Whip",
        "href": "/Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/71/Whip.png/"
      },
      {
        "name": "Stallion Medal",
        "href": "/Stallion_Medal",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/a/a7/Stallion_Medal.png/"
      }
    ],
    "buildsInto": {},
    "buildsFrom": [
      {
        "name": "VF Blood Sample",
        "href": "/VF_Blood_Sample",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/7/7b/VF_Blood_Sample.png/"
      },
      {
        "name": "Wind Whip",
        "href": "/Wind_Whip",
        "image": "https://static.wikia.nocookie.net/blacksurvivaleternalreturn_gamepedia_en/images/3/31/Wind_Whip.png/"
      }
    ],
    "foundLocations": {},
    "droppedFrom": {},
    "rarity": "Legendary",
    "stats": [
      "Attack Power + 70",
      "Life Steal + 20%",
      "Skill Damage Increase + 40"
    ],
    "description": "",
    "maxStacks": "1",
    "foundQuantity": "1"
  }
}

  export default Items;