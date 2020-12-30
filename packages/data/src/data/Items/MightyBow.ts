import Item from '../../types/Item';

export const MightyBow: Item = {
	"id": 114303,
	"name": "Mighty Bow",
	"buildsFrom": [
		{
			"name": "Longbow",
			"id": 114202
		},
		{
			"name": "Gunpowder",
			"id": 401121
		}
	],
	"buildsInto": [
		{
			"name": "Stallion Bow",
			"id": 114302
		}
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Gunpowder": 1
	},
	"stats": {
		"attackPower": 20,
		"increaseBasicAttackDamage": 11
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A bow that can be made by combining a bow and gunpowder. While hiding in darkness, you must draw the bow quietly, but quickly.",
	"apiMetaData": {
		"code": 114303,
		"category": "Weapon",
		"type": "Bow"
	},
	"clientMetaData": {
		"type": "Bow",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
