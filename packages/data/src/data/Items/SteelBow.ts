import Item from '../../types/Item';

export const SteelBow: Item = {
	"id": 115401,
	"name": "SteelBow",
	"buildsInto": [
		115402,
		115402
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
	"buildsFrom": [
		115202,
		401213
	],
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
