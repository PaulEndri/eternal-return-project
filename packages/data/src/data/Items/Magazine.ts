import Item from '../../types/Item';

export const Magazine: Item = {
	"id": 205303,
	"name": "Magazine",
	"buildsFrom": [
		{
			"name": "Box",
			"id": 205107
		},
		{
			"name": "Iron Sheet",
			"id": 401213
		}
	],
	"buildsInto": [
		{
			"name": "XCR",
			"id": 117405
		}
	],
	"requirements": {
		"Box": 1,
		"Scrap Metal": 1,
		"Hammer": 1
	},
	"stats": {
		"maxHp": 350,
		"preventBasicAttackDamaged": 6
	},
	"rarity": "Rare",
	"code": "탄창",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "You can't fire a gun with nothing in the magazine.",
	"displayName": "Magazine",
	"apiMetaData": {
		"code": 205303,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
