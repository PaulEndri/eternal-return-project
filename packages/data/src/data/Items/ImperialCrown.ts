import Item from '../../types/Item';

export const ImperialCrown: Item = {
	"id": 201409,
	"name": "ImperialCrown",
	"buildsInto": [],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Pickaxe": 1,
		"Gemstone": 2,
		"Hammer": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 18,
		"maxHp": 300,
		"maxSp": 500,
		"preventSkillDamagedRatio": 0.08
	},
	"rarity": "Epic",
	"code": "제국왕관",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A crown built for the first and only monarch of the Kingdom of Finland, Friedrich Karl. However, due to the adoption of the republican constitution before the coronation, the crown has never been used since.",
	"buildsFrom": [
		201401,
		401204
	],
	"displayName": "Imperial Crown",
	"apiMetaData": {
		"code": 201409,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
