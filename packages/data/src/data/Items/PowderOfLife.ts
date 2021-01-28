import Item from '../../types/Item';

export const PowderOfLife: Item = {
	"id": 205301,
	"name": "PowderOfLife",
	"buildsInto": [
		205402,
		205403,
		401403
	],
	"requirements": {
		"Tree of Life": 1,
		"Stone": 1
	},
	"stats": {
		"hpRegen": 1.5,
		"spRegen": 1.5
	},
	"rarity": "Rare",
	"code": "생명의가루",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "A powder that summons the spirits. Better combined with other items to make something mystical.",
	"buildsFrom": [
		401208,
		112101
	],
	"displayName": "Powder of Life",
	"apiMetaData": {
		"code": 205301,
		"category": "Armor",
		"type": "Trinket"
	},
	"clientMetaData": {
		"type": "Accessory",
		"category": "Armor"
	},
	"droppedFrom": [
		6,
		7
	],
	"airSupply": false,
	"collectible": 0
}
