import { Locations } from 'erbs-data';
import { Items } from '../../constants';
import { Location } from '../Location';
import { MaterialList } from '../MaterialList';
import { setStaticCache } from '../../utilities/setStaticCache';
import { Route } from '../Route';

describe('[Class] Material List', () => {
  beforeAll(() => {
    setStaticCache();
  });
  describe('[iIstance]', () => {
    describe('getAllCraftableItems()', () => {
      it('should recursively take into account all possible combinations', () => {
        const list = new MaterialList();
        const beach = new Location(Locations.Beach);
        list.addFromList(beach.materials.list);
        console.log('[test]', beach.materials.list);
        Route.UNIVERSAL_ITEMS.forEach((id) => list.add(id, 10));
        const results = list.getAllCraftableItems(true);
        console.log('[test]', results);
        expect(results).toContain(Items.MotorcycleHelmet);
      });
    });
  });
});
