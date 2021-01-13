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
          112101: 2,
          108101: 1,
          112104: 1,
          114101: 3,
          201102: 1,
          201104: 1,
          203101: 1,
          203102: 1,
          204102: 1,
          205101: 2,
          401101: 1,
          401103: 2,
          401105: 2,
          401110: 1,
          401112: 2,
          401116: 1,
          401209: 1,
          502104: 2
        };

        const route = new Route(loadout);

        expect(route.materials.list).toEqual(expectedResults);
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

      it('[edge case] should generate a loadout for The Smiting Dragon, Dragon Dobok, Chain Coif, Draupnir, Red Shoes, and Revenge of Goujian', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: 'DragonDobok',
          Arm: 'Draupnir',
          Leg: 'RedShoes',
          Head: 'ChainCoif',
          Weapon: 'TheSmitingDragon',
          Accessory: 'RevengeOfGoujian'
        });

        const route = new Route(loadout);

        const results = route.generate();

        fs.writeFileSync('things.json', JSON.stringify(results, null, 2));
        expect(results).toHaveProperty('root');
        expect(results).toHaveProperty('routes');
        expect(results.routes.length).toBeGreaterThan(1);
      });

      it('[edge case] things', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: 'OpticalCamouflageSuit',
          Arm: 'CubeWatch',
          Leg: 'RunningShoes',
          Head: 'CrystalTiara',
          Weapon: 'Twinbow',
          Accessory: 'Quiver'
        });

        const route = new Route(loadout);

        const results = route.generate();

        fs.writeFileSync('things.json', JSON.stringify(results, null, 2));
        expect(results).toHaveProperty('root');
        expect(results).toHaveProperty('routes');
        expect(results.routes.length).toBeGreaterThan(1);
      });
    });
  });
});
