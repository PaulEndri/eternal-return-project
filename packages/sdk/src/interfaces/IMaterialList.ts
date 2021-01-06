import { Items } from '../constants';

export type NamedMaterialList = Record<Partial<keyof typeof Items>, number>;
export type CodedMaterialList = Record<number, number>;
