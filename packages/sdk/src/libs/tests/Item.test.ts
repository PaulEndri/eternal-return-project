import { Item } from '../Item';

describe('[Class] Item', () => {
  describe('[Static]', () => {
    describe('Generate()', () => {
      it('should return a new instance of the Item class with the provided seed', () => {
        const item = Item.Generate('Paper');

        expect(item).toBeInstanceOf(Item);
      });
    });
  });
});
