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
		"cooldownReduction": 0.1,
		"decreaseRecoveryToSkill": 1,
		"defense": 36,
		"increaseSkillDamage": 11
	},
	"rarity": "Epic",
	"code": "소드스토퍼",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "It is, quite literally, armor that protects from swords. The hooks on it catch and entangle blades",
	"buildsFrom": [
		203303,
		401101
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
