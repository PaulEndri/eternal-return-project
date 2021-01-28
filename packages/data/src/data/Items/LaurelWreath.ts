import Item from '../../types/Item';

export const LaurelWreath: Item = {
	"id": 201408,
	"name": "LaurelWreath",
	"buildsInto": [],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1,
		"Lighter": 1,
		"Hairband": 1,
		"Branch": 1
	},
	"stats": {
		"cooldownReduction": 0.1,
		"defense": 18,
		"hpRegen": 1.5,
		"maxSp": 580,
		"spRegen": 2,
		"preventBasicAttackDamaged": 15
	},
	"rarity": "Legend",
	"code": "월계관",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A crown made of branches of a laurel tree, which is a symbol of Apollo. Crowns symbolize wealth, but a laurel crown symbolizes honor.",
	"buildsFrom": [
		205403,
		201202
	],
	"displayName": "Laurel Wreath",
	"apiMetaData": {
		"code": 201408,
		"category": "Armor",
		"type": "Head"
	},
	"clientMetaData": {
		"type": "Head",
		"category": "Armor"
	},
	"droppedFrom": [],
	"airSupply": true,
	"collectible": 0
}
