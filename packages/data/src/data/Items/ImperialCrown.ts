import Item from '../../types/Item';

export const ImperialCrown: Item = {
	"id": 201409,
	"name": "Imperial Crown",
	"buildsFrom": [
		{
			"name": "Crown",
			"id": 201401
		},
		{
			"name": "Ruby",
			"id": 401204
		}
	],
	"buildsInto": [],
	"requirements": {
		"Hairband": 1,
		"Branch": 1,
		"Pickaxe": 1,
		"Gemstone": 2,
		"Hammer": 1
	},
	"stats": {
		"defense": 18,
		"maxHp": 300,
		"maxSp": 500,
		"increaseSkillDamageRatio": 0.1
	},
	"rarity": "Epic",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A crown built for the first and only monarch of the Kingdom of Finland, Friedrich Karl. However, due to the adoption of the republican constitution before the coronation, the crown has never been used since.",
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
