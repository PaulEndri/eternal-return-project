import Item from '../../types/Item';

export const Pickaxe: Item = {
	"id": 105102,
	"name": "Pickaxe",
	"buildsFrom": [],
	"buildsInto": [
		{
			"name": "Chain Scythe",
			"id": 105201
		},
		{
			"name": "Gold",
			"id": 401214
		}
	],
	"requirements": {},
	"stats": {
		"attackPower": 15
	},
	"rarity": "Common",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Pond": 7,
		"Cemetery": 7,
		"Forest": 8,
		"Beach": 7
	},
	"foundQuantity": 1,
	"description": "Can we consider it a blade attack if you swing the pickaxe and attack your opponent..?",
	"apiMetaData": {
		"code": 105102,
		"category": "Weapon",
		"type": "Axe"
	},
	"clientMetaData": {
		"type": "Axe",
		"category": "Weapon"
	},
	"droppedFrom": [
		{
			"name": "Bat",
			"id": 2
		}
	],
	"airSupply": false,
	"collectible": 0
}
