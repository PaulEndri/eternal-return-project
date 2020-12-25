import { IElement } from './IElement';

export interface IBasicItem<T extends string, K = IElement> {
	name: T;
	href: string;
	image?: string;
	rarity: string;
	stats: string[];
	description: string;
	maxStacks: string;
	foundQuantity: string;
	requirements?: K[];
	buildsInto?: Record<string, K>;
	buildsFrom?: K[];
	foundLocations?: Record<string, K>;
	droppedFrom?: Record<string, K>;
}
