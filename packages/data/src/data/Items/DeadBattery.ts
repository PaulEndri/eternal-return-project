import Item from '../../types/Item';

export const DeadBattery: Item = {
	"id": 401205,
	"name": "DeadBattery",
	"buildsInto": [
		109402,
		112303,
		121202,
		401306
	],
	"requirements": {
		"Battery": 1,
		"Water": 1
	},
	"stats": {},
	"rarity": "Uncommon",
	"code": "방전전지",
	"stackable": true,
	"maxStacks": 3,
	"locations": {},
	"foundQuantity": 2,
	"description": "Is a dead battery still a battery? Just throw it at someone!",
	"buildsFrom": [
		401110,
		301102
	],
	"displayName": "Dead Battery",
	"apiMetaData": {
		"code": 401205,
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
