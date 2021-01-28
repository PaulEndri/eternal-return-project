import Item from '../../types/Item';

export const FabricArmor: Item = {
	"id": 202106,
	"name": "FabricArmor",
	"buildsInto": [
		202201,
		202305
	],
	"requirements": {},
	"stats": {
		"defense": 11
	},
	"rarity": "Common",
	"code": "천갑옷",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Temple": 8,
		"Archery Range": 6,
		"Cemetery": 7
	},
	"foundQuantity": 1,
	"description": "Armor made from fabric. It doesn't seem to protect you from much. Good luck.",
	"buildsFrom": [],
	"displayName": "Fabric Armor",
	"apiMetaData": {
		"code": 202106,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [
		4
	],
	"airSupply": false,
	"collectible": 0
}
