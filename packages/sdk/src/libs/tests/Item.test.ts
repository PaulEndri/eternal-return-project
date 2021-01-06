import { Item } from '../Item';

describe('[Class] Item', () => {
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
  });
});
