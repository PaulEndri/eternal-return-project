import Item from '../../types/Item';

export const TrueSamadhiFire: Item = {
	"id": 205403,
	"name": "TrueSamadhiFire",
	"buildsInto": [
		102409,
		107406,
		201408,
		202416
	],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Lighter": 1
	},
	"stats": {
		"hpRegen": 1.5,
		"spRegen": 1.5,
		"preventBasicAttackDamaged": 13
	},
	"rarity": "Epic",
	"code": "삼매진화",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Flames captured in a delicate glass sphere. Ascetics used it to escape.",
	"buildsFrom": [
		205301,
		401107
	],
	"displayName": "True Samadhi Fire",
	"apiMetaData": {
		"code": 205403,
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
