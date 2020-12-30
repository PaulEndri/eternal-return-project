import Item from '../../types/Item';

export const Sharper: Item = {
	"id": 119301,
	"name": "Sharper",
	"buildsFrom": [
		{
			"name": "Nunchaku",
			"id": 119201
		},
		{
			"name": "Nail",
			"id": 401101
		}
	],
	"buildsInto": [
		{
			"name": "The Smiting Dragon",
			"id": 119401
		}
	],
	"requirements": {
		"Steel Chain": 1,
		"Scrap Metal": 1,
		"Nail": 1
	},
	"stats": {
		"attackPower": 19,
		"decreaseRecoveryToSkill": 1
	},
	"rarity": "Rare",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "",
	"apiMetaData": {
		"code": 119301,
		"category": "Weapon",
		"type": "Nunchaku"
	},
	"clientMetaData": {
		"type": "Nunchaku",
		"category": "Weapon"
	},
	"droppedFrom": [],
	"airSupply": false,
	"collectible": 0
}
