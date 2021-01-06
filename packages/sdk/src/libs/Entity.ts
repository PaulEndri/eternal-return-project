import { IElement } from '../interfaces';

export class Entity implements IElement {
  static SOURCES: Record<string, any>;
  static SOURCES_ARRAY: any[];

  static Generate(seed) {
    const Constructor: any = this.prototype.constructor;

    return new Constructor(this.GetEntity(seed));
  }

  static GetEntity(seed) {
    if (!seed) {
      throw new Error('Seed Must Be Provided');
    } else if (typeof seed === 'object') {
      return seed;
    }

    if (this.SOURCES[seed]) {
      return this.SOURCES[seed];
    }

    return this.SOURCES_ARRAY.find(({ id, name, displayName }: any) =>
      [id, name, displayName].includes(seed)
    );
  }

  public name: string | number = 'ERROR';
  public id: string | number = 0;

  constructor(seed) {
    const source = Object.getPrototypeOf(this).constructor.GetEntity(seed);

    if (source) {
      Object.assign(this, source);
    }
  }
}
