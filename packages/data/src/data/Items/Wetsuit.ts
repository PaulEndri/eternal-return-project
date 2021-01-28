import Item from '../../types/Item';

export const Wetsuit: Item = {
	"id": 202105,
	"name": "Wetsuit",
	"buildsInto": [
		202209,
		202210
	],
	"requirements": {},
	"stats": {
		"decreaseRecoveryToBasicAttack": 0.05,
		"defense": 1
	},
	"rarity": "Common",
	"code": "전신수영복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {
		"Alley": 7,
		"Beach": 6,
		"Dock": 7
	},
	"foundQuantity": 1,
	"description": "A kind of swimsuit that covers parts of the legs and arms or the whole body from neck down. Aka a wet suit!",
	"buildsFrom": [],
	"displayName": "Wetsuit",
	"apiMetaData": {
		"code": 202105,
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
