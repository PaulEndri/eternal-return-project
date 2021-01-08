const values = {
  Items: null,
  Weapons: null,
  Armors: null,
  Characters: null,
  Locations: null,
  Animals: null
};

export const DataCache = {
  get Items() {
    return values.Items;
  },
  get Weapons() {
    return values.Weapons;
  },
  get Armors() {
    return values.Armors;
  },
  get Characters() {
    return values.Characters;
  },
  get Locations() {
    return values.Locations;
  },
  get Animals() {
    return values.Animals;
  }
};

export const setCacheSource = (key: keyof typeof DataCache, value: any) => {
  values[key] = value;
};
