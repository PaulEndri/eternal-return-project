import Item from '../../types/Item';

export const StallionBow: Item = {
	"id": 114302,
	"name": "Stallion Bow",
	"buildsFrom": [
		{
			"name": "Mighty Bow",
			"id": 114303
		},
		{
			"name": "Stallion Medal",
			"id": 401109
		}
	],
	"buildsInto": [
		{
			"name": "Ancient bolt",
			"id": "Ancient bolt"
		}
	],
	"requirements": {
		"Bow": 1,
		"Rubber": 1,
		"Gunpowder": 1,
		"Stallion Medal": 1
	},
	"stats": {
		"attackPower": 20,
		"increaseBasicAttackDamage": 25
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A traditional Korean bow that can kill a tiger with a single arrow.",
	"apiMetaData": {
		"code": 114302,
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
