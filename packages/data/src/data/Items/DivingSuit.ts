import Item from '../../types/Item';

export const DivingSuit: Item = {
	"id": 202210,
	"name": "DivingSuit",
	"buildsInto": [
		202405,
		202415
	],
	"requirements": {
		"Rubber": 1
	},
	"stats": {
		"decreaseRecoveryToBasicAttack": 0.1,
		"defense": 9
	},
	"rarity": "Uncommon",
	"code": "잠수복",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A diving suit with filler between the inner and outer skin. It excels at maintaining body temperature and enduring higher pressure.",
	"buildsFrom": [
		202105,
		401105
	],
	"displayName": "Diving Suit",
	"apiMetaData": {
		"code": 202210,
		"category": "Armor",
		"type": "Chest"
	},
	"clientMetaData": {
		"type": "Chest",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
