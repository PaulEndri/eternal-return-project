import { Locations as LocationsEnum } from './generated/enums/Locations';
import { getLocationCombinations } from './getLocationCombinations';
import { Location, MaterialList, setStaticCache } from 'erbs-sdk';
import { Nodes } from './models/node.model';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
setStaticCache();

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const keys = Object.keys(LocationsEnum).filter((x) => isNaN(x as any));

const threePtCombos = getLocationCombinations(3, keys);
const fivePointCombos = getLocationCombinations(5, keys);

const validate = (locations: number[]) => {
  if (locations.length === 0) {
    return true;
  }

  let index = 0;

  for (const locationId of locations) {
    const location = new Location(locationId);
    const rest =
      index === 0
        ? locations.slice(1)
        : [...locations.slice(0, index), ...locations.slice(index + 1)];

    if (
      location.teleport ||
      location.connections.some((x) => rest.includes(+x.id))
    ) {
      const isValid = validate(rest);

      if (isValid) {
        return true;
      }
    }

    index++;
  }
  return false;
};

const generateData = (locations: string[]) => {
  const totalMaterials = new MaterialList();

  const isValid = validate(locations.map((i) => LocationsEnum[i]));
  if (!isValid) {
    console.log('[This route can in no way be true]', locations);
    return;
  }
  for (const locationId of locations) {
    const location = new Location(locationId);

    totalMaterials.addFromList(location.materials.list);
  }

  const totalItems = totalMaterials.getAllCraftableItems(true);

  return {
    locations: locations.map((i) => LocationsEnum[i]),
    materials: totalMaterials.list,
    itemsCompleted: totalItems,
    point: locations.length
  };
};

const processor = async () => {
  const three = threePtCombos.map(generateData).filter((x) => x);
  const five = fivePointCombos.map(generateData).filter((x) => x);
  console.log('[Found this many 3 point combos]', three.length);
  console.log('[Found this many 5 point combos]', five.length);
  await Nodes.create([...three, ...five]);
};

processor().then(() => {
  console.log('done');
});
