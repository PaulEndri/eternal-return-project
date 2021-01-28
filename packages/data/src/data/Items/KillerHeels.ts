import Item from '../../types/Item';

export const KillerHeels: Item = {
	"id": 204403,
	"name": "KillerHeels",
	"buildsInto": [],
	"requirements": {
		"Slippers": 1,
		"Scrap Metal": 1,
		"Glass Bottle": 1,
		"Stone": 1
	},
	"stats": {
		"attackPower": 5,
		"criticalStrikeChance": 0.1,
		"moveSpeed": 0.16,
		"spRegen": 0.8
	},
	"rarity": "Rare",
	"code": "매버릭러너",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Heels sharp enough to be used as weapons themselves.",
	"buildsFrom": [
		204204,
		401211
	],
	"displayName": "Killer Heels",
	"apiMetaData": {
		"code": 204403,
		"category": "Armor",
		"type": "Leg"
	},
	"clientMetaData": {
		"type": "Leg",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
