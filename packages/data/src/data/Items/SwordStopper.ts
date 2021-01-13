import Item from '../../types/Item';

export const SwordStopper: Item = {
	"id": 203402,
	"name": "SwordStopper",
	"buildsInto": [],
	"requirements": {
		"Bandage": 1,
		"Leather": 1,
		"Scrap Metal": 1,
		"Hammer": 1,
		"Nail": 1
	},
	"stats": {
		"decreaseRecoveryToBasicAttack": 1,
		"defense": 28,
		"preventBasicAttackDamaged": 11
	},
	"rarity": "Epic",
	"code": "소드스토퍼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It is, quite literally, armor that protects from swords. The hooks on it catch and entangle blades",
	"buildsFrom": [
		{
			"name": "Scissors",
			"id": 203303
		},
		{
			"name": "Scissors",
			"id": 401101
		}
	],
	"displayName": "Sword Stopper",
	"apiMetaData": {
		"code": 203402,
		"category": "Armor",
		"type": "Arm"
	},
	"clientMetaData": {
		"type": "Arm",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
