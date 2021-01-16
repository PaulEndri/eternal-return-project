const { Location, MaterialList, setStaticCache, Route } = require('erbs-sdk');
const fs = require('fs');
var Combinatorics = require('js-combinatorics/umd/combinatorics');

const { Permutation } = Combinatorics;
setStaticCache();

const LocationsEnum = {
  Dock: 1,
  Pond: 2,
  Beach: 3,
  Uptown: 4,
  Alley: 5,
  Hotel: 6,
  Avenue: 7,
  Hospital: 8,
  Temple: 9,
  'Archery Range': 10,
  Cemetery: 11,
  Forest: 12,
  Factory: 13,
  Chapel: 14,
  School: 15
};

Object.entries(LocationsEnum).forEach(
  ([key, val]) => (LocationsEnum[val] = key)
);

const keys = Object.keys(LocationsEnum).filter((x) => isNaN(x));
const test = new Permutation(keys, 5);
const threePtCombos = [];
const fivePointCombos = [...test];
console.log('[test]', test.length);
// const validate = (locations: number[]) => {
//   if (locations.length === 0) {
//     return true;
//   }

//   let index = 0;

//   for (const locationId of locations) {
//     const location = new Location(locationId);
//     const rest =
//       index === 0
//         ? locations.slice(1)
//         : [...locations.slice(0, index), ...locations.slice(index + 1)];

//     if (
//       location.teleport ||
//       location.connections.some((x) => rest.includes(+x.id))
//     ) {
//       const isValid = validate(rest);

//       if (isValid) {
//         return true;
//       }
//     }

//     index++;
//   }
//   return false;
// };

const generateData = (locations) => {
  const totalMaterials = new MaterialList();

  Route.UNIVERSAL_ITEMS.forEach((item) => totalMaterials.set(item, 10));

  let index = 0;
  for (const locationId of locations) {
    const location = new Location(locationId);

    if (
      locations[index + 1] &&
      !location.teleport &&
      !location.connections.some((x) => x.name === locations[index + 1])
    ) {
      return null;
    }
    totalMaterials.addFromList(location.materials.list);
    index++;
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
  fs.writeFileSync(
    'src/generated/rawPerms.json',
    JSON.stringify(fivePointCombos, null, 2)
  );

  const three = threePtCombos.map(generateData).filter((x) => x);
  const five = fivePointCombos.map(generateData).filter((x) => x);
  console.log('[Found this many raw 3 point combos]', threePtCombos.length);

  console.log('[Found this many raw 5 point combos]', fivePointCombos.length);

  console.log('[Found this many 3 point combos]', three.length);
  console.log('[Found this many 5 point combos]', five.length);

  fs.writeFileSync('src/generated/perms.json', JSON.stringify(five, null, 2));
};

processor().then(() => {
  console.log('done');
});
