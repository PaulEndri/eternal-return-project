export interface IElement<T extends string | number = any> {
  name: T | string;
  id: string | number;
}
