import { LoadoutKeys } from '../../constants/LoadoutKeys';
import { Loadout } from '../Loadout';
import { Route } from '../Route';
import fs from 'fs';
import { setStaticCache } from '../../utilities/setStaticCache';

describe('[Class] Route', () => {
  beforeAll(() => {
    setStaticCache();
  });

  describe('[Instance]', () => {
    describe('constructor', () => {
      it('should return a material list equivalent to a passed in loadout, minus global items', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: 'OpticalCamouflageSuit',
          Arm: 'CubeWatch',
          Leg: 'FeatherBoots',
          Head: 'TacticalOPSHelmet',
          Weapon: 'Twinbow',
          Accessory: 'LacedQuiver'
        });

        const expectedResults = {
          101101: 1,
          108102: 1,
          108103: 1,
          112101: 0,
          108101: 0,
          112104: 1,
          114101: 3,
          201102: 1,
          201104: 1,
          203101: 1,
          203102: 1,
          204102: 1,
          205101: 2,
          401101: 1,
          401103: 0,
          401105: 2,
          401110: 1,
          401112: 2,
          401116: 1,
          401209: 0,
          502104: 2
        };

        const route = new Route(loadout);

        expect(route.materials.list).toEqual(expectedResults);

        // make sure all expected items with a value of 0 are in fact "universal items"
        Object.entries(expectedResults).forEach(([key, val]) => {
          if (val === 0) {
            expect(Route.UNIVERSAL_ITEMS).toContain(+key);
          }
        });
      });
    });

    describe('getRawNodes()', () => {
      it('should generate a list of weighted nodes', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: 'OpticalCamouflageSuit',
          Arm: 'CubeWatch',
          Leg: 'FeatherBoots',
          Head: 'TacticalOPSHelmet',
          Weapon: 'Twinbow',
          Accessory: 'LacedQuiver'
        });

        const weights = {};

        Object.keys(LoadoutKeys).forEach((key) => (weights[key] = 1));

        const route = new Route(loadout, weights as any);

        expect(route.getRawNodes()).toBeTruthy();
      });
    });

    describe('generate()', () => {
      it('should generate all possible routes', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: 'OpticalCamouflageSuit',
          Arm: 'CubeWatch',
          Leg: 'FeatherBoots',
          Head: 'TacticalOPSHelmet',
          Weapon: 'Twinbow',
          Accessory: 'LacedQuiver'
        });

        const weights = {};

        Object.keys(LoadoutKeys).forEach((key) => (weights[key] = 1));

        const route = new Route(loadout, weights as any);

        const results = route.generate();

        fs.writeFileSync('things.json', JSON.stringify(results, null, 2));
        expect(results).toHaveProperty('root');
        expect(results).toHaveProperty('routes');
      });
    });
  });
});
