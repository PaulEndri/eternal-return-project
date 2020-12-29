import { IElement } from './IElement';

export interface IBasicItem<T extends string, K = IElement> {
	name: T;
	href: string;
	image?: string;
	rarity: string;
	stats: Record<string, any>;
	description: string;
	maxStacks: string;
	foundQuantity: string;
	requirements?: Record<string, number>;
	buildsInto?: string[];
	buildsFrom?: string[];
	locations?: Record<string, number>;
	droppedFrom?: Record<string, K>;
}
