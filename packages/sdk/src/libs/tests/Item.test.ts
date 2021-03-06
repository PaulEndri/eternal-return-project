import { Items } from 'erbs-data';
import { setStaticCache } from '../../utilities/setStaticCache';
import { Item } from '../Item';

describe('[Class] Item', () => {
  beforeAll(() => {
    setStaticCache();
  });

  describe('[Static]', () => {
    describe('Generate()', () => {
      it('should return a new instance of the Item class with the provided seed', () => {
        const item = Item.Generate('Paper');

        expect(item).toBeInstanceOf(Item);

        const item2 = Item.Generate(401117);
        expect(item2).toBeInstanceOf(Item);
      });
    });
  });

  describe('[Instance]', () => {
    describe('constructor', () => {
      it("should assign an item's data based on the passed in seed", () => {
        const item = new Item('Paper');
        const item2 = new Item(401117);

        expect(item.id).toEqual(401117);
        expect(item2.name).toEqual('Paper');
      });
    });

    describe('get materials()', () => {
      it('should return the item itself if no requirements are present', () => {
        const item = new Item('Paper');
        const expectedResults = { [item.id]: 1 };

        expect(item.materials).toEqual(expectedResults);
      });

      it('should return a numeric dictionary keyed by ids for each item', () => {
        Object.values(Items).forEach((item) => {
          const instance = new Item(item.id);

          if (!item.buildsFrom) {
            console.log('[test]', item);
          }
          if (item.buildsFrom.length === 0) {
            expect(instance.materials).toEqual({ [item.id]: 1 });
          } else {
            const materials = instance.materials;
            const materialKeys = Object.keys(materials);

            materialKeys.forEach((key) => {
              expect(isNaN(key as any)).toEqual(false);
              expect(typeof materials[key]).toBe('number');
            });
          }
        });
      });
    });

    describe('loadAll()', () => {
      it('should load all entries in buildsFrom and buildsInto as Items', () => {
        const item = new Item(Items.WindWhip);
        item.loadAll();

        item.buildsFrom.forEach((i) => {
          expect(i).toBeInstanceOf(Item);
        });

        item.buildsInto.forEach((i) => {
          expect(i).toBeInstanceOf(Item);
        });
      });
    });
  });
});
