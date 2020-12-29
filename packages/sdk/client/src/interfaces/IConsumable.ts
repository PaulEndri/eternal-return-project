export interface IConsumable {
	code: number;
	name: string;
	itemType: string;
	consumableType: string;
	consumableTag: string;
	itemGrade: string;
	craftAnimTrigger: string;
	stackable: number;
	initialCount: number;
	makeMaterial1: number;
	makeMaterial2: number;
	heal: number;
	hpRecover: number;
	spRecover: number;
}
