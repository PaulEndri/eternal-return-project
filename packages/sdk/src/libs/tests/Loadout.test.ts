import { Loadout } from '../Loadout';

describe('[Class] Loadout', () => {
  describe('[Static]', () => {
    describe('GenerateLoadout', () => {
      it('should generate a new class instance', () => {
        const results = Loadout.GenerateLoadout({
          Chest: 'Bikini',
          Arm: 'Watch',
          Leg: 'FeatherBoots',
          Head: 'TacticalOPSHelmet',
          Weapon: 'TacticalTonfa',
          Accessory: 'LacedQuiver'
        });

        expect(results).toBeInstanceOf(Loadout);
      });
    });
  });

  describe('[instance]', () => {
    describe('get materials()', () => {
      it('should return a total list of all materials, keyed by id', () => {
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
          114101: 2,
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

        const results = loadout.materials;
        expect(results).toEqual(expectedResults);
      });
    });

    describe('get regions()', () => {
      it('should return a list of all valid regions for a given loadout', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: null,
          Arm: null,
          Leg: null,
          Head: null,
          Weapon: 'Twinbow',
          Accessory: null
        });

        const expectedRegions = [
          'Archery Range',
          'Chapel',
          'Avenue',
          'Factory',
          'Alley',
          'Dock',
          'Uptown',
          'Hotel',
          'Beach'
        ];

        expect(Object.keys(loadout.regions)).toEqual(expectedRegions);
      });
    });
    describe('checkCompletedItems()', () => {
      it('should return whatever items have been completed', () => {
        const loadout = Loadout.GenerateLoadout({
          Chest: 'OpticalCamouflageSuit',
          Arm: 'CubeWatch',
          Leg: 'FeatherBoots',
          Head: 'TacticalOPSHelmet',
          Weapon: 'Twinbow',
          Accessory: 'LacedQuiver'
        });

        const mats = {
          101101: 1,
          108102: 1,
          108103: 1,
          112101: 2,
          108101: 1,
          112104: 1,
          114101: 2,
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

        expect(loadout.checkCompletedItems(mats)).toEqual(loadout.items);
      });
    });
  });
});
