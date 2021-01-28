import Item from '../../types/Item';

export const Motor: Item = {
	"id": 401303,
	"name": "Motor",
	"buildsInto": [
		101404,
		108404,
		117402,
		119402
	],
	"requirements": {
		"Battery": 1,
		"Piano Wire": 1,
		"Scrap Metal": 1
	},
	"stats": {},
	"rarity": "Rare",
	"code": "모터",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 1,
	"description": "A motor itself is useless, but you can probably turn it into something great.",
	"buildsFrom": [
		401211,
		401106
	],
	"displayName": "Motor",
	"apiMetaData": {
		"code": 401303,
		"category": "Misc",
		"type": "Material"
	},
	"clientMetaData": {
		"type": "Material",
		"category": "Misc"
	},
	"droppedFrom": [
		5,
		6
	],
	"airSupply": true,
	"collectible": 0
}
