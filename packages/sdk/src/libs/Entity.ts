import { IElement } from '../interfaces';

export class Entity implements IElement {
  static SOURCES: Record<string, any>;
  static SOURCES_ARRAY: any[];
  static CACHE = {};

  static Generate(seed) {
    const constructor: any = this.prototype.constructor;
    return new constructor(seed);
  }

  static GetEntity(seed) {
    const Constructor: any = this.prototype.constructor;

    if (!seed) {
      throw new Error('Seed Must Be Provided');
    } else if (typeof seed === 'object') {
      return seed;
    }

    if (Constructor.SOURCES[seed]) {
      return Constructor.SOURCES[seed];
    }

    return Constructor.SOURCES_ARRAY.find(({ id, name, displayName }: any) =>
      [id, name, displayName].includes(seed)
    );
  }

  public name: string | number = 'ERROR';
  public id: string | number = 0;

  constructor(seed) {
    let source;
    const Constructor: any = this.constructor;

    if (Constructor.CACHE[seed]) {
      source = Constructor.CACHE[seed];
    } else {
      source = Constructor.GetEntity(seed);
    }

    if (source) {
      Constructor.CACHE[source.id] = source;
      Constructor.CACHE[seed] = source;
      Constructor.CACHE[source.name] = source;

      Object.assign(this, source);
    }
  }
}
