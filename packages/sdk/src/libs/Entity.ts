import { IElement } from '../interfaces';
import { DataCache } from './DataCache';

export class Entity implements IElement {
  static SOURCE_KEY = '';

  static get SOURCES() {
    const constructor: any = this.prototype.constructor;

    return DataCache[constructor.SOURCE_KEY];
  }

  static Generate(seed) {
    const constructor: any = this.prototype.constructor;

    return new constructor(seed);
  }

  static GetEntity(seed) {
    const constructor: any = this.prototype.constructor;

    if (!seed) {
      throw new Error('Seed Must Be Provided');
    } else if (typeof seed === 'object') {
      return seed;
    }

    if (constructor.SOURCES[seed]) {
      return constructor.SOURCES[seed];
    }

    return Object.values(
      constructor.SOURCES
    ).find(({ id, name, displayName }: any) =>
      [id, name, displayName].includes(seed)
    );
  }

  public name: string | number = 'ERROR';
  public id: string | number = 0;

  constructor(seed) {
    let source;
    const constructor: any = this.constructor;

    source = constructor.GetEntity(seed);

    if (source) {
      Object.assign(this, source);
    }
  }
}
