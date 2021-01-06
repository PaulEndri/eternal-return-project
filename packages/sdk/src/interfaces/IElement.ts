export interface IElement<T extends string = any> {
  name: T | string;
  id: string | number;
}
