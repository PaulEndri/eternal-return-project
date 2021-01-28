import Item from '../../types/Item';

export const Dress: Item = {
	"id": 202207,
	"name": "Dress",
	"buildsInto": [
		202304,
		202416
	],
	"requirements": {
		"Cloth": 1,
		"Scissors": 1
	},
	"stats": {
		"attackPower": 8,
		"defense": 8,
		"spRegenRatio": 1
	},
	"rarity": "Uncommon",
	"code": "드레스",
	"stackable": false,
	"maxStacks": 1,
	"locations": {},
	"foundQuantity": 1,
	"description": "Historically, not only women wore dresses as casual attire. In fact, it's only been about 600 years since men started wearing pants.",
	"buildsFrom": [
		401113,
		101101
	],
	"displayName": "Dress",
	"apiMetaData": {
		"code": 202207,
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
