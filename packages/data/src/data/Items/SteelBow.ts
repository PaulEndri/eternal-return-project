import Item from '../../types/Item';

export const SteelBow: Item = {
	"id": 115401,
	"name": "SteelBow",
	"buildsFrom": [
		{
			"name": "Crossbow",
			"id": 115202
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		}
	],
	"buildsInto": [
		{
			"name": "The Legend of The General",
			"id": 115402
		}
	],
	"requirements": {
		"Short Crossbow": 1,
		"Bamboo": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"attackPower": 60,
		"charges": 6
	},
	"rarity": "Rare",
	"code": "철궁",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow made out of steel. It might be heavy to some.",
	"displayName": "Steel Bow",
	"apiMetaData": {
		"code": 115401,
		"category": "Weapon",
		"type": "CrossBow"
	},
	"clientMetaData": {
		"type": "CrossBow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
