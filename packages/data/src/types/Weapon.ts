export type Weapon = {
  name: string;
  abilityDetails: {
    name?: string;
    description: string;
    info: Array<Record<string, string>>;
  };
  usableBy: string[];
  items: Array<{ name: string | number; id: string | number }>;
  apiMetaData: {
    type: string;
    name: string;
    category: 'Weapon';
  };
};

export default Weapon;
