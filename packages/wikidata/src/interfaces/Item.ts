import { IElement } from './IElement';

export interface Item<K = IElement> {
	name: string;
	href: string;
	code?: number;
	rarity: string;
	stats: Record<string, any>;
	description?: string;
	maxStacks: string | number;
	foundQuantity: string | number;
	requirements?: Record<string, number>;
	buildsInto?: string[];
	buildsFrom?: string[];
	locations?: Record<string, number>;
	droppedFrom?: Record<string, K>;
}
