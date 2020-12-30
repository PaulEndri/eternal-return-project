import { IAnimal, ILocation, IRawItem } from '../interfaces';

declare module 'animals.json' {
	const contents: IAnimal[];
	export default contents;
}

declare module 'items.json' {
	const contents: IRawItem[];
	export default contents;
}

declare module 'locations.json' {
	const contents: ILocation[];
	export default contents;
}
