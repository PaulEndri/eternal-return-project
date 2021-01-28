import Item from '../../types/Item';

export const SaintsRelic: Item = {
	"id": 205202,
	"name": "SaintsRelic",
	"buildsInto": [
		101401,
		104402,
		112401,
		202408,
		205405
	],
	"requirements": {
		"Cross": 1,
		"Holy Grail": 1
	},
	"stats": {
		"hpRegenRatio": 1.5,
		"preventBasicAttackDamaged": 8
	},
	"rarity": "Uncommon",
	"code": "성자의유산",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "The last relic of one who fought to save those who have fallen, despite being betrayed, tortured, and crucified.",
	"buildsFrom": [
		205109,
		205108
	],
	"displayName": "Saint's Relic",
	"apiMetaData": {
		"code": 205202,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
